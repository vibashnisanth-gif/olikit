import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"
import { getProfession } from "@/lib/content/professions-data"
import { COUNTRY_FLAGS, COUNTRY_NAMES } from "@/lib/content/country-registry"

const pagePath = "/machine-learning-engineer"
const seoTitle = "Machine Learning Engineer Salary & Career Intelligence (2026)"
const seoDesc = "Research machine learning engineer salaries, compare compensation across countries, evaluate career progression, and understand how taxes and cost of living affect take-home earnings."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

const prof = getProfession("machine-learning-engineer")!

function formatSalary(value: number, slug: string): string {
  const sym: Record<string, string> = { us: "$", uk: "£", ca: "C$", au: "A$", nz: "NZ$", sg: "S$", in: "₹" }
  const s = sym[slug] || "$"
  if (slug === "in") return `${s}${(value / 100000).toFixed(1)}L`
  return `${s}${value.toLocaleString("en-US")}`
}

export default function machine_learning_engineerHubPage() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Machine Learning Engineer", url: `${SITE_URL}${pagePath}` },
  ])

  const countrySlugs = ["us", "uk", "ca", "au", "nz", "sg", "in"]
  const countryEntries = countrySlugs.map((slug) => {
    const salary = prof.salaries[slug]
    return {
      flag: COUNTRY_FLAGS[slug] || "",
      name: COUNTRY_NAMES[slug] || slug,
      slug,
      summary: `Average machine learning engineer salary in ${COUNTRY_NAMES[slug] || slug} is ${formatSalary(salary.average, slug)} per year.`,
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
      title: "Machine Learning Engineer Salary & Career Intelligence",
      description: "Research machine learning engineer salaries, compare compensation across countries, evaluate career progression, and understand how taxes and cost of living affect take-home earnings.",
      cta: { label: "View Salary by Country", href: "/machine-learning-engineer-salary-by-country" },
      secondaryCta: { label: "Salary Index 2026", href: "/research/machine-learning-engineer-salary-index-2026" },
    },
    salaryCards: [
      { label: "US Average Salary", value: "$130,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$80,000 (US)" },
    ],
    keyTakeaways: [
      { title: "US Leads in ML Compensation", description: "The United States offers the highest ML engineer salaries at $130,000, with top-tier companies paying $200K+ total comp." },
      { title: "Deep Learning Premium", description: "ML engineers with deep learning expertise command higher salaries than general ML practitioners." },
      { title: "Canada Emerging as AI Hub", description: "Toronto and Montreal have become major AI research hubs with competitive compensation." },
    ],
    countryCards: {
      title: "Salary by Country",
      countries: countryEntries,
    },
    faqs: [
      { question: "Which country pays machine learning engineers the most in 2026?", answer: "The United States offers the highest average machine learning engineer salaries at approximately $130,000 per year. Australia and Canada follow with competitive compensation packages." },
      { question: "Which country has the lowest taxes for machine learning engineers?", answer: "Singapore has the lowest personal income tax burden among analyzed countries, with a top marginal rate of 22% and an effective rate of approximately 7% for average earners." },
      { question: "Which country offers the best value considering cost of living?", answer: "India offers the strongest purchasing power relative to local costs. Despite lower nominal salaries, the significantly lower cost of living allows machine learning engineers to achieve a high standard of living." },
      { question: "What additional compensation should I consider beyond base salary?", answer: "Equity compensation, bonuses, benefits, and retirement contributions can significantly affect total compensation. US technology companies commonly offer stock options or RSUs." },
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
      { label: "Machine Learning Engineer Salary", href: "/machine-learning-engineer-salary" },
      { label: "Salary by Country", href: "/machine-learning-engineer-salary-by-country" },
      { label: "Highest Paying Countries", href: "/machine-learning-engineer-highest-paying-countries" },
      { label: "Best Countries Overview", href: "/machine-learning-engineer-best-countries" },
      { label: "PPP-Adjusted Salary", href: "/machine-learning-engineer-ppp-adjusted-salary" },
      { label: "Tax-Adjusted Salary", href: "/machine-learning-engineer-tax-adjusted-salary" },
      { label: "Salary Index 2026", href: "/research/machine-learning-engineer-salary-index-2026" },    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}