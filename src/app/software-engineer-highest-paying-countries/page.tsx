import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/software-engineer-highest-paying-countries"
const seoTitle = "Highest Paying Countries for Software Engineers (2026)"
const seoDesc = "Ranking of the highest paying countries for software engineers in 2026. Compare average salaries, tax-adjusted income, and purchasing power across major economies."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Highest Paying Countries", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Global Rankings",
      title: "Highest Paying Countries for Software Engineers",
      description: "Ranking of the highest paying countries for software engineers in 2026. Compare average salaries, tax-adjusted income, purchasing power, and total compensation across 7 major economies.",
    },
    salaryCards: [
      { label: "1st - United States", value: "$120,000" },
      { label: "2nd - Australia", value: "A$110,000" },
      { label: "3rd - Canada", value: "C$85,000" },
    ],
    countryRanking: {
      title: "Highest Paying Countries Ranked",
      entries: [
        { rank: 1, flag: "\u{1F1FA}\u{1F1F8}", name: "United States", salary: "$120,000", note: "Highest nominal salaries. Strong tech ecosystem. Equity common." },
        { rank: 2, flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", salary: "A$110,000", note: "Competitive salaries. High quality of life. Strong PPP." },
        { rank: 3, flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", salary: "C$85,000", note: "Growing tech hubs. Accessible immigration." },
        { rank: 4, flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", salary: "NZ$95,000", note: "Excellent work-life balance." },
        { rank: 5, flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", salary: "\u00a355,000", note: "Strong fintech sector. European access." },
        { rank: 6, flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", salary: "S$72,000", note: "Lowest taxes. Regional tech hub." },
        { rank: 7, flag: "\u{1F1EE}\u{1F1F3}", name: "India", salary: "\u20b912,00,000", note: "Strongest PPP. Large tech workforce." },
      ],
    },
    keyTakeaways: [
      { title: "US Leads by Nominal Salary", description: "The United States offers the highest software engineer salaries globally at $120,000 average, with top companies paying $250,000+ total compensation." },
      { title: "Australia Offers Best Balance", description: "Australia ranks second with A$110,000 average salary, combined with universal healthcare, strong employment protections, and high quality of life." },
      { title: "Singapore Most Tax-Efficient", description: "Despite ranking 6th by nominal salary, Singapore's low tax environment (7% effective rate) makes it highly competitive for after-tax income." },
    ],
    proseSections: [
      {
        title: "Global Salary Rankings Analysis",
        paragraphs: [
          "Software engineer compensation varies dramatically across global markets. The United States leads with average salaries of $120,000, followed by Australia at A$110,000 and Canada at C$85,000. New Zealand, the UK, and Singapore form a competitive middle tier.",
          "When evaluating these rankings, consider that nominal salary is just one factor. Tax burden, cost of living, purchasing power, benefits, and career growth opportunities all affect the real value of compensation packages.",
        ],
      },
    ],
    faqs: [
      { question: "Which country pays software engineers the highest salary?", answer: "The United States pays software engineers the highest average salary at $120,000 per year. When including equity compensation, total compensation at major US technology companies can exceed $250,000 for experienced engineers." },
      { question: "Which country has the highest software engineer salaries after tax?", answer: "The United States offers the highest after-tax salary at approximately $93,600 for an average earner, followed by Australia at A$82,500. Singapore offers the lowest effective tax rate but lower nominal salaries." },
    ],
    relatedPages: [
      { label: "Software Engineer Hub", href: "/software-engineer" },
      { label: "Best Countries for Software Engineers", href: "/software-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/software-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/software-engineer-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/software-engineer-salary-by-country" },
      { label: "Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}