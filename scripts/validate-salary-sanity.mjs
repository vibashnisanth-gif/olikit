/**
 * Salary Sanity Validation
 * Runs during build to catch impossible salary values.
 * Uses tsx to import the actual TypeScript data files.
 */

import { execSync } from "child_process"
import { writeFileSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import { createRequire } from "module"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, "..")

const USD_EXCHANGE_RATES = {
  USD: 1, GBP: 1.27, AUD: 0.67, CAD: 0.73, NZD: 0.60, INR: 0.012, SGD: 0.74,
}

function toUSD(amount, currencyCode) {
  const rate = USD_EXCHANGE_RATES[currencyCode]
  if (!rate) return amount
  return Math.round(amount * rate)
}

const CURRENCY_MAP = {
  us: "USD", uk: "GBP", au: "AUD", ca: "CAD", nz: "NZD", in: "INR", sg: "SGD",
}

const LIMITS = {
  countryAvgSalary: { max: 300000, label: "Country avg salary exceeds $300k" },
  softwareEngineer: { max: 500000, label: "Software Engineer exceeds $500k" },
  doctor: { max: 1000000, label: "Doctor exceeds $1M" },
}

const errors = []
const professionMaxUsd = {}

const data = await import(resolve(root, "src/lib/content/professions-data.ts"))

for (const prof of data.professions) {
  let maxUsd = 0
  for (const [slug, salaryData] of Object.entries(prof.salaries)) {
    const currency = CURRENCY_MAP[slug] ?? "USD"
    const usdValue = toUSD(salaryData.average, currency)

    if (usdValue > maxUsd) maxUsd = usdValue

    const label = `${slug}/${prof.slug} (${currency} ${salaryData.average.toLocaleString()} → $${usdValue.toLocaleString()} USD)`

    if (prof.slug === "software-engineer" && usdValue > LIMITS.softwareEngineer.max) {
      errors.push(`ERROR: ${label} — ${LIMITS.softwareEngineer.label}`)
    }
    if (prof.slug === "doctor" && usdValue > LIMITS.doctor.max) {
      errors.push(`ERROR: ${label} — ${LIMITS.doctor.label}`)
    }
  }
  professionMaxUsd[prof.slug] = maxUsd
}

import { resolve as resolvePath } from "path"

const reportPath = resolvePath(root, "salary-sanity-report.json")
writeFileSync(reportPath, JSON.stringify({
  timestamp: new Date().toISOString(),
  errors,
  professionMaxUsd,
}, null, 2))

if (errors.length > 0) {
  console.log(`\n⚠ Salary Sanity Validation FAILED — ${errors.length} error(s)`)
  for (const err of errors) console.log(`  ${err}`)
  process.exit(1)
}

console.log(`✓ Salary sanity: ${data.professions.length} professions, 0 errors`)
process.exit(0)
