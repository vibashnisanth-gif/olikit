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

const COUNTRY_A = { flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", slug: "uk" }
const COUNTRY_B = { flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", slug: "au" }

const pagePath = "/software-engineer-uk-vs-australia"

export const metadata: Metadata = {
  title: "Software Engineer UK vs Australia: Salary & Career Comparison (2026)",
  description: "Compare software engineer salaries, taxes, cost of living, and career opportunities between the United Kingdom and Australia. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Software Engineer UK vs Australia: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of software engineer careers in the UK vs Australia. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function UKvsAustraliaPage() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer UK vs Australia: Salary & Career Comparison (2026)",
    "Compare software engineer salaries, taxes, cost of living, and career opportunities between the United Kingdom and Australia.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Software Engineer UK vs Australia", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "How do software engineer salaries compare between the UK and Australia?", answer: "The average software engineer salary in Australia is approximately A$110,000, while in the UK it is around £55,000. When converted, Australian salaries are significantly higher, approximately 50-60% more than UK salaries." },
    { question: "How does the cost of living compare between the UK and Australia?", answer: "Sydney and Melbourne have high living costs comparable to London. However, other Australian cities like Brisbane and Perth offer more affordable options. UK cities outside London have significantly lower living costs than London." },
    { question: "Which country has a better technology job market?", answer: "The UK has a larger technology sector, particularly in fintech and financial services centered in London. Australia's tech market is smaller but growing, with strong demand in Sydney and Melbourne." },
    { question: "How do immigration pathways compare?", answer: "Australia offers a points-based skilled migration system with clear pathways to permanent residency for software engineers. The UK's Skilled Worker Visa provides a straightforward route but permanent settlement typically takes longer." },
  ]

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <HeroSection
          badge="Software Engineer Comparison"
          title="Software Engineer: United Kingdom vs Australia"
          description="A comprehensive comparison of software engineer careers in the United Kingdom and Australia. Analyze salary differences, tax implications, cost of living variations, purchasing power, and career opportunities."
        />

        <CountryComparisonSection
          countries={[
            { flag: COUNTRY_A.flag, name: COUNTRY_A.name, slug: COUNTRY_A.slug },
            { flag: COUNTRY_B.flag, name: COUNTRY_B.name, slug: COUNTRY_B.slug },
          ]}
          overview="This comparison examines the key differences for software engineers between the United Kingdom and Australia. Australia generally offers higher salaries and a points-based immigration system, while the UK provides a larger technology job market centered in London with strong fintech and financial services sectors."
        />

        <ExecutiveSummarySection
          summary="Australian software engineers earn significantly higher salaries than their UK counterparts, with averages of A$110,000 compared to £55,000 (~A$105,000). When adjusted for exchange rates, Australian salaries are competitive. Australia offers a superior climate, universal healthcare, and a points-based immigration system. The UK offers proximity to European markets, a larger technology ecosystem in London, and strong fintech opportunities. For engineers prioritizing salary and lifestyle, Australia has the edge. For those seeking a larger technology market and European travel access, the UK is compelling."
          metrics={[
            { label: "UK Average Salary", value: "£55,000" },
            { label: "Australia Average Salary", value: "A$110,000" },
            { label: "Salary Advantage", value: "Australia +8% (FX adj.)" },
          ]}
        />

        <MethodologySection
          methodology={[
            "Salary data is sourced from government labor statistics and technology industry surveys.",
            "Tax calculations incorporate national income taxes and regional variations.",
            "Cost of living comparisons use Numbeo and OECD data.",
          ]}
          dataSources={[
            { label: "UK Office for National Statistics", url: "https://www.ons.gov.uk" },
            { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
          ]}
        />

        <SalaryComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Average Salary", countryA: "£55,000", countryB: "A$110,000" },
            { label: "Entry Level (0-2 yrs)", countryA: "£30,000", countryB: "A$65,000" },
            { label: "Mid Level (3-7 yrs)", countryA: "£55,000", countryB: "A$110,000" },
            { label: "Senior (8-15 yrs)", countryA: "£85,000", countryB: "A$160,000" },
            { label: "Top-tier (15+ yrs)", countryA: "£120,000+", countryB: "A$200,000+" },
          ]}
          notes="GBP to AUD exchange rate approximately 1.92. Australian salaries inclusive of superannuation."
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Income Tax (Avg Earner)", countryA: "~20% effective", countryB: "~25% effective" },
            { label: "Social Contributions", countryA: "~12% (NI + pension)", countryB: "11% superannuation" },
            { label: "Top Marginal Rate", countryA: "45%", countryB: "45% + 2% Medicare" },
            { label: "Healthcare", countryA: "NHS (tax-funded)", countryB: "Medicare (tax-funded)" },
          ]}
        />

        <CostOfLivingComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Overall Cost of Living Index", countryA: "~82", countryB: "~97 (UK baseline)" },
            { category: "Housing (City Center, 1BR)", countryA: "£1,200-2,500/mo", countryB: "A$2,000-3,000/mo" },
            { category: "Groceries (Monthly)", countryA: "£250-400", countryB: "A$400-600" },
            { category: "Climate", countryA: "Temperate, variable", countryB: "Subtropical to temperate" },
          ]}
        />

        <PurchasingPowerComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "PPP-adjusted Salary", countryA: "£55,000", countryB: "~£57,000 (A$ adjusted)" },
            { category: "Disposable Income After Housing", countryA: "~£15,000-20,000", countryB: "~A$25,000-35,000" },
          ]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Tech Market Size", countryA: "Large, especially fintech", countryB: "Growing regional market" },
            { category: "Major Hubs", countryA: "London, Manchester, Edinburgh", countryB: "Sydney, Melbourne, Brisbane" },
            { category: "European Market Access", countryA: "Yes (proximity)", countryB: "Asia-Pacific hub" },
          ]}
        />

        <ImmigrationComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { factor: "Work Visa", countryA: "Skilled Worker Visa", countryB: "Skilled Migration (points)" },
            { factor: "Path to PR", countryA: "ILR after 5 years", countryB: "PR via points system" },
            { factor: "Processing Time", countryA: "2-8 weeks", countryB: "3-12 months" },
          ]}
        />

        <RecommendationSection
          recommendation="Australia offers higher salaries, a superior climate, and a straightforward immigration system for software engineers. The UK offers a larger technology job market, particularly in fintech, and proximity to European markets. For engineers prioritizing salary growth and lifestyle, Australia is the stronger choice. For those seeking career opportunities in financial technology or European market access, the UK remains competitive."
          reasons={[
            "Australian salaries are higher across all experience levels",
            "UK has a larger technology sector, especially in fintech",
            "Australia offers a points-based PR pathway and better climate",
            "UK provides proximity to European technology markets",
            "Both countries offer universal healthcare systems",
          ]}
          cta={{ label: "Compare More Countries", href: "/comparisons" }}
        />

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "UK Office for National Statistics", url: "https://www.ons.gov.uk" },
            { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au" },
            { label: "UK Home Office", url: "https://www.gov.uk/government/organisations/home-office" },
            { label: "Australian Department of Home Affairs", url: "https://immi.homeaffairs.gov.au" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Software Engineer Hub", href: "/professions/software-engineer" },
            { label: "Software Engineer Salary UK", href: "/software-engineer-salary-uk" },
            { label: "Software Engineer Salary Australia", href: "/software-engineer-salary-australia" },
            { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
            { label: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers" },
            { label: "Software Engineer US vs UK", href: "/software-engineer-us-vs-uk" },
            { label: "Software Engineer India vs Singapore", href: "/software-engineer-india-vs-singapore" },
          ]}
        />
      </div>
      </>
  )
}