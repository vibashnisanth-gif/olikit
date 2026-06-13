import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale, getSubRegion } from "@/lib/seo/locales"
import { generateSalaryVsColContent } from "@/lib/content/salary-vs-col"
import { stateDataSets } from "@/lib/content/state-data"
import { SITE_URL } from "@/lib/seo/constants"
import { KeyTakeaways } from "@/components/key-takeaways"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

type Props = {
  params: Promise<{ locale: string; state: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; state: string }[] = []
  for (const locale of locales) {
    if (!locale.states) continue
    for (const stateSlug of stateDataSets.map(s => s.stateSlug)) {
      if (locale.states.some((s) => s.slug === stateSlug)) {
        params.push({ locale: locale.slug, state: stateSlug })
      }
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug, state: stateSlug } = await params
  const locale = getLocale(localeSlug)
  const subRegion = locale ? getSubRegion(locale, stateSlug) : undefined
  if (!locale || !subRegion) return {}
  const content = generateSalaryVsColContent(stateSlug, subRegion.name)
  if (!content) return {}
  return {
    title: content.h1,
    description: content.metaDescription,
    alternates: { canonical: `${SITE_URL}/${locale.slug}/salary-vs-cost-of-living/${stateSlug}` },
    openGraph: { title: content.h1, description: content.metaDescription, url: `${SITE_URL}/${locale.slug}/salary-vs-cost-of-living/${stateSlug}`, siteName: "Olikit", locale: "en-US", type: "article" },
  }
}

export default async function SalaryVsColPage({ params }: Props) {
  const { locale: localeSlug, state: stateSlug } = await params
  const locale = getLocale(localeSlug)
  const subRegion = locale ? getSubRegion(locale, stateSlug) : undefined
  if (!locale || !subRegion) notFound()

  const content = generateSalaryVsColContent(stateSlug, subRegion.name)
  if (!content) notFound()

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  }

  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{content.h1}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{content.intro}</p>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className="flex">
          <div className="w-1 shrink-0 rounded-l-xl bg-emerald-500" />
          <div className="min-w-0 flex-1 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Quick Answer</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">{content.quickAnswer}</p>
          </div>
        </div>
      </div>

      <KeyTakeaways items={content.keyTakeaways} />

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="px-4 py-3 text-left font-semibold text-zinc-700">Metric</th>
              <th className="px-4 py-3 text-left font-semibold text-zinc-700">{subRegion.name}</th>
              <th className="px-4 py-3 text-left font-semibold text-zinc-700">National Average</th>
            </tr>
          </thead>
          <tbody>
            {content.comparisonTable.map((row, i) => (
              <tr key={i} className="border-b border-zinc-100 last:border-0">
                <td className="px-4 py-3 font-medium text-zinc-700">{row.label}</td>
                <td className="px-4 py-3 text-zinc-600">{row.stateValue}</td>
                <td className="px-4 py-3 text-zinc-600">{row.nationalValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">Salary Overview</h2>
          <p className="text-zinc-600 leading-relaxed">{content.salaryOverview}</p>
        </section>
        <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">Cost of Living Overview</h2>
          <p className="text-zinc-600 leading-relaxed">{content.costOfLivingOverview}</p>
        </section>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">Housing Affordability</h2>
          <p className="text-zinc-600 leading-relaxed">{content.housingAffordability}</p>
        </section>
        <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">Purchasing Power</h2>
          <p className="text-zinc-600 leading-relaxed">{content.purchasingPower}</p>
        </section>
      </div>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {content.faqs.map((faq, i) => (
            <details key={i} className="text-sm">
              <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">{faq.question}</summary>
              <p className="mt-2 text-zinc-500">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-zinc-950">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale.slug}/salary`} className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">Salary Hub</Link>
          <Link href={`/${locale.slug}/average-salary/${stateSlug}`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Average Salary</Link>
          <Link href={`/${locale.slug}/cost-of-living/${stateSlug}`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Cost of Living</Link>
          <Link href={`/${locale.slug}/tools/salary-calculator`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Salary Calculator</Link>
          <Link href={`/${locale.slug}/tools/mortgage-calculator`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Mortgage Calculator</Link>
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-zinc-950">Official Sources</h2>
        <ul className="space-y-1">
          {content.sources.map((s, i) => <li key={i} className="text-sm text-zinc-600">{s}</li>)}
        </ul>
      </section>

      <LastUpdated />
      <SourceFooter localeSlug={locale.slug} />
    </div>
  )
}
