import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/solutions-architect-tax-adjusted-salary"
const seoTitle = "Solutions Architect Tax-Adjusted Salary (2026)"
const seoDesc = "Compare solutions architect salaries adjusted for income tax across 7 major economies. See how tax systems affect real take-home pay."

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
      title: "Solutions Architect Tax-Adjusted Salary",
      description: "Compare solutions architect salaries adjusted for income tax across 7 major economies. See how different tax systems affect real take-home pay.",
      cta: { label: "PPP-Adjusted Salary", href: "/solutions-architect-ppp-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best After-Tax", value: "US ($109,200)" },
      { label: "Highest Gross", value: "US ($140,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    countryRanking: {
      title: "Tax-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", salary: "$109,200 (22% tax)" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$101,250 (25% tax)" },
        { rank: 3, flag: "🇸🇬", name: "Singapore", salary: "S$83,700 (7% tax)" },
        { rank: 4, flag: "🇨🇦", name: "Canada", salary: "C$78,750 (25% tax)" },
        { rank: 5, flag: "🇳🇿", name: "New Zealand", salary: "NZ$86,250 (25% tax)" },
        { rank: 6, flag: "🇬🇧", name: "United Kingdom", salary: "£52,000 (20% tax)" },
        { rank: 7, flag: "🇮🇳", name: "India", salary: "₹17.6L (20% tax)" },
      ],
    },
    faqs: [
      { question: "Which country offers the best after-tax salary for solutions architects?", answer: "The United States offers the highest after-tax salary at approximately $109,200 for an average earner, followed by Australia. Singapore offers the best tax efficiency." },
    ],
    relatedPages: [
      { label: "Solutions Architect Hub", href: "/solutions-architect" },
      { label: "PPP-Adjusted Salary", href: "/solutions-architect-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/solutions-architect-salary-by-country" },
      { label: "Highest Paying Countries", href: "/solutions-architect-highest-paying-countries" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
