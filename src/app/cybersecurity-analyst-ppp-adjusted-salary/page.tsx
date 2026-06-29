import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cybersecurity-analyst-ppp-adjusted-salary"
const seoTitle = "Cybersecurity Analyst PPP-Adjusted Salary (2026)"
const seoDesc = "Compare cybersecurity analyst salaries adjusted for purchasing power parity across 7 major economies. See the real value of compensation."

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
      title: "Cybersecurity Analyst PPP-Adjusted Salary",
      description: "Compare cybersecurity analyst salaries adjusted for purchasing power parity across 7 major economies. Understand the real value of compensation when adjusted for local cost of living.",
      cta: { label: "Tax-Adjusted Salary", href: "/cybersecurity-analyst-tax-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    countryRanking: {
      title: "PPP-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "🇮🇳", name: "India", slug: "in", salary: "₹9.0L", note: "" },
        { rank: 2, flag: "🇦🇺", name: "Australia", slug: "au", salary: "A$100,000", note: "" },
        { rank: 3, flag: "🇺🇸", name: "United States", slug: "us", salary: "$105,000", note: "" },
        { rank: 4, flag: "🇨🇦", name: "Canada", slug: "ca", salary: "C$78,000", note: "" },
        { rank: 5, flag: "🇳🇿", name: "New Zealand", slug: "nz", salary: "NZ$80,000", note: "" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", slug: "sg", salary: "S$65,000", note: "" },
        { rank: 7, flag: "🇬🇧", name: "United Kingdom", slug: "uk", salary: "£48,000", note: "" },
      ],
    },
    faqs: [
      { question: "What is purchasing power parity and why does it matter?", answer: "Purchasing Power Parity (PPP) adjusts salaries for local cost of living. A salary in the US has different real purchasing power than the equivalent salary in India or the UK." },
      { question: "Which country offers the best PPP-adjusted salary?", answer: "India offers exceptional PPP-adjusted value. While nominal salaries are lower, the cost of goods and services allows professionals to achieve a high standard of living." },
    ],
    relatedPages: [
      { label: "Cybersecurity Analyst Hub", href: "/cybersecurity-analyst" },
      { label: "Tax-Adjusted Salary", href: "/cybersecurity-analyst-tax-adjusted-salary" },
      { label: "Salary by Country", href: "/cybersecurity-analyst-salary-by-country" },
      { label: "Highest Paying Countries", href: "/cybersecurity-analyst-highest-paying-countries" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}