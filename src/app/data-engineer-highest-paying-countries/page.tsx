import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-engineer-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Data Engineers (2026)"
const seoDesc = "Ranking of the highest paying countries for data engineers in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

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
      title: "Highest Paying Countries for Data Engineers",
      description: "Ranking of the highest paying countries for data engineers in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$115,000" },
      { label: "2nd - Australia", value: "A$108,000" },
      { label: "3rd - Canada", value: "C$82,000" },
    ],
    keyTakeaways: [
      { title: "US Leads Data Engineering", description: "The US offers $115,000 average for data engineers." },
      { title: "Australia Second", description: "Australia at A$108,000 with strong data infrastructure demand." },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$115,000", note: "Highest DE salaries" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$108,000", note: "Competitive DE pay" },
        { rank: 3, flag: "🇨🇦", name: "Canada", salary: "C$82,000", note: "Growing DE demand" },
        { rank: 4, flag: "🇳🇿", name: "New Zealand", salary: "NZ$88,000", note: "Emerging DE sector" },
        { rank: 5, flag: "🇬🇧", name: "United Kingdom", salary: "£52,000", note: "Strong data sector" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", salary: "S$70,000", note: "Regional data hub" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹10.0L", note: "Large DE workforce" },
      ],
    },
    faqs: [
      { question: "Which country pays data engineers the highest salary?", answer: "The United States pays the highest average salary at $115,000 per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately $89,700 for an average earner." },
    ],
    relatedPages: [
      { label: "Data Engineer Hub", href: "/data-engineer" },
      { label: "Best Countries for Data Engineers", href: "/data-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/data-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/data-engineer-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/data-engineer-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}