import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/best-countries-for-product-managers"
const seoTitle = "Best Countries for Product Managers (2026)"
const seoDesc = "Discover the best countries for product managers in 2026. Compare salary, tax, cost of living, career growth, and quality of life across major economies."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const articleSchema = buildArticleJsonLd(seoTitle, seoDesc, pagePath, { code: "en", name: "English", slug: "en" } as any)

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Best Countries", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Career Intelligence",
      title: "Best Countries for Product Managers",
      description: "Discover the best countries for product managers in 2026. Our comprehensive analysis considers salary, tax burden, cost of living, career growth potential, immigration accessibility, and quality of life.",
    },
    keyTakeaways: [
      { title: "United States - Best for Maximum Compensation", description: "Highest PM salaries globally with unparalleled career growth opportunities, particularly in SaaS and product-led growth companies." },
      { title: "Australia - Best for Balanced Lifestyle", description: "Strong product management salaries, A$120,000 average, exceptional quality of life and straightforward skilled migration pathways." },
      { title: "Canada - Best for Accessible Immigration", description: "Growing tech ecosystem in Toronto and Vancouver, competitive salaries, and accessible Express Entry immigration system." },
      { title: "Singapore - Best for Regional Impact", description: "Strategic Asian hub with low taxes, growing tech scene, and excellent quality of life. Ideal for PMs targeting Asia-Pacific markets." },
    ],
    countryCards: {
      title: "Country Recommendations",
      countries: [
        {
          flag: "\u{1F1FA}\u{1F1F8}", name: "United States", slug: "us",
          summary: "Best for maximizing PM compensation and career growth at major technology companies. Largest product management job market globally.",
          metrics: [
            { label: "Avg Salary", value: "$110,000" },
            { label: "Best For", value: "Max earnings" },
          ],
        },
        {
          flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", slug: "au",
          summary: "Excellent balance of high PM salaries (A$120,000), quality of life, and accessible skilled migration pathways.",
          metrics: [
            { label: "Avg Salary", value: "A$120,000" },
            { label: "Best For", value: "Lifestyle" },
          ],
        },
        {
          flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", slug: "ca",
          summary: "Growing PM roles in tech hubs. Competitive salaries, universal healthcare, and Express Entry immigration.",
          metrics: [
            { label: "Avg Salary", value: "C$85,000" },
            { label: "Best For", value: "Relocation" },
          ],
        },
        {
          flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", slug: "sg",
          summary: "Lowest tax burden. Strategic Asia-Pacific hub with growing technology and fintech sectors.",
          metrics: [
            { label: "Avg Salary", value: "S$75,000" },
            { label: "Best For", value: "Tax efficiency" },
          ],
        },
        {
          flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", slug: "uk",
          summary: "Strong PM market centered in London. Universal healthcare and strong employment protections.",
          metrics: [
            { label: "Avg Salary", value: "\u00a355,000" },
            { label: "Best For", value: "Fintech PM" },
          ],
        },
        {
          flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", slug: "nz",
          summary: "Growing technology sector with exceptional work-life balance. Auckland and Wellington are primary hubs for product roles.",
          metrics: [
            { label: "Avg Salary", value: "NZ$95,000" },
            { label: "Best For", value: "Balance" },
          ],
        },
      ],
    },
    faqs: [
      { question: "Which country is overall best for product managers?", answer: "The best country depends on priorities. The US maximizes compensation, Australia offers the best work-life balance, Canada provides the easiest immigration pathway, and Singapore has the lowest taxes." },
      { question: "Which country has the strongest PM job market?", answer: "The United States has the largest product management job market, particularly in technology hubs like San Francisco, Seattle, and New York. Australia and Canada also have growing PM opportunities." },
    ],
    relatedPages: [
      { label: "Product Manager Hub", href: "/product-manager" },
      { label: "Highest Paying Countries", href: "/highest-paying-countries-for-product-managers" },
      { label: "Salary by Country", href: "/product-manager-salary-by-country" },
      { label: "Tax-Adjusted Salary", href: "/product-manager-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/product-manager-ppp-adjusted-salary" },
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