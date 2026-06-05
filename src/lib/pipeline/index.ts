import type { D1Database } from '../db/client';

export interface PipelineReport {
  timestamp: string;
  stages: { name: string; status: string; detail?: string; rowsAffected?: number }[];
  durationMs: number;
}

async function stageSalary(db: D1Database): Promise<string> {
  const result = await db.prepare(`SELECT COUNT(*) as count FROM salaries`).first<{ count: number }>();
  return `Salary table has ${result?.count ?? 0} rows`;
}

async function stageTax(db: D1Database): Promise<string> {
  const result = await db.prepare(`SELECT COUNT(*) as count FROM country_tax_summary`).first<{ count: number }>();
  return `Tax table has ${result?.count ?? 0} rows`;
}

async function stageCostOfLiving(db: D1Database): Promise<string> {
  const result = await db.prepare(`SELECT COUNT(*) as count FROM col_entries`).first<{ count: number }>();
  return `Cost-of-living table has ${result?.count ?? 0} rows`;
}

export async function runAllPipelines(db: D1Database): Promise<PipelineReport> {
  const start = Date.now();
  const report: PipelineReport = { timestamp: new Date().toISOString(), stages: [], durationMs: 0 };

  const stages = [
    { name: 'salary', fn: () => stageSalary(db) },
    { name: 'tax', fn: () => stageTax(db) },
    { name: 'cost-of-living', fn: () => stageCostOfLiving(db) },
  ];

  for (const stage of stages) {
    try {
      const detail = await stage.fn();
      report.stages.push({ name: stage.name, status: 'completed', detail });
    } catch (err) {
      report.stages.push({ name: stage.name, status: 'failed', detail: String(err) });
    }
  }

  report.durationMs = Date.now() - start;
  return report;
}

async function main() {
  console.log('Pipeline runner (requires D1 bindings)');
  console.log(
    'Run with: wrangler pages dev --d1 SALARY_DB=olikit-salary-db --d1 TAX_DB=olikit-tax-db --d1 COST_OF_LIVING_DB=olikit-col-db'
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}
