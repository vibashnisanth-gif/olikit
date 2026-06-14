import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cybersecurity-analyst-salary"
const seoTitle = "Cybersecurity Analyst Salary Research & Insights (2026)"
const seoDesc = "Comprehensive research on cybersecurity analyst salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Cybersecurity Analyst Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Cybersecurity Analyst Salary Research",
      description: "Comprehensive analysis of cybersecurity analyst compensation across 7 major economies. Research salary benchmarks, tax-adjusted earnings, purchasing power, and career dynamics.",
      cta: { label: "Salary by Country", href: "/cybersecurity-analyst-salary-by-country" },
    },
    salaryCards: [
      { label: "Global Average", value: "$105,000 (US)" },
      { label: "Avg Entry Level", value: "$65,000 (US)" },
      { label: "Highest Experienced", value: "$160,000 (US)" },
    ],
    keyTakeaways: [
      { title: "Rapidly Growing Field", description: "Cybersecurity is one of the fastest-growing tech fields with strong compensation growth." },
      { title: "Sector Matters", description: "Finance and tech pay premium cybersecurity salaries." },
    ],
    salaryTable: {
      title: "Cybersecurity Analyst Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$105,000", entryLevel: "$65,000", experienced: "$160,000" },
        { country: "🇬🇧 United Kingdom", average: "£48,000", entryLevel: "£28,000", experienced: "£75,000" },
        { country: "🇨🇦 Canada", average: "C$78,000", entryLevel: "C$48,000", experienced: "C$120,000" },
        { country: "🇦🇺 Australia", average: "A$100,000", entryLevel: "A$60,000", experienced: "A$150,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$80,000", entryLevel: "NZ$50,000", experienced: "NZ$120,000" },
        { country: "🇸🇬 Singapore", average: "S$65,000", entryLevel: "S$36,000", experienced: "S$100,000" },
        { country: "🇮🇳 India", average: "₹9.0L", entryLevel: "₹3.0L", experienced: "₹18.0L" },
      ],
    },
    faqs: [
      { question: "What is the average cybersecurity analyst salary globally?", answer: "Average cybersecurity analyst salaries range from $105,000 in the United States to A$100,000 in Australia and £48,000 in the UK." },
      { question: "Which country has the highest cybersecurity analyst salary?", answer: "The United States offers the highest average salary at $105,000. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "Cybersecurity Analyst Hub", href: "/cybersecurity-analyst" },
      { label: "Highest Paying Countries", href: "/cybersecurity-analyst-highest-paying-countries" },
      { label: "Best Countries for Cybersecurity Analysts", href: "/cybersecurity-analyst-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/cybersecurity-analyst-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/cybersecurity-analyst-ppp-adjusted-salary" },
      { label: "Cybersecurity Analyst Salary Index 2026", href: "/research/cybersecurity-analyst-salary-index-2026" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
