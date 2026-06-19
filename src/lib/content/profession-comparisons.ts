import type { Locale } from "@/types/seo"
import { getLocale, locales } from "@/lib/seo/locales"
import { professions, getProfession, getProfessionSalary } from "./professions-data"
import { comparisonPairs as countryPairs } from "./comparison-engine"
import { SITE_URL } from "@/lib/seo/constants"

export interface ProfessionComparisonData {
  slug: string
  h1: string
  metaDescription: string
  professionName: string
  localeA: Locale
  localeB: Locale
  salaryA: number
  salaryB: number
  symbolA: string
  symbolB: string
  intro: string
  keyTakeaways: string[]
  comparisonTable: { label: string; valueA: string; valueB: string }[]
  winnerSummary: string
  faqs: { question: string; answer: string }[]
  relatedComparisons: { label: string; href: string }[]
}

interface ProfessionPair {
  professionSlug: string
  pairA: string
  pairB: string
}

export const professionComparisonPairs: ProfessionPair[] = [
  { professionSlug: "software-engineer", pairA: "us", pairB: "uk" },
  { professionSlug: "software-engineer", pairA: "us", pairB: "ca" },
  { professionSlug: "software-engineer", pairA: "us", pairB: "au" },
  { professionSlug: "software-engineer", pairA: "uk", pairB: "au" },
  { professionSlug: "software-engineer", pairA: "in", pairB: "sg" },
  { professionSlug: "data-scientist", pairA: "us", pairB: "uk" },
  { professionSlug: "data-scientist", pairA: "us", pairB: "ca" },
  { professionSlug: "data-scientist", pairA: "uk", pairB: "au" },
  { professionSlug: "doctor", pairA: "us", pairB: "uk" },
  { professionSlug: "doctor", pairA: "us", pairB: "au" },
  { professionSlug: "doctor", pairA: "uk", pairB: "au" },
  { professionSlug: "registered-nurse", pairA: "us", pairB: "uk" },
  { professionSlug: "registered-nurse", pairA: "us", pairB: "au" },
  { professionSlug: "teacher", pairA: "us", pairB: "uk" },
  { professionSlug: "teacher", pairA: "uk", pairB: "au" },
  { professionSlug: "accountant", pairA: "us", pairB: "uk" },
  { professionSlug: "accountant", pairA: "uk", pairB: "au" },
  { professionSlug: "marketing-manager", pairA: "us", pairB: "uk" },
  { professionSlug: "mechanical-engineer", pairA: "us", pairB: "uk" },
  { professionSlug: "electrician", pairA: "us", pairB: "au" },
  { professionSlug: "construction-worker", pairA: "us", pairB: "uk" },
  { professionSlug: "ai-engineer", pairA: "us", pairB: "uk" },
  { professionSlug: "ai-engineer", pairA: "us", pairB: "au" },
  { professionSlug: "ai-engineer", pairA: "uk", pairB: "au" },
  { professionSlug: "machine-learning-engineer", pairA: "us", pairB: "uk" },
  { professionSlug: "machine-learning-engineer", pairA: "us", pairB: "ca" },
  { professionSlug: "machine-learning-engineer", pairA: "uk", pairB: "au" },
  { professionSlug: "cloud-engineer", pairA: "us", pairB: "uk" },
  { professionSlug: "cloud-engineer", pairA: "us", pairB: "au" },
  { professionSlug: "cloud-engineer", pairA: "uk", pairB: "au" },
  { professionSlug: "cybersecurity-analyst", pairA: "us", pairB: "uk" },
  { professionSlug: "cybersecurity-analyst", pairA: "us", pairB: "au" },
  { professionSlug: "cybersecurity-analyst", pairA: "uk", pairB: "au" },
  { professionSlug: "devops-engineer", pairA: "us", pairB: "uk" },
  { professionSlug: "devops-engineer", pairA: "us", pairB: "au" },
  { professionSlug: "devops-engineer", pairA: "uk", pairB: "au" },
  { professionSlug: "financial-analyst", pairA: "us", pairB: "uk" },
  { professionSlug: "financial-analyst", pairA: "us", pairB: "au" },
  { professionSlug: "business-analyst", pairA: "us", pairB: "uk" },
  { professionSlug: "business-analyst", pairA: "us", pairB: "au" },
  { professionSlug: "project-manager", pairA: "us", pairB: "uk" },
  { professionSlug: "project-manager", pairA: "us", pairB: "au" },
  { professionSlug: "project-manager", pairA: "uk", pairB: "au" },
  { professionSlug: "solutions-architect", pairA: "us", pairB: "uk" },
  { professionSlug: "solutions-architect", pairA: "us", pairB: "au" },
  { professionSlug: "data-engineer", pairA: "us", pairB: "uk" },
  { professionSlug: "data-engineer", pairA: "us", pairB: "au" },
  { professionSlug: "data-engineer", pairA: "uk", pairB: "au" },
]

function formatSalary(val: number, symbol: string): string {
  return `${symbol}${val.toLocaleString()}`
}

export function generateProfessionComparison(
  professionSlug: string,
  pairA: string,
  pairB: string,
): ProfessionComparisonData | null {
  const profession = getProfession(professionSlug)
  const localeA = getLocale(pairA)
  const localeB = getLocale(pairB)
  if (!profession || !localeA || !localeB) return null

  const salaryA = getProfessionSalary(profession, pairA)
  const salaryB = getProfessionSalary(profession, pairB)
  if (!salaryA || !salaryB) return null

  const symbolA = localeA.currency.symbol
  const symbolB = localeB.currency.symbol
  const nameA = localeA.name
  const nameB = localeB.name
  const professionName = profession.name
  const slug = `${professionSlug}-${pairA}-vs-${pairB}`

  const salaryDiff = salaryA.average > salaryB.average
    ? `${nameA} pays ${Math.round((salaryA.average / salaryB.average - 1) * 100)}% more`
    : `${nameB} pays ${Math.round((salaryB.average / salaryA.average - 1) * 100)}% more`

  const h1 = `${professionName} Salary: ${nameA} vs ${nameB}`
  const metaDescription = `Compare ${professionName.toLowerCase()} salaries between ${nameA} and ${nameB}. Average salary in ${nameA}: ${formatSalary(salaryA.average, symbolA)}. ${nameB}: ${formatSalary(salaryB.average, symbolB)}. ${salaryDiff}.`

  const intro = `How do ${professionName.toLowerCase()} salaries compare between ${nameA} and ${nameB}? The average ${professionName.toLowerCase()} in ${nameA} earns ${formatSalary(salaryA.average, symbolA)} per year, while in ${nameB} the average is ${formatSalary(salaryB.average, symbolB)}. ${salaryDiff}. Entry-level ${professionName.toLowerCase()}s earn ${formatSalary(salaryA.entryLevel, symbolA)} in ${nameA} and ${formatSalary(salaryB.entryLevel, symbolB)} in ${nameB}.`

  const keyTakeaways = [
    `${professionName} salary comparison: ${nameA} vs ${nameB}`,
    salaryDiff,
    `Entry-level: ${formatSalary(salaryA.entryLevel, symbolA)} (${nameA}) vs ${formatSalary(salaryB.entryLevel, symbolB)} (${nameB})`,
    `Experienced: ${formatSalary(salaryA.experienced, symbolA)} (${nameA}) vs ${formatSalary(salaryB.experienced, symbolB)} (${nameB})`,
    `Salary range: ${formatSalary(salaryA.rangeLow, symbolA)}-${formatSalary(salaryA.rangeHigh, symbolA)} (${nameA}) vs ${formatSalary(salaryB.rangeLow, symbolB)}-${formatSalary(salaryB.rangeHigh, symbolB)} (${nameB})`,
  ]

  const comparisonTable = [
    { label: "Average Salary", valueA: formatSalary(salaryA.average, symbolA), valueB: formatSalary(salaryB.average, symbolB) },
    { label: "Entry Level", valueA: formatSalary(salaryA.entryLevel, symbolA), valueB: formatSalary(salaryB.entryLevel, symbolB) },
    { label: "Experienced / Senior", valueA: formatSalary(salaryA.experienced, symbolA), valueB: formatSalary(salaryB.experienced, symbolB) },
    { label: "Salary Range", valueA: `${formatSalary(salaryA.rangeLow, symbolA)} - ${formatSalary(salaryA.rangeHigh, symbolA)}`, valueB: `${formatSalary(salaryB.rangeLow, symbolB)} - ${formatSalary(salaryB.rangeHigh, symbolB)}` },
  ]

  const winnerSummary = salaryA.average > salaryB.average
    ? `${nameA} offers higher average salaries for ${professionName.toLowerCase()}s. The average ${professionName.toLowerCase()} in ${nameA} earns ${formatSalary(salaryA.average, symbolA)}, compared to ${formatSalary(salaryB.average, symbolB)} in ${nameB}.`
    : `${nameB} offers higher average salaries for ${professionName.toLowerCase()}s. The average ${professionName.toLowerCase()} in ${nameB} earns ${formatSalary(salaryB.average, symbolB)}, compared to ${formatSalary(salaryA.average, symbolA)} in ${nameA}.`

  const faqs = [
    { question: `How do ${professionName.toLowerCase()} salaries compare between ${nameA} and ${nameB}?`, answer: `The average ${professionName.toLowerCase()} salary in ${nameA} is ${formatSalary(salaryA.average, symbolA)}, while in ${nameB} it is ${formatSalary(salaryB.average, symbolB)}. ${salaryDiff}.` },
    { question: `What is the entry-level ${professionName.toLowerCase()} salary in ${nameA} vs ${nameB}?`, answer: `Entry-level ${professionName.toLowerCase()}s in ${nameA} earn approximately ${formatSalary(salaryA.entryLevel, symbolA)} per year, while in ${nameB} the entry-level salary is around ${formatSalary(salaryB.entryLevel, symbolB)} per year.` },
    { question: `Which country has better career prospects for ${professionName.toLowerCase()}s?`, answer: `Both ${nameA} and ${nameB} have strong demand for ${professionName.toLowerCase()}s. The best choice depends on your experience level, lifestyle preferences, and long-term career goals. Consider salary, tax burden, cost of living, and quality of life when making your decision.` },
    { question: `How does tax affect ${professionName.toLowerCase()} take-home pay in ${nameA} vs ${nameB}?`, answer: `Tax systems differ between ${nameA} and ${nameB}. Use our salary calculators for each country to see your exact take-home pay after taxes and deductions.` },
  ]

  const relatedComparisons = [
    { label: `${professionName} Salary in ${nameA}`, href: `/${pairA}/salary/${professionSlug}` },
    { label: `${professionName} Salary in ${nameB}`, href: `/${pairB}/salary/${professionSlug}` },
    ...countryPairs
      .filter(p => p.type === "salary" && ((p.pairA === pairA && p.pairB === pairB) || (p.pairA === pairB && p.pairB === pairA)))
      .slice(0, 2)
      .map(p => {
        const nA = getLocale(p.pairA)?.name ?? p.pairA
        const nB = getLocale(p.pairB)?.name ?? p.pairB
        const sA = p.regionA ?? p.pairA
        const sB = p.regionB ?? p.pairB
        return { label: `Salary: ${nA} vs ${nB}`, href: `/${pairA}/comparisons/salary/${sA}-vs-${sB}` }
      }),
  ]

  return {
    slug,
    h1,
    metaDescription,
    professionName,
    localeA,
    localeB,
    salaryA: salaryA.average,
    salaryB: salaryB.average,
    symbolA,
    symbolB,
    intro,
    keyTakeaways,
    comparisonTable,
    winnerSummary,
    faqs,
    relatedComparisons,
  }
}

export function getProfessionComparisonRoutes() {
  return professionComparisonPairs.map(p => ({
    slug: `${p.professionSlug}-${p.pairA}-vs-${p.pairB}`,
    pairA: p.pairA,
    pairB: p.pairB,
    professionSlug: p.professionSlug,
  }))
}

export function parseProfessionComparisonSlug(slug: string) {
  for (const pair of professionComparisonPairs) {
    const candidate = `${pair.professionSlug}-${pair.pairA}-vs-${pair.pairB}`
    const reversed = `${pair.professionSlug}-${pair.pairB}-vs-${pair.pairA}`
    if (slug === candidate) return pair
    if (slug === reversed) return { ...pair, pairA: pair.pairB, pairB: pair.pairA }
  }
  return null
}
