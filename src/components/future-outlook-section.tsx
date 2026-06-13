interface FutureOutlookSectionProps {
  title?: string
  outlooks: { heading: string; content: string }[]
}

export function FutureOutlookSection({ title = "Future Outlook", outlooks }: FutureOutlookSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {outlooks.map((o, i) => (
          <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-base font-semibold text-zinc-950">{o.heading}</h3>
            <p className="text-sm leading-7 text-zinc-600">{o.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
