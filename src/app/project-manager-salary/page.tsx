import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/project-manager-salary"
const seoTitle = "Project Manager Salary Research & Insights (2026)"
const seoDesc = "Comprehensive research on project manager salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Project Manager Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Project Manager Salary Research",
      description: "Comprehensive analysis of project manager compensation across 7 major economies. Research salary benchmarks, tax-adjusted earnings, purchasing power, and career dynamics.",
      cta: { label: "Salary by Country", href: "/project-manager-salary-by-country" },
    },
    salaryCards: [
      { label: "Global Average", value: "$85,000 (US)" },
      { label: "Avg Entry Level", value: "$55,000 (US)" },
      { label: "Highest Experienced", value: "$130,000 (US)" },
    ],
    keyTakeaways: [
      { title: "Cross-Industry Role", description: "Project managers work across technology, construction, healthcare, and finance." },
      { title: "Certification Matters", description: "PMP, PRINCE2, and Agile certifications significantly impact earnings." },
    ],
    salaryTable: {
      title: "Project Manager Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$85,000", entryLevel: "$55,000", experienced: "$130,000" },
        { country: "🇬🇧 United Kingdom", average: "£42,000", entryLevel: "£26,000", experienced: "£68,000" },
        { country: "🇨🇦 Canada", average: "C$68,000", entryLevel: "C$42,000", experienced: "C$105,000" },
        { country: "🇦🇺 Australia", average: "A$90,000", entryLevel: "A$55,000", experienced: "A$135,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$70,000", entryLevel: "NZ$45,000", experienced: "NZ$105,000" },
        { country: "🇸🇬 Singapore", average: "S$55,000", entryLevel: "S$32,000", experienced: "S$85,000" },
        { country: "🇮🇳 India", average: "₹8.0L", entryLevel: "₹3.5L", experienced: "₹16.0L" },
      ],
    },
    faqs: [
      { question: "What is the average project manager salary globally?", answer: "Average project manager salaries range from $85,000 in the United States to A$90,000 in Australia and £42,000 in the UK." },
      { question: "Which country has the highest project manager salary?", answer: "The United States offers the highest average salary at $85,000. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "Project Manager Hub", href: "/project-manager" },
      { label: "Highest Paying Countries", href: "/project-manager-highest-paying-countries" },
      { label: "Best Countries for Project Managers", href: "/project-manager-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/project-manager-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/project-manager-ppp-adjusted-salary" },
      { label: "Project Manager Salary Index 2026", href: "/research/project-manager-salary-index-2026" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
