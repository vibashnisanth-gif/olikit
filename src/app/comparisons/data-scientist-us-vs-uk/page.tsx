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

const COUNTRY_A = { flag: "\u{1F1FA}\u{1F1F8}", name: "United States", slug: "us" }
const COUNTRY_B = { flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", slug: "uk" }

const pagePath = "/comparisons/data-scientist-us-vs-uk"

export const metadata: Metadata = {
  title: "Data Scientist US vs UK: Salary & Career Comparison (2026)",
  description: "Compare data scientist salaries, taxes, cost of living, and career opportunities between the United States and the United Kingdom. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Data Scientist US vs UK: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of data scientist careers in the US vs UK. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function USvsUKPage() {
  const articleSchema = buildArticleJsonLd(
    "Data Scientist US vs UK: Salary & Career Comparison (2026)",
    "Compare data scientist salaries, taxes, cost of living, and career opportunities between the United States and the United Kingdom.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist US vs UK", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "How do data scientist salaries compare between the US and UK?", answer: "The average data scientist salary in the US is approximately $120,000 USD, while in the UK it is around £55,000 (approximately $70,000 USD). The US offers significantly higher salaries, roughly 70% more on average, especially at senior levels and in major tech hubs." },
    { question: "Which country has better work-life balance for data scientists?", answer: "The UK generally offers better work-life balance with more annual leave (typically 25-30 days plus bank holidays), while US data scientists often work longer hours but have access to higher compensation and faster career progression." },
    { question: "How does healthcare affect data scientist compensation?", answer: "The UK's NHS provides universal healthcare funded through taxation, eliminating the need for employer-provided health insurance. US data scientists must account for health insurance costs, which can be $200-500 per month, but this is typically offset by higher salaries." },
    { question: "Which country has a stronger data science job market?", answer: "The US has the world's largest data science job market, with abundant opportunities at major technology companies, financial institutions, and startups across multiple cities. The UK, particularly London, has a strong data science market focused on finance, consulting, and technology, but is smaller in scale." },
  ]

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <HeroSection
          badge="Data Scientist Comparison"
          title="Data Scientist: United States vs United Kingdom"
          description="A comprehensive comparison of data scientist careers in the United States and the United Kingdom. Analyze salary differences, tax implications, cost of living variations, purchasing power, and career opportunities to make an informed decision."
        />

        <CountryComparisonSection
          countries={[
            { flag: COUNTRY_A.flag, name: COUNTRY_A.name, slug: COUNTRY_A.slug },
            { flag: COUNTRY_B.flag, name: COUNTRY_B.name, slug: COUNTRY_B.slug },
          ]}
          overview="This comparison examines the key differences for data scientists between the United States and the United Kingdom. The US leads in nominal compensation and data science job density, while the UK offers a strong job market centered on London, universal healthcare through the NHS, generous annual leave policies, and proximity to Europe."
        />

        <ExecutiveSummarySection
          summary="US data scientists earn significantly higher salaries than their UK counterparts, with averages of $120,000 USD versus £55,000 (approximately $70,000 USD). The US offers a larger job market, more opportunities at major tech companies, and higher earning potential. The UK provides universal healthcare, better work-life balance with generous annual leave, and a vibrant data science scene centered in London with growing hubs in Manchester and Edinburgh."
          metrics={[
            { label: "US Average Salary", value: "$120,000 USD" },
            { label: "UK Average Salary", value: "£55,000" },
            { label: "Salary Advantage", value: "US +71%" },
          ]}
        />

        <MethodologySection
          methodology={[
            "Salary data is sourced from government labor statistics, technology industry surveys, and compensation databases.",
            "Tax calculations incorporate federal/national income taxes and state taxes.",
            "Cost of living comparisons use Numbeo and OECD data comparing major cities.",
            "Purchasing power is calculated using purchasing power parity (PPP) principles.",
          ]}
          dataSources={[
            { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
            { label: "UK Office for National Statistics", url: "https://www.ons.gov.uk" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
          ]}
        />

        <SalaryComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Average Salary", countryA: "$120,000 USD", countryB: "£55,000" },
            { label: "Entry Level (0-2 yrs)", countryA: "$75,000 USD", countryB: "£35,000" },
            { label: "Mid Level (3-7 yrs)", countryA: "$120,000 USD", countryB: "£55,000" },
            { label: "Senior (8-15 yrs)", countryA: "$180,000 USD", countryB: "£85,000" },
            { label: "Top-tier (15+ yrs)", countryA: "$250,000+ USD", countryB: "£120,000+" },
          ]}
          notes="Salaries shown in local currency. USD to GBP exchange rate approximately 0.79."
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Income Tax Rate (Avg Earner)", countryA: "~22% effective", countryB: "~20% effective" },
            { label: "Social Contributions", countryA: "7.65% (FICA)", countryB: "~8% (NI contributions)" },
            { label: "Top Marginal Rate", countryA: "37% (federal)", countryB: "45% (above £125k)" },
            { label: "State/Regional Tax", countryA: "0-13.3%", countryB: "None" },
            { label: "Healthcare", countryA: "Employer-based insurance", countryB: "NHS (tax-funded)" },
          ]}
          notes="UK National Insurance contributions fund the NHS. US healthcare costs are additional to taxes and vary significantly."
        />

        <CostOfLivingComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Overall Cost of Living Index", countryA: "100 (baseline)", countryB: "~85" },
            { category: "Housing (City Center, 1BR)", countryA: "$1,800-3,500/mo", countryB: "£1,200-2,500/mo" },
            { category: "Utilities (Monthly)", countryA: "$150-250", countryB: "£120-200" },
            { category: "Groceries (Monthly)", countryA: "$400-600", countryB: "£250-400" },
            { category: "Healthcare (Monthly)", countryA: "$200-500 (insurance)", countryB: "Covered by NHS" },
          ]}
        />

        <PurchasingPowerComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "PPP-adjusted Salary", countryA: "$120,000", countryB: "~$83,000 (£ adjusted)" },
            { category: "Disposable Income After Tax & Housing", countryA: "~$35,000-45,000", countryB: "~£15,000-22,000" },
            { category: "Savings Potential", countryA: "~20-30%", countryB: "~10-20%" },
          ]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Data Science Job Market", countryA: "Largest globally", countryB: "Strong (finance-heavy)" },
            { category: "Major Data Science Hubs", countryA: "SF, NYC, Seattle, Boston", countryB: "London, Manchester, Edinburgh" },
            { category: "AI Research Presence", countryA: "World-leading labs", countryB: "Strong (DeepMind, universities)" },
            { category: "Remote Data Science Work", countryA: "Very common", countryB: "Common" },
            { category: "Equity Compensation", countryA: "Very common", countryB: "Less common" },
          ]}
        />

        <ImmigrationComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { factor: "Work Visa Type", countryA: "H-1B (lottery-based)", countryB: "Skilled Worker Visa (points-based)" },
            { factor: "Processing Time", countryA: "3-6 months + lottery", countryB: "3-8 weeks" },
            { factor: "Path to PR", countryA: "EB-2/EB-3 (years)", countryB: "ILR after 5 years" },
            { factor: "Spouse Work Rights", countryA: "H-4 EAD (conditional)", countryB: "Full work rights" },
          ]}
        />

        <RecommendationSection
          recommendation="The United States is recommended for data scientists who prioritize maximum earning potential, career growth at leading technology companies, and access to the world's largest data science job market. The United Kingdom is recommended for data scientists who value universal healthcare, generous annual leave, proximity to Europe, and a strong data science scene centered on London's financial and technology sectors."
          reasons={[
            "US offers significantly higher salaries and equity compensation potential",
            "UK provides universal healthcare through NHS and generous annual leave",
            "US has a larger concentration of major technology and AI research employers",
            "UK offers a strong finance-driven data science market in London",
            "UK's immigration system is more predictable than the US H-1B lottery",
            "UK provides easy access to European travel and diverse cultural experiences",
          ]}
          cta={{ label: "Compare More Countries", href: "/comparisons" }}
        />

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
            { label: "UK Office for National Statistics", url: "https://www.ons.gov.uk" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
            { label: "UK Visas and Immigration", url: "https://www.gov.uk/government/organisations/uk-visas-and-immigration" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Data Scientist Hub", href: "/professions/data-scientist" },
            { label: "Data Scientist Salary US", href: "/data-scientist-salary-us" },
            { label: "Data Scientist Salary UK", href: "/data-scientist-salary-uk" },
            { label: "Data Scientist Salary Index 2026", href: "/research/data-scientist-salary-index-2026" },
            { label: "Highest Paying Countries for Data Scientists", href: "/rankings/highest-paying-countries-data-scientists" },
            { label: "Data Scientist US vs Canada", href: "/comparisons/data-scientist-us-vs-canada" },
            { label: "Data Scientist US vs Australia", href: "/comparisons/data-scientist-us-vs-australia" },
            { label: "Data Scientist India vs Singapore", href: "/comparisons/data-scientist-india-vs-singapore" },
          ]}
        />
      </div>
      </>
  )
}