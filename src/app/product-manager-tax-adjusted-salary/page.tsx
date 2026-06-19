import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/product-manager-tax-adjusted-salary"
const seoTitle = "Product Manager Tax-Adjusted Salary (2026)"
const seoDesc = "Compare product manager salaries adjusted for income tax across 7 major economies. See how tax systems affect real take-home pay."

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
      title: "Product Manager Tax-Adjusted Salary",
      description: "Compare product manager salaries adjusted for income tax across 7 major economies. See how different tax systems affect real take-home pay and make informed decisions.",
      cta: { label: "PPP-Adjusted Salary", href: "/product-manager-ppp-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best After-Tax", value: "US ($85,800)" },
      { label: "Highest Gross", value: "Australia (A$120,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    countryRanking: {
      title: "Tax-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "\u{1F1FA}\u{1F1F8}", name: "United States", salary: "$85,800 (22% tax)" },
        { rank: 2, flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", salary: "A$90,000 (25% tax)" },
        { rank: 3, flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", salary: "S$69,750 (7% tax)" },
        { rank: 4, flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", salary: "NZ$71,250 (25% tax)" },
        { rank: 5, flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", salary: "C$63,750 (25% tax)" },
        { rank: 6, flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", salary: "\u00a344,000 (20% tax)" },
        { rank: 7, flag: "\u{1F1EE}\u{1F1F3}", name: "India", salary: "\u20b916,00,000 (20% tax)" },
      ],
    },
    proseSections: [
      {
        title: "After-Tax Salary Comparison",
        paragraphs: [
          "Income tax burden significantly affects the real value of product manager salaries. Singapore offers the lowest effective tax rate at approximately 7% for average earners. The United States has a moderate tax burden of approximately 22% effective rate, though this varies significantly by state.",
          "Countries with universal healthcare systems like Canada, Australia, and the UK have higher effective tax rates (20-30%), but these contributions fund comprehensive public healthcare, offsetting the higher tax burden for many professionals.",
        ],
      },
    ],
    faqs: [
      { question: "Which country offers the best after-tax salary for product managers?", answer: "The United States offers the highest after-tax salary at approximately $85,800 for an average earner, followed by Australia at A$90,000. Singapore offers the best tax efficiency with only 7% effective tax." },
      { question: "How does tax efficiency affect product manager compensation decisions?", answer: "Tax efficiency is critical for product managers considering international moves. Singapore and the United States offer the best after-tax outcomes. High-tax but high-services countries like Australia and Canada may offer better overall value when healthcare and benefits are included." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "PPP-Adjusted Salary", href: "/product-manager-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/product-manager-salary-by-country" },
      { label: "Highest Paying Countries", href: "/highest-paying-countries-for-product-managers" },
      { label: "Best Countries for PMs", href: "/best-countries-for-product-managers" },
      { label: "Highest Paying Cities", href: "/rankings/highest-paying-cities-product-managers" },
      { label: "PM Salary Index 2026", href: "/research/product-manager-salary-index-2026" },
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
