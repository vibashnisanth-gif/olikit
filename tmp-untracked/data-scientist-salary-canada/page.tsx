import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-salary-canada"
const seoTitle = "Data Scientist Salary in Canada (2026)"
const seoDesc = "Research data scientist salaries in Canada. Compare compensation across provinces, understand taxes, and evaluate career opportunities in Canadian tech hubs."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist Salary Canada", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1E8}\u{1F1E6} Canada \u2014 Salary Intelligence",
      title: "Data Scientist Salary in Canada",
      description: "Canada's technology sector is growing rapidly, with Toronto, Vancouver, and Montreal emerging as major data science and AI hubs. Competitive salaries combine with accessible immigration and universal healthcare.",
    },
    salaryCards: [
      { label: "Average Salary", value: "C$88,000" },
      { label: "Entry Level", value: "C$55,000" },
      { label: "Experienced", value: "C$135,000" },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "C$55,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "C$88,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "C$135,000" },
      ],
    },
    faqs: [
      { question: "What is the average data scientist salary in Canada?", answer: "The average data scientist salary in Canada is approximately C$88,000 per year. Entry-level positions start around C$55,000, while experienced data scientists can earn over C$135,000." },
      { question: "Which Canadian city pays data scientists the most?", answer: "Toronto and Vancouver offer the highest data scientist salaries, followed by Montreal. Toronto's AI ecosystem, bolstered by the Vector Institute, offers particularly strong compensation." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Data Scientist Salary US", href: "/data-scientist-salary-us" },
      { label: "Data Scientist Salary UK", href: "/data-scientist-salary-uk" },
      { label: "Data Scientist US vs Canada", href: "/data-scientist-us-vs-canada" },
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
