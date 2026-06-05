import type { D1Database } from './client';
import { SalaryDB } from './salary';
import { TaxDB } from './tax';
import { CostOfLivingDB } from './cost-of-living';

export interface D1Bindings {
  SALARY_DB: D1Database;
  TAX_DB: D1Database;
  COST_OF_LIVING_DB: D1Database;
}

function getBindings(): D1Bindings | null {
  try {
    const env = process.env as unknown as Partial<D1Bindings>;
    if (env.SALARY_DB && env.TAX_DB && env.COST_OF_LIVING_DB) {
      return env as D1Bindings;
    }
  } catch {}
  return null;
}

export function createServices(bindings?: D1Bindings) {
  const b = bindings ?? getBindings();
  if (!b) {
    throw new Error(
      'D1 database bindings are not available. ' +
      'Run with `wrangler pages dev` or set SALARY_DB, TAX_DB, COST_OF_LIVING_DB env vars.'
    );
  }
  return {
    salaryDB: new SalaryDB(b.SALARY_DB),
    taxDB: new TaxDB(b.TAX_DB),
    colDB: new CostOfLivingDB(b.COST_OF_LIVING_DB),
  };
}
