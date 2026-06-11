import type { SalaryIndexContent } from "@/lib/content/salary-index-types"
import { HeroSection } from "@/components/hero-section"
import { ExecutiveSummarySection } from "@/components/executive-summary-section"
import { MethodologySection } from "@/components/methodology-section"
import { MethodologyDeepDiveSection } from "@/components/methodology-deep-dive-section"
import { ResearchFindingsSection } from "@/components/research-findings-section"
import { CountryProfileSection } from "@/components/country-profile-section"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

function ProseSection({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-sm leading-7 text-zinc-600 last:mb-0">{p}</p>
      ))}
    </section>
  )
}

function ResearchMetadataBlock({ data }: { data: SalaryIndexContent["researchMetadata"] }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-4 text-xs text-zinc-500 sm:px-8">
      <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
        <div><span className="font-semibold text-zinc-700">Coverage Year:</span> {data.coverageYear}</div>
        <div><span className="font-semibold text-zinc-700">Profession:</span> {data.profession}</div>
        <div><span className="font-semibold text-zinc-700">Methodology:</span> {data.methodologyVersion}</div>
        <div><span className="font-semibold text-zinc-700">Countries:</span> {data.countriesCount}</div>
        <div><span className="font-semibold text-zinc-700">Last Updated:</span> {data.lastUpdated}</div>
        <div><span className="font-semibold text-zinc-700">Data Status:</span> {data.dataStatus}</div>
      </div>
    </section>
  )
}

function QuickAnswersSection({ items }: { items: SalaryIndexContent["quickAnswers"] }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 px-5 py-4 sm:px-8">
        <h2 className="text-xl font-semibold text-zinc-950">Quick Answers</h2>
      </div>
      <div className="divide-y divide-zinc-100">
        {items.map((qa, i) => (
          <div key={i} className="px-5 py-4 sm:px-8">
            <h3 className="mb-1.5 text-sm font-semibold text-zinc-950">{qa.question}</h3>
            <p className="text-sm leading-7 text-zinc-600">{qa.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ExecutiveSummaryRenderer({ data }: { data: SalaryIndexContent["executiveSummary"] }) {
  const paragraphs = data.paragraphs
  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Executive Summary</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-sm leading-7 text-zinc-600 last:mb-0">{p}</p>
      ))}
      {data.insights && data.insights.length > 0 && (
        <div className="mt-5 space-y-3 rounded-md border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Key Quotable Insights</p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            {data.insights.map((insight, i) => (
              <li key={i}>{insight}</li>
            ))}
          </ul>
        </div>
      )}
      {data.metrics && data.metrics.length > 0 && (
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {data.metrics.map((m, i) => (
            <div key={i} className="rounded-md border border-zinc-200 bg-white p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{m.label}</p>
              <p className="mt-1 text-2xl font-bold text-zinc-950">{m.value}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function RelocationIntelligenceGrid({ items }: { items: SalaryIndexContent["relocationIntelligence"] }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Relocation Intelligence</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={i} className="rounded-md border border-zinc-200 bg-white p-4">
            <h3 className="mb-1.5 text-sm font-semibold text-zinc-950">{item.heading}</h3>
            <p className="text-xs leading-6 text-zinc-600">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function KeyFindingsRenderer({ items }: { items: SalaryIndexContent["keyFindings"] }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Findings</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((f, i) => (
          <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            {f.metric && <p className="text-3xl font-bold text-emerald-700">{f.metric}</p>}
            <h3 className="mb-2 text-sm font-semibold text-zinc-950">{f.title}</h3>
            <p className="text-sm leading-6 text-zinc-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function MethodologyRenderer({ data }: { data: SalaryIndexContent["methodology"] }) {
  return (
    <>
      <MethodologySection
        title="Methodology"
        methodology={data.overviews}
      />
      {data.deepDives.length > 0 && (
        <MethodologyDeepDiveSection sections={data.deepDives} />
      )}
    </>
  )
}

function ResearchLimitationsSection({ data }: { data: SalaryIndexContent["researchLimitations"] }) {
  return (
    <section className="rounded-lg border border-amber-200 bg-amber-50 px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{data.title}</h2>
      {data.paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-sm leading-7 text-zinc-700 last:mb-0">{p}</p>
      ))}
    </section>
  )
}

function DataInterpretationSection({ data }: { data: SalaryIndexContent["dataInterpretationGuidance"] }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{data.title}</h2>
      {data.paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-sm leading-7 text-zinc-600 last:mb-0">{p}</p>
      ))}
    </section>
  )
}

interface SalaryIndexRendererProps {
  content: SalaryIndexContent
}

export function SalaryIndexRenderer({ content }: SalaryIndexRendererProps) {
  return (
    <div className="space-y-12">
      <HeroSection
        badge={content.hero.badge}
        title={content.hero.title}
        description={content.hero.description}
      />

      <ExecutiveSummaryRenderer data={content.executiveSummary} />

      <ResearchMetadataBlock data={content.researchMetadata} />

      <QuickAnswersSection items={content.quickAnswers} />

      <ProseSection
        title={content.globalMarketOverview.title}
        paragraphs={content.globalMarketOverview.paragraphs}
      />

      <ProseSection
        title={content.compensationLandscape.title}
        paragraphs={content.compensationLandscape.paragraphs}
      />

      <ProseSection
        title={content.taxAndNetIncomeAnalysis.title}
        paragraphs={content.taxAndNetIncomeAnalysis.paragraphs}
      />

      <ProseSection
        title={content.purchasingPowerAnalysis.title}
        paragraphs={content.purchasingPowerAnalysis.paragraphs}
      />

      <ProseSection
        title={content.costOfLivingAnalysis.title}
        paragraphs={content.costOfLivingAnalysis.paragraphs}
      />

      <CountryProfileSection
        title="Country Intelligence"
        countries={content.countryIntelligence}
      />

      <RelocationIntelligenceGrid items={content.relocationIntelligence} />

      <ProseSection
        title={content.technologyEcosystemAnalysis.title}
        paragraphs={content.technologyEcosystemAnalysis.paragraphs}
      />

      <KeyFindingsRenderer items={content.keyFindings} />

      <MethodologyRenderer data={content.methodology} />

      <ResearchLimitationsSection data={content.researchLimitations} />

      <DataInterpretationSection data={content.dataInterpretationGuidance} />

      <FAQSection faqs={content.faq} />

      <SourcesSection sources={content.sources} />

      <RelatedPagesSection pages={content.relatedPages} />
    </div>
  )
}
