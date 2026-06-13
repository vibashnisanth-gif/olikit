import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-salary-australia"
const seoTitle = "Product Manager Salary in Australia (2026)"
const seoDesc = "Research product manager salaries in Australia. Compare compensation across cities and experience levels."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Product Manager Salary Australia", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1E6}\u{1F1FA} Australia \u2014 Salary Intelligence",
      title: "Product Manager Salary in Australia",
      description: "Australia offers some of the highest product manager salaries globally, particularly in Sydney and Melbourne.",
    },
    salaryCards: [
      { label: "Average Salary", value: "A$120,000" },
      { label: "Entry Level", value: "A$75,000" },
      { label: "Experienced", value: "A$170,000" },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "A$75,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "A$120,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "A$170,000" },
      ],
    },
    faqs: [
      { question: "What is the average product manager salary in Australia?", answer: "The average product manager salary in Australia is approximately A$120,000 per year, making it one of the highest-paying markets globally for this profession." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Product Manager Salary US", href: "/product-manager-salary-us" },
      { label: "Product Manager Salary UK", href: "/product-manager-salary-uk" },
      { label: "Product Manager Salary Canada", href: "/product-manager-salary-canada" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
