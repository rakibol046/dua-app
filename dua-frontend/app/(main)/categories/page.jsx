import Link from "next/link";
import getAllCategories from "@/lib/category/getAllCategories";
import { ChevronRightIcon, getCategoryStyle } from "@/components/icons";

function CategoryCard({ category }) {
  const { Icon, tile, dot } = getCategoryStyle(category.cat_id);
  return (
    <Link
      href={`/${category.cat_id}`}
      className="group relative rounded-2xl bg-panel border border-line hover:border-brand-500/40 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 hover:-translate-y-1 flex items-center gap-4 glass-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
    >
      <div
        className={`w-13 h-13 rounded-2xl bg-gradient-to-br border ${tile} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7" strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-bold group-hover:text-brand-600 dark:group-hover:text-emerald-300 transition-colors truncate">
          {category.cat_name_en}
        </h3>
        <p className="text-xs text-muted mt-0.5 flex items-center gap-1.5 font-medium">
          <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
          {category.no_of_subcat} Subcategories · {category.no_of_dua} Duas
        </p>
      </div>
      <ChevronRightIcon className="w-5 h-5 text-muted group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all" />
    </Link>
  );
}

export default async function HomePage() {
  const categories = await getAllCategories();
  const totalSubcats = categories.reduce((sum, c) => sum + c.no_of_subcat, 0);
  const totalDuas = categories.reduce((sum, c) => sum + c.no_of_dua, 0);

  return (
    <>
      <section className="relative overflow-hidden w-full rounded-2xl bg-gradient-to-r from-emerald-100/70 via-panel to-panel dark:from-emerald-950/40 dark:via-slate-900/80 dark:to-slate-900/60 border border-brand-500/20 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 glass-card">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Categories of Dua
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Supplications for Every Moment of Life
          </h2>
          <p className="text-sm text-muted mt-2 leading-relaxed">
            &ldquo;And your Lord says: Call upon Me; I will respond to you.&rdquo; — Surah
            Ghafir (40:60). Explore essential duas categorized from authentic Hadith
            collections.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-panel-strong border border-line rounded-xl px-4 py-3 text-center min-w-[95px]">
            <div className="text-lg font-bold">{totalSubcats}</div>
            <div className="text-[11px] text-muted font-medium">Subcategories</div>
          </div>
          <div className="bg-panel-strong border border-line rounded-xl px-4 py-3 text-center min-w-[95px]">
            <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{totalDuas}</div>
            <div className="text-[11px] text-muted font-medium">Authentic Duas</div>
          </div>
        </div>

        <div aria-hidden="true" className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none text-emerald-500">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 100 100">
            <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
          </svg>
        </div>
      </section>

      <main className="flex-1 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {categories.map((category) => (
            <CategoryCard key={category.cat_id} category={category} />
          ))}
        </div>
      </main>
    </>
  );
}
