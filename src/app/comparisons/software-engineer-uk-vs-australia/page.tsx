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

const COUNTRY_A = { flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", slug: "uk" }
const COUNTRY_B = { flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", slug: "au" }

export const metadata: Metadata = {
  title: "Software Engineer UK vs Australia: Salary & Career Comparison (2026)",
  description: "Compare software engineer salaries, taxes, cost of living, and career opportunities between the United Kingdom and Australia. Data-driven analysis for informed career decisions.",
  alternates: { canonical: `${SITE_URL}/comparisons/software-engineer-uk-vs-australia` },
  openGraph: {
    title: "Software Engineer UK vs Australia: Salary & Career Comparison (2026) | Olikit",
    description: "Detailed comparison of software engineer careers in the UK vs Australia. Salary, tax, cost of living, and opportunity analysis.",
    url: `${SITE_URL}/comparisons/software-engineer-uk-vs-australia`,
    siteName: "Olikit",
    type: "website",
  },
}

export default function UKvsAustraliaPage() {
  return (
    <Shell>
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
          overview="BLOCKED — Awaiting Content. This comparison examines the key differences for software engineers between the United Kingdom and Australia."
        />

        <ExecutiveSummarySection
          summary="BLOCKED — Awaiting Content. Executive summary comparing software engineer careers in the UK vs Australia."
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
            { label: "Software Engineer Salary UK", href: "/software-engineer-salary-uk" },
            { label: "Software Engineer Salary Australia", href: "/software-engineer-salary-australia" },
            { label: "Software Engineer Salary Index 2026", href: "/research/software-engineer-salary-index-2026" },
            { label: "Highest Paying Countries", href: "/rankings/highest-paying-countries-software-engineers" },
            { label: "Software Engineer India vs Singapore", href: "/comparisons/software-engineer-india-vs-singapore" },
          ]}
        />
      </div>
    </Shell>
  )
}
