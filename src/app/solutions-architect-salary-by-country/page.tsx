import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/solutions-architect-salary-by-country"
const seoTitle = "Solutions Architect Salary by Country (2026)"
const seoDesc = "Compare solutions architect salaries by country in 2026. View average, entry-level, and experienced salaries across 7 major economies."

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
      title: "Solutions Architect Salary by Country",
      description: "Compare solutions architect salaries across 7 major economies. View average, entry-level, and experienced salaries side by side.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$140,000 (US)" },
      { label: "Wide Range", value: "$8K-$250K+" },
    ],
    salaryTable: {
      title: "Solutions Architect Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "🇺🇸 United States", average: "$140,000", entryLevel: "$90,000", experienced: "$200,000", range: "$78K - $250K" },
        { country: "🇬🇧 United Kingdom", average: "£65,000", entryLevel: "£38,000", experienced: "£100,000", range: "£32K - £125K" },
        { country: "🇨🇦 Canada", average: "C$105,000", entryLevel: "C$65,000", experienced: "C$155,000", range: "C$55K - C$190K" },
        { country: "🇦🇺 Australia", average: "A$135,000", entryLevel: "A$80,000", experienced: "A$195,000", range: "A$70K - A$240K" },
        { country: "🇳🇿 New Zealand", average: "NZ$115,000", entryLevel: "NZ$70,000", experienced: "NZ$165,000", range: "NZ$60K - NZ$200K" },
        { country: "🇸🇬 Singapore", average: "S$90,000", entryLevel: "S$50,000", experienced: "S$140,000", range: "S$42K - S$170K" },
        { country: "🇮🇳 India", average: "₹22.0L", entryLevel: "₹8.0L", experienced: "₹40.0L", range: "₹600K - ₹5000K" },
      ],
    },
    faqs: [
      { question: "Which country pays solutions architects the most?", answer: "The United States pays the highest average salary at $140,000." },
      { question: "What is the entry-level solutions architect salary by country?", answer: "Entry-level salaries range from $90,000 (US) to £38,000 (UK) and ₹8.0L (India)." },
    ],
    relatedPages: [
      { label: "Solutions Architect Hub", href: "/solutions-architect" },
      { label: "Highest Paying Countries", href: "/solutions-architect-highest-paying-countries" },
      { label: "Best Countries", href: "/solutions-architect-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/solutions-architect-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/solutions-architect-ppp-adjusted-salary" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
