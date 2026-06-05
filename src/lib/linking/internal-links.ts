import type { Locale, Tool, InternalLink, BreadcrumbItem } from "@/types/seo"
import { stateSeoToolSlugs, tools } from "@/lib/content/templates"
import { getPrimaryLocales, getExpansionLocales, locales } from "@/lib/seo/locales"

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

export function getAllInternalLinks(
  tool: Tool,
  locale: Locale
): InternalLink[] {
  return [
    ...getRelatedTools(tool, locale),
    ...getLocaleLinks(locale, tool.slug),
    ...getComparisonLinks(tool, locale),
    ...getSubRegionLinks(locale, tool),
  ]
}
