import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-us-vs-uk"
const seoTitle = "Data Scientist US vs UK: Salary & Career Comparison (2026)"
const seoDesc = "Compare data scientist salaries, taxes, cost of living, and career opportunities between the US and UK."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist US vs UK", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Data Scientist Comparison",
      title: "Data Scientist: United States vs United Kingdom",
      description: "A comprehensive comparison of data scientist careers in the United States and the United Kingdom. Analyze salary differences, tax implications, cost of living variations, and career opportunities.",
    },
    keyTakeaways: [
      { title: "US Offers Higher Salaries", description: "The average data scientist salary in the US ($125,000) is more than double the UK average (\u00a358,000), even before adjusting for the stronger USD." },
      { title: "UK Provides Better Work-Life Balance", description: "The UK offers stronger employment protections, statutory parental leave, and universal healthcare through the NHS." },
      { title: "Immigration Varies Significantly", description: "The UK Skilled Worker Visa offers a more predictable pathway than the US H-1B lottery system." },
    ],
    comparisonTable: {
      title: "Data Scientist Comparison: US vs UK",
      rows: [
        { category: "Average Salary", valueA: "$125,000", valueB: "\u00a358,000 (~$74,000)" },
        { category: "Entry Level", valueA: "$80,000", valueB: "\u00a332,000 (~$41,000)" },
        { category: "Experienced", valueA: "$175,000", valueB: "\u00a390,000 (~$114,000)" },
        { category: "Effective Tax Rate", valueA: "~22%", valueB: "~20%" },
        { category: "Healthcare", valueA: "Employer-based", valueB: "Universal (NHS)" },
        { category: "Work Visa", valueA: "H-1B (lottery)", valueB: "Skilled Worker (points)" },
        { category: "Tech Ecosystem", valueA: "Largest globally", valueB: "Strong fintech sector" },
      ],
    },
    faqs: [
      { question: "How do data scientist salaries compare between the US and UK?", answer: "The average data scientist salary in the US is approximately $125,000 per year, while in the UK it is around \u00a358,000. The gap narrows when considering purchasing power but remains significant." },
      { question: "Which country offers better career opportunities for data scientists?", answer: "The US offers a larger data science job market with more opportunities in AI/ML research and big tech companies. The UK has a strong fintech data science sector centered in London." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Data Scientist Salary US", href: "/data-scientist-salary-us" },
      { label: "Data Scientist Salary UK", href: "/data-scientist-salary-uk" },
      { label: "Data Scientist US vs Canada", href: "/data-scientist-us-vs-canada" },
      { label: "Data Scientist UK vs Australia", href: "/data-scientist-uk-vs-australia" },
      { label: "Highest Paying Countries", href: "/data-scientist-highest-paying-countries" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}