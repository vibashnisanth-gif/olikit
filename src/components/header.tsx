"use client"

import { useState } from "react"
import { getAllCountries } from "@/lib/content/country-registry"
import { CountrySwitcher } from "./country-switcher"

type Props = {
  currentSlug: string | null
}

export function Header({ currentSlug }: Props) {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const isGlobal = !currentSlug

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/${currentSlug || "us"}/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  const countries = getAllCountries()
  const label = isGlobal ? "Global" : (countries.find((c) => c.slug === currentSlug)?.name ?? "Global")

  const navLinks = [
    { label: "Home", href: isGlobal ? "/" : `/${currentSlug}` },
    { label: "Comparisons", href: "/compare" },
    { label: "Rankings", href: "/rankings" },
    { label: "Research", href: "/research" },
    { label: "Guides", href: isGlobal ? "/us/guides" : `/${currentSlug}/guides` },
    { label: "About", href: "/about" },
  ]

  return (
    <header className="sticky top-8 z-30 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a
          href={isGlobal ? "/" : `/${currentSlug}`}
          className="flex items-center gap-2 font-bold text-lg text-zinc-950 shrink-0"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-sm font-bold text-white">
            O
          </span>
          <span>Olikit</span>
        </a>

        <div className="hidden lg:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}

          <CountrySwitcher
            currentSlug={currentSlug}
            currentName={label}
            countries={countries.map((c) => ({ slug: c.slug, name: c.name, flag: c.flag }))}
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="rounded-md p-3 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
            aria-label="Search"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-md p-3 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div className="border-t border-zinc-100 bg-white px-4 py-3">
          <form onSubmit={handleSearch} className="mx-auto flex max-w-2xl gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools, guides, salaries..."
              className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-300"
              autoFocus
            />
            <button
              type="submit"
              className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 lg:hidden" onClick={() => setOpen(false)} />
          <div className="absolute left-0 right-0 top-full z-50 max-h-[80vh] overflow-y-auto border-b border-zinc-200 bg-white shadow-lg lg:hidden">
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 border-t border-zinc-100 pt-3">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Countries
                </p>
                <div className="px-3">
                  <CountrySwitcher
                    currentSlug={currentSlug}
                    currentName={label}
                    countries={countries.map((c) => ({ slug: c.slug, name: c.name, flag: c.flag }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
