"use client"

import { useCurrency } from "@/lib/currency/currency-context"
import type { CurrencyCode } from "@/lib/currency"

type Props = {
  amount: number
  sourceCurrency: CurrencyCode
  className?: string
  showCode?: boolean
  as?: "span"
}

export function CurrencySalary({ amount, sourceCurrency, className = "", showCode = false }: Props) {
  const { formatInActiveCurrency } = useCurrency()
  return (
    <span className={`tabular-nums ${className}`}>
      {formatInActiveCurrency(amount, sourceCurrency, { showCode })}
    </span>
  )
}

type CurrencyEquivalentsProps = {
  amount: number
  sourceCurrency: CurrencyCode
  targetCurrencies: { code: CurrencyCode; formatted: string }[]
}

export function CurrencyEquivalents({ amount, sourceCurrency, targetCurrencies }: CurrencyEquivalentsProps) {
  const { activeCurrency, formatInActiveCurrency } = useCurrency()

  const show = targetCurrencies.filter((t) => t.code !== activeCurrency).slice(0, 3)

  if (show.length === 0) return null

  return (
    <div className="mt-1 flex flex-wrap gap-x-2.5 text-[11px] text-zinc-400">
      {show.map((t) => (
        <span key={t.code}>
          ≈ {formatInActiveCurrency(amount, sourceCurrency)} {t.code}
        </span>
      ))}
    </div>
  )
}
