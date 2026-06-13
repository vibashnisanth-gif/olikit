"use client"

import type { ProfessionPageContent } from "@/types/profession-page"
import { HeroSection } from "@/components/hero-section"
import { FAQSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { RelatedPagesSection } from "@/components/related-pages-section"
import { MethodologySection } from "@/components/methodology-section"

function KeyTakeawaysSection({ items }: { items: { title: string; description: string }[] }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-base font-semibold text-zinc-950">{item.title}</h3>
            <p className="text-sm leading-6 text-zinc-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SalaryCardsSection({ cards }: { cards: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {cards.map((card, i) => (
        <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">{card.label}</p>
          <p className="mt-1.5 text-3xl font-bold text-zinc-950">{card.value}</p>
        </div>
      ))}
    </div>
  )
}

function ProseSection({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-base leading-7 text-zinc-700 last:mb-0">{p}</p>
      ))}
    </section>
  )
}

function SalaryTableSection({ table }: { table: NonNullable<ProfessionPageContent["salaryTable"]> }) {
  const headers = table.headers
  const keys = Object.keys(table.rows[0] || {})
  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{table.title}</h2>
      <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-100">
              {headers.map((h, i) => (
                <th key={i} className={"px-4 py-3 font-medium text-zinc-700 " + (i === 0 ? "text-left" : "text-right")}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-t border-zinc-100">
                {keys.map((key, j) => (
                  <td key={j} className={"px-4 py-3 " + (j === 0 ? "font-medium text-zinc-950 text-left" : "text-right text-zinc-950")}>{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function ComparisonTableSection({ table }: { table: NonNullable<ProfessionPageContent["comparisonTable"]> }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{table.title}</h2>
      <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-100">
              <th className="px-4 py-3 text-left font-medium text-zinc-700">Category</th>
              <th className="px-4 py-3 text-right font-medium text-zinc-700">Country A</th>
              <th className="px-4 py-3 text-right font-medium text-zinc-700">Country B</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-t border-zinc-100">
                <td className="px-4 py-3 font-medium text-zinc-950">{row.category}</td>
                <td className="px-4 py-3 text-right text-zinc-950">{row.valueA}</td>
                <td className="px-4 py-3 text-right text-zinc-950">{row.valueB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function CountryRankingSection({ ranking }: { ranking: NonNullable<ProfessionPageContent["countryRanking"]> }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{ranking.title}</h2>
      <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-100">
              <th className="px-4 py-3 text-left font-medium text-zinc-700">Rank</th>
              <th className="px-4 py-3 text-left font-medium text-zinc-700">Country</th>
              <th className="px-4 py-3 text-right font-medium text-zinc-700">Average Salary</th>
            </tr>
          </thead>
          <tbody>
            {ranking.entries.map((entry, i) => (
              <tr key={i} className="border-t border-zinc-100">
                <td className="px-4 py-3 font-medium text-zinc-500">{"#" + entry.rank}</td>
                <td className="px-4 py-3 font-medium text-zinc-950">{entry.flag} {entry.name}</td>
                <td className="px-4 py-3 text-right text-zinc-950">{entry.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function CountryCardsSection({ data }: { data: NonNullable<ProfessionPageContent["countryCards"]> }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{data.title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.countries.map((c, i) => (
          <div key={i} className="rounded-md border border-zinc-200 bg-white p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{c.flag}</span>
              <h3 className="font-semibold text-sm text-zinc-950">{c.name}</h3>
            </div>
            <p className="text-xs leading-5 text-zinc-600 mb-3">{c.summary}</p>
            <div className="grid grid-cols-2 gap-2">
              {c.metrics.map((m, j) => (
                <div key={j}>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{m.label}</p>
                  <p className="text-sm font-semibold text-zinc-950">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function InsightsSection({ items }: { items: string[] }) {
  return (
    <section className="rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-6 shadow-sm sm:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Insights</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-800">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

interface ProfessionPageRendererProps {
  content: ProfessionPageContent
}

export function ProfessionPageRenderer({ content }: ProfessionPageRendererProps) {
  return (
    <div className="space-y-12">
      <HeroSection
        badge={content.hero.badge}
        title={content.hero.title}
        description={content.hero.description}
        cta={content.hero.cta}
        secondaryCta={content.hero.secondaryCta}
      />

      {content.salaryCards && content.salaryCards.length > 0 && (
        <SalaryCardsSection cards={content.salaryCards} />
      )}

      {content.keyTakeaways && content.keyTakeaways.length > 0 && (
        <KeyTakeawaysSection items={content.keyTakeaways} />
      )}

      {content.insights && content.insights.length > 0 && (
        <InsightsSection items={content.insights} />
      )}

      {content.proseSections && content.proseSections.map((section, i) => (
        <ProseSection key={i} title={section.title} paragraphs={section.paragraphs} />
      ))}

      {content.salaryTable && (
        <SalaryTableSection table={content.salaryTable} />
      )}

      {content.comparisonTable && (
        <ComparisonTableSection table={content.comparisonTable} />
      )}

      {content.countryRanking && (
        <CountryRankingSection ranking={content.countryRanking} />
      )}

      {content.countryCards && (
        <CountryCardsSection data={content.countryCards} />
      )}

      {content.faqs && content.faqs.length > 0 && (
        <FAQSection faqs={content.faqs} />
      )}

      {content.methodology && content.methodology.length > 0 && (
        <MethodologySection title="Methodology" methodology={content.methodology} />
      )}

      {content.sources && content.sources.length > 0 && (
        <SourcesSection sources={content.sources} />
      )}

      {content.relatedPages && content.relatedPages.length > 0 && (
        <RelatedPagesSection pages={content.relatedPages} />
      )}
    </div>
  )
}
