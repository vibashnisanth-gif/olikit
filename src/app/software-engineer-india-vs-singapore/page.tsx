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

const pagePath = "/software-engineer-india-vs-singapore"

export const metadata: Metadata = {
  title: "Software Engineer India vs Singapore: Salary & Career Comparison (2026)",
  description: "Compare software engineer salaries, taxes, cost of living, and career opportunities between India and Singapore. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Software Engineer India vs Singapore: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of software engineer careers in India vs Singapore. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function IndiavsSingaporePage() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer India vs Singapore: Salary & Career Comparison (2026)",
    "Compare software engineer salaries, taxes, cost of living, and career opportunities between India and Singapore.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Software Engineer India vs Singapore", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "How do software engineer salaries compare between India and Singapore?", answer: "Singapore offers substantially higher nominal salaries, with an average of S$72,000 compared to approximately ₹12,00,000 in India. However, Singapore's cost of living is significantly higher, particularly for housing." },
    { question: "Which country offers better purchasing power for software engineers?", answer: "India offers stronger purchasing power relative to local costs. While nominal salaries are lower, the cost of goods and services in India is significantly cheaper, potentially allowing for a higher standard of living relative to income." },
    { question: "How do tax rates compare?", answer: "Singapore has one of the lowest personal income tax regimes globally, with a top rate of around 22%. India's tax rates are higher, with a top rate of 30% under both Old and New tax regimes." },
    { question: "Which country has better career growth opportunities?", answer: "Singapore offers access to global technology companies, regional headquarters, and a highly developed financial technology sector. India has a massive and rapidly growing domestic technology market with increasing opportunities in product development and innovation." },
  ]

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <HeroSection
          badge="Software Engineer Comparison"
          title="Software Engineer: India vs Singapore"
          description="A comprehensive comparison of software engineer careers in India and Singapore. Analyze salary differences, tax implications, cost of living variations, purchasing power, and career opportunities."
        />

        <CountryComparisonSection
          countries={[
            { flag: COUNTRY_A.flag, name: COUNTRY_A.name, slug: COUNTRY_A.slug },
            { flag: COUNTRY_B.flag, name: COUNTRY_B.name, slug: COUNTRY_B.slug },
          ]}
          overview="This comparison examines the key differences for software engineers between India and Singapore. Singapore offers higher nominal salaries and extremely low taxes, while India provides strong purchasing power relative to local costs and a massive, rapidly growing domestic technology market. The choice depends on career goals, lifestyle preferences, and risk tolerance."
        />

        <ExecutiveSummarySection
          summary="Singapore offers substantially higher nominal salaries for software engineers, with averages of S$72,000 compared to ₹12,00,000 in India. However, Singapore's cost of living, especially housing, is significantly higher. India offers strong purchasing power relative to local costs and a massive domestic technology market with rapid growth. Singapore provides extremely low taxes, access to global technology companies, and a high standard of living. India offers a vibrant technology ecosystem, lower living costs, and increasing opportunities in product development and innovation."
          metrics={[
            { label: "India Average Salary", value: "₹12,00,000" },
            { label: "Singapore Average Salary", value: "S$72,000" },
            { label: "Tax Advantage", value: "Singapore (low tax)" },
          ]}
        />

        <MethodologySection
          methodology={[
            "Salary data is sourced from technology industry surveys and compensation databases.",
            "Tax calculations incorporate national income taxes and applicable local taxes.",
            "Cost of living comparisons use Numbeo and Mercer data.",
            "Purchasing power is calculated using PPP principles.",
          ]}
          dataSources={[
            { label: "India Ministry of Statistics", url: "https://www.mospi.gov.in" },
            { label: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
          ]}
        />

        <SalaryComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Average Salary", countryA: "₹12,00,000", countryB: "S$72,000" },
            { label: "Entry Level (0-2 yrs)", countryA: "₹4,00,000", countryB: "S$42,000" },
            { label: "Mid Level (3-7 yrs)", countryA: "₹12,00,000", countryB: "S$72,000" },
            { label: "Senior (8-15 yrs)", countryA: "₹25,00,000", countryB: "S$110,000" },
            { label: "Top-tier (15+ yrs)", countryA: "₹50,00,000+", countryB: "S$180,000+" },
          ]}
          notes="Salaries in local currency. SGD to INR exchange rate approximately 1:62."
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Income Tax (Avg Earner)", countryA: "~10-20% effective", countryB: "~7% effective" },
            { label: "Top Marginal Rate", countryA: "30%", countryB: "22%" },
            { label: "Social Contributions", countryA: "12% EPF (employer + employee)", countryB: "20% CPF (employer + employee)" },
            { label: "Capital Gains Tax", countryA: "10-20%", countryB: "0%" },
          ]}
          notes="Singapore has one of the lowest personal tax regimes globally. CPF provides housing and retirement benefits."
        />

        <CostOfLivingComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Overall Cost of Living Index", countryA: "~25", countryB: "~100 (baseline)" },
            { category: "Housing (City Center, 1BR)", countryA: "₹15,000-50,000/mo", countryB: "S$2,500-4,500/mo" },
            { category: "Groceries (Monthly)", countryA: "₹8,000-15,000", countryB: "S$400-700" },
            { category: "Utilities (Monthly)", countryA: "₹3,000-6,000", countryB: "S$150-250" },
          ]}
        />

        <PurchasingPowerComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "PPP-adjusted Salary", countryA: "~₹48,00,000 (PPP)", countryB: "~S$72,000" },
            { category: "Disposable Income After Housing", countryA: "~₹5,00,000-8,00,000", countryB: "~S$30,000-40,000" },
            { category: "Local Purchasing Power", countryA: "Very strong (relative)", countryB: "Moderate" },
          ]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Tech Market Size", countryA: "Massive and growing", countryB: "Regional hub" },
            { category: "Major Hubs", countryA: "Bengaluru, Hyderabad, Pune", countryB: "Singapore (city-state)" },
            { category: "Global Company Access", countryA: "Strong services sector", countryB: "Many regional HQs" },
            { category: "Startup Ecosystem", countryA: "Vibrant and growing", countryB: "Strong government support" },
          ]}
        />

        <ImmigrationComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { factor: "Work Visa (for foreigners)", countryA: "Employment Visa", countryB: "Employment Pass" },
            { factor: "Path to PR", countryA: "Very limited", countryB: "Possible after 6 months" },
            { factor: "Domestic Mobility", countryA: "Free movement within India", countryB: "Single city-state" },
          ]}
        />

        <RecommendationSection
          recommendation="Singapore is recommended for software engineers seeking high nominal salaries, low taxes, and access to global technology companies in a world-class urban environment. India is recommended for engineers who want to work in a massive, rapidly growing technology market with strong purchasing power relative to local costs. For Indian engineers considering international exposure, Singapore offers an excellent bridge between Asian and global technology markets with relatively accessible immigration."
          reasons={[
            "Singapore offers much higher nominal salaries and extremely low taxes",
            "India provides stronger purchasing power relative to local costs",
            "Singapore has better access to regional headquarters of global tech companies",
            "India has a massive domestic market with rapidly growing product development",
            "Singapore's CPF system provides housing and retirement benefits",
            "India offers a vibrant startup ecosystem at a lower cost of entry",
          ]}
          cta={{ label: "Compare More Countries", href: "/comparisons" }}
        />

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "India Ministry of Labour", url: "https://labour.gov.in" },
            { label: "Singapore Ministry of Manpower", url: "https://www.mom.gov.sg" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
            { label: "IRAS Singapore", url: "https://www.iras.gov.sg" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Software Engineer Hub", href: "/professions/software-engineer" },
            { label: "Software Engineer Salary India", href: "/software-engineer-salary-india" },
            { label: "Software Engineer Salary Singapore", href: "/software-engineer-salary-singapore" },
            { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
            { label: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers" },
            { label: "Software Engineer UK vs Australia", href: "/software-engineer-uk-vs-australia" },
            { label: "Software Engineer US vs UK", href: "/software-engineer-us-vs-uk" },
          ]}
        />
      </div>
      </>
  )
}