"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookIcon,
  BookmarkIcon,
  BulbIcon,
  GridIcon,
  HeartIcon,
  HomeIcon,
  PrayIcon,
  SpeakerIcon,
  TasbihIcon,
} from "./icons";

// `href` items navigate; the rest are placeholders for upcoming sections.
const NAV_ITEMS = [
  { label: "Home", Icon: HomeIcon, href: "/", isActive: (p) => p === "/" },
  { label: "All Duas", Icon: GridIcon, href: "/categories", isActive: (p) => p === "/categories" || /^\/\d+/.test(p) },
  { label: "Insights", Icon: BulbIcon },
  { label: "Bookmarks", Icon: BookmarkIcon },
  { label: "Tasbih Counter", Icon: TasbihIcon },
  { label: "Audio Recitation", Icon: SpeakerIcon },
  { label: "References", Icon: BookIcon },
];

function NavItem({ item, active, showTooltip }) {
  const { label, Icon, href } = item;
  const className = `group relative w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
    active
      ? "bg-brand-500/15 text-brand-600 dark:text-brand-400 border border-brand-500/30 shadow-inner"
      : "text-muted hover:text-ink hover:bg-hover"
  }`;
  const content = (
    <>
      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
      {showTooltip && (
        <span className="absolute left-16 px-2.5 py-1 rounded-md bg-slate-800 text-xs font-medium text-slate-200 opacity-0 pointer-events-none group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
          {label}
        </span>
      )}
    </>
  );

  return href ? (
    <Link href={href} aria-label={label} aria-current={active ? "page" : undefined} className={className}>
      {content}
    </Link>
  ) : (
    <button type="button" aria-label={label} className={className}>
      {content}
    </button>
  );
}

export default function Aside() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex fixed top-3 bottom-3 left-3 w-20 z-30 flex-col items-center justify-between py-6 rounded-3xl bg-panel border border-line shadow-2xl glass-card">
      <div className="flex flex-col items-center gap-6">
        <Link
          href="/"
          aria-label="Dua App home"
          className="group w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-105 active:scale-95"
        >
          <PrayIcon className="w-7 h-7 transition-transform group-hover:scale-110" />
        </Link>
        <div className="w-8 h-px bg-line" />
        <nav aria-label="Main navigation" className="flex flex-col items-center gap-3">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} item={item} active={item.isActive?.(pathname)} showTooltip />
          ))}
        </nav>
      </div>

      <button
        type="button"
        aria-label="Support & Sadaqah"
        className="group relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all"
      >
        <HeartIcon filled className="w-6 h-6 transition-transform group-hover:scale-110" />
        <span className="absolute left-16 px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-500/30 text-xs font-semibold text-emerald-300 opacity-0 pointer-events-none group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
          Support &amp; Sadaqah
        </span>
      </button>
    </aside>
  );
}

export function MobileMenu() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Main navigation"
      className="lg:hidden fixed bottom-3 inset-x-3 z-30 rounded-2xl bg-panel-strong border border-line shadow-2xl glass-card px-2 py-2"
    >
      <ul className="flex justify-between items-center overflow-x-auto scrollbar-none">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <NavItem item={item} active={item.isActive?.(pathname)} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
