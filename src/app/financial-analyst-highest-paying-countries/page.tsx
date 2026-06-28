import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/financial-analyst-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Financial Analysts (2026)"
const seoDesc = "Ranking of the highest paying countries for financial analysts in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

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
      title: "Highest Paying Countries for Financial Analysts",
      description: "Ranking of the highest paying countries for financial analysts in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$75,000" },
      { label: "2nd - Australia", value: "A$80,000" },
      { label: "3rd - Canada", value: "C$62,000" },
    ],
    keyTakeaways: [
      { title: "US Leads Finance Pay", description: "The US offers $75,000 average for financial analysts." },
      { title: "London Finance Premium", description: "London commands premium UK finance salaries." },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$75,000", note: "Highest finance salaries" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$80,000", note: "Competitive finance pay" },
        { rank: 3, flag: "🇨🇦", name: "Canada", salary: "C$62,000", note: "Growing finance sector" },
        { rank: 4, flag: "🇳🇿", name: "New Zealand", salary: "NZ$62,000", note: "Smaller finance market" },
        { rank: 5, flag: "🇬🇧", name: "United Kingdom", salary: "£40,000", note: "London finance hub" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", salary: "S$50,000", note: "Asian finance hub" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹6.0L", note: "Growing finance sector" },
      ],
    },
    faqs: [
      { question: "Which country pays financial analysts the highest salary?", answer: "The United States pays the highest average salary at $75,000 per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately $58,500 for an average earner." },
    ],
    relatedPages: [
      { label: "Financial Analyst Hub", href: "/financial-analyst" },
      { label: "Best Countries for Financial Analysts", href: "/financial-analyst-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/financial-analyst-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/financial-analyst-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/financial-analyst-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}