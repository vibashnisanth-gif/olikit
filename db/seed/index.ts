import type { D1Database, D1PreparedStatement } from '../../src/lib/db/client';
import {
  seedCountries, seedCities, seedProfessions, seedSalaries,
  seedTaxSummaries, seedIncomeTaxBrackets, seedCostOfLiving,
} from './data';

export interface SeedSummary {
  countries: number;
  cities: number;
  professions: number;
  salaries: number;
  taxSummaries: number;
  taxBracketsCountries: number;
  costOfLiving: number;
}

export function summarize(): SeedSummary {
  return {
    countries: seedCountries.length,
    cities: seedCities.length,
    professions: seedProfessions.length,
    salaries: seedSalaries.length,
    taxSummaries: seedTaxSummaries.length,
    taxBracketsCountries: seedIncomeTaxBrackets.length,
    costOfLiving: seedCostOfLiving.length,
  };
}

export async function seedAll(salaryDB: D1Database, taxDB: D1Database, colDB: D1Database): Promise<SeedSummary> {
  const countryIdMap = new Map<string, number>();
  const cityIdMap = new Map<string, number>();
  const professionIdMap = new Map<string, number>();

  // 1. Seed countries
  for (const c of seedCountries) {
    const existing = await salaryDB.prepare('SELECT id FROM countries WHERE code = ?')
      .bind(c.code).first<{ id: number }>();
    if (existing) {
      countryIdMap.set(c.code, existing.id);
    } else {
      const result = await salaryDB.prepare(
        `INSERT INTO countries (code, name, currency_code, region, population)
         VALUES (?, ?, ?, ?, ?)`
      ).bind(c.code, c.name, c.currency_code, c.region, c.population ?? null).run();
      const inserted = await salaryDB.prepare('SELECT id FROM countries WHERE code = ?')
        .bind(c.code).first<{ id: number }>();
      if (inserted) countryIdMap.set(c.code, inserted.id);
    }
  }

  // 2. Seed cities
  for (const city of seedCities) {
    const countryId = countryIdMap.get(city.country_code);
    if (!countryId) continue;
    const key = `${city.country_code}:${city.name}:${city.state_or_region ?? ''}`;
    const existing = await salaryDB.prepare(
      'SELECT id FROM cities WHERE country_id = ? AND name = ? AND (state_or_region IS ? OR state_or_region = ?)'
    ).bind(countryId, city.name, city.state_or_region ?? null, city.state_or_region ?? '').first<{ id: number }>();
    if (existing) {
      cityIdMap.set(key, existing.id);
    } else {
      await salaryDB.prepare(
        `INSERT INTO cities (country_id, name, state_or_region, latitude, longitude, population, is_capital)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      ).bind(countryId, city.name, city.state_or_region ?? null, city.latitude ?? null, city.longitude ?? null, city.population ?? null, city.is_capital).run();
      const inserted = await salaryDB.prepare(
        'SELECT id FROM cities WHERE country_id = ? AND name = ? AND (state_or_region IS ? OR state_or_region = ?)'
      ).bind(countryId, city.name, city.state_or_region ?? null, city.state_or_region ?? '').first<{ id: number }>();
      if (inserted) cityIdMap.set(key, inserted.id);
    }
  }

  // 3. Seed professions
  for (const p of seedProfessions) {
    const existing = await salaryDB.prepare('SELECT id FROM professions WHERE slug = ?')
      .bind(p.slug).first<{ id: number }>();
    if (existing) {
      professionIdMap.set(p.slug, existing.id);
    } else {
      await salaryDB.prepare(
        'INSERT INTO professions (slug, title, category, description) VALUES (?, ?, ?, ?)'
      ).bind(p.slug, p.title, p.category, p.description ?? null).run();
      const inserted = await salaryDB.prepare('SELECT id FROM professions WHERE slug = ?')
        .bind(p.slug).first<{ id: number }>();
      if (inserted) professionIdMap.set(p.slug, inserted.id);
    }
  }

  // 4. Seed salaries
  for (const s of seedSalaries) {
    const countryId = countryIdMap.get(s.country_code);
    const professionId = professionIdMap.get(s.profession_slug);
    if (!countryId || !professionId) continue;

    const existing = await salaryDB.prepare(
      'SELECT id FROM salaries WHERE country_id = ? AND profession_id = ? AND year = ? AND city_id IS NULL AND experience_level = ?'
    ).bind(countryId, professionId, s.year, s.experience_level).first<{ id: number }>();
    if (!existing) {
      await salaryDB.prepare(
        `INSERT INTO salaries (country_id, profession_id, currency_code, min_annual, avg_annual, max_annual,
          median_annual, p10_annual, p25_annual, p75_annual, p90_annual, experience_level, year)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        countryId, professionId, s.currency_code,
        s.min_annual ?? null, s.avg_annual, s.max_annual ?? null,
        s.median_annual ?? null, s.p10_annual ?? null, s.p25_annual ?? null,
        s.p75_annual ?? null, s.p90_annual ?? null,
        s.experience_level, s.year
      ).run();
    }
  }

  // 5. Seed tax summaries
  for (const t of seedTaxSummaries) {
    const existing = await taxDB.prepare(
      'SELECT id FROM country_tax_summary WHERE country_code = ? AND year = ?'
    ).bind(t.country_code, t.year).first<{ id: number }>();
    if (!existing) {
      await taxDB.prepare(
        `INSERT INTO country_tax_summary (country_code, year, top_income_tax_rate, corporate_tax_rate, vat_rate,
          social_security_employer, social_security_employee, capital_gains_rate, overall_tax_burden_pct)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        t.country_code, t.year, t.top_income_tax_rate, t.corporate_tax_rate, t.vat_rate,
        t.social_security_employer, t.social_security_employee, t.capital_gains_rate, t.overall_tax_burden_pct
      ).run();
    }
  }

  // 6. Seed income tax brackets
  for (const tb of seedIncomeTaxBrackets) {
    const existingRate = await taxDB.prepare(
      'SELECT id FROM tax_rates WHERE country_code = ? AND tax_type_slug = ? AND year = ?'
    ).bind(tb.country_code, 'income_tax', tb.year).first<{ id: number }>();
    let rateId: number;
    if (existingRate) {
      rateId = existingRate.id;
    } else {
      const result = await taxDB.prepare(
        `INSERT INTO tax_rates (country_code, tax_type_slug, year, description, is_progressive, base_rate)
         VALUES (?, ?, ?, ?, ?, ?)`
      ).bind(tb.country_code, 'income_tax', tb.year, 'Personal income tax brackets', 1, null).run();
      const inserted = await taxDB.prepare(
        'SELECT id FROM tax_rates WHERE country_code = ? AND tax_type_slug = ? AND year = ?'
      ).bind(tb.country_code, 'income_tax', tb.year).first<{ id: number }>();
      if (!inserted) continue;
      rateId = inserted.id;
    }

    for (let i = 0; i < tb.brackets.length; i++) {
      const b = tb.brackets[i];
      const existingBracket = await taxDB.prepare(
        'SELECT id FROM tax_brackets WHERE tax_rate_id = ? AND bracket_order = ?'
      ).bind(rateId, i).first<{ id: number }>();
      if (!existingBracket) {
        await taxDB.prepare(
          `INSERT INTO tax_brackets (tax_rate_id, bracket_order, min_amount, max_amount, rate)
           VALUES (?, ?, ?, ?, ?)`
        ).bind(rateId, i, b.min, b.max, b.rate).run();
      }
    }
  }

  // 7. Seed cost-of-living entries
  for (const col of seedCostOfLiving) {
    const countryId = countryIdMap.get(col.country_code);
    if (!countryId) continue;
    const cityKey = `${col.country_code}:${col.city_name}:`;
    const cityId = cityIdMap.get(cityKey);
    if (!cityId) continue;

    const existing = await colDB.prepare(
      'SELECT id FROM col_entries WHERE country_code = ? AND city_id = ? AND category_slug = ? AND item_name = ? AND year = ?'
    ).bind(col.country_code, cityId, col.category_slug, col.item_name, col.year).first<{ id: number }>();
    if (!existing) {
      await colDB.prepare(
        `INSERT INTO col_entries (country_code, city_id, category_slug, item_name, avg_cost, currency_code, unit, frequency, year)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(col.country_code, cityId, col.category_slug, col.item_name, col.avg_cost, col.currency_code, col.unit ?? null, col.frequency, col.year).run();
    }
  }

  return summarize();
}

async function main() {
  console.log('Seeder requires D1 database bindings.');
  console.log('Run with: npx tsx db/seed/index.ts');
  console.log('Or deploy and run via: wrangler pages dev --d1 ...\n');
  const summary = summarize();
  console.log('Seed data available:', JSON.stringify(summary, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}
