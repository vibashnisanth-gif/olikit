import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-tax-adjusted-salary"
const seoTitle = "Data Scientist Tax-Adjusted Salary (2026)"
const seoDesc = "Compare data scientist salaries adjusted for income tax across 7 major economies. See how tax systems affect real take-home pay for data professionals."

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
      title: "Data Scientist Tax-Adjusted Salary",
      description: "Compare data scientist salaries adjusted for income tax across 7 major economies. See how different tax systems affect real take-home pay.",
    },
    salaryCards: [
      { label: "Best After-Tax", value: "US ($97,500)" },
      { label: "Highest Gross", value: "US ($125,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    countryRanking: {
      title: "Tax-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "\u{1F1FA}\u{1F1F8}", name: "United States", salary: "$97,500 (22% tax)" },
        { rank: 2, flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", salary: "A$86,250 (25% tax)" },
        { rank: 3, flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", salary: "S$72,500 (7% tax)" },
        { rank: 4, flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", salary: "C$66,000 (25% tax)" },
        { rank: 5, flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", salary: "NZ$75,000 (25% tax)" },
        { rank: 6, flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", salary: "\u00a346,400 (20% tax)" },
        { rank: 7, flag: "\u{1F1EE}\u{1F1F3}", name: "India", salary: "\u20b911,20,000 (20% tax)" },
      ],
    },
    faqs: [
      { question: "Which country offers the best after-tax salary for data scientists?", answer: "The United States offers the highest after-tax salary at approximately $97,500 for an average earner, followed by Australia at A$86,250. Singapore offers the best tax efficiency." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "PPP-Adjusted Salary", href: "/data-scientist-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/data-scientist-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}