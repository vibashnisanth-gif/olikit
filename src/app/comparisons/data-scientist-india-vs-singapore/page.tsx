import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { HeroSection } from "@/components/hero-section"
import { CountryComparisonSection } from "@/components/country-comparison-section"
import { ExecutiveSummarySection } from "@/components/executive-summary-section"
import { MethodologySection } from "@/components/methodology-section"
import { SalaryComparisonSection } from "@/components/salary-comparison-section"
import { TaxComparisonSection } from "@/components/tax-comparison-section"
import { CostOfLivingComparisonSection } from "@/components/cost-of-living-comparison-section"
import { PurchasingPowerComparisonSection } from "@/components/purchasing-power-comparison-section"
import { CareerOpportunityComparisonSection } from "@/components/career-opportunity-comparison-section"
import { ImmigrationComparisonSection } from "@/components/immigration-comparison-section"
import { RecommendationSection } from "@/components/recommendation-section"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

const COUNTRY_A = { flag: "\u{1F1EE}\u{1F1F3}", name: "India", slug: "in" }
const COUNTRY_B = { flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", slug: "sg" }

const pagePath = "/comparisons/data-scientist-india-vs-singapore"

export const metadata: Metadata = {
  title: "Data Scientist India vs Singapore: Salary & Career Comparison (2026)",
  description: "Compare data scientist salaries, taxes, cost of living, and career opportunities between India and Singapore. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Data Scientist India vs Singapore: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of data scientist careers in India vs Singapore. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function IndiavsSingaporePage() {
  const articleSchema = buildArticleJsonLd(
    "Data Scientist India vs Singapore: Salary & Career Comparison (2026)",
    "Compare data scientist salaries, taxes, cost of living, and career opportunities between India and Singapore.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist India vs Singapore", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "How do data scientist salaries compare between India and Singapore?", answer: "The average data scientist salary in India is approximately ₹12,00,000, while in Singapore it is around S$72,000 (approximately ₹45,00,000). Singapore offers significantly higher nominal salaries, though the cost of living is also substantially higher." },
    { question: "Which country offers better career growth for data scientists?", answer: "Singapore has a mature data science market with strong demand in finance, tech, and consulting. India offers a massive and rapidly growing market with opportunities across IT services, e-commerce, and fintech. Career growth in India can be accelerated by the sheer scale of the economy." },
    { question: "How does the cost of living affect data scientist earnings?", answer: "While Singapore offers higher salaries, its cost of living is among the highest in Asia, particularly for housing. India offers lower absolute salaries but significantly lower costs, meaning purchasing power can be favorable in Indian cities for senior data scientists." },
    { question: "Which country is better for data scientists moving from abroad?", answer: "Singapore offers a clean, safe environment with excellent infrastructure, English as a primary language, and straightforward employment passes for skilled professionals. India offers a dynamic, fast-growing market with immense opportunity but requires adaptation to local infrastructure and conditions." },
  ]

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <HeroSection
          badge="Data Scientist Comparison"
          title="Data Scientist: India vs Singapore"
          description="A comprehensive comparison of data scientist careers in India and Singapore. Analyze salary differences, tax implications, cost of living variations, purchasing power, and career opportunities to make an informed decision."
        />

        <CountryComparisonSection
          countries={[
            { flag: COUNTRY_A.flag, name: COUNTRY_A.name, slug: COUNTRY_A.slug },
            { flag: COUNTRY_B.flag, name: COUNTRY_B.name, slug: COUNTRY_B.slug },
          ]}
          overview="This comparison examines the key differences for data scientists between India and Singapore. Singapore offers significantly higher nominal salaries, a mature financial services sector, and a high standard of living. India provides a massive and rapidly growing data science market with lower costs, immense scale, and opportunities across IT services, e-commerce, and fintech."
        />

        <ExecutiveSummarySection
          summary="Data scientist salaries in Singapore (average S$72,000, approximately ₹45,00,000) are roughly 3.75 times higher than in India (average ₹12,00,000). However, Singapore's cost of living is substantially higher, particularly for housing. When adjusted for purchasing power, the gap narrows significantly. Singapore offers a mature data science market with a strong finance sector, while India provides a rapidly scaling market with vast opportunities in the world's second-largest internet market."
          metrics={[
            { label: "India Average Salary", value: "₹12,00,000" },
            { label: "Singapore Average Salary", value: "S$72,000" },
            { label: "Salary Advantage", value: "Singapore +275%" },
          ]}
        />

        <MethodologySection
          methodology={[
            "Salary data is sourced from government labor statistics, technology industry surveys, and compensation databases.",
            "Tax calculations incorporate national income taxes.",
            "Cost of living comparisons use Numbeo and OECD data comparing major cities.",
            "Purchasing power is calculated using purchasing power parity (PPP) principles.",
          ]}
          dataSources={[
            { label: "Ministry of Statistics India", url: "https://www.mospi.gov.in" },
            { label: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
          ]}
        />

        <SalaryComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Average Salary", countryA: "₹12,00,000", countryB: "S$72,000" },
            { label: "Entry Level (0-2 yrs)", countryA: "₹5,00,000", countryB: "S$36,000" },
            { label: "Mid Level (3-7 yrs)", countryA: "₹12,00,000", countryB: "S$72,000" },
            { label: "Senior (8-15 yrs)", countryA: "₹25,00,000", countryB: "S$120,000" },
            { label: "Top-tier (15+ yrs)", countryA: "₹40,00,000+", countryB: "S$180,000+" },
          ]}
          notes="Salaries shown in local currency. SGD to INR exchange rate approximately 62."
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Income Tax Rate (Avg Earner)", countryA: "~15% effective", countryB: "~7% effective" },
            { label: "Social Contributions", countryA: "~12% (PF)", countryB: "~20% (CPF for citizens)" },
            { label: "Top Marginal Rate", countryA: "30% (above ₹5cr)", countryB: "22% (top bracket)" },
            { label: "Regional Tax", countryA: "None", countryB: "None" },
            { label: "Healthcare", countryA: "Mix of public/private", countryB: "Mix (MediShield)" },
          ]}
          notes="Singapore's tax rates are among the lowest in developed Asia. CPF contributions apply primarily to citizens and PRs."
        />

        <CostOfLivingComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Overall Cost of Living Index", countryA: "100 (baseline)", countryB: "~182" },
            { category: "Housing (City Center, 1BR)", countryA: "₹15,000-40,000/mo", countryB: "S$2,500-5,000/mo" },
            { category: "Utilities (Monthly)", countryA: "₹3,000-7,000", countryB: "S$120-200" },
            { category: "Groceries (Monthly)", countryA: "₹5,000-12,000", countryB: "S$400-700" },
            { category: "Healthcare (Monthly)", countryA: "₹1,000-3,000", countryB: "S$50-150" },
          ]}
        />

        <PurchasingPowerComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "PPP-adjusted Salary", countryA: "₹12,00,000", countryB: "~₹20,00,000 (S$ adjusted)" },
            { category: "Disposable Income After Tax & Housing", countryA: "~₹5,00,000-7,00,000", countryB: "~S$24,000-36,000" },
            { category: "Savings Potential", countryA: "~15-25%", countryB: "~20-30%" },
          ]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Data Science Job Market", countryA: "Massive and growing rapidly", countryB: "Strong, finance-focused" },
            { category: "Major Data Science Hubs", countryA: "Bengaluru, Hyderabad, Mumbai", countryB: "Singapore (city-state)" },
            { category: "AI Research Presence", countryA: "Growing (IITs, startups)", countryB: "Strong (universities, govt)" },
            { category: "Remote Data Science Work", countryA: "Very common", countryB: "Less common" },
            { category: "Equity Compensation", countryA: "Common in startups", countryB: "Common in startups" },
          ]}
        />

        <ImmigrationComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { factor: "Work Visa Type", countryA: "Not applicable (domestic)", countryB: "Employment Pass / S Pass" },
            { factor: "Processing Time", countryA: "N/A", countryB: "4-8 weeks" },
            { factor: "Path to PR", countryA: "N/A", countryB: "6-24 months (for EP holders)" },
            { factor: "Spouse Work Rights", countryA: "N/A", countryB: "Letter of Consent (LOC)" },
          ]}
        />

        <RecommendationSection
          recommendation="India is recommended for data scientists who want to be part of one of the fastest-growing data science markets in the world, with massive scale and diverse opportunities across industries. Singapore is recommended for data scientists who seek higher nominal compensation, a mature financial hub, excellent infrastructure, and a high standard of living in a global city-state."
          reasons={[
            "Singapore offers significantly higher nominal salaries",
            "India provides massive market scale and faster career progression",
            "Singapore has low taxes and excellent infrastructure",
            "India offers lower cost of living and strong purchasing power locally",
            "Singapore is a global financial hub with strong data science demand",
            "India's tech ecosystem is growing exponentially with vast opportunities",
          ]}
          cta={{ label: "Compare More Countries", href: "/comparisons" }}
        />

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "Ministry of Statistics India", url: "https://www.mospi.gov.in" },
            { label: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
            { label: "Singapore Economic Development Board", url: "https://www.edb.gov.sg" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Data Scientist Hub", href: "/professions/data-scientist" },
            { label: "Data Scientist Salary India", href: "/data-scientist-salary-india" },
            { label: "Data Scientist Salary Singapore", href: "/data-scientist-salary-singapore" },
            { label: "Data Scientist Salary Index 2026", href: "/research/data-scientist-salary-index-2026" },
            { label: "Highest Paying Countries for Data Scientists", href: "/rankings/highest-paying-countries-data-scientists" },
            { label: "Data Scientist US vs UK", href: "/comparisons/data-scientist-us-vs-uk" },
            { label: "Data Scientist UK vs Australia", href: "/comparisons/data-scientist-uk-vs-australia" },
          ]}
        />
      </div>
      </>
  )
}