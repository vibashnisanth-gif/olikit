export type { CurrencyCode, CurrencyInfo, SalaryEquivalents } from "./types"
export { SUPPORTED_CURRENCIES } from "./types"
import type { CurrencyCode as CC } from "./types"
import { formatSalary } from "./format"

const SLUG_TO_CURRENCY: Record<string, CC> = {
  us: "USD", uk: "GBP", au: "AUD", ca: "CAD", nz: "NZD", in: "INR", sg: "SGD",
}

export function slugToCurrency(slug: string): CC {
  return SLUG_TO_CURRENCY[slug] ?? "USD"
}

export function formatSalaryBySlug(amount: number, slug: string, options?: { compact?: boolean; showCode?: boolean }): string {
  return formatSalary(amount, slugToCurrency(slug), options)
}
export {
  convert,
  convertSalary,
  getCurrencyInfo,
  getCurrencySymbol,
  getCurrencyLocale,
  BASE_RATES,
} from "./rates"
export {
  formatSalary,
  formatSalaryCompact,
  formatSalaryFull,
  formatINR,
  getSalaryEquivalents,
  formatSalaryPair,
} from "./format"
