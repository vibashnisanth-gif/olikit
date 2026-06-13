import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-salary-india"
const seoTitle = "Product Manager Salary in India (2026)"
const seoDesc = "Research product manager salaries in India. Compare compensation across experience levels and industries in the Indian market."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Product Manager Salary India", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1EE}\u{1F1F3} India \u2014 Salary Intelligence",
      title: "Product Manager Salary in India",
      description: "India offers a rapidly growing product management career market with exceptional purchasing power. Major tech hubs include Bengaluru, Mumbai, and Hyderabad.",
    },
    salaryCards: [
      { label: "Average Salary", value: "\u20b920,00,000" },
      { label: "Entry Level", value: "\u20b98,00,000" },
      { label: "Experienced", value: "\u20b935,00,000" },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "\u20b98,00,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "\u20b920,00,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "\u20b935,00,000" },
      ],
    },
    faqs: [
      { question: "What is the average product manager salary in India?", answer: "The average product manager salary in India is approximately \u20b920,00,000 per year. Entry-level positions start around \u20b98,00,000, while experienced product managers can earn over \u20b935,00,000." },
      { question: "Which cities offer the best PM salaries in India?", answer: "Bengaluru, Mumbai, and Hyderabad offer the highest product manager salaries in India, driven by strong technology and startup ecosystems." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Product Manager Salary US", href: "/product-manager-salary-us" },
      { label: "Product Manager Salary Singapore", href: "/product-manager-salary-singapore" },
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
