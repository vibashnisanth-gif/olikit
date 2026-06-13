import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-salary-by-country"
const seoTitle = "Product Manager Salary by Country (2026)"
const seoDesc = "Compare product manager salaries by country in 2026. View average, entry-level, and experienced salaries across major economies."

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
      title: "Product Manager Salary by Country",
      description: "Compare product manager salaries across major economies with detailed breakdowns by experience level.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "A$120,000 (AU)" },
      { label: "High Growth Role", value: "20%+ demand increase" },
    ],
    salaryTable: {
      title: "Product Manager Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "\u{1F1E6}\u{1F1FA} Australia", average: "A$120,000", entryLevel: "A$75,000", experienced: "A$170,000", range: "A$65K - A$200K" },
        { country: "\u{1F1FA}\u{1F1F8} United States", average: "$110,000", entryLevel: "$70,000", experienced: "$165,000", range: "$60K - $200K" },
        { country: "\u{1F1F3}\u{1F1FF} New Zealand", average: "NZ$95,000", entryLevel: "NZ$60,000", experienced: "NZ$135,000", range: "NZ$55K - NZ$160K" },
        { country: "\u{1F1E8}\u{1F1E6} Canada", average: "C$85,000", entryLevel: "C$55,000", experienced: "C$130,000", range: "C$48K - C$155K" },
        { country: "\u{1F1F8}\u{1F1EC} Singapore", average: "S$75,000", entryLevel: "S$45,000", experienced: "S$115,000", range: "S$38K - S$140K" },
        { country: "\u{1F1EC}\u{1F1E7} United Kingdom", average: "\u00a355,000", entryLevel: "\u00a332,000", experienced: "\u00a385,000", range: "\u00a328K - \u00a3105K" },
        { country: "\u{1F1EE}\u{1F1F3} India", average: "\u20b920,00,000", entryLevel: "\u20b98,00,000", experienced: "\u20b935,00,000", range: "\u20b96L - \u20b945L" },
      ],
    },
    faqs: [
      { question: "Which country pays product managers the most?", answer: "Australia pays the highest average product manager salary at A$120,000, closely followed by the United States at $110,000." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Highest Paying Countries", href: "/product-manager-highest-paying-countries" },
      { label: "Product Manager Salary", href: "/product-manager-salary" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
