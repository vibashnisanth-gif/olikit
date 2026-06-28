import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/business-analyst-salary"
const seoTitle = "Business Analyst Salary Research & Insights (2026)"
const seoDesc = "Global research on business analyst salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Business Analyst Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Business Analyst Salary Research",
      description: "Rigorous analysis of business analyst compensation across 7 major economies. Compare business analyst salaries by country and identify where your analytical skills earn the most.",
      cta: { label: "Salary by Country", href: "/business-analyst-salary-by-country" },
    },
    salaryCards: [
      { label: "US Average", value: "$70,000" },
      { label: "US Entry Level", value: "$45,000" },
      { label: "US Experienced", value: "$110,000" },
    ],
    keyTakeaways: [
      { title: "Cross-Industry Demand", description: "Business analysts are needed across virtually all industries." },
      { title: "Technical BA Premium", description: "Business analysts with technical skills command higher salaries." },
    ],
    salaryTable: {
      title: "Business Analyst Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$70,000", entryLevel: "$45,000", experienced: "$110,000" },
        { country: "🇬🇧 United Kingdom", average: "£38,000", entryLevel: "£24,000", experienced: "£60,000" },
        { country: "🇨🇦 Canada", average: "C$58,000", entryLevel: "C$38,000", experienced: "C$90,000" },
        { country: "🇦🇺 Australia", average: "A$75,000", entryLevel: "A$48,000", experienced: "A$115,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$58,000", entryLevel: "NZ$38,000", experienced: "NZ$88,000" },
        { country: "🇸🇬 Singapore", average: "S$48,000", entryLevel: "S$28,000", experienced: "S$75,000" },
        { country: "🇮🇳 India", average: "₹5.5L", entryLevel: "₹2.8L", experienced: "₹11.0L" },
      ],
    },
    faqs: [
      { question: "What is the average business analyst salary globally?", answer: "Average business analyst salaries range from $70,000 in the United States to A$75,000 in Australia and £38,000 in the UK." },
      { question: "Which country has the highest business analyst salary?", answer: "The United States offers the highest average salary at $70,000. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "Business Analyst Hub", href: "/business-analyst" },
      { label: "Highest Paying Countries", href: "/business-analyst-highest-paying-countries" },
      { label: "Best Countries for Business Analysts", href: "/business-analyst-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/business-analyst-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/business-analyst-ppp-adjusted-salary" },
      { label: "Business Analyst Salary Index 2026", href: "/research/business-analyst-salary-index-2026" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}