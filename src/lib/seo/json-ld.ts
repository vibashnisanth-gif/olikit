import type { Locale, Tool, JsonLd, SubRegion, StateDataPoints } from "@/types/seo"
import { SITE_URL } from "./constants"
import { getDateModified } from "./freshness"

export function buildWebApplicationJsonLd(
  tool: Tool,
  locale: Locale,
  path: string
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${tool.name} - ${locale.name}`,
    url: `${SITE_URL}${path}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Olikit",
      url: SITE_URL,
    },
    dateModified: getDateModified(),
    inLanguage: locale.code,
  }
}

export function buildFaqJsonLd(
  faqs: { question: string; answer: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function buildBreadcrumbJsonLd(
  items: { label: string; url: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.url,
    })),
  }
}

export function buildHowToJsonLd(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
    })),
  }
}

export function buildProductJsonLd(
  tool: Tool,
  locale: Locale
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${tool.name} - ${locale.name}`,
    description: tool.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  }
}

export function buildWebSiteJsonLd(
  locale: Locale,
  subRegion?: SubRegion
): JsonLd {
  const name = subRegion
    ? `Olikit ${subRegion.name}`
    : `Olikit ${locale.name}`

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url: `${SITE_URL}/${locale.slug}`,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/${locale.slug}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function buildOrganizationJsonLd(
  locale: Locale
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Olikit",
    url: `${SITE_URL}/${locale.slug}`,
    description: locale.defaultDescription,
  }
}

export function buildWebPageJsonLd(
  locale: Locale,
  path: string,
  subRegion?: SubRegion
): JsonLd {
  const name = subRegion
    ? `Olikit ${subRegion.name}`
    : `Olikit ${locale.name}`

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: `${SITE_URL}${path}`,
    inLanguage: locale.code,
    dateModified: getDateModified(),
    isPartOf: {
      "@type": "WebSite",
      name: "Olikit",
      url: `${SITE_URL}/${locale.slug}`,
    },
  }
}

export function buildArticleJsonLd(
  title: string,
  description: string,
  path: string,
  locale: Locale,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: locale.code,
    datePublished: getDateModified(),
    dateModified: getDateModified(),
    author: {
      "@type": "Organization",
      name: "Olikit",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Olikit",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
  }
}

export function buildSpeakableJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".direct-answer", ".quick-answer"],
    },
  }
}

export function buildDatasetJsonLd(
  dataPoints: StateDataPoints,
  subRegion: SubRegion,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${subRegion.name} Financial Data Points`,
    description: `Key financial indicators for ${subRegion.name} including average salary, median household income, minimum wage, state income tax rate, property tax rate, median home value, and cost of living index.`,
    about: {
      "@type": "State",
      name: subRegion.name,
    },
    variableMeasured: [
      { name: "Average Salary", description: `$${dataPoints.averageSalary.toLocaleString()} per year` },
      { name: "Median Household Income", description: `$${dataPoints.medianHouseholdIncome.toLocaleString()} per year` },
      { name: "Minimum Wage", description: `$${dataPoints.minimumWage.toFixed(2)} per hour` },
      { name: "State Income Tax", description: dataPoints.stateIncomeTaxRate },
      { name: "Effective Property Tax Rate", description: `${dataPoints.effectivePropertyTaxRate}%` },
      { name: "Median Home Value", description: `$${dataPoints.medianHomeValue.toLocaleString()}` },
      { name: "Cost of Living Index", description: `${dataPoints.costOfLivingIndex} (US average = 100)` },
    ],
  }
}

export function buildAggregateJsonLd(
  tool: Tool,
  locale: Locale,
  path: string,
  faqs?: { question: string; answer: string }[],
  steps?: { name: string; text: string }[]
): JsonLd[] {
  const graphs: JsonLd[] = [
    buildWebApplicationJsonLd(tool, locale, path),
    buildBreadcrumbJsonLd([
      { label: "Home", url: `${SITE_URL}/${locale.slug}` },
      { label: tool.name, url: `${SITE_URL}${path}` },
    ]),
    buildWebSiteJsonLd(locale),
    buildSpeakableJsonLd(),
  ]

  if (faqs && faqs.length > 0) {
    graphs.push(buildFaqJsonLd(faqs))
  }

  if (steps && steps.length > 0) {
    const resolvedDescription = tool.description.replace("{country}", locale.name)
    graphs.push(buildHowToJsonLd(tool.name, resolvedDescription, steps))
  }

  return graphs
}
