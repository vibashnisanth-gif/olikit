import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-salary"
const seoTitle = "Data Scientist Salary Research & Insights (2026)"
const seoDesc = "Thorough examination of data scientist salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist Salary", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Data Scientist Salary Research",
      description: "Rigorous analysis of data scientist compensation across 7 major economies. See how data scientist pay stacks up across the US, UK, CA, AU, NZ, IN, and SG to identify top opportunities.",
      cta: { label: "Salary by Country", href: "/data-scientist-salary-by-country" },
      secondaryCta: { label: "US Salary", href: "/data-scientist-salary-us" },
    },
    salaryCards: [
      { label: "US Average", value: "$125,000" },
      { label: "US Entry Level", value: "$80,000" },
      { label: "US Experienced", value: "$175,000" },
    ],
    salaryTable: {
      title: "Data Scientist Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "\u{1F1FA}\u{1F1F8} United States", average: "$125,000", entryLevel: "$80,000", experienced: "$175,000" },
        { country: "\u{1F1EC}\u{1F1E7} United Kingdom", average: "\u00a358,000", entryLevel: "\u00a332,000", experienced: "\u00a390,000" },
        { country: "\u{1F1E8}\u{1F1E6} Canada", average: "C$88,000", entryLevel: "C$55,000", experienced: "C$135,000" },
        { country: "\u{1F1E6}\u{1F1FA} Australia", average: "A$115,000", entryLevel: "A$70,000", experienced: "A$165,000" },
        { country: "\u{1F1F3}\u{1F1FF} New Zealand", average: "NZ$100,000", entryLevel: "NZ$60,000", experienced: "NZ$145,000" },
        { country: "\u{1F1F8}\u{1F1EC} Singapore", average: "S$78,000", entryLevel: "S$45,000", experienced: "S$120,000" },
        { country: "\u{1F1EE}\u{1F1F3} India", average: "\u20b914,00,000", entryLevel: "\u20b95,00,000", experienced: "\u20b928,00,000" },
      ],
    },
    proseSections: [
      {
        title: "Global Data Science Salary Landscape",
        paragraphs: [
          "Data science continues to be one of the fastest-growing and highest-paying professions globally. The United States leads with average salaries of $125,000, driven by strong demand from technology companies, financial institutions, and healthcare organizations.",
          "Machine learning specialists and AI researchers command premium compensation across all markets, with specialized roles earning 20-40% more than general data science positions.",
        ],
      },
    ],
    faqs: [
      { question: "What is the average data scientist salary globally?", answer: "Average data scientist salaries range from $125,000 in the United States to A$115,000 in Australia, C$88,000 in Canada, £58,000 in the UK, and ₹14,00,000 in India." },
      { question: "Which country has the highest data scientist salary?", answer: "The United States offers the highest average data scientist salary at $125,000 per year, with top-tier companies paying over $200,000 for experienced machine learning specialists." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Highest Paying Countries", href: "/data-scientist-highest-paying-countries" },
      { label: "Tax-Adjusted Salary", href: "/data-scientist-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/data-scientist-ppp-adjusted-salary" },
      { label: "Data Scientist US vs UK", href: "/data-scientist-us-vs-uk" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}