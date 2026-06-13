import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-salary-australia"
const seoTitle = "Data Scientist Salary in Australia (2026)"
const seoDesc = "Research data scientist salaries in Australia. Compare compensation across cities, understand taxes, and evaluate career opportunities in Australian tech hubs."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist Salary Australia", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1E6}\u{1F1FA} Australia \u2014 Salary Intelligence",
      title: "Data Scientist Salary in Australia",
      description: "Australia offers competitive data scientist salaries combined with a high quality of life. Sydney and Melbourne are the primary technology hubs with growing data science and AI sectors.",
    },
    salaryCards: [
      { label: "Average Salary", value: "A$115,000" },
      { label: "Entry Level", value: "A$70,000" },
      { label: "Experienced", value: "A$165,000" },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "A$70,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "A$115,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "A$165,000" },
      ],
    },
    faqs: [
      { question: "What is the average data scientist salary in Australia?", answer: "The average data scientist salary in Australia is approximately A$115,000 per year. Entry-level positions start around A$70,000, while experienced data scientists can earn over A$165,000." },
      { question: "Which Australian city offers the best data science opportunities?", answer: "Sydney leads the Australian data science market with the highest concentration of technology companies and financial institutions, followed by Melbourne. Both cities offer competitive salaries and strong job markets." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Data Scientist Salary US", href: "/data-scientist-salary-us" },
      { label: "Data Scientist Salary UK", href: "/data-scientist-salary-uk" },
      { label: "Data Scientist UK vs Australia", href: "/data-scientist-uk-vs-australia" },
      { label: "Highest Paying Countries", href: "/data-scientist-highest-paying-countries" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
