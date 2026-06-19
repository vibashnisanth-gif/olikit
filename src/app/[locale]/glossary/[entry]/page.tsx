import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { glossaryEntries, getGlossaryEntry } from "@/lib/content/glossary"
import { tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { professions } from "@/lib/content/professions-data"
import { SITE_URL } from "@/lib/seo/constants"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

type Props = { params: Promise<{ locale: string; entry: string }> }

export async function generateStaticParams() {
  const params: { locale: string; entry: string }[] = []
  for (const locale of locales) {
    for (const entry of glossaryEntries) {
      params.push({ locale: locale.slug, entry: entry.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug, entry: entrySlug } = await params
  const locale = getLocale(localeSlug)
  const entry = getGlossaryEntry(entrySlug)
  if (!locale || !entry) return {}
  return {
    title: `${entry.term} - Financial Glossary - Olikit`,
    description: `${entry.term} definition: ${entry.definition.substring(0, 160)}`,
    alternates: { canonical: `${SITE_URL}/${locale.slug}/glossary/${entry.slug}` },
  }
}

export default async function GlossaryEntryPage({ params }: Props) {
  const { locale: localeSlug, entry: entrySlug } = await params
  const locale = getLocale(localeSlug)
  const entry = getGlossaryEntry(entrySlug)
  if (!locale || !entry) notFound()

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entry.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  }

  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">Financial Glossary</p>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{entry.term}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{entry.definition}</p>
      </div>

      {entry.detailedExplanation && (
        <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">In-Depth Explanation</h2>
          <p className="text-zinc-600 leading-relaxed">{entry.detailedExplanation}</p>
        </section>
      )}

      {entry.salaryImplications && (
        <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-amber-900">Salary Implications</h2>
          <p className="text-amber-800 leading-relaxed">{entry.salaryImplications}</p>
        </section>
      )}

      {entry.relatedTerms && entry.relatedTerms.length > 0 && (
        <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">Related Terms</h2>
          <div className="flex flex-wrap gap-2">
            {entry.relatedTerms.map(slug => {
              const relatedEntry = getGlossaryEntry(slug)
              if (!relatedEntry) return null
              return (
                <Link
                  key={slug}
                  href={`/${locale.slug}/glossary/${slug}`}
                  className="rounded-md bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-200 hover:bg-blue-100"
                >
                  {relatedEntry.term}
                </Link>
              )
            })}
          </div>
        </section>
      )}

      <div className="rounded-md border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-800">Example</h2>
        <p className="text-sm leading-relaxed text-emerald-900">{entry.example}</p>
      </div>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {entry.faqs.map((faq, i) => (
            <details key={i} className="text-sm">
              <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">{faq.question}</summary>
              <p className="mt-2 text-zinc-500">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-zinc-950">Related Resources</h2>
        <div className="flex flex-wrap gap-2">
          {entry.relatedCalculatorSlugs.map(slug => {
            const tool = tools.find(t => t.slug === slug)
            if (!tool) return null
            return <Link key={slug} href={`/${locale.slug}/tools/${slug}`} className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">{tool.name}</Link>
          })}
          {entry.relatedGuideSlugs.map(slug => {
            const guide = guides.find(g => g.slug === slug)
            if (!guide) return null
            return <Link key={slug} href={`/${locale.slug}/guides/${slug}`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">{guide.name}</Link>
          })}
          <Link href={`/${locale.slug}/salary`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Salary Hub</Link>
          <Link href={`/${locale.slug}/methodology`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Methodology</Link>
          <Link href={`/${locale.slug}/glossary`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">All Glossary Terms</Link>
        </div>
      </section>

      {professions.length > 0 && (
        <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">Explore Salaries by Profession</h2>
          <div className="flex flex-wrap gap-2">
            {professions.slice(0, 6).map(p => (
              <Link key={p.slug} href={`/${locale.slug}/salary/${p.slug}`} className="rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950">{p.name}</Link>
            ))}
          </div>
        </section>
      )}

      <SourceFooter localeSlug={locale.slug} />
      <LastUpdated />
    </div>
  )
}
