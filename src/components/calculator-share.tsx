"use client"

import { useCallback, useState } from "react"

type Props = {
  toolSlug: string
  localeSlug: string
  inputValues: Record<string, number | string>
  resultSummary?: string
}

export function CalculatorShare({ toolSlug, localeSlug, inputValues, resultSummary }: Props) {
  const [copied, setCopied] = useState(false)

  const baseUrl = typeof window !== "undefined"
    ? `${window.location.origin}/${localeSlug}/tools/${toolSlug}`
    : `/${localeSlug}/tools/${toolSlug}`

  const shareUrl = useCallback(() => {
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(inputValues)) {
      params.set(key, String(value))
    }
    return `${baseUrl}?${params.toString()}`
  }, [baseUrl, inputValues])

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = shareUrl()
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [shareUrl])

  const handleShare = useCallback(async () => {
    const text = resultSummary
      ? `${resultSummary}\n\nCalculate your own: ${shareUrl()}`
      : `Check out this ${toolSlug.replace("-", " ")}: ${shareUrl()}`
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: toolSlug.replace("-", " "), text, url: shareUrl() })
      } catch {
        // user cancelled
      }
    } else {
      await handleCopyLink()
    }
  }, [shareUrl, resultSummary, toolSlug, handleCopyLink])

  const handleDownload = useCallback(() => {
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(inputValues)) {
      params.set(key, String(value))
    }
    const content = [
      `${toolSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} - Results Summary`,
      `Generated: ${new Date().toLocaleDateString()}`,
      `URL: ${shareUrl()}`,
      "",
      resultSummary ?? "Adjust calculator inputs and download again for updated results.",
      "",
      "-- Olikit.com --",
    ].join("\n")

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${toolSlug}-results-${Date.now()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }, [inputValues, resultSummary, toolSlug, shareUrl])

  return (
    <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-200 mt-3">
      <button
        onClick={handleCopyLink}
        className="px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors"
      >
        {copied ? "Copied!" : "Copy Link"}
      </button>
      <button
        onClick={handleShare}
        className="px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors"
      >
        Share
      </button>
      <button
        onClick={handleDownload}
        className="px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors"
      >
        Download
      </button>
    </div>
  )
}
