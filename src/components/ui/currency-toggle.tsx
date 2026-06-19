"use client"

import { useCurrency } from "@/lib/currency/currency-context"
import { SUPPORTED_CURRENCIES } from "@/lib/currency"
import type { CurrencyCode } from "@/lib/currency"

const CURRENCY_LABELS: Record<string, string> = {
  USD: "$ USD",
  GBP: "£ GBP",
  AUD: "A$ AUD",
  CAD: "C$ CAD",
  EUR: "€ EUR",
  SGD: "S$ SGD",
}

export function CurrencyToggle() {
  const { activeCurrency, setActiveCurrency } = useCurrency()

  return (
    <div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-white px-1.5 py-1 shadow-sm">
      <span className="hidden sm:inline text-[11px] font-medium text-zinc-500 mr-0.5">
        Display:
      </span>
      {SUPPORTED_CURRENCIES.filter((c) => c !== "NZD" && c !== "CHF" && c !== "INR").map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setActiveCurrency(code as CurrencyCode)}
          className={`rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
            activeCurrency === code
              ? "bg-zinc-900 text-white shadow-sm"
              : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100"
          }`}
        >
          {CURRENCY_LABELS[code] || code}
        </button>
      ))}
    </div>
  )
}
