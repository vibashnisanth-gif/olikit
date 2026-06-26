"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-zinc-950">Something went wrong</h1>
          <p className="mt-3 text-zinc-600">
            An unexpected error occurred. Please try again.
          </p>
          {error.digest && (
            <p className="mt-2 text-xs text-zinc-400">Error ID: {error.digest}</p>
          )}
          <button
            onClick={reset}
            className="mt-6 rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Try again
          </button>
          <a href="/" className="mt-3 text-sm text-zinc-500 hover:text-zinc-700">
            Go to homepage
          </a>
        </div>
      </body>
    </html>
  )
}
