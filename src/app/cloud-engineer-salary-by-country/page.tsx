import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cloud-engineer-salary-by-country"
const seoTitle = "Cloud Engineer Salary by Country (2026)"
const seoDesc = "Compare cloud engineer salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

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
      title: "Cloud Engineer Salary by Country",
      description: "Compare cloud engineer salaries across 7 major economies. View average, entry-level, and experienced salaries side by side.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$115,000 (US)" },
      { label: "Wide Range", value: "$6K-$190K+" },
    ],
    salaryTable: {
      title: "Cloud Engineer Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "🇺🇸 United States", average: "$115,000", entryLevel: "$70,000", experienced: "$170,000", range: "$60K - $210K" },
        { country: "🇬🇧 United Kingdom", average: "£50,000", entryLevel: "£28,000", experienced: "£78,000", range: "£24K - £95K" },
        { country: "🇨🇦 Canada", average: "C$82,000", entryLevel: "C$50,000", experienced: "C$125,000", range: "C$45K - C$150K" },
        { country: "🇦🇺 Australia", average: "A$105,000", entryLevel: "A$65,000", experienced: "A$155,000", range: "A$55K - A$190K" },
        { country: "🇳🇿 New Zealand", average: "NZ$85,000", entryLevel: "NZ$52,000", experienced: "NZ$125,000", range: "NZ$45K - NZ$150K" },
        { country: "🇸🇬 Singapore", average: "S$68,000", entryLevel: "S$38,000", experienced: "S$105,000", range: "S$32K - S$130K" },
        { country: "🇮🇳 India", average: "₹10.0L", entryLevel: "₹3.5L", experienced: "₹20.0L", range: "₹280K - ₹2500K" },
      ],
    },
    faqs: [
      { question: "Which country pays cloud engineers the most?", answer: "The United States pays the highest average salary at $115,000." },
      { question: "What is the entry-level cloud engineer salary by country?", answer: "Entry-level salaries range from $70,000 (US) to £28,000 (UK) and ₹3.5L (India)." },
    ],
    relatedPages: [
      { label: "Cloud Engineer Hub", href: "/cloud-engineer" },
      { label: "Highest Paying Countries", href: "/cloud-engineer-highest-paying-countries" },
      { label: "Best Countries", href: "/cloud-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/cloud-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/cloud-engineer-ppp-adjusted-salary" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}