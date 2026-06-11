"use client"

import { useState } from "react"

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { q: "How is salary calculated?", a: "Salary data is collected from government labor statistics, industry surveys, and compensation databases." },
    { q: "How often is data updated?", a: "Salary data is reviewed and updated quarterly to reflect the latest market conditions." },
    { q: "Which countries are covered?", a: "We cover 7 countries: US, UK, Australia, Canada, New Zealand, India, and Singapore." },
    { q: "Does salary include bonuses?", a: "Base salary figures shown do not include bonuses, equity, or benefits unless specifically noted." },
    { q: "How is tax calculated?", a: "Tax calculations include federal/national income tax, state/provincial tax, and mandatory social contributions." },
    { q: "What is purchasing power parity?", a: "PPP adjusts salaries for local price levels to compare real purchasing power across countries." },
    { q: "Are calculators free?", a: "Yes, all calculators and tools on Olikit are completely free to use." },
    { q: "How is cost of living measured?", a: "Cost of living data is sourced from Numbeo and OECD indices comparing major cities." },
  ]

  return (
    <div className="divide-y divide-border-light rounded-xl border border-border-light bg-surface-primary">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-text-primary transition-colors duration-150 hover:bg-surface-muted sm:px-6 sm:py-5"
            aria-expanded={openIndex === i}
          >
            <span>{faq.q}</span>
            <svg
              className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`grid transition-all duration-200 ease-out ${
              openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-5 sm:px-6">
                <p className="text-sm leading-6 text-text-secondary">{faq.a}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
