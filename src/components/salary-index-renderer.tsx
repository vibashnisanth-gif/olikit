"use client"

import type { SalaryIndexContent, SalaryIndexRankingTable, SalaryIndexCountryScorecard, SalaryIndexProfessionScorecard, SalaryIndexRelatedResearch } from "@/lib/content/salary-index-types"
import { HeroSection } from "@/components/hero-section"
import { MethodologySection } from "@/components/methodology-section"
import { MethodologyDeepDiveSection } from "@/components/methodology-deep-dive-section"
import { CountryProfileSection } from "@/components/country-profile-section"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}

function ProseSection({ id, title, paragraphs }: { id: string; title: string; paragraphs: string[] }) {
  return (
    <Section id={id}>
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-3 text-base leading-7 text-zinc-700 last:mb-0">{p}</p>
        ))}
      </div>
    </Section>
  )
}

function ResearchMetadataBlock({ data }: { data: SalaryIndexContent["researchMetadata"] }) {
  return (
    <Section id="research-metadata">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-5 text-sm text-zinc-600 shadow-sm sm:px-8">
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
          <div><span className="font-semibold text-zinc-800">Coverage Year:</span> {data.coverageYear}</div>
          <div><span className="font-semibold text-zinc-800">Profession:</span> {data.profession}</div>
          <div><span className="font-semibold text-zinc-800">Methodology:</span> {data.methodologyVersion}</div>
          <div><span className="font-semibold text-zinc-800">Countries:</span> {data.countriesCount}</div>
          <div><span className="font-semibold text-zinc-800">Last Updated:</span> {data.lastUpdated}</div>
          <div><span className="font-semibold text-zinc-800">Data Status:</span> {data.dataStatus}</div>
        </div>
      </div>
    </Section>
  )
}

function QuickAnswersSection({ items }: { items: SalaryIndexContent["quickAnswers"] }) {
  if (!items || items.length === 0) return null
  return (
    <Section id="quick-answers">
      <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className="flex">
          <div className="w-1 shrink-0 rounded-l-xl bg-emerald-500" />
          <div className="min-w-0 flex-1 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Quick Answers</p>
            {items.map((qa, i) => (
              <div key={i} className={`${i > 0 ? "mt-6 border-t border-zinc-100 pt-6" : "mt-4"}`}>
                <h3 className="text-base font-semibold text-zinc-950">{qa.question}</h3>
                <p className="mt-1 text-base leading-7 text-zinc-800">{qa.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function comparisonArrow(insight: string): string {
  const lower = insight.toLowerCase()
  if (
    lower.includes("below") ||
    lower.includes("lowest") ||
    lower.includes("decrease") ||
    lower.includes("decline") ||
    lower.includes("downside") ||
    lower.includes("disadvantage")
  ) {
    return "↓"
  }
  return "↑"
}

function ExecutiveSummaryRenderer({ data }: { data: SalaryIndexContent["executiveSummary"] }) {
  const metrics = data.metrics
  const hasMetrics = metrics && metrics.length > 0
  const primaryMetric = hasMetrics ? metrics[0] : null
  const supportingMetrics = hasMetrics ? metrics.slice(1) : []
  const allInsights = data.insights
  const hasInsights = allInsights && allInsights.length > 0
  const showInsightList = hasInsights && allInsights.length > 1

  return (
    <Section id="executive-summary">
      <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className="flex">
          <div className="w-1 shrink-0 rounded-l-xl bg-emerald-500" />
          <div className="min-w-0 flex-1 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Executive Summary</p>

            {primaryMetric && (
              <div className="mt-4">
                <p className="max-sm:text-4xl sm:text-5xl font-bold text-zinc-950">{primaryMetric.value}</p>
                <p className="mt-1 text-lg font-medium text-zinc-800">{primaryMetric.label}</p>
              </div>
            )}

            {hasInsights && (
              <p className="mt-4 text-base font-semibold text-emerald-700">
                {comparisonArrow(allInsights[0])} {allInsights[0]}
              </p>
            )}

            {supportingMetrics.length > 0 && (
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                {supportingMetrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-sm text-zinc-600">{m.label}</p>
                    <p className="mt-0.5 text-xl font-semibold text-zinc-900">{m.value}</p>
                  </div>
                ))}
              </div>
            )}

            {data.paragraphs.length > 0 && (
              <div className="mt-6 space-y-3 border-t border-zinc-100 pt-6">
                {data.paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-7 text-zinc-700">{p}</p>
                ))}
              </div>
            )}

            {showInsightList && (
              <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Key Insights</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-zinc-700">
                  {allInsights.slice(1).map((insight, i) => (
                    <li key={i}>{insight}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 border-t border-zinc-100 pt-3">
              <p className="text-xs text-zinc-500">Updated June 2026 · Government Data Sources</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function RelocationIntelligenceGrid({ items }: { items: SalaryIndexContent["relocationIntelligence"] }) {
  return (
    <Section id="relocation-intelligence">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Relocation Intelligence</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="mb-2 text-base font-semibold text-zinc-950">{item.heading}</h3>
              <p className="text-sm leading-6 text-zinc-700">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function KeyFindingsRenderer({ items }: { items: SalaryIndexContent["keyFindings"] }) {
  return (
    <Section id="key-findings">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Findings</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((f, i) => (
          <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            {f.metric && <p className="mb-2 text-3xl font-bold text-emerald-700">{f.metric}</p>}
            <h3 className="mb-2 text-base font-semibold text-zinc-950">{f.title}</h3>
            <p className="text-sm leading-6 text-zinc-700">{f.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function MethodologyRenderer({ data }: { data: SalaryIndexContent["methodology"] }) {
  return (
    <>
      <Section id="methodology">
        <MethodologySection
          title="Methodology"
          methodology={data.overviews}
        />
      </Section>
      {data.deepDives.length > 0 && (
        <Section id="methodology-deep-dives">
          <MethodologyDeepDiveSection sections={data.deepDives} />
        </Section>
      )}
    </>
  )
}

function ResearchLimitationsSection({ data }: { data: SalaryIndexContent["researchLimitations"] }) {
  return (
    <Section id="research-limitations">
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-5 py-6 shadow-sm sm:px-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-amber-700">Important Note</p>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{data.title}</h2>
        {data.paragraphs.map((p, i) => (
          <p key={i} className="mb-3 text-sm leading-7 text-zinc-800 last:mb-0">{p}</p>
        ))}
      </div>
    </Section>
  )
}

function DataInterpretationSection({ data }: { data: SalaryIndexContent["dataInterpretationGuidance"] }) {
  return (
    <Section id="data-interpretation">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{data.title}</h2>
        {data.paragraphs.map((p, i) => (
          <p key={i} className="mb-3 text-base leading-7 text-zinc-700 last:mb-0">{p}</p>
        ))}
      </div>
    </Section>
  )
}

function RankingTable({ table }: { table: SalaryIndexRankingTable }) {
  return (
    <Section id={`table-${table.id}`}>
      <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
        <h3 className="mb-1 text-lg font-semibold text-zinc-950">{table.title}</h3>
        {table.subtitle && <p className="mb-4 text-sm text-zinc-500">{table.subtitle}</p>}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-zinc-200">
                {table.headers.map((h, i) => (
                  <th key={i} className="whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {table.rows.map((row, i) => (
                <tr key={i} className="hover:bg-zinc-50">
                  <td className="px-3 py-2.5 text-zinc-800">{row.rank}</td>
                  <td className="px-3 py-2.5">
                    <span className="mr-1.5">{row.flag}</span>
                    <span className="text-zinc-800">{row.country}</span>
                  </td>
                  {row.ogssScore !== undefined && (
                    <td className="px-3 py-2.5">
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                        {row.ogssScore.toFixed(1)}
                      </span>
                    </td>
                  )}
                  {row.nominalSalary && <td className="px-3 py-2.5 text-zinc-700">{row.nominalSalary}</td>}
                  {row.pppMultiplier && <td className="px-3 py-2.5 text-zinc-700">{row.pppMultiplier}</td>}
                  {row.taxEfficiency && <td className="px-3 py-2.5 text-zinc-700">{row.taxEfficiency}</td>}
                  {row.growthClassification && <td className="px-3 py-2.5 text-zinc-700">{row.growthClassification}</td>}
                  {row.dominantSkill && <td className="px-3 py-2.5 text-zinc-700">{row.dominantSkill}</td>}
                  {row.primaryDriver && <td className="px-3 py-2.5 text-zinc-700">{row.primaryDriver}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {table.footnote && <p className="mt-3 text-xs leading-5 text-zinc-500">{table.footnote}</p>}
      </div>
    </Section>
  )
}

function CountryScorecardCard({ card }: { card: SalaryIndexCountryScorecard }) {
  return (
    <Section id={`country-${card.slug}`}>
      <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-3xl">{card.flag}</span>
          <div>
            <h3 className="text-lg font-semibold text-zinc-950">{card.name}</h3>
            <p className="text-xs text-zinc-500">Rank #{card.overallRank} &middot; OGSS {card.ogssScore.toFixed(1)}</p>
          </div>
        </div>
        <div className="mb-4 grid gap-2 sm:grid-cols-4">
          <div className="rounded-md bg-zinc-50 p-3 text-center">
            <p className="text-xs font-semibold uppercase text-zinc-500">Gross Salary</p>
            <p className="mt-0.5 text-lg font-bold text-zinc-950">{card.grossNominalScore}</p>
          </div>
          <div className="rounded-md bg-zinc-50 p-3 text-center">
            <p className="text-xs font-semibold uppercase text-zinc-500">PPP</p>
            <p className="mt-0.5 text-lg font-bold text-zinc-950">{card.pppScore}</p>
          </div>
          <div className="rounded-md bg-zinc-50 p-3 text-center">
            <p className="text-xs font-semibold uppercase text-zinc-500">Tax Efficiency</p>
            <p className="mt-0.5 text-lg font-bold text-zinc-950">{card.taxBurdenScore}</p>
          </div>
          <div className="rounded-md bg-zinc-50 p-3 text-center">
            <p className="text-xs font-semibold uppercase text-zinc-500">Cost of Living</p>
            <p className="mt-0.5 text-lg font-bold text-zinc-950">{card.costOfLivingScore}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-1 text-xs font-semibold uppercase text-emerald-700">Strengths</p>
          <ul className="list-disc space-y-0.5 pl-5 text-sm text-zinc-700">
            {card.strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
        {card.considerations.length > 0 && (
          <div className="mb-4">
            <p className="mb-1 text-xs font-semibold uppercase text-amber-700">Considerations</p>
            <ul className="list-disc space-y-0.5 pl-5 text-sm text-zinc-700">
              {card.considerations.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        )}
        <div className="grid gap-2 sm:grid-cols-3">
          {card.salaryRange.map((s, i) => (
            <div key={i} className="rounded-md bg-blue-50 p-2.5 text-center">
              <p className="text-xs text-zinc-600">{s.profession}</p>
              <p className="text-sm font-bold text-zinc-950">{s.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function ProfessionScorecardCard({ card }: { card: SalaryIndexProfessionScorecard }) {
  return (
    <Section id={`profession-${card.slug}`}>
      <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl">{card.icon}</span>
          <h3 className="text-lg font-semibold text-zinc-950">{card.name}</h3>
        </div>
        <p className="mb-4 text-sm leading-6 text-zinc-700">{card.summary}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-md bg-zinc-50 p-3">
            <p className="text-xs font-semibold uppercase text-zinc-500">Top Country</p>
            <p className="mt-1 text-base font-bold text-zinc-950">{card.topCountry}</p>
            <p className="text-sm text-zinc-600">{card.topSalary}</p>
          </div>
          <div className="rounded-md bg-zinc-50 p-3">
            <p className="text-xs font-semibold uppercase text-zinc-500">US Average</p>
            <p className="mt-1 text-base font-bold text-zinc-950">{card.usSalary}</p>
          </div>
          <div className="rounded-md bg-zinc-50 p-3">
            <p className="text-xs font-semibold uppercase text-zinc-500">Growth Outlook</p>
            <p className="mt-1 text-base font-bold text-zinc-950">{card.growthOutlook}</p>
          </div>
          <div className="rounded-md bg-zinc-50 p-3">
            <p className="text-xs font-semibold uppercase text-zinc-500">Skills Premium</p>
            <p className="mt-1 text-base font-bold text-zinc-950">{card.skillsPremium}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function RelatedResearchSection({ items }: { items: SalaryIndexRelatedResearch[] }) {
  return (
    <Section id="related-research">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Related Research</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((r, i) => (
            <a
              key={i}
              href={r.href}
              className="group rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition hover:border-emerald-200 hover:bg-emerald-50"
            >
              <h3 className="mb-1 text-base font-semibold text-zinc-950 group-hover:text-emerald-800">{r.title}</h3>
              <p className="text-sm leading-6 text-zinc-600">{r.description}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}

function StickyToc({ items }: { items: SalaryIndexContent["toc"] }) {
  if (!items || items.length === 0) return null
  return (
    <nav className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto" aria-label="Table of contents">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">On this page</p>
      <ul className="space-y-1.5 border-l-2 border-zinc-200 pl-3">
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.id}`}
              className="block text-sm leading-5 text-zinc-600 transition hover:text-emerald-700 hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function MobileToc({ items }: { items: SalaryIndexContent["toc"] }) {
  if (!items || items.length === 0) return null
  return (
    <nav className="lg:hidden" aria-label="Mobile table of contents">
      <details className="rounded-lg border border-zinc-200 bg-white shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-zinc-800">
          Jump to section
          <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="border-t border-zinc-200 px-4 py-3">
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.id}`}
                  className="block text-sm text-zinc-600 transition hover:text-emerald-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </nav>
  )
}


interface SalaryIndexRendererProps {
  content: SalaryIndexContent
}

export function SalaryIndexRenderer({ content }: SalaryIndexRendererProps) {
  const hasLeftSidebar = content.toc && content.toc.length > 0

  return (
    <>
      <MobileToc items={content.toc} />

      <div className={`mt-6 lg:mt-0 ${hasLeftSidebar ? 'lg:grid lg:grid-cols-[220px_1fr] lg:gap-10' : ''}`}>
        {hasLeftSidebar && (
          <aside className="hidden lg:block">
            <StickyToc items={content.toc} />
          </aside>
        )}

        <div className={`space-y-12 ${hasLeftSidebar ? 'min-w-0' : ''}`}>
          <Section id="hero">
            <HeroSection
              badge={content.hero.badge}
              title={content.hero.title}
              description={content.hero.description}
            />
          </Section>

          <ExecutiveSummaryRenderer data={content.executiveSummary} />

          <ResearchMetadataBlock data={content.researchMetadata} />

          <QuickAnswersSection items={content.quickAnswers} />

          <ProseSection
            id="global-market-overview"
            title={content.globalMarketOverview.title}
            paragraphs={content.globalMarketOverview.paragraphs}
          />

          {content.professionScorecards && content.professionScorecards.length > 0 && (
            <Section id="profession-scorecards">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Profession Scorecards</h2>
              <div className="grid gap-6">
                {content.professionScorecards.map((card, i) => (
                  <ProfessionScorecardCard key={i} card={card} />
                ))}
              </div>
            </Section>
          )}

          {content.professionRankings && content.professionRankings.length > 0 && (
            <Section id="profession-rankings">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Profession Rankings</h2>
              <div className="space-y-6">
                {content.professionRankings.map((table, i) => (
                  <RankingTable key={i} table={table} />
                ))}
              </div>
            </Section>
          )}

          <ProseSection
            id="compensation-landscape"
            title={content.compensationLandscape.title}
            paragraphs={content.compensationLandscape.paragraphs}
          />

          <ProseSection
            id="tax-analysis"
            title={content.taxAndNetIncomeAnalysis.title}
            paragraphs={content.taxAndNetIncomeAnalysis.paragraphs}
          />

          <ProseSection
            id="purchasing-power"
            title={content.purchasingPowerAnalysis.title}
            paragraphs={content.purchasingPowerAnalysis.paragraphs}
          />

          <ProseSection
            id="cost-of-living"
            title={content.costOfLivingAnalysis.title}
            paragraphs={content.costOfLivingAnalysis.paragraphs}
          />

          <CountryProfileSection
            title="Country Intelligence"
            countries={content.countryIntelligence}
          />

          {content.countryScorecards && content.countryScorecards.length > 0 && (
            <Section id="country-scorecards">
              <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Country Scorecards</h2>
              <div className="grid gap-6">
                {content.countryScorecards.map((card, i) => (
                  <CountryScorecardCard key={i} card={card} />
                ))}
              </div>
            </Section>
          )}

          <RelocationIntelligenceGrid items={content.relocationIntelligence} />

          <ProseSection
            id="ecosystem-analysis"
            title={content.technologyEcosystemAnalysis.title}
            paragraphs={content.technologyEcosystemAnalysis.paragraphs}
          />

          <KeyFindingsRenderer items={content.keyFindings} />

          <MethodologyRenderer data={content.methodology} />

          <ResearchLimitationsSection data={content.researchLimitations} />

          <DataInterpretationSection data={content.dataInterpretationGuidance} />

          <Section id="faq">
            <FAQSection faqs={content.faq} />
          </Section>

          <SourcesSection sources={content.sources} />

          {content.relatedResearch && content.relatedResearch.length > 0 && (
            <RelatedResearchSection items={content.relatedResearch} />
          )}

          <RelatedPagesSection pages={content.relatedPages} />
        </div>
      </div>
    </>
  )
}
