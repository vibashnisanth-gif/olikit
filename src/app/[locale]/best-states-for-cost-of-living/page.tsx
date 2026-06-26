import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { getBestStatesForCostOfLiving } from "@/lib/content/state-rankings"
import { SITE_URL } from "@/lib/seo/constants"
import { KeyTakeaways } from "@/components/key-takeaways"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  return {
    title: "Best States for Cost of Living (2025-2026)",
    description: "Top US states ranked by lowest cost of living. Compare housing, utilities, food, transportation, and healthcare costs across states.",
    alternates: { canonical: `${SITE_URL}/${locale.slug}/best-states-for-cost-of-living` },
  }
}

export default async function BestStatesForColPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()
  const data = getBestStatesForCostOfLiving()

  return (
    <div className="space-y-10">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{data.h1}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{data.intro}</p>
      </div>

      <KeyTakeaways items={data.keyTakeaways} />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-950">Rankings</h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-700">Rank</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-700">State</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-700">Cost of Living Index</th>
              </tr>
            </thead>
            <tbody>
              {data.rankings.map((r) => (
                <tr key={r.stateSlug} className="border-b border-zinc-100 last:border-0">
                  <td className="px-4 py-3 text-zinc-500">{r.rank}</td>
                  <td className="px-4 py-3">
                    <Link href={`/${locale.slug}/cost-of-living/${r.stateSlug}`} className="font-medium text-zinc-700 hover:text-blue-600">{r.stateName}</Link>
                  </td>
                  <td className="px-4 py-3 text-zinc-600">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-zinc-950">Key Insights</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-600">{data.keyInsights.map((insight, i) => <li key={i}>{insight}</li>)}</ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-zinc-950">Methodology</h3>
        <p className="text-sm text-zinc-600">{data.methodology}</p>
      </div>

      <details className="text-sm">
        <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">FAQ</summary>
        <div className="mt-3 space-y-3">
          {data.faqs.map((faq, i) => (
            <div key={i}><p className="font-medium text-zinc-700">{faq.question}</p><p className="mt-1 text-zinc-500">{faq.answer}</p></div>
          ))}
        </div>
      </details>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-zinc-950">Related Rankings</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale.slug}/best-states-for-salary`} className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">Best States for Salary</Link>
          <Link href={`/${locale.slug}/best-states-for-retirement`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Best States for Retirement</Link>
          <Link href={`/${locale.slug}/best-states-for-home-affordability`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Best States for Home Affordability</Link>
        </div>
      </section>

      <SourceFooter localeSlug={locale.slug} />
      <LastUpdated />
    </div>
  )
}
