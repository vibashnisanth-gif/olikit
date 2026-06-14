import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/machine-learning-engineer-salary-by-country"
const seoTitle = "Machine Learning Engineer Salary by Country (2026)"
const seoDesc = "Compare machine learning engineer salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

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
      title: "Machine Learning Engineer Salary by Country",
      description: "Compare machine learning engineer salaries across 7 major economies. View average, entry-level, and experienced salaries side by side.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$130,000 (US)" },
      { label: "Wide Range", value: "$7K-$210K+" },
    ],
    salaryTable: {
      title: "Machine Learning Engineer Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "🇺🇸 United States", average: "$130,000", entryLevel: "$80,000", experienced: "$190,000", range: "$68K - $240K" },
        { country: "🇬🇧 United Kingdom", average: "£60,000", entryLevel: "£34,000", experienced: "£92,000", range: "£29K - £115K" },
        { country: "🇨🇦 Canada", average: "C$90,000", entryLevel: "C$58,000", experienced: "C$140,000", range: "C$50K - C$170K" },
        { country: "🇦🇺 Australia", average: "A$120,000", entryLevel: "A$72,000", experienced: "A$175,000", range: "A$62K - A$210K" },
        { country: "🇳🇿 New Zealand", average: "NZ$100,000", entryLevel: "NZ$62,000", experienced: "NZ$150,000", range: "NZ$53K - NZ$180K" },
        { country: "🇸🇬 Singapore", average: "S$82,000", entryLevel: "S$48,000", experienced: "S$125,000", range: "S$40K - S$155K" },
        { country: "🇮🇳 India", average: "₹16.0L", entryLevel: "₹5.0L", experienced: "₹32.0L", range: "₹400K - ₹4000K" },
      ],
    },
    faqs: [
      { question: "Which country pays machine learning engineers the most?", answer: "The United States pays the highest average salary at $130,000." },
      { question: "What is the entry-level machine learning engineer salary by country?", answer: "Entry-level salaries range from $80,000 (US) to £34,000 (UK) and ₹5.0L (India)." },
    ],
    relatedPages: [
      { label: "Machine Learning Engineer Hub", href: "/machine-learning-engineer" },
      { label: "Highest Paying Countries", href: "/machine-learning-engineer-highest-paying-countries" },
      { label: "Best Countries", href: "/machine-learning-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/machine-learning-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/machine-learning-engineer-ppp-adjusted-salary" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
