type Props = {
  items: string[]
  title?: string
}

export function KeyTakeaways({ items, title = "Key Takeaways" }: Props) {
  if (items.length === 0) return null
  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-6 py-5">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-900">
        {title}
      </h2>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
