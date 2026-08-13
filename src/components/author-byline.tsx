interface AuthorBylineProps {
  author?: string
  lastUpdated?: string
  reviewedBy?: string
}

export function AuthorByline({
  author = "Vibash",
  lastUpdated,
  reviewedBy,
}: AuthorBylineProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-semibold text-zinc-600">
          {author.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-medium text-zinc-700">{author}</p>
          <p className="text-xs text-zinc-500">Research Analyst</p>
        </div>
      </div>
      {lastUpdated && (
        <span className="text-xs text-zinc-400">
          Last updated: {lastUpdated}
        </span>
      )}
      {reviewedBy && (
        <span className="text-xs text-zinc-400">
          Reviewed by: {reviewedBy}
        </span>
      )}
    </div>
  )
}
