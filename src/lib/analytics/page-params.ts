const COUNTRY_SLUGS = new Set(["us", "uk", "au", "ca", "nz", "in", "sg"])

export function extractPageParams(pathname: string) {
  const segments = pathname.split("/").filter(Boolean)
  const locale = segments[0] && COUNTRY_SLUGS.has(segments[0]) ? segments[0] : null
  const rest = locale ? segments.slice(1) : segments
  const pageType = derivePageType(rest, locale)
  const country = locale || "global"
  return { country, locale, pageType, pathname }
}

function derivePageType(segments: string[], locale: string | null): string {
  if (!segments.length) return locale ? "country_hub" : "home"
  const first = segments[0]
  if (first === "tools") return segments.length > 1 ? "tool" : "tools_hub"
  if (first === "salary") return segments.length > 1 ? "salary_profession" : "salary_hub"
  if (first === "guides") return segments.length > 1 ? "guide" : "guides_hub"
  if (first === "state") return segments.length > 1 ? "state_tool" : "state"
  if (first === "compare") return "compare"
  if (first === "rankings") return "rankings"
  if (first === "research") return "research"
  if (first === "comparisons") return "comparisons"
  if (first === "countries") return "countries"
  if (first === "professions") return "professions"
  if (first === "methodology") return "methodology"
  if (first === "about") return "about"
  if (first === "search") return "search"
  if (first === "data-sources") return "data_sources"
  if (first === "editorial-policy") return "editorial_policy"
  if (first === "guides/best" || segments.join("/") === "guides/best") return "best_services"
  return "other"
}

export function getPageTitle(): string {
  if (typeof document === "undefined") return ""
  return document.title
}
