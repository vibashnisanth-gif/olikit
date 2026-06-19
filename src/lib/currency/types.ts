export const SUPPORTED_CURRENCIES = [
  "USD", "GBP", "AUD", "CAD", "EUR", "SGD", "CHF", "NZD", "INR",
] as const

export type CurrencyCode = (typeof SUPPORTED_CURRENCIES)[number]

export interface CurrencyInfo {
  code: CurrencyCode
  symbol: string
  name: string
  locale: string
}

export interface SalaryEquivalents {
  original: {
    amount: number
    currency: CurrencyCode
    formatted: string
  }
  equivalents: {
    currency: CurrencyCode
    symbol: string
    amount: number
    formatted: string
  }[]
}
