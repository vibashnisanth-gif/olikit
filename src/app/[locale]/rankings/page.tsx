import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"

type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  return {
    title: `Financial Rankings for ${locale.name} | Olikit`,
    description: `Rank and compare financial tools, tax rates, salaries, and cost of living for ${locale.name}.`,
    alternates: { canonical: `https://olikit.com/${locale.slug}/rankings` },
    openGraph: {
      title: `Financial Rankings for ${locale.name}`,
      description: `Rank financial tools and data for ${locale.name}.`,
    },
  }
}

export default async function RankingsPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  return (
    <div className="space-y-12">
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Olikit Global — {locale.name}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Financial Rankings for {locale.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Rank and compare financial data for {locale.name}.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Featured Rankings</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={`/${locale.slug}/tools/salary-calculator`}
            className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold text-zinc-950">Salary Rankings</h3>
            <p className="text-sm leading-6 text-zinc-600">
              Compare salaries across countries and professions.
            </p>
          </a>
          <a
            href={`/${locale.slug}/tools/tax-calculator`}
            className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold text-zinc-950">Tax Rankings</h3>
            <p className="text-sm leading-6 text-zinc-600">
              Compare tax rates and brackets across countries.
            </p>
          </a>
          <a
            href={`/${locale.slug}/tools/mortgage-calculator`}
            className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold text-zinc-950">Mortgage Rankings</h3>
            <p className="text-sm leading-6 text-zinc-600">
              Compare mortgage rates and affordability across countries.
            </p>
          </a>
        </div>
      </section>
    </div>
  )
}
