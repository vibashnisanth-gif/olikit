import Link from "next/link"
import { getAllCountries } from "@/lib/content/country-registry"
import { getSiteIntelligence } from "@/lib/site-intelligence"
import { locales } from "@/lib/seo/locales"
import { FlagImage } from "@/components/ui/flag-image"

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
    <footer aria-label="Site footer" className="mt-auto border-t border-zinc-800 bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-10">
          <a href={isGlobal ? "/" : `/${currentSlug}`} className="flex items-center gap-2 font-bold text-lg text-white">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-blue-600 text-sm font-bold text-white">O</span>
            Olikit
          </a>
          <p className="mt-2 max-w-lg text-sm text-zinc-400">
            Olikit helps professionals compare salaries, taxes, compensation and living costs using government-sourced data and transparent methodologies.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">Countries</h3>
            <ul className="space-y-1">
              {countries.map((c) => (
                <li key={c.slug}>
                  <a href={`/${c.slug}`} className={`flex items-center gap-2 py-1 text-sm transition-colors hover:text-white ${
                    c.slug === currentSlug ? "font-medium text-white" : "text-zinc-400"
                  }`}>
                    <FlagImage code={c.slug} size="xs" />
                    <span>{c.name}</span>
                  </a>
                  {stateCountrySlugs.includes(c.slug) && (
                    <a href={`/${c.slug}/states`} className="ml-7 block py-1 text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors">
                      States & regions →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">Professions</h3>
            <ul className="space-y-1 text-sm text-zinc-400">
              <li><a href="/software-engineer" className="block py-1 transition-colors hover:text-white">Software Engineer</a></li>
              <li><a href="/data-scientist" className="block py-1 transition-colors hover:text-white">Data Scientist</a></li>
              <li><a href="/product-manager" className="block py-1 transition-colors hover:text-white">Product Manager</a></li>
              <li><a href="/professions" className="block py-1 transition-colors hover:text-white">All Professions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">Research</h3>
            <ul className="space-y-1 text-sm text-zinc-400">
              <li><a href="/compare" className="block py-1 transition-colors hover:text-white">Country Comparison Tool</a></li>
              <li><a href="/comparisons" className="block py-1 transition-colors hover:text-white">Salary Comparisons</a></li>
              <li><a href="/rankings" className="block py-1 transition-colors hover:text-white">Global Rankings</a></li>
              <li><a href="/research" className="block py-1 transition-colors hover:text-white">Global Research</a></li>
              <li><a href="/professions" className="block py-1 transition-colors hover:text-white">Professions by Salary</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">Trust</h3>
            <ul className="space-y-1 text-sm text-zinc-400">
              <li><a href="/methodology" className="block py-1 transition-colors hover:text-white">Methodology</a></li>
              <li><a href="/data-sources" className="block py-1 transition-colors hover:text-white">Data Sources</a></li>
              <li><a href="/editorial-policy" className="block py-1 transition-colors hover:text-white">Editorial Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">Company</h3>
            <ul className="space-y-1 text-sm text-zinc-400">
              <li><a href="/about" className="block py-1 transition-colors hover:text-white">About</a></li>
              <li><a href="/contact" className="block py-1 transition-colors hover:text-white">Contact</a></li>
              <li><a href="/privacy-policy" className="block py-1 transition-colors hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="block py-1 transition-colors hover:text-white">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Olikit Global. All rights reserved.</p>
          <p className="mt-1">Independent financial intelligence</p>
        </div>
      </div>
    </footer>
  )
}
