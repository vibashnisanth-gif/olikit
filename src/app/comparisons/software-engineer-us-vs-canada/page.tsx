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
const COUNTRY_B = { flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", slug: "ca" }

const pagePath = "/comparisons/software-engineer-us-vs-canada"

export const metadata: Metadata = {
  title: "Software Engineer US vs Canada: Salary & Career Comparison (2026)",
  description: "Compare software engineer salaries, taxes, cost of living, and career opportunities between the United States and Canada. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Software Engineer US vs Canada: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of software engineer careers in the US vs Canada. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function USvsCanadaPage() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer US vs Canada: Salary & Career Comparison (2026)",
    "Compare software engineer salaries, taxes, cost of living, and career opportunities between the United States and Canada.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Comparisons", url: `${SITE_URL}/comparisons` },
    { label: "Software Engineer US vs Canada", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "How do software engineer salaries compare between the US and Canada?", answer: "The average software engineer salary in the US is approximately $120,000 USD, while in Canada it is around C$85,000 (approximately $62,000 USD). When adjusted for purchasing power, the gap narrows but the US still offers significantly higher compensation." },
    { question: "Which country is easier to immigrate to as a software engineer?", answer: "Canada has a more accessible immigration system through Express Entry and provincial nominee programs specifically designed for skilled technology workers. The US H-1B visa system is lottery-based and more unpredictable." },
    { question: "How does healthcare compare for software engineers?", answer: "Canada offers universal healthcare through its provincial systems, while US healthcare is primarily employer-based. US employers typically provide health insurance, but out-of-pocket costs can be significant." },
    { question: "Which country offers better career growth for software engineers?", answer: "The US offers a larger technology job market with more opportunities at major tech companies and startups. Canada's technology sector is growing rapidly, particularly in Toronto, Vancouver, and Montreal." },
  ]

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <HeroSection
          badge="Software Engineer Comparison"
          title="Software Engineer: United States vs Canada"
          description="A comprehensive comparison of software engineer careers in the United States and Canada. Analyze salary differences, tax implications, cost of living variations, purchasing power, and career opportunities to make an informed decision."
        />

        <CountryComparisonSection
          countries={[
            { flag: COUNTRY_A.flag, name: COUNTRY_A.name, slug: COUNTRY_A.slug },
            { flag: COUNTRY_B.flag, name: COUNTRY_B.name, slug: COUNTRY_B.slug },
          ]}
          overview="This comparison examines the key differences for software engineers between the United States and Canada. The US leads in nominal compensation and tech job density, while Canada offers a more accessible immigration system, universal healthcare, and a growing technology sector in cities like Toronto, Vancouver, and Montreal."
        />

        <ExecutiveSummarySection
          summary="US software engineers earn significantly higher salaries than their Canadian counterparts, with averages of $120,000 USD versus C$85,000 (approximately $62,000 USD). However, Canada offers universal healthcare, lower cost of living in most cities, and a more straightforward immigration pathway for skilled technology workers. The tax burden is comparable between the two countries when accounting for US state taxes and Canadian provincial taxes. For engineers prioritizing maximum compensation, the US is the clear choice. For those seeking stability, healthcare access, and easier immigration, Canada presents a compelling alternative."
          metrics={[
            { label: "US Average Salary", value: "$120,000 USD" },
            { label: "Canada Average Salary", value: "C$85,000" },
            { label: "Salary Advantage", value: "US +93%" },
          ]}
        />

        <MethodologySection
          methodology={[
            "Salary data is sourced from government labor statistics, technology industry surveys, and compensation databases.",
            "Tax calculations incorporate federal/national income taxes and state/provincial taxes.",
            "Cost of living comparisons use Numbeo and OECD data comparing major cities.",
            "Purchasing power is calculated using purchasing power parity (PPP) principles.",
          ]}
          dataSources={[
            { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
            { label: "Statistics Canada", url: "https://www.statcan.gc.ca" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
          ]}
        />

        <SalaryComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Average Salary", countryA: "$120,000 USD", countryB: "C$85,000" },
            { label: "Entry Level (0-2 yrs)", countryA: "$75,000 USD", countryB: "C$50,000" },
            { label: "Mid Level (3-7 yrs)", countryA: "$120,000 USD", countryB: "C$85,000" },
            { label: "Senior (8-15 yrs)", countryA: "$180,000 USD", countryB: "C$130,000" },
            { label: "Top-tier (15+ yrs)", countryA: "$250,000+ USD", countryB: "C$180,000+" },
          ]}
          notes="Salaries shown in local currency. USD to CAD exchange rate approximately 1.37."
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Income Tax Rate (Avg Earner)", countryA: "~22% effective", countryB: "~25% effective" },
            { label: "Social Contributions", countryA: "7.65% (FICA)", countryB: "~10% (CPP + EI)" },
            { label: "Top Marginal Rate", countryA: "37% (federal)", countryB: "~53% (fed + provincial)" },
            { label: "State/Provincial Tax", countryA: "0-13.3%", countryB: "5-25%" },
            { label: "Healthcare", countryA: "Employer-based insurance", countryB: "Universal (tax-funded)" },
          ]}
          notes="Canadian top marginal rates are higher but include universal healthcare coverage."
        />

        <CostOfLivingComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Overall Cost of Living Index", countryA: "100 (baseline)", countryB: "~87" },
            { category: "Housing (City Center, 1BR)", countryA: "$1,800-3,500/mo", countryB: "C$1,800-2,800/mo" },
            { category: "Utilities (Monthly)", countryA: "$150-250", countryB: "C$120-200" },
            { category: "Groceries (Monthly)", countryA: "$400-600", countryB: "C$350-500" },
            { category: "Healthcare (Monthly)", countryA: "$200-500 (insurance)", countryB: "Covered by taxes" },
          ]}
        />

        <PurchasingPowerComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "PPP-adjusted Salary", countryA: "$120,000", countryB: "~$97,000 (C$ adjusted)" },
            { category: "Disposable Income After Tax & Housing", countryA: "~$35,000-45,000", countryB: "~$18,000-25,000" },
            { category: "Savings Potential", countryA: "~20-30%", countryB: "~10-20%" },
          ]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "Tech Job Market Size", countryA: "Largest globally", countryB: "Growing rapidly" },
            { category: "Major Tech Hubs", countryA: "SF, Seattle, NYC, Austin", countryB: "Toronto, Vancouver, Montreal" },
            { category: "Startup Ecosystem", countryA: "World-leading", countryB: "Strong and growing" },
            { category: "Remote Work", countryA: "Very common", countryB: "Common" },
            { category: "Equity Compensation", countryA: "Very common", countryB: "Increasingly common" },
          ]}
        />

        <ImmigrationComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { factor: "Work Visa Type", countryA: "H-1B (lottery-based)", countryB: "Express Entry / CUSMA" },
            { factor: "Processing Time", countryA: "3-6 months + lottery", countryB: "2-6 months" },
            { factor: "Path to PR", countryA: "EB-2/EB-3 (years)", countryB: "Express Entry (6-12 months)" },
            { factor: "Spouse Work Rights", countryA: "H-4 EAD (conditional)", countryB: "Full work rights" },
          ]}
        />

        <RecommendationSection
          recommendation="The United States is recommended for software engineers who prioritize maximum earning potential and career growth at leading technology companies. Canada is recommended for engineers who value accessible healthcare, a more predictable immigration pathway, and a better work-life balance. For Canadian engineers or US engineers considering relocation, the choice depends primarily on career ambitions versus quality-of-life priorities."
          reasons={[
            "US offers significantly higher salaries, especially at senior levels",
            "Canada provides universal healthcare and stronger social safety net",
            "US has a larger concentration of major technology employers",
            "Canada offers clearer and faster immigration pathways for skilled workers",
            "Cost of living in Canadian cities outside Toronto/Vancouver is more affordable",
            "Canadian work culture generally emphasizes better work-life balance",
          ]}
          cta={{ label: "Compare More Countries", href: "/comparisons" }}
        />

        <FAQSection faqs={faqs} />

        <SourcesSection
          sources={[
            { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
            { label: "Statistics Canada", url: "https://www.statcan.gc.ca" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
            { label: "Canada Express Entry", url: "https://www.canada.ca/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" },
          ]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Software Engineer Hub", href: "/professions/software-engineer" },
            { label: "Software Engineer Salary US", href: "/software-engineer-salary-us" },
            { label: "Software Engineer Salary Canada", href: "/software-engineer-salary-canada" },
            { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
            { label: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers" },
            { label: "Software Engineer US vs UK", href: "/comparisons/software-engineer-us-vs-uk" },
            { label: "Software Engineer US vs Australia", href: "/comparisons/software-engineer-us-vs-australia" },
          ]}
        />
      </div>
    </Shell>
  )
}
