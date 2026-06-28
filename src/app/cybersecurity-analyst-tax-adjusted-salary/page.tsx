import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cybersecurity-analyst-tax-adjusted-salary"
const seoTitle = "Cybersecurity Analyst Tax-Adjusted Salary (2026)"
const seoDesc = "Compare cybersecurity analyst salaries adjusted for income tax across 7 major economies. See how tax systems affect real take-home pay."

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
      title: "Cybersecurity Analyst Tax-Adjusted Salary",
      description: "Compare cybersecurity analyst salaries adjusted for income tax across 7 major economies. See how different tax systems affect real take-home pay.",
      cta: { label: "PPP-Adjusted Salary", href: "/cybersecurity-analyst-ppp-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best After-Tax", value: "US ($81,900)" },
      { label: "Highest Gross", value: "US ($105,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    countryRanking: {
      title: "Tax-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$81,900 (22% tax)" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$75,000 (25% tax)" },
        { rank: 3, flag: "🇸🇬", name: "Singapore", salary: "S$60,450 (7% tax)" },
        { rank: 4, flag: "🇨🇦", name: "Canada", salary: "C$58,500 (25% tax)" },
        { rank: 5, flag: "🇳🇿", name: "New Zealand", salary: "NZ$60,000 (25% tax)" },
        { rank: 6, flag: "🇬🇧", name: "United Kingdom", salary: "£38,400 (20% tax)" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹7.2L (20% tax)" },
      ],
    },
    faqs: [
      { question: "Which country offers the best after-tax salary for cybersecurity analysts?", answer: "The United States offers the highest after-tax salary at approximately $81,900 for an average earner, followed by Australia. Singapore offers the best tax efficiency." },
    ],
    relatedPages: [
      { label: "Cybersecurity Analyst Hub", href: "/cybersecurity-analyst" },
      { label: "PPP-Adjusted Salary", href: "/cybersecurity-analyst-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/cybersecurity-analyst-salary-by-country" },
      { label: "Highest Paying Countries", href: "/cybersecurity-analyst-highest-paying-countries" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}