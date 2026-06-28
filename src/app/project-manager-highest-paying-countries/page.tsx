import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/project-manager-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Project Managers (2026)"
const seoDesc = "Ranking of the highest paying countries for project managers in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

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
      title: "Highest Paying Countries for Project Managers",
      description: "Ranking of the highest paying countries for project managers in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$85,000" },
      { label: "2nd - Australia", value: "A$90,000" },
      { label: "3rd - Canada", value: "C$68,000" },
    ],
    keyTakeaways: [
      { title: "US Leads PM Compensation", description: "The US offers $85,000 average for project managers." },
      { title: "Australia Top International Market", description: "Australia at A$90,000 with strong PM demand." },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$85,000", note: "Highest PM salaries" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$90,000", note: "Competitive PM pay" },
        { rank: 3, flag: "🇨🇦", name: "Canada", salary: "C$68,000", note: "Growing PM demand" },
        { rank: 4, flag: "🇳🇿", name: "New Zealand", salary: "NZ$70,000", note: "Smaller PM market" },
        { rank: 5, flag: "🇬🇧", name: "United Kingdom", salary: "£42,000", note: "Strong PM profession" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", salary: "S$55,000", note: "Regional PM hub" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹8.0L", note: "Large PM workforce" },
      ],
    },
    faqs: [
      { question: "Which country pays project managers the highest salary?", answer: "The United States pays the highest average salary at $85,000 per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately $66,300 for an average earner." },
    ],
    relatedPages: [
      { label: "Project Manager Hub", href: "/project-manager" },
      { label: "Best Countries for Project Managers", href: "/project-manager-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/project-manager-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/project-manager-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/project-manager-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}