import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/software-engineer-ppp-adjusted-salary"
const seoTitle = "Software Engineer PPP-Adjusted Salary (2026)"
const seoDesc = "Compare software engineer salaries adjusted for purchasing power parity across 7 major economies. See the real value of compensation adjusted for local costs."

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
      title: "Software Engineer PPP-Adjusted Salary",
      description: "Compare software engineer salaries adjusted for purchasing power parity across 7 major economies. Understand the real value of compensation when adjusted for local cost of living.",
      cta: { label: "Tax-Adjusted Salary", href: "/software-engineer-tax-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best PPP Value", value: "India (4x multiplier)" },
      { label: "Strong PPP", value: "Australia" },
      { label: "Moderate PPP", value: "US, Canada" },
    ],
    countryRanking: {
      title: "PPP-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "\u{1F1EE}\u{1F1F3}", name: "India", salary: "\u20b912,00,000 (~$14,400 USD PPP)", note: "Exceptional local purchasing power" },
        { rank: 2, flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", salary: "A$110,000 (~$72,000 USD)" },
        { rank: 3, flag: "\u{1F1FA}\u{1F1F8}", name: "United States", salary: "$120,000" },
        { rank: 4, flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", salary: "C$85,000 (~$62,000 USD)" },
        { rank: 5, flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", salary: "NZ$95,000 (~$57,000 USD)" },
        { rank: 6, flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", salary: "S$72,000 (~$53,000 USD)" },
        { rank: 7, flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", salary: "\u00a355,000 (~$70,000 USD)" },
      ],
    },
    proseSections: [
      {
        title: "Purchasing Power Parity Analysis",
        paragraphs: [
          "Purchasing power parity (PPP) analysis reveals significant differences between nominal salaries and real economic value. When adjusted for local price levels, the ranking of countries by compensation changes notably.",
          "India stands out for offering exceptional purchasing power relative to local costs. Despite lower nominal salaries, the cost of goods, services, and housing in India allows software engineers to achieve a high standard of living.",
          "The United States and Australia maintain strong purchasing power for most goods and services, though housing costs in major cities significantly impact real disposable income.",
        ],
      },
    ],
    faqs: [
      { question: "What is purchasing power parity and why does it matter?", answer: "Purchasing Power Parity (PPP) adjusts salaries for local cost of living. A salary of $120,000 in the US has different real purchasing power than the equivalent salary in India or the UK because goods and services cost different amounts in each country." },
      { question: "Which country offers the best PPP-adjusted salary?", answer: "India offers exceptional PPP-adjusted value. While nominal salaries are lower, the cost of goods, services, and housing in India allows software engineers to achieve a high standard of living relative to their income." },
    ],
    relatedPages: [
      { label: "Software Engineer Hub", href: "/software-engineer" },
      { label: "Tax-Adjusted Salary", href: "/software-engineer-tax-adjusted-salary" },
      { label: "Salary by Country", href: "/software-engineer-salary-by-country" },
      { label: "Highest Paying Countries", href: "/software-engineer-highest-paying-countries" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}