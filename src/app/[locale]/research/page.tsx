import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { researchReports } from "@/lib/content/research"
import { SITE_URL } from "@/lib/seo/constants"
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
    title: "Research & Insights Center - Olikit",
    description: "Data-driven research reports on US salaries, cost of living, taxes, housing affordability, and salary growth trends. All findings based on official government data.",
    alternates: { canonical: `${SITE_URL}/${locale.slug}/research` },
    openGraph: { title: "Research & Insights Center - Olikit", description: "Data-driven financial research reports.", url: `${SITE_URL}/${locale.slug}/research`, siteName: "Olikit", type: "website" },
  }
}

export default async function ResearchPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  return (
    <div className="space-y-10">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Research & Insights Center</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">Data-driven research reports based exclusively on official government data. Every report includes methodology, sources, and key findings. No fabricated data, no unsubstantiated claims.</p>
      </div>

      <div className="grid gap-6">
        {researchReports.map((report) => (
          <Link key={report.slug} href={`/${locale.slug}/research/${report.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-zinc-950">{report.title}</h2>
            <p className="mb-3 text-sm text-zinc-600">{report.metaDescription}</p>
            <div className="mb-3 flex flex-wrap gap-2">
              {report.keyFindings.slice(0, 3).map((finding, i) => (
                <span key={i} className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs text-emerald-700">{finding.substring(0, 60)}...</span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span>{report.sources.length} sources</span>
              <span>Last updated: {report.lastUpdated}</span>
            </div>
          </Link>
        ))}
      </div>

      <SourceFooter localeSlug={locale.slug} />
      <LastUpdated />
    </div>
  )
}
