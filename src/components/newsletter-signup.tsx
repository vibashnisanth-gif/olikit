"use client"

import { useState, type FormEvent } from "react"

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
      <div className={`rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-center ${variant === "banner" ? "px-6 py-8" : ""}`}>
        <p className="font-semibold text-emerald-800">
          {message}
        </p>
        <p className="mt-1 text-sm text-emerald-600">
          We'll send you monthly salary, tax & cost of living updates.
        </p>
      </div>
    )
  }

  if (variant === "banner") {
    return (
      <div className="rounded-lg border border-blue-200 bg-blue-50 px-6 py-8 my-6">
        <p className="mb-2 text-center text-lg font-semibold text-blue-900">
          {title ?? "Stay Updated"}
        </p>
        <p className="mb-4 text-center text-sm text-blue-700">
          Get monthly salary, tax & cost of living updates delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="min-w-0 flex-1 rounded-md border border-blue-300 bg-white px-4 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-2 text-center text-xs text-red-600">{message}</p>
        )}
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 my-6">
        <p className="mb-2 font-semibold text-blue-900">
          {title ?? "Monthly Salary & Tax Updates"}
        </p>
        <p className="mb-3 text-sm text-blue-700">
          Get the latest salary, tax, and cost of living data for your country.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="min-w-0 flex-1 rounded-md border border-blue-300 bg-white px-3 py-1.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-2 text-xs text-red-600">{message}</p>
        )}
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <h3 className="mb-2 font-semibold text-zinc-950 text-sm">
        {title ?? "Monthly Updates"}
      </h3>
      <p className="mb-3 text-xs text-zinc-500">
        Get salary, tax & cost of living updates.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-600">{message}</p>
      )}
    </div>
  )
}
