import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/project-manager-tax-adjusted-salary"
const seoTitle = "Project Manager Tax-Adjusted Salary (2026)"
const seoDesc = "Compare project manager salaries adjusted for income tax across 7 major economies. See how tax systems affect real take-home pay."

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
      title: "Project Manager Tax-Adjusted Salary",
      description: "Compare project manager salaries adjusted for income tax across 7 major economies. See how different tax systems affect real take-home pay.",
      cta: { label: "PPP-Adjusted Salary", href: "/project-manager-ppp-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best After-Tax", value: "US ($66,300)" },
      { label: "Highest Gross", value: "US ($85,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    countryRanking: {
      title: "Tax-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$66,300 (22% tax)" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$67,500 (25% tax)" },
        { rank: 3, flag: "🇸🇬", name: "Singapore", salary: "S$51,150 (7% tax)" },
        { rank: 4, flag: "🇨🇦", name: "Canada", salary: "C$51,000 (25% tax)" },
        { rank: 5, flag: "🇳🇿", name: "New Zealand", salary: "NZ$52,500 (25% tax)" },
        { rank: 6, flag: "🇬🇧", name: "United Kingdom", salary: "£33,600 (20% tax)" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹6.4L (20% tax)" },
      ],
    },
    faqs: [
      { question: "Which country offers the best after-tax salary for project managers?", answer: "The United States offers the highest after-tax salary at approximately $66,300 for an average earner, followed by Australia. Singapore offers the best tax efficiency." },
    ],
    relatedPages: [
      { label: "Project Manager Hub", href: "/project-manager" },
      { label: "PPP-Adjusted Salary", href: "/project-manager-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/project-manager-salary-by-country" },
      { label: "Highest Paying Countries", href: "/project-manager-highest-paying-countries" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
