import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "World Monitor — Live Global News & Events | Olikit",
  description:
    "Live global news and events dashboard powered by World Monitor. Track world events as they happen.",
  alternates: {canonical: "https://olikit.com/world"},
};

export default function WorldPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-zinc-950">World Monitor</h1>
        <p className="mt-1 text-sm text-zinc-600">Live global news and events dashboard.</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
        <iframe
          src="https://worldmonitor.app"
          title="World Monitor — Live Global News & Events"
          className="h-[80vh] w-full border-0"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups"
          referrerPolicy="no-referrer"
        />
      </div>

      <p className="mt-4 text-xs text-zinc-400">
        Powered by{" "}
        <a
          href="https://github.com/koala73/worldmonitor"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          World Monitor
        </a>{" "}
        (AGPL-3.0).
      </p>
    </main>
  );
}
