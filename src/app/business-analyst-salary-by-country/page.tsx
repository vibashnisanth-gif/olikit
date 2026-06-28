import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/business-analyst-salary-by-country"
const seoTitle = "Business Analyst Salary by Country (2026)"
const seoDesc = "Compare business analyst salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

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
      title: "Business Analyst Salary by Country",
      description: "Compare business analyst salaries across 7 major economies. View average, entry-level, and experienced salaries side by side.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$70,000 (US)" },
      { label: "Wide Range", value: "$4K-$130K+" },
    ],
    salaryTable: {
      title: "Business Analyst Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "🇺🇸 United States", average: "$70,000", entryLevel: "$45,000", experienced: "$110,000", range: "$38K - $130K" },
        { country: "🇬🇧 United Kingdom", average: "£38,000", entryLevel: "£24,000", experienced: "£60,000", range: "£20K - £75K" },
        { country: "🇨🇦 Canada", average: "C$58,000", entryLevel: "C$38,000", experienced: "C$90,000", range: "C$34K - C$110K" },
        { country: "🇦🇺 Australia", average: "A$75,000", entryLevel: "A$48,000", experienced: "A$115,000", range: "A$42K - A$135K" },
        { country: "🇳🇿 New Zealand", average: "NZ$58,000", entryLevel: "NZ$38,000", experienced: "NZ$88,000", range: "NZ$34K - NZ$105K" },
        { country: "🇸🇬 Singapore", average: "S$48,000", entryLevel: "S$28,000", experienced: "S$75,000", range: "S$24K - S$95K" },
        { country: "🇮🇳 India", average: "₹5.5L", entryLevel: "₹2.8L", experienced: "₹11.0L", range: "₹220K - ₹1400K" },
      ],
    },
    faqs: [
      { question: "Which country pays business analysts the most?", answer: "The United States pays the highest average salary at $70,000." },
      { question: "What is the entry-level business analyst salary by country?", answer: "Entry-level salaries range from $45,000 (US) to £24,000 (UK) and ₹2.8L (India)." },
    ],
    relatedPages: [
      { label: "Business Analyst Hub", href: "/business-analyst" },
      { label: "Highest Paying Countries", href: "/business-analyst-highest-paying-countries" },
      { label: "Best Countries", href: "/business-analyst-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/business-analyst-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/business-analyst-ppp-adjusted-salary" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}