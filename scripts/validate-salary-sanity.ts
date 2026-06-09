import { professions } from "../src/lib/content/professions-data"
import { getLocale } from "../src/lib/seo/locales"
import { USD_EXCHANGE_RATES } from "../src/lib/content/country-registry"
import { writeFileSync } from "fs"
import { resolve } from "path"
const __dirname = import.meta.dirname

const LIMITS = {
  countryAvgSalary: 300_000,
  softwareEngineer: 500_000,
  doctor: 1_000_000,
} as const

interface ValidationError {
  source: string
  value: number
  usdValue: number
  limit: number
  message: string
}

const errors: ValidationError[] = []
const warnings: string[] = []

function getCurrencyCode(slug: string): string {
  return getLocale(slug)?.currency.code ?? "USD"
}

function toUSD(amount: number, currencyCode: string): number {
  const rate = (USD_EXCHANGE_RATES as Record<string, number>)[currencyCode.toLowerCase()]
  if (!rate) return amount
  return Math.round(amount * rate)
}

const professionMaxUsd: Record<string, number> = {}

for (const prof of professions) {
  let maxUsd = 0

  for (const [countrySlug, salaryData] of Object.entries(prof.salaries)) {
    const currencyCode = getCurrencyCode(countrySlug)
    const usdValue = toUSD(salaryData.average, currencyCode)

    if (usdValue > maxUsd) maxUsd = usdValue

    if (prof.slug === "software-engineer" && usdValue > LIMITS.softwareEngineer) {
      errors.push({
        source: `${countrySlug}/${prof.slug}`,
        value: salaryData.average,
        usdValue,
        limit: LIMITS.softwareEngineer,
        message: `$${usdValue.toLocaleString()} USD exceeds $${LIMITS.softwareEngineer.toLocaleString()} USD limit`,
      })
    }

    if (prof.slug === "doctor" && usdValue > LIMITS.doctor) {
      errors.push({
        source: `${countrySlug}/${prof.slug}`,
        value: salaryData.average,
        usdValue,
        limit: LIMITS.doctor,
        message: `$${usdValue.toLocaleString()} USD exceeds $${LIMITS.doctor.toLocaleString()} USD limit`,
      })
    }
  }

  professionMaxUsd[prof.slug] = maxUsd
}

const report = {
  timestamp: new Date().toISOString(),
  passed: errors.length === 0,
  totalProfessions: professions.length,
  errors,
  warnings,
  professionMaxUsd,
}

writeFileSync(resolve(__dirname, "../salary-sanity-report.json"), JSON.stringify(report, null, 2))

if (errors.length > 0) {
  console.error(`\n✖ Salary Sanity Validation FAILED — ${errors.length} error(s)`)
  for (const err of errors) {
    console.error(`  ERROR: ${err.source}: ${err.message}`)
  }
  process.exit(1)
}

console.log(`✓ Salary sanity: ${professions.length} professions, ${Object.keys(professionMaxUsd).length} max values tracked, 0 errors`)
