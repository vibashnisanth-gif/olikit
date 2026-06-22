import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales } from "@/lib/seo/locales"
import { guides } from "@/lib/content/guide-templates"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}

  return {
    title: `Financial Guides for ${locale.name} | Olikit`,
    description: `Practical financial guides for ${locale.name}. Learn about salary, tax, mortgage, retirement, and investment planning.`,
    alternates: {
      canonical: `https://olikit.com/${locale.slug}/guides`,
    },
    openGraph: {
      title: `Financial Guides for ${locale.name}`,
      description: `Practical financial guides for ${locale.name}.`,
    },
  }
}

export default async function GuidesPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const slug = locale.slug
  const name = locale.name

  return (
    <div className="space-y-12">
      <section className="rounded-lg border border-zinc-200 bg-white px-5 py-10 shadow-sm sm:px-8 sm:py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Free financial guides for {name}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Financial Guides for {name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Practical guides to help you make better financial decisions in {name}. Learn about salary after tax,
          tax brackets, mortgage affordability, retirement planning, and compound interest.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <a
            key={guide.id}
            href={`/${slug}/guides/${guide.slug}`}
            className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
          >
            <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">
              {guide.category}
            </p>
            <h3 className="mb-2 text-lg font-semibold text-zinc-950">{guide.name}</h3>
            <p className="text-sm leading-6 text-zinc-600">
              {guide.description.replace("{country}", name)}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
