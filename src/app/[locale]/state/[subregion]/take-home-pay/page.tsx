import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { locales, getLocale, getSubRegion } from "@/lib/seo/locales"
import { SITE_URL } from "@/lib/seo/constants"
import { StateTakeHomeCalculator } from "@/components/state-take-home-calculator"
import { getStateName, hasStateTax, ALL_STATE_SLUGS } from "@/lib/content/state-tax-brackets"
import Link from "next/link"

type Props = {
  params: Promise<{ locale: string; subregion: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; subregion: string }[] = []
  const usLocale = locales.find((l) => l.slug === "us")
  if (usLocale?.states) {
    for (const state of usLocale.states) {
      params.push({ locale: "us", subregion: state.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug, subregion: subregionSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  const subRegion = getSubRegion(locale, subregionSlug)
  if (!subRegion) return {}

  const stateName = getStateName(subregionSlug)
  const hasTax = hasStateTax(subregionSlug)

  return {
    title: `${stateName} Take-Home Pay Calculator 2026 | After Tax Income`,
    description: `Calculate your take-home pay in ${stateName}. See federal tax, state income tax${hasTax ? "" : " (no state income tax)"}, and FICA deductions for 2025-2026.`,
    alternates: {
      canonical: `${SITE_URL}/us/state/${subregionSlug}/take-home-pay`,
    },
    openGraph: {
      title: `${stateName} Take-Home Pay Calculator 2026`,
      description: `Estimate your after-tax income in ${stateName} with federal, state, and FICA deductions.`,
      url: `${SITE_URL}/us/state/${subregionSlug}/take-home-pay`,
      siteName: "Olikit",
      type: "website",
    },
  }
}

export default async function StateTakeHomePayPage({ params }: Props) {
  const { locale: localeSlug, subregion: subregionSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()
  const subRegion = getSubRegion(locale, subregionSlug)
  if (!subRegion) notFound()

  const stateName = getStateName(subregionSlug)
  const hasTax = hasStateTax(subregionSlug)

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Does ${stateName} have state income tax?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: hasTax
            ? `Yes, ${stateName} has a state income tax. Rates vary by income level.`
            : `No, ${stateName} does not levy a state income tax on wages and salaries.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the effective tax rate in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The effective tax rate in ${stateName} depends on your income and filing status. Use the calculator above to estimate your total federal, state, and FICA tax burden.`,
        },
      },
      {
        "@type": "Question",
        name: `How is take-home pay calculated in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Take-home pay is calculated by subtracting federal income tax, ${stateName} state income tax (if applicable), Social Security tax (6.2%), and Medicare tax (1.45%) from your gross salary.`,
        },
      },
    ],
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "United States", item: `${SITE_URL}/us` },
      { "@type": "ListItem", position: 3, name: stateName, item: `${SITE_URL}/us/state/${subregionSlug}` },
      { "@type": "ListItem", position: 4, name: "Take-Home Pay" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-700">Home</Link>
          <span>/</span>
          <Link href="/us" className="hover:text-zinc-700">United States</Link>
          <span>/</span>
          <Link href={`/us/state/${subregionSlug}`} className="hover:text-zinc-700">{stateName}</Link>
          <span>/</span>
          <span className="text-zinc-950 font-medium">Take-Home Pay</span>
        </nav>

        {/* H1 */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            {stateName} Take-Home Pay Calculator
          </h1>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            Calculate your estimated take-home pay in {stateName} after federal income tax, {hasTax ? "state income tax" : "no state income tax"}, and FICA deductions (Social Security and Medicare). Enter your salary and filing status for an instant breakdown.
          </p>
        </div>

        {/* Calculator */}
        <StateTakeHomeCalculator stateSlug={subregionSlug} />

        {/* SEO content */}
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-6">
          <h2 className="text-lg font-semibold text-zinc-950">
            {stateName} Tax Overview
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-6 text-zinc-600">
            <p>
              {hasTax
                ? `${stateName} levies a state income tax on wages and salaries. Combined with federal income tax and FICA (Social Security at 6.2% and Medicare at 1.45%), your total tax burden depends on your income level and filing status.`
                : `${stateName} does not levy a state income tax on wages. Residents pay only federal income tax and FICA deductions (Social Security at 6.2% up to $176,100 and Medicare at 1.45%).`}
            </p>
            <p>
              The federal standard deduction for 2025-2026 is $14,600 for single filers and $29,200 for married filing jointly. This reduces your taxable income before federal tax is calculated.
            </p>
          </div>
        </div>

        {/* Other states */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-950">
            Take-Home Pay by State
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Compare after-tax income across all 50 states and DC.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {ALL_STATE_SLUGS.filter((s) => s !== subregionSlug).slice(0, 12).map((slug) => (
              <Link
                key={slug}
                href={`/us/state/${slug}/take-home-pay`}
                className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
              >
                {getStateName(slug)}
              </Link>
            ))}
          </div>
          <Link
            href="/us/states"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700"
          >
            View all states →
          </Link>
        </div>

        {/* FAQ */}
        <div className="rounded-xl border border-zinc-200 bg-white px-6 py-6">
          <h2 className="text-lg font-semibold text-zinc-950">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 divide-y divide-zinc-100">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details key={i} className="group py-4 first:pt-0 last:pb-0">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-zinc-950 select-none">
                  {faq.name}
                  <svg className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-zinc-400">
          Tax brackets sourced from IRS, state departments of revenue. 2025-2026 estimates for educational purposes only.
        </p>
      </div>
    </>
  )
}
