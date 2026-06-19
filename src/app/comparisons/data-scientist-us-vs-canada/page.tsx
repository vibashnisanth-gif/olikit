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

const pagePath = "/comparisons/data-scientist-us-vs-canada"

export const metadata: Metadata = {
    title: "Data Scientist Salary: US vs Canada 2026 Comparison",

  description: "An institutional comparison of Data Scientist salaries, taxes, purchasing power, and visa pathways between the United States and Canada in 2026.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
  title: "Data Scientist Salary: US vs Canada 2026 Comparison",

    description: "Institutional comparison of Data Scientist salaries, taxes, purchasing power, and visa pathways between the United States and Canada in 2026.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function DataScientistUSvsCanada() {
  const articleSchema = buildArticleJsonLd(
    "Data Scientist Market Analysis: United States vs. Canada (2026)",
    "An institutional comparison of Data Scientist salaries, taxes, purchasing power, and visa pathways between the United States and Canada in 2026.",
    pagePath,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Data Scientist US vs Canada", url: `${SITE_URL}${pagePath}` },
  ])

  const faqs = [
    { question: "How do data scientist salaries compare between the US and Canada?", answer: "The United States offers significantly higher compensation. A mid-level data scientist earns approximately $142,000 USD in the US versus C$88,000 (~$65,000 USD) in Canada. When adjusted for purchasing power, the US still maintains a substantial advantage." },
    { question: "How does tax affect take-home pay for data scientists in the US vs Canada?", answer: "US effective tax rates are approximately 25-28% for a $142,000 earner, while Canadian rates are 30-33% for an equivalent earner. Canada's higher taxes fund universal healthcare, which offsets some of the personal cost." },
    { question: "Which country offers better immigration pathways for data scientists?", answer: "Canada offers significantly better immigration pathways. The Express Entry system and Provincial Nominee Programs actively target STEM professionals. For a foreign national, acquiring permanent residency in Canada is a points-based system, whereas the US relies heavily on the H-1B lottery." },
    { question: "Which country offers better career growth for data scientists?", answer: "The US offers stronger career growth due to unmatched employer density in AI and machine learning. However, Canadian citizens can leverage the TN visa (USMCA) to work in the US, accessing US salaries while maintaining their Canadian safety net." },
  ]

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <HeroSection
          badge="Data Scientist Comparison"
          title="Data Scientist Market Analysis: United States vs. Canada (2026)"
          description="The North American tech corridor is heavily integrated, yet the financial and legal realities for Data Scientists in the United States and Canada differ drastically. While the US offers unparalleled compensation, Canada provides a highly predictable, points-based immigration system that attracts top-tier global talent."
        />

        <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 shadow-sm sm:px-10">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Olikit Framework Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th className="px-4 py-3 text-left font-medium text-zinc-700">Metric</th>
                  <th className="px-4 py-3 text-right font-medium text-zinc-700">United States</th>
                  <th className="px-4 py-3 text-right font-medium text-zinc-700">Canada</th>
                  <th className="px-4 py-3 text-right font-medium text-zinc-700">Edge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Olikit Comp. Score</td><td className="px-4 py-3 text-right text-zinc-950">98/100</td><td className="px-4 py-3 text-right text-zinc-950">75/100</td><td className="px-4 py-3 text-right font-semibold text-emerald-600">US</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Olikit PPP Score</td><td className="px-4 py-3 text-right text-zinc-950">85/100</td><td className="px-4 py-3 text-right text-zinc-950">68/100</td><td className="px-4 py-3 text-right font-semibold text-emerald-600">US</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Olikit Reloc. Score</td><td className="px-4 py-3 text-right text-zinc-950">65/100</td><td className="px-4 py-3 text-right text-zinc-950">92/100</td><td className="px-4 py-3 text-right font-semibold text-emerald-600">Canada</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Olikit Career Score</td><td className="px-4 py-3 text-right text-zinc-950">99/100</td><td className="px-4 py-3 text-right text-zinc-950">80/100</td><td className="px-4 py-3 text-right font-semibold text-emerald-600">US</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <CountryComparisonSection
          countries={[
            { flag: COUNTRY_A.flag, name: COUNTRY_A.name, slug: COUNTRY_A.slug },
            { flag: COUNTRY_B.flag, name: COUNTRY_B.name, slug: COUNTRY_B.slug },
          ]}
          overview="This institutional comparison examines the key differences for Data Scientists between the United States and Canada. The US yields an Olikit Net Earning Power roughly 60-70% higher than Canada for equivalent roles. However, Canada provides a significantly less hostile and more transparent immigration framework via Express Entry, and universal healthcare eliminates a major personal expense."
        />

        <ExecutiveSummarySection
          summary="The United States yields an Olikit Net Earning Power roughly 60-70% higher than Canada for equivalent Data Scientist roles. The average US data scientist earns approximately $142,000 USD compared to C$88,000 in Canada. US effective tax rates of 25-28% are marginally lower than Canada's 30-33%, but this gap is partially offset by Canada's universal healthcare system. However, the high cost of housing in Toronto and Vancouver severely suppresses the Olikit Purchasing Power Score for Canadian Data Scientists."
          metrics={[
            { label: "US Average Salary", value: "$142,000 USD" },
            { label: "Canada Average Salary", value: "C$88,000" },
            { label: "Salary Advantage", value: "US +60%" },
          ]}
        />

        <MethodologySection
          methodology={[
            "Salary data is sourced from government labor statistics, technology industry surveys, and compensation databases for 2025-2026.",
            "Tax calculations incorporate federal/national income taxes, state/provincial taxes where applicable, and mandatory social contributions.",
            "Cost of living comparisons use Numbeo and OECD data comparing major cities and national averages.",
            "Purchasing power is calculated by adjusting nominal salaries for local price levels using purchasing power parity (PPP) principles.",
          ]}
          dataSources={[
            { label: "US Bureau of Labor Statistics", url: "https://www.bls.gov" },
            { label: "Statistics Canada", url: "https://www.statcan.gc.ca" },
            { label: "OECD Tax Database", url: "https://www.oecd.org/tax/" },
            { label: "Numbeo Cost of Living", url: "https://www.numbeo.com" },
          ]}
        />

        <SalaryComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Average Salary", countryA: "$142,000 USD", countryB: "C$88,000" },
            { label: "Entry Level (0-2 yrs)", countryA: "$98,000 USD", countryB: "C$55,000" },
            { label: "Mid Level (3-5 yrs)", countryA: "$142,000 USD", countryB: "C$88,000" },
            { label: "Senior (5+ yrs)", countryA: "$210,000+ USD", countryB: "C$135,000+" },
          ]}
          notes="Salaries shown in local currency. USD to CAD exchange rate approximately 1.37."
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { label: "Income Tax Rate (Avg Earner)", countryA: "~25-28% effective", countryB: "~30-33% effective" },
            { label: "Social Contributions", countryA: "7.65% (FICA)", countryB: "~10% (CPP + EI)" },
            { label: "Top Marginal Rate", countryA: "37% (federal)", countryB: "~53% (fed + provincial)" },
            { label: "State/Provincial Tax", countryA: "0-13.3%", countryB: "5-25%" },
            { label: "Healthcare", countryA: "Employer-based + co-pay", countryB: "Universal (tax-funded)" },
          ]}
          notes="US effective rates are lower but exclude significant healthcare costs paid via employer co-pays and deductibles."
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
            { category: "PPP-adjusted Salary", countryA: "$142,000", countryB: "~$97,000 (C$ adjusted)" },
            { category: "Disposable Income After Tax & Housing", countryA: "~$40,000-50,000", countryB: "~$20,000-28,000" },
            { category: "Savings Potential (% of salary)", countryA: "~20-30%", countryB: "~10-18%" },
          ]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[
            { category: "AI/ML Job Market Size", countryA: "Largest globally", countryB: "Growing rapidly" },
            { category: "Major Tech Hubs", countryA: "SF, Seattle, NYC, Austin", countryB: "Toronto, Vancouver, Montreal" },
            { category: "Startup Ecosystem", countryA: "World-leading VC funding", countryB: "Strong and growing" },
            { category: "Data Science Density", countryA: "Extremely high", countryB: "High in major cities" },
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
          recommendation="The United States is recommended for data scientists who prioritize maximum earning potential and career growth at leading AI/ML companies. Canada is recommended for data scientists who value accessible healthcare, a more predictable immigration pathway, and a better work-life balance. Canadian citizens frequently leverage the TN visa (under USMCA) to work in the US, capturing US salaries while maintaining their Canadian safety net."
          reasons={[
            "US offers significantly higher salaries, especially at senior levels with equity compensation",
            "Canada provides universal healthcare and stronger social safety net",
            "US has a larger concentration of major AI/ML employers and research labs",
            "Canada offers clearer and faster immigration pathways via Express Entry",
            "Cost of living in Canadian cities outside Toronto/Vancouver is more affordable",
            "Canadian data scientists can access US roles via the TN visa (USMCA)",
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
            { label: "Data Scientist Hub", href: "/professions/data-scientist" },
            { label: "Data Scientist Salary US", href: "/data-scientist-salary-us" },
            { label: "Data Scientist Salary Canada", href: "/data-scientist-salary-canada" },
            { label: "Olikit Global Data Scientist Index 2026", href: "/research/data-scientist-salary-index-2026" },
            { label: "Highest Paying Countries for Data Scientists", href: "/rankings/highest-paying-countries-data-scientists" },
            { label: "Data Scientist US vs UK", href: "/comparisons/data-scientist-us-vs-uk" },
          ]}
        />
      </div>
    </Shell>
  )
}
