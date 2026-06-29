import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/ai-engineer-highest-paying-countries"
const seoTitle = "Highest Paying Countries for AI Engineers (2026)"
const seoDesc = "Ranking of the highest paying countries for ai engineers in 2026. Compare average salaries, tax-adjusted income, and purchasing power."

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
      title: "Highest Paying Countries for AI Engineers",
      description: "Ranking of the highest paying countries for ai engineers in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$135,000" },
      { label: "2nd - Australia", value: "A$125,000" },
      { label: "3rd - Canada", value: "C$95,000" },
    ],
    keyTakeaways: [
      { title: "US Leads by Nominal Salary", description: "The United States offers the highest AI engineer salaries globally at $135,000 average." },
      { title: "Australia Offers Best Balance", description: "Australia ranks second with A$125,000 average, combined with universal healthcare and high quality of life." },
      { title: "Singapore Most Tax-Efficient", description: "Despite ranking lower by nominal salary, Singapore's low tax environment makes it competitive for after-tax income." },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", slug: "us", salary: "$135,000", note: "Highest AI salaries globally" },
        { rank: 2, flag: "🇦🇺", name: "Australia", slug: "au", salary: "A$125,000", note: "Competitive AI salaries and lifestyle" },
        { rank: 3, flag: "🇨🇦", name: "Canada", slug: "ca", salary: "C$95,000", note: "Growing AI hubs in Toronto and Montreal" },
        { rank: 4, flag: "🇳🇿", name: "New Zealand", slug: "nz", salary: "NZ$105,000", note: "Emerging AI sector" },
        { rank: 5, flag: "🇬🇧", name: "United Kingdom", slug: "uk", salary: "£62,000", note: "Strong AI research sector in London" },
        { rank: 6, flag: "🇸🇬", name: "Singapore", slug: "sg", salary: "S$85,000", note: "Competitive salaries, low taxes" },
        { rank: 7, flag: "🇮🇳", name: "India", slug: "in", salary: "₹18.0L", note: "Large AI talent pool, strong PPP" },
      ],
    },
    faqs: [
      { question: "Which country pays ai engineers the highest salary?", answer: "The United States pays the highest average salary at $135,000 per year. When including compensation, total packages can significantly exceed this." },
      { question: "Which country has the highest after-tax salary?", answer: "The United States offers the highest after-tax salary at approximately $105,300 for an average earner." },
    ],
    relatedPages: [
      { label: "AI Engineer Hub", href: "/ai-engineer" },
      { label: "Best Countries for AI Engineers", href: "/ai-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/ai-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/ai-engineer-ppp-adjusted-salary" },
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