"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "./ui/button"

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

  if (consent !== null) {
    return (
      <button
        onClick={() => {
          localStorage.removeItem(CONSENT_KEY)
          setConsent(null)
          window.dispatchEvent(new Event("consent-updated"))
        }}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-zinc-900 p-2.5 text-white shadow-lg hover:bg-zinc-700 transition-colors"
        aria-label="Manage cookie preferences"
        title="Cookie Settings"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border-light bg-white p-4 shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-secondary">
          We use cookies and similar technologies to improve your experience,
          analyze traffic, and serve personalized ads. See our{" "}
          <Link
            href="/privacy-policy"
            className="underline hover:text-text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button onClick={reject} variant="secondary" size="md">Reject All</Button>
          <Button onClick={accept} variant="primary" size="md">Accept All</Button>
        </div>
      </div>
    </div>
  )
}
