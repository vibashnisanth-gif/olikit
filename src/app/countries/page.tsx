import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { locales } from "@/lib/seo/locales"
import { getSiteIntelligence } from "@/lib/site-intelligence"
import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "All Countries — Global Overview",
  description: "Browse financial calculators and guides across major economies. Compare tools, tax systems, and financial data globally.",
  alternates: { canonical: `${SITE_URL}/countries` },
  openGraph: {
    title: "All Countries — Global Overview",
    description: "Browse financial calculators and guides across major economies. Compare tools, tax systems, and financial data globally.",
    url: `${SITE_URL}/countries`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Countries — Global Overview",
    description: "Browse financial calculators and guides across major economies. Compare tools, tax systems, and financial data globally.",
  },
}

export default function CountriesPage() {
  const si = getSiteIntelligence()

  return (
    <Shell>
      <div className="space-y-12">
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Olikit Global
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          All Countries
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Browse financial calculators, guides, and data for each country. Every country has country-specific tools, tax information, and financial resources.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href="/"
          className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
        >
          <p className="mb-2 text-2xl">🌍</p>
          <h3 className="mb-2 text-lg font-semibold text-zinc-950">Olikit Global</h3>
          <p className="text-sm leading-6 text-zinc-600">
            Homepage — explore all tools, guides, and global financial comparisons.
          </p>
          <span className="mt-2 inline-block text-sm font-medium text-emerald-600">
            Browse Global &rarr;
          </span>
        </a>
        {si.countries.map((c) => (
          <a
            key={c.slug}
            href={`/${c.slug}`}
            className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
          >
            <p className="mb-2 text-2xl">{c.flag}</p>
            <h3 className="mb-2 text-lg font-semibold text-zinc-950">{c.name}</h3>
            <p className="text-sm leading-6 text-zinc-600">
              Free financial calculators, tax information, and guides for {c.name}.
            </p>
            <span className="mt-2 inline-block text-sm font-medium text-emerald-600">
              Browse {c.name} &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
    </Shell>
  )
}
