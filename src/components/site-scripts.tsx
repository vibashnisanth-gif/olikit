"use client"

import { useState, useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    GA_MEASUREMENT_ID?: string
  }
}

const CONSENT_KEY = "olikit_consent"

function getStoredConsent(): boolean | null {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem(CONSENT_KEY)
  if (stored === "accepted") return true
  if (stored === "rejected") return false
  return null
}

export function SiteScripts() {
  const [consent, setConsent] = useState<boolean | null>(getStoredConsent)

  useEffect(() => {
    const onConsent = () => setConsent(getStoredConsent())
    window.addEventListener("consent-updated", onConsent)
    return () => window.removeEventListener("consent-updated", onConsent)
  }, [])

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (consent !== true) return null

  return (
    <>
      {measurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}', {
                page_path: window.location.pathname,
                page_title: document.title,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}
    </>
  )
}
