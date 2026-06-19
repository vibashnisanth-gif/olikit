import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-salary-us"
const seoTitle = "Data Scientist Salary in the United States (2026)"
const seoDesc = "Research data scientist salaries in the United States. Compare compensation across experience levels, understand taxes, and evaluate purchasing power."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist Salary US", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1FA}\u{1F1F8} United States \u2014 Salary Intelligence",
      title: "Data Scientist Salary in the United States",
      description: "The United States consistently reports some of the highest data scientist salaries in the world. Technology hubs across California, Washington, New York, and Texas offer competitive compensation for skilled data professionals.",
    },
    salaryCards: [
      { label: "Average Salary", value: "$125,000" },
      { label: "Entry Level", value: "$80,000" },
      { label: "Experienced", value: "$175,000" },
    ],
    keyTakeaways: [
      { title: "Highest Salaries Globally", description: "The US offers some of the highest data scientist salaries in the world, particularly in major technology hubs." },
      { title: "Machine Learning Premium", description: "ML specialists and AI researchers command 20-40% higher compensation than general data scientists." },
      { title: "Location Matters", description: "Salaries vary significantly between cities such as San Francisco, Seattle, New York, and Austin." },
      { title: "Equity Common in Tech", description: "US technology companies commonly offer equity compensation that can significantly increase total compensation." },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "$80,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "$125,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "$175,000" },
      ],
    },
    faqs: [
      { question: "What is the average data scientist salary in the US?", answer: "The average data scientist salary in the US is approximately $125,000 per year. Entry-level positions start around $80,000, while experienced data scientists can earn over $175,000." },
      { question: "How does location affect data scientist salaries in the US?", answer: "Salaries vary significantly by location. San Francisco and New York offer the highest compensation but also have the highest cost of living. Austin, Seattle, and Boston offer competitive salaries with lower living costs." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Data Scientist Salary UK", href: "/data-scientist-salary-uk" },
      { label: "Data Scientist Salary Canada", href: "/data-scientist-salary-canada" },
      { label: "Data Scientist Salary Australia", href: "/data-scientist-salary-australia" },
      { label: "Data Scientist US vs UK", href: "/data-scientist-us-vs-uk" },
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
