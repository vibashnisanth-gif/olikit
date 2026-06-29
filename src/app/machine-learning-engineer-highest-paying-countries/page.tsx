import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/machine-learning-engineer-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Machine Learning Engineers (2026)"
const seoDesc = "Ranking of the highest paying countries for machine learning engineers in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Highest Paying Countries", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Global Rankings",
      title: "Highest Paying Countries for Machine Learning Engineers",
      description: "Ranking of the highest paying countries for machine learning engineers in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$130,000" },
      { label: "2nd - Australia", value: "A$120,000" },
      { label: "3rd - Canada", value: "C$90,000" },
    ],
    keyTakeaways: [
      { title: "US Dominates ML Compensation", description: "The US offers the highest ML engineer salaries at $130,000 average." },
      { title: "Australia Second with Lifestyle Premium", description: "Australia offers A$120,000 with strong work-life balance." },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", slug: "us", salary: "$130,000", note: "Highest ML salaries globally" },
        { rank: 2, flag: "🇦🇺", name: "Australia", slug: "au", salary: "A$120,000", note: "Competitive ML salaries" },
        { rank: 3, flag: "🇨🇦", name: "Canada", slug: "ca", salary: "C$90,000", note: "Growing ML research hubs" },
        { rank: 4, flag: "🇳🇿", name: "New Zealand", slug: "nz", salary: "NZ$100,000", note: "Emerging ML sector" },
        { rank: 5, flag: "🇬🇧", name: "United Kingdom", slug: "uk", salary: "£60,000", note: "Strong AI/ML sector" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", slug: "sg", salary: "S$82,000", note: "Strong fintech ML roles" },
        { rank: 7, flag: "🇮🇳", name: "India", slug: "in", salary: "₹16.0L", note: "Large ML talent pool" },
      ],
    },
    faqs: [
      { question: "Which country pays machine learning engineers the highest salary?", answer: "The United States pays the highest average salary at $130,000 per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately $101,400 for an average earner." },
    ],
    relatedPages: [
      { label: "Machine Learning Engineer Hub", href: "/machine-learning-engineer" },
      { label: "Best Countries for Machine Learning Engineers", href: "/machine-learning-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/machine-learning-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/machine-learning-engineer-ppp-adjusted-salary" },
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