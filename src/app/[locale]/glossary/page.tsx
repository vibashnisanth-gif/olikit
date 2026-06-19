import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { glossaryEntries } from "@/lib/content/glossary"
import { guides } from "@/lib/content/guide-templates"
import { tools } from "@/lib/content/templates"
import { SITE_URL } from "@/lib/seo/constants"
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
    title: "Financial Glossary - Olikit",
    description: "Comprehensive financial glossary covering salary, tax, mortgage, and investment terms. Clear definitions, real examples, and links to related calculators and guides.",
    alternates: { canonical: `${SITE_URL}/${locale.slug}/glossary` },
    robots: { index: false, follow: true },
  }
}

export default async function GlossaryPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const categories = [...new Set(glossaryEntries.map(e => e.category))]

  return (
    <div className="space-y-10">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Financial Glossary</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">Clear definitions and real examples of essential financial terms. Each entry includes examples, FAQs, and links to related calculators and guides on Olikit.</p>
      </div>

      <nav className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <a key={cat} href={`#${cat}`} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-50">
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </a>
        ))}
      </nav>

      {categories.map(category => (
        <section key={category} id={category} className="scroll-mt-20 space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-950">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="grid gap-4">
            {glossaryEntries.filter(e => e.category === category).map(entry => (
              <div key={entry.slug} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-zinc-950">
                  <Link href={`/${locale.slug}/glossary/${entry.slug}`} className="hover:text-blue-600">{entry.term}</Link>
                </h3>
                <p className="mb-3 text-sm text-zinc-600">{entry.definition}</p>
                <div className="mb-3 rounded-md bg-zinc-50 p-3">
                  <p className="text-xs font-semibold uppercase text-zinc-500">Example</p>
                  <p className="mt-1 text-sm text-zinc-700">{entry.example}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {entry.relatedCalculatorSlugs.map(slug => {
                    const tool = tools.find(t => t.slug === slug)
                    if (!tool) return null
                    return <Link key={slug} href={`/${locale.slug}/tools/${slug}`} className="rounded-md bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-100">{tool.shortName}</Link>
                  })}
                  {entry.relatedGuideSlugs.map(slug => {
                    const guide = guides.find(g => g.slug === slug)
                    if (!guide) return null
                    return <Link key={slug} href={`/${locale.slug}/guides/${slug}`} className="rounded-md bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-100">{guide.shortName}</Link>
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <SourceFooter localeSlug={locale.slug} />
      <LastUpdated />
    </div>
  )
}
