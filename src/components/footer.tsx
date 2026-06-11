import Link from "next/link"
import { getAllCountries } from "@/lib/content/country-registry"
import { locales } from "@/lib/seo/locales"
import { Logo } from "./ui/logo"

type Props = {
  currentSlug: string | null
}

export function Footer({ currentSlug }: Props) {
  const countries = getAllCountries()
  const isGlobal = !currentSlug

  const localesWithStates = locales.filter((l) => l.states)
  const stateCountrySlugs = localesWithStates.map((l) => l.slug)

  return (
    <footer className="mt-auto border-t border-border-light bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-10">
          <Logo href={isGlobal ? "/" : `/${currentSlug}`} />
          <p className="mt-2 max-w-lg text-sm text-text-muted">
            Olikit helps professionals compare salaries, taxes, compensation and living costs using government-sourced data and transparent methodologies.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Countries</h3>
            <ul className="space-y-1.5">
              {countries.map((c) => (
                <li key={c.slug}>
                  <a href={`/${c.slug}`} className={`flex items-center gap-2 text-sm transition-colors hover:text-text-primary ${
                    c.slug === currentSlug ? "font-medium text-text-primary" : "text-text-muted"
                  }`}>
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </a>
                  {stateCountrySlugs.includes(c.slug) && (
                    <a href={`/${c.slug}/states`} className="ml-7 block text-[10px] text-text-muted hover:text-text-secondary transition-colors">
                      States & regions &rarr;
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Research</h3>
            <ul className="space-y-1.5 text-sm text-text-muted">
              <li><a href="/compare" className="transition-colors hover:text-text-primary">Global Comparisons</a></li>
              <li><a href="/rankings" className="transition-colors hover:text-text-primary">Global Rankings</a></li>
              <li><a href="/research" className="transition-colors hover:text-text-primary">Global Research</a></li>
              <li><a href="/professions" className="transition-colors hover:text-text-primary">Professions by Salary</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Trust</h3>
            <ul className="space-y-1.5 text-sm text-text-muted">
              <li><a href="/methodology" className="transition-colors hover:text-text-primary">Methodology</a></li>
              <li><a href="/data-sources" className="transition-colors hover:text-text-primary">Data Sources</a></li>
              <li><a href="/editorial-policy" className="transition-colors hover:text-text-primary">Editorial Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Company</h3>
            <ul className="space-y-1.5 text-sm text-text-muted">
              <li><Link href="/about" className="transition-colors hover:text-text-primary">About</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-text-primary">Contact</Link></li>
              <li><Link href="/privacy-policy" className="transition-colors hover:text-text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="transition-colors hover:text-text-primary">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border-light pt-6 text-center text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} Olikit Global. All rights reserved.</p>
          <p className="mt-1">Independent financial intelligence</p>
        </div>
      </div>
    </footer>
  )
}
