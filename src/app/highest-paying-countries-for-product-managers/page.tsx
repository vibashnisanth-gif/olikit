import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/highest-paying-countries-for-product-managers"
const seoTitle = "Highest Paying Countries for Product Managers (2026)"
const seoDesc = "Ranking of the highest paying countries for product managers in 2026. Compare average salaries, tax-adjusted income, and purchasing power across major economies."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const articleSchema = buildArticleJsonLd(seoTitle, seoDesc, pagePath, { code: "en", name: "English", slug: "en" } as any)

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Highest Paying Countries", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Global Rankings",
      title: "Highest Paying Countries for Product Managers",
      description: "Ranking of the highest paying countries for product managers in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation across 7 major economies.",
    },
    salaryCards: [
      { label: "1st - Australia", value: "A$120,000" },
      { label: "2nd - United States", value: "$110,000" },
      { label: "3rd - New Zealand", value: "NZ$95,000" },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", salary: "A$120,000", note: "Highest PM salaries. Strong tech and finance sectors." },
        { rank: 2, flag: "\u{1F1FA}\u{1F1F8}", name: "United States", salary: "$110,000", note: "Strong PM market. Equity common at tech companies." },
        { rank: 3, flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", salary: "NZ$95,000", note: "Growing tech PM opportunities." },
        { rank: 4, flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", salary: "C$85,000", note: "Expanding PM roles in Toronto and Vancouver." },
        { rank: 5, flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", salary: "S$75,000", note: "Regional tech hub. Lowest taxes." },
        { rank: 6, flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", salary: "\u00a355,000", note: "Strong fintech PM market centered in London." },
        { rank: 7, flag: "\u{1F1EE}\u{1F1F3}", name: "India", salary: "\u20b920,00,000", note: "Strongest PPP. Large tech workforce." },
      ],
    },
    keyTakeaways: [
      { title: "Australia Leads by Nominal Salary", description: "Australia offers the highest average product manager salaries at A$120,000, driven by strong demand in technology and financial services sectors." },
      { title: "US Offers Strong Total Compensation", description: "The United States ranks second at $110,000 average, but equity compensation at technology companies can significantly increase total PM compensation." },
      { title: "Singapore Most Tax-Efficient", description: "Despite ranking 5th by nominal salary, Singapore's low tax environment (7% effective rate) makes it highly competitive for after-tax PM income." },
    ],
    proseSections: [
      {
        title: "Global Salary Rankings Analysis",
        paragraphs: [
          "Product manager compensation varies across global markets. Australia leads with average salaries of A$120,000, followed by the United States at $110,000 and New Zealand at NZ$95,000.",
          "When evaluating these rankings, consider that nominal salary is just one factor. Tax burden, cost of living, purchasing power, benefits, and career growth opportunities all affect the real value of compensation packages for product managers.",
        ],
      },
    ],
    faqs: [
      { question: "Which country pays product managers the highest salary?", answer: "Australia pays product managers the highest average salary at A$120,000 per year, followed by the United States at $110,000. When including equity compensation, US product managers at major technology companies can earn substantially more." },
      { question: "Which country has the highest product manager salaries after tax?", answer: "The United States offers the highest after-tax salary at approximately $85,800 for an average earner, followed by Australia at A$90,000. Singapore offers the lowest effective tax rate but lower nominal salaries." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Best Countries for Product Managers", href: "/best-countries-for-product-managers" },
      { label: "Tax-Adjusted Salary", href: "/product-manager-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/product-manager-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/product-manager-salary-by-country" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}