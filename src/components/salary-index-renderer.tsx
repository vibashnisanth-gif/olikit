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
import { Card } from "@/components/ui/card"
import { FadeInSection } from "@/components/ui/fade-in-section"

function ProseSection({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-primary px-6 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-sm leading-7 text-text-secondary last:mb-0">{p}</p>
      ))}
    </section>
  )
}

function ResearchMetadataBlock({ data }: { data: SalaryIndexContent["researchMetadata"] }) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-secondary px-6 py-4 text-xs text-text-muted sm:px-8">
      <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
        <div><span className="font-semibold text-text-secondary">Coverage Year:</span> {data.coverageYear}</div>
        <div><span className="font-semibold text-text-secondary">Profession:</span> {data.profession}</div>
        <div><span className="font-semibold text-text-secondary">Methodology:</span> {data.methodologyVersion}</div>
        <div><span className="font-semibold text-text-secondary">Countries:</span> {data.countriesCount}</div>
        <div><span className="font-semibold text-text-secondary">Last Updated:</span> {data.lastUpdated}</div>
        <div><span className="font-semibold text-text-secondary">Data Status:</span> {data.dataStatus}</div>
      </div>
    </section>
  )
}

function QuickAnswersSection({ items }: { items: SalaryIndexContent["quickAnswers"] }) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-primary shadow-sm">
      <div className="border-b border-border-light px-6 py-4 sm:px-8">
        <h2 className="text-xl font-semibold tracking-tight text-text-primary">Quick Answers</h2>
      </div>
      <div className="divide-y divide-border-light">
        {items.map((qa, i) => (
          <div key={i} className="px-6 py-4 sm:px-8">
            <h3 className="mb-1.5 text-sm font-semibold text-text-primary">{qa.question}</h3>
            <p className="text-sm leading-7 text-text-secondary">{qa.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ExecutiveSummaryRenderer({ data }: { data: SalaryIndexContent["executiveSummary"] }) {
  const paragraphs = data.paragraphs
  return (
    <section className="rounded-xl border border-border-light bg-surface-secondary px-6 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">Executive Summary</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-sm leading-7 text-text-secondary last:mb-0">{p}</p>
      ))}
      {data.insights && data.insights.length > 0 && (
        <div className="mt-5 space-y-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Key Quotable Insights</p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-text-secondary">
            {data.insights.map((insight, i) => (
              <li key={i}>{insight}</li>
            ))}
          </ul>
        </div>
      )}
      {data.metrics && data.metrics.length > 0 && (
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {data.metrics.map((m, i) => (
            <div key={i} className="rounded-xl border border-border-light bg-surface-primary p-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{m.label}</p>
              <p className="mt-1 text-2xl font-bold text-text-primary">{m.value}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function RelocationIntelligenceGrid({ items }: { items: SalaryIndexContent["relocationIntelligence"] }) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-tertiary px-6 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">Relocation Intelligence</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-border-light bg-surface-primary p-4 shadow-sm">
            <h3 className="mb-1.5 text-sm font-semibold text-text-primary">{item.heading}</h3>
            <p className="text-xs leading-6 text-text-secondary">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function KeyFindingsRenderer({ items }: { items: SalaryIndexContent["keyFindings"] }) {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-text-primary">Key Findings</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((f, i) => (
          <Card key={i} hover>
            {f.metric && <p className="text-3xl font-bold text-emerald-700 mb-2">{f.metric}</p>}
            <h3 className="mb-2 text-sm font-semibold text-text-primary">{f.title}</h3>
            <p className="text-sm leading-6 text-text-secondary">{f.description}</p>
          </Card>
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
    <section className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">{data.title}</h2>
      {data.paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-sm leading-7 text-text-secondary last:mb-0">{p}</p>
      ))}
    </section>
  )
}

function DataInterpretationSection({ data }: { data: SalaryIndexContent["dataInterpretationGuidance"] }) {
  return (
    <section className="rounded-xl border border-border-light bg-surface-primary px-6 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">{data.title}</h2>
      {data.paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-sm leading-7 text-text-secondary last:mb-0">{p}</p>
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
      <FadeInSection>
        <HeroSection
          badge={content.hero.badge}
          title={content.hero.title}
          description={content.hero.description}
        />
      </FadeInSection>

      <FadeInSection>
        <ExecutiveSummaryRenderer data={content.executiveSummary} />
      </FadeInSection>

      <FadeInSection>
        <ResearchMetadataBlock data={content.researchMetadata} />
      </FadeInSection>

      <FadeInSection>
        <QuickAnswersSection items={content.quickAnswers} />
      </FadeInSection>

      <FadeInSection>
        <ProseSection
          title={content.globalMarketOverview.title}
          paragraphs={content.globalMarketOverview.paragraphs}
        />
      </FadeInSection>

      <FadeInSection>
        <ProseSection
          title={content.compensationLandscape.title}
          paragraphs={content.compensationLandscape.paragraphs}
        />
      </FadeInSection>

      <FadeInSection>
        <ProseSection
          title={content.taxAndNetIncomeAnalysis.title}
          paragraphs={content.taxAndNetIncomeAnalysis.paragraphs}
        />
      </FadeInSection>

      <FadeInSection>
        <ProseSection
          title={content.purchasingPowerAnalysis.title}
          paragraphs={content.purchasingPowerAnalysis.paragraphs}
        />
      </FadeInSection>

      <FadeInSection>
        <ProseSection
          title={content.costOfLivingAnalysis.title}
          paragraphs={content.costOfLivingAnalysis.paragraphs}
        />
      </FadeInSection>

      <FadeInSection>
        <CountryProfileSection
          title="Country Intelligence"
          countries={content.countryIntelligence}
        />
      </FadeInSection>

      <FadeInSection>
        <RelocationIntelligenceGrid items={content.relocationIntelligence} />
      </FadeInSection>

      <FadeInSection>
        <ProseSection
          title={content.technologyEcosystemAnalysis.title}
          paragraphs={content.technologyEcosystemAnalysis.paragraphs}
        />
      </FadeInSection>

      <FadeInSection>
        <KeyFindingsRenderer items={content.keyFindings} />
      </FadeInSection>

      <FadeInSection>
        <MethodologyRenderer data={content.methodology} />
      </FadeInSection>

      <FadeInSection>
        <ResearchLimitationsSection data={content.researchLimitations} />
      </FadeInSection>

      <FadeInSection>
        <DataInterpretationSection data={content.dataInterpretationGuidance} />
      </FadeInSection>

      <FadeInSection>
        <FAQSection faqs={content.faq} />
      </FadeInSection>

      <FadeInSection>
        <SourcesSection sources={content.sources} />
      </FadeInSection>

      <FadeInSection>
        <RelatedPagesSection pages={content.relatedPages} />
      </FadeInSection>
    </div>
  )
}
