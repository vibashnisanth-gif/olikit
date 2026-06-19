import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale, getSubRegion } from "@/lib/seo/locales"
import { generateAverageSalaryContent } from "@/lib/content/state-expansion"
import { stateDataSets } from "@/lib/content/state-data"
import { SITE_URL } from "@/lib/seo/constants"
import { getLastUpdated } from "@/lib/seo/freshness"

export async function generateStaticParams() {
  const params: { locale: string; state: string }[] = []
  for (const locale of locales) {
    if (!locale.states) continue
    for (const stateDataset of stateDataSets) {
      if (locale.states.some((s) => s.slug === stateDataset.stateSlug)) {
        params.push({ locale: locale.slug, state: stateDataset.stateSlug })
      }
    }
  }
  return params
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; state: string }>
}): Promise<Metadata> {
  const { locale: localeSlug, state: stateSlug } = await props.params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  const subRegion = getSubRegion(locale, stateSlug)
  if (!subRegion) return {}

  const content = generateAverageSalaryContent(stateSlug, subRegion.name)
  if (!content) return {}

  return {
    title: `Average Salary in ${subRegion.name} (2025-2026) | Olikit`,
    description: `The average salary in ${subRegion.name} is $${content.averageSalary.toLocaleString()} per year. Median household income: $${content.medianIncome.toLocaleString()}. Cost of living index: ${stateDataSets.find(s => s.stateSlug === stateSlug)?.dataPoints.costOfLivingIndex}. Free salary calculator included.`,
    alternates: { canonical: `${SITE_URL}/${locale.slug}/average-salary/${stateSlug}` },
    openGraph: {
      title: `Average Salary in ${subRegion.name}`,
      description: `Average salary in ${subRegion.name}: $${content.averageSalary.toLocaleString()}/year. See how it compares to the national average.`,
      url: `${SITE_URL}/${locale.slug}/average-salary/${stateSlug}`,
      siteName: "Olikit",
      locale: locale.code,
      type: "website",
    },
  }
}

export default async function AverageSalaryPage(props: {
  params: Promise<{ locale: string; state: string }>
}) {
  const { locale: localeSlug, state: stateSlug } = await props.params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const subRegion = getSubRegion(locale, stateSlug)
  if (!subRegion) notFound()

  const content = generateAverageSalaryContent(stateSlug, subRegion.name)
  if (!content) notFound()

  const lastUpdated = getLastUpdated()
  const data = stateDataSets.find(s => s.stateSlug === stateSlug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.h1,
    description: content.intro,
    url: `${SITE_URL}/${locale.slug}/average-salary/${stateSlug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${locale.slug}/average-salary/${stateSlug}` },
    dateModified: lastUpdated,
    publisher: { "@type": "Organization", name: "Olikit", url: SITE_URL },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h1 className="text-4xl font-bold mb-4">{content.h1}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{content.intro}</p>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex">
            <div className="w-1 shrink-0 rounded-l-xl bg-emerald-500" />
            <div className="min-w-0 flex-1 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Quick Answer</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">{content.quickAnswer}</p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Key Takeaways</h2>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
            {content.keyTakeaways.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Salary Data Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 px-4 font-semibold text-zinc-700 dark:text-zinc-300">Metric</th>
                  <th className="text-right py-3 px-4 font-semibold text-zinc-700 dark:text-zinc-300">{subRegion.name}</th>
                  <th className="text-right py-3 px-4 font-semibold text-zinc-500">US Average</th>
                </tr>
              </thead>
              <tbody>
                {content.comparisonTable.map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">{row.label}</td>
                    <td className="py-3 px-4 text-right font-medium">{row.value}</td>
                    <td className="py-3 px-4 text-right text-zinc-500">
                      {row.label === "Average Annual Salary" ? "$63,000" :
                       row.label === "Median Household Income" ? "$75,000" :
                       row.label === "Cost of Living Index" ? "100" : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-500 mt-2">Source: {data?.source}</p>
        </section>

        <section className="border rounded-lg p-6 bg-white dark:bg-zinc-800/50">
          <h2 className="text-2xl font-semibold mb-4">Calculate Your Take-Home Pay in {subRegion.name}</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            Use our free salary calculator to estimate your after-tax income in {subRegion.name}, accounting for federal and state taxes.
          </p>
          <Link
            href={`/${locale.slug}/state/${stateSlug}/salary-calculator`}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Open {subRegion.name} Salary Calculator
          </Link>
        </section>

        {content.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
            <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-3">
              {section.body.split("\n\n").map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <div key={i} className="border-b pb-4">
                <h3 className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">{faq.question}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap gap-4">
          <Link
            href={`/${locale.slug}/tools/salary-calculator`}
            className="text-blue-600 hover:underline"
          >
            Salary Calculator
          </Link>
          <span className="text-zinc-300">|</span>
          <Link
            href={`/${locale.slug}/cost-of-living/${stateSlug}`}
            className="text-blue-600 hover:underline"
          >
            Cost of Living in {subRegion.name}
          </Link>
          <span className="text-zinc-300">|</span>
          <Link
            href={`/${locale.slug}/state/${stateSlug}/tax-calculator`}
            className="text-blue-600 hover:underline"
          >
            {subRegion.name} Tax Calculator
          </Link>
        </section>

        <section className="text-sm text-zinc-500 dark:text-zinc-500">
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Sources</h2>
          <ul className="list-disc pl-6 space-y-1">
            {content.sources.map((src, i) => (
              <li key={i}>{src}</li>
            ))}
          </ul>
          <p className="mt-2">Last updated: {lastUpdated}</p>
        </section>
      </div>
    </>
  )
}
