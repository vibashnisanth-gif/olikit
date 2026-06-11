import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import type { SalaryIndexContent } from "@/lib/content/salary-index-types"
import { Shell } from "@/components/shell"
import { SalaryIndexRenderer } from "@/components/salary-index-renderer"

const pagePath = "/research/software-engineer-salary-index-2026"

export const metadata: Metadata = {
  title: "Software Engineer Salary Index 2026 | Global Research Report",
  description: "A comprehensive research report analyzing software engineer salaries, purchasing power, and career dynamics across the world's leading technology markets.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Software Engineer Salary Index 2026 | Global Research Report | Olikit",
    description: "Flagship research report analyzing software engineer salaries across 7 major economies. Includes salary rankings, purchasing power analysis, and country profiles.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "article",
  },
}

export default function SalaryIndexPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Software Engineer Salary Index 2026",
    description: "A comprehensive research report analyzing software engineer salaries, purchasing power, and career dynamics across the world's leading technology markets.",
    url: `${SITE_URL}${pagePath}`,
    datePublished: "2026-01-15",
    dateModified: new Date().toISOString().split("T")[0],
    author: { "@type": "Organization", name: "Olikit", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Olikit", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${pagePath}` },
  }

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Research", url: `${SITE_URL}/research` },
    { label: "Software Engineer Salary Index 2026", url: `${SITE_URL}${pagePath}` },
  ])

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SalaryIndexRenderer content={contentData} />
    </Shell>
  )
}

const contentData: SalaryIndexContent = {
  seo: {
    metaTitle: "Software Engineer Salary Index 2026 | Global Research Report",
    metaDescription: "BLOCKED — Awaiting Content.",
  },
  hero: {
    badge: "BLOCKED — Awaiting Content",
    title: "Software Engineer Salary Index 2026",
    description: "BLOCKED — Awaiting Content.",
  },
  researchMetadata: {
    coverageYear: "BLOCKED — Awaiting Content",
    profession: "Software Engineer",
    methodologyVersion: "BLOCKED — Awaiting Content",
    countriesCount: "BLOCKED — Awaiting Content",
    lastUpdated: "BLOCKED — Awaiting Content",
    dataStatus: "BLOCKED — Awaiting Content",
  },
  quickAnswers: [],
  executiveSummary: {
    paragraphs: ["BLOCKED — Awaiting Content."],
  },
  globalMarketOverview: {
    title: "Global Market Overview",
    paragraphs: ["BLOCKED — Awaiting Content."],
  },
  compensationLandscape: {
    title: "Compensation Landscape",
    paragraphs: ["BLOCKED — Awaiting Content."],
  },
  taxAndNetIncomeAnalysis: {
    title: "Tax and Net Income Analysis",
    paragraphs: ["BLOCKED — Awaiting Content."],
  },
  purchasingPowerAnalysis: {
    title: "Purchasing Power Analysis",
    paragraphs: ["BLOCKED — Awaiting Content."],
  },
  costOfLivingAnalysis: {
    title: "Cost of Living Analysis",
    paragraphs: ["BLOCKED — Awaiting Content."],
  },
  countryIntelligence: [],
  relocationIntelligence: [],
  technologyEcosystemAnalysis: {
    title: "Technology Ecosystem Analysis",
    paragraphs: ["BLOCKED — Awaiting Content."],
  },
  keyFindings: [],
  methodology: {
    overviews: ["BLOCKED — Awaiting Content."],
    deepDives: [],
  },
  researchLimitations: {
    title: "Research Limitations",
    paragraphs: ["BLOCKED — Awaiting Content."],
  },
  dataInterpretationGuidance: {
    title: "How to Interpret This Research",
    paragraphs: ["BLOCKED — Awaiting Content."],
  },
  faq: [],
  sources: [],
  relatedPages: [
    { label: "Software Engineer Hub", href: "/professions/software-engineer" },
    { label: "Highest Paying Countries for Software Engineers", href: "/rankings/highest-paying-countries-software-engineers" },
    { label: "Highest Paying Cities for Software Engineers", href: "/rankings/highest-paying-cities-software-engineers" },
    { label: "Best Countries for Software Engineers", href: "/rankings/best-countries-for-software-engineers" },
    { label: "Software Engineer Salary US", href: "/software-engineer-salary-us" },
    { label: "Software Engineer Salary UK", href: "/software-engineer-salary-uk" },
    { label: "Software Engineer Salary Australia", href: "/software-engineer-salary-australia" },
    { label: "Software Engineer Salary Canada", href: "/software-engineer-salary-canada" },
    { label: "Software Engineer Salary Singapore", href: "/software-engineer-salary-singapore" },
    { label: "Software Engineer Salary New Zealand", href: "/software-engineer-salary-new-zealand" },
    { label: "Software Engineer Salary India", href: "/software-engineer-salary-india" },
    { label: "Global Research", href: "/research" },
  ],
}
