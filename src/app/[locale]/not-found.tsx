import Link from "next/link"

type Props = {
  params: Promise<{ locale?: string }>
}

export default async function LocaleNotFound({ params }: Props) {
  const resolvedParams = await params
  const locale = resolvedParams?.locale
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <span className="text-6xl font-bold text-zinc-200 select-none">404</span>
      <h1 className="mt-4 text-2xl font-bold text-zinc-950 sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-2 text-sm leading-6 text-zinc-600 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link
          href={`/${locale}`}
          className="btn-primary inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
        >
          Go home
        </Link>
        <Link
          href={`/${locale}/rankings`}
          className="btn-secondary inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700"
        >
          Browse rankings
        </Link>
      </div>
    </div>
  )
}
