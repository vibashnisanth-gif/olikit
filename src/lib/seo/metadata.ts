import type { Metadata } from "next"
import type { Locale, Tool, SeoMetadata, SubRegion } from "@/types/seo"
import { generateHreflangTags } from "./hreflang"
import { SITE_URL } from "./constants"

function replaceAll(str: string, replacements: Record<string, string>): string {
  let result = str
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replaceAll(key, value)
  }
  return result
}

export function buildMetadata(
  locale: Locale,
  tool: Tool | null,
  path: string,
  subRegion?: SubRegion,
  validLocaleSlugs?: string[]
): Metadata {
  const meta = buildSeoMetadata(locale, tool, path, subRegion, validLocaleSlugs)

  const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: meta.alternates.canonical,
      languages: meta.alternates.languages,
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: meta.openGraph.url,
      siteName: meta.openGraph.siteName,
      locale: meta.openGraph.locale,
      type: meta.openGraph.type,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
    verification,
    other: adsenseClient ? { "google-adsense-account": adsenseClient } : undefined,
  }
}

export function buildSeoMetadata(
  locale: Locale,
  tool: Tool | null,
  path: string,
  subRegion?: SubRegion,
  validLocaleSlugs?: string[]
): SeoMetadata {
  const baseUrl = SITE_URL

  const taxYear = locale.taxTerms.incomeTaxYear

  if (tool && subRegion) {
    const title = replaceAll(tool.metaTitleTemplate, {
      "{state}": subRegion.name,
      "{country}": locale.name,
      "{tool}": tool.name,
      "{taxYear}": taxYear,
    })
    const description = replaceAll(tool.metaDescriptionTemplate, {
      "{state}": subRegion.name,
      "{country}": locale.name,
      "{tool}": tool.name,
      "{taxYear}": taxYear,
    })
    return {
      title,
      description,
      canonical: `${baseUrl}${path}`,
      openGraph: {
        title: `${tool.name} ${subRegion.name} ${locale.name}`,
        description: `Free ${tool.name.toLowerCase()} for ${subRegion.name}, ${locale.name}`,
        url: `${baseUrl}${path}`,
        siteName: "Olikit",
        locale: locale.code,
        type: "website",
      },
      alternates: {
        canonical: `${baseUrl}${path}`,
        languages: buildLanguageAlternates(path, validLocaleSlugs),
      },
      keywords: [
        tool.name.toLowerCase(),
        subRegion.name.toLowerCase(),
        locale.name.toLowerCase(),
        ...tool.keywords,
      ],
    }
  }

  if (tool) {
    const title = replaceAll(tool.metaTitleTemplate, {
      "{country}": locale.name,
      "{tool}": tool.name,
      "{taxYear}": taxYear,
    })
    const description = replaceAll(tool.metaDescriptionTemplate, {
      "{country}": locale.name,
      "{tool}": tool.name,
      "{taxYear}": taxYear,
    })
    return {
      title,
      description,
      canonical: `${baseUrl}${path}`,
      openGraph: {
        title: `${tool.name} - ${locale.name}`,
        description: `Free ${tool.name.toLowerCase()} for ${locale.name}`,
        url: `${baseUrl}${path}`,
        siteName: "Olikit",
        locale: locale.code,
        type: "website",
      },
      alternates: {
        canonical: `${baseUrl}${path}`,
        languages: buildLanguageAlternates(path, validLocaleSlugs),
      },
      keywords: [
        tool.name.toLowerCase(),
        locale.name.toLowerCase(),
        ...tool.keywords,
      ],
    }
  }

  return {
    title: `${locale.defaultTitle}${subRegion ? ` - ${subRegion.name}` : ""}`,
    description: locale.defaultDescription,
    canonical: `${baseUrl}${path}`,
    openGraph: {
      title: locale.defaultTitle,
      description: locale.defaultDescription,
      url: `${baseUrl}${path}`,
      siteName: "Olikit",
      locale: locale.code,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: buildLanguageAlternates(path, validLocaleSlugs),
    },
    keywords: [
      "finance calculator",
      locale.name.toLowerCase(),
      ...(subRegion ? [subRegion.name.toLowerCase()] : []),
    ],
  }
}

function buildLanguageAlternates(path: string, validLocaleSlugs?: string[]): Record<string, string> {
  const tags = generateHreflangTags(path, "us", validLocaleSlugs)
  const alternates: Record<string, string> = {}
  for (const tag of tags) {
    alternates[tag.hreflang] = tag.href
  }
  return alternates
}
