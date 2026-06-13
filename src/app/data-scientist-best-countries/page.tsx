import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-best-countries"
const seoTitle = "Best Countries for Data Scientists (2026)"
const seoDesc = "Discover the best countries for data scientists in 2026. Compare salary, tax, career growth, and quality of life across major economies."

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
      title: "Best Countries for Data Scientists",
      description: "Discover the best countries for data scientists in 2026 considering salary, tax burden, career growth, immigration, and quality of life.",
    },
    keyTakeaways: [
      { title: "US - Best for Maximum Compensation", description: "Highest data science salaries globally with unparalleled AI/ML research opportunities." },
      { title: "Canada - Best for AI Research", description: "World-leading AI research with Vector Institute and Mila. Accessible immigration via Express Entry." },
      { title: "Australia - Best for Lifestyle", description: "Competitive salaries, excellent work-life balance, and straightforward skilled migration." },
      { title: "Singapore - Best for Tax Efficiency", description: "Low tax environment with growing data science sector and regional tech hub status." },
    ],
    countryCards: {
      title: "Country Recommendations",
      countries: [
        { flag: "\u{1F1FA}\u{1F1F8}", name: "United States", slug: "us", summary: "Best for maximizing compensation and AI research opportunities.", metrics: [{ label: "Avg Salary", value: "$125,000" }, { label: "Best For", value: "Max earnings" }] },
        { flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", slug: "ca", summary: "World-leading AI research with accessible immigration pathways.", metrics: [{ label: "Avg Salary", value: "C$88,000" }, { label: "Best For", value: "AI research" }] },
        { flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", slug: "au", summary: "Competitive salaries with high quality of life.", metrics: [{ label: "Avg Salary", value: "A$115,000" }, { label: "Best For", value: "Lifestyle" }] },
        { flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", slug: "sg", summary: "Low taxes and growing data science ecosystem.", metrics: [{ label: "Avg Salary", value: "S$78,000" }, { label: "Best For", value: "Tax efficiency" }] },
        { flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", slug: "uk", summary: "Strong fintech and financial data science.", metrics: [{ label: "Avg Salary", value: "\u00a358,000" }, { label: "Best For", value: "Fintech" }] },
      ],
    },
    faqs: [
      { question: "Which country is overall best for data scientists?", answer: "The US maximizes compensation, Canada leads in AI research opportunities, Australia offers the best lifestyle, and Singapore provides the most tax-efficient environment." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Highest Paying Countries", href: "/data-scientist-highest-paying-countries" },
      { label: "Salary by Country", href: "/data-scientist-salary-by-country" },
      { label: "Data Scientist US vs UK", href: "/data-scientist-us-vs-uk" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
