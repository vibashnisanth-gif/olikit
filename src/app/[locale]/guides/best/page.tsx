import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { AffiliateDisclosure } from "@/components/affiliate-disclosure"
import { getAffiliateProductsByCategory } from "@/lib/monetization/config"
import { TrackedLink } from "@/components/tracked-link"

type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}
  return {
    title: `Best Financial Services in ${locale.name} | Olikit`,
    description: `Compare the best money transfer services, tax software, and investment platforms in ${locale.name}. Expert reviews and transparent methodology.`,
    alternates: { canonical: `https://olikit.com/${locale.slug}/guides/best` },
    openGraph: {
      title: `Best Financial Services in ${locale.name}`,
      description: `Expert-reviewed best services for ${locale.name}.`,
    },
  }
}

export default async function BestGuidesPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const slug = locale.slug
  const moneyTransfer = getAffiliateProductsByCategory("money-transfer").filter(p => p.countrySlug === slug)
  const taxSoftware = getAffiliateProductsByCategory("tax").filter(p => p.countrySlug === slug)
  const investment = getAffiliateProductsByCategory("investment").filter(p => p.countrySlug === slug)

  return (
    <div className="space-y-12">
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Best Financial Services in {locale.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Expert reviews and transparent rankings of the best money transfer services, tax software, and investment platforms in {locale.name}.
        </p>
      </section>

      {moneyTransfer.length > 0 && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Best Money Transfer Services</h2>
          <p className="mb-4 text-sm text-zinc-500">Send money internationally with low fees and great exchange rates.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {moneyTransfer.map((p, i) => (
              <TrackedLink key={`mt-${i}`} href={p.url} provider={p.name} localeSlug={slug} pageType="best-services"
                className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="text-lg font-semibold text-zinc-950">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-600">{p.description}</p>
                <span className="mt-2 inline-block text-sm font-medium text-blue-">Learn more →</span>
              </TrackedLink>
            ))}
          </div>
        </section>
      )}

      {taxSoftware.length > 0 && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Best Tax Software</h2>
          <p className="mb-4 text-sm text-zinc-500">File your taxes with confidence using top-rated software.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {taxSoftware.map((p, i) => (
              <TrackedLink key={`tax-${i}`} href={p.url} provider={p.name} localeSlug={slug} pageType="best-services"
                className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="text-lg font-semibold text-zinc-950">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-600">{p.description}</p>
                <span className="mt-2 inline-block text-sm font-medium text-blue-">Learn more →</span>
              </TrackedLink>
            ))}
          </div>
        </section>
      )}

      {investment.length > 0 && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Best Investment Platforms</h2>
          <p className="mb-4 text-sm text-zinc-500">Start investing with trusted platforms for beginners and experts.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {investment.map((p, i) => (
              <TrackedLink key={`inv-${i}`} href={p.url} provider={p.name} localeSlug={slug} pageType="best-services"
                className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                <h3 className="text-lg font-semibold text-zinc-950">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-600">{p.description}</p>
                <span className="mt-2 inline-block text-sm font-medium text-blue-">Learn more →</span>
              </TrackedLink>
            ))}
          </div>
        </section>
      )}

      <AffiliateDisclosure />
    </div>
  )
}
