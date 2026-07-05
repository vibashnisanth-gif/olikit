import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getLocale, locales} from "@/lib/seo/locales";
import {SITE_URL} from "@/lib/seo/constants";
import {NewsletterSignup} from "@/components/newsletter-signup";
import {SourceFooter} from "@/components/source-footer";
import {LastUpdated} from "@/components/last-updated";

type Props = {params: Promise<{locale: string}>};

export async function generateStaticParams() {
  return locales.map((locale) => ({locale: locale.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale: localeSlug} = await params;
  const locale = getLocale(localeSlug);
  if (!locale) return {};
  return {
    title: `Salary & Career Rankings for ${locale.name} | Olikit`,
    description: `Compare salary rankings, best countries for specific professions, and highest-paying cities using government-sourced data for ${locale.name}.`,
    alternates: {canonical: `${SITE_URL}/${locale.slug}/rankings`},
    openGraph: {
      title: `Salary & Career Rankings for ${locale.name}`,
      description: `Salary rankings and career intelligence for ${locale.name}.`,
      url: `${SITE_URL}/${locale.slug}/rankings`,
      siteName: "Olikit",
      locale: locale.code,
      type: "website",
    },
  };
}

const salaryRankings = [
  {
    title: "Highest Paying Countries for Software Engineers",
    href: "/rankings/highest-paying-countries-software-engineers",
    desc: "Countries offering the highest absolute compensation for software engineers across all experience levels.",
  },
  {
    title: "Best Countries for Software Engineers",
    href: "/rankings/best-countries-for-software-engineers",
    desc: "Multi-factor ranking combining salary, tax burden, cost of living and quality of life.",
  },
  {
    title: "Highest Paying Cities for Software Engineers",
    href: "/rankings/highest-paying-cities-software-engineers",
    desc: "Metropolitan areas with the best compensation relative to living costs.",
  },
  {
    title: "Highest Paying Countries for Data Scientists",
    href: "/rankings/highest-paying-countries-data-scientists",
    desc: "Countries where data science talent earns the most, adjusted for local economic conditions.",
  },
  {
    title: "Best Countries for Data Scientists",
    href: "/rankings/best-countries-for-data-scientists",
    desc: "Rankings combining compensation, demand, and career growth potential for data scientists.",
  },
  {
    title: "Highest Paying Cities for Data Scientists",
    href: "/rankings/highest-paying-cities-data-scientists",
    desc: "Top-paying metro areas for data science professionals globally.",
  },
  {
    title: "Highest Paying Cities for Product Managers",
    href: "/rankings/highest-paying-cities-product-managers",
    desc: "Cities where product management roles offer the strongest compensation packages.",
  },
];

export default async function RankingsPage({params}: Props) {
  const {locale: localeSlug} = await params;
  const locale = getLocale(localeSlug);
  if (!locale) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Salary & Career Rankings for ${locale.name}`,
    description: `Compare salary rankings, best countries for specific professions, and highest-paying cities using government-sourced data for ${locale.name}.`,
    url: `${SITE_URL}/${locale.slug}/rankings`,
  };

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />

      <nav className="text-sm text-zinc-500">
        <Link href={`/${locale.slug}`} className="hover:text-zinc-800">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-800">Rankings</span>
      </nav>

      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Olikit Global — {locale.name}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Salary &amp; Career Rankings for {locale.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Data-driven rankings comparing countries, cities and professions by salary, tax burden,
          purchasing power and career potential. All figures sourced from government labor
          statistics and tax authorities.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary Rankings</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {salaryRankings.map((ranking) => (
            <Link
              key={ranking.href}
              href={ranking.href}
              className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-950">{ranking.title}</h3>
              <p className="text-sm leading-6 text-zinc-600">{ranking.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="text-sm">
            <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">
              How are Olikit rankings calculated?
            </summary>
            <p className="mt-2 text-zinc-600">
              Our rankings use data from official government sources including the Bureau of Labor
              Statistics, OECD, and national statistical agencies. We normalize data across
              countries using purchasing power parity (PPP) and exchange rate adjustments.
            </p>
          </details>
          <details className="text-sm">
            <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">
              How often are rankings updated?
            </summary>
            <p className="mt-2 text-zinc-600">
              Rankings are updated quarterly as new government data becomes available. Salary data
              is typically updated annually, while tax rates are updated when legislation changes.
            </p>
          </details>
          <details className="text-sm">
            <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">
              Can I compare rankings across different countries?
            </summary>
            <p className="mt-2 text-zinc-600">
              Yes. Use our comparison tool to compare salaries, taxes, and cost of living between
              any two countries. Each ranking page also shows related comparisons.
            </p>
          </details>
        </div>
      </section>

      <NewsletterSignup locale={locale.slug} source="rankings" variant="banner" />

      <LastUpdated />
      <SourceFooter localeSlug={locale.slug} />
    </div>
  );
}
