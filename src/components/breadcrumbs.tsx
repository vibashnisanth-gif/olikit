"use client"

import { usePathname } from "next/navigation"
import { getAllCountries } from "@/lib/content/country-registry"

const GLOBAL = { label: "🌍 Global", href: "/" }

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

export function Breadcrumbs() {
  const pathname = usePathname()
  if (!pathname || pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)
  const crumbs: { href: string; label: string }[] = [{ href: "/", label: "🌍 Global" }]

  let accumulated = ""

  for (const seg of segments) {
    accumulated += `/${seg}`
    let label = humanize(seg)

    if (isCountrySlug(seg)) {
      const country = getAllCountries().find((c) => c.slug === seg)
      if (country) {
        label = `${country.flag} ${country.name}`
      }
    }

    crumbs.push({ href: accumulated, label })
  }

  const crumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label.replace(/[^\w\s]/g, "").trim(),
      item: `https://olikit.com${crumb.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsJsonLd) }}
      />
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
                  className="hover:text-text-primary transition-colors"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="font-medium text-text-secondary">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
