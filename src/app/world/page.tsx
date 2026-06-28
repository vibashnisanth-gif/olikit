import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "World Monitor — Live Global News & Events | Olikit",
  description:
    "Live global news and events dashboard powered by World Monitor. Track world events as they happen.",
  alternates: {canonical: "https://olikit.com/world"},
};

export default function WorldPage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold text-zinc-950">World Monitor</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Live global news and events dashboard powered by{" "}
        <a
          href="https://worldmonitor.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-950 underline underline-offset-2 hover:text-zinc-700"
        >
          World Monitor
        </a>
        .
      </p>

      <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center">
        <p className="text-sm text-zinc-500">
          Open World Monitor in a new tab to view live events.
        </p>
        <a
          href="https://worldmonitor.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Open World Monitor &rarr;
        </a>
      </div>

      <p className="mt-6 text-xs text-zinc-400">
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
