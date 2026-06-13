import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-salary-singapore"
const seoTitle = "Product Manager Salary in Singapore (2026)"
const seoDesc = "Research product manager salaries in Singapore. Compare compensation across experience levels and industries in the Singapore market."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Product Manager Salary Singapore", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1F8}\u{1F1EC} Singapore \u2014 Salary Intelligence",
      title: "Product Manager Salary in Singapore",
      description: "Singapore offers a strategic Asia-Pacific product management hub with extremely favorable tax environment and growing technology sector.",
    },
    salaryCards: [
      { label: "Average Salary", value: "S$75,000" },
      { label: "Entry Level", value: "S$45,000" },
      { label: "Experienced", value: "S$115,000" },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "S$45,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "S$75,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "S$115,000" },
      ],
    },
    faqs: [
      { question: "What is the average product manager salary in Singapore?", answer: "The average product manager salary in Singapore is approximately S$75,000 per year. Entry-level positions start around S$45,000, while experienced product managers can earn over S$115,000." },
      { question: "How does Singapore's tax system benefit product managers?", answer: "Singapore has one of the lowest tax burdens among analyzed countries with a top marginal rate of 22% and an effective rate of approximately 7% for average earners. There is no capital gains tax, making it highly attractive for PMs." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Product Manager Salary US", href: "/product-manager-salary-us" },
      { label: "Product Manager Salary India", href: "/product-manager-salary-india" },
      { label: "Salary by Country", href: "/product-manager-salary-by-country" },
      { label: "Highest Paying Countries", href: "/highest-paying-countries-for-product-managers" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
