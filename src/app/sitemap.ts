import type { MetadataRoute } from "next"
import { locales } from "@/lib/seo/locales"
import { getToolsBySlugs, stateSeoToolSlugs, tierAToolSlugs, tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { stateDataSets } from "@/lib/content/state-data"
import { costOfLivingData } from "@/lib/content/state-expansion"
import { glossaryEntries } from "@/lib/content/glossary"
import { researchReports } from "@/lib/content/research"
import { comparisonPairs } from "@/lib/content/comparison-engine"
import { professions } from "@/lib/content/professions-data"
import { professionComparisonPairs } from "@/lib/content/profession-comparisons"
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

    entries.push({
      url: `${SITE_URL}/${locale.slug}/salary`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    })

    for (const profession of professions) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/salary/${profession.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      })
    }

    entries.push({
      url: `${SITE_URL}/${locale.slug}/financial-data`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    entries.push({
      url: `${SITE_URL}/${locale.slug}/best-states-for-salary`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    entries.push({
      url: `${SITE_URL}/${locale.slug}/best-states-for-cost-of-living`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    entries.push({
      url: `${SITE_URL}/${locale.slug}/best-states-for-retirement`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    entries.push({
      url: `${SITE_URL}/${locale.slug}/best-states-for-home-affordability`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    entries.push({
      url: `${SITE_URL}/${locale.slug}/glossary`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })

    for (const entry of glossaryEntries) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/glossary/${entry.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      })
    }

    entries.push({
      url: `${SITE_URL}/${locale.slug}/research`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    for (const report of researchReports) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/research/${report.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }

    entries.push({
      url: `${SITE_URL}/${locale.slug}/updates`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    })

    entries.push({
      url: `${SITE_URL}/${locale.slug}/search`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.6,
    })

    for (const pair of comparisonPairs) {
      const slugA = pair.regionA ?? pair.pairA
      const slugB = pair.regionB ?? pair.pairB
      entries.push({
        url: `${SITE_URL}/${locale.slug}/comparisons/${pair.type}/${slugA}-vs-${slugB}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      })
    }

    for (const pair of professionComparisonPairs) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/comparisons/profession-salary/${pair.professionSlug}-${pair.pairA}-vs-${pair.pairB}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
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

      for (const stateDataset of stateDataSets) {
        if (locale.states.some((s) => s.slug === stateDataset.stateSlug)) {
          entries.push({
            url: `${SITE_URL}/${locale.slug}/average-salary/${stateDataset.stateSlug}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
          })
        }
      }

      for (const stateSlug of Object.keys(costOfLivingData)) {
        if (locale.states.some((s) => s.slug === stateSlug)) {
          entries.push({
            url: `${SITE_URL}/${locale.slug}/cost-of-living/${stateSlug}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
          })
        }
      }

      for (const stateSlug of Object.keys(costOfLivingData)) {
        if (locale.states.some((s) => s.slug === stateSlug)) {
          entries.push({
            url: `${SITE_URL}/${locale.slug}/salary-vs-cost-of-living/${stateSlug}`,
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
