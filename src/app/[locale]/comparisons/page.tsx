import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { tools } from "@/lib/content/templates"
import { getSiteIntelligence } from "@/lib/site-intelligence"
import { SITE_URL } from "@/lib/seo/constants"
import { FlagImage } from "@/components/ui/flag-image"

type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  return {
    title: `Financial Comparisons for ${locale.name} | Olikit`,
    description: `Compare financial tools, tax rates, and calculators across countries. See how ${locale.name} compares to other countries.`,
    alternates: { canonical: `${SITE_URL}/${locale.slug}/comparisons` },
    openGraph: {
      title: `Financial Comparisons for ${locale.name}`,
      description: `Compare financial data across countries.`,
    },
  }
}

export default async function ComparisonsPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()
  const si = getSiteIntelligence()

  return (
    <div className="space-y-12">
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Olikit Global — {locale.name}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Financial Comparisons for {locale.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Compare financial tools, tax rates, and calculators across countries. See how {locale.name} compares.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Compare by Tool</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.slice(0, 5).map((tool) => (
            <a
              key={tool.id}
              href={`/${locale.slug}/tools/${tool.slug}/compare`}
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">{tool.category}</p>
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{tool.name}</h3>
              <p className="text-sm leading-6 text-zinc-600">
                Compare {tool.name.toLowerCase()} across major economies.
              </p>
              <span className="mt-2 inline-block text-sm font-medium text-emerald-600">Compare &rarr;</span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Country Comparisons</h2>
        <div className="flex flex-wrap gap-2">
          {si.countries.filter(c => c.slug !== locale.slug).map((c) => (
            <a
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 transition hover:bg-zinc-50"
            >
              <FlagImage code={c.slug} size="lg" /> {c.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
