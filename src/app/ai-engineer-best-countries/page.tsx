import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/ai-engineer-best-countries"
const seoTitle = "Best Countries for AI Engineers (2026)"
const seoDesc = "Discover the best countries for ai engineers in 2026. Compare salary, tax, cost of living, career growth, and quality of life."

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
      title: "Best Countries for AI Engineers",
      description: "Discover the best countries for ai engineers in 2026. Our analysis considers salary, tax burden, cost of living, career growth potential, and quality of life.",
    },
    keyTakeaways: [
      { title: "United States - Best for Maximum Compensation", description: "Highest salaries globally with unparalleled AI research ecosystem, but challenging immigration and high living costs." },
      { title: "Canada - Best for Balanced Relocation", description: "Competitive salaries, accessible Express Entry immigration, universal healthcare, and growing AI hubs." },
      { title: "Singapore - Best for Tax Efficiency", description: "Extremely favorable tax environment (top rate 22%), strategic Asian location." },
    ],
    countryCards: {
      title: "Country Recommendations",
      countries: [
      {
          flag: "🇺🇸", name: "United States", slug: "us",
          summary: "Highest AI salaries globally.",
          metrics: [{ label: "Avg Salary", value: "$135,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇨🇦", name: "Canada", slug: "ca",
          summary: "Growing AI hubs in Toronto and Montreal.",
          metrics: [{ label: "Avg Salary", value: "C$95,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇦🇺", name: "Australia", slug: "au",
          summary: "Competitive AI salaries and lifestyle.",
          metrics: [{ label: "Avg Salary", value: "A$125,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇸🇬", name: "Singapore", slug: "sg",
          summary: "Competitive salaries, low taxes.",
          metrics: [{ label: "Avg Salary", value: "S$85,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇬🇧", name: "United Kingdom", slug: "uk",
          summary: "Strong AI research sector in London.",
          metrics: [{ label: "Avg Salary", value: "£62,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇳🇿", name: "New Zealand", slug: "nz",
          summary: "Emerging AI sector.",
          metrics: [{ label: "Avg Salary", value: "NZ$105,000" }, { label: "Best For", value: "Career growth" }],
        },
      ],
    },
    faqs: [
      { question: "Which country is overall best for ai engineers?", answer: "The best country depends on priorities. The US maximizes compensation, Canada offers accessible immigration, and Singapore has the lowest taxes." },
      { question: "Which country is easiest to immigrate to as a ai engineer?", answer: "Canada and Australia both offer accessible immigration pathways for skilled professionals." },
    ],
    relatedPages: [
      { label: "AI Engineer Hub", href: "/ai-engineer" },
      { label: "Highest Paying Countries", href: "/ai-engineer-highest-paying-countries" },
      { label: "Salary by Country", href: "/ai-engineer-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}