"use client"

import { useState, useEffect } from "react"
import Script from "next/script"

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
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID

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
              gtag('config', '${measurementId}');
            `}
          </Script>
        </>
      )}
      {adsenseClient && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}
    </>
  )
}
