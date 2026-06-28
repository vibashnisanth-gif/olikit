import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/solutions-architect-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Solutions Architects (2026)"
const seoDesc = "Ranking of the highest paying countries for solutions architects in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

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
      title: "Highest Paying Countries for Solutions Architects",
      description: "Ranking of the highest paying countries for solutions architects in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$140,000" },
      { label: "2nd - Australia", value: "A$135,000" },
      { label: "3rd - Canada", value: "C$105,000" },
    ],
    keyTakeaways: [
      { title: "US Leads Architecture Pay", description: "The US offers $140,000 average for solutions architects." },
      { title: "Global Premium Role", description: "Solutions architects earn premium salaries in all major economies." },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$140,000", note: "Highest SA salaries" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$135,000", note: "Competitive SA pay" },
        { rank: 3, flag: "🇨🇦", name: "Canada", salary: "C$105,000", note: "Growing SA demand" },
        { rank: 4, flag: "🇳🇿", name: "New Zealand", salary: "NZ$115,000", note: "Premium NZ tech role" },
        { rank: 5, flag: "🇬🇧", name: "United Kingdom", salary: "£65,000", note: "Strong architecture roles" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", salary: "S$90,000", note: "Regional architecture hub" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹22.0L", note: "Growing SA roles" },
      ],
    },
    faqs: [
      { question: "Which country pays solutions architects the highest salary?", answer: "The United States pays the highest average salary at $140,000 per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately $109,200 for an average earner." },
    ],
    relatedPages: [
      { label: "Solutions Architect Hub", href: "/solutions-architect" },
      { label: "Best Countries for Solutions Architects", href: "/solutions-architect-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/solutions-architect-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/solutions-architect-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/solutions-architect-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}