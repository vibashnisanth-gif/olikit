"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { trackAffiliateClick } from "@/lib/analytics/events"
import { extractPageParams } from "@/lib/analytics/page-params"

type Props = {
  href: string
  provider: string
  localeSlug: string
  pageType?: string
  className?: string
  children: ReactNode
}

export function TrackedLink({ href, provider, localeSlug, pageType: explicitPageType, className, children }: Props) {
  const pathname = usePathname()

  const handleClick = () => {
    const { pageType: detected } = extractPageParams(pathname)
    const pageType = explicitPageType || detected
    trackAffiliateClick(provider, localeSlug, pageType)
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
