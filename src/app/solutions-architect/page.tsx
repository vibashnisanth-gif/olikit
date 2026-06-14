import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"
import { getProfession } from "@/lib/content/professions-data"
import { COUNTRY_FLAGS, COUNTRY_NAMES } from "@/lib/content/country-registry"

const pagePath = "/solutions-architect"
const seoTitle = "Solutions Architect Salary & Career Intelligence (2026)"
const seoDesc = "Research solutions architect salaries, compare compensation across countries, evaluate career progression, and understand how architecture expertise affects earnings."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

const prof = getProfession("solutions-architect")!

function formatSalary(value: number, slug: string): string {
  const sym: Record<string, string> = { us: "$", uk: "£", ca: "C$", au: "A$", nz: "NZ$", sg: "S$", in: "₹" }
  const s = sym[slug] || "$"
  if (slug === "in") return `${s}${(value / 100000).toFixed(1)}L`
  return `${s}${value.toLocaleString("en-US")}`
}

export default function solutions_architectHubPage() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Solutions Architect", url: `${SITE_URL}${pagePath}` },
  ])

  const countrySlugs = ["us", "uk", "ca", "au", "nz", "sg", "in"]
  const countryEntries = countrySlugs.map((slug) => {
    const salary = prof.salaries[slug]
    return {
      flag: COUNTRY_FLAGS[slug] || "",
      name: COUNTRY_NAMES[slug] || slug,
      slug,
      summary: `Average solutions architect salary in ${COUNTRY_NAMES[slug] || slug} is ${formatSalary(salary.average, slug)} per year.`,
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
      title: "Solutions Architect Salary & Career Intelligence",
      description: "Research solutions architect salaries, compare compensation across countries, evaluate career progression, and understand how architecture expertise affects earnings.",
      cta: { label: "View Salary by Country", href: "/solutions-architect-salary-by-country" },
      secondaryCta: { label: "Salary Index 2026", href: "/research/solutions-architect-salary-index-2026" },
    },
    salaryCards: [
      { label: "US Average Salary", value: "$140,000" },
      { label: "Countries Analyzed", value: "7" },
      { label: "Highest Entry Level", value: "$90,000 (US)" },
    ],
    keyTakeaways: [
      { title: "Senior Technical Role", description: "Solutions architects are senior technical roles commanding premium salaries across all markets." },
      { title: "Cloud Platform Certifications", description: "AWS Solutions Architect and Azure Architect certifications are highly valued." },
      { title: "Pre-Sales Premium", description: "Solutions architects in pre-sales roles often earn additional commission and bonuses." },
    ],
    countryCards: {
      title: "Salary by Country",
      countries: countryEntries,
    },
    faqs: [
      { question: "Which country pays solutions architects the most in 2026?", answer: "The United States offers the highest average solutions architect salaries at approximately $140,000 per year. Australia and Canada follow with competitive compensation packages." },
      { question: "Which country has the lowest taxes for solutions architects?", answer: "Singapore has the lowest personal income tax burden among analyzed countries, with a top marginal rate of 22% and an effective rate of approximately 7% for average earners." },
      { question: "Which country offers the best value considering cost of living?", answer: "India offers the strongest purchasing power relative to local costs. Despite lower nominal salaries, the significantly lower cost of living allows solutions architects to achieve a high standard of living." },
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
      { label: "Solutions Architect Salary", href: "/solutions-architect-salary" },
      { label: "Salary by Country", href: "/solutions-architect-salary-by-country" },
      { label: "Highest Paying Countries", href: "/solutions-architect-highest-paying-countries" },
      { label: "Best Countries Overview", href: "/solutions-architect-best-countries" },
      { label: "PPP-Adjusted Salary", href: "/solutions-architect-ppp-adjusted-salary" },
      { label: "Tax-Adjusted Salary", href: "/solutions-architect-tax-adjusted-salary" },
      { label: "Salary Index 2026", href: "/research/solutions-architect-salary-index-2026" },    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
