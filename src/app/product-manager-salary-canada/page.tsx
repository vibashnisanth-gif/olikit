import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-salary-canada"
const seoTitle = "Product Manager Salary in Canada (2026)"
const seoDesc = "Research product manager salaries in Canada. Compare compensation across provinces and experience levels."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Product Manager Salary Canada", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1E8}\u{1F1E6} Canada \u2014 Salary Intelligence",
      title: "Product Manager Salary in Canada",
      description: "Canada's growing technology sector offers competitive product manager salaries, particularly in Toronto, Vancouver, and Montreal.",
    },
    salaryCards: [
      { label: "Average Salary", value: "C$85,000" },
      { label: "Entry Level", value: "C$55,000" },
      { label: "Experienced", value: "C$130,000" },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "C$55,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "C$85,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "C$130,000" },
      ],
    },
    faqs: [
      { question: "What is the average product manager salary in Canada?", answer: "The average product manager salary in Canada is approximately C$85,000 per year. Entry-level positions start around C$55,000, while experienced PMs can earn over C$130,000." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Product Manager Salary US", href: "/product-manager-salary-us" },
      { label: "Product Manager Salary UK", href: "/product-manager-salary-uk" },
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