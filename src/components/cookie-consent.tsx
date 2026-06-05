"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"

const CONSENT_KEY = "olikit_consent"

function getStoredConsent(): boolean | null {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem(CONSENT_KEY)
  if (stored === "accepted") return true
  if (stored === "rejected") return false
  return null
}

export function CookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(getStoredConsent)

  useEffect(() => {
    const onConsent = () => setConsent(getStoredConsent())
    window.addEventListener("consent-updated", onConsent)
    return () => window.removeEventListener("consent-updated", onConsent)
  }, [])

  const accept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setConsent(true)
    window.dispatchEvent(new Event("consent-updated"))
  }, [])

  const reject = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "rejected")
    setConsent(false)
    window.dispatchEvent(new Event("consent-updated"))
  }, [])

  if (consent !== null) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white p-4 shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-600">
          We use cookies and similar technologies to improve your experience,
          analyze traffic, and serve personalized ads. See our{" "}
          <Link
            href="/privacy-policy"
            className="underline hover:text-zinc-950"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Reject All
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
