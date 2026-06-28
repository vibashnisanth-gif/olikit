import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/machine-learning-engineer-best-countries"
const seoTitle = "Best Countries for Machine Learning Engineers (2026)"
const seoDesc = "Discover the best countries for machine learning engineers in 2026. Compare salary, tax, cost of living, career growth, and quality of life."

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
      title: "Best Countries for Machine Learning Engineers",
      description: "Discover the best countries for machine learning engineers in 2026. Our analysis considers salary, tax burden, cost of living, career growth potential, and quality of life.",
    },
    keyTakeaways: [
      { title: "United States - Maximum Compensation", description: "Highest salaries and most ML research roles." },
      { title: "Canada - Best for Immigration + Career", description: "Growing AI ecosystem with accessible pathways." },
    ],
    countryCards: {
      title: "Country Recommendations",
      countries: [
      {
          flag: "🇺🇸", name: "United States", slug: "us",
          summary: "Highest ML salaries globally.",
          metrics: [{ label: "Avg Salary", value: "$130,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇨🇦", name: "Canada", slug: "ca",
          summary: "Growing ML research hubs.",
          metrics: [{ label: "Avg Salary", value: "C$90,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇦🇺", name: "Australia", slug: "au",
          summary: "Competitive ML salaries.",
          metrics: [{ label: "Avg Salary", value: "A$120,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇸🇬", name: "Singapore", slug: "sg",
          summary: "Strong fintech ML roles.",
          metrics: [{ label: "Avg Salary", value: "S$82,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇬🇧", name: "United Kingdom", slug: "uk",
          summary: "Strong AI/ML sector.",
          metrics: [{ label: "Avg Salary", value: "£60,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇳🇿", name: "New Zealand", slug: "nz",
          summary: "Emerging ML sector.",
          metrics: [{ label: "Avg Salary", value: "NZ$100,000" }, { label: "Best For", value: "Career growth" }],
        },
      ],
    },
    faqs: [
      { question: "Which country is overall best for machine learning engineers?", answer: "The best country depends on priorities. The US maximizes compensation, Canada offers accessible immigration, and Singapore has the lowest taxes." },
      { question: "Which country is easiest to immigrate to as a machine learning engineer?", answer: "Canada and Australia both offer accessible immigration pathways for skilled professionals." },
    ],
    relatedPages: [
      { label: "Machine Learning Engineer Hub", href: "/machine-learning-engineer" },
      { label: "Highest Paying Countries", href: "/machine-learning-engineer-highest-paying-countries" },
      { label: "Salary by Country", href: "/machine-learning-engineer-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}