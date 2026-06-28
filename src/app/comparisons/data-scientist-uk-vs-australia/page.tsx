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

const pagePath = "/comparisons/data-scientist-uk-vs-australia"

export const metadata: Metadata = {
  title: "Data Scientist UK vs Australia: Salary & Career Comparison (2026)",
  description: "Compare data scientist salaries, taxes, cost of living, and career opportunities between the United Kingdom and Australia. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Data Scientist UK vs Australia: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of data scientist careers in the UK vs Australia. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function UKvsAustraliaPage() {
  const articleSchema = buildArticleJsonLd(
    "Data Scientist UK vs Australia: Salary & Career Comparison (2026)",
    "Compare data scientist salaries, taxes, cost of living, and career opportunities between the United Kingdom and Australia.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist UK vs Australia", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "How do data scientist salaries compare between the UK and Australia?", answer: "The average data scientist salary in the UK is approximately £55,000, while in Australia it is around A$110,000 (approximately £58,000). Salaries are broadly comparable when accounting for exchange rates, though Australia offers higher after-tax income in many cases due to lower tax rates for mid-level earners." },
    { question: "Which country has better career opportunities for data scientists?", answer: "The UK, particularly London, has a larger data science job market with strong presence in finance, tech, and consulting. Australia's data science sector is growing rapidly, with demand in banking, mining, healthcare, and government, especially in Sydney and Melbourne." },
    { question: "How does the cost of living compare for data scientists?", answer: "London is one of the most expensive cities globally, though other UK cities are more affordable. Sydney and Melbourne have high housing costs but generally lower utility and transportation expenses. Overall cost of living is comparable between major cities in both countries." },
    { question: "Which country offers better weather and lifestyle for data scientists?", answer: "Australia is known for its sunny climate, outdoor lifestyle, and strong work-life balance culture. The UK offers proximity to Europe, diverse cultural experiences, and a more temperate climate. Lifestyle preference is highly personal between these two options." },
  ]

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <HeroSection
          badge="Data Scientist Comparison"
          title="Data Scientist: United Kingdom vs Australia"
          description="A comprehensive comparison of data scientist careers in the United Kingdom and Australia. Analyze salary differences, tax implications, cost of living variations, purchasing power, and career opportunities to make an informed decision."
        />

        <CountryComparisonSection
          countries={[
            { flag: COUNTRY_A.flag, name: COUNTRY_A.name, slug: COUNTRY_A.slug },
            { flag: COUNTRY_B.flag, name: COUNTRY_B.name, slug: COUNTRY_B.slug },
          ]}
          overview="This comparison examines the key differences for data scientists between the United Kingdom and Australia. Both countries offer strong data science job markets with competitive salaries. The UK benefits from proximity to Europe and a dominant financial services sector, while Australia offers a points-based immigration system, warmer climate, and growing technology ecosystem."
        />

        <ExecutiveSummarySection
          summary="Data scientist salaries in the UK (average £55,000) and Australia (average A$110,000, approximately £58,000) are broadly comparable when accounting for exchange rates. Both countries offer excellent quality of life, universal healthcare, and strong data science job markets. The UK has a larger job market concentrated in London, while Australia offers better weather, a more relaxed lifestyle, and a straightforward immigration pathway for skilled professionals."
          metrics={[
            { label: "UK Average Salary", value: "£55,000" },
            { label: "Australia Average Salary", value: "A$110,000" },
            { label: "Salary Advantage", value: "Comparable (AU +5%)" },
          ]}
        />

        <MethodologySection
          methodology={[
            "Salary data is sourced from government labor statistics, technology industry surveys, and compensation databases.",
            "Tax calculations incorporate national income taxes and applicable regional taxes.",
            "Cost of living comparisons use Numbeo and OECD data comparing major cities.",
            "Purchasing power is calculated using purchasing power parity (PPP) principles.",
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
            { label: "Entry Level (0-2 yrs)", countryA: "£35,000", countryB: "A$60,000" },
            { label: "Mid Level (3-7 yrs)", countryA: "£55,000", countryB: "A$110,000" },
            { label: "Senior (8-15 yrs)", countryA: "£85,000", countryB: "A$155,000" },
            { label: "Top-tier (15+ yrs)", countryA: "£120,000+", countryB: "A$200,000+" },
          ]}
          notes="Salaries shown in local currency. GBP to AUD exchange rate approximately 1.92."
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Income Tax Rate (Avg Earner)", countryA: "~20% effective", countryB: "~24% effective" },
            { label: "Social Contributions", countryA: "~8% (NI contributions)", countryB: "~3.5% (Medicare Levy)" },
            { label: "Top Marginal Rate", countryA: "45% (above £125k)", countryB: "45% (top bracket)" },
            { label: "Regional Tax", countryA: "None", countryB: "None" },
            { label: "Healthcare", countryA: "NHS (tax-funded)", countryB: "Medicare (tax-funded)" },
          ]}
          notes="Both countries offer universal healthcare. UK National Insurance contributions fund the NHS, while Australia's Medicare levy funds its healthcare system."
        />

        <CostOfLivingComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Overall Cost of Living Index", countryA: "100 (baseline)", countryB: "~103" },
            { category: "Housing (City Center, 1BR)", countryA: "£1,200-2,500/mo", countryB: "A$1,800-3,000/mo" },
            { category: "Utilities (Monthly)", countryA: "£120-200", countryB: "A$140-220" },
            { category: "Groceries (Monthly)", countryA: "£250-400", countryB: "A$400-550" },
            { category: "Healthcare (Monthly)", countryA: "Covered by NHS", countryB: "Covered by Medicare" },
          ]}
        />

        <PurchasingPowerComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "PPP-adjusted Salary", countryA: "£55,000", countryB: "~£57,000 (A$ adjusted)" },
            { category: "Disposable Income After Tax & Housing", countryA: "~£15,000-22,000", countryB: "~A$25,000-35,000" },
            { category: "Savings Potential", countryA: "~10-20%", countryB: "~15-25%" },
          ]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Data Science Job Market", countryA: "Strong (finance-heavy)", countryB: "Growing (resources, banking)" },
            { category: "Major Data Science Hubs", countryA: "London, Manchester, Edinburgh", countryB: "Sydney, Melbourne, Brisbane" },
            { category: "AI Research Presence", countryA: "Strong (DeepMind, universities)", countryB: "Select universities" },
            { category: "Remote Data Science Work", countryA: "Common", countryB: "Increasingly common" },
            { category: "Equity Compensation", countryA: "Less common", countryB: "Less common" },
          ]}
        />

        <ImmigrationComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { factor: "Work Visa Type", countryA: "Skilled Worker Visa (points-based)", countryB: "Skilled visa (subclass 482/186)" },
            { factor: "Processing Time", countryA: "3-8 weeks", countryB: "3-12 months" },
            { factor: "Path to PR", countryA: "ILR after 5 years", countryB: "Subclass 186/189 (12-18 months)" },
            { factor: "Spouse Work Rights", countryA: "Full work rights", countryB: "Full work rights" },
          ]}
        />

        <RecommendationSection
          recommendation="The United Kingdom is recommended for data scientists who want to work in a global financial hub with proximity to Europe and a diverse cultural scene. Australia is recommended for data scientists who prioritize a warmer climate, outdoor lifestyle, and a more straightforward immigration system. Both countries offer strong data science job markets and excellent quality of life."
          reasons={[
            "UK has a larger financial services sector driving data science demand",
            "Australia offers a warmer climate and superior outdoor lifestyle",
            "UK provides easy access to European travel and cultural experiences",
            "Australia has a more accessible points-based immigration system",
            "Both countries offer universal healthcare and strong social safety nets",
            "Australian work culture emphasizes better work-life balance",
          ]}
          cta={{ label: "Compare More Countries", href: "/comparisons" }}
        />

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "UK Office for National Statistics", url: "https://www.ons.gov.uk" },
            { label: "Australian Bureau of Statistics", url: "https://www.abs.gov.au" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
            { label: "UK Visas and Immigration", url: "https://www.gov.uk/government/organisations/uk-visas-and-immigration" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Data Scientist Hub", href: "/professions/data-scientist" },
            { label: "Data Scientist Salary UK", href: "/data-scientist-salary-uk" },
            { label: "Data Scientist Salary Australia", href: "/data-scientist-salary-australia" },
            { label: "Data Scientist Salary Index 2026", href: "/research/data-scientist-salary-index-2026" },
            { label: "Highest Paying Countries for Data Scientists", href: "/rankings/highest-paying-countries-data-scientists" },
            { label: "Data Scientist US vs UK", href: "/comparisons/data-scientist-us-vs-uk" },
            { label: "Data Scientist US vs Australia", href: "/comparisons/data-scientist-us-vs-australia" },
          ]}
        />
      </div>
      </>
  )
}