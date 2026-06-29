import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { generateSalaryHubContent } from "@/lib/content/state-expansion"
import { SITE_URL } from "@/lib/seo/constants"
import { getLastUpdated } from "@/lib/seo/freshness"
import { tools } from "@/lib/content/templates"
import { guides } from "@/lib/content/guide-templates"
import { stateDataSets } from "@/lib/content/state-data"
import { professions } from "@/lib/content/professions-data"

import { AdUnit } from "@/components/ad-unit"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeSlug } = await props.params
  const locale = getLocale(localeSlug)
  if (!locale) return {}

  return {
    title: `Salary Guide and Resources for ${locale.name} | Olikit`,
    description: `Free salary resources for ${locale.name}. Calculate your take-home pay, explore average salaries by state, compare cost of living, and read expert guides on salary and tax planning.`,
    alternates: { canonical: `${SITE_URL}/${locale.slug}/salary` },
    openGraph: {
      title: `${locale.name} Salary Guide and Resources`,
      description: `Free salary resources for ${locale.name}. Calculate take-home pay, explore salaries, and read guides.`,
      url: `${SITE_URL}/${locale.slug}/salary`,
      siteName: "Olikit",
      locale: locale.code,
      type: "website",
    },
  }
}

export default async function SalaryHubPage(props: { params: Promise<{ locale: string }> }) {
  const { locale: localeSlug } = await props.params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const content = generateSalaryHubContent(locale)
  const lastUpdated = getLastUpdated()
  const salaryTool = tools.find((t) => t.slug === "salary-calculator")
  const salaryGuide = guides.find((g) => g.slug === "salary-after-tax-by-country")

  const salaryStates = stateDataSets.filter((s) => {
    if (!locale.states) return false
    return locale.states.some((st) => st.slug === s.stateSlug)
  })

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.h1,
    description: content.intro,
    url: `${SITE_URL}/${locale.slug}/salary`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        ...(salaryTool ? [{ "@type": "WebApplication", name: salaryTool.name, url: `${SITE_URL}/${locale.slug}/tools/salary-calculator` }] : []),
        ...(salaryGuide ? [{ "@type": "Article", name: salaryGuide.name, url: `${SITE_URL}/${locale.slug}/guides/salary-after-tax-by-country` }] : []),
      ],
    },
  }

  return (
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <nav className="text-sm text-zinc-500">
          <Link href={`/${locale.slug}`} className="hover:text-zinc-800">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-800">Salary</span>
        </nav>

        <section>
          <h1 className="text-4xl font-bold mb-4">{content.h1}</h1>
          <p className="text-lg text-zinc-600">{content.intro}</p>
        </section>

        <section className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 space-y-3 border border-blue-100 dark:border-blue-800/30">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Key Takeaways</h2>
          <ul className="list-disc pl-6 space-y-2 text-zinc-800 dark:text-zinc-200">
            {content.keyTakeaways.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Answer</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Use our free salary calculator to estimate your take-home pay after federal and state taxes, Social Security, and Medicare. Explore average salary data by state, compare cost of living across regions, and read our expert guides on salary negotiation and tax planning.
          </p>
        </section>

        <AdUnit slot="SALARY_HUB_SLOT" format="horizontal" />

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

        {salaryTool && (
          <section className="border rounded-lg p-6 bg-white dark:bg-zinc-800/50">
            <h2 className="text-2xl font-semibold mb-4">Salary Calculator</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Calculate your take-home pay after taxes and deductions in {locale.name}.
            </p>
            <Link
              href={`/${locale.slug}/tools/salary-calculator`}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Open Salary Calculator
            </Link>
          </section>
        )}

        {salaryGuide && (
          <section className="border rounded-lg p-6 bg-white dark:bg-zinc-800/50">
            <h2 className="text-2xl font-semibold mb-4">Salary Guide</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Learn how salary, taxes, and deductions work in {locale.name}.
            </p>
            <Link
              href={`/${locale.slug}/guides/salary-after-tax-by-country`}
              className="inline-block bg-zinc-800 text-white px-6 py-3 rounded-lg hover:bg-zinc-700 transition dark:bg-zinc-200 dark:text-zinc-900"
            >
              Read Salary Guide
            </Link>
          </section>
        )}

        {salaryStates.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Average Salary by State</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {salaryStates.map((s) => (
                <Link
                  key={s.stateSlug}
                  href={`/${locale.slug}/average-salary/${s.stateSlug}`}
                  className="border rounded-lg p-4 hover:border-blue-400 transition text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {s.stateName}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-semibold mb-4">Salary by Profession</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {professions.map((p) => (
              <Link
                key={p.slug}
                href={`/${locale.slug}/salary/${p.slug}`}
                className="border rounded-lg p-4 hover:border-blue-400 transition text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </section>

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

        <section className="text-sm text-zinc-500">
          <h2 className="text-lg font-semibold text-zinc-700 mb-2">Sources</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Bureau of Labor Statistics - Occupational Employment and Wage Statistics</li>
            <li>US Census Bureau - American Community Survey</li>
            <li>Internal Revenue Service - Revenue Procedures</li>
            <li>Last updated: {lastUpdated}</li>
          </ul>
        </section>

        <NewsletterSignup locale={locale.slug} source="salary-hub" variant="banner" />

        <LastUpdated />
        <SourceFooter localeSlug={locale.slug} />
      </div>
      </>
  )
}
