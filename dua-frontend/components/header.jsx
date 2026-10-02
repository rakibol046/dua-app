"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { BellIcon, ChevronDownIcon, MoonIcon, SearchIcon, SunIcon } from "./icons";

const roundButton =
  "shrink-0 w-10 h-10 rounded-full border border-line bg-field flex items-center justify-center text-muted hover:text-ink transition-colors";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={roundButton}
    >
      {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
    </button>
  );
}

export default function Header() {
  const searchRef = useRef(null);

  // ⌘K / Ctrl+K focuses the search field.
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="relative z-20 w-full rounded-2xl bg-panel border border-line shadow-lg glass-card px-4 md:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
          <span>Dua &amp; Ruqyah</span>
          <span className="hidden sm:inline text-xs px-2.5 py-0.5 rounded-full font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
            Daily Companion
          </span>
        </h1>
        <p className="hidden md:block text-xs text-muted">
          Discover and recite authentic supplications from Sunnah
        </p>
      </div>

      <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto">
        <div className="relative flex-1 sm:flex-none sm:w-72 md:w-96">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
            <SearchIcon className="w-4 h-4" />
          </span>
          <input
            ref={searchRef}
            type="search"
            aria-label="Search duas"
            placeholder="Search duas, topics, keywords..."
            className="w-full pl-10 pr-4 md:pr-16 py-2.5 text-sm bg-field border border-line rounded-full placeholder:text-muted focus:outline-none focus:border-brand-500/80 focus:ring-2 focus:ring-brand-500/20 transition-all shadow-inner"
          />
          <span className="absolute inset-y-0 right-0 pr-3 hidden md:flex items-center pointer-events-none">
            <kbd className="text-[10px] uppercase font-semibold tracking-wide px-2 py-0.5 rounded-md bg-hover text-muted border border-line">
              ⌘K
            </kbd>
          </span>
        </div>

        <ThemeToggle />
        <button type="button" aria-label="Notifications" className={`${roundButton} hidden sm:flex`}>
          <BellIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          aria-label="Account menu"
          className="shrink-0 flex items-center gap-2 sm:pl-3 sm:border-l border-line"
        >
          <span className="flex items-center gap-2 py-1 px-2 rounded-full hover:bg-hover transition-colors">
            <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1.5px] shadow-sm">
              <span className="w-full h-full rounded-full bg-panel-strong flex items-center justify-center overflow-hidden">
                <svg className="w-5 h-5 text-emerald-500 dark:text-emerald-300 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2a5 5 0 0 0-5 5v1a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Zm-7 18a7 7 0 0 1 14 0H5Z" />
                </svg>
              </span>
            </span>
            <span className="hidden sm:block text-xs font-semibold">Believer</span>
            <ChevronDownIcon className="w-4 h-4 text-muted" />
          </span>
        </button>
      </div>
    </header>
  );
}
