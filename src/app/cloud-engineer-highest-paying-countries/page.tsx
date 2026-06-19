import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cloud-engineer-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Cloud Engineers (2026)"
const seoDesc = "Ranking of the highest paying countries for cloud engineers in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

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
      title: "Highest Paying Countries for Cloud Engineers",
      description: "Ranking of the highest paying countries for cloud engineers in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$115,000" },
      { label: "2nd - Australia", value: "A$105,000" },
      { label: "3rd - Canada", value: "C$82,000" },
    ],
    keyTakeaways: [
      { title: "US Leads Cloud Compensation", description: "The US offers $115,000 average for cloud engineers." },
      { title: "Australia Strong Second", description: "Australia at A$105,000 with excellent work-life balance." },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$115,000", note: "Highest cloud salaries" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$105,000", note: "Competitive cloud pay" },
        { rank: 3, flag: "🇨🇦", name: "Canada", salary: "C$82,000", note: "Cloud migration demand" },
        { rank: 4, flag: "🇳🇿", name: "New Zealand", salary: "NZ$85,000", note: "Emerging cloud sector" },
        { rank: 5, flag: "🇬🇧", name: "United Kingdom", salary: "£50,000", note: "Growing cloud adoption" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", salary: "S$68,000", note: "Regional cloud hub" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹10.0L", note: "Large cloud workforce" },
      ],
    },
    faqs: [
      { question: "Which country pays cloud engineers the highest salary?", answer: "The United States pays the highest average salary at $115,000 per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately $89,700 for an average earner." },
    ],
    relatedPages: [
      { label: "Cloud Engineer Hub", href: "/cloud-engineer" },
      { label: "Best Countries for Cloud Engineers", href: "/cloud-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/cloud-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/cloud-engineer-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/cloud-engineer-salary-by-country" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
