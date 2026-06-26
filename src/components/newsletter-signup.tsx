"use client"

import { useState, type FormEvent } from "react"
import { Button } from "./ui/button"

type Props = {
  locale?: string
  source?: string
  variant?: "sidebar" | "inline" | "banner"
  title?: string
}

export function NewsletterSignup({ locale, source, variant = "sidebar", title }: Props) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          locale: locale ?? "unknown",
          source: source ?? "newsletter-signup",
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? "Subscription failed")
      }

      setStatus("success")
      setMessage("Thanks! You're now subscribed.")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setMessage(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center ${variant === "banner" ? "px-6 py-8" : ""}`}>
        <p className="font-semibold text-emerald-800">{message}</p>
        <p className="mt-1 text-sm text-emerald-600">We'll send you monthly salary, tax & cost of living updates.</p>
      </div>
    )
  }

  const inputBase = "min-w-0 rounded-md border border-border-medium bg-white px-4 py-2 text-sm text-text-primary placeholder-text-muted focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
  const cardBase = "rounded-xl border border-blue-200 bg-blue-50"

  if (variant === "banner") {
    return (
      <div className={`${cardBase} px-6 py-8 my-6`}>
        <p className="mb-2 text-center text-lg font-semibold text-blue-900">{title ?? "Stay Updated"}</p>
        <p className="mb-4 text-center text-sm text-blue-700">Get monthly salary, tax & cost of living updates delivered to your inbox.</p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-3">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required aria-label="Email address" className={inputBase} />
          <Button type="submit" disabled={status === "loading"} variant="primary">{status === "loading" ? "Subscribing..." : "Subscribe"}</Button>
        </form>
        {status === "error" && <p className="mt-2 text-center text-xs text-red-600">{message}</p>}
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={`${cardBase} p-5 my-6`}>
        <p className="mb-2 font-semibold text-blue-900">{title ?? "Monthly Salary & Tax Updates"}</p>
        <p className="mb-3 text-sm text-blue-700">Get the latest salary, tax, and cost of living data for your country.</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required aria-label="Email address" className={`${inputBase} flex-1`} />
          <Button type="submit" disabled={status === "loading"} variant="primary" size="md">{status === "loading" ? "..." : "Subscribe"}</Button>
        </form>
        {status === "error" && <p className="mt-2 text-xs text-red-600">{message}</p>}
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border-light bg-surface-primary p-4 shadow-sm">
      <h3 className="mb-2 font-semibold text-text-primary text-sm">{title ?? "Monthly Updates"}</h3>
      <p className="mb-3 text-xs text-text-muted">Get salary, tax & cost of living updates.</p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required aria-label="Email address" className={`${inputBase} w-full`} />
        <Button type="submit" disabled={status === "loading"} variant="primary" className="w-full">{status === "loading" ? "Subscribing..." : "Subscribe"}</Button>
      </form>
      {status === "error" && <p className="mt-2 text-xs text-red-600">{message}</p>}
    </div>
  )
}
