import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cloud-engineer-salary"
const seoTitle = "Cloud Engineer Salary Research & Insights (2026)"
const seoDesc = "Authoritative research on cloud engineer salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Cloud Engineer Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Cloud Engineer Salary Research",
      description: "Actionable analysis of cloud engineer compensation across 7 major economies. See how cloud engineer salaries differ across 7 major economies and which markets pay a premium.",
      cta: { label: "Salary by Country", href: "/cloud-engineer-salary-by-country" },
    },
    salaryCards: [
      { label: "US Average", value: "$115,000" },
      { label: "US Entry Level", value: "$70,000" },
      { label: "US Experienced", value: "$170,000" },
    ],
    keyTakeaways: [
      { title: "Strong Global Demand", description: "Cloud engineers are in demand across all analyzed economies as cloud adoption continues." },
      { title: "Certifications Boost Earnings", description: "Professional-level cloud certifications significantly impact salary potential." },
    ],
    salaryTable: {
      title: "Cloud Engineer Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$115,000", entryLevel: "$70,000", experienced: "$170,000" },
        { country: "🇬🇧 United Kingdom", average: "£50,000", entryLevel: "£28,000", experienced: "£78,000" },
        { country: "🇨🇦 Canada", average: "C$82,000", entryLevel: "C$50,000", experienced: "C$125,000" },
        { country: "🇦🇺 Australia", average: "A$105,000", entryLevel: "A$65,000", experienced: "A$155,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$85,000", entryLevel: "NZ$52,000", experienced: "NZ$125,000" },
        { country: "🇸🇬 Singapore", average: "S$68,000", entryLevel: "S$38,000", experienced: "S$105,000" },
        { country: "🇮🇳 India", average: "₹10.0L", entryLevel: "₹3.5L", experienced: "₹20.0L" },
      ],
    },
    faqs: [
      { question: "What is the average cloud engineer salary globally?", answer: "Average cloud engineer salaries range from $115,000 in the United States to A$105,000 in Australia and £50,000 in the UK." },
      { question: "Which country has the highest cloud engineer salary?", answer: "The United States offers the highest average salary at $115,000. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "Cloud Engineer Hub", href: "/cloud-engineer" },
      { label: "Highest Paying Countries", href: "/cloud-engineer-highest-paying-countries" },
      { label: "Best Countries for Cloud Engineers", href: "/cloud-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/cloud-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/cloud-engineer-ppp-adjusted-salary" },
      { label: "Cloud Engineer Salary Index 2026", href: "/research/cloud-engineer-salary-index-2026" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}