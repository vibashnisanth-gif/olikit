import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo/constants"

/**
 * Sitemap for AdSense approval - only includes high-value pages.
 * Thin/templated pages are excluded to avoid "scaled content" penalties.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const now = new Date()

  // Core pages (always indexed)
  const corePages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "privacy-policy", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "terms", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "disclaimer", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "methodology", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "data-sources", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "editorial-policy", priority: 0.7, changeFrequency: "yearly" as const },
  ]

  for (const page of corePages) {
    entries.push({
      url: page.path ? `${SITE_URL}/${page.path}` : SITE_URL,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  }

  // Country hub pages (strong, unique content)
  const countries = [
    { slug: "us", name: "United States" },
    { slug: "uk", name: "United Kingdom" },
    { slug: "au", name: "Australia" },
    { slug: "ca", name: "Canada" },
    { slug: "nz", name: "New Zealand" },
    { slug: "sg", name: "Singapore" },
    { slug: "in", name: "India" },
  ]

  for (const country of countries) {
    entries.push({
      url: `${SITE_URL}/${country.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  }

  // Research articles (unique editorial content)
  const researchPages = [
    "research",
    "research/global-salary-index-2026",
    "research/software-engineer-salary-index-2026",
    "research/data-scientist-salary-index-2026",
    "research/product-manager-salary-index-2026",
  ]

  for (const page of researchPages) {
    entries.push({
      url: `${SITE_URL}/${page}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  }

  // Key profession hubs (only the strongest ones)
  const professionHubs = [
    "software-engineer",
    "data-scientist",
    "product-manager",
  ]

  for (const profession of professionHubs) {
    entries.push({
      url: `${SITE_URL}/${profession}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  // Compare page (unique tool)
  entries.push({
    url: `${SITE_URL}/compare`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  })

  // Countries overview
  entries.push({
    url: `${SITE_URL}/countries`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  })

  return entries
}
