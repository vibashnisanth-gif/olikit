import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/machine-learning-engineer-salary"
const seoTitle = "Machine Learning Engineer Salary Research & Insights (2026)"
const seoDesc = "Authoritative research on machine learning engineer salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Machine Learning Engineer Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Machine Learning Engineer Salary Research",
      description: "Rigorous analysis of machine learning engineer compensation across 7 major economies. Examine ML engineer compensation across major tech markets and identify the highest-paying destinations.",
      cta: { label: "Salary by Country", href: "/machine-learning-engineer-salary-by-country" },
    },
    salaryCards: [
      { label: "US Average", value: "$130,000" },
      { label: "US Entry Level", value: "$80,000" },
      { label: "US Experienced", value: "$190,000" },
    ],
    keyTakeaways: [
      { title: "Strong Demand for ML Skills", description: "Machine learning engineers are in high demand across all major economies, commanding premium salaries." },
      { title: "Equity Significant in Total Comp", description: "ML roles at AI-focused companies often include substantial equity packages." },
    ],
    salaryTable: {
      title: "Machine Learning Engineer Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$130,000", entryLevel: "$80,000", experienced: "$190,000" },
        { country: "🇬🇧 United Kingdom", average: "£60,000", entryLevel: "£34,000", experienced: "£92,000" },
        { country: "🇨🇦 Canada", average: "C$90,000", entryLevel: "C$58,000", experienced: "C$140,000" },
        { country: "🇦🇺 Australia", average: "A$120,000", entryLevel: "A$72,000", experienced: "A$175,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$100,000", entryLevel: "NZ$62,000", experienced: "NZ$150,000" },
        { country: "🇸🇬 Singapore", average: "S$82,000", entryLevel: "S$48,000", experienced: "S$125,000" },
        { country: "🇮🇳 India", average: "₹16.0L", entryLevel: "₹5.0L", experienced: "₹32.0L" },
      ],
    },
    faqs: [
      { question: "What is the average machine learning engineer salary globally?", answer: "Average machine learning engineer salaries range from $130,000 in the United States to A$120,000 in Australia and £60,000 in the UK." },
      { question: "Which country has the highest machine learning engineer salary?", answer: "The United States offers the highest average salary at $130,000. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "Machine Learning Engineer Hub", href: "/machine-learning-engineer" },
      { label: "Highest Paying Countries", href: "/machine-learning-engineer-highest-paying-countries" },
      { label: "Best Countries for Machine Learning Engineers", href: "/machine-learning-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/machine-learning-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/machine-learning-engineer-ppp-adjusted-salary" },
      { label: "Machine Learning Engineer Salary Index 2026", href: "/research/machine-learning-engineer-salary-index-2026" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
