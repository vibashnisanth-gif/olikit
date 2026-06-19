import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/devops-engineer-tax-adjusted-salary"
const seoTitle = "DevOps Engineer Tax-Adjusted Salary (2026)"
const seoDesc = "Compare devops engineer salaries adjusted for income tax across 7 major economies. See how tax systems affect real take-home pay."

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
      title: "DevOps Engineer Tax-Adjusted Salary",
      description: "Compare devops engineer salaries adjusted for income tax across 7 major economies. See how different tax systems affect real take-home pay.",
      cta: { label: "PPP-Adjusted Salary", href: "/devops-engineer-ppp-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best After-Tax", value: "US ($97,500)" },
      { label: "Highest Gross", value: "US ($125,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    countryRanking: {
      title: "Tax-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$97,500 (22% tax)" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$86,250 (25% tax)" },
        { rank: 3, flag: "🇸🇬", name: "Singapore", salary: "S$66,960 (7% tax)" },
        { rank: 4, flag: "🇨🇦", name: "Canada", salary: "C$66,000 (25% tax)" },
        { rank: 5, flag: "🇳🇿", name: "New Zealand", salary: "NZ$67,500 (25% tax)" },
        { rank: 6, flag: "🇬🇧", name: "United Kingdom", salary: "£44,000 (20% tax)" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹8.8L (20% tax)" },
      ],
    },
    faqs: [
      { question: "Which country offers the best after-tax salary for devops engineers?", answer: "The United States offers the highest after-tax salary at approximately $97,500 for an average earner, followed by Australia. Singapore offers the best tax efficiency." },
    ],
    relatedPages: [
      { label: "DevOps Engineer Hub", href: "/devops-engineer" },
      { label: "PPP-Adjusted Salary", href: "/devops-engineer-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/devops-engineer-salary-by-country" },
      { label: "Highest Paying Countries", href: "/devops-engineer-highest-paying-countries" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
