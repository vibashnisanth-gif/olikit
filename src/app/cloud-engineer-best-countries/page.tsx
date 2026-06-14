import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cloud-engineer-best-countries"
const seoTitle = "Best Countries for Cloud Engineers (2026)"
const seoDesc = "Discover the best countries for cloud engineers in 2026. Compare salary, tax, cost of living, career growth, and quality of life."

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
      title: "Best Countries for Cloud Engineers",
      description: "Discover the best countries for cloud engineers in 2026. Our analysis considers salary, tax burden, cost of living, career growth potential, and quality of life.",
    },
    keyTakeaways: [
      { title: "United States - Maximum Opportunity", description: "Largest cloud job market with highest compensation." },
      { title: "Remote Work Advantage", description: "Cloud roles are highly remote-friendly across all countries." },
    ],
    countryCards: {
      title: "Country Recommendations",
      countries: [
      {
          flag: "🇺🇸", name: "United States", slug: "us",
          summary: "Highest cloud salaries.",
          metrics: [{ label: "Avg Salary", value: "$115,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇨🇦", name: "Canada", slug: "ca",
          summary: "Cloud migration demand.",
          metrics: [{ label: "Avg Salary", value: "C$82,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇦🇺", name: "Australia", slug: "au",
          summary: "Competitive cloud pay.",
          metrics: [{ label: "Avg Salary", value: "A$105,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇸🇬", name: "Singapore", slug: "sg",
          summary: "Regional cloud hub.",
          metrics: [{ label: "Avg Salary", value: "S$68,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇬🇧", name: "United Kingdom", slug: "uk",
          summary: "Growing cloud adoption.",
          metrics: [{ label: "Avg Salary", value: "£50,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇳🇿", name: "New Zealand", slug: "nz",
          summary: "Emerging cloud sector.",
          metrics: [{ label: "Avg Salary", value: "NZ$85,000" }, { label: "Best For", value: "Career growth" }],
        },
      ],
    },
    faqs: [
      { question: "Which country is overall best for cloud engineers?", answer: "The best country depends on priorities. The US maximizes compensation, Canada offers accessible immigration, and Singapore has the lowest taxes." },
      { question: "Which country is easiest to immigrate to as a cloud engineer?", answer: "Canada and Australia both offer accessible immigration pathways for skilled professionals." },
    ],
    relatedPages: [
      { label: "Cloud Engineer Hub", href: "/cloud-engineer" },
      { label: "Highest Paying Countries", href: "/cloud-engineer-highest-paying-countries" },
      { label: "Salary by Country", href: "/cloud-engineer-salary-by-country" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
