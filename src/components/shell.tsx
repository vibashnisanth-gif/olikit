"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { getCountry } from "@/lib/content/country-registry"
import { ContextBar } from "./context-bar"
import { Header } from "./header"
import { Footer } from "./footer"
import { Breadcrumbs } from "./breadcrumbs"
import { CookieConsent } from "./cookie-consent"
import { PageTracker } from "@/lib/analytics/page-tracker"
import { CurrencyToggle } from "@/components/ui/currency-toggle"

export function Shell({ children, localeSlug }: { children: React.ReactNode; localeSlug?: string }) {
  const pathname = usePathname()
  const slug = localeSlug ?? (pathname?.split("/")[1] || null)
  const country = slug ? getCountry(slug) : null

  useEffect(() => {
    if (slug && country) {
      try {
        localStorage.setItem("olikit-last-locale", slug)
      } catch {}
    }
  }, [slug, country])

  return (
    <div className="flex flex-col min-h-full">
      <ContextBar slug={country?.slug ?? null} name={country?.name ?? null} currencyCode={country?.currencyCode ?? ""} taxAuthority={country?.taxAuthority ?? ""} />
      <PageTracker />
      <Header currentSlug={country?.slug ?? null} />
      <main id="main-content" className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
        <Breadcrumbs />
        <div className="flex justify-end mb-4">
          <CurrencyToggle />
        </div>
        {children}
      </main>
      <Footer currentSlug={country?.slug ?? null} />
      <CookieConsent />
    </div>
  )
}
