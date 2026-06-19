import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/software-engineer-tax-adjusted-salary"
const seoTitle = "Software Engineer Tax-Adjusted Salary (2026)"
const seoDesc = "Compare software engineer salaries adjusted for income tax across 7 major economies. See how tax systems affect real take-home pay."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Tax-Adjusted Salary", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Tax Analysis",
      title: "Software Engineer Tax-Adjusted Salary",
      description: "Compare software engineer salaries adjusted for income tax across 7 major economies. See how different tax systems affect real take-home pay and make informed decisions.",
      cta: { label: "PPP-Adjusted Salary", href: "/software-engineer-ppp-adjusted-salary" },
    },
    salaryCards: [
      { label: "Best After-Tax", value: "US ($93,600)" },
      { label: "Highest Gross", value: "US ($120,000)" },
      { label: "Lowest Tax Rate", value: "Singapore (7%)" },
    ],
    countryRanking: {
      title: "Tax-Adjusted Salary Rankings",
      entries: [
        { rank: 1, flag: "\u{1F1FA}\u{1F1F8}", name: "United States", salary: "$93,600 (22% tax)" },
        { rank: 2, flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", salary: "A$82,500 (25% tax)" },
        { rank: 3, flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", salary: "S$67,000 (7% tax)" },
        { rank: 4, flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", salary: "C$63,750 (25% tax)" },
        { rank: 5, flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand", salary: "NZ$71,250 (25% tax)" },
        { rank: 6, flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", salary: "\u00a344,000 (20% tax)" },
        { rank: 7, flag: "\u{1F1EE}\u{1F1F3}", name: "India", salary: "\u20b99,60,000 (20% tax)" },
      ],
    },
    proseSections: [
      {
        title: "After-Tax Salary Comparison",
        paragraphs: [
          "Income tax burden significantly affects the real value of software engineer salaries. Singapore offers the lowest effective tax rate at approximately 7% for average earners, meaning engineers there retain the highest percentage of their gross income. The United States has a moderate tax burden of approximately 22% effective rate, though this varies significantly by state.",
          "Countries with universal healthcare systems like the UK, Canada, and Australia have higher effective tax rates (20-30%), but these contributions fund comprehensive public healthcare, offsetting the higher tax burden for many professionals.",
        ],
      },
    ],
    faqs: [
      { question: "Which country offers the best after-tax salary for software engineers?", answer: "The United States offers the highest after-tax salary at approximately $93,600 for an average earner, followed by Australia at A$82,500. Singapore offers the best tax efficiency with only 7% effective tax." },
      { question: "How does state income tax affect US software engineer take-home pay?", answer: "State income tax significantly affects take-home pay. Engineers in no-income-tax states like Texas and Florida keep more compared to those in California (top rate 13.3%) or New York (top rate 10.9%)." },
    ],
    relatedPages: [
      { label: "Software Engineer Hub", href: "/software-engineer" },
      { label: "PPP-Adjusted Salary", href: "/software-engineer-ppp-adjusted-salary" },
      { label: "Salary by Country", href: "/software-engineer-salary-by-country" },
      { label: "Highest Paying Countries", href: "/software-engineer-highest-paying-countries" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
