import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/software-engineer-salary"
const seoTitle = "Software Engineer Salary Research & Insights (2026)"
const seoDesc = "Comprehensive research on software engineer salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Software Engineer Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "Software Engineer Salary Research",
      description: "Comprehensive analysis of software engineer compensation across 7 major economies. Research salary benchmarks, tax-adjusted earnings, purchasing power, and career dynamics to make informed career decisions.",
      cta: { label: "Salary by Country", href: "/software-engineer-salary-by-country" },
      secondaryCta: { label: "US Salary", href: "/software-engineer-salary-us" },
    },
    salaryCards: [
      { label: "Global Average", value: "$120,000 (US)" },
      { label: "Avg Entry Level", value: "$75,000 (US)" },
      { label: "Highest Experienced", value: "$180,000 (US)" },
    ],
    keyTakeaways: [
      { title: "US Dominates Nominal Salaries", description: "The United States offers the highest nominal software engineer salaries globally at $120,000 average." },
      { title: "Tax Burden Varies Widely", description: "Effective tax rates for software engineers range from 7% in Singapore to over 30% in top US state brackets." },
      { title: "PPP Adjustments Change Rankings", description: "When adjusted for purchasing power, India rises significantly while high-cost markets like the US and UK fall." },
      { title: "Total Compensation Includes Equity", description: "US technology companies commonly offer equity compensation that can add 20-50% to total compensation." },
    ],
    proseSections: [
      {
        title: "Global Salary Overview",
        paragraphs: [
          "Software engineer salaries vary dramatically across global markets. The United States leads with average compensation of $120,000 per year, followed by Australia (A$110,000) and Canada (C$85,000). The United Kingdom, Singapore, and New Zealand form a middle tier, while India offers the strongest purchasing power relative to local costs.",
          "When evaluating salary offers, professionals must consider nominal compensation alongside tax burden, cost of living, benefits, equity compensation, and career growth potential. A complete financial analysis requires adjusting for local price levels and mandatory deductions.",
        ],
      },
    ],
    salaryTable: {
      title: "Software Engineer Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$120,000", entryLevel: "$75,000", experienced: "$180,000" },
        { country: "🇬🇧 United Kingdom", average: "£55,000", entryLevel: "£30,000", experienced: "£85,000" },
        { country: "🇨🇦 Canada", average: "C$85,000", entryLevel: "C$50,000", experienced: "C$130,000" },
        { country: "🇦🇺 Australia", average: "A$110,000", entryLevel: "A$65,000", experienced: "A$160,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$95,000", entryLevel: "NZ$55,000", experienced: "NZ$140,000" },
        { country: "🇸🇬 Singapore", average: "S$72,000", entryLevel: "S$42,000", experienced: "S$110,000" },
        { country: "🇮🇳 India", average: "₹12,00,000", entryLevel: "₹4,00,000", experienced: "₹25,00,000" },
      ],
    },
    faqs: [
      { question: "What is the average software engineer salary globally?", answer: "The average software engineer salary varies significantly by country, ranging from $120,000 in the United States to A$110,000 in Australia, C$85,000 in Canada, £55,000 in the UK, and ₹12,00,000 in India." },
      { question: "Which country has the highest software engineer salary?", answer: "The United States offers the highest average software engineer salary at $120,000 per year. Top-tier companies in Silicon Valley, Seattle, and New York may offer total compensation exceeding $250,000 for experienced engineers." },
      { question: "How does tax affect software engineer take-home pay?", answer: "Tax burden varies significantly by country. Singapore has the most favorable tax environment with an effective rate of approximately 7%. US engineers face 15-30% effective rates depending on state, while UK and Canadian engineers typically pay 20-30%." },
      { question: "How does equity compensation affect total compensation?", answer: "Equity compensation in the form of stock options or RSUs is most common in the United States and can add 20-50% to total compensation at major technology companies, significantly affecting overall earnings." },
    ],
    relatedPages: [
      { label: "Software Engineer Hub", href: "/software-engineer" },
      { label: "Highest Paying Countries", href: "/software-engineer-highest-paying-countries" },
      { label: "Best Countries for Software Engineers", href: "/software-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/software-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/software-engineer-ppp-adjusted-salary" },
      { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
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
