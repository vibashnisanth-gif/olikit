import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale, getSubRegion } from "@/lib/seo/locales"
import { generateCostOfLivingContent, costOfLivingData } from "@/lib/content/state-expansion"
import { SITE_URL } from "@/lib/seo/constants"
import { getLastUpdated } from "@/lib/seo/freshness"

export async function generateStaticParams() {
  const params: { locale: string; state: string }[] = []
  for (const locale of locales) {
    if (!locale.states) continue
    for (const stateSlug of Object.keys(costOfLivingData)) {
      if (locale.states.some((s) => s.slug === stateSlug)) {
        params.push({ locale: locale.slug, state: stateSlug })
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

  const content = generateCostOfLivingContent(stateSlug, subRegion.name)
  if (!content) return {}

  return {
    title: `Cost of Living in ${subRegion.name} (2025-2026) | Olikit`,
    description: `The cost of living in ${subRegion.name} is ${content.breakdown.overall}% of the US average. Housing: ${content.breakdown.housing}%, Utilities: ${content.breakdown.utilities}%, Food: ${content.breakdown.food}%. Free salary calculator included.`,
    alternates: { canonical: `${SITE_URL}/${locale.slug}/cost-of-living/${stateSlug}` },
    openGraph: {
      title: `Cost of Living in ${subRegion.name}`,
      description: `${subRegion.name} cost of living index: ${content.breakdown.overall} (US average: 100). Compare housing, utilities, food, and transportation costs.`,
      url: `${SITE_URL}/${locale.slug}/cost-of-living/${stateSlug}`,
      siteName: "Olikit",
      locale: locale.code,
      type: "website",
    },
  }
}

export default async function CostOfLivingPage(props: {
  params: Promise<{ locale: string; state: string }>
}) {
  const { locale: localeSlug, state: stateSlug } = await props.params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const subRegion = getSubRegion(locale, stateSlug)
  if (!subRegion) notFound()

  const content = generateCostOfLivingContent(stateSlug, subRegion.name)
  if (!content) notFound()

  const lastUpdated = getLastUpdated()
  const col = content.breakdown

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h1 className="text-4xl font-bold mb-4">{content.h1}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{content.intro}</p>
        </section>

        <section className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
          <p className="text-zinc-700 dark:text-zinc-300">{content.quickAnswer}</p>
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
          <h2 className="text-2xl font-semibold mb-4">Cost of Living Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 px-4 font-semibold text-zinc-700 dark:text-zinc-300">Category</th>
                  <th className="text-right py-3 px-4 font-semibold text-zinc-700 dark:text-zinc-300">{subRegion.name} Index</th>
                  <th className="text-right py-3 px-4 font-semibold text-zinc-500">US Average</th>
                  <th className="text-right py-3 px-4 font-semibold text-zinc-500">Difference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Overall", value: col.overall },
                  { label: "Housing", value: col.housing },
                  { label: "Utilities", value: col.utilities },
                  { label: "Food", value: col.food },
                  { label: "Transportation", value: col.transport },
                  { label: "Healthcare", value: col.healthcare },
                ].map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3 px-4 font-medium text-zinc-700 dark:text-zinc-300">{row.label}</td>
                    <td className="py-3 px-4 text-right">{row.value}</td>
                    <td className="py-3 px-4 text-right text-zinc-500">100</td>
                    <td className={`py-3 px-4 text-right ${row.value > 100 ? "text-red-600" : "text-green-600"}`}>
                      {row.value > 100 ? `+${row.value - 100}%` : `${row.value - 100}%`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 mt-2">Base: US average = 100. Values above 100 indicate above-average costs.</p>
        </section>

        <section className="border rounded-lg p-6 bg-white dark:bg-zinc-800/50">
          <h2 className="text-2xl font-semibold mb-4">Calculate Your Budget in {subRegion.name}</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            Use our free calculators to estimate your salary, mortgage, and taxes in {subRegion.name}.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale.slug}/tools/salary-calculator`}
              className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-sm"
            >
              Salary Calculator
            </Link>
            <Link
              href={`/${locale.slug}/tools/mortgage-calculator`}
              className="inline-block bg-zinc-800 text-white px-5 py-2.5 rounded-lg hover:bg-zinc-700 transition text-sm dark:bg-zinc-200 dark:text-zinc-900"
            >
              Mortgage Calculator
            </Link>
            <Link
              href={`/${locale.slug}/average-salary/${stateSlug}`}
              className="inline-block border border-zinc-300 px-5 py-2.5 rounded-lg hover:border-blue-400 transition text-sm text-zinc-700 dark:text-zinc-300"
            >
              Average Salary in {subRegion.name}
            </Link>
          </div>
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

        <section className="flex flex-wrap gap-4 text-sm">
          <Link href={`/${locale.slug}/tools/salary-calculator`} className="text-blue-600 hover:underline">
            Salary Calculator
          </Link>
          <span className="text-zinc-300">|</span>
          <Link href={`/${locale.slug}/average-salary/${stateSlug}`} className="text-blue-600 hover:underline">
            Average Salary in {subRegion.name}
          </Link>
          <span className="text-zinc-300">|</span>
          <Link href={`/${locale.slug}/state/${stateSlug}/mortgage-calculator`} className="text-blue-600 hover:underline">
            {subRegion.name} Mortgage Calculator
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
