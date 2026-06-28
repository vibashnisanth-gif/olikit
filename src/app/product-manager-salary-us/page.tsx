import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-salary-us"
const seoTitle = "Product Manager Salary in the United States (2026)"
const seoDesc = "Research product manager salaries in the United States. Compare compensation across experience levels and industries."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Product Manager Salary US", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1FA}\u{1F1F8} United States \u2014 Salary Intelligence",
      title: "Product Manager Salary in the United States",
      description: "The United States offers some of the highest product manager salaries in the world, particularly in technology hubs like San Francisco, Seattle, and New York.",
    },
    salaryCards: [
      { label: "Average Salary", value: "$110,000" },
      { label: "Entry Level", value: "$70,000" },
      { label: "Experienced", value: "$165,000" },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "$70,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "$110,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "$165,000" },
      ],
    },
    faqs: [
      { question: "What is the average product manager salary in the US?", answer: "The average product manager salary in the US is approximately $110,000 per year. Entry-level positions start around $70,000, while experienced product managers can earn over $165,000." },
      { question: "Which industries pay product managers the most in the US?", answer: "Technology companies, particularly SaaS and product-led growth companies, offer the highest PM salaries. Finance and healthcare sectors also offer competitive compensation." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Product Manager Salary UK", href: "/product-manager-salary-uk" },
      { label: "Product Manager Salary Canada", href: "/product-manager-salary-canada" },
      { label: "Product Manager Salary Australia", href: "/product-manager-salary-australia" },
      { label: "Highest Paying Countries", href: "/highest-paying-countries-for-product-managers" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}