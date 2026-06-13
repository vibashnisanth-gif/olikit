import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"
import { getProfession } from "@/lib/content/professions-data"
import { COUNTRY_FLAGS, COUNTRY_NAMES } from "@/lib/content/country-registry"

const pagePath = "/product-manager"
const seoTitle = "Product Manager Salary & Career Intelligence (2026)"
const seoDesc = "Research product manager salaries across 7 major economies. Compare compensation by country, analyze career paths, and make informed career decisions."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

const pmProfession = getProfession("product-manager")!

function formatSalary(value: number, slug: string): string {
  const sym: Record<string, string> = { us: "$", uk: "\u00a3", ca: "C$", au: "A$", nz: "NZ$", sg: "S$", in: "\u20b9" }
  const s = sym[slug] || "$"
  if (slug === "in") return `${s}${(value / 100000).toFixed(1)}L`
  return `${s}${value.toLocaleString()}`
}

export default function ProductManagerHubPage() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Product Manager", url: `${SITE_URL}${pagePath}` },
  ])

  const countrySlugs = ["us", "uk", "ca", "au", "nz", "sg", "in"]
  const countryEntries = countrySlugs.map((slug) => {
    const salary = pmProfession.salaries[slug]
    return {
      flag: COUNTRY_FLAGS[slug] || "",
      name: COUNTRY_NAMES[slug] || slug,
      slug,
      summary: `Average product manager salary in ${COUNTRY_NAMES[slug] || slug} is ${formatSalary(salary.average, slug)} per year.`,
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
      title: "Product Manager Salary & Career Intelligence",
      description: "Research product manager salaries, compare compensation across countries, evaluate career progression, and understand how taxes and cost of living affect take-home earnings.",
      cta: { label: "View Salary by Country", href: "/product-manager-salary-by-country" },
      secondaryCta: { label: "PM Salary Overview", href: "/product-manager-salary" },
    },
    salaryCards: [
      { label: "US Average Salary", value: "$110,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$70,000 (US)" },
    ],
    keyTakeaways: [
      { title: "US Pays Product Managers Highest", description: "The United States offers the highest average product manager salaries at $110,000, driven by its large technology sector." },
      { title: "Australia Competitive Too", description: "Australia ranks high with A$120,000 average salary for product managers, reflecting strong demand." },
      { title: "Experience Commands Premium", description: "Senior product managers with 8+ years of experience can earn 2x entry-level salaries across all markets." },
      { title: "Industry Matters Significantly", description: "Tech and finance sectors offer the highest PM compensation, particularly in product-led growth companies." },
    ],
    countryCards: {
      title: "Salary by Country",
      countries: countryEntries,
    },
    faqs: [
      { question: "Which country pays product managers the most in 2026?", answer: "The United States offers the highest average product manager salaries at approximately $110,000 per year. Australia follows at A$120,000, with Canada at C$85,000." },
      { question: "What is the average product manager salary in the US?", answer: "The average product manager salary in the United States is approximately $110,000 per year. Entry-level positions start around $70,000, while experienced PMs can earn over $165,000." },
      { question: "How does industry affect product manager salaries?", answer: "Technology companies typically offer the highest PM salaries, followed by finance and healthcare. Product-led growth companies and SaaS businesses often provide premium compensation." },
    ],
    relatedPages: [
      { label: "Product Manager Salary", href: "/product-manager-salary" },
      { label: "Salary by Country", href: "/product-manager-salary-by-country" },
      { label: "Product Manager Salary US", href: "/product-manager-salary-us" },
      { label: "Product Manager Salary UK", href: "/product-manager-salary-uk" },
      { label: "Product Manager Salary Canada", href: "/product-manager-salary-canada" },
      { label: "Product Manager Salary Australia", href: "/product-manager-salary-australia" },
      { label: "Product Manager Salary Singapore", href: "/product-manager-salary-singapore" },
      { label: "Product Manager Salary New Zealand", href: "/product-manager-salary-new-zealand" },
      { label: "Product Manager Salary India", href: "/product-manager-salary-india" },
      { label: "Tax-Adjusted Salary", href: "/product-manager-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/product-manager-ppp-adjusted-salary" },
      { label: "Highest Paying Countries", href: "/highest-paying-countries-for-product-managers" },
      { label: "Best Countries for PMs", href: "/best-countries-for-product-managers" },
      { label: "PM vs Software Engineer", href: "/product-manager-vs-software-engineer" },
      { label: "PM vs Data Scientist", href: "/product-manager-vs-data-scientist" },
      { label: "PM US vs UK", href: "/product-manager-us-vs-uk" },
      { label: "PM US vs Canada", href: "/product-manager-us-vs-canada" },
      { label: "PM UK vs Australia", href: "/product-manager-uk-vs-australia" },
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
