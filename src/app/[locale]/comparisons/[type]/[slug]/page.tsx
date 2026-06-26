import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { generateComparisonPage, comparisonPairs, type ComparisonPageData } from "@/lib/content/comparison-engine"
import { generateProfessionComparison, professionComparisonPairs, parseProfessionComparisonSlug } from "@/lib/content/profession-comparisons"
import { SITE_URL } from "@/lib/seo/constants"
import { KeyTakeaways } from "@/components/key-takeaways"
import { LastUpdated } from "@/components/last-updated"
import { SourceFooter } from "@/components/source-footer"
import { AffiliateSidebar } from "@/components/affiliate-sidebar"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { AdUnit } from "@/components/ad-unit"

type Props = {
  params: Promise<{ locale: string; type: string; slug: string }>
}

function parseSlug(slug: string): { partA: string; partB: string } | null {
  const parts = slug.split("-vs-")
  if (parts.length !== 2) return null
  return { partA: parts[0], partB: parts[1] }
}

function findPairForSlug(type: string, slug: string) {
  const parsed = parseSlug(slug)
  if (!parsed) return null
  return comparisonPairs.find(
    p => p.type === type &&
    (parsed.partA === (p.regionA ?? p.pairA) && parsed.partB === (p.regionB ?? p.pairB) ||
     parsed.partA === (p.regionB ?? p.pairB) && parsed.partB === (p.regionA ?? p.pairA))
  )
}

export async function generateStaticParams() {
  const params: { locale: string; type: string; slug: string }[] = []
  for (const locale of locales) {
    for (const pair of comparisonPairs) {
      const slugA = pair.regionA ?? pair.pairA
      const slugB = pair.regionB ?? pair.pairB
      if (locale.slug === slugA || locale.slug === slugB) {
        params.push({ locale: locale.slug, type: pair.type, slug: `${slugA}-vs-${slugB}` })
      }
    }
    for (const pair of professionComparisonPairs) {
      if (locale.slug === pair.pairA || locale.slug === pair.pairB) {
        params.push({
          locale: locale.slug,
          type: "profession-salary",
          slug: `${pair.professionSlug}-${pair.pairA}-vs-${pair.pairB}`,
        })
      }
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug, type, slug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}

  if (type === "profession-salary") {
    const pair = parseProfessionComparisonSlug(slug)
    if (!pair) return {}
    const pc = generateProfessionComparison(pair.professionSlug, pair.pairA, pair.pairB)
    if (!pc) return {}
    return {
      title: pc.h1,
      description: pc.metaDescription,
      alternates: { canonical: `${SITE_URL}/${locale.slug}/comparisons/${type}/${slug}` },
      openGraph: { title: pc.h1, description: pc.metaDescription, url: `${SITE_URL}/${locale.slug}/comparisons/${type}/${slug}`, siteName: "Olikit", locale: locale.code, type: "article" },
    }
  }

  const pair = findPairForSlug(type, slug)
  if (!pair) return {}
  const content = generateComparisonPage(pair.type, pair.pairA, pair.pairB, pair.regionA, pair.regionB)
  if (!content) return {}
  return {
    title: content.h1,
    description: content.metaDescription,
    alternates: { canonical: `${SITE_URL}/${locale.slug}/comparisons/${type}/${slug}` },
    openGraph: { title: content.h1, description: content.metaDescription, url: `${SITE_URL}/${locale.slug}/comparisons/${type}/${slug}`, siteName: "Olikit", locale: locale.code, type: "article" },
  }
}

export default async function ComparisonPage({ params }: Props) {
  const { locale: localeSlug, type, slug } = await params
  const localeVal = getLocale(localeSlug)
  if (!localeVal) notFound()
  const locale = localeVal

  if (type === "profession-salary") {
    const pair = parseProfessionComparisonSlug(slug)
    if (!pair) notFound()
    const pc = generateProfessionComparison(pair.professionSlug, pair.pairA, pair.pairB)
    if (!pc) notFound()

    return (
      <div className="space-y-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: pc.h1, description: pc.metaDescription, publisher: { "@type": "Organization", name: "Olikit" } }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: pc.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />

        <nav className="text-sm text-zinc-500">
          <a href={`/${locale.slug}`} className="hover:text-zinc-800">Home</a>
          <span className="mx-2">/</span>
          <span className="text-zinc-800">{pc.professionName} Salary Comparison</span>
        </nav>

        <div className="rounded-lg border border-zinc-200 bg-white px-6 py-8 shadow-sm">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{pc.h1}</h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600">{pc.intro}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-200 bg-blue-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">{pc.localeA.name}</p>
            <p className="mt-1 text-lg font-bold text-zinc-900">{formatSalaryInline(pc.salaryA, pc.symbolA)}</p>
            <p className="text-sm text-zinc-600">Average annual salary</p>
          </div>
          <div className="rounded-lg border border-indigo-200 bg-indigo-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">{pc.localeB.name}</p>
            <p className="mt-1 text-lg font-bold text-zinc-900">{formatSalaryInline(pc.salaryB, pc.symbolB)}</p>
            <p className="text-sm text-zinc-600">Average annual salary</p>
          </div>
        </div>

        <KeyTakeaways items={pc.keyTakeaways} title={`${pc.professionName} Salary Comparison Highlights`} />

        <section className="overflow-x-auto rounded-lg border border-zinc-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-700">Metric</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-blue-700">{pc.localeA.name}</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-indigo-700">{pc.localeB.name}</th>
              </tr>
            </thead>
            <tbody>
              {pc.comparisonTable.map((row, i) => (
              <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-zinc-700">{row.label}</td>
                  <td className="px-4 py-3 text-zinc-600">{row.valueA}</td>
                  <td className="px-4 py-3 text-zinc-600">{row.valueB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-lg border border-amber-200 bg-amber-50 px-6 py-5">
          <h2 className="text-xl font-semibold text-amber-900 mb-3">Winner Summary</h2>
          <p className="text-amber-800 leading-relaxed">{pc.winnerSummary}</p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-6 py-5 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {pc.faqs.map((faq, i) => (
              <details key={i} className="text-sm">
                <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">{faq.question}</summary>
                <p className="mt-2 text-zinc-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {pc.relatedComparisons.length > 0 && (
          <section className="rounded-lg border border-zinc-200 bg-white px-6 py-5 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-950">Related Comparisons</h2>
            <div className="flex flex-wrap gap-3">
              {pc.relatedComparisons.map((link, i) => (
                <a key={i} href={link.href}
                  className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        )}

        <AdUnit slot="COMPARISON_PAGE_SLOT" format="horizontal" />

        <NewsletterSignup locale={localeSlug} source={`profession-compare-${slug}`} variant="banner" />

        <LastUpdated />
        <SourceFooter localeSlug={locale.slug} />
      </div>
    )
  }

  const pair = findPairForSlug(type, slug)
  if (!pair) notFound()

  const content = generateComparisonPage(pair.type, pair.pairA, pair.pairB, pair.regionA, pair.regionB)
  if (!content) notFound()

  const typeLabel = type === "salary" ? "Salary" : type === "cost-of-living" ? "Cost of Living" : type === "tax" ? "Tax" : "Purchasing Power"

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale.name, item: `${SITE_URL}/${locale.slug}` },
      { "@type": "ListItem", position: 2, name: `${typeLabel} Comparisons`, item: `${SITE_URL}/${locale.slug}/comparisons/${type}` },
      { "@type": "ListItem", position: 3, name: content.h1, item: `${SITE_URL}/${locale.slug}/comparisons/${type}/${slug}` },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="text-sm text-zinc-500">
        <a href={`/${locale.slug}`} className="hover:text-zinc-800">Home</a>
        <span className="mx-2">/</span>
        <a href={`/${locale.slug}/comparisons`} className="hover:text-zinc-800">Comparisons</a>
        <span className="mx-2">/</span>
        <span className="text-zinc-800">{content.h1}</span>
      </nav>

      <div className="rounded-lg border border-zinc-200 bg-white px-6 py-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{content.h1}</h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600">{content.intro}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-blue-200 bg-blue-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">{content.localeA.name}</p>
          <p className="mt-1 text-lg font-bold text-zinc-900">{content.comparisonTable[0]?.valueA ?? content.localeA.name}</p>
          {content.regionA && <p className="text-sm text-zinc-600">Region: {content.regionA.name}</p>}
        </div>
        <div className="rounded-lg border border-indigo-200 bg-indigo-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">{content.localeB.name}</p>
          <p className="mt-1 text-lg font-bold text-zinc-900">{content.comparisonTable[0]?.valueB ?? content.localeB.name}</p>
          {content.regionB && <p className="text-sm text-zinc-600">Region: {content.regionB.name}</p>}
        </div>
      </div>

      <KeyTakeaways items={content.keyTakeaways} title={`${typeLabel} Comparison Highlights`} />

      <section className="overflow-x-auto rounded-lg border border-zinc-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <caption className="sr-only">Comparison of {content.localeA.name} vs {content.localeB.name}</caption>
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th scope="col" className="px-4 py-3 text-left font-semibold text-zinc-700">Metric</th>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-blue-700">{content.localeA.name}</th>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-indigo-700">{content.localeB.name}</th>
            </tr>
          </thead>
          <tbody>
            {content.comparisonTable.map((row, i) => (
              <tr key={i} className="border-b border-zinc-100 last:border-0">
                <td className="px-4 py-3 font-medium text-zinc-700">{row.label}</td>
                <td className="px-4 py-3 text-zinc-600">{row.valueA}</td>
                <td className="px-4 py-3 text-zinc-600">{row.valueB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {type === "purchasing-power" && (
        <section className="rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-5">
          <h2 className="text-xl font-semibold text-emerald-900 mb-3">Purchasing Power Analysis</h2>
          <p className="text-emerald-800 leading-relaxed">
            A salary {content.regionA ? `in ${content.regionA.name}` : `in ${content.localeA.name}`} has different real-world value when adjusted for local costs.
            The effective purchasing power tells you what your salary is actually worth.
          </p>
          {content.salaryDiff && <p className="mt-2 text-emerald-800"><strong>Salary:</strong> {content.salaryDiff}</p>}
          {content.colDiff && <p className="mt-2 text-emerald-800"><strong>Cost of Living:</strong> {content.colDiff}</p>}
          {content.purchasingPowerDiff && <p className="mt-2 text-emerald-800"><strong>Purchasing Power:</strong> {content.purchasingPowerDiff}</p>}
        </section>
      )}

      <section className="rounded-lg border border-amber-200 bg-amber-50 px-6 py-5">
        <h2 className="text-xl font-semibold text-amber-900 mb-3">Winner Summary</h2>
        <p className="text-amber-800 leading-relaxed">{content.winnerSummary}</p>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white px-6 py-5 shadow-sm">
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

      {content.relatedComparisons.length > 0 && (
        <section className="rounded-lg border border-zinc-200 bg-white px-6 py-5 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-zinc-950">Related Comparisons</h2>
          <div className="flex flex-wrap gap-3">
            {content.relatedComparisons.map((link, i) => (
              <a key={i} href={link.href}
                className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-lg border border-zinc-200 bg-white px-6 py-5 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-zinc-950">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          <a href={`/${locale.slug}/tools/salary-calculator`}
            className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">Salary Calculator</a>
          <a href={`/${locale.slug}/tools/tax-calculator`}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Tax Calculator</a>
          <a href={`/${locale.slug}/salary`}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Salary Hub</a>
          <a href={`/${locale.slug}/guides/salary-after-tax-by-country`}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">Salary Guide</a>
        </div>
      </section>

      <NewsletterSignup locale={locale.slug} source="comparison" variant="banner" />

      <AdUnit slot="COMPARISON_BOTTOM_SLOT" format="horizontal" />

      <LastUpdated />
      <SourceFooter localeSlug={locale.slug} />
    </div>
  )
}

function formatSalaryInline(val: number, symbol: string): string {
  return `${symbol}${val.toLocaleString()}`
}
