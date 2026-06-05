import type { D1Database } from './client';

export class TaxDB {
  constructor(private db: D1Database) {}

  async getCountrySummary(countryCode: string, year?: number) {
    const targetYear = year ?? new Date().getFullYear();
    return this.db.prepare(
      `SELECT * FROM country_tax_summary WHERE country_code = ? AND year = ?`
    ).bind(countryCode, targetYear).first();
  }

  async getRates(countryCode: string, year?: number) {
    const targetYear = year ?? new Date().getFullYear();
    return this.db.prepare(
      `SELECT tr.*, tb.id as bracket_id, tb.bracket_order, tb.min_amount, tb.max_amount, tb.rate as bracket_rate, tb.description as bracket_desc
       FROM tax_rates tr LEFT JOIN tax_brackets tb ON tr.id = tb.tax_rate_id
       WHERE tr.country_code = ? AND tr.year = ? ORDER BY tr.tax_type_slug, tb.bracket_order`
    ).bind(countryCode, targetYear).all();
  }

  async calculateIncomeTax(countryCode: string, annualIncome: number, year?: number) {
    const targetYear = year ?? new Date().getFullYear();
    const rate = await this.db.prepare(
      `SELECT * FROM tax_rates WHERE country_code = ? AND tax_type_slug = 'income_tax' AND year = ?`
    ).bind(countryCode, targetYear).first<{ id: number; is_progressive: number; base_rate: number | null }>();

    if (!rate) return null;

    if (!rate.is_progressive && rate.base_rate) {
      const totalTax = Math.round(annualIncome * rate.base_rate);
      return {
        gross_income: annualIncome,
        total_tax: totalTax,
        effective_tax_rate: Math.round(rate.base_rate * 10000) / 100,
        marginal_tax_rate: Math.round(rate.base_rate * 10000) / 100,
        after_tax_income: annualIncome - totalTax,
      };
    }

    const brackets = await this.db.prepare(
      `SELECT * FROM tax_brackets WHERE tax_rate_id = ? ORDER BY bracket_order ASC`
    ).bind(rate.id).all<{ min_amount: number; max_amount: number | null; rate: number }>();

    let totalTax = 0;
    let marginalRate = 0;
    const bracketsUsed: { min: number; max: number | null; rate: number; tax: number }[] = [];

    for (const b of brackets.results) {
      const bracketMax = b.max_amount ?? Infinity;
      const bracketSize = bracketMax - b.min_amount;
      const taxableInBracket = Math.min(Math.max(0, annualIncome - b.min_amount), bracketSize);
      const taxInBracket = taxableInBracket * b.rate;

      if (taxableInBracket > 0) {
        totalTax += taxInBracket;
        marginalRate = b.rate;
        bracketsUsed.push({ min: b.min_amount, max: b.max_amount, rate: b.rate, tax: Math.round(taxInBracket) });
      }
    }

    return {
      gross_income: annualIncome,
      total_tax: Math.round(totalTax),
      effective_tax_rate: Math.round((totalTax / annualIncome) * 10000) / 100,
      marginal_tax_rate: Math.round(marginalRate * 10000) / 100,
      after_tax_income: Math.round(annualIncome - totalTax),
      brackets_used: bracketsUsed,
    };
  }
}
