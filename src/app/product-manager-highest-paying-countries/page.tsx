import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Product Managers (2026)"
const seoDesc = "Ranking of the highest paying countries for product managers in 2026. Compare average salaries across major economies."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Highest Paying Countries", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Global Rankings",
      title: "Highest Paying Countries for Product Managers",
      description: "Ranking of the highest paying countries for product managers in 2026. Compare average salaries across 7 major economies.",
    },
    salaryCards: [
      { label: "1st - Australia", value: "A$120,000" },
      { label: "2nd - United States", value: "$110,000" },
      { label: "3rd - New Zealand", value: "NZ$95,000" },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", salary: "A$120,000", note: "Strong demand for PM talent" },
        { rank: 2, flag: "\u{1F1FA}\u{1F1F8}", name: "United States", salary: "$110,000", note: "Large tech ecosystem" },
        { rank: 3, flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", salary: "NZ$95,000", note: "Growing product roles" },
        { rank: 4, flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", salary: "C$85,000", note: "Growing tech sector" },
        { rank: 5, flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", salary: "S$75,000", note: "Regional hub" },
        { rank: 6, flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", salary: "\u00a355,000", note: "Strong fintech" },
        { rank: 7, flag: "\u{1F1EE}\u{1F1F3}", name: "India", salary: "\u20b920,00,000", note: "Strongest PPP" },
      ],
    },
    faqs: [
      { question: "Which country pays product managers the highest salary?", answer: "Australia pays the highest average product manager salary at A$120,000, followed by the United States at $110,000." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Salary by Country", href: "/product-manager-salary-by-country" },
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
