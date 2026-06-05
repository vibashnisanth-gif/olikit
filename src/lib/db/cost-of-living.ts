import type { D1Database } from './client';
import { paginate, buildWhereClause } from './client';

export class CostOfLivingDB {
  constructor(private db: D1Database) {}

  async getEntries(params: {
    countryCode?: string;
    cityId?: number;
    categorySlug?: string;
    year?: number;
    page?: number;
    pageSize?: number;
  }) {
    const { offset, limit } = paginate(params.page, params.pageSize);
    const conditions = buildWhereClause([
      { sql: 'e.country_code = ?', params: params.countryCode ? [params.countryCode] : [] },
      { sql: 'e.city_id = ?', params: params.cityId ? [params.cityId] : [] },
      { sql: 'e.category_slug = ?', params: params.categorySlug ? [params.categorySlug] : [] },
      { sql: 'e.year = ?', params: params.year ? [params.year] : [] },
    ]);

    const base = `FROM col_entries e JOIN cities ct ON e.city_id = ct.id
      JOIN countries c ON ct.country_id = c.id ${conditions.clause}`;

    const count = await this.db.prepare(`SELECT COUNT(*) as total ${base}`)
      .bind(...conditions.params).first<{ total: number }>();

    const data = await this.db.prepare(
      `SELECT e.*, ct.name as city_name, c.name as country_name ${base}
       ORDER BY e.category_slug, e.item_name LIMIT ? OFFSET ?`
    ).bind(...conditions.params, limit, offset).all();

    return { data: data.results, total: count?.total ?? 0 };
  }

  async getCitySummary(cityId: number, year?: number) {
    const targetYear = year ?? new Date().getFullYear();
    return this.db.prepare(`
      SELECT cs.*, ct.name as city_name, c.name as country_name
      FROM col_city_summary cs JOIN cities ct ON cs.city_id = ct.id
      JOIN countries c ON ct.country_id = c.id
      WHERE cs.city_id = ? AND cs.year = ?`
    ).bind(cityId, targetYear).first();
  }

  async getTopCities(countryCode?: string, year?: number, limit = 20) {
    const targetYear = year ?? new Date().getFullYear();
    const conditions = buildWhereClause([
      { sql: 'cs.country_code = ?', params: countryCode ? [countryCode] : [] },
      { sql: 'cs.year = ?', params: [targetYear] },
    ]);
    return this.db.prepare(`
      SELECT cs.*, ct.name as city_name, c.name as country_name
      FROM col_city_summary cs JOIN cities ct ON cs.city_id = ct.id
      JOIN countries c ON ct.country_id = c.id
      ${conditions.clause} ORDER BY cs.total_monthly_cost_single DESC LIMIT ?`
    ).bind(...conditions.params, limit).all();
  }
}
