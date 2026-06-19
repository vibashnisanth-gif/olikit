type Props = {
  className?: string
  lines?: number
}

export function Skeleton({ className = "", lines = 1 }: Props) {
  if (lines > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`h-4 rounded-md bg-gradient-to-r from-surface-muted via-gray-200 to-surface-muted bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] ${className}`}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`h-4 rounded-md bg-gradient-to-r from-surface-muted via-gray-200 to-surface-muted bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] ${className}`}
    />
  )
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-border-light bg-surface-primary p-5 shadow-sm ${className}`}>
      <Skeleton className="w-1/3 h-5 mb-3" />
      <Skeleton className="w-full h-3 mb-2" />
      <Skeleton className="w-3/4 h-3" />
    </div>
  )
}
