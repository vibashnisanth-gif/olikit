import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/devops-engineer-highest-paying-countries"
const seoTitle = "Highest Paying Countries for DevOps Engineers (2026)"
const seoDesc = "Ranking of the highest paying countries for devops engineers in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

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
      title: "Highest Paying Countries for DevOps Engineers",
      description: "Ranking of the highest paying countries for devops engineers in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$125,000" },
      { label: "2nd - Australia", value: "A$115,000" },
      { label: "3rd - Canada", value: "C$88,000" },
    ],
    keyTakeaways: [
      { title: "US Leads DevOps Compensation", description: "The US offers $125,000 average for DevOps engineers." },
      { title: "Australia Strong Second", description: "Australia at A$115,000 with excellent lifestyle benefits." },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$125,000", note: "Highest DevOps salaries" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$115,000", note: "Competitive DevOps pay" },
        { rank: 3, flag: "🇨🇦", name: "Canada", salary: "C$88,000", note: "Growing DevOps demand" },
        { rank: 4, flag: "🇳🇿", name: "New Zealand", salary: "NZ$90,000", note: "Emerging DevOps sector" },
        { rank: 5, flag: "🇬🇧", name: "United Kingdom", salary: "£55,000", note: "Strong DevOps adoption" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", salary: "S$72,000", note: "Regional tech hub" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹11.0L", note: "Large DevOps workforce" },
      ],
    },
    faqs: [
      { question: "Which country pays devops engineers the highest salary?", answer: "The United States pays the highest average salary at $125,000 per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately $97,500 for an average earner." },
    ],
    relatedPages: [
      { label: "DevOps Engineer Hub", href: "/devops-engineer" },
      { label: "Best Countries for DevOps Engineers", href: "/devops-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/devops-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/devops-engineer-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/devops-engineer-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}