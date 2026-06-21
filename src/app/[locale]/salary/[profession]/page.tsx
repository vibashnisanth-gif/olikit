import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { SITE_URL } from "@/lib/seo/constants"
import { getLastUpdated } from "@/lib/seo/freshness"
import { professions, getProfession, getProfessionSalary } from "@/lib/content/professions-data"
import { professionsContent } from "@/lib/content/profession-content"
import { professionComparisonPairs } from "@/lib/content/profession-comparisons"
import { tools } from "@/lib/content/templates"
import { AffiliateSidebar } from "@/components/affiliate-sidebar"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { AdUnit } from "@/components/ad-unit"
import { formatSalary as fmtSalary, formatSalaryFull as fmtSalaryFull, slugToCurrency } from "@/lib/currency"
import { Shell } from "@/components/shell"

type Props = {
  params: Promise<{ locale: string; profession: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; profession: string }[] = []
  for (const locale of locales) {
    for (const profession of professions) {
      params.push({ locale: locale.slug, profession: profession.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug, profession: professionSlug } = await params
  const locale = getLocale(localeSlug)
  const profession = getProfession(professionSlug)
  if (!locale || !profession) return {}

  const title = profession.metaTitleTemplate.replace("{country}", locale.name)
  const description = profession.metaDescriptionTemplate.replace("{country}", locale.name)

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${locale.slug}/salary/${profession.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale.slug}/salary/${profession.slug}`,
      siteName: "Olikit",
      locale: locale.code,
      type: "website",
    },
  }
}

function formatSalary(value: number, localeSlug: string): string {
  return fmtSalary(value, slugToCurrency(localeSlug), { compact: value >= 100000 })
}

function formatSalaryFull(value: number, localeSlug: string): string {
  return fmtSalary(value, slugToCurrency(localeSlug))
}

export default async function ProfessionPage({ params }: Props) {
  const { locale: localeSlug, profession: professionSlug } = await params
  const localeVal = getLocale(localeSlug)
  const professionVal = getProfession(professionSlug)
  if (!localeVal || !professionVal) notFound()

  const salaryData = getProfessionSalary(professionVal, localeSlug)
  if (!salaryData) notFound()

  const locale = localeVal
  const profession = professionVal
  const salary = salaryData

  const year = locale.taxTerms.incomeTaxYear
  const symbol = locale.currency.symbol
  const content = professionsContent[localeSlug]?.[profession.slug] ?? { sections: [], faqs: [] }
  const lastUpdated = getLastUpdated()

  function jsonLd() {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${profession.name} Salary in ${locale.name} (${year})`,
      description: `Average ${profession.name.toLowerCase()} salary in ${locale.name}: ${formatSalaryFull(salary.average, localeSlug)}. Entry-level: ${formatSalaryFull(salary.entryLevel, localeSlug)}. Experienced: ${formatSalaryFull(salary.experienced, localeSlug)}.`,
      dateModified: lastUpdated,
      publisher: { "@type": "Organization", name: "Olikit" },
      mainEntityOfPage: `${SITE_URL}/${locale.slug}/salary/${profession.slug}`,
    }
  }

  return (
    <Shell localeSlug={localeSlug}>
      <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      <nav className="text-sm text-zinc-500 mb-6">
        <a href={`/${locale.slug}`} className="hover:text-zinc-800">Home</a>
        <span className="mx-2">/</span>
        <a href={`/${locale.slug}/salary`} className="hover:text-zinc-800">Salary</a>
        <span className="mx-2">/</span>
        <span className="text-zinc-800">{profession.name}</span>
      </nav>

      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <p className="mb-3 text-sm font-semibold uppercase text-emerald-700">
          {locale.name} salary guide
        </p>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          {profession.name} Salary in {locale.name} ({year})
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
          The average {profession.name.toLowerCase()} salary in {locale.name} is{" "}
          <strong>{formatSalaryFull(salary.average, localeSlug)}</strong> per year.
          Entry-level positions start at {formatSalaryFull(salary.entryLevel, localeSlug)},
          while experienced professionals can earn up to{" "}
          {formatSalaryFull(salary.experienced, localeSlug)}.
        </p>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 px-6 py-5 shadow-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
          Salary Snapshot
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-sm text-blue-700">Average Annual Salary</p>
            <p className="text-2xl font-bold text-blue-900">{formatSalaryFull(salary.average, localeSlug)}</p>
          </div>
          <div>
            <p className="text-sm text-blue-700">Entry Level</p>
            <p className="text-2xl font-bold text-blue-900">{formatSalaryFull(salary.entryLevel, localeSlug)}</p>
          </div>
          <div>
            <p className="text-sm text-blue-700">Experienced</p>
            <p className="text-2xl font-bold text-blue-900">{formatSalaryFull(salary.experienced, localeSlug)}</p>
          </div>
        </div>
      </div>

      <NewsletterSignup locale={localeSlug} source={`profession-${professionSlug}`} variant="banner" />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-950">
              {profession.name} Salary Range in {locale.name}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="py-2 pr-4 text-left font-medium text-zinc-500">Level</th>
                    <th className="py-2 pr-4 text-right font-medium text-zinc-500">Annual Salary ({symbol})</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 text-zinc-900">Entry Level</td>
                    <td className="py-3 pr-4 text-right font-medium text-zinc-900">{formatSalaryFull(salary.entryLevel, localeSlug)}</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 text-zinc-900">Average</td>
                    <td className="py-3 pr-4 text-right font-medium text-zinc-900">{formatSalaryFull(salary.average, localeSlug)}</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-3 pr-4 text-zinc-900">Experienced / Senior</td>
                    <td className="py-3 pr-4 text-right font-medium text-zinc-900">{formatSalaryFull(salary.experienced, localeSlug)}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-zinc-900">Salary Range</td>
                    <td className="py-3 pr-4 text-right font-medium text-zinc-900">
                      {formatSalaryFull(salary.rangeLow, localeSlug)} – {formatSalaryFull(salary.rangeHigh, localeSlug)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {content.sections.map((section, i) => (
            <section key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-zinc-950">{section.heading}</h2>
              <p className="text-zinc-600 leading-relaxed">{section.body}</p>
            </section>
          ))}

          <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Calculate Your {profession.name} Take-Home Pay
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Use our free {locale.name} salary calculator to see your exact take-home pay after
              income tax, social security, and other deductions.
            </p>
            <a
              href={`/${locale.slug}/tools/salary-calculator`}
              className="inline-block rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Calculate Take-Home Pay
            </a>
          </section>

          <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Find {profession.name} Jobs in {locale.name}
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Ready to advance your career? Browse {profession.name.toLowerCase()} job openings
              in {locale.name} on these leading job platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={localeSlug === "us" ? "https://www.indeed.com" : localeSlug === "uk" ? "https://uk.indeed.com" : `https://${localeSlug}.indeed.com`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50 transition-colors"
              >
                Indeed
              </a>
              <a
                href="https://www.linkedin.com/jobs"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50 transition-colors"
              >
                LinkedIn Jobs
              </a>
              {localeSlug === "au" || localeSlug === "nz" ? (
                <a
                  href={`https://www.seek.${localeSlug === "au" ? "com.au" : "co.nz"}`}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50 transition-colors"
                >
                  Seek
                </a>
              ) : localeSlug === "in" ? (
                <a
                  href="https://www.naukri.com"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50 transition-colors"
                >
                  Naukri
                </a>
              ) : localeSlug === "sg" ? (
                <a
                  href="https://www.jobstreet.com.sg"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50 transition-colors"
                >
                  JobStreet
                </a>
              ) : null}
            </div>
          </section>

          <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-zinc-950">
              Compare {profession.name} Salaries Across Countries
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              See how {profession.name.toLowerCase()} salaries compare between different countries.
            </p>
            <div className="flex flex-wrap gap-3">
              {professionComparisonPairs
                .filter((p) => p.professionSlug === profession.slug && (p.pairA === localeSlug || p.pairB === localeSlug))
                .slice(0, 4)
                .map((p) => {
                  const otherName = p.pairA === localeSlug ? p.pairB : p.pairA
                  const otherLocale = getLocale(otherName)
                  return (
                    <a
                      key={`${p.pairA}-${p.pairB}`}
                      href={`/${localeSlug}/comparisons/profession-salary/${p.professionSlug}-${p.pairA}-vs-${p.pairB}`}
                      className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {locale.name} vs {otherLocale?.name ?? otherName}
                    </a>
                  )
                })}
            </div>
          </section>

          <section className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-500 leading-relaxed">
            Salary figures represent averages from government labor statistics and industry surveys. Individual compensation varies by experience, employer, location, and qualifications. Tax calculations use official brackets from {locale.name}&apos;s tax authority. Figures updated {lastUpdated}. See <a href="/methodology" className="text-emerald-700 hover:text-emerald-600 font-medium">methodology</a> for details.
          </section>

          {content.faqs.length > 0 && (
            <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-zinc-950">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {content.faqs.map((faq, i) => (
                  <details key={i} className="text-sm">
                    <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-zinc-500">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="mb-3 font-semibold text-zinc-950">Related Tools</h3>
            <div className="space-y-2">
              {profession.relatedTools.map((toolId) => {
                const tool = tools.find((t) => t.id === toolId)
                if (!tool) return null
                return (
                  <a
                    key={tool.slug}
                    href={`/${locale.slug}/tools/${tool.slug}`}
                    className="block rounded-md px-2 py-1.5 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                  >
                    {tool.name}
                  </a>
                )
              })}
            </div>
          </div>

          <AffiliateSidebar
            countrySlug={localeSlug}
            toolCategory="salary"
            toolName={profession.shortName}
          />

          <NewsletterSignup locale={localeSlug} source={`profession-sidebar-${professionSlug}`} variant="sidebar" />

          <AdUnit slot="PROFESSION_SALARY_SLOT" format="rectangle" className="hidden md:block" />

          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="mb-3 font-semibold text-zinc-950">Other Countries</h3>
            <div className="space-y-2">
              {locales
                .filter((l) => l.slug !== localeSlug)
                .map((l) => (
                  <a
                    key={l.slug}
                    href={`/${l.slug}/salary/${profession.slug}`}
                    className="block rounded-md px-2 py-1.5 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                  >
                    {profession.name} Salary {l.name}
                  </a>
                ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
    </Shell>
  )
}
