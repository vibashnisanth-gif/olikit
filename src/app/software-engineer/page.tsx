import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"
import { getProfession } from "@/lib/content/professions-data"
import { COUNTRY_FLAGS, COUNTRY_NAMES } from "@/lib/content/country-registry"

const pagePath = "/software-engineer"
const seoTitle = "Software Engineer Salary & Career Intelligence (2026)"
const seoDesc = "Research software engineer salaries across 7 major economies. Compare compensation by country, analyze taxes, evaluate purchasing power, and make informed career decisions."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

const seProfession = getProfession("software-engineer")!

function formatSalary(value: number, slug: string): string {
  const sym: Record<string, string> = { us: "$", uk: "\u00a3", ca: "C$", au: "A$", nz: "NZ$", sg: "S$", in: "\u20b9" }
  const s = sym[slug] || "$"
  if (slug === "in") return `${s}${(value / 100000).toFixed(1)}L`
  return `${s}${value.toLocaleString()}`
}

export default function SoftwareEngineerHubPage() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Software Engineer", url: `${SITE_URL}${pagePath}` },
  ])

  const countrySlugs = ["us", "uk", "ca", "au", "nz", "sg", "in"]
  const countryEntries = countrySlugs.map((slug) => {
    const salary = seProfession.salaries[slug]
    return {
      flag: COUNTRY_FLAGS[slug] || "",
      name: COUNTRY_NAMES[slug] || slug,
      slug,
      summary: `Average software engineer salary in ${COUNTRY_NAMES[slug] || slug} is ${formatSalary(salary.average, slug)} per year. ${slug === "us" ? "Highest nominal salaries globally with strong tech ecosystem." : slug === "uk" ? "Strong fintech sector centered in London." : slug === "ca" ? "Growing tech hubs with accessible immigration." : slug === "au" ? "Competitive salaries with high quality of life." : slug === "nz" ? "Growing tech sector with exceptional work-life balance." : slug === "sg" ? "Competitive salaries with extremely low taxes." : "Large tech workforce with strong purchasing power."}`,
      metrics: [
        { label: "Avg Salary", value: formatSalary(salary.average, slug) },
        { label: "Entry Level", value: formatSalary(salary.entryLevel, slug) },
      ],
    }
  })

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Career Intelligence",
      title: "Software Engineer Salary & Career Intelligence",
      description: "Research software engineer salaries, compare compensation across countries, evaluate career progression, and understand how taxes and cost of living affect take-home earnings. Data-driven analysis for informed career decisions.",
      cta: { label: "View Salary by Country", href: "/software-engineer-salary-by-country" },
      secondaryCta: { label: "Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
    },
    salaryCards: [
      { label: "US Average Salary", value: "$120,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$75,000 (US)" },
    ],
    keyTakeaways: [
      { title: "US Leads in Nominal Pay", description: "The United States offers the highest average software engineer salaries at $120,000, driven by its large technology sector and venture capital ecosystem." },
      { title: "Singapore Best for Taxes", description: "Singapore's progressive tax system capped at 22% with no capital gains tax makes it the most tax-efficient market for software engineers." },
      { title: "India Offers Strongest PPP", description: "When adjusted for local costs, India offers exceptional purchasing power, allowing a high standard of living relative to income." },
      { title: "Canada & Australia Balance Factors", description: "Both countries offer competitive salaries, universal healthcare, accessible immigration, and high quality of life, making them strong all-around choices." },
    ],
    proseSections: [
      {
        title: "Global Software Engineering Landscape",
        paragraphs: [
          "Software engineering remains one of the most globally transferable and in-demand professional careers. The 2026 global technology landscape is characterized by continued digital transformation, artificial intelligence adoption, and increasing demand for skilled engineers across all major economies.",
          "Compensation varies dramatically by geography, with the United States leading in nominal salary. However, when factoring in tax burden, cost of living, purchasing power, and quality of life, the optimal market for individual engineers varies based on personal priorities.",
        ],
      },
    ],
    countryCards: {
      title: "Salary by Country",
      countries: countryEntries,
    },
    insights: [
      "The United States offers the highest software engineering salaries globally, with average compensation of $120,000 per year.",
      "Software engineers in Singapore benefit from the lowest effective tax rate at approximately 7% for average earners.",
      "Australia and Canada offer the best balance of competitive salaries, universal healthcare, and accessible immigration pathways.",
      "India's software engineers enjoy exceptional purchasing power relative to local costs despite lower nominal salaries.",
    ],
    faqs: [
      { question: "Which country pays software engineers the most in 2026?", answer: "The United States offers the highest average software engineer salaries at approximately $120,000 per year. Australia and Canada follow with competitive compensation packages at A$110,000 and C$85,000 respectively." },
      { question: "Which country has the lowest taxes for software engineers?", answer: "Singapore has the lowest personal income tax burden among analyzed countries, with a top marginal rate of 22% and an effective rate of approximately 7% for average earners." },
      { question: "Which country offers the best value considering cost of living?", answer: "India offers the strongest purchasing power relative to local costs. Despite lower nominal salaries, the significantly lower cost of living allows software engineers to achieve a high standard of living." },
      { question: "What additional compensation should I consider beyond base salary?", answer: "Equity compensation, bonuses, benefits, and retirement contributions can significantly affect total compensation. US technology companies commonly offer stock options or RSUs that can add 20-50% to total compensation." },
    ],
    methodology: [
      "Salary data is compiled from government labor statistics, technology industry surveys, and compensation databases for the 2025-2026 period.",
      "Tax calculations incorporate national/federal income taxes, state/provincial taxes where applicable, mandatory social contributions, and healthcare costs.",
      "Cost of living and purchasing power data uses Numbeo, OECD, and Mercer indices, adjusted for local price levels.",
    ],
    sources: [
      { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
      { label: "UK Office for National Statistics", url: "https://www.ons.gov.uk" },
      { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au" },
      { label: "Statistics Canada", url: "https://www.statcan.gc.ca" },
    ],
    relatedPages: [
      { label: "Software Engineer Salary", href: "/software-engineer-salary" },
      { label: "Salary by Country", href: "/software-engineer-salary-by-country" },
      { label: "Software Engineer Salary US", href: "/software-engineer-salary-us" },
      { label: "Software Engineer Salary UK", href: "/software-engineer-salary-uk" },
      { label: "Software Engineer Salary Canada", href: "/software-engineer-salary-canada" },
      { label: "Software Engineer Salary Australia", href: "/software-engineer-salary-australia" },
      { label: "Software Engineer Salary Singapore", href: "/software-engineer-salary-singapore" },
      { label: "Software Engineer Salary New Zealand", href: "/software-engineer-salary-new-zealand" },
      { label: "Software Engineer Salary India", href: "/software-engineer-salary-india" },
      { label: "Highest Paying Countries", href: "/software-engineer-highest-paying-countries" },
      { label: "Best Countries Overview", href: "/software-engineer-best-countries" },
      { label: "PPP-Adjusted Salary", href: "/software-engineer-ppp-adjusted-salary" },
      { label: "Tax-Adjusted Salary", href: "/software-engineer-tax-adjusted-salary" },
      { label: "Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
      { label: "Software Engineer US vs UK", href: "/software-engineer-us-vs-uk" },
      { label: "Software Engineer US vs Canada", href: "/software-engineer-us-vs-canada" },
      { label: "Software Engineer US vs Australia", href: "/software-engineer-us-vs-australia" },
      { label: "Software Engineer vs Product Manager", href: "/software-engineer-vs-product-manager" },
      { label: "Product Manager vs Software Engineer", href: "/product-manager-vs-software-engineer" },
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
