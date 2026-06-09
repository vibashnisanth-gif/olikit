import type { Locale } from "@/types/seo"
import { getLocale, getSubRegion } from "@/lib/seo/locales"
import { getStateDataBySlug } from "./state-data"
import { costOfLivingData } from "./state-expansion"
import { SITE_URL } from "@/lib/seo/constants"
import { toUSD } from "./country-registry"

export interface ComparisonPageData {
  slug: string
  h1: string
  metaDescription: string
  type: "salary" | "cost-of-living" | "tax" | "purchasing-power"
  localeA: { slug: string; name: string }
  localeB: { slug: string; name: string }
  regionA?: { slug: string; name: string }
  regionB?: { slug: string; name: string }
  intro: string
  keyTakeaways: string[]
  comparisonTable: { label: string; valueA: string; valueB: string }[]
  winnerSummary: string
  faqs: { question: string; answer: string }[]
  relatedComparisons: { label: string; href: string }[]
  salaryDiff?: string
  taxDiff?: string
  colDiff?: string
  purchasingPowerDiff?: string
}

export const comparisonPairs: { type: string; pairA: string; pairB: string; regionA?: string; regionB?: string }[] = [
  { type: "salary", pairA: "us", pairB: "uk" },
  { type: "salary", pairA: "us", pairB: "ca" },
  { type: "salary", pairA: "uk", pairB: "au" },
  { type: "salary", pairA: "ca", pairB: "au" },
  { type: "salary", pairA: "in", pairB: "sg" },
  { type: "salary", pairA: "au", pairB: "nz" },
  { type: "cost-of-living", pairA: "us", pairB: "uk" },
  { type: "cost-of-living", pairA: "us", pairB: "ca" },
  { type: "cost-of-living", pairA: "uk", pairB: "au" },
  { type: "cost-of-living", pairA: "ca", pairB: "au" },
  { type: "cost-of-living", pairA: "in", pairB: "sg" },
  { type: "cost-of-living", pairA: "au", pairB: "nz" },
  { type: "tax", pairA: "us", pairB: "uk" },
  { type: "tax", pairA: "us", pairB: "ca" },
  { type: "tax", pairA: "uk", pairB: "au" },
  { type: "tax", pairA: "ca", pairB: "au" },
  { type: "tax", pairA: "in", pairB: "sg" },
  { type: "tax", pairA: "au", pairB: "nz" },
  { type: "purchasing-power", pairA: "us", pairB: "uk", regionA: "california", regionB: "england" },
  { type: "purchasing-power", pairA: "uk", pairB: "us", regionA: "england", regionB: "texas" },
  { type: "purchasing-power", pairA: "in", pairB: "sg" },
  { type: "purchasing-power", pairA: "au", pairB: "nz", regionA: "nsw", regionB: "auckland" },
  { type: "purchasing-power", pairA: "us", pairB: "au", regionA: "new-york", regionB: "nsw" },
  { type: "purchasing-power", pairA: "ca", pairB: "uk", regionA: "ontario", regionB: "england" },
]

function getLocaleName(slug: string): string {
  const l = getLocale(slug)
  return l?.name ?? slug
}

function getCurrencySymbolForLocale(slug: string): string {
  const l = getLocale(slug)
  return l?.currency.symbol ?? "$"
}

function getCurrencyCodeForLocale(slug: string): string {
  const l = getLocale(slug)
  return l?.currency.code ?? "USD"
}

function getNationalAvgForLocale(slug: string): number {
  const map: Record<string, number> = {
    us: 63000,
    uk: 37000,
    au: 80000,
    ca: 60000,
    nz: 72000,
    in: 450000,
    sg: 72000,
  }
  return map[slug] ?? 63000
}

function getTopTaxRate(slug: string): string {
  const map: Record<string, string> = {
    us: "37% (federal) + state variation",
    uk: "45% (additional rate)",
    au: "45% + 2% Medicare Levy",
    ca: "33% (federal) + provincial variation",
    nz: "39% (top rate)",
    in: "30% (with rebate up to ₹12L)",
    sg: "22% (top rate, progressive)",
  }
  return map[slug] ?? "Varies"
}

export function generateComparisonPage(
  type: string,
  pairA: string,
  pairB: string,
  regionA?: string,
  regionB?: string,
): ComparisonPageData | null {
  if (type === "profession-salary") {
    return null
  }

  const localeA = getLocale(pairA)
  const localeB = getLocale(pairB)
  if (!localeA || !localeB) return null

  const nameA = regionA ? getSubRegion(localeA, regionA)?.name ?? getLocaleName(pairA) : getLocaleName(pairA)
  const nameB = regionB ? getSubRegion(localeB, regionB)?.name ?? getLocaleName(pairB) : getLocaleName(pairB)
  const symbolA = getCurrencySymbolForLocale(pairA)
  const symbolB = getCurrencySymbolForLocale(pairB)
  const avgA = getNationalAvgForLocale(pairA)
  const avgB = getNationalAvgForLocale(pairB)
  const taxA = getTopTaxRate(pairA)
  const taxB = getTopTaxRate(pairB)

  const dataA = regionA ? getStateDataBySlug(regionA) : null
  const dataB = regionB ? getStateDataBySlug(regionB) : null
  const colA = regionA ? costOfLivingData[regionA] : null
  const colB = regionB ? costOfLivingData[regionB] : null

  const slugA = regionA ?? pairA
  const slugB = regionB ?? pairB

  let salaryA = avgA
  let salaryB = avgB
  if (dataA) salaryA = dataA.dataPoints.averageSalary
  if (dataB) salaryB = dataB.dataPoints.averageSalary

  const currencyCodeA = getCurrencyCodeForLocale(pairA)
  const currencyCodeB = getCurrencyCodeForLocale(pairB)
  const salaryAUsd = toUSD(salaryA, currencyCodeA)
  const salaryBUsd = toUSD(salaryB, currencyCodeB)

  let colIndexA = 100
  let colIndexB = 100
  if (colA) colIndexA = colA.overall
  if (colB) colIndexB = colB.overall
  if (!colA && pairA === "sg") colIndexA = 120
  if (!colB && pairB === "sg") colIndexB = 120

  const salaryDiff = salaryAUsd > salaryBUsd
    ? `${nameA} salaries are ${Math.round((salaryAUsd / salaryBUsd - 1) * 100)}% higher`
    : `${nameB} salaries are ${Math.round((salaryBUsd / salaryAUsd - 1) * 100)}% higher`

  const colDiff = colIndexA > colIndexB
    ? `${nameA} is ${Math.round((colIndexA / colIndexB - 1) * 100)}% more expensive`
    : `${nameB} is ${Math.round((colIndexB / colIndexA - 1) * 100)}% more expensive`

  const purchasingPowerA = Math.round(salaryAUsd / (colIndexA / 100))
  const purchasingPowerB = Math.round(salaryBUsd / (colIndexB / 100))
  const ppDiff = purchasingPowerA > purchasingPowerB
    ? `${nameA} has ${Math.round((purchasingPowerA / purchasingPowerB - 1) * 100)}% higher purchasing power`
    : `${nameB} has ${Math.round((purchasingPowerB / purchasingPowerA - 1) * 100)}% higher purchasing power`

  const slug = `${slugA}-vs-${slugB}`
  const typeLabel = type === "salary" ? "Salary" : type === "cost-of-living" ? "Cost of Living" : type === "tax" ? "Tax" : "Purchasing Power"

  const h1 = `${typeLabel}: ${nameA} vs ${nameB} (${localeA.taxTerms.incomeTaxYear})`
  const metaDescription = `Compare ${typeLabel.toLowerCase()} between ${nameA} and ${nameB}. ${salaryDiff}. ${colDiff}. Free comparison tool with detailed analysis.`

  let intro = `Comprehensive comparison of ${typeLabel.toLowerCase()} between ${nameA} and ${nameB}.`
  if (type === "salary") intro = `Compare average salaries, take-home pay, and compensation between ${nameA} and ${nameB}. The average salary in ${nameA} is ${symbolA}${avgA.toLocaleString()}, while in ${nameB} it is ${symbolB}${avgB.toLocaleString()}. ${salaryDiff}.`
  if (type === "cost-of-living") intro = `Compare the cost of living between ${nameA} and ${nameB}. ${colDiff}. Understand how housing, utilities, food, transportation, and healthcare costs differ.`
  if (type === "tax") intro = `Compare tax systems between ${nameA} and ${nameB}. ${nameA} has a top rate of ${taxA}, while ${nameB} has a top rate of ${taxB}. See how tax brackets, rates, and deductions differ.`
  if (type === "purchasing-power") intro = `Compare purchasing power between ${nameA} and ${nameB}. A salary of ${symbolA}${salaryA.toLocaleString()} in ${nameA} has the purchasing power of $${purchasingPowerA.toLocaleString()} USD (adjusted for cost of living). ${ppDiff}.`

  const keyTakeaways = [
    `${typeLabel} comparison: ${nameA} vs ${nameB}`,
    salaryDiff,
    colDiff,
    ppDiff,
    `Use our calculators to get personalized ${typeLabel.toLowerCase()} estimates for both locations.`,
  ]

  const comparisonTableRows: { label: string; valueA: string; valueB: string }[] = [
    { label: "Average Salary", valueA: `${symbolA}${salaryA.toLocaleString()}`, valueB: `${symbolB}${salaryB.toLocaleString()}` },
    { label: "Cost of Living Index", valueA: `${colIndexA}`, valueB: `${colIndexB}` },
    { label: "Purchasing Power (adj.)", valueA: `$${purchasingPowerA.toLocaleString()} USD`, valueB: `$${purchasingPowerB.toLocaleString()} USD` },
    { label: "Top Tax Rate", valueA: taxA, valueB: taxB },
  ]

  const winnerSummary = type === "salary"
    ? `${salaryAUsd > salaryBUsd ? nameA : nameB} offers higher average salaries. However, when adjusted for cost of living, ${purchasingPowerA > purchasingPowerB ? nameA : nameB} provides better purchasing power.`
    : type === "cost-of-living"
    ? `${colIndexA < colIndexB ? nameA : nameB} has a lower cost of living, making it more affordable for residents.`
    : type === "tax"
    ? `Tax systems differ significantly between ${nameA} and ${nameB}. Consider both the rates and the broader tax structure including deductions and credits.`
    : `${purchasingPowerA > purchasingPowerB ? nameA : nameB} offers better purchasing power when salary and cost of living are both considered.`

  const faqs = [
    { question: `How do salaries compare between ${nameA} and ${nameB}?`, answer: `The average salary in ${nameA} is ${symbolA}${salaryA.toLocaleString()}, while in ${nameB} it is ${symbolB}${salaryB.toLocaleString()}. ${salaryDiff}.` },
    { question: `Which location has a higher cost of living?`, answer: `${colDiff}. Cost of living indices are ${colIndexA} for ${nameA} and ${colIndexB} for ${nameB} (national average = 100).` },
    { question: `How does purchasing power compare?`, answer: `After adjusting for cost of living, ${ppDiff}. The effective purchasing power is $${purchasingPowerA.toLocaleString()} USD in ${nameA} and $${purchasingPowerB.toLocaleString()} USD in ${nameB}.` },
    { question: `What are the tax differences?`, answer: `${nameA} has a top tax rate of ${taxA}. ${nameB} has a top tax rate of ${taxB}. Actual tax burden depends on income level, filing status, and applicable deductions.` },
    { question: `Which location is better for my career?`, answer: `The better choice depends on your profession, salary expectations, lifestyle preferences, and long-term goals. Consider salary, cost of living, tax burden, quality of life, and career opportunities in both locations.` },
  ]

  const relatedComparisons = comparisonPairs
    .filter(p => p.type === type && (p.pairA === pairA || p.pairB === pairB || p.pairA === pairB || p.pairB === pairA))
    .slice(0, 4)
    .map(p => {
      const nA = p.regionA ? getSubRegion(getLocale(p.pairA)!, p.regionA)?.name ?? getLocaleName(p.pairA) : getLocaleName(p.pairA)
      const nB = p.regionB ? getSubRegion(getLocale(p.pairB)!, p.regionB)?.name ?? getLocaleName(p.pairB) : getLocaleName(p.pairB)
      const sA = p.regionA ?? p.pairA
      const sB = p.regionB ?? p.pairB
      return {
        label: `${nA} vs ${nB}`,
        href: `/${p.pairA}/comparisons/${type}/${sA}-vs-${sB}`,
      }
    })

  return {
    slug,
    h1,
    metaDescription,
    type: type as any,
    localeA: { slug: pairA, name: nameA },
    localeB: { slug: pairB, name: nameB },
    regionA: regionA ? { slug: regionA, name: nameA } : undefined,
    regionB: regionB ? { slug: regionB, name: nameB } : undefined,
    intro,
    keyTakeaways,
    comparisonTable: comparisonTableRows,
    winnerSummary,
    faqs,
    relatedComparisons,
    salaryDiff,
    taxDiff: `${nameA}: ${taxA} vs ${nameB}: ${taxB}`,
    colDiff,
    purchasingPowerDiff: ppDiff,
  }
}

export function getComparisonRoutes(): { type: string; slug: string }[] {
  const routes: { type: string; slug: string }[] = []
  for (const pair of comparisonPairs) {
    const localeA = getLocale(pair.pairA)
    const localeB = getLocale(pair.pairB)
    if (!localeA || !localeB) continue
    const slugA = pair.regionA ?? pair.pairA
    const slugB = pair.regionB ?? pair.pairB
    const slug = `${slugA}-vs-${slugB}`
    routes.push({ type: pair.type, slug })
  }
  return routes
}
