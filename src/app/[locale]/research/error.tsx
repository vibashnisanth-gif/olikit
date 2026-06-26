"use client"

export default function ResearchError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <span className="text-6xl font-bold text-zinc-200 select-none">!</span>
      <h1 className="mt-4 text-2xl font-bold text-zinc-950 sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-2 text-sm leading-6 text-zinc-600 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <button
          onClick={reset}
          className="btn-primary inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
