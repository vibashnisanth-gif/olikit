import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/devops-engineer-salary-by-country"
const seoTitle = "DevOps Engineer Salary by Country (2026)"
const seoDesc = "Compare devops engineer salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

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
      title: "DevOps Engineer Salary by Country",
      description: "Compare devops engineer salaries across 7 major economies. View average, entry-level, and experienced salaries side by side.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$125,000 (US)" },
      { label: "Wide Range", value: "$6K-$200K+" },
    ],
    salaryTable: {
      title: "DevOps Engineer Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "🇺🇸 United States", average: "$125,000", entryLevel: "$75,000", experienced: "$180,000", range: "$65K - $220K" },
        { country: "🇬🇧 United Kingdom", average: "£55,000", entryLevel: "£30,000", experienced: "£85,000", range: "£26K - £105K" },
        { country: "🇨🇦 Canada", average: "C$88,000", entryLevel: "C$52,000", experienced: "C$135,000", range: "C$45K - C$160K" },
        { country: "🇦🇺 Australia", average: "A$115,000", entryLevel: "A$68,000", experienced: "A$165,000", range: "A$58K - A$200K" },
        { country: "🇳🇿 New Zealand", average: "NZ$90,000", entryLevel: "NZ$55,000", experienced: "NZ$135,000", range: "NZ$48K - NZ$160K" },
        { country: "🇸🇬 Singapore", average: "S$72,000", entryLevel: "S$42,000", experienced: "S$110,000", range: "S$36K - S$140K" },
        { country: "🇮🇳 India", average: "₹11.0L", entryLevel: "₹4.0L", experienced: "₹22.0L", range: "₹300K - ₹2800K" },
      ],
    },
    faqs: [
      { question: "Which country pays devops engineers the most?", answer: "The United States pays the highest average salary at $125,000." },
      { question: "What is the entry-level devops engineer salary by country?", answer: "Entry-level salaries range from $75,000 (US) to £30,000 (UK) and ₹4.0L (India)." },
    ],
    relatedPages: [
      { label: "DevOps Engineer Hub", href: "/devops-engineer" },
      { label: "Highest Paying Countries", href: "/devops-engineer-highest-paying-countries" },
      { label: "Best Countries", href: "/devops-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/devops-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/devops-engineer-ppp-adjusted-salary" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}