import type {MetadataRoute} from "next";
import {locales} from "@/lib/seo/locales";
import {getToolsBySlugs, stateSeoToolSlugs, tierAToolSlugs, tools} from "@/lib/content/templates";
import {guides} from "@/lib/content/guide-templates";
import {stateDataSets} from "@/lib/content/state-data";
import {costOfLivingData} from "@/lib/content/state-expansion";
import {glossaryEntries} from "@/lib/content/glossary";
import {researchReports} from "@/lib/content/research";
import {comparisonPairs} from "@/lib/content/comparison-engine";
import {professions} from "@/lib/content/professions-data";
import {professionComparisonPairs} from "@/lib/content/profession-comparisons";
import {getCitiesForCountry} from "@/lib/content/cities-data";
import {SITE_URL} from "@/lib/seo/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();
  const tierATools = getToolsBySlugs(tierAToolSlugs);
  const stateSeoTools = getToolsBySlugs(stateSeoToolSlugs);

  const staticPages = [
    "about",
    "contact",
    "privacy-policy",
    "terms",
    "disclaimer",
    "compare",
    "countries",
    "data-sources",
    "editorial-policy",
    "methodology",
    "professions",
    "professions/software-engineer",
    "professions/data-scientist",
    "rankings",
    "research",
    "software-engineer",
    "software-engineer-salary",
    "software-engineer-salary-us",
    "software-engineer-salary-uk",
    "software-engineer-salary-australia",
    "software-engineer-salary-canada",
    "software-engineer-salary-new-zealand",
    "software-engineer-salary-singapore",
    "software-engineer-salary-india",
    "software-engineer-tax-adjusted-salary",
    "software-engineer-ppp-adjusted-salary",
    "software-engineer-highest-paying-countries",
    "software-engineer-best-countries",
    "software-engineer-salary-by-country",
    "software-engineer-vs-data-scientist",
    "software-engineer-vs-product-manager",
    "software-engineer-vs-cybersecurity-analyst",
    "software-engineer-us-vs-uk",
    "software-engineer-us-vs-canada",
    "software-engineer-uk-vs-australia",
    "data-scientist",
    "data-scientist-salary",
    "data-scientist-salary-us",
    "data-scientist-salary-uk",
    "data-scientist-salary-australia",
    "data-scientist-salary-canada",
    "data-scientist-salary-new-zealand",
    "data-scientist-salary-singapore",
    "data-scientist-salary-india",
    "data-scientist-tax-adjusted-salary",
    "data-scientist-ppp-adjusted-salary",
    "data-scientist-highest-paying-countries",
    "data-scientist-best-countries",
    "data-scientist-salary-by-country",
    "data-scientist-vs-software-engineer",
    "data-scientist-vs-product-manager",
    "data-scientist-vs-data-analyst",
    "data-scientist-us-vs-uk",
    "data-scientist-us-vs-canada",
    "data-scientist-uk-vs-australia",
    "product-manager",
    "product-manager-salary",
    "product-manager-salary-us",
    "product-manager-salary-uk",
    "product-manager-salary-canada",
    "product-manager-salary-australia",
    "product-manager-salary-singapore",
    "product-manager-salary-new-zealand",
    "product-manager-salary-india",
    "product-manager-tax-adjusted-salary",
    "product-manager-ppp-adjusted-salary",
    "highest-paying-countries-for-product-managers",
    "product-manager-salary-by-country",
    "best-countries-for-product-managers",
    "product-manager-us-vs-uk",
    "product-manager-us-vs-canada",
    "product-manager-uk-vs-australia",
    "product-manager-vs-software-engineer",
    "product-manager-vs-data-scientist",
    "ai-engineer",
    "ai-engineer-salary",
    "ai-engineer-salary-us",
    "ai-engineer-salary-uk",
    "ai-engineer-salary-canada",
    "ai-engineer-salary-australia",
    "ai-engineer-salary-new-zealand",
    "ai-engineer-salary-singapore",
    "ai-engineer-salary-india",
    "ai-engineer-tax-adjusted-salary",
    "ai-engineer-ppp-adjusted-salary",
    "ai-engineer-highest-paying-countries",
    "ai-engineer-best-countries",
    "ai-engineer-salary-by-country",
    "machine-learning-engineer",
    "machine-learning-engineer-salary",
    "machine-learning-engineer-salary-us",
    "machine-learning-engineer-salary-uk",
    "machine-learning-engineer-salary-canada",
    "machine-learning-engineer-salary-australia",
    "machine-learning-engineer-salary-new-zealand",
    "machine-learning-engineer-salary-singapore",
    "machine-learning-engineer-salary-india",
    "machine-learning-engineer-tax-adjusted-salary",
    "machine-learning-engineer-ppp-adjusted-salary",
    "machine-learning-engineer-highest-paying-countries",
    "machine-learning-engineer-best-countries",
    "machine-learning-engineer-salary-by-country",
    "cloud-engineer",
    "cloud-engineer-salary",
    "cloud-engineer-salary-us",
    "cloud-engineer-salary-uk",
    "cloud-engineer-salary-canada",
    "cloud-engineer-salary-australia",
    "cloud-engineer-salary-new-zealand",
    "cloud-engineer-salary-singapore",
    "cloud-engineer-salary-india",
    "cloud-engineer-tax-adjusted-salary",
    "cloud-engineer-ppp-adjusted-salary",
    "cloud-engineer-highest-paying-countries",
    "cloud-engineer-best-countries",
    "cloud-engineer-salary-by-country",
    "cybersecurity-analyst",
    "cybersecurity-analyst-salary",
    "cybersecurity-analyst-salary-us",
    "cybersecurity-analyst-salary-uk",
    "cybersecurity-analyst-salary-canada",
    "cybersecurity-analyst-salary-australia",
    "cybersecurity-analyst-salary-new-zealand",
    "cybersecurity-analyst-salary-singapore",
    "cybersecurity-analyst-salary-india",
    "cybersecurity-analyst-tax-adjusted-salary",
    "cybersecurity-analyst-ppp-adjusted-salary",
    "cybersecurity-analyst-highest-paying-countries",
    "cybersecurity-analyst-best-countries",
    "cybersecurity-analyst-salary-by-country",
    "devops-engineer",
    "devops-engineer-salary",
    "devops-engineer-salary-us",
    "devops-engineer-salary-uk",
    "devops-engineer-salary-canada",
    "devops-engineer-salary-australia",
    "devops-engineer-salary-new-zealand",
    "devops-engineer-salary-singapore",
    "devops-engineer-salary-india",
    "devops-engineer-tax-adjusted-salary",
    "devops-engineer-ppp-adjusted-salary",
    "devops-engineer-highest-paying-countries",
    "devops-engineer-best-countries",
    "devops-engineer-salary-by-country",
    "financial-analyst",
    "financial-analyst-salary",
    "financial-analyst-salary-us",
    "financial-analyst-salary-uk",
    "financial-analyst-salary-canada",
    "financial-analyst-salary-australia",
    "financial-analyst-salary-new-zealand",
    "financial-analyst-salary-singapore",
    "financial-analyst-salary-india",
    "financial-analyst-tax-adjusted-salary",
    "financial-analyst-ppp-adjusted-salary",
    "financial-analyst-highest-paying-countries",
    "financial-analyst-best-countries",
    "financial-analyst-salary-by-country",
    "business-analyst",
    "business-analyst-salary",
    "business-analyst-salary-us",
    "business-analyst-salary-uk",
    "business-analyst-salary-canada",
    "business-analyst-salary-australia",
    "business-analyst-salary-new-zealand",
    "business-analyst-salary-singapore",
    "business-analyst-salary-india",
    "business-analyst-tax-adjusted-salary",
    "business-analyst-ppp-adjusted-salary",
    "business-analyst-highest-paying-countries",
    "business-analyst-best-countries",
    "business-analyst-salary-by-country",
    "project-manager",
    "project-manager-salary",
    "project-manager-salary-us",
    "project-manager-salary-uk",
    "project-manager-salary-canada",
    "project-manager-salary-australia",
    "project-manager-salary-new-zealand",
    "project-manager-salary-singapore",
    "project-manager-salary-india",
    "project-manager-tax-adjusted-salary",
    "project-manager-ppp-adjusted-salary",
    "project-manager-highest-paying-countries",
    "project-manager-best-countries",
    "project-manager-salary-by-country",
    "solutions-architect",
    "solutions-architect-salary",
    "solutions-architect-salary-us",
    "solutions-architect-salary-uk",
    "solutions-architect-salary-canada",
    "solutions-architect-salary-australia",
    "solutions-architect-salary-new-zealand",
    "solutions-architect-salary-singapore",
    "solutions-architect-salary-india",
    "solutions-architect-tax-adjusted-salary",
    "solutions-architect-ppp-adjusted-salary",
    "solutions-architect-highest-paying-countries",
    "solutions-architect-best-countries",
    "solutions-architect-salary-by-country",
    "data-engineer",
    "data-engineer-salary",
    "data-engineer-salary-us",
    "data-engineer-salary-uk",
    "data-engineer-salary-canada",
    "data-engineer-salary-australia",
    "data-engineer-salary-new-zealand",
    "data-engineer-salary-singapore",
    "data-engineer-salary-india",
    "data-engineer-tax-adjusted-salary",
    "data-engineer-ppp-adjusted-salary",
    "data-engineer-highest-paying-countries",
    "data-engineer-best-countries",
    "data-engineer-salary-by-country",
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
    "research/product-manager-salary-index-2026",
    "research/global-salary-report-2026",
    "rankings/highest-paying-cities-product-managers",
    "methodology/olikit-scoring-system",
  ];

  entries.push({
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  });

  for (const page of staticPages) {
    entries.push({
      url: `${SITE_URL}/${page}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  entries.push({
    url: `${SITE_URL}/world`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.7,
  });

  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale.slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    });

    entries.push({
      url: `${SITE_URL}/${locale.slug}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    entries.push({
      url: `${SITE_URL}/${locale.slug}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const tool of tools) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/tools/${tool.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: tierATools.some((tierTool) => tierTool.slug === tool.slug) ? 0.9 : 0.7,
      });
    }

    for (const guide of guides) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/guides/${guide.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    entries.push({
      url: `${SITE_URL}/${locale.slug}/salary`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    for (const profession of professions) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/salary/${profession.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    // City × Profession programmatic pages
    const localeCities = getCitiesForCountry(locale.slug);
    for (const city of localeCities) {
      for (const profession of professions) {
        entries.push({
          url: `${SITE_URL}/${locale.slug}/city/${city.slug}/${profession.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }

    entries.push({
      url: `${SITE_URL}/${locale.slug}/best-states-for-salary`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    entries.push({
      url: `${SITE_URL}/${locale.slug}/best-states-for-cost-of-living`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    entries.push({
      url: `${SITE_URL}/${locale.slug}/best-states-for-retirement`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    entries.push({
      url: `${SITE_URL}/${locale.slug}/best-states-for-home-affordability`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const entry of glossaryEntries) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/glossary/${entry.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    entries.push({
      url: `${SITE_URL}/${locale.slug}/research`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const report of researchReports) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/research/${report.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    entries.push({
      url: `${SITE_URL}/${locale.slug}/rankings`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    entries.push({
      url: `${SITE_URL}/${locale.slug}/comparisons`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });

    entries.push({
      url: `${SITE_URL}/${locale.slug}/glossary`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });

    entries.push({
      url: `${SITE_URL}/${locale.slug}/financial-data`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });

    entries.push({
      url: `${SITE_URL}/${locale.slug}/guides/best`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });

    if (locale.states) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/states`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }

    for (const pair of comparisonPairs) {
      const slugA = pair.regionA ?? pair.pairA;
      const slugB = pair.regionB ?? pair.pairB;
      entries.push({
        url: `${SITE_URL}/${locale.slug}/comparisons/${pair.type}/${slugA}-vs-${slugB}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }

    for (const pair of professionComparisonPairs) {
      entries.push({
        url: `${SITE_URL}/${locale.slug}/comparisons/profession-salary/${pair.professionSlug}-${pair.pairA}-vs-${pair.pairB}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }

    if (locale.states) {
      for (const state of locale.states) {
        entries.push({
          url: `${SITE_URL}/${locale.slug}/state/${state.slug}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.7,
        });

        entries.push({
          url: `${SITE_URL}/${locale.slug}/state/${state.slug}/take-home-pay`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.8,
        });

        for (const tool of stateSeoTools) {
          entries.push({
            url: `${SITE_URL}/${locale.slug}/state/${state.slug}/${tool.slug}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
          });
        }
      }

      for (const stateDataset of stateDataSets) {
        if (locale.states.some((s) => s.slug === stateDataset.stateSlug)) {
          entries.push({
            url: `${SITE_URL}/${locale.slug}/average-salary/${stateDataset.stateSlug}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
          });
        }
      }

      for (const stateSlug of Object.keys(costOfLivingData)) {
        if (locale.states.some((s) => s.slug === stateSlug)) {
          entries.push({
            url: `${SITE_URL}/${locale.slug}/cost-of-living/${stateSlug}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
          });
        }
      }

      for (const stateSlug of Object.keys(costOfLivingData)) {
        if (locale.states.some((s) => s.slug === stateSlug)) {
          entries.push({
            url: `${SITE_URL}/${locale.slug}/salary-vs-cost-of-living/${stateSlug}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
          });
        }
      }
    }
  }

  return entries;
}
