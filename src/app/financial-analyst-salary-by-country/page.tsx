import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/financial-analyst-salary-by-country"
const seoTitle = "Financial Analyst Salary by Country (2026)"
const seoDesc = "Compare financial analyst salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

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
      title: "Financial Analyst Salary by Country",
      description: "Compare financial analyst salaries across 7 major economies. View average, entry-level, and experienced salaries side by side.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$75,000 (US)" },
      { label: "Wide Range", value: "$4K-$140K+" },
    ],
    salaryTable: {
      title: "Financial Analyst Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "🇺🇸 United States", average: "$75,000", entryLevel: "$50,000", experienced: "$115,000", range: "$42K - $140K" },
        { country: "🇬🇧 United Kingdom", average: "£40,000", entryLevel: "£25,000", experienced: "£65,000", range: "£22K - £80K" },
        { country: "🇨🇦 Canada", average: "C$62,000", entryLevel: "C$40,000", experienced: "C$95,000", range: "C$35K - C$115K" },
        { country: "🇦🇺 Australia", average: "A$80,000", entryLevel: "A$50,000", experienced: "A$120,000", range: "A$45K - A$140K" },
        { country: "🇳🇿 New Zealand", average: "NZ$62,000", entryLevel: "NZ$40,000", experienced: "NZ$90,000", range: "NZ$35K - NZ$110K" },
        { country: "🇸🇬 Singapore", average: "S$50,000", entryLevel: "S$30,000", experienced: "S$80,000", range: "S$26K - S$100K" },
        { country: "🇮🇳 India", average: "₹6.0L", entryLevel: "₹3.0L", experienced: "₹12.0L", range: "₹250K - ₹1500K" },
      ],
    },
    faqs: [
      { question: "Which country pays financial analysts the most?", answer: "The United States pays the highest average salary at $75,000." },
      { question: "What is the entry-level financial analyst salary by country?", answer: "Entry-level salaries range from $50,000 (US) to £25,000 (UK) and ₹3.0L (India)." },
    ],
    relatedPages: [
      { label: "Financial Analyst Hub", href: "/financial-analyst" },
      { label: "Highest Paying Countries", href: "/financial-analyst-highest-paying-countries" },
      { label: "Best Countries", href: "/financial-analyst-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/financial-analyst-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/financial-analyst-ppp-adjusted-salary" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}