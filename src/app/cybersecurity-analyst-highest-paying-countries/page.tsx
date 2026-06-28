import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cybersecurity-analyst-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Cybersecurity Analysts (2026)"
const seoDesc = "Ranking of the highest paying countries for cybersecurity analysts in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

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
      title: "Highest Paying Countries for Cybersecurity Analysts",
      description: "Ranking of the highest paying countries for cybersecurity analysts in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$105,000" },
      { label: "2nd - Australia", value: "A$100,000" },
      { label: "3rd - Canada", value: "C$78,000" },
    ],
    keyTakeaways: [
      { title: "US Leads Security Compensation", description: "The US offers $105,000 for cybersecurity analysts." },
      { title: "Australia Competitive", description: "Australia at A$100,000 with strong demand." },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$105,000", note: "Highest cybersecurity salaries" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$100,000", note: "Competitive security pay" },
        { rank: 3, flag: "🇨🇦", name: "Canada", salary: "C$78,000", note: "Growing cybersecurity demand" },
        { rank: 4, flag: "🇳🇿", name: "New Zealand", salary: "NZ$80,000", note: "Emerging security sector" },
        { rank: 5, flag: "🇬🇧", name: "United Kingdom", salary: "£48,000", note: "Strong security sector" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", salary: "S$65,000", note: "Regional security hub" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹9.0L", note: "Growing cybersecurity workforce" },
      ],
    },
    faqs: [
      { question: "Which country pays cybersecurity analysts the highest salary?", answer: "The United States pays the highest average salary at $105,000 per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately $81,900 for an average earner." },
    ],
    relatedPages: [
      { label: "Cybersecurity Analyst Hub", href: "/cybersecurity-analyst" },
      { label: "Best Countries for Cybersecurity Analysts", href: "/cybersecurity-analyst-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/cybersecurity-analyst-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/cybersecurity-analyst-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/cybersecurity-analyst-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}