import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { researchReports, getResearchReport } from "@/lib/content/research"
import { SITE_URL } from "@/lib/seo/constants"
import { KeyTakeaways } from "@/components/key-takeaways"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

type Props = { params: Promise<{ locale: string; report: string }> }

export async function generateStaticParams() {
  const params: { locale: string; report: string }[] = []
  for (const locale of locales) {
    for (const report of researchReports) {
      params.push({ locale: locale.slug, report: report.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug, report: reportSlug } = await params
  const locale = getLocale(localeSlug)
  const report = getResearchReport(reportSlug)
  if (!locale || !report) return {}
  return {
    title: `${report.title} - Research Report - Olikit`,
    description: report.metaDescription,
    alternates: { canonical: `${SITE_URL}/${locale.slug}/research/${report.slug}` },
    openGraph: { title: report.title, description: report.metaDescription, url: `${SITE_URL}/${locale.slug}/research/${report.slug}`, siteName: "Olikit", type: "article" },
  }
}

export default async function ResearchReportPage({ params }: Props) {
  const { locale: localeSlug, report: reportSlug } = await params
  const locale = getLocale(localeSlug)
  const report = getResearchReport(reportSlug)
  if (!locale || !report) notFound()

  return (
    <div className="space-y-10">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">Research Report</p>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{report.title}</h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: {report.lastUpdated} &mdash; {report.sources.length} data sources</p>
      </div>

      <KeyTakeaways items={report.keyTakeaways} title="Key Takeaways" />

      <div className="rounded-lg border border-blue-200 bg-blue-50 px-6 py-5 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">Key Findings</h2>
        <ul className="space-y-2">
          {report.keyFindings.map((finding, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-blue-900">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>{finding}</span>
            </li>
          ))}
        </ul>
      </div>

      {report.sections.map((section, i) => (
        <section key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-zinc-950">{section.heading}</h2>
          {section.body.split('\n\n').map((para, j) => (
            <p key={j} className="text-zinc-600 leading-relaxed mb-3 last:mb-0">{para}</p>
          ))}
        </section>
      ))}

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-zinc-950">Methodology</h2>
        <p className="text-sm text-zinc-600 leading-relaxed">{report.methodology}</p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-zinc-950">Sources</h2>
        <ul className="space-y-1">
          {report.sources.map((source, i) => <li key={i} className="text-sm text-zinc-600">{source}</li>)}
        </ul>
      </section>

      {report.faqs.length > 0 && (
        <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {report.faqs.map((faq, i) => (
              <details key={i} className="text-sm">
                <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">{faq.question}</summary>
                <p className="mt-2 text-zinc-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-zinc-950">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          {report.relatedPages.map((page) => (
            <Link key={page.href} href={page.href} className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">{page.label}</Link>
          ))}
          <Link href={`/${locale.slug}/research`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">All Reports</Link>
        </div>
      </section>

      <SourceFooter localeSlug={locale.slug} />
      <LastUpdated />
    </div>
  )
}
