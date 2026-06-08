import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocale, locales as allLocales } from "@/lib/seo/locales"
import { buildMetadata } from "@/lib/seo/metadata"
import Link from "next/link"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { MobileNav } from "@/components/mobile-nav"
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
      <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href={`/${slug}`} className="flex items-center gap-2 font-bold text-lg text-zinc-950">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-sm font-bold text-white">
              O
            </span>
            <span>Olikit</span>
          </a>
          <div className="flex min-w-0 items-center gap-2 text-sm sm:gap-4">
            <a
              href={`/${slug}`}
              className="hidden text-zinc-600 transition-colors hover:text-zinc-950 sm:inline"
            >
              Tools
            </a>
            <a
              href={`/${slug}/guides`}
              className="hidden text-zinc-600 transition-colors hover:text-zinc-950 md:inline"
            >
              Guides
            </a>
            <a
              href={`/${slug}/salary`}
              className="hidden text-zinc-600 transition-colors hover:text-zinc-950 md:inline"
            >
              Salary
            </a>
            <Link
              href={`/${slug}/search`}
              className="hidden text-zinc-600 transition-colors hover:text-zinc-950 lg:inline"
            >
              Search
            </Link>
            <Link
              href="/about"
              className="hidden text-zinc-600 transition-colors hover:text-zinc-950 lg:inline"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hidden text-zinc-600 transition-colors hover:text-zinc-950 lg:inline"
            >
              Contact
            </Link>
            <LocaleSwitcher
              currentSlug={slug}
              currentName={name}
              locales={allLocales.map((l) => ({ slug: l.slug, name: l.name }))}
            />
            <MobileNav
              currentSlug={slug}
              currentName={name}
              locales={allLocales.map((l) => ({ slug: l.slug, name: l.name }))}
            />
          </div>
        </nav>
      </header>
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
        {children}
      </main>
      <footer className="mt-auto border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-950">
                <a href={`/${slug}`} className="hover:text-zinc-700">Olikit</a>
              </h3>
              <p className="text-sm text-zinc-500">
                Free calculators for financial decisions across major economies.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-950">Tools</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href={`/${slug}`} className="hover:text-zinc-950">All Tools</a></li>
                <li><a href={`/${slug}/guides`} className="hover:text-zinc-950">Guides</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-950">Resources</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href={`/${slug}/salary`} className="hover:text-zinc-950">Salary Hub</a></li>
                <li><a href={`/${slug}/average-salary/california`} className="hover:text-zinc-950">Average Salary</a></li>
                <li><a href={`/${slug}/cost-of-living/california`} className="hover:text-zinc-950">Cost of Living</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-950">Company</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link href="/about" className="hover:text-zinc-950">About</Link></li>
                <li><Link href="/contact" className="hover:text-zinc-950">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-950">Legal</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link href="/privacy-policy" className="hover:text-zinc-950">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-zinc-950">Terms of Use</Link></li>
                <li><Link href="/disclaimer" className="hover:text-zinc-950">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-100 pt-4 text-center text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Olikit. All rights reserved.
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  )
}
