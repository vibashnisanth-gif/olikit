"use client"

import { usePathname } from "next/navigation"
import { getCountry } from "@/lib/content/country-registry"
import { getSiteIntelligence } from "@/lib/site-intelligence"
import { ContextBar } from "./context-bar"
import { Header } from "./header"
import { Footer } from "./footer"
import { Breadcrumbs } from "./breadcrumbs"
import { CookieConsent } from "./cookie-consent"
import { PageTracker } from "@/lib/analytics/page-tracker"

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const slug = pathname?.split("/")[1] || null
  const country = slug ? getCountry(slug) : null

  return (
    <div className="flex flex-col min-h-full">
      <ContextBar slug={country?.slug ?? null} name={country?.name ?? null} currencyCode="" taxAuthority="" />
      <PageTracker />
      <Header currentSlug={country?.slug ?? null} />
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
        <Breadcrumbs />
        {children}
      </main>
      <Footer currentSlug={country?.slug ?? null} />
      <CookieConsent />
    </div>
  )
}
