type DataBlockProps = {
  value: string
  label: string
  rank?: string
  highlight?: "up" | "down" | "neutral"
  footnote?: string
  className?: string
}

export function DataBlock({ value, label, rank, highlight, footnote, className = "" }: DataBlockProps) {
  return (
    <div className={`rounded-xl border border-border-light bg-surface-primary p-5 shadow-sm transition-all duration-150 hover:border-border-medium hover:shadow-md ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-3xl font-bold tracking-tight text-text-primary">{value}</p>
          <p className="mt-1 text-sm text-text-secondary">{label}</p>
          {footnote && <p className="mt-1.5 text-xs text-text-muted">{footnote}</p>}
        </div>
        {rank && (
          <span className="shrink-0 rounded-md bg-surface-muted px-2 py-1 text-xs font-semibold text-text-secondary border border-border-light">
            #{rank}
          </span>
        )}
      </div>
    </div>
  )
}

type MetricRowProps = {
  label: string
  value: string
  rank?: string
  highlight?: "up" | "down"
}

export function MetricRow({ label, value, rank, highlight }: MetricRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 py-2.5 border-b border-border-light last:border-0 transition-colors duration-150 hover:bg-surface-muted/50">
      <div className="flex items-center gap-2 min-w-0">
        {highlight === "up" && (
          <span className="shrink-0 text-emerald-600 text-xs font-semibold">&uarr;</span>
        )}
        {highlight === "down" && (
          <span className="shrink-0 text-red-600 text-xs font-semibold">&darr;</span>
        )}
        <span className="text-sm text-text-secondary truncate">{label}</span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-sm font-semibold text-text-primary">{value}</span>
        {rank && <span className="text-xs text-text-muted">#{rank}</span>}
      </div>
    </div>
  )
}

type ComparisonHighlightProps = {
  winner: string
  winnerValue: string
  loser: string
  loserValue: string
  advantage: string
  className?: string
}

export function ComparisonHighlight({ winner, winnerValue, loser, loserValue, advantage, className = "" }: ComparisonHighlightProps) {
  return (
    <div className={`rounded-xl border border-border-light bg-surface-primary p-5 shadow-sm transition-all duration-150 hover:border-border-medium hover:shadow-md ${className}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="text-center flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{winner}</p>
          <p className="mt-1 text-2xl font-bold text-text-primary">{winnerValue}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">{advantage}</span>
          <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 16 16" fill="currentColor"><path d="M8 3l5 6H3z"/></svg>
        </div>
        <div className="text-center flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{loser}</p>
          <p className="mt-1 text-2xl font-bold text-text-secondary">{loserValue}</p>
        </div>
      </div>
    </div>
  )
}
