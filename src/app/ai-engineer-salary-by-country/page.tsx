import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/ai-engineer-salary-by-country"
const seoTitle = "AI Engineer Salary by Country (2026)"
const seoDesc = "Compare ai engineer salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

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
      title: "AI Engineer Salary by Country",
      description: "Compare ai engineer salaries across 7 major economies. View average, entry-level, and experienced salaries side by side.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$135,000 (US)" },
      { label: "Wide Range", value: "$7K-$220K+" },
    ],
    salaryTable: {
      title: "AI Engineer Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "🇺🇸 United States", average: "$135,000", entryLevel: "$85,000", experienced: "$200,000", range: "$70K - $250K" },
        { country: "🇬🇧 United Kingdom", average: "£62,000", entryLevel: "£35,000", experienced: "£95,000", range: "£30K - £120K" },
        { country: "🇨🇦 Canada", average: "C$95,000", entryLevel: "C$60,000", experienced: "C$145,000", range: "C$52K - C$175K" },
        { country: "🇦🇺 Australia", average: "A$125,000", entryLevel: "A$75,000", experienced: "A$180,000", range: "A$65K - A$220K" },
        { country: "🇳🇿 New Zealand", average: "NZ$105,000", entryLevel: "NZ$65,000", experienced: "NZ$155,000", range: "NZ$55K - NZ$185K" },
        { country: "🇸🇬 Singapore", average: "S$85,000", entryLevel: "S$50,000", experienced: "S$130,000", range: "S$42K - S$160K" },
        { country: "🇮🇳 India", average: "₹18.0L", entryLevel: "₹6.0L", experienced: "₹35.0L", range: "₹500K - ₹4500K" },
      ],
    },
    faqs: [
      { question: "Which country pays ai engineers the most?", answer: "The United States pays the highest average salary at $135,000." },
      { question: "What is the entry-level ai engineer salary by country?", answer: "Entry-level salaries range from $85,000 (US) to £35,000 (UK) and ₹6.0L (India)." },
    ],
    relatedPages: [
      { label: "AI Engineer Hub", href: "/ai-engineer" },
      { label: "Highest Paying Countries", href: "/ai-engineer-highest-paying-countries" },
      { label: "Best Countries", href: "/ai-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/ai-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/ai-engineer-ppp-adjusted-salary" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
