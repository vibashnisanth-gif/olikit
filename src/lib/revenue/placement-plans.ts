export interface AdPlacement {
  pageType: string
  slot: "top-banner" | "sidebar" | "in-content" | "bottom-banner" | "sticky"
  format: "display" | "in-feed" | "in-article" | "matched-content"
  condition?: string
  priority: number
}

export interface AffiliatePlacement {
  pageType: string
  program: "mortgage" | "savings" | "credit-card" | "salary"
  slot: "comparison-table" | "tool-results" | "sidebar-widget"
  condition?: string
  priority: number
}

export const adPlacements: AdPlacement[] = [
  {
    pageType: "/[locale]/salary",
    slot: "top-banner",
    format: "display",
    priority: 1,
  },
  {
    pageType: "/[locale]/salary",
    slot: "in-content",
    format: "in-feed",
    condition: "between average-salary state links and FAQ section",
    priority: 2,
  },
  {
    pageType: "/[locale]/average-salary/[state]",
    slot: "top-banner",
    format: "display",
    priority: 1,
  },
  {
    pageType: "/[locale]/average-salary/[state]",
    slot: "in-content",
    format: "in-article",
    condition: "after comparison table, before FAQ",
    priority: 2,
  },
  {
    pageType: "/[locale]/cost-of-living/[state]",
    slot: "top-banner",
    format: "display",
    priority: 1,
  },
  {
    pageType: "/[locale]/cost-of-living/[state]",
    slot: "in-content",
    format: "in-article",
    condition: "after breakdown table, before FAQ",
    priority: 2,
  },
  {
    pageType: "/[locale]/tools/salary-calculator",
    slot: "sidebar",
    format: "display",
    priority: 2,
  },
  {
    pageType: "/[locale]/tools/salary-calculator",
    slot: "bottom-banner",
    format: "display",
    condition: "below calculator results, above related tools",
    priority: 3,
  },
  {
    pageType: "/[locale]/tools/mortgage-calculator",
    slot: "sidebar",
    format: "display",
    priority: 2,
  },
  {
    pageType: "/[locale]/tools/savings-calculator",
    slot: "sidebar",
    format: "display",
    priority: 2,
  },
]

export const affiliatePlacements: AffiliatePlacement[] = [
  {
    pageType: "/[locale]/tools/mortgage-calculator",
    program: "mortgage",
    slot: "comparison-table",
    condition: "show top 3 mortgage lender offers below calculator results",
    priority: 1,
  },
  {
    pageType: "/[locale]/state/[subregion]/mortgage-calculator",
    program: "mortgage",
    slot: "comparison-table",
    condition: "state-specific mortgage lender comparisons",
    priority: 2,
  },
  {
    pageType: "/[locale]/tools/savings-calculator",
    program: "savings",
    slot: "comparison-table",
    condition: "top high-yield savings account offers",
    priority: 1,
  },
  {
    pageType: "/[locale]/tools/savings-calculator",
    program: "credit-card",
    slot: "sidebar-widget",
    condition: "best rewards cards for high earners",
    priority: 3,
  },
  {
    pageType: "/[locale]/salary",
    program: "salary",
    slot: "sidebar-widget",
    condition: "link to salary benchmarking tools and job boards",
    priority: 3,
  },
]

export function getPlacementsForPage(
  pagePath: string,
): { ads: AdPlacement[]; affiliates: AffiliatePlacement[] } {
  const ads = adPlacements
    .filter((p) => pagePath.match(p.pageType.replace(/\[locale\]/g, "[^/]+").replace(/\[state\]/g, "[^/]+").replace(/\[subregion\]/g, "[^/]+")))
    .sort((a, b) => a.priority - b.priority)

  const affiliates = affiliatePlacements
    .filter((p) => pagePath.match(p.pageType.replace(/\[locale\]/g, "[^/]+").replace(/\[state\]/g, "[^/]+").replace(/\[subregion\]/g, "[^/]+")))
    .sort((a, b) => a.priority - b.priority)

  return { ads, affiliates }
}
