import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/cloud-engineer-tax-adjusted-salary"
const seoTitle = "Cloud Engineer Tax-Adjusted Salary (2026)"
const seoDesc = "Compare cloud engineer salaries adjusted for income tax across 7 major economies. See how tax systems affect real take-home pay."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Tax-Adjusted Salary", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Tax Analysis",
      title: "Cloud Engineer Tax-Adjusted Salary",
      description: "Compare cloud engineer salaries adjusted for income tax across 7 major economies. See how different tax systems affect real take-home pay.",
      cta: { label: "PPP-Adjusted Salary", href: "/cloud-engineer-ppp-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best After-Tax", value: "US ($89,700)" },
      { label: "Highest Gross", value: "US ($115,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    countryRanking: {
      title: "Tax-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "🇺🇸", name: "United States", slug: "us", salary: "$89,700 (22% tax)" },
        { rank: 2, flag: "🇦🇺", name: "Australia", slug: "au", salary: "A$78,750 (25% tax)" },
        { rank: 3, flag: "🇸🇬", name: "Singapore", slug: "sg", salary: "S$63,240 (7% tax)" },
        { rank: 4, flag: "🇨🇦", name: "Canada", slug: "ca", salary: "C$61,500 (25% tax)" },
        { rank: 5, flag: "🇳🇿", name: "New Zealand", slug: "nz", salary: "NZ$63,750 (25% tax)" },
        { rank: 6, flag: "🇬🇧", name: "United Kingdom", slug: "uk", salary: "£40,000 (20% tax)" },
        { rank: 7, flag: "🇮🇳", name: "India", slug: "in", salary: "₹8.0L (20% tax)" },
      ],
    },
    faqs: [
      { question: "Which country offers the best after-tax salary for cloud engineers?", answer: "The United States offers the highest after-tax salary at approximately $89,700 for an average earner, followed by Australia. Singapore offers the best tax efficiency." },
    ],
    relatedPages: [
      { label: "Cloud Engineer Hub", href: "/cloud-engineer" },
      { label: "PPP-Adjusted Salary", href: "/cloud-engineer-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/cloud-engineer-salary-by-country" },
      { label: "Highest Paying Countries", href: "/cloud-engineer-highest-paying-countries" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}