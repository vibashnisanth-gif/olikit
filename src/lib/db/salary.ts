import type { D1Database } from './client';
import { paginate, buildWhereClause } from './client';

export interface SalaryRow {
  id: number;
  country_id: number;
  city_id: number | null;
  profession_id: number;
  currency_code: string;
  min_annual: number | null;
  avg_annual: number;
  median_annual: number | null;
  p10_annual: number | null;
  p25_annual: number | null;
  p75_annual: number | null;
  p90_annual: number | null;
  experience_level: string;
  year: number;
}

export class SalaryDB {
  constructor(private db: D1Database) {}

  async query(params: {
    countryCode?: string;
    professionSlug?: string;
    year?: number;
    page?: number;
    pageSize?: number;
  }) {
    const { offset, limit } = paginate(params.page, params.pageSize);
    const conditions = buildWhereClause([
      { sql: 'c.code = ?', params: params.countryCode ? [params.countryCode] : [] },
      { sql: 'p.slug = ?', params: params.professionSlug ? [params.professionSlug] : [] },
      { sql: 's.year = ?', params: params.year ? [params.year] : [] },
    ]);

    const base = `FROM salaries s JOIN countries c ON s.country_id = c.id
      JOIN professions p ON s.profession_id = p.id ${conditions.clause}`;

    const countResult = await this.db.prepare(`SELECT COUNT(*) as total ${base}`)
      .bind(...conditions.params).first<{ total: number }>();

    const data = await this.db.prepare(`
      SELECT s.*, c.code as country_code, c.name as country_name,
        p.slug as profession_slug, p.title as profession_title
      ${base} ORDER BY s.avg_annual DESC LIMIT ? OFFSET ?`)
      .bind(...conditions.params, limit, offset).all<SalaryRow & { country_code: string; country_name: string }>();

    return { data: data.results, total: countResult?.total ?? 0 };
  }

  async getTopPaid(countryCode: string, year?: number, limit = 20) {
    const targetYear = year ?? new Date().getFullYear();
    const result = await this.db.prepare(`
      SELECT s.*, c.code as country_code, c.name as country_name,
        p.slug as profession_slug, p.title as profession_title
      FROM salaries s JOIN countries c ON s.country_id = c.id
      JOIN professions p ON s.profession_id = p.id
      WHERE c.code = ? AND s.year = ? AND s.city_id IS NULL
      ORDER BY s.avg_annual DESC LIMIT ?`)
      .bind(countryCode, targetYear, limit).all();
    return result.results;
  }

  async compare(professionSlug: string, countryA: string, countryB: string, year?: number) {
    const targetYear = year ?? new Date().getFullYear();
    return this.db.prepare(`
      SELECT p.title as profession_title,
        cA.code as country_a_code, cA.name as country_a_name,
        sA.avg_annual as country_a_avg, sA.median_annual as country_a_median,
        cB.code as country_b_code, cB.name as country_b_name,
        sB.avg_annual as country_b_avg, sB.median_annual as country_b_median,
        ROUND(((sA.avg_annual - sB.avg_annual) * 1.0 / sB.avg_annual) * 100, 2) as difference_pct
      FROM salaries sA JOIN countries cA ON sA.country_id = cA.id
      JOIN salaries sB ON sA.profession_id = sB.profession_id
      JOIN countries cB ON sB.country_id = cB.id
      JOIN professions p ON sA.profession_id = p.id
      WHERE cA.code = ? AND cB.code = ? AND p.slug = ?
        AND sA.year = ? AND sB.year = ? AND sA.city_id IS NULL AND sB.city_id IS NULL`)
      .bind(countryA, countryB, professionSlug, targetYear, targetYear).first();
  }
}
