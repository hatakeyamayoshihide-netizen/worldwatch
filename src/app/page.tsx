import WorldClock from "@/components/WorldClock";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-slate-950"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-20%] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] bottom-[-15%] -z-10 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-[120px]"
      />

      <div className="w-full max-w-2xl">
        <header className="mb-10 text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-white/40 uppercase">
            World Clock
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            世界時計
          </h1>
          <p className="mt-3 text-sm text-white/50">
            現在地の日時と、選んだ都市の日時をひと目で確認できます。
          </p>
        </header>

        <WorldClock />

        <footer className="mt-10 text-center text-xs text-white/30">
          Simple World Clock
        </footer>
      </div>
    </main>
  );
}
