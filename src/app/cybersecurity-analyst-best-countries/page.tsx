import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cybersecurity-analyst-best-countries"
const seoTitle = "Best Countries for Cybersecurity Analysts (2026)"
const seoDesc = "Discover the best countries for cybersecurity analysts in 2026. Compare salary, tax, cost of living, career growth, and quality of life."

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
      title: "Best Countries for Cybersecurity Analysts",
      description: "Discover the best countries for cybersecurity analysts in 2026. Our analysis considers salary, tax burden, cost of living, career growth potential, and quality of life.",
    },
    keyTakeaways: [
      { title: "United States - Maximum Earnings", description: "Highest cybersecurity salaries with most job openings." },
      { title: "Government Roles Worldwide", description: "Public sector cybersecurity offers stable careers globally." },
    ],
    countryCards: {
      title: "Country Recommendations",
      countries: [
      {
          flag: "🇺🇸", name: "United States", slug: "us",
          summary: "Highest cybersecurity salaries.",
          metrics: [{ label: "Avg Salary", value: "$105,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇨🇦", name: "Canada", slug: "ca",
          summary: "Growing cybersecurity demand.",
          metrics: [{ label: "Avg Salary", value: "C$78,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇦🇺", name: "Australia", slug: "au",
          summary: "Competitive security pay.",
          metrics: [{ label: "Avg Salary", value: "A$100,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇸🇬", name: "Singapore", slug: "sg",
          summary: "Regional security hub.",
          metrics: [{ label: "Avg Salary", value: "S$65,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇬🇧", name: "United Kingdom", slug: "uk",
          summary: "Strong security sector.",
          metrics: [{ label: "Avg Salary", value: "£48,000" }, { label: "Best For", value: "Career growth" }],
        },
      {
          flag: "🇳🇿", name: "New Zealand", slug: "nz",
          summary: "Emerging security sector.",
          metrics: [{ label: "Avg Salary", value: "NZ$80,000" }, { label: "Best For", value: "Career growth" }],
        },
      ],
    },
    faqs: [
      { question: "Which country is overall best for cybersecurity analysts?", answer: "The best country depends on priorities. The US maximizes compensation, Canada offers accessible immigration, and Singapore has the lowest taxes." },
      { question: "Which country is easiest to immigrate to as a cybersecurity analyst?", answer: "Canada and Australia both offer accessible immigration pathways for skilled professionals." },
    ],
    relatedPages: [
      { label: "Cybersecurity Analyst Hub", href: "/cybersecurity-analyst" },
      { label: "Highest Paying Countries", href: "/cybersecurity-analyst-highest-paying-countries" },
      { label: "Salary by Country", href: "/cybersecurity-analyst-salary-by-country" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
