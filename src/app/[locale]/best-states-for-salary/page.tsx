import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { getBestStatesForSalary, getBestStatesForCostOfLiving, getBestStatesForRetirement, getBestStatesForHomeAffordability } from "@/lib/content/state-rankings"
import type { StateRankingsData } from "@/lib/content/state-rankings"
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
    title: "US State Rankings - Salary, Cost of Living, Retirement & Housing",
    description: "Detailed US state rankings by average salary, cost of living, retirement friendliness, and home affordability. Compare all 50 states with official data.",
    alternates: { canonical: `${SITE_URL}/${locale.slug}/best-states-for-salary` },
    openGraph: { title: "US State Rankings", description: "Compare states by salary, cost of living, retirement, and home affordability.", siteName: "Olikit", type: "website" },
  }
}

function RankingTable({ data, localeSlug }: { data: StateRankingsData; localeSlug: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-50">
            <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-700">Rank</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-700">State</th>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-700">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.rankings.map((r) => (
            <tr key={r.stateSlug} className="border-b border-zinc-100 last:border-0">
              <td className="px-4 py-3 text-zinc-500">{r.rank}</td>
              <td className="px-4 py-3">
                <Link href={`/${localeSlug}/salary-vs-cost-of-living/${r.stateSlug}`} className="font-medium text-zinc-700 hover:text-blue-600">{r.stateName}</Link>
              </td>
              <td className="px-4 py-3 text-zinc-600">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RankingSection({ title, id, data, localeSlug }: { title: string; id: string; data: StateRankingsData; localeSlug: string }) {
  return (
    <section id={id} className="scroll-mt-20 space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
      <p className="text-zinc-600">{data.intro}</p>
      <KeyTakeaways items={data.keyTakeaways} />
      <RankingTable data={data} localeSlug={localeSlug} />
      <div>
        <h3 className="mb-2 text-lg font-semibold text-zinc-950">Key Insights</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-600">
          {data.keyInsights.map((insight, i) => <li key={i}>{insight}</li>)}
        </ul>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-zinc-950">Methodology</h3>
        <p className="text-sm text-zinc-600">{data.methodology}</p>
      </div>
      <details className="text-sm">
        <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">FAQ</summary>
        <div className="mt-3 space-y-3">
          {data.faqs.map((faq, i) => (
            <div key={i}>
              <p className="font-medium text-zinc-700">{faq.question}</p>
              <p className="mt-1 text-zinc-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </details>
    </section>
  )
}

export default async function StateRankingsPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const salaryRanking = getBestStatesForSalary()
  const colRanking = getBestStatesForCostOfLiving()
  const retirementRanking = getBestStatesForRetirement()
  const homeRanking = getBestStatesForHomeAffordability()

  return (
    <div className="space-y-16">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">US State Rankings (2025-2026)</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">Detailed rankings of US states by average salary, cost of living, retirement friendliness, and home affordability. All data sourced from official government publications and updated for 2025-2026.</p>
      </div>

      <nav className="flex flex-wrap gap-2">
        {[
          { label: "Best States for Salary", href: "#best-states-for-salary" },
          { label: "Best States for Cost of Living", href: "#best-states-for-cost-of-living" },
          { label: "Best States for Retirement", href: "#best-states-for-retirement" },
          { label: "Best States for Home Affordability", href: "#best-states-for-home-affordability" },
        ].map((link) => (
          <a key={link.href} href={link.href} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">{link.label}</a>
        ))}
      </nav>

      <RankingSection title={salaryRanking.h1} id="best-states-for-salary" data={salaryRanking} localeSlug={locale.slug} />
      <RankingSection title={colRanking.h1} id="best-states-for-cost-of-living" data={colRanking} localeSlug={locale.slug} />
      <RankingSection title={retirementRanking.h1} id="best-states-for-retirement" data={retirementRanking} localeSlug={locale.slug} />
      <RankingSection title={homeRanking.h1} id="best-states-for-home-affordability" data={homeRanking} localeSlug={locale.slug} />

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-zinc-950">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale.slug}/salary`} className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">Salary Hub</Link>
          <Link href={`/${locale.slug}/research`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Research Reports</Link>
          <Link href={`/${locale.slug}/financial-data`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Financial Data</Link>
        </div>
      </section>

      <SourceFooter localeSlug={locale.slug} />
      <LastUpdated />
    </div>
  )
}
