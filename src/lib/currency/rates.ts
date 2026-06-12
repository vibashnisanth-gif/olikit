import type { CurrencyCode } from "./types"

export interface ExchangeRateProvider {
  getRate(from: CurrencyCode, to: CurrencyCode): number
  convert(amount: number, from: CurrencyCode, to: CurrencyCode): number
}

const BASE_RATES: Record<CurrencyCode, number> = {
  USD: 1,
  GBP: 1.27,
  AUD: 0.67,
  CAD: 0.73,
  EUR: 1.08,
  SGD: 0.74,
  CHF: 1.12,
  NZD: 0.60,
  INR: 0.012,
}

const CURRENCY_INFO: Record<CurrencyCode, { symbol: string; name: string; locale: string }> = {
  USD: { symbol: "$", name: "US Dollar", locale: "en-US" },
  GBP: { symbol: "£", name: "British Pound", locale: "en-GB" },
  AUD: { symbol: "A$", name: "Australian Dollar", locale: "en-AU" },
  CAD: { symbol: "C$", name: "Canadian Dollar", locale: "en-CA" },
  EUR: { symbol: "€", name: "Euro", locale: "de-DE" },
  SGD: { symbol: "S$", name: "Singapore Dollar", locale: "en-SG" },
  CHF: { symbol: "CHF", name: "Swiss Franc", locale: "de-CH" },
  NZD: { symbol: "NZ$", name: "New Zealand Dollar", locale: "en-NZ" },
  INR: { symbol: "₹", name: "Indian Rupee", locale: "en-IN" },
}

function getRate(from: CurrencyCode, to: CurrencyCode): number {
  if (from === to) return 1
  const fromToUSD = BASE_RATES[from]
  const toToUSD = BASE_RATES[to]
  if (!fromToUSD || !toToUSD) return 1
  return toToUSD / fromToUSD
}

export function convert(amount: number, from: CurrencyCode, to: CurrencyCode): number {
  if (from === to) return amount
  const rate = getRate(from, to)
  return Math.round(amount * rate * 100) / 100
}

export function convertSalary(amount: number, from: CurrencyCode, to: CurrencyCode): number {
  if (from === to) return amount
  return Math.round(convert(amount, from, to))
}

export function getCurrencyInfo(code: CurrencyCode): { symbol: string; name: string; locale: string } {
  return CURRENCY_INFO[code] ?? { symbol: "$", name: "US Dollar", locale: "en-US" }
}

export function getCurrencySymbol(code: CurrencyCode): string {
  return CURRENCY_INFO[code]?.symbol ?? "$"
}

export function getCurrencyLocale(code: CurrencyCode): string {
  return CURRENCY_INFO[code]?.locale ?? "en-US"
}

export { BASE_RATES }
