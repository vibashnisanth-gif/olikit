import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
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

export const metadata: Metadata = {
  title: "Software Engineer US vs Canada: Salary & Career Comparison (2026)",
  description: "Compare software engineer salaries, taxes, cost of living, and career opportunities between the United States and Canada. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}/comparisons/software-engineer-us-vs-canada` },
  openGraph: {
    title: "Software Engineer US vs Canada: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of software engineer careers in the US vs Canada. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}/comparisons/software-engineer-us-vs-canada`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function USvsCanadaPage() {
  return (
    <Shell>
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
          overview="BLOCKED — Awaiting Content. This comparison examines the key differences for software engineers between the United States and Canada."
        />

        <ExecutiveSummarySection
          summary="BLOCKED — Awaiting Content. Executive summary comparing software engineer careers in the US vs Canada."
        />

        <MethodologySection
          methodology={[
            "BLOCKED — Awaiting Content. Salary comparison methodology will be described here.",
            "BLOCKED — Awaiting Content. Tax calculation methodology will be described here.",
            "BLOCKED — Awaiting Content. Cost of living methodology will be described here.",
          ]}
        />

        <SalaryComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[]}
        />

        <TaxComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[]}
        />

        <CostOfLivingComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[]}
        />

        <PurchasingPowerComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[]}
        />

        <CareerOpportunityComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[]}
        />

        <ImmigrationComparisonSection
          countryA={COUNTRY_A}
          countryB={COUNTRY_B}
          rows={[]}
        />

        <RecommendationSection
          recommendation="BLOCKED — Awaiting Content. A recommendation will be provided based on career priorities."
          reasons={[]}
        />

        <FAQSection
          faqs={[]}
        />

        <SourcesSection
          sources={[]}
        />

        <RelatedPagesSection
          pages={[
            { label: "Software Engineer Hub", href: "/professions/software-engineer" },
            { label: "Software Engineer Salary US", href: "/software-engineer-salary-us" },
            { label: "Software Engineer Salary Canada", href: "/software-engineer-salary-canada" },
            { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
            { label: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers" },
            { label: "Software Engineer US vs Australia", href: "/comparisons/software-engineer-us-vs-australia" },
          ]}
        />
      </div>
    </Shell>
  )
}
