"use client"

import { useEffect, useRef } from "react"

type Props = {
  slot: string
  format?: "auto" | "rectangle" | "horizontal" | "vertical"
  className?: string
}

export function AdUnit({ slot, format = "auto", className }: Props) {
  const adRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) return
    if (initialized.current) return
    initialized.current = true

    try {
      const adsbygoogle = (window as any).adsbygoogle || []
      adsbygoogle.push({})
    } catch {
      // AdSense not available
    }
  }, [])

  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID
  if (!clientId) return null

  return (
    <div ref={adRef} className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
