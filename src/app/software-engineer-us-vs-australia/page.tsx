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

const pagePath = "/software-engineer-us-vs-australia"

export const metadata: Metadata = {
  title: "Software Engineer US vs Australia: Salary & Career Comparison (2026)",
  description: "Compare software engineer salaries, taxes, cost of living, and career opportunities between the United States and Australia. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Software Engineer US vs Australia: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of software engineer careers in the US vs Australia. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function USvsAustraliaPage() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer US vs Australia: Salary & Career Comparison (2026)",
    "Compare software engineer salaries, taxes, cost of living, and career opportunities between the United States and Australia.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Software Engineer US vs Australia", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "How do software engineer salaries compare between the US and Australia?", answer: "The average software engineer salary in the US is approximately $120,000 USD, while in Australia it is around A$110,000 (approximately $72,000 USD). The US offers significantly higher nominal compensation, especially at senior levels." },
    { question: "How does work-life balance compare between the US and Australia?", answer: "Australia generally offers better work-life balance with stronger employment protections, generous leave entitlements, and a culture that emphasizes work-life separation. US tech culture often demands longer hours but compensates with higher pay." },
    { question: "Which country has better immigration pathways for software engineers?", answer: "Australia offers a points-based skilled migration system with clear pathways to permanent residency for software engineers. The US H-1B system is lottery-based and less predictable." },
    { question: "How do tax rates compare for software engineers?", answer: "Australian tax rates are progressive with a top marginal rate of 45% plus 2% Medicare levy. US federal rates are up to 37% plus state taxes. Overall tax burdens are comparable for mid-career engineers." },
  ]

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <HeroSection
          badge="Software Engineer Comparison"
          title="Software Engineer: United States vs Australia"
          description="A comprehensive comparison of software engineer careers in the United States and Australia. Analyze salary differences, tax implications, cost of living variations, purchasing power, and career opportunities."
        />

        <CountryComparisonSection
          countries={[
            { flag: COUNTRY_A.flag, name: COUNTRY_A.name, slug: COUNTRY_A.slug },
            { flag: COUNTRY_B.flag, name: COUNTRY_B.name, slug: COUNTRY_B.slug },
          ]}
          overview="This comparison examines the key differences for software engineers between the United States and Australia. The US leads in nominal compensation and technology market size, while Australia offers superior work-life balance, universal healthcare, and a more accessible immigration system through its skilled migration program."
        />

        <ExecutiveSummarySection
          summary="US software engineers earn substantially higher salaries than Australian engineers, with averages of $120,000 USD versus A$110,000 (~$72,000 USD). However, Australia offers strong employment protections, mandatory superannuation (retirement contributions), universal healthcare, and a culture that prioritizes work-life balance. Australian engineers benefit from a points-based immigration system that provides clear pathways to permanent residency. For engineers seeking maximum compensation, the US is preferable. For those prioritizing lifestyle, healthcare access, and long-term stability, Australia is highly competitive."
          metrics={[
            { label: "US Average Salary", value: "$120,000 USD" },
            { label: "Australia Average Salary", value: "A$110,000" },
            { label: "Salary Advantage", value: "US +67%" },
          ]}
        />

        <MethodologySection
          methodology={[
            "Salary data is sourced from government labor statistics and technology industry surveys.",
            "Tax calculations incorporate federal/national income taxes and state/territory taxes.",
            "Cost of living comparisons use Numbeo and OECD data.",
            "Purchasing power is calculated using PPP principles.",
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
            { label: "Entry Level (0-2 yrs)", countryA: "$75,000 USD", countryB: "A$65,000" },
            { label: "Mid Level (3-7 yrs)", countryA: "$120,000 USD", countryB: "A$110,000" },
            { label: "Senior (8-15 yrs)", countryA: "$180,000 USD", countryB: "A$160,000" },
            { label: "Top-tier (15+ yrs)", countryA: "$250,000+ USD", countryB: "A$200,000+" },
          ]}
          notes="US salaries in USD; Australian salaries in AUD. Exchange rate approximately 0.66 USD/AUD."
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Income Tax Rate (Avg Earner)", countryA: "~22% effective", countryB: "~25% effective" },
            { label: "Social Contributions", countryA: "7.65% (FICA)", countryB: "11% superannuation (employer)" },
            { label: "Top Marginal Rate", countryA: "37% (federal)", countryB: "45% + 2% Medicare" },
            { label: "Tax-Free Threshold", countryA: "~$14,600", countryB: "A$18,200" },
          ]}
          notes="Australian superannuation is employer-paid and provides significant retirement benefits."
        />

        <CostOfLivingComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Overall Cost of Living Index", countryA: "100 (baseline)", countryB: "~97" },
            { category: "Housing (City Center, 1BR)", countryA: "$1,800-3,500/mo", countryB: "A$2,000-3,000/mo" },
            { category: "Groceries (Monthly)", countryA: "$400-600", countryB: "A$400-600" },
            { category: "Healthcare", countryA: "Employer insurance", countryB: "Medicare (universal)" },
          ]}
        />

        <PurchasingPowerComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "PPP-adjusted Salary", countryA: "$120,000", countryB: "~$74,000 (A$ adjusted)" },
            { category: "Disposable Income After Tax & Housing", countryA: "~$35,000-45,000", countryB: "~$18,000-25,000" },
            { category: "Savings + Superannuation", countryA: "~20-30%", countryB: "~15-25% (incl. super)" },
          ]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Tech Market Size", countryA: "Largest globally", countryB: "Strong regional market" },
            { category: "Major Hubs", countryA: "SF, Seattle, NYC, Austin", countryB: "Sydney, Melbourne, Brisbane" },
            { category: "Startup Ecosystem", countryA: "World-leading", countryB: "Growing, particularly fintech" },
            { category: "Work-Life Balance", countryA: "Variable", countryB: "Strong culture of balance" },
          ]}
        />

        <ImmigrationComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { factor: "Work Visa", countryA: "H-1B (lottery)", countryB: "Skilled Migration (points)" },
            { factor: "Processing Time", countryA: "3-6 months + lottery", countryB: "3-12 months" },
            { factor: "Path to PR", countryA: "EB-2/EB-3 (years)", countryB: "Subclass 189/190 (points)" },
            { factor: "Spouse Work Rights", countryA: "H-4 EAD (conditional)", countryB: "Full work rights" },
          ]}
        />

        <RecommendationSection
          recommendation="The United States is the better choice for software engineers focused on maximizing compensation and working at leading global technology companies. Australia is ideal for engineers who value work-life balance, universal healthcare, a straightforward immigration pathway, and a high quality of life. Senior engineers and those with families may find Australia's superannuation system and employment protections particularly attractive."
          reasons={[
            "US offers substantially higher salaries, especially with equity compensation",
            "Australia provides universal healthcare through Medicare",
            "US technology market is significantly larger with more top-tier employers",
            "Australia offers clearer paths to permanent residency for skilled workers",
            "Australian work culture promotes better work-life balance",
            "Mandatory superannuation provides strong retirement benefits in Australia",
          ]}
          cta={{ label: "Compare More Countries", href: "/comparisons" }}
        />

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
            { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au" },
            { label: "Australian Department of Home Affairs", url: "https://immi.homeaffairs.gov.au" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Software Engineer Hub", href: "/professions/software-engineer" },
            { label: "Software Engineer Salary US", href: "/software-engineer-salary-us" },
            { label: "Software Engineer Salary Australia", href: "/software-engineer-salary-australia" },
            { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
            { label: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers" },
            { label: "Software Engineer US vs Canada", href: "/software-engineer-us-vs-canada" },
            { label: "Software Engineer US vs UK", href: "/software-engineer-us-vs-uk" },
          ]}
        />
      </div>
    </Shell>
  )
}
