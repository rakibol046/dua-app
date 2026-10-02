import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
    <div className="w-full max-w-md rounded-2xl bg-panel border border-line glass-card p-10 text-center flex flex-col items-center gap-3">
      <p className="text-5xl font-extrabold text-brand-600 dark:text-brand-400">404</p>
      <h2 className="text-xl font-bold">Page not found</h2>
      <p className="text-sm text-muted">Could not find the requested resource.</p>
      <Link
        href="/"
        className="mt-2 px-5 py-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform"
      >
        Return Home
      </Link>
    </div>
    </div>
  );
}
