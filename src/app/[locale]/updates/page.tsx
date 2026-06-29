import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { locales, getLocale } from "@/lib/seo/locales"
import { updates } from "@/lib/content/updates"
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
    title: "Latest Updates - Olikit",
    description: "Stay up to date with the latest tax updates, salary data changes, mortgage rate updates, and new content on Olikit.",
    alternates: { canonical: `${SITE_URL}/${locale.slug}/updates` },
    robots: { index: false, follow: true },
  }
}

export default async function UpdatesPage({ params }: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const categoryColors: Record<string, string> = {
    tax: "bg-amber-100 text-amber-800",
    salary: "bg-blue- text-blue-",
    mortgage: "bg-blue-100 text-blue-800",
    guide: "bg-purple-100 text-purple-800",
    data: "bg-cyan-100 text-cyan-800",
    site: "bg-zinc-100 text-zinc-800",
  }

  return (
    <div className="space-y-10">
      <div className="rounded-lg border border-zinc-200 bg-white px-5 py-7 shadow-sm sm:px-8">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Latest Updates</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">Stay informed about the latest tax updates, salary data changes, mortgage rate changes, new guides, and site improvements. All updates are sourced and dated for transparency.</p>
      </div>

      <div className="space-y-4">
        {updates.map((update, i) => (
          <article key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-3">
              <time className="text-sm font-medium text-zinc-700">{update.date}</time>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[update.category] || "bg-zinc-100 text-zinc-800"}`}>
                {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
              </span>
            </div>
            <h2 className="mb-2 text-lg font-semibold text-zinc-950">{update.title}</h2>
            <p className="mb-3 text-sm text-zinc-600">{update.description}</p>
            <div className="mb-2 text-xs text-zinc-500">Source: {update.source}</div>
            {update.relatedPages.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {update.relatedPages.map((page) => (
                  <Link key={page.href} href={page.href} className="rounded-md bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-100">{page.label}</Link>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <SourceFooter localeSlug={locale.slug} />
      <LastUpdated />
    </div>
  )
}
