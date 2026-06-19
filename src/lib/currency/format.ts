import type { CurrencyCode, SalaryEquivalents } from "./types"
import { convertSalary, getCurrencyInfo, getCurrencyLocale } from "./rates"

export function formatSalary(
  amount: number,
  currency: CurrencyCode,
  options?: { compact?: boolean; showCode?: boolean }
): string {
  const info = getCurrencyInfo(currency)
  const locale = getCurrencyLocale(currency)

  if (currency === "INR") {
    return formatINR(amount)
  }

  try {
    const formatted = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)

    if (options?.showCode) {
      return `${formatted} ${currency}`
    }
    return formatted
  } catch {
    const sym = info.symbol
    const display = amount >= 100000 && options?.compact
      ? `${(amount / 1000).toFixed(0)}k`
      : amount.toLocaleString()
    return `${sym}${display}`
  }
}

export function formatSalaryCompact(amount: number, currency: CurrencyCode): string {
  const info = getCurrencyInfo(currency)
  const sym = info.symbol
  if (amount >= 1000000) {
    return `${sym}${(amount / 1000000).toFixed(1)}M`
  }
  if (amount >= 100000) {
    return `${sym}${(amount / 1000).toFixed(0)}k`
  }
  return `${sym}${amount.toLocaleString()}`
}

export function formatSalaryFull(amount: number, currency: CurrencyCode): string {
  return formatSalary(amount, currency, { showCode: true })
}

export function formatINR(amount: number): string {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  } catch {
    const lakh = amount / 100000
    if (lakh >= 1) {
      return `₹${lakh.toFixed(1)}L`
    }
    return `₹${amount.toLocaleString("en-IN")}`
  }
}

export function getSalaryEquivalents(
  amount: number,
  fromCurrency: CurrencyCode,
  targetCurrencies: CurrencyCode[]
): SalaryEquivalents {
  const formatted = formatSalary(amount, fromCurrency)

  const equivalents = targetCurrencies
    .filter((c) => c !== fromCurrency)
    .map((code) => {
      const converted = convertSalary(amount, fromCurrency, code)
      const info = getCurrencyInfo(code)
      return {
        currency: code,
        symbol: info.symbol,
        amount: converted,
        formatted: formatSalary(converted, code),
      }
    })

  return {
    original: { amount, currency: fromCurrency, formatted },
    equivalents,
  }
}

export function formatSalaryPair(
  amount: number,
  currency: CurrencyCode,
  targetCurrency: CurrencyCode
): { primary: string; converted: string } {
  const primary = formatSalary(amount, currency)
  const convertedAmount = convertSalary(amount, currency, targetCurrency)
  const converted = formatSalary(convertedAmount, targetCurrency)
  return { primary, converted }
}
