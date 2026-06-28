import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/devops-engineer-best-countries"
const seoTitle = "Best Countries for DevOps Engineers (2026)"
const seoDesc = "Discover the best countries for devops engineers in 2026. Compare salary, tax, cost of living, career growth, and quality of life."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Best Countries", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Career Intelligence",
      title: "Best Countries for DevOps Engineers",
      description: "Discover the best countries for devops engineers in 2026. Our analysis considers salary, tax burden, cost of living, career growth potential, and quality of life.",
    },
    keyTakeaways: [
      { title: "United States - Maximum Pay", description: "Highest DevOps salaries with most job opportunities." },
      { title: "Remote Work Standard", description: "DevOps roles are highly remote-friendly across all markets." },
    ],
    countryCards: {
      title: "Country Recommendations",
      countries: [
      {
          flag: "🇺🇸", name: "United States", slug: "us",
          summary: "Highest DevOps salaries.",
          metrics: [{ label: "Avg Salary", value: "$125,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇨🇦", name: "Canada", slug: "ca",
          summary: "Growing DevOps demand.",
          metrics: [{ label: "Avg Salary", value: "C$88,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇦🇺", name: "Australia", slug: "au",
          summary: "Competitive DevOps pay.",
          metrics: [{ label: "Avg Salary", value: "A$115,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇸🇬", name: "Singapore", slug: "sg",
          summary: "Regional tech hub.",
          metrics: [{ label: "Avg Salary", value: "S$72,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇬🇧", name: "United Kingdom", slug: "uk",
          summary: "Strong DevOps adoption.",
          metrics: [{ label: "Avg Salary", value: "£55,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇳🇿", name: "New Zealand", slug: "nz",
          summary: "Emerging DevOps sector.",
          metrics: [{ label: "Avg Salary", value: "NZ$90,000" }, { label: "Best For", value: "Career growth" }],
        },
      ],
    },
    faqs: [
      { question: "Which country is overall best for devops engineers?", answer: "The best country depends on priorities. The US maximizes compensation, Canada offers accessible immigration, and Singapore has the lowest taxes." },
      { question: "Which country is easiest to immigrate to as a devops engineer?", answer: "Canada and Australia both offer accessible immigration pathways for skilled professionals." },
    ],
    relatedPages: [
      { label: "DevOps Engineer Hub", href: "/devops-engineer" },
      { label: "Highest Paying Countries", href: "/devops-engineer-highest-paying-countries" },
      { label: "Salary by Country", href: "/devops-engineer-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}