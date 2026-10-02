import { PrayIcon } from "./icons";
import DuaActions from "./dua-actions";

export default function DuaCard({ dua }) {
  return (
    <article
      id={`dua-${dua.dua_id}`}
      className="scroll-mt-4 rounded-2xl bg-panel border border-line glass-card p-5 md:p-7 flex flex-col gap-5"
    >
      <header className="flex items-center gap-3">
        <span className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 border border-emerald-500/25 text-brand-600 dark:text-brand-400 flex items-center justify-center">
          <PrayIcon className="w-5 h-5" strokeWidth={1.8} />
        </span>
        <h3 className="font-semibold text-brand-600 dark:text-brand-400">
          {dua.dua_id}. {dua.dua_name_en}
        </h3>
      </header>

      {dua.top_en && <p className="leading-relaxed">{dua.top_en}</p>}

      {dua.dua_arabic && (
        <p
          dir="rtl"
          lang="ar"
          className="font-quran text-2xl md:text-3xl leading-[2.2] text-right rounded-xl bg-field border border-line px-5 py-4"
        >
          {dua.dua_arabic}
        </p>
      )}

      {dua.transliteration_en && (
        <p className="leading-relaxed">
          <span className="font-semibold">Transliteration: </span>
          <span className="italic text-muted">{dua.transliteration_en}</span>
        </p>
      )}

      {dua.translation_en && (
        <p className="leading-relaxed">
          <span className="font-semibold">Translation: </span>
          {dua.translation_en}
        </p>
      )}

      {dua.bottom_en && <p className="leading-relaxed">{dua.bottom_en}</p>}

      {dua.refference_en && (
        <div className="border-l-2 border-brand-500 pl-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Reference
          </p>
          <p className="text-sm font-medium mt-1">{dua.refference_en}</p>
        </div>
      )}

      <DuaActions dua={dua} />
    </article>
  );
}
