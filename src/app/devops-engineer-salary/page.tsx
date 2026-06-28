import type { Metadata } from "next"
import { ProfessionPageRenderer } from "@/components/profession-page"
import { buildProfessionMetadata } from "@/lib/seo/profession-metadata"
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { SITE_URL } from "@/lib/seo/constants"
import type { ProfessionPageContent } from "@/types/profession-page"

const pagePath = "/devops-engineer-salary"
const seoTitle = "DevOps Engineer Salary Research & Insights (2026)"
const seoDesc = "In-depth research on DevOps engineer salaries across 7 major economies. Compare average pay by country, analyze tax implications, and evaluate total compensation."

export const metadata: Metadata = buildProfessionMetadata(seoTitle, seoDesc, pagePath)

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "DevOps Engineer Salary Research", url: `${SITE_URL}${pagePath}` },
  ])

  const content: ProfessionPageContent = {
    seo: { title: seoTitle, description: seoDesc, canonical: `${SITE_URL}${pagePath}` },
    hero: {
      badge: "Salary Research",
      title: "DevOps Engineer Salary Research",
      description: "Expert intelligence on DevOps engineer compensation across 7 major economies. Compare DevOps engineer salaries by country and find where your infrastructure skills command the best rate.",
      cta: { label: "Salary by Country", href: "/devops-engineer-salary-by-country" },
    },
    salaryCards: [
      { label: "US Average", value: "$125,000" },
      { label: "US Entry Level", value: "$75,000" },
      { label: "US Experienced", value: "$180,000" },
    ],
    keyTakeaways: [
      { title: "Premium Over Traditional SE", description: "DevOps engineers often earn 5-10% more than traditional software engineers due to specialized infrastructure skills." },
      { title: "Multi-Cloud Expertise Premium", description: "Experience with multiple cloud platforms (AWS, Azure, GCP) commands higher salaries." },
    ],
    salaryTable: {
      title: "DevOps Engineer Salary by Country",
      headers: ["Country", "Average", "Entry Level", "Experienced"],
      rows: [
        { country: "🇺🇸 United States", average: "$125,000", entryLevel: "$75,000", experienced: "$180,000" },
        { country: "🇬🇧 United Kingdom", average: "£55,000", entryLevel: "£30,000", experienced: "£85,000" },
        { country: "🇨🇦 Canada", average: "C$88,000", entryLevel: "C$52,000", experienced: "C$135,000" },
        { country: "🇦🇺 Australia", average: "A$115,000", entryLevel: "A$68,000", experienced: "A$165,000" },
        { country: "🇳🇿 New Zealand", average: "NZ$90,000", entryLevel: "NZ$55,000", experienced: "NZ$135,000" },
        { country: "🇸🇬 Singapore", average: "S$72,000", entryLevel: "S$42,000", experienced: "S$110,000" },
        { country: "🇮🇳 India", average: "₹11.0L", entryLevel: "₹4.0L", experienced: "₹22.0L" },
      ],
    },
    faqs: [
      { question: "What is the average devops engineer salary globally?", answer: "Average devops engineer salaries range from $125,000 in the United States to A$115,000 in Australia and £55,000 in the UK." },
      { question: "Which country has the highest devops engineer salary?", answer: "The United States offers the highest average salary at $125,000. Top-tier companies may offer total compensation significantly exceeding this baseline." },
    ],
    relatedPages: [
      { label: "DevOps Engineer Hub", href: "/devops-engineer" },
      { label: "Highest Paying Countries", href: "/devops-engineer-highest-paying-countries" },
      { label: "Best Countries for DevOps Engineers", href: "/devops-engineer-best-countries" },
      { label: "Tax-Adjusted Salary", href: "/devops-engineer-tax-adjusted-salary" },
      { label: "PPP-Adjusted Salary", href: "/devops-engineer-ppp-adjusted-salary" },
      { label: "DevOps Engineer Salary Index 2026", href: "/research/devops-engineer-salary-index-2026" },
    ],
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProfessionPageRenderer content={content} />
      </>
  )
}