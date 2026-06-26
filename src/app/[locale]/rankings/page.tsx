import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { tools } from "@/lib/content/templates"
import { SITE_URL } from "@/lib/seo/constants"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

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
    alternates: { canonical: `${SITE_URL}/${locale.slug}/rankings` },
    openGraph: {
      title: `Financial Rankings for ${locale.name}`,
      description: `Rank financial tools and data for ${locale.name}.`,
      url: `${SITE_URL}/${locale.slug}/rankings`,
      siteName: "Olikit",
      locale: locale.code,
      type: "website",
    },
  }
}

export default async function RankingsPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const rankingTools = tools.filter(t =>
    ["salary-calculator", "tax-calculator", "mortgage-calculator", "cost-of-living-calculator", "compound-interest-calculator"].includes(t.slug)
  )

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Financial Rankings for ${locale.name}`,
    description: `Rank and compare financial tools, tax rates, salaries, and cost of living for ${locale.name}.`,
    url: `${SITE_URL}/${locale.slug}/rankings`,
  }

  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-zinc-500">
        <a href={`/${locale.slug}`} className="hover:text-zinc-800">Home</a>
        <span className="mx-2">/</span>
        <span className="text-zinc-800">Rankings</span>
      </nav>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Olikit Global — {locale.name}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Financial Rankings for {locale.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Compare salaries, tax rates, mortgage costs, and cost of living across countries and professions. Our rankings use government-sourced data to help you make informed financial decisions.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Calculator Rankings</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rankingTools.map(tool => (
            <a
              key={tool.slug}
              href={`/${locale.slug}/tools/${tool.slug}`}
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{tool.name}</h3>
              <p className="text-sm leading-6 text-zinc-600">
                {tool.description || `Compare ${tool.name.toLowerCase()} data across countries and professions.`}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="text-sm">
            <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">How are Olikit rankings calculated?</summary>
            <p className="mt-2 text-zinc-600">Our rankings use data from official government sources including the Bureau of Labor Statistics, OECD, and national statistical agencies. We normalize data across countries using purchasing power parity (PPP) and exchange rate adjustments.</p>
          </details>
          <details className="text-sm">
            <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">How often are rankings updated?</summary>
            <p className="mt-2 text-zinc-600">Rankings are updated quarterly as new government data becomes available. Salary data is typically updated annually, while tax rates are updated when legislation changes.</p>
          </details>
          <details className="text-sm">
            <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">Can I compare rankings across different countries?</summary>
            <p className="mt-2 text-zinc-600">Yes. Use our comparison tool to compare salaries, taxes, and cost of living between any two countries. Each ranking page also shows related comparisons.</p>
          </details>
        </div>
      </section>

      <NewsletterSignup locale={locale.slug} source="rankings" variant="banner" />

      <LastUpdated />
      <SourceFooter localeSlug={locale.slug} />
    </div>
  )
}
