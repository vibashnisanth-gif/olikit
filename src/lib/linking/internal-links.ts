import type { Locale, Tool, InternalLink, BreadcrumbItem } from "@/types/seo"
import { stateSeoToolSlugs, tools } from "@/lib/content/templates"
import { getPrimaryLocales, getExpansionLocales, locales } from "@/lib/seo/locales"
import { professions } from "@/lib/content/professions-data"

export function getRelatedTools(
  tool: Tool,
  locale: Locale
): InternalLink[] {
  return tool.relatedTools
    .map((relatedId) => {
      const related = tools.find((t) => t.id === relatedId)
      if (!related) return null
      return {
        label: `${related.name}`,
        href: `/${locale.slug}/tools/${related.slug}`,
        type: "related" as const,
      }
    })
    .filter((link): link is NonNullable<typeof link> => link !== null)
}

export function getLocaleLinks(
  currentLocale: Locale,
  toolSlug?: string
): InternalLink[] {
  const path = toolSlug ? `/${currentLocale.slug}/tools/${toolSlug}` : `/${currentLocale.slug}`
  const allLocales = [...getPrimaryLocales(), ...getExpansionLocales()]

  return allLocales
    .filter((l) => l.slug !== currentLocale.slug)
    .map((locale) => ({
      label: `${locale.name}`,
      href: path.replace(`/${currentLocale.slug}`, `/${locale.slug}`),
      type: "locale" as const,
    }))
}

export function getComparisonLinks(
  tool: Tool,
  currentLocale: Locale
): InternalLink[] {
  const others = locales.filter((l) => l.slug !== currentLocale.slug)
  return others.map((locale) => ({
    label: `${locale.name}`,
    href: `/${currentLocale.slug}/tools/${tool.slug}/compare?with=${locale.slug}`,
    type: "comparison" as const,
  }))
}

export function getSubRegionLinks(
  locale: Locale,
  tool: Tool
): InternalLink[] {
  if (!locale.states || !stateSeoToolSlugs.includes(tool.slug)) return []
  return locale.states.map((state) => ({
    label: `${tool.name} - ${state.name}`,
    href: `/${locale.slug}/state/${state.slug}/${tool.slug}`,
    type: "subregion" as const,
  }))
}

export function buildBreadcrumbs(
  locale: Locale,
  tool?: Tool,
  subRegion?: string
): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [
    { label: "Home", href: `/${locale.slug}` },
  ]

  if (subRegion && locale.states) {
    const state = locale.states.find((s) => s.slug === subRegion)
    if (state) {
      crumbs.push({
        label: state.name,
        href: `/${locale.slug}/state/${state.slug}`,
      })
    }
  }

  if (tool) {
    crumbs.push({
      label: tool.name,
      href: `/${locale.slug}${subRegion ? `/state/${subRegion}` : "/tools"}/${tool.slug}`,
    })
  }

  return crumbs
}

export function getContentLinks(
  tool: Tool,
  locale: Locale
): InternalLink[] {
  const links: InternalLink[] = []
  if (tool.slug === "salary-calculator" || tool.slug === "tax-calculator") {
    links.push({
      label: `Salary Hub`,
      href: `/${locale.slug}/salary`,
      type: "content",
    })
    for (const profession of professions.slice(0, 3)) {
      links.push({
        label: `${profession.name} Salary`,
        href: `/${locale.slug}/salary/${profession.slug}`,
        type: "content",
      })
    }
    if (locale.states) {
      links.push({
        label: `Average Salary by State`,
        href: `/${locale.slug}/average-salary/${locale.states[0].slug}`,
        type: "content",
      })
      links.push({
        label: `Cost of Living by State`,
        href: `/${locale.slug}/cost-of-living/${locale.states[0].slug}`,
        type: "content",
      })
    }
  }
  return links
}

export function getAllInternalLinks(
  tool: Tool,
  locale: Locale
): InternalLink[] {
  return [
    ...getRelatedTools(tool, locale),
    ...getLocaleLinks(locale, tool.slug),
    ...getComparisonLinks(tool, locale),
    ...getSubRegionLinks(locale, tool),
    ...getContentLinks(tool, locale),
  ]
}

const PROFESSION_SITEMAP: Record<string, { hub: string; salary: string; taxAdjusted: string; pppAdjusted: string; highestPaying: string; bestCountries: string; salaryByCountry: string; salaryIndex?: string; highestPayingCities?: string; comparisons: string[] }> = {
  "software-engineer": {
    hub: "/software-engineer",
    salary: "/software-engineer-salary",
    taxAdjusted: "/software-engineer-tax-adjusted-salary",
    pppAdjusted: "/software-engineer-ppp-adjusted-salary",
    highestPaying: "/software-engineer-highest-paying-countries",
    bestCountries: "/software-engineer-best-countries",
    salaryByCountry: "/software-engineer-salary-by-country",
    comparisons: [
      "/software-engineer-us-vs-uk",
      "/software-engineer-us-vs-canada",
      "/software-engineer-uk-vs-australia",
    ],
  },
  "data-scientist": {
    hub: "/data-scientist",
    salary: "/data-scientist-salary",
    taxAdjusted: "/data-scientist-tax-adjusted-salary",
    pppAdjusted: "/data-scientist-ppp-adjusted-salary",
    highestPaying: "/data-scientist-highest-paying-countries",
    bestCountries: "/data-scientist-best-countries",
    salaryByCountry: "/data-scientist-salary-by-country",
    comparisons: [
      "/data-scientist-us-vs-uk",
      "/data-scientist-us-vs-canada",
      "/data-scientist-uk-vs-australia",
    ],
  },
  "product-manager": {
    hub: "/product-manager",
    salary: "/product-manager-salary",
    taxAdjusted: "/product-manager-tax-adjusted-salary",
    pppAdjusted: "/product-manager-ppp-adjusted-salary",
    highestPaying: "/highest-paying-countries-for-product-managers",
    bestCountries: "/best-countries-for-product-managers",
    salaryByCountry: "/product-manager-salary-by-country",
    salaryIndex: "/research/product-manager-salary-index-2026",
    highestPayingCities: "/rankings/highest-paying-cities-product-managers",
    comparisons: [],
  },
  "ai-engineer": {
    hub: "/ai-engineer",
    salary: "/ai-engineer-salary",
    taxAdjusted: "/ai-engineer-tax-adjusted-salary",
    pppAdjusted: "/ai-engineer-ppp-adjusted-salary",
    highestPaying: "/ai-engineer-highest-paying-countries",
    bestCountries: "/ai-engineer-best-countries",
    salaryByCountry: "/ai-engineer-salary-by-country",
    comparisons: [],
  },
  "machine-learning-engineer": {
    hub: "/machine-learning-engineer",
    salary: "/machine-learning-engineer-salary",
    taxAdjusted: "/machine-learning-engineer-tax-adjusted-salary",
    pppAdjusted: "/machine-learning-engineer-ppp-adjusted-salary",
    highestPaying: "/machine-learning-engineer-highest-paying-countries",
    bestCountries: "/machine-learning-engineer-best-countries",
    salaryByCountry: "/machine-learning-engineer-salary-by-country",
    comparisons: [],
  },
  "cloud-engineer": {
    hub: "/cloud-engineer",
    salary: "/cloud-engineer-salary",
    taxAdjusted: "/cloud-engineer-tax-adjusted-salary",
    pppAdjusted: "/cloud-engineer-ppp-adjusted-salary",
    highestPaying: "/cloud-engineer-highest-paying-countries",
    bestCountries: "/cloud-engineer-best-countries",
    salaryByCountry: "/cloud-engineer-salary-by-country",
    comparisons: [],
  },
  "cybersecurity-analyst": {
    hub: "/cybersecurity-analyst",
    salary: "/cybersecurity-analyst-salary",
    taxAdjusted: "/cybersecurity-analyst-tax-adjusted-salary",
    pppAdjusted: "/cybersecurity-analyst-ppp-adjusted-salary",
    highestPaying: "/cybersecurity-analyst-highest-paying-countries",
    bestCountries: "/cybersecurity-analyst-best-countries",
    salaryByCountry: "/cybersecurity-analyst-salary-by-country",
    comparisons: [],
  },
  "devops-engineer": {
    hub: "/devops-engineer",
    salary: "/devops-engineer-salary",
    taxAdjusted: "/devops-engineer-tax-adjusted-salary",
    pppAdjusted: "/devops-engineer-ppp-adjusted-salary",
    highestPaying: "/devops-engineer-highest-paying-countries",
    bestCountries: "/devops-engineer-best-countries",
    salaryByCountry: "/devops-engineer-salary-by-country",
    comparisons: [],
  },
  "financial-analyst": {
    hub: "/financial-analyst",
    salary: "/financial-analyst-salary",
    taxAdjusted: "/financial-analyst-tax-adjusted-salary",
    pppAdjusted: "/financial-analyst-ppp-adjusted-salary",
    highestPaying: "/financial-analyst-highest-paying-countries",
    bestCountries: "/financial-analyst-best-countries",
    salaryByCountry: "/financial-analyst-salary-by-country",
    comparisons: [],
  },
  "business-analyst": {
    hub: "/business-analyst",
    salary: "/business-analyst-salary",
    taxAdjusted: "/business-analyst-tax-adjusted-salary",
    pppAdjusted: "/business-analyst-ppp-adjusted-salary",
    highestPaying: "/business-analyst-highest-paying-countries",
    bestCountries: "/business-analyst-best-countries",
    salaryByCountry: "/business-analyst-salary-by-country",
    comparisons: [],
  },
  "project-manager": {
    hub: "/project-manager",
    salary: "/project-manager-salary",
    taxAdjusted: "/project-manager-tax-adjusted-salary",
    pppAdjusted: "/project-manager-ppp-adjusted-salary",
    highestPaying: "/project-manager-highest-paying-countries",
    bestCountries: "/project-manager-best-countries",
    salaryByCountry: "/project-manager-salary-by-country",
    comparisons: [],
  },
  "solutions-architect": {
    hub: "/solutions-architect",
    salary: "/solutions-architect-salary",
    taxAdjusted: "/solutions-architect-tax-adjusted-salary",
    pppAdjusted: "/solutions-architect-ppp-adjusted-salary",
    highestPaying: "/solutions-architect-highest-paying-countries",
    bestCountries: "/solutions-architect-best-countries",
    salaryByCountry: "/solutions-architect-salary-by-country",
    comparisons: [],
  },
  "data-engineer": {
    hub: "/data-engineer",
    salary: "/data-engineer-salary",
    taxAdjusted: "/data-engineer-tax-adjusted-salary",
    pppAdjusted: "/data-engineer-ppp-adjusted-salary",
    highestPaying: "/data-engineer-highest-paying-countries",
    bestCountries: "/data-engineer-best-countries",
    salaryByCountry: "/data-engineer-salary-by-country",
    comparisons: [],
  },
}

export function getProfessionLinks(slug: string): InternalLink[] {
  const info = PROFESSION_SITEMAP[slug]
  if (!info) return []

  const links: InternalLink[] = [
    { label: `${ucFirst(slug.replace("-", " "))} Hub`, href: info.hub, type: "content" as const },
    { label: `${ucFirst(slug.replace("-", " "))} Salary Overview`, href: info.salary, type: "content" as const },
  ]

  for (const url of [info.taxAdjusted, info.pppAdjusted, info.highestPaying, info.bestCountries, info.salaryByCountry, info.salaryIndex, info.highestPayingCities]) {
    if (url) {
      const label = url.split("/").pop()!.replace(/-/g, " ")
      links.push({ label: ucFirst(label), href: url, type: "content" as const })
    }
  }

  for (const url of info.comparisons) {
    const pair = url.split("/").pop()!.split("-vs-").join(" vs ")
    links.push({ label: ucFirst(pair), href: url, type: "comparison" as const })
  }

  return links
}

export function getGlobalResearchLinks(): InternalLink[] {
  return [
    { label: "Global Salary Index 2026", href: "/research/global-salary-index-2026", type: "content" },
    { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026", type: "content" },
    { label: "Product Manager Salary Index 2026", href: "/research/product-manager-salary-index-2026", type: "content" },
    { label: "Research Hub", href: "/research", type: "content" },
    { label: "Professions Hub", href: "/professions", type: "content" },
  ]
}

function ucFirst(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
