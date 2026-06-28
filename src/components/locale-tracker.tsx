"use client"

import { useEffect } from "react"

export function LocaleTracker({ slug }: { slug: string }) {
  useEffect(() => {
    try {
      localStorage.setItem("olikit-last-locale", slug)
    } catch {}
  }, [slug])
  return null
}
