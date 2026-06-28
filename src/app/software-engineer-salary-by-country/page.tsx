import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/software-engineer-salary-by-country"
const seoTitle = "Software Engineer Salary by Country (2026)"
const seoDesc = "Compare software engineer salaries by country in 2026. View average, entry-level, and experienced salaries for software engineers across 7 major economies."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Salary by Country", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Global Comparison",
      title: "Software Engineer Salary by Country",
      description: "Compare software engineer salaries across 7 major economies. View average, entry-level, and experienced salaries side by side to make informed career decisions.",
    },
    salaryCards: [
      { label: "Countries", value: "7 Analyzed" },
      { label: "Highest Average", value: "$120,000 (US)" },
      { label: "Wide Range", value: "$7K-$220K+" },
    ],
    salaryTable: {
      title: "Software Engineer Salary by Country (2026)",
      headers: ["Country", "Average", "Entry Level", "Experienced", "Range"],
      rows: [
        { country: "\u{1F1FA}\u{1F1F8} United States", average: "$120,000", entryLevel: "$75,000", experienced: "$180,000", range: "$65K - $220K" },
        { country: "\u{1F1EC}\u{1F1E7} United Kingdom", average: "\u00a355,000", entryLevel: "\u00a330,000", experienced: "\u00a385,000", range: "\u00a325K - \u00a3110K" },
        { country: "\u{1F1E8}\u{1F1E6} Canada", average: "C$85,000", entryLevel: "C$50,000", experienced: "C$130,000", range: "C$45K - C$160K" },
        { country: "\u{1F1E6}\u{1F1FA} Australia", average: "A$110,000", entryLevel: "A$65,000", experienced: "A$160,000", range: "A$55K - A$200K" },
        { country: "\u{1F1F3}\u{1F1FF} New Zealand", average: "NZ$95,000", entryLevel: "NZ$55,000", experienced: "NZ$140,000", range: "NZ$50K - NZ$170K" },
        { country: "\u{1F1F8}\u{1F1EC} Singapore", average: "S$72,000", entryLevel: "S$42,000", experienced: "S$110,000", range: "S$36K - S$140K" },
        { country: "\u{1F1EE}\u{1F1F3} India", average: "\u20b912,00,000", entryLevel: "\u20b94,00,000", experienced: "\u20b925,00,000", range: "\u20b93L - \u20b935L" },
      ],
    },
    proseSections: [
      {
        title: "Understanding Global Salary Differences",
        paragraphs: [
          "Software engineer salaries vary significantly by country due to factors including market demand, cost of living, technology ecosystem maturity, and local economic conditions. The United States leads in nominal compensation driven by its large technology sector and venture capital ecosystem.",
          "When comparing salaries across countries, consider tax burden, purchasing power, benefits, and career growth opportunities. Higher nominal salaries in expensive markets may not always translate to better real outcomes.",
        ],
      },
    ],
    countryCards: {
      title: "Detailed Country Breakdown",
      countries: [
        { flag: "\u{1F1FA}\u{1F1F8}", name: "United States", slug: "us", summary: "Highest salaries globally with strong tech ecosystem. Average $120K.", metrics: [{ label: "Currency", value: "USD ($)" }, { label: "Tax Rate", value: "~22%" }] },
        { flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", slug: "uk", summary: "Strong fintech sector in London. Average \u00a355K.", metrics: [{ label: "Currency", value: "GBP (\u00a3)" }, { label: "Tax Rate", value: "~20%" }] },
        { flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", slug: "ca", summary: "Growing tech hubs. Accessible immigration. Average C$85K.", metrics: [{ label: "Currency", value: "CAD (C$)" }, { label: "Tax Rate", value: "~25%" }] },
        { flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", slug: "au", summary: "Competitive pay and lifestyle. Average A$110K.", metrics: [{ label: "Currency", value: "AUD (A$)" }, { label: "Tax Rate", value: "~25%" }] },
      ],
    },
    faqs: [
      { question: "Which country pays software engineers the most?", answer: "The United States pays the highest average software engineer salary at $120,000, followed by Australia at A$110,000 and New Zealand at NZ$95,000." },
      { question: "What is the entry-level software engineer salary by country?", answer: "Entry-level salaries range from $75,000 (US) and A$65,000 (Australia) to \u00a330,000 (UK) and \u20b94,00,000 (India)." },
    ],
    relatedPages: [
      { label: "Software Engineer Hub", href: "/software-engineer" },
      { label: "Highest Paying Countries", href: "/software-engineer-highest-paying-countries" },
      { label: "Best Countries", href: "/software-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/software-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/software-engineer-ppp-adjusted-salary" },
      { label: "Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}