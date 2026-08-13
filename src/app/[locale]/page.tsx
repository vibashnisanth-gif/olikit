import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { locales, getLocale } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import { stateDataSets } from "@/lib/content/state-data"
import { getLastUpdated } from "@/lib/seo/freshness"
import { buildWebSiteJsonLd, buildOrganizationJsonLd } from "@/lib/seo/json-ld"
import { getAllCountries } from "@/lib/content/country-registry"
import { Shell } from "@/components/shell"
import { COUNTRY_CONTENT } from "@/lib/content/country-page-data"

type Props = { params: Promise<{ locale: string }> }

function SnapshotCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-zinc-950">{value}</p>
    </div>
  )
}

function InsightCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a href={href} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-zinc-950">{title}</h3>
      <p className="text-sm leading-6 text-zinc-600">{desc}</p>
    </a>
  )
}

function ProfessionGroup({ category, items }: { category: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">{category}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-sm text-zinc-700 hover:text-emerald-600 transition-colors">{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  const metadata = buildMetadata(locale, null, `/${locale.slug}`)
  return metadata
}

export default async function LocalePage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const slug = locale.slug
  const name = locale.name
  const states = locale.states
  const websiteJsonLd = buildWebSiteJsonLd(locale)
  const orgJsonLd = buildOrganizationJsonLd(locale)
  const content = COUNTRY_CONTENT[slug]
  const countries = getAllCountries()
  const usStates = states?.filter(s => stateDataSets.some(d => d.stateSlug === s.slug)) || []

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqQs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  return (
    <Shell localeSlug={slug}>
      <div className="space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* 1. HERO */}
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          {name} &mdash; Financial Intelligence
        </p>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          {content.heroH1}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
          {content.heroDesc}
        </p>
        <p className="mt-3 text-xs text-zinc-500">Last updated: June 2026</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`/${slug}/tools/salary-calculator`} className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
          <a href={`/${slug}/tools/tax-calculator`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
          <a href={`/${slug}/tools/mortgage-calculator`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Mortgage Calculator</a>
          <a href={`/${slug}/tools/salary-calculator?mode=after-tax`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary After Tax</a>
        </div>
      </section>

      {/* 2. COUNTRY SNAPSHOT */}
      <section>
        <h2 className="mb-2 text-2xl font-semibold text-zinc-950">{name} Financial Snapshot</h2>
        {content.snapshotDesc?.map((p, i) => (
          <p key={i} className="mb-3 text-sm leading-7 text-zinc-600 last:mb-4">{p}</p>
        ))}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <SnapshotCard label="Currency" value={content.snapshotCurrency} />
          <SnapshotCard label="Tax Authority" value={content.snapshotTaxAuthority} />
          <SnapshotCard label={content.snapshotSectorLabel || "Highest Paying Sector"} value={content.snapshotTopSectors} />
          <SnapshotCard label={content.snapshotRegionLabel || "Highest Paying State"} value={content.snapshotTopRegion} />
          <SnapshotCard label="Most Researched Profession" value={content.snapshotTopProfession} />
          <SnapshotCard label="Global Position" value={content.snapshotGlobalPosition} />
        </div>
      </section>

      {/* 3. KEY TAKEAWAYS */}
      {content.keyTakeaways && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.keyTakeaways.map((item) => (
              <div key={item.title} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="mb-1.5 text-base font-semibold text-zinc-950">{item.title}</h3>
                <p className="text-sm leading-6 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. POPULAR PROFESSION SALARIES */}
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Popular Profession Salaries</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.professionGroups.map((group) => (
            <ProfessionGroup key={group.category} {...group} />
          ))}
        </div>
      </section>

      {/* 5. FEATURED INSIGHTS */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Featured Insights</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.featuredInsights.map((insight) => (
            <InsightCard key={insight.title} {...insight} />
          ))}
        </div>
      </section>

      {/* 6. SALARY LANDSCAPE */}
      {content.salaryLandscape && (
        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{name} Salary Landscape</h2>
          {content.salaryLandscape.text.map((p, i) => (
            <p key={i} className="mb-3 text-sm leading-7 text-zinc-600 last:mb-0">{p}</p>
          ))}
        </section>
      )}

      {/* 7. EXPLORE STATES (US only) */}
      {usStates.length > 0 && (
        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-950">Explore States</h2>
              <p className="mt-1 text-sm text-zinc-600">Salary and cost-of-living insights by state. Compare salaries, taxes and affordability across states to better understand regional differences.</p>
            </div>
            <a href={`/${slug}/states`} className="shrink-0 text-sm font-medium text-blue-600 hover:underline">All States</a>
          </div>
          {content.stateDestinations && (
            <div className="mb-4 flex flex-wrap gap-2">
              {content.stateDestinations.map((s) => <span key={s} className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700">{s}</span>)}
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {usStates.slice(0, 6).map((s) => {
              const d = stateDataSets.find(d => d.stateSlug === s.slug)
              if (!d) return null
              return (
                <a key={s.slug} href={`/${slug}/state/${s.slug}`} className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-950">{s.name}</h3>
                  <p className="text-sm text-zinc-600">Avg salary: <strong>${d.dataPoints.averageSalary.toLocaleString()}</strong></p>
                  <p className="text-xs text-zinc-500">Median income: ${d.dataPoints.medianHouseholdIncome.toLocaleString()} &middot; COL index: {d.dataPoints.costOfLivingIndex}</p>
                </a>
              )
            })}
          </div>
        </section>
      )}

      {/* 8. GOVERNMENT SOURCES */}
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Government Sources</h2>
        <p className="mb-4 text-sm text-zinc-600 leading-relaxed">
          Olikit uses publicly available information from government agencies and official publications. Salary, tax and economic information is derived from official public sources whenever possible.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {(content.govSources || [
            { name: "IRS", desc: "US tax brackets and labor data" },
            { name: "HMRC", desc: "UK tax rates and allowances" },
            { name: "ATO", desc: "Australian tax and superannuation" },
            { name: "CRA", desc: "Canadian tax brackets and benefits" },
            { name: "IRD", desc: "New Zealand tax rates" },
            { name: "Income Tax Dept", desc: "India tax slabs and rules" },
            { name: "IRAS", desc: "Singapore individual tax rates" },
            { name: "CPF Board", desc: "Singapore CPF contributions" },
          ]).map((source) => (
            <div key={source.name} className="rounded-md bg-zinc-50 p-3">
              <p className="font-semibold text-zinc-950 text-sm">{source.name}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{source.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. WHY TRUST OLIKIT */}
      <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-950">Why Trust Olikit</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(content.trustItems || [
            { title: "Government-Sourced Data", desc: "Salary, tax and labor-market information is derived from official publications and public datasets." },
            { title: "Transparent Methodology", desc: "Calculation assumptions, methodologies and update processes are publicly documented." },
            { title: "Independent Research", desc: "Research and rankings are created independently using transparent criteria." },
            { title: "Regular Updates", desc: "Salary benchmarks, tax rates and methodologies are reviewed and updated as new information becomes available." },
          ]).map((item) => (
            <div key={item.title}>
              <h3 className="mb-1.5 text-sm font-semibold text-zinc-950">{item.title}</h3>
              <p className="text-sm leading-6 text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/about" className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">About Our Methodology</Link>
          <Link href="/methodology" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">View Methodology</Link>
        </div>
      </section>

      {/* 10. COUNTRY FAQ */}
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {content.faqQs.map((faq, i) => (
            <details key={i} className="text-sm">
              <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">{faq.q}</summary>
              <p className="mt-2 text-zinc-500">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
    </Shell>
  )
}
