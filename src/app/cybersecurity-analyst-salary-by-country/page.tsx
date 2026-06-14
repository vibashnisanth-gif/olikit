import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cybersecurity-analyst-salary-by-country"
const seoTitle = "Cybersecurity Analyst Salary by Country (2026)"
const seoDesc = "Compare cybersecurity analyst salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

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
      title: "Cybersecurity Analyst Salary by Country",
      description: "Compare cybersecurity analyst salaries across 7 major economies. View average, entry-level, and experienced salaries side by side.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$105,000 (US)" },
      { label: "Wide Range", value: "$5K-$175K+" },
    ],
    salaryTable: {
      title: "Cybersecurity Analyst Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "🇺🇸 United States", average: "$105,000", entryLevel: "$65,000", experienced: "$160,000", range: "$55K - $195K" },
        { country: "🇬🇧 United Kingdom", average: "£48,000", entryLevel: "£28,000", experienced: "£75,000", range: "£24K - £90K" },
        { country: "🇨🇦 Canada", average: "C$78,000", entryLevel: "C$48,000", experienced: "C$120,000", range: "C$42K - C$145K" },
        { country: "🇦🇺 Australia", average: "A$100,000", entryLevel: "A$60,000", experienced: "A$150,000", range: "A$52K - A$180K" },
        { country: "🇳🇿 New Zealand", average: "NZ$80,000", entryLevel: "NZ$50,000", experienced: "NZ$120,000", range: "NZ$42K - NZ$145K" },
        { country: "🇸🇬 Singapore", average: "S$65,000", entryLevel: "S$36,000", experienced: "S$100,000", range: "S$30K - S$125K" },
        { country: "🇮🇳 India", average: "₹9.0L", entryLevel: "₹3.0L", experienced: "₹18.0L", range: "₹250K - ₹2200K" },
      ],
    },
    faqs: [
      { question: "Which country pays cybersecurity analysts the most?", answer: "The United States pays the highest average salary at $105,000." },
      { question: "What is the entry-level cybersecurity analyst salary by country?", answer: "Entry-level salaries range from $65,000 (US) to £28,000 (UK) and ₹3.0L (India)." },
    ],
    relatedPages: [
      { label: "Cybersecurity Analyst Hub", href: "/cybersecurity-analyst" },
      { label: "Highest Paying Countries", href: "/cybersecurity-analyst-highest-paying-countries" },
      { label: "Best Countries", href: "/cybersecurity-analyst-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/cybersecurity-analyst-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/cybersecurity-analyst-ppp-adjusted-salary" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
