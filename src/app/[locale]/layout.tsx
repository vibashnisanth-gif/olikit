import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales as allLocales } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import { ContextBar } from "@/components/context-bar"
import { Header } from "@/components/header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) return {}

  return buildMetadata(locale, null, `/${locale.slug}`)
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale: localeSlug } = await params
  const locale = getLocale(localeSlug)
  if (!locale) notFound()

  const slug = locale.slug
  const name = locale.name

  return (
    <div className="flex flex-col min-h-full">
      <ContextBar slug={slug} name={name} />
      <Header currentSlug={slug} />
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
        <Breadcrumbs />
        {children}
      </main>
      <Footer currentSlug={slug} />
      <CookieConsent />
    </div>
  )
}
