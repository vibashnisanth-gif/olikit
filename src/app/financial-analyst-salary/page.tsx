import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/financial-analyst-salary"
const seoTitle = "Financial Analyst Salary Research & Insights (2026)"
const seoDesc = "Global research on financial analyst salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Financial Analyst Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Financial Analyst Salary Research",
      description: "Side-by-side analysis of financial analyst compensation across 7 major economies. Track financial analyst salaries across 7 economies and see how location and experience affect pay.",
      cta: { label: "Salary by Country", href: "/financial-analyst-salary-by-country" },
    },
    salaryCards: [
      { label: "US Average", value: "$75,000" },
      { label: "US Entry Level", value: "$50,000" },
      { label: "US Experienced", value: "$115,000" },
    ],
    keyTakeaways: [
      { title: "Broad Career Options", description: "Financial analysts work across multiple sectors with varying compensation." },
      { title: "Location Matters Significantly", description: "Finance hub cities command significantly higher salaries." },
    ],
    salaryTable: {
      title: "Financial Analyst Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$75,000", entryLevel: "$50,000", experienced: "$115,000" },
        { country: "🇬🇧 United Kingdom", average: "£40,000", entryLevel: "£25,000", experienced: "£65,000" },
        { country: "🇨🇦 Canada", average: "C$62,000", entryLevel: "C$40,000", experienced: "C$95,000" },
        { country: "🇦🇺 Australia", average: "A$80,000", entryLevel: "A$50,000", experienced: "A$120,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$62,000", entryLevel: "NZ$40,000", experienced: "NZ$90,000" },
        { country: "🇸🇬 Singapore", average: "S$50,000", entryLevel: "S$30,000", experienced: "S$80,000" },
        { country: "🇮🇳 India", average: "₹6.0L", entryLevel: "₹3.0L", experienced: "₹12.0L" },
      ],
    },
    faqs: [
      { question: "What is the average financial analyst salary globally?", answer: "Average financial analyst salaries range from $75,000 in the United States to A$80,000 in Australia and £40,000 in the UK." },
      { question: "Which country has the highest financial analyst salary?", answer: "The United States offers the highest average salary at $75,000. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "Financial Analyst Hub", href: "/financial-analyst" },
      { label: "Highest Paying Countries", href: "/financial-analyst-highest-paying-countries" },
      { label: "Best Countries for Financial Analysts", href: "/financial-analyst-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/financial-analyst-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/financial-analyst-ppp-adjusted-salary" },
      { label: "Financial Analyst Salary Index 2026", href: "/research/financial-analyst-salary-index-2026" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}