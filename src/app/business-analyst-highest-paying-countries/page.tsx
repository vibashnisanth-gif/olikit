import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/business-analyst-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Business Analysts (2026)"
const seoDesc = "Ranking of the highest paying countries for business analysts in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

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
      title: "Highest Paying Countries for Business Analysts",
      description: "Ranking of the highest paying countries for business analysts in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$70,000" },
      { label: "2nd - Australia", value: "A$75,000" },
      { label: "3rd - Canada", value: "C$58,000" },
    ],
    keyTakeaways: [
      { title: "US Leads BA Compensation", description: "The US offers $70,000 average for business analysts." },
      { title: "Australia Competitive", description: "Australia at A$75,000 with strong demand." },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$70,000", note: "Highest BA salaries" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$75,000", note: "Competitive BA pay" },
        { rank: 3, flag: "🇨🇦", name: "Canada", salary: "C$58,000", note: "Growing BA demand" },
        { rank: 4, flag: "🇳🇿", name: "New Zealand", salary: "NZ$58,000", note: "Smaller BA market" },
        { rank: 5, flag: "🇬🇧", name: "United Kingdom", salary: "£38,000", note: "Strong consulting sector" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", salary: "S$48,000", note: "Regional consulting hub" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹5.5L", note: "Large BA workforce" },
      ],
    },
    faqs: [
      { question: "Which country pays business analysts the highest salary?", answer: "The United States pays the highest average salary at $70,000 per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately $54,600 for an average earner." },
    ],
    relatedPages: [
      { label: "Business Analyst Hub", href: "/business-analyst" },
      { label: "Best Countries for Business Analysts", href: "/business-analyst-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/business-analyst-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/business-analyst-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/business-analyst-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}