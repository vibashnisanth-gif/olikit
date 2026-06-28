import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/ai-engineer-salary"
const seoTitle = "AI Engineer Salary Research & Insights (2026)"
const seoDesc = "Authoritative research on AI engineer salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "AI Engineer Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "AI Engineer Salary Research",
      description: "Expert analysis of AI engineer compensation across 7 major economies. Discover which countries pay AI engineers the most, and how tax and PPP affect real earnings.",
      cta: { label: "Salary by Country", href: "/ai-engineer-salary-by-country" },
    },
    salaryCards: [
      { label: "US Average", value: "$135,000" },
      { label: "US Entry Level", value: "$85,000" },
      { label: "US Experienced", value: "$200,000" },
    ],
    keyTakeaways: [
      { title: "AI Premium Over Traditional SE", description: "AI engineers command a 10-15% premium over traditional software engineers due to specialized ML/AI skills." },
      { title: "Tax Burden Varies Widely", description: "Effective tax rates for AI engineers range from 7% in Singapore to over 30% in top US state brackets." },
      { title: "Equity Compensation Common", description: "AI startups and big tech offer significant equity packages that can double total compensation." },
    ],
    salaryTable: {
      title: "AI Engineer Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$135,000", entryLevel: "$85,000", experienced: "$200,000" },
        { country: "🇬🇧 United Kingdom", average: "£62,000", entryLevel: "£35,000", experienced: "£95,000" },
        { country: "🇨🇦 Canada", average: "C$95,000", entryLevel: "C$60,000", experienced: "C$145,000" },
        { country: "🇦🇺 Australia", average: "A$125,000", entryLevel: "A$75,000", experienced: "A$180,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$105,000", entryLevel: "NZ$65,000", experienced: "NZ$155,000" },
        { country: "🇸🇬 Singapore", average: "S$85,000", entryLevel: "S$50,000", experienced: "S$130,000" },
        { country: "🇮🇳 India", average: "₹18.0L", entryLevel: "₹6.0L", experienced: "₹35.0L" },
      ],
    },
    faqs: [
      { question: "What is the average ai engineer salary globally?", answer: "Average ai engineer salaries range from $135,000 in the United States to A$125,000 in Australia and £62,000 in the UK." },
      { question: "Which country has the highest ai engineer salary?", answer: "The United States offers the highest average salary at $135,000. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "AI Engineer Hub", href: "/ai-engineer" },
      { label: "Highest Paying Countries", href: "/ai-engineer-highest-paying-countries" },
      { label: "Best Countries for AI Engineers", href: "/ai-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/ai-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/ai-engineer-ppp-adjusted-salary" },
      { label: "AI Engineer Salary Index 2026", href: "/research/ai-engineer-salary-index-2026" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}