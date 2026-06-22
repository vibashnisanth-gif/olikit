import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-salary"
const seoTitle = "Product Manager Salary Research & Insights (2026)"
const seoDesc = "Global research on product manager salaries across 7 major economies. Compare average pay by country and evaluate compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const articleSchema = buildArticleJsonLd(seoTitle, seoDesc, pagePath, { code: "en", name: "English", slug: "en" } as any)

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Product Manager Salary", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Product Manager Salary Research",
      description: "Side-by-side comparison of product manager compensation across major economies. Review product manager compensation data across 7 economies to benchmark your earning potential.",
      cta: { label: "Salary by Country", href: "/product-manager-salary-by-country" },
    },
    salaryCards: [
      { label: "US Average", value: "$110,000" },
      { label: "US Entry Level", value: "$70,000" },
      { label: "US Experienced", value: "$165,000" },
    ],
    salaryTable: {
      title: "Product Manager Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "\u{1F1FA}\u{1F1F8} United States", average: "$110,000", entryLevel: "$70,000", experienced: "$165,000" },
        { country: "\u{1F1EC}\u{1F1E7} United Kingdom", average: "\u00a355,000", entryLevel: "\u00a332,000", experienced: "\u00a385,000" },
        { country: "\u{1F1E8}\u{1F1E6} Canada", average: "C$85,000", entryLevel: "C$55,000", experienced: "C$130,000" },
        { country: "\u{1F1E6}\u{1F1FA} Australia", average: "A$120,000", entryLevel: "A$75,000", experienced: "A$170,000" },
        { country: "\u{1F1F3}\u{1F1FF} New Zealand", average: "NZ$95,000", entryLevel: "NZ$60,000", experienced: "NZ$135,000" },
        { country: "\u{1F1F8}\u{1F1EC} Singapore", average: "S$75,000", entryLevel: "S$45,000", experienced: "S$115,000" },
        { country: "\u{1F1EE}\u{1F1F3} India", average: "\u20b920,00,000", entryLevel: "\u20b98,00,000", experienced: "\u20b935,00,000" },
      ],
    },
    faqs: [
      { question: "What is the average product manager salary globally?", answer: "Average product manager salaries range from $110,000 (US) to A$120,000 (Australia), C$85,000 (Canada), \u00a355,000 (UK), and \u20b920,00,000 (India)." },
      { question: "Which country pays product managers the most?", answer: "Australia offers the highest average product manager salary at A$120,000, closely followed by the United States at $110,000." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Salary by Country", href: "/product-manager-salary-by-country" },
      { label: "Tax-Adjusted Salary", href: "/product-manager-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/product-manager-ppp-adjusted-salary" },
      { label: "Highest Paying Countries", href: "/highest-paying-countries-for-product-managers" },
      { label: "Best Countries for PMs", href: "/best-countries-for-product-managers" },
      { label: "Highest Paying Cities", href: "/rankings/highest-paying-cities-product-managers" },
      { label: "PM Salary Index 2026", href: "/research/product-manager-salary-index-2026" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
