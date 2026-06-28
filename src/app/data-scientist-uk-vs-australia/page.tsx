import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/data-scientist-uk-vs-australia"
const seoTitle = "Data Scientist UK vs Australia: Salary & Career Comparison (2026)"
const seoDesc = "Compare data scientist salaries, taxes, and career opportunities between the United Kingdom and Australia."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist UK vs Australia", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Data Scientist Comparison",
      title: "Data Scientist: United Kingdom vs Australia",
      description: "A comprehensive comparison of data scientist careers in the United Kingdom and Australia.",
    },
    keyTakeaways: [
      { title: "Australia Offers Higher Pay", description: "Australian data scientist salaries (A$115,000) significantly exceed UK salaries (\u00a358,000)." },
      { title: "Both Have Universal Healthcare", description: "Both the NHS (UK) and Medicare (Australia) provide comprehensive public healthcare." },
      { title: "Climate and Lifestyle Difference", description: "Australia offers warmer climate and outdoor lifestyle, while the UK provides proximity to European travel." },
    ],
    comparisonTable: {
      title: "Data Scientist Comparison: UK vs Australia",
      rows: [
        { category: "Average Salary", valueA: "\u00a358,000 (~$74,000 USD)", valueB: "A$115,000 (~$77,000 USD)" },
        { category: "Entry Level", valueA: "\u00a332,000 (~$41,000 USD)", valueB: "A$70,000 (~$47,000 USD)" },
        { category: "Experienced", valueA: "\u00a390,000 (~$114,000 USD)", valueB: "A$165,000 (~$111,000 USD)" },
        { category: "Effective Tax Rate", valueA: "~20%", valueB: "~25%" },
        { category: "Healthcare", valueA: "NHS (Universal)", valueB: "Medicare (Universal)" },
        { category: "Tech Ecosystem", valueA: "Fintech focused", valueB: "Growing tech sector" },
      ],
    },
    faqs: [
      { question: "How do data scientist salaries compare between the UK and Australia?", answer: "Australia offers higher average salaries (A$115,000 vs \u00a358,000 in the UK), though the gap narrows when considering purchasing power. Both countries offer universal healthcare and strong employment protections." },
      { question: "Which country has better career prospects for data scientists?", answer: "Australia has growing data science demand across technology, mining, and finance sectors. The UK, particularly London, has a mature fintech data science market with strong career growth potential." },
    ],
    relatedPages: [
      { label: "Data Scientist Hub", href: "/data-scientist" },
      { label: "Data Scientist Salary UK", href: "/data-scientist-salary-uk" },
      { label: "Data Scientist Salary Australia", href: "/data-scientist-salary-australia" },
      { label: "Data Scientist US vs UK", href: "/data-scientist-us-vs-uk" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}