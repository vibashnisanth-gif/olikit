import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"
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
const COUNTRY_B = { flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", slug: "au" }

const pagePath = "/comparisons/data-scientist-us-vs-australia"

export const metadata: Metadata = {
  title: "Data Scientist US vs Australia: Salary & Career Comparison (2026)",
  description: "Compare data scientist salaries, taxes, cost of living, and career opportunities between the United States and Australia. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Data Scientist US vs Australia: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of data scientist careers in the US vs Australia. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function USvsAustraliaPage() {
  const articleSchema = buildArticleJsonLd(
    "Data Scientist US vs Australia: Salary & Career Comparison (2026)",
    "Compare data scientist salaries, taxes, cost of living, and career opportunities between the United States and Australia.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist US vs Australia", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "How do data scientist salaries compare between the US and Australia?", answer: "The average data scientist salary in the US is approximately $120,000 USD, while in Australia it is around A$110,000 (approximately $71,000 USD). The US offers higher nominal salaries, but Australia's salary levels are competitive when adjusted for its strong economy and demand for data professionals." },
    { question: "Which country has better work-life balance for data scientists?", answer: "Australia is known for its strong work-life balance culture, with generous annual leave, public holidays, and a focus on well-being. US data scientists often work longer hours but have access to higher compensation and more aggressive career growth opportunities." },
    { question: "What are the main data science industries in each country?", answer: "The US has a dominant data science job market spanning big tech, finance, healthcare, and e-commerce. Australia's data science demand is strong in banking, mining, healthcare, and government sectors, with growing opportunities in Sydney and Melbourne." },
    { question: "How does immigration compare for data scientists?", answer: "Australia offers a points-based skilled migration system that is favorable for data scientists, with occupations on the skilled occupation list. The US relies on the H-1B lottery system, which is less predictable. Australia's pathway to permanent residency is generally more straightforward." },
  ]

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <HeroSection
          badge="Data Scientist Comparison"
          title="Data Scientist: United States vs Australia"
          description="A comprehensive comparison of data scientist careers in the United States and Australia. Analyze salary differences, tax implications, cost of living variations, purchasing power, and career opportunities to make an informed decision."
        />

        <CountryComparisonSection
          countries={[
            { flag: COUNTRY_A.flag, name: COUNTRY_A.name, slug: COUNTRY_A.slug },
            { flag: COUNTRY_B.flag, name: COUNTRY_B.name, slug: COUNTRY_B.slug },
          ]}
          overview="This comparison examines the key differences for data scientists between the United States and Australia. The US leads in nominal compensation and data science job density, particularly in big tech. Australia offers a strong work-life balance, a points-based immigration system favorable to skilled data professionals, and growing data science hubs in Sydney and Melbourne."
        />

        <ExecutiveSummarySection
          summary="US data scientists earn higher salaries than their Australian counterparts, with averages of $120,000 USD versus A$110,000 (approximately $71,000 USD). However, Australia offers a compelling lifestyle advantage with generous leave policies, universal healthcare, and a more relaxed work culture. The tax burden in Australia is moderate with Medicare providing universal coverage. For data scientists prioritizing maximum earning potential, the US is the stronger choice. For those seeking work-life balance and a favorable immigration pathway, Australia is highly attractive."
          metrics={[
            { label: "US Average Salary", value: "$120,000 USD" },
            { label: "Australia Average Salary", value: "A$110,000" },
            { label: "Salary Advantage", value: "US +69%" },
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
            { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
          ]}
        />

        <SalaryComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Average Salary", countryA: "$120,000 USD", countryB: "A$110,000" },
            { label: "Entry Level (0-2 yrs)", countryA: "$75,000 USD", countryB: "A$60,000" },
            { label: "Mid Level (3-7 yrs)", countryA: "$120,000 USD", countryB: "A$110,000" },
            { label: "Senior (8-15 yrs)", countryA: "$180,000 USD", countryB: "A$155,000" },
            { label: "Top-tier (15+ yrs)", countryA: "$250,000+ USD", countryB: "A$200,000+" },
          ]}
          notes="Salaries shown in local currency. USD to AUD exchange rate approximately 1.55."
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Income Tax Rate (Avg Earner)", countryA: "~22% effective", countryB: "~24% effective" },
            { label: "Social Contributions", countryA: "7.65% (FICA)", countryB: "~3.5% (Medicare Levy)" },
            { label: "Top Marginal Rate", countryA: "37% (federal)", countryB: "45% (top bracket)" },
            { label: "State Tax", countryA: "0-13.3%", countryB: "None" },
            { label: "Healthcare", countryA: "Employer-based insurance", countryB: "Medicare (tax-funded)" },
          ]}
          notes="Australian Medicare levy is 2% plus 1.5% for high earners. No state income tax in Australia."
        />

        <CostOfLivingComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Overall Cost of Living Index", countryA: "100 (baseline)", countryB: "~89" },
            { category: "Housing (City Center, 1BR)", countryA: "$1,800-3,500/mo", countryB: "A$1,800-3,000/mo" },
            { category: "Utilities (Monthly)", countryA: "$150-250", countryB: "A$140-220" },
            { category: "Groceries (Monthly)", countryA: "$400-600", countryB: "A$400-550" },
            { category: "Healthcare (Monthly)", countryA: "$200-500 (insurance)", countryB: "Covered by Medicare" },
          ]}
        />

        <PurchasingPowerComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "PPP-adjusted Salary", countryA: "$120,000", countryB: "~$91,000 (A$ adjusted)" },
            { category: "Disposable Income After Tax & Housing", countryA: "~$35,000-45,000", countryB: "~$20,000-30,000" },
            { category: "Savings Potential", countryA: "~20-30%", countryB: "~15-25%" },
          ]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Data Science Job Market", countryA: "Largest globally", countryB: "Strong and growing" },
            { category: "Major Data Science Hubs", countryA: "SF, NYC, Seattle, Boston", countryB: "Sydney, Melbourne, Brisbane" },
            { category: "AI Research Presence", countryA: "World-leading labs", countryB: "Select universities" },
            { category: "Remote Data Science Work", countryA: "Very common", countryB: "Increasingly common" },
            { category: "Equity Compensation", countryA: "Very common", countryB: "Less common" },
          ]}
        />

        <ImmigrationComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { factor: "Work Visa Type", countryA: "H-1B (lottery-based)", countryB: "Skilled visa (subclass 482/186)" },
            { factor: "Processing Time", countryA: "3-6 months + lottery", countryB: "3-12 months" },
            { factor: "Path to PR", countryA: "EB-2/EB-3 (years)", countryB: "Subclass 186/189 (12-18 months)" },
            { factor: "Spouse Work Rights", countryA: "H-4 EAD (conditional)", countryB: "Full work rights" },
          ]}
        />

        <RecommendationSection
          recommendation="The United States is recommended for data scientists who prioritize maximum earning potential and career growth at leading technology companies. Australia is recommended for data scientists who value work-life balance, a favorable climate, universal healthcare, and a more predictable immigration pathway. Australia's growing data science sector and strong demand across industries make it an attractive option for professionals seeking a balanced lifestyle."
          reasons={[
            "US offers significantly higher salaries and equity compensation potential",
            "Australia provides a superior work-life balance with generous leave policies",
            "US has more data science roles at major tech companies and startups",
            "Australia offers a straightforward points-based immigration system",
            "Australian cities provide a high quality of life with outdoor lifestyle",
            "Australia's healthcare system is universal and well-regarded",
          ]}
          cta={{ label: "Compare More Countries", href: "/comparisons" }}
        />

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
            { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
            { label: "Australian Department of Home Affairs", url: "https://immi.homeaffairs.gov.au" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Data Scientist Hub", href: "/professions/data-scientist" },
            { label: "Data Scientist Salary US", href: "/data-scientist-salary-us" },
            { label: "Data Scientist Salary Australia", href: "/data-scientist-salary-australia" },
            { label: "Data Scientist Salary Index 2026", href: "/research/data-scientist-salary-index-2026" },
            { label: "Highest Paying Countries for Data Scientists", href: "/rankings/highest-paying-countries-data-scientists" },
            { label: "Data Scientist US vs Canada", href: "/comparisons/data-scientist-us-vs-canada" },
            { label: "Data Scientist US vs UK", href: "/comparisons/data-scientist-us-vs-uk" },
          ]}
        />
      </div>
    </Shell>
  )
}
