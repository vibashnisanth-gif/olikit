import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Data Scientists (2026)"
const seoDesc = "Ranking of the highest paying countries for data scientists in 2026. Compare salaries, tax-adjusted income, and career opportunities across major economies."

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
      title: "Highest Paying Countries for Data Scientists",
      description: "Ranking of the highest paying countries for data scientists in 2026. Compare average salaries across 7 major economies.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$125,000" },
      { label: "2nd - Australia", value: "A$115,000" },
      { label: "3rd - New Zealand", value: "NZ$100,000" },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "\u{1F1FA}\u{1F1F8}", name: "United States", slug: "us", salary: "$125,000", note: "Strong demand across tech, finance, healthcare" },
        { rank: 2, flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", slug: "au", salary: "A$115,000", note: "Growing data science ecosystem" },
        { rank: 3, flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", slug: "nz", salary: "NZ$100,000", note: "Strong quality of life" },
        { rank: 4, flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", slug: "ca", salary: "C$88,000", note: "AI research hub (Vector, Mila)" },
        { rank: 5, flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", slug: "sg", salary: "S$78,000", note: "Regional data science hub" },
        { rank: 6, flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", slug: "uk", salary: "\u00a358,000", note: "Fintech data science" },
        { rank: 7, flag: "\u{1F1EE}\u{1F1F3}", name: "India", slug: "in", salary: "\u20b914,00,000", note: "Strongest PPP value" },
      ],
    },
    faqs: [
      { question: "Which country pays data scientists the highest salary?", answer: "The United States pays data scientists the highest average salary at $125,000 per year. Australia ranks second at A$115,000, while the UK, Singapore, and India offer lower nominal but competitive adjusted salaries." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Best Countries for Data Scientists", href: "/data-scientist-best-countries" },
      { label: "Salary by Country", href: "/data-scientist-salary-by-country" },
      { label: "Tax-Adjusted Salary", href: "/data-scientist-tax-adjusted-salary" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}