import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/devops-engineer-ppp-adjusted-salary"
const seoTitle = "DevOps Engineer PPP-Adjusted Salary (2026)"
const seoDesc = "Compare devops engineer salaries adjusted for purchasing power parity across 7 major economies. See the real value of compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "PPP-Adjusted Salary", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "PPP Analysis",
      title: "DevOps Engineer PPP-Adjusted Salary",
      description: "Compare devops engineer salaries adjusted for purchasing power parity across 7 major economies. Understand the real value of compensation when adjusted for local cost of living.",
      cta: { label: "Tax-Adjusted Salary", href: "/devops-engineer-tax-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    countryRanking: {
      title: "PPP-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "🇮🇳", name: "India", salary: "₹11.0L", note: "" },
        { rank: 2, flag: "🇦🇺", name: "Australia", salary: "A$115,000", note: "" },
        { rank: 3, flag: "🇺🇸", name: "United States", salary: "$125,000", note: "" },
        { rank: 4, flag: "🇨🇦", name: "Canada", salary: "C$88,000", note: "" },
        { rank: 5, flag: "🇳🇿", name: "New Zealand", salary: "NZ$90,000", note: "" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", salary: "S$72,000", note: "" },
        { rank: 7, flag: "🇬🇧", name: "United Kingdom", salary: "£55,000", note: "" },
      ],
    },
    faqs: [
      { question: "What is purchasing power parity and why does it matter?", answer: "Purchasing Power Parity (PPP) adjusts salaries for local cost of living. A salary in the US has different real purchasing power than the equivalent salary in India or the UK." },
      { question: "Which country offers the best PPP-adjusted salary?", answer: "India offers exceptional PPP-adjusted value. While nominal salaries are lower, the cost of goods and services allows professionals to achieve a high standard of living." },
    ],
    relatedPages: [
      { label: "DevOps Engineer Hub", href: "/devops-engineer" },
      { label: "Tax-Adjusted Salary", href: "/devops-engineer-tax-adjusted-salary" },
      { label: "Salary by Country", href: "/devops-engineer-salary-by-country" },
      { label: "Highest Paying Countries", href: "/devops-engineer-highest-paying-countries" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
