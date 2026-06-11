"use client"

import { useState } from "react"

type FAQ = {
  question: string
  answer: string
}

type Props = {
  title?: string
  faqs: FAQ[]
}

export function FAQSection({ title = "Frequently Asked Questions", faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text-primary">{title}</h2>
      <div className="divide-y divide-border-light rounded-xl border border-border-light bg-surface-primary">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-text-primary transition-colors hover:bg-surface-muted sm:px-6 sm:py-5"
              aria-expanded={openIndex === i}
            >
              <span>{faq.question}</span>
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
            {openIndex === i && (
              <div className="px-6 pb-5 sm:px-6">
                <p className="text-sm leading-6 text-text-secondary">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
