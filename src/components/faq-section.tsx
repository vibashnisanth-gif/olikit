import { buildFaqJsonLd } from "@/lib/seo/json-ld"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  faqs: FAQItem[]
}

export function FAQSection({ title = "Frequently Asked Questions", faqs }: FAQSectionProps) {
  const schema = buildFaqJsonLd(faqs)

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-zinc-950">{title}</h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white shadow-sm">
        {faqs.map((faq, i) => (
          <details key={i} className="group">
            <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-base font-medium text-zinc-950 transition-colors hover:bg-zinc-50">
              {faq.question}
              <svg className="h-4 w-4 shrink-0 text-zinc-400 transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-5 pb-4 text-sm leading-7 text-zinc-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
