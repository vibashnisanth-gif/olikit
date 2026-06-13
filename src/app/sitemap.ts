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

  const staticPages = [
    "about", "contact", "privacy-policy", "terms", "disclaimer",
    "compare", "countries", "data-sources", "editorial-policy", "methodology",
    "professions", "professions/software-engineer", "professions/data-scientist", "rankings", "research",
    "software-engineer", "software-engineer-salary",
    "software-engineer-salary-us", "software-engineer-salary-uk",
    "software-engineer-salary-australia", "software-engineer-salary-canada",
    "software-engineer-salary-new-zealand", "software-engineer-salary-singapore",
    "software-engineer-salary-india",
    "software-engineer-tax-adjusted-salary", "software-engineer-ppp-adjusted-salary",
    "software-engineer-highest-paying-countries", "software-engineer-best-countries",
    "software-engineer-salary-by-country",
    "software-engineer-vs-data-scientist", "software-engineer-vs-product-manager",
    "software-engineer-vs-cybersecurity-analyst",
    "software-engineer-us-vs-uk", "software-engineer-us-vs-canada",
    "software-engineer-uk-vs-australia",
    "data-scientist", "data-scientist-salary",
    "data-scientist-salary-us", "data-scientist-salary-uk",
    "data-scientist-salary-australia", "data-scientist-salary-canada",
    "data-scientist-salary-new-zealand", "data-scientist-salary-singapore",
    "data-scientist-salary-india",
    "data-scientist-tax-adjusted-salary", "data-scientist-ppp-adjusted-salary",
    "data-scientist-highest-paying-countries", "data-scientist-best-countries",
    "data-scientist-salary-by-country",
    "data-scientist-vs-software-engineer", "data-scientist-vs-product-manager",
    "data-scientist-vs-data-analyst",
    "data-scientist-us-vs-uk", "data-scientist-us-vs-canada",
    "data-scientist-uk-vs-australia",
    "product-manager", "product-manager-salary",
    "product-manager-salary-us", "product-manager-salary-uk",
    "product-manager-salary-canada", "product-manager-salary-australia",
    "product-manager-salary-singapore", "product-manager-salary-new-zealand",
    "product-manager-salary-india",
    "product-manager-tax-adjusted-salary", "product-manager-ppp-adjusted-salary",
    "highest-paying-countries-for-product-managers",
    "product-manager-salary-by-country",
    "best-countries-for-product-managers",
    "product-manager-us-vs-uk", "product-manager-us-vs-canada",
    "product-manager-uk-vs-australia",
    "product-manager-vs-software-engineer", "product-manager-vs-data-scientist",
    "comparisons",
    "software-engineer-us-vs-australia",
    "software-engineer-india-vs-singapore",
    "comparisons/data-scientist-us-vs-canada",
    "comparisons/data-scientist-us-vs-australia",
    "comparisons/data-scientist-uk-vs-australia",
    "comparisons/data-scientist-india-vs-singapore",
    "comparisons/data-scientist-us-vs-uk",
    "rankings/highest-paying-countries-software-engineers",
    "rankings/highest-paying-cities-software-engineers",
    "rankings/best-countries-for-software-engineers",
    "rankings/highest-paying-countries-data-scientists",
    "rankings/highest-paying-cities-data-scientists",
    "rankings/best-countries-for-data-scientists",
    "research/software-engineer-salary-index-2026",
    "research/data-scientist-salary-index-2026",
    "research/global-salary-index-2026",
    "methodology/olikit-scoring-system",
  ]

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

    entries.push({
      url: `${SITE_URL}/${locale.slug}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    entries.push({
      url: `${SITE_URL}/${locale.slug}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    for (const tool of tools) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/tools/${tool.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: tierATools.some((tierTool) => tierTool.slug === tool.slug) ? 0.9 : 0.7,
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
      url: `${SITE_URL}/${locale.slug}/rankings`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    entries.push({
      url: `${SITE_URL}/${locale.slug}/comparisons`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })

    entries.push({
      url: `${SITE_URL}/${locale.slug}/guides/best`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })

    if (locale.states) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/states`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      })
    }

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
