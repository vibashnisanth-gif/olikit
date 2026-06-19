import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-salary-by-country"
const seoTitle = "Data Scientist Salary by Country (2026)"
const seoDesc = "Compare data scientist salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Salary by Country", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Global Comparison",
      title: "Data Scientist Salary by Country",
      description: "Compare data scientist salaries across 7 major economies with detailed breakdowns by experience level.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$125,000 (US)" },
      { label: "Wide Range", value: "$7K-$210K+" },
    ],
    salaryTable: {
      title: "Data Scientist Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "\u{1F1FA}\u{1F1F8} United States", average: "$125,000", entryLevel: "$80,000", experienced: "$175,000", range: "$70K - $210K" },
        { country: "\u{1F1EC}\u{1F1E7} United Kingdom", average: "\u00a358,000", entryLevel: "\u00a332,000", experienced: "\u00a390,000", range: "\u00a328K - \u00a3115K" },
        { country: "\u{1F1E8}\u{1F1E6} Canada", average: "C$88,000", entryLevel: "C$55,000", experienced: "C$135,000", range: "C$50K - C$165K" },
        { country: "\u{1F1E6}\u{1F1FA} Australia", average: "A$115,000", entryLevel: "A$70,000", experienced: "A$165,000", range: "A$60K - A$200K" },
        { country: "\u{1F1F3}\u{1F1FF} New Zealand", average: "NZ$100,000", entryLevel: "NZ$60,000", experienced: "NZ$145,000", range: "NZ$55K - NZ$175K" },
        { country: "\u{1F1F8}\u{1F1EC} Singapore", average: "S$78,000", entryLevel: "S$45,000", experienced: "S$120,000", range: "S$40K - S$150K" },
        { country: "\u{1F1EE}\u{1F1F3} India", average: "\u20b914,00,000", entryLevel: "\u20b95,00,000", experienced: "\u20b928,00,000", range: "\u20b94L - \u20b938L" },
      ],
    },
    faqs: [
      { question: "Which country pays data scientists the most?", answer: "The United States pays the highest average data scientist salary at $125,000, followed by Australia at A$115,000 and New Zealand at NZ$100,000." },
      { question: "What is the entry-level data scientist salary by country?", answer: "Entry-level salaries range from $80,000 (US) and A$70,000 (Australia) to \u00a332,000 (UK) and \u20b95,00,000 (India)." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Highest Paying Countries", href: "/data-scientist-highest-paying-countries" },
      { label: "Tax-Adjusted Salary", href: "/data-scientist-tax-adjusted-salary" },
      { label: "Data Scientist US vs UK", href: "/data-scientist-us-vs-uk" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
