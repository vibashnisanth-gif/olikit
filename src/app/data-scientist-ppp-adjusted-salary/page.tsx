import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-ppp-adjusted-salary"
const seoTitle = "Data Scientist PPP-Adjusted Salary (2026)"
const seoDesc = "Compare data scientist salaries adjusted for purchasing power parity across 7 major economies. Understand real compensation value when adjusted for local costs."

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
      title: "Data Scientist PPP-Adjusted Salary",
      description: "Compare data scientist salaries adjusted for purchasing power parity across 7 major economies.",
    },
    countryRanking: {
      title: "PPP-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "\u{1F1EE}\u{1F1F3}", name: "India", slug: "in", salary: "\u20b914,00,000 (~$16,800 USD PPP)" },
        { rank: 2, flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", slug: "au", salary: "A$115,000 (~$77,000 USD)" },
        { rank: 3, flag: "\u{1F1FA}\u{1F1F8}", name: "United States", slug: "us", salary: "$125,000" },
        { rank: 4, flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", slug: "ca", salary: "C$88,000 (~$64,000 USD)" },
        { rank: 5, flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", slug: "nz", salary: "NZ$100,000 (~$60,000 USD)" },
        { rank: 6, flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", slug: "sg", salary: "S$78,000 (~$58,000 USD)" },
        { rank: 7, flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", slug: "uk", salary: "\u00a358,000 (~$74,000 USD)" },
      ],
    },
    faqs: [
      { question: "Which country offers the best PPP-adjusted salary for data scientists?", answer: "India offers exceptional PPP-adjusted value. While nominal salaries are lower, the cost of goods, services, and housing allows data scientists to achieve a high standard of living relative to income." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Tax-Adjusted Salary", href: "/data-scientist-tax-adjusted-salary" },
      { label: "Salary by Country", href: "/data-scientist-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}