import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/software-engineer-best-countries"
const seoTitle = "Best Countries for Software Engineers (2026)"
const seoDesc = "Discover the best countries for software engineers in 2026. Compare salary, tax, cost of living, career growth, and quality of life across major economies."

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
      title: "Best Countries for Software Engineers",
      description: "Discover the best countries for software engineers in 2026. Our comprehensive analysis considers salary, tax burden, cost of living, career growth potential, immigration accessibility, and quality of life.",
    },
    keyTakeaways: [
      { title: "United States - Best for Maximum Compensation", description: "Highest salaries globally with unparalleled career growth opportunities, but challenging immigration and high living costs in tech hubs." },
      { title: "Canada - Best for Balanced Relocation", description: "Competitive salaries, accessible Express Entry immigration, universal healthcare, and growing tech hubs in Toronto, Vancouver, and Montreal." },
      { title: "Australia - Best for Quality of Life", description: "High salaries, strong economy, excellent work-life balance, and straightforward skilled migration pathways." },
      { title: "Singapore - Best for Tax Efficiency", description: "Extremely favorable tax environment (top rate 22%), strategic Asian location, and competitive technology sector." },
    ],
    countryCards: {
      title: "Country Recommendations",
      countries: [
        {
          flag: "\u{1F1FA}\u{1F1F8}", name: "United States", slug: "us",
          summary: "Best for maximizing compensation and career growth at major technology companies. Challenging immigration via H-1B lottery.",
          metrics: [
            { label: "Avg Salary", value: "$120,000" },
            { label: "Best For", value: "Max earnings" },
          ],
        },
        {
          flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", slug: "ca",
          summary: "Excellent balance of competitive salaries, accessible immigration (Express Entry), and universal healthcare.",
          metrics: [
            { label: "Avg Salary", value: "C$85,000" },
            { label: "Best For", value: "Relocation" },
          ],
        },
        {
          flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", slug: "au",
          summary: "High quality of life, competitive tech salaries, and straightforward skilled migration pathways.",
          metrics: [
            { label: "Avg Salary", value: "A$110,000" },
            { label: "Best For", value: "Lifestyle" },
          ],
        },
        {
          flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", slug: "sg",
          summary: "Lowest tax burden among analyzed countries. Strategic Asian tech hub with excellent infrastructure.",
          metrics: [
            { label: "Avg Salary", value: "S$72,000" },
            { label: "Best For", value: "Tax efficiency" },
          ],
        },
        {
          flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", slug: "uk",
          summary: "Strong fintech sector centered in London. Universal healthcare and strong employment protections.",
          metrics: [
            { label: "Avg Salary", value: "\u00a355,000" },
            { label: "Best For", value: "Fintech" },
          ],
        },
        {
          flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", slug: "nz",
          summary: "Exceptional work-life balance and growing technology sector. Auckland and Wellington are primary hubs.",
          metrics: [
            { label: "Avg Salary", value: "NZ$95,000" },
            { label: "Best For", value: "Balance" },
          ],
        },
      ],
    },
    faqs: [
      { question: "Which country is overall best for software engineers?", answer: "The best country depends on priorities. The US maximizes compensation, Canada offers the easiest immigration pathway, Australia provides the best work-life balance, and Singapore has the lowest taxes." },
      { question: "Which country is easiest for software engineers to immigrate to?", answer: "Canada and Australia both offer accessible immigration pathways. Canada's Express Entry system processes applications in 6-12 months, while Australia's skilled migration program offers clear points-based pathways to permanent residency." },
    ],
    relatedPages: [
      { label: "Software Engineer Hub", href: "/software-engineer" },
      { label: "Highest Paying Countries", href: "/software-engineer-highest-paying-countries" },
      { label: "Salary by Country", href: "/software-engineer-salary-by-country" },
      { label: "Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
      { label: "Global Research", href: "/research" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
