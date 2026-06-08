import Link from "next/link"
import { getAllCountries, COUNTRY_FLAGS } from "@/lib/content/country-registry"
import { getSiteIntelligence } from "@/lib/site-intelligence"
import { locales } from "@/lib/seo/locales"

type Props = {
  currentSlug: string | null
}

export function Footer({ currentSlug }: Props) {
  const countries = getAllCountries()
  const si = getSiteIntelligence()
  const isGlobal = !currentSlug

  const localesWithStates = locales.filter((l) => l.states)
  const stateCountrySlugs = localesWithStates.map((l) => l.slug)

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-10">
          <a href={isGlobal ? "/" : `/${currentSlug}`} className="flex items-center gap-2 font-bold text-lg text-zinc-950">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-sm font-bold text-white">O</span>
            Olikit
          </a>
          <p className="mt-2 max-w-lg text-sm text-zinc-500">
            Olikit helps professionals compare salaries, taxes, compensation and living costs using government-sourced data and transparent methodologies.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">Countries</h3>
            <ul className="space-y-1.5">
              {countries.map((c) => (
                <li key={c.slug}>
                  <a href={`/${c.slug}`} className={`flex items-center gap-2 text-sm transition-colors hover:text-zinc-950 ${
                    c.slug === currentSlug ? "font-medium text-zinc-950" : "text-zinc-500"
                  }`}>
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </a>
                  {stateCountrySlugs.includes(c.slug) && (
                    <a href={`/${c.slug}/states`} className="ml-7 block text-[10px] text-zinc-400 hover:text-zinc-600 transition-colors">
                      States & regions →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">Research</h3>
            <ul className="space-y-1.5 text-sm text-zinc-500">
              <li><a href="/compare" className="transition-colors hover:text-zinc-950">Global Comparisons</a></li>
              <li><a href="/rankings" className="transition-colors hover:text-zinc-950">Global Rankings</a></li>
              <li><a href="/research" className="transition-colors hover:text-zinc-950">Global Research</a></li>
              <li><a href="/professions" className="transition-colors hover:text-zinc-950">Professions by Salary</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">Trust</h3>
            <ul className="space-y-1.5 text-sm text-zinc-500">
              <li><a href="/methodology" className="transition-colors hover:text-zinc-950">Methodology</a></li>
              <li><a href="/data-sources" className="transition-colors hover:text-zinc-950">Data Sources</a></li>
              <li><a href="/editorial-policy" className="transition-colors hover:text-zinc-950">Editorial Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">Company</h3>
            <ul className="space-y-1.5 text-sm text-zinc-500">
              <li><Link href="/about" className="transition-colors hover:text-zinc-950">About</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-zinc-950">Contact</Link></li>
              <li><Link href="/privacy-policy" className="transition-colors hover:text-zinc-950">Privacy Policy</Link></li>
              <li><Link href="/terms" className="transition-colors hover:text-zinc-950">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Olikit Global. All rights reserved.</p>
          <p className="mt-1">Independent financial intelligence</p>
        </div>
      </div>
    </footer>
  )
}
