"use client"

import { useState } from "react"

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-zinc-100 last:border-b-0">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-zinc-950 transition-colors hover:text-zinc-700 sm:px-6 sm:py-5"
        >
          <span>{question}</span>
          <svg
            className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 px-5 pb-5 sm:px-6" : "max-h-0 px-5 sm:px-6"
        }`}
      >
        <p className="text-sm leading-6 text-zinc-500">{answer}</p>
      </div>
    </div>
  )
}

const faqs = [
  { q: "What is Olikit?", a: "Olikit is a salary, tax, take-home pay and cost-of-living platform that helps users compare financial outcomes across multiple countries using calculators, compensation data and government-sourced information." },
  { q: "How does Olikit calculate salaries?", a: "Salary benchmarks are derived from labor statistics, compensation studies and publicly available employment datasets where available." },
  { q: "How does Olikit calculate taxes?", a: "Tax calculations use official tax brackets, rates and thresholds published by the relevant tax authorities for each supported country." },
  { q: "Which countries does Olikit cover?", a: "Olikit provides country-specific salary, tax and compensation information for the United States, United Kingdom, Australia, Canada, India, New Zealand and Singapore." },
  { q: "Is Olikit free to use?", a: "Yes. All calculators, salary comparisons, guides and research content are available free of charge." },
  { q: "How often is the data updated?", a: "Tax datasets are reviewed whenever governments publish updates. Salary and compensation datasets are reviewed periodically as new public information becomes available." },
  { q: "Can I compare countries?", a: "Yes. Olikit provides comparison tools and research designed to help users understand differences in salaries, taxation and affordability between countries." },
  { q: "Where does Olikit get its data?", a: "Olikit uses public information from government tax authorities, labor statistics agencies and official economic datasets." },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-zinc-100 rounded-lg border border-zinc-200">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          question={faq.q}
          answer={faq.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
