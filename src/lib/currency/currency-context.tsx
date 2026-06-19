"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import type { CurrencyCode } from "./types"
import { SUPPORTED_CURRENCIES } from "./types"
import { formatSalary, convertSalary } from "./index"

type CurrencyContextType = {
  activeCurrency: CurrencyCode
  setActiveCurrency: (code: CurrencyCode) => void
  formatInActiveCurrency: (amount: number, sourceCurrency: CurrencyCode, options?: { showCode?: boolean }) => string
  convertToActive: (amount: number, sourceCurrency: CurrencyCode) => number
  isActiveCurrency: (code: CurrencyCode) => boolean
}

const CurrencyContext = createContext<CurrencyContextType | null>(null)

const STORAGE_KEY = "olikit-currency-preference"

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [activeCurrency, setActiveCurrencyState] = useState<CurrencyCode>(() => {
    if (typeof window === "undefined") return "USD"
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && SUPPORTED_CURRENCIES.includes(stored as CurrencyCode)) {
        return stored as CurrencyCode
      }
    } catch {}
    return "USD"
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const setActiveCurrency = useCallback((code: CurrencyCode) => {
    setActiveCurrencyState(code)
    try {
      localStorage.setItem(STORAGE_KEY, code)
    } catch {}
  }, [])

  const convertToActive = useCallback(
    (amount: number, sourceCurrency: CurrencyCode): number => {
      return convertSalary(amount, sourceCurrency, activeCurrency)
    },
    [activeCurrency]
  )

  const formatInActiveCurrency = useCallback(
    (amount: number, sourceCurrency: CurrencyCode, options?: { showCode?: boolean }): string => {
      if (sourceCurrency === activeCurrency) {
        return formatSalary(amount, sourceCurrency, options)
      }
      const converted = convertSalary(amount, sourceCurrency, activeCurrency)
      return formatSalary(converted, activeCurrency, options)
    },
    [activeCurrency]
  )

  const isActiveCurrency = useCallback(
    (code: CurrencyCode): boolean => {
      return code === activeCurrency
    },
    [activeCurrency]
  )

  if (!mounted) {
    return (
      <CurrencyContext.Provider
        value={{
          activeCurrency: "USD",
          setActiveCurrency: () => {},
          formatInActiveCurrency: (amount, sourceCurrency, options) =>
            formatSalary(amount, sourceCurrency, options),
          convertToActive: (amount) => amount,
          isActiveCurrency: (code) => code === "USD",
        }}
      >
        {children}
      </CurrencyContext.Provider>
    )
  }

  return (
    <CurrencyContext.Provider
      value={{
        activeCurrency,
        setActiveCurrency,
        formatInActiveCurrency,
        convertToActive,
        isActiveCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency(): CurrencyContextType {
  const ctx = useContext(CurrencyContext)
  if (!ctx) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return ctx
}
