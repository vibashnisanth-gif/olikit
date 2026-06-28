import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildArticleJsonLd } from "@/lib/seo/json-ld"
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

const pagePath = "/software-engineer-us-vs-uk"

export const metadata: Metadata = {
  title: "Software Engineer US vs UK: Salary & Career Comparison (2026)",
  description: "Compare software engineer salaries, taxes, cost of living, and career opportunities between the United States and the United Kingdom. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Software Engineer US vs UK: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of software engineer careers in the US vs UK. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function USvsUKPage() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer US vs UK: Salary & Career Comparison (2026)",
    "Compare software engineer salaries, taxes, cost of living, and career opportunities between the United States and the United Kingdom.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Software Engineer US vs UK", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "How do software engineer salaries compare between the US and UK?", answer: "The average software engineer salary in the US is approximately $120,000 per year, while in the UK it is around £55,000 ($70,000). When adjusted for purchasing power parity, the gap narrows but the US still offers significantly higher nominal compensation." },
    { question: "How does tax affect take-home pay for software engineers in the US vs UK?", answer: "UK tax rates are generally higher across income brackets. A US software engineer earning $120,000 may take home approximately $80,000-85,000 after federal and state taxes. A UK software engineer earning £55,000 may take home approximately £40,000-42,000 after income tax and National Insurance contributions." },
    { question: "Which country offers better career opportunities for software engineers?", answer: "The US offers a larger technology job market with more opportunities at major tech companies, startups, and higher levels of venture capital funding. The UK, particularly London, has a strong fintech sector and growing technology ecosystem with competitive opportunities." },
    { question: "How does cost of living compare between the US and UK?", answer: "Major US cities (San Francisco, New York) have high living costs comparable to London. However, living costs in smaller US cities can be significantly lower. The UK has a more uniform cost structure, with London substantially more expensive than other UK cities." },
  ]

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <HeroSection
          badge="Software Engineer Comparison"
          title="Software Engineer: United States vs United Kingdom"
          description="A comprehensive comparison of software engineer careers in the United States and the United Kingdom. Analyze salary differences, tax implications, cost of living variations, purchasing power, and career opportunities to make an informed decision."
        />

        <CountryComparisonSection
          countries={[
            { flag: COUNTRY_A.flag, name: COUNTRY_A.name, slug: COUNTRY_A.slug },
            { flag: COUNTRY_B.flag, name: COUNTRY_B.name, slug: COUNTRY_B.slug },
          ]}
          overview="This comparison examines the key differences for software engineers between the United States and the United Kingdom. The US generally offers higher nominal salaries, while the UK provides a strong technology sector, particularly in fintech and financial services. Factors such as tax burden, cost of living, healthcare, visa pathways, and career growth potential are analyzed to help engineers decide between these two major English-speaking technology markets."
        />

        <ExecutiveSummarySection
          summary="The United States offers significantly higher software engineering salaries than the United Kingdom, with the average US software engineer earning approximately $120,000 compared to £55,000 in the UK. However, UK engineers benefit from lower healthcare costs, stronger employment protections, and a lower cost of living outside London. When adjusted for purchasing power, the US still holds an advantage, particularly for senior engineers. The choice between the US and UK depends on career priorities, lifestyle preferences, and risk tolerance."
          metrics={[
            { label: "US Average Salary", value: "$120,000" },
            { label: "UK Average Salary", value: "£55,000" },
            { label: "Salary Advantage", value: "US +118%" },
          ]}
        />

        <MethodologySection
          methodology={[
            "Salary data is sourced from government labor statistics, technology industry surveys, and compensation databases for 2025-2026.",
            "Tax calculations incorporate federal/national income taxes, state/regional taxes where applicable, and mandatory social contributions.",
            "Cost of living comparisons use Numbeo and OECD data comparing major cities and national averages.",
            "Purchasing power is calculated by adjusting nominal salaries for local price levels using purchasing power parity (PPP) principles.",
          ]}
          dataSources={[
            { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
            { label: "UK Office for National Statistics", url: "https://www.ons.gov.uk" },
            { label: "OECD Tax Database", url: "https://www.oecd.org/tax/" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
          ]}
        />

        <SalaryComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Average Salary", countryA: "$120,000", countryB: "£55,000" },
            { label: "Entry Level (0-2 yrs)", countryA: "$75,000", countryB: "£30,000" },
            { label: "Mid Level (3-7 yrs)", countryA: "$120,000", countryB: "£55,000" },
            { label: "Senior (8-15 yrs)", countryA: "$180,000", countryB: "£85,000" },
            { label: "Top-tier (15+ yrs)", countryA: "$250,000+", countryB: "£120,000+" },
          ]}
          notes="US salaries are in USD; UK salaries in GBP. Equity compensation is more common in US technical roles."
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Income Tax Rate (Avg Earner)", countryA: "~22% effective", countryB: "~20% effective" },
            { label: "Social Contributions", countryA: "7.65% (FICA)", countryB: "~12% (NI + pension)" },
            { label: "Top Marginal Rate", countryA: "37% (federal)", countryB: "45%" },
            { label: "State/Regional Tax", countryA: "0-13.3%", countryB: "N/A" },
            { label: "Tax-Free Allowance", countryA: "Standard deduction ~$14,600", countryB: "Personal allowance £12,570" },
            { label: "Healthcare Contribution", countryA: "Employer-based insurance", countryB: "NHS (via NI contributions)" },
          ]}
          notes="Tax rates vary by US state and UK region. UK National Insurance covers NHS and state pension."
        />

        <CostOfLivingComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Overall Cost of Living Index", countryA: "100 (baseline)", countryB: "~82" },
            { category: "Housing (City Center, 1BR)", countryA: "$1,800-3,500/mo", countryB: "£1,200-2,500/mo" },
            { category: "Utilities (Monthly)", countryA: "$150-250", countryB: "£150-200" },
            { category: "Groceries (Monthly)", countryA: "$400-600", countryB: "£250-400" },
            { category: "Transportation (Monthly Pass)", countryA: "$70-130", countryB: "£150-200 (London)" },
            { category: "Childcare (Monthly)", countryA: "$1,200-2,000", countryB: "£1,000-1,800" },
          ]}
        />

        <PurchasingPowerComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "PPP-adjusted Salary", countryA: "$120,000", countryB: "~$67,000 (adjusted)" },
            { category: "PPP Factor", countryA: "1.00", countryB: "~0.82" },
            { category: "Disposable Income After Tax & Housing", countryA: "~$35,000-45,000", countryB: "~$15,000-20,000" },
            { category: "Savings Potential (% of salary)", countryA: "~20-30%", countryB: "~10-15%" },
          ]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Tech Job Market Size", countryA: "Largest globally", countryB: "Strong, particularly fintech" },
            { category: "Major Tech Hubs", countryA: "SF, Seattle, NYC, Austin", countryB: "London, Manchester, Edinburgh" },
            { category: "Startup Ecosystem", countryA: "World-leading VC funding", countryB: "Strong, especially fintech" },
            { category: "Remote Work Availability", countryA: "Very common", countryB: "Common" },
            { category: "Equity Compensation", countryA: "Common for tech roles", countryB: "Less common" },
            { category: "Annual Bonus Culture", countryA: "Common (10-20%)", countryB: "Common (5-15%)" },
            { category: "Notice Period", countryA: "At-will (2 weeks typical)", countryB: "1-3 months statutory" },
          ]}
        />

        <ImmigrationComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { factor: "Work Visa Type", countryA: "H-1B (lottery-based)", countryB: "Skilled Worker Visa" },
            { factor: "Visa Processing Time", countryA: "3-6 months + lottery", countryB: "2-8 weeks" },
            { factor: "Path to Permanent Residency", countryA: "EB-2/EB-3 (years)", countryB: "ILR after 5 years" },
            { factor: "Family Inclusion", countryA: "Spouse can work (H-4 EAD)", countryB: "Dependents included" },
            { factor: "Visa Cap", countryA: "85,000 annually", countryB: "No cap (points-based)" },
            { factor: "Spouse Work Rights", countryA: "H-4 EAD (with conditions)", countryB: "Full work rights" },
          ]}
        />

        <RecommendationSection
          recommendation="The United States is the stronger choice for software engineers prioritizing maximum compensation, career growth at major technology companies, and access to venture-backed startups. The United Kingdom is an excellent choice for engineers valuing work-life balance, stronger employment protections, accessible healthcare, and a more predictable immigration system. Early-career engineers seeking rapid salary growth and equity upside will find more opportunity in the US. Engineers with family considerations or those prioritizing stability may prefer the UK."
          reasons={[
            "US offers 2x+ higher nominal salaries for experienced software engineers",
            "UK provides lower cost of living outside London and accessible healthcare through NHS",
            "US tech job market is significantly larger with more opportunities at top-tier companies",
            "UK immigration system is more predictable with clearer paths to permanent residency",
            "UK offers stronger employment protections including statutory parental leave and notice periods",
            "US equity compensation can significantly increase total compensation at public and private tech companies",
          ]}
          cta={{ label: "Compare More Countries", href: "/comparisons" }}
        />

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "US Bureau of Labor Statistics - Software Developers", url: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm" },
            { label: "UK Office for National Statistics - Software Developer Earnings", url: "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earnings" },
            { label: "OECD Tax Database", url: "https://www.oecd.org/tax/tax-policy/tax-database/" },
            { label: "Numbeo Cost of Living Comparison", url: "https://www.numbeo.com/cost-of-living/" },
            { label: "UK Home Office - Skilled Worker Visa", url: "https://www.gov.uk/skilled-worker-visa" },
            { label: "USCIS - H-1B Visa Program", url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Software Engineer Hub", href: "/professions/software-engineer" },
            { label: "Software Engineer Salary US", href: "/software-engineer-salary-us" },
            { label: "Software Engineer Salary UK", href: "/software-engineer-salary-uk" },
            { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
            { label: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers" },
            { label: "Software Engineer US vs Canada", href: "/software-engineer-us-vs-canada" },
            { label: "Software Engineer US vs Australia", href: "/software-engineer-us-vs-australia" },
          ]}
        />
      </div>
      </>
  )
}