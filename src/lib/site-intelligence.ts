import { locales } from "@/lib/seo/locales"
import { tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { COUNTRY_FLAGS } from "@/lib/content/country-registry"

export interface SiteIntelligence {
  totalCountries: number
  totalTools: number
  totalGuides: number
  totalStatePages: number
  totalStateToolPages: number
  totalToolPages: number
  totalGuidePages: number
  totalComparePages: number
  totalStaticPages: number
  totalProfessionPages: number
  totalComparisonPages: number
  totalPages: number
  lastUpdated: string
  countries: { slug: string; name: string; flag: string; pageCount: number }[]
}

const HUB_PAGES_PER_LOCALE = 4
const STATIC_PAGES_COUNT = 8

export function getSiteIntelligence(): SiteIntelligence {
  const now = new Date()
  const lastUpdated = now.toISOString().split("T")[0]

  const countryCount = locales.length
  const toolCount = tools.length
  const guideCount = guides.length

  let totalStatePages = 0
  let totalStateToolPages = 0
  let totalToolPages = 0
  let totalGuidePages = 0
  let totalComparePages = 0
  let totalGuideHubPages = 0
  let totalHubPages = 0
  const totalProfessionPages = 0
  const totalComparisonPages = 0

  const countries: SiteIntelligence["countries"] = []

  for (const locale of locales) {
    let pageCount = 1
    pageCount += HUB_PAGES_PER_LOCALE
    totalHubPages += HUB_PAGES_PER_LOCALE

    pageCount += toolCount
    totalToolPages += toolCount

    pageCount += toolCount
    totalComparePages += toolCount

    pageCount += 1
    totalGuideHubPages += 1

    pageCount += guideCount
    totalGuidePages += guideCount

    if (locale.states) {
      const stateCount = locale.states.length
      totalStatePages += stateCount
      pageCount += stateCount

      const stateToolCount = stateCount * 3
      totalStateToolPages += stateToolCount
      pageCount += stateToolCount
    }

    countries.push({
      slug: locale.slug,
      name: locale.name,
      flag: COUNTRY_FLAGS[locale.slug] || "",
      pageCount,
    })
  }

  const totalStaticPages = STATIC_PAGES_COUNT

  const totalPages =
    1 +
    totalToolPages +
    totalGuidePages +
    totalGuideHubPages +
    totalHubPages +
    totalComparePages +
    totalStatePages +
    totalStateToolPages +
    totalStaticPages +
    totalProfessionPages +
    totalComparisonPages

  return {
    totalCountries: countryCount,
    totalTools: toolCount,
    totalGuides: guideCount,
    totalStatePages,
    totalStateToolPages,
    totalToolPages,
    totalGuidePages,
    totalComparePages,
    totalStaticPages,
    totalProfessionPages,
    totalComparisonPages,
    totalPages,
    lastUpdated,
    countries,
  }
}

export function getFormattedCount(count: number): string {
  return count.toLocaleString()
}
