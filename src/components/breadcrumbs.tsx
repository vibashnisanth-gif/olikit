"use client"

import { usePathname } from "next/navigation"
import { getAllCountries } from "@/lib/content/country-registry"
import { FlagImage } from "@/components/ui/flag-image"

const GLOBAL = { label: "Global", href: "/", slug: "" }

const LABEL_MAP: Record<string, string> = {
  countries: "Countries",
  professions: "Professions",
  compare: "Compare",
  rankings: "Rankings",
  research: "Research",
  methodology: "Methodology",
  "data-sources": "Data Sources",
  "editorial-policy": "Editorial Policy",
  about: "About",
  contact: "Contact",
  "privacy-policy": "Privacy",
  terms: "Terms",
  disclaimer: "Disclaimer",
  guides: "Guides",
  tools: "Tools",
  salary: "Salaries",
  state: "States",
  "guides/best": "Best Services",
  comparisons: "Comparisons",
  search: "Search",
  best: "Best Services",
}

function humanize(segment: string): string {
  return LABEL_MAP[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

function isCountrySlug(slug: string): boolean {
  return getAllCountries().some((c) => c.slug === slug)
}

type Crumb = { href: string; label: string; slug: string }

export function Breadcrumbs() {
  const pathname = usePathname()
  if (!pathname || pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)
  const crumbs: Crumb[] = [{ href: "/", label: "Global", slug: "" }]

  let accumulated = ""

  for (const seg of segments) {
    accumulated += `/${seg}`
    let label = humanize(seg)
    let slug = ""

    if (isCountrySlug(seg)) {
      const country = getAllCountries().find((c) => c.slug === seg)
      if (country) {
        label = country.name
        slug = country.slug
      }
    }

    crumbs.push({ href: accumulated, label, slug })
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && (
              <svg className="h-3 w-3 shrink-0 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            {i < crumbs.length - 1 ? (
              <a
                href={crumb.href}
                className="flex items-center gap-1 hover:text-text-primary transition-colors"
              >
                {crumb.slug ? <FlagImage code={crumb.slug} size="xs" /> : <span className="text-[10px]" role="img" aria-label="Global">🌍</span>}
                {crumb.label}
              </a>
            ) : (
              <span className="flex items-center gap-1 font-medium text-text-secondary">
                {crumb.slug ? <FlagImage code={crumb.slug} size="xs" /> : <span className="text-[10px]" role="img" aria-label="Global">🌍</span>}
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
