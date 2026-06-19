import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-salary-uk"
const seoTitle = "Data Scientist Salary in the United Kingdom (2026)"
const seoDesc = "Research data scientist salaries in the United Kingdom. Compare compensation across experience levels, understand taxes, and evaluate career opportunities."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist Salary UK", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1EC}\u{1F1E7} United Kingdom \u2014 Salary Intelligence",
      title: "Data Scientist Salary in the United Kingdom",
      description: "The United Kingdom, particularly London, has a growing data science and AI sector. The UK offers competitive salaries within Europe, strong fintech presence, and universal healthcare.",
    },
    salaryCards: [
      { label: "Average Salary", value: "\u00a358,000" },
      { label: "Entry Level", value: "\u00a332,000" },
      { label: "Experienced", value: "\u00a390,000" },
    ],
    keyTakeaways: [
      { title: "London Leads UK Market", description: "London offers the highest data scientist salaries in the UK, driven by fintech and financial services." },
      { title: "Fintech Dominance", description: "The UK's strong fintech sector provides premium compensation for data scientists with financial modeling expertise." },
      { title: "Universal Healthcare Offset", description: "NHS provides comprehensive healthcare, offsetting the lower nominal salaries compared to the US." },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "\u00a332,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "\u00a358,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "\u00a390,000" },
      ],
    },
    faqs: [
      { question: "What is the average data scientist salary in the UK?", answer: "The average data scientist salary in the UK is approximately \u00a358,000 per year. Entry-level positions start around \u00a332,000, while experienced data scientists can earn over \u00a390,000." },
      { question: "How does London compare to other UK cities for data science?", answer: "London offers the highest salaries, typically 20-30% above the national average. Manchester, Cambridge, and Edinburgh also have growing data science sectors with competitive compensation." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Data Scientist Salary US", href: "/data-scientist-salary-us" },
      { label: "Data Scientist Salary Canada", href: "/data-scientist-salary-canada" },
      { label: "Data Scientist Salary Australia", href: "/data-scientist-salary-australia" },
      { label: "Data Scientist US vs UK", href: "/data-scientist-us-vs-uk" },
      { label: "Data Scientist UK vs Australia", href: "/data-scientist-uk-vs-australia" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
