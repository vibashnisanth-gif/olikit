import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"
import { getProfession } from "@/lib/content/professions-data"
import { COUNTRY_FLAGS, COUNTRY_NAMES } from "@/lib/content/country-registry"

const pagePath = "/data-scientist"
const seoTitle = "Data Scientist Salary & Career Intelligence (2026)"
const seoDesc = "Research data scientist salaries across 7 major economies. Compare compensation by country, analyze taxes, evaluate purchasing power, and make informed career decisions."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

const dsProfession = getProfession("data-scientist")!

function formatSalary(value: number, slug: string): string {
  const sym: Record<string, string> = { us: "$", uk: "\u00a3", ca: "C$", au: "A$", nz: "NZ$", sg: "S$", in: "\u20b9" }
  const s = sym[slug] || "$"
  if (slug === "in") return `${s}${(value / 100000).toFixed(1)}L`
  return `${s}${value.toLocaleString()}`
}

export default function DataScientistHubPage() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist", url: `${SITE_URL}${pagePath}` },
  ])

  const countrySlugs = ["us", "uk", "ca", "au", "nz", "sg", "in"]
  const countryEntries = countrySlugs.map((slug) => {
    const salary = dsProfession.salaries[slug]
    return {
      flag: COUNTRY_FLAGS[slug] || "",
      name: COUNTRY_NAMES[slug] || slug,
      slug,
      summary: `Average data scientist salary in ${COUNTRY_NAMES[slug] || slug} is ${formatSalary(salary.average, slug)} per year.`,
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
      title: "Data Scientist Salary & Career Intelligence",
      description: "Research data scientist salaries, compare compensation across countries, evaluate career progression, and understand how taxes and cost of living affect take-home earnings.",
      cta: { label: "View Salary by Country", href: "/data-scientist-salary-by-country" },
      secondaryCta: { label: "Data Scientist Salary", href: "/data-scientist-salary" },
    },
    salaryCards: [
      { label: "US Average Salary", value: "$125,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$80,000 (US)" },
    ],
    keyTakeaways: [
      { title: "US Leads Data Science Pay", description: "The United States offers the highest average data scientist salaries at $125,000, with machine learning specialists earning premium compensation." },
      { title: "Strong Demand Globally", description: "Data science demand continues to grow across all major economies, driven by AI adoption and data-driven decision making." },
      { title: "Advanced Degrees Command Premium", description: "Data scientists with master's or PhD degrees, particularly in machine learning and AI, earn significantly higher salaries." },
      { title: "Industry Matters", description: "Tech, finance, and healthcare sectors offer the highest data science compensation across most countries." },
    ],
    countryCards: {
      title: "Salary by Country",
      countries: countryEntries,
    },
    faqs: [
      { question: "Which country pays data scientists the most in 2026?", answer: "The United States offers the highest average data scientist salaries at approximately $125,000 per year. Australia and Canada follow with competitive compensation packages." },
      { question: "What is the average data scientist salary in the US?", answer: "The average data scientist salary in the United States is approximately $125,000 per year. Entry-level positions start around $80,000, while experienced data scientists can earn over $175,000." },
      { question: "How does education affect data scientist salary?", answer: "Advanced degrees significantly affect data scientist salaries. Professionals with a PhD in machine learning or AI can earn 20-40% more than those with a bachelor's degree, particularly in research-focused roles." },
    ],
    relatedPages: [
      { label: "Data Scientist Salary", href: "/data-scientist-salary" },
      { label: "Data Scientist Salary US", href: "/data-scientist-salary-us" },
      { label: "Data Scientist Salary UK", href: "/data-scientist-salary-uk" },
      { label: "Data Scientist Salary Canada", href: "/data-scientist-salary-canada" },
      { label: "Highest Paying Countries", href: "/data-scientist-highest-paying-countries" },
      { label: "Data Scientist US vs UK", href: "/data-scientist-us-vs-uk" },
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
