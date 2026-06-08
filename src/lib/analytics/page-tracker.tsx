"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { extractPageParams, getPageTitle } from "./page-params"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function PageTracker() {
  const pathname = usePathname()
  const prevPath = useRef<string | null>(null)
  const ready = useRef(false)

  useEffect(() => {
    if (!ready.current) {
      ready.current = true
      return
    }
    if (typeof window === "undefined" || !window.gtag) return
    if (pathname === prevPath.current) return
    prevPath.current = pathname

    const { country, pageType, pathname: cleanPath } = extractPageParams(pathname)
    const title = getPageTitle()

    window.gtag("event", "page_view", {
      page_path: cleanPath,
      page_title: title,
      page_location: window.location.href,
      country,
      page_type: pageType,
    })
  }, [pathname])

  return null
}
