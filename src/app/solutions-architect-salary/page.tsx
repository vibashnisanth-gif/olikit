import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/solutions-architect-salary"
const seoTitle = "Solutions Architect Salary Research & Insights (2026)"
const seoDesc = "Expert research on solutions architect salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Solutions Architect Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Solutions Architect Salary Research",
      description: "Detailed intelligence on solutions architect compensation across 7 major economies. Discover solutions architect pay across 7 economies and find where experience delivers the greatest reward.",
      cta: { label: "Salary by Country", href: "/solutions-architect-salary-by-country" },
    },
    salaryCards: [
      { label: "US Average", value: "$140,000" },
      { label: "US Entry Level", value: "$90,000" },
      { label: "US Experienced", value: "$200,000" },
    ],
    keyTakeaways: [
      { title: "Highest-Paid Tech Role", description: "Solutions architects are among the highest-paid technology professionals globally." },
      { title: "Experience-Driven Pay", description: "10+ years experience with architecture design commands the highest compensation." },
    ],
    salaryTable: {
      title: "Solutions Architect Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$140,000", entryLevel: "$90,000", experienced: "$200,000" },
        { country: "🇬🇧 United Kingdom", average: "£65,000", entryLevel: "£38,000", experienced: "£100,000" },
        { country: "🇨🇦 Canada", average: "C$105,000", entryLevel: "C$65,000", experienced: "C$155,000" },
        { country: "🇦🇺 Australia", average: "A$135,000", entryLevel: "A$80,000", experienced: "A$195,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$115,000", entryLevel: "NZ$70,000", experienced: "NZ$165,000" },
        { country: "🇸🇬 Singapore", average: "S$90,000", entryLevel: "S$50,000", experienced: "S$140,000" },
        { country: "🇮🇳 India", average: "₹22.0L", entryLevel: "₹8.0L", experienced: "₹40.0L" },
      ],
    },
    faqs: [
      { question: "What is the average solutions architect salary globally?", answer: "Average solutions architect salaries range from $140,000 in the United States to A$135,000 in Australia and £65,000 in the UK." },
      { question: "Which country has the highest solutions architect salary?", answer: "The United States offers the highest average salary at $140,000. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "Solutions Architect Hub", href: "/solutions-architect" },
      { label: "Highest Paying Countries", href: "/solutions-architect-highest-paying-countries" },
      { label: "Best Countries for Solutions Architects", href: "/solutions-architect-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/solutions-architect-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/solutions-architect-ppp-adjusted-salary" },
      { label: "Solutions Architect Salary Index 2026", href: "/research/solutions-architect-salary-index-2026" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
