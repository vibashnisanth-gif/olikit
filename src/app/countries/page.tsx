import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL } from "@/lib/seo/constants"
import { locales } from "@/lib/seo/locales"
import { getSiteIntelligence } from "@/lib/site-intelligence"
import { Shell } from "@/components/shell"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SourceFooter } from "@/components/source-footer"
import { LastUpdated } from "@/components/last-updated"

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Countries",
    description: "Browse financial calculators and guides across major economies.",
    url: `${SITE_URL}/countries`,
  }

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-10">
        <nav className="text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-800">Countries</span>
        </nav>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Olikit Global
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            All Countries
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            Browse financial calculators, guides, and data for each country. Every country page includes country-specific salary calculators, tax information, cost of living data, and expert financial guides.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500">
            Select a country below to explore salary benchmarks, tax brackets, mortgage calculators, and comprehensive financial resources tailored to that economy.
          </p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
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
          </Link>
          {si.countries.map((c) => (
            <Link
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
            </Link>
          ))}
        </div>

        <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className="text-sm">
              <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">How do I find calculators for my country?</summary>
              <p className="mt-2 text-zinc-600">Select your country from the grid above. Each country page includes salary calculators, tax calculators, mortgage tools, and cost of living data specific to that economy.</p>
            </details>
            <details className="text-sm">
              <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">What data sources does Olikit use?</summary>
              <p className="mt-2 text-zinc-600">We use official government sources including the Bureau of Labor Statistics (US), OECD, HMRC (UK), ATO (Australia), and national statistical agencies worldwide.</p>
            </details>
          </div>
        </section>

        <NewsletterSignup source="countries" variant="banner" />

        <LastUpdated />
        <SourceFooter localeSlug="us" />
      </div>
    </Shell>
  )
}
