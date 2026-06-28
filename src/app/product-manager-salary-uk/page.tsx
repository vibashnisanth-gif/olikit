import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-salary-uk"
const seoTitle = "Product Manager Salary in the United Kingdom (2026)"
const seoDesc = "Research product manager salaries in the United Kingdom. Compare compensation across experience levels and industries."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Product Manager Salary UK", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1EC}\u{1F1E7} United Kingdom \u2014 Salary Intelligence",
      title: "Product Manager Salary in the United Kingdom",
      description: "The United Kingdom, particularly London, has a strong product management sector driven by fintech and technology companies.",
    },
    salaryCards: [
      { label: "Average Salary", value: "\u00a355,000" },
      { label: "Entry Level", value: "\u00a332,000" },
      { label: "Experienced", value: "\u00a385,000" },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "\u00a332,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "\u00a355,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "\u00a385,000" },
      ],
    },
    faqs: [
      { question: "What is the average product manager salary in the UK?", answer: "The average product manager salary in the UK is approximately \u00a355,000 per year. Entry-level positions start around \u00a332,000, while experienced PMs can earn over \u00a385,000." },
      { question: "How does London compare to other UK cities for product management?", answer: "London offers the highest PM salaries, typically 20-30% above the national average. Manchester and Edinburgh have growing product management sectors." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Product Manager Salary US", href: "/product-manager-salary-us" },
      { label: "Product Manager Salary Canada", href: "/product-manager-salary-canada" },
      { label: "Product Manager Salary Australia", href: "/product-manager-salary-australia" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}