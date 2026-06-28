import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/financial-analyst-tax-adjusted-salary"
const seoTitle = "Financial Analyst Tax-Adjusted Salary (2026)"
const seoDesc = "Compare financial analyst salaries adjusted for income tax across 7 major economies. See how tax systems affect real take-home pay."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Tax-Adjusted Salary", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Tax Analysis",
      title: "Financial Analyst Tax-Adjusted Salary",
      description: "Compare financial analyst salaries adjusted for income tax across 7 major economies. See how different tax systems affect real take-home pay.",
      cta: { label: "PPP-Adjusted Salary", href: "/financial-analyst-ppp-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best After-Tax", value: "US ($58,500)" },
      { label: "Highest Gross", value: "US ($75,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    countryRanking: {
      title: "Tax-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$58,500 (22% tax)" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$60,000 (25% tax)" },
        { rank: 3, flag: "🇸🇬", name: "Singapore", salary: "S$46,500 (7% tax)" },
        { rank: 4, flag: "🇨🇦", name: "Canada", salary: "C$46,500 (25% tax)" },
        { rank: 5, flag: "🇳🇿", name: "New Zealand", salary: "NZ$46,500 (25% tax)" },
        { rank: 6, flag: "🇬🇧", name: "United Kingdom", salary: "£32,000 (20% tax)" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹4.8L (20% tax)" },
      ],
    },
    faqs: [
      { question: "Which country offers the best after-tax salary for financial analysts?", answer: "The United States offers the highest after-tax salary at approximately $58,500 for an average earner, followed by Australia. Singapore offers the best tax efficiency." },
    ],
    relatedPages: [
      { label: "Financial Analyst Hub", href: "/financial-analyst" },
      { label: "PPP-Adjusted Salary", href: "/financial-analyst-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/financial-analyst-salary-by-country" },
      { label: "Highest Paying Countries", href: "/financial-analyst-highest-paying-countries" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}