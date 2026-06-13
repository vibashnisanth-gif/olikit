import type { Metadata } from "next"
import { Shell } from "@/components/shell"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-us-vs-canada"
const seoTitle = "Data Scientist US vs Canada: Salary & Career Comparison (2026)"
const seoDesc = "Compare data scientist salaries, taxes, cost of living, and career opportunities between the US and Canada."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist US vs Canada", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Data Scientist Comparison",
      title: "Data Scientist: United States vs Canada",
      description: "A comprehensive comparison of data scientist careers in the United States and Canada. Analyze salary differences, tax implications, and career opportunities.",
    },
    keyTakeaways: [
      { title: "US Offers Higher Nominal Pay", description: "US salaries ($125,000) are significantly higher than Canadian (C$88,000), but Canadian universal healthcare offsets some differences." },
      { title: "Canada Has Easier Immigration", description: "Express Entry system offers a more accessible path to permanent residency compared to the US H-1B lottery." },
      { title: "Both Have Strong AI Ecosystems", description: "Canada is home to world-leading AI research labs including Vector Institute and Mila." },
    ],
    comparisonTable: {
      title: "Data Scientist Comparison: US vs Canada",
      rows: [
        { category: "Average Salary", valueA: "$125,000", valueB: "C$88,000 (~$64,000 USD)" },
        { category: "Entry Level", valueA: "$80,000", valueB: "C$55,000 (~$40,000 USD)" },
        { category: "Experienced", valueA: "$175,000", valueB: "C$135,000 (~$99,000 USD)" },
        { category: "Effective Tax Rate", valueA: "~22%", valueB: "~25%" },
        { category: "Healthcare", valueA: "Employer-based", valueB: "Universal" },
        { category: "PR Pathway", valueA: "EB-2/EB-3 (years)", valueB: "Express Entry (6-12 months)" },
      ],
    },
    faqs: [
      { question: "How do data scientist salaries compare between the US and Canada?", answer: "The average data scientist salary in the US is $125,000 compared to C$88,000 in Canada. The gap is partially offset by Canada's universal healthcare and lower cost of living in many cities." },
      { question: "Which country is easier for data scientists to immigrate to?", answer: "Canada offers significantly easier immigration through the Express Entry system, which processes applications in 6-12 months. The US relies on the H-1B lottery with uncertain outcomes." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Data Scientist Salary US", href: "/data-scientist-salary-us" },
      { label: "Data Scientist Salary Canada", href: "/data-scientist-salary-canada" },
      { label: "Data Scientist US vs UK", href: "/data-scientist-us-vs-uk" },
      { label: "Highest Paying Countries", href: "/data-scientist-highest-paying-countries" },
    ],
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
    </Shell>
  )
}
