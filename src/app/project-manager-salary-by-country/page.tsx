import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/project-manager-salary-by-country"
const seoTitle = "Project Manager Salary by Country (2026)"
const seoDesc = "Compare project manager salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

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
      title: "Project Manager Salary by Country",
      description: "Compare project manager salaries across 7 major economies. View average, entry-level, and experienced salaries side by side.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$85,000 (US)" },
      { label: "Wide Range", value: "$5K-$150K+" },
    ],
    salaryTable: {
      title: "Project Manager Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "🇺🇸 United States", average: "$85,000", entryLevel: "$55,000", experienced: "$130,000", range: "$48K - $155K" },
        { country: "🇬🇧 United Kingdom", average: "£42,000", entryLevel: "£26,000", experienced: "£68,000", range: "£22K - £85K" },
        { country: "🇨🇦 Canada", average: "C$68,000", entryLevel: "C$42,000", experienced: "C$105,000", range: "C$38K - C$125K" },
        { country: "🇦🇺 Australia", average: "A$90,000", entryLevel: "A$55,000", experienced: "A$135,000", range: "A$48K - A$160K" },
        { country: "🇳🇿 New Zealand", average: "NZ$70,000", entryLevel: "NZ$45,000", experienced: "NZ$105,000", range: "NZ$40K - NZ$125K" },
        { country: "🇸🇬 Singapore", average: "S$55,000", entryLevel: "S$32,000", experienced: "S$85,000", range: "S$28K - S$105K" },
        { country: "🇮🇳 India", average: "₹8.0L", entryLevel: "₹3.5L", experienced: "₹16.0L", range: "₹280K - ₹2000K" },
      ],
    },
    faqs: [
      { question: "Which country pays project managers the most?", answer: "The United States pays the highest average salary at $85,000." },
      { question: "What is the entry-level project manager salary by country?", answer: "Entry-level salaries range from $55,000 (US) to £26,000 (UK) and ₹3.5L (India)." },
    ],
    relatedPages: [
      { label: "Project Manager Hub", href: "/project-manager" },
      { label: "Highest Paying Countries", href: "/project-manager-highest-paying-countries" },
      { label: "Best Countries", href: "/project-manager-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/project-manager-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/project-manager-ppp-adjusted-salary" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}