import type { MetadataRoute } from "next"
import { locales } from "@/lib/seo/locales"
import { getToolsBySlugs, stateSeoToolSlugs, tierAToolSlugs, tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { SITE_URL } from "@/lib/seo/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const now = new Date()
  const tierATools = getToolsBySlugs(tierAToolSlugs)
  const stateSeoTools = getToolsBySlugs(stateSeoToolSlugs)

  const staticPages = ["about", "contact", "privacy-policy", "terms", "disclaimer"]

  entries.push({
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  })

  for (const page of staticPages) {
    entries.push({
      url: `${SITE_URL}/${page}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    })
  }

  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale.slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    })

    for (const tool of tools) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/tools/${tool.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: tierATools.some((tierTool) => tierTool.slug === tool.slug) ? 0.9 : 0.7,
      })
      entries.push({
        url: `${SITE_URL}/${locale.slug}/tools/${tool.slug}/compare`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.5,
      })
    }

    for (const guide of guides) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/guides/${guide.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      })
    }

    if (locale.states) {
      for (const state of locale.states) {
        entries.push({
          url: `${SITE_URL}/${locale.slug}/state/${state.slug}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.7,
        })

        for (const tool of stateSeoTools) {
          entries.push({
            url: `${SITE_URL}/${locale.slug}/state/${state.slug}/${tool.slug}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
          })
        }
      }
    }
  }

  return entries
}
