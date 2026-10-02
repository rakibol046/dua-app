"use client"; // Error boundaries must be Client Components

export default function Error({ error, reset }) {
  return (
    <div className="rounded-2xl bg-panel border border-line glass-card p-10 text-center flex flex-col items-center gap-3">
      <h2 className="text-xl font-bold">Something went wrong</h2>
      <p className="text-sm text-muted">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-2 px-5 py-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform"
      >
        Try again
      </button>
    </div>
  );
}
