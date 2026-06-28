import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-engineer-salary"
const seoTitle = "Data Engineer Salary Research & Insights (2026)"
const seoDesc = "Thorough research on data engineer salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Engineer Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Data Engineer Salary Research",
      description: "Data-driven analysis of data engineer compensation across 7 major economies. Review data engineer compensation across global markets and target the countries with the highest demand.",
      cta: { label: "Salary by Country", href: "/data-engineer-salary-by-country" },
    },
    salaryCards: [
      { label: "US Average", value: "$115,000" },
      { label: "US Entry Level", value: "$70,000" },
      { label: "US Experienced", value: "$170,000" },
    ],
    keyTakeaways: [
      { title: "Essential Data Role", description: "Data engineers are foundational to data-driven organizations with strong demand." },
      { title: "Cloud vs On-Prem Premium", description: "Cloud data engineering skills command 10-15% premium over traditional on-premise." },
    ],
    salaryTable: {
      title: "Data Engineer Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$115,000", entryLevel: "$70,000", experienced: "$170,000" },
        { country: "🇬🇧 United Kingdom", average: "£52,000", entryLevel: "£30,000", experienced: "£80,000" },
        { country: "🇨🇦 Canada", average: "C$82,000", entryLevel: "C$50,000", experienced: "C$125,000" },
        { country: "🇦🇺 Australia", average: "A$108,000", entryLevel: "A$65,000", experienced: "A$158,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$88,000", entryLevel: "NZ$55,000", experienced: "NZ$130,000" },
        { country: "🇸🇬 Singapore", average: "S$70,000", entryLevel: "S$40,000", experienced: "S$108,000" },
        { country: "🇮🇳 India", average: "₹10.0L", entryLevel: "₹3.5L", experienced: "₹20.0L" },
      ],
    },
    faqs: [
      { question: "What is the average data engineer salary globally?", answer: "Average data engineer salaries range from $115,000 in the United States to A$108,000 in Australia and £52,000 in the UK." },
      { question: "Which country has the highest data engineer salary?", answer: "The United States offers the highest average salary at $115,000. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "Data Engineer Hub", href: "/data-engineer" },
      { label: "Highest Paying Countries", href: "/data-engineer-highest-paying-countries" },
      { label: "Best Countries for Data Engineers", href: "/data-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/data-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/data-engineer-ppp-adjusted-salary" },
      { label: "Data Engineer Salary Index 2026", href: "/research/data-engineer-salary-index-2026" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}