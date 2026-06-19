import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-salary-new-zealand"
const seoTitle = "Product Manager Salary in New Zealand (2026)"
const seoDesc = "Research product manager salaries in New Zealand. Compare compensation across experience levels and industries in the New Zealand market."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Product Manager Salary NZ", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "\u{1F1F3}\u{1F1FF} New Zealand \u2014 Salary Intelligence",
      title: "Product Manager Salary in New Zealand",
      description: "New Zealand offers product managers an exceptional work-life balance with a growing technology sector centered in Auckland and Wellington.",
    },
    salaryCards: [
      { label: "Average Salary", value: "NZ$95,000" },
      { label: "Entry Level", value: "NZ$60,000" },
      { label: "Experienced", value: "NZ$135,000" },
    ],
    salaryTable: {
      title: "Salary by Experience Level",
      headers: ["Level", "Experience", "Annual Salary"],
      rows: [
        { level: "Entry Level", experience: "0\u20132 Years", salary: "NZ$60,000" },
        { level: "Mid Level", experience: "3\u20137 Years", salary: "NZ$95,000" },
        { level: "Senior", experience: "8\u201315 Years", salary: "NZ$135,000" },
      ],
    },
    faqs: [
      { question: "What is the average product manager salary in New Zealand?", answer: "The average product manager salary in New Zealand is approximately NZ$95,000 per year. Entry-level positions start around NZ$60,000, while experienced product managers can earn over NZ$135,000." },
      { question: "Which New Zealand cities have the best PM job markets?", answer: "Auckland and Wellington are the primary hubs for product management roles in New Zealand. The technology sector is growing steadily, particularly in fintech, agritech, and SaaS." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Product Manager Salary Australia", href: "/product-manager-salary-australia" },
      { label: "Product Manager Salary Singapore", href: "/product-manager-salary-singapore" },
      { label: "Salary by Country", href: "/product-manager-salary-by-country" },
      { label: "Tax-Adjusted Salary", href: "/product-manager-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/product-manager-ppp-adjusted-salary" },
      { label: "Highest Paying Countries", href: "/highest-paying-countries-for-product-managers" },
      { label: "Best Countries for PMs", href: "/best-countries-for-product-managers" },
    ],
  }

  const articleSchema = buildArticleJsonLd(seoTitle, seoDesc, pagePath, { code: "en", name: "English", slug: "en" } as any)

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
