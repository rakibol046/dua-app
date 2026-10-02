"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ChevronDownIcon, CogIcon, FontIcon, LanguageIcon, PaletteIcon } from "./icons";

function Section({ Icon, title, defaultOpen, children }) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-xl border border-line bg-field overflow-hidden"
    >
      <summary className="flex items-center gap-3 px-4 py-3 cursor-pointer list-none select-none hover:bg-hover transition-colors [&::-webkit-details-marker]:hidden">
        <span className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
          <Icon className="w-4 h-4" />
        </span>
        <span className="flex-1 text-sm font-medium">{title}</span>
        <ChevronDownIcon className="w-4 h-4 text-muted transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-4 pb-4 pt-1 text-sm">{children}</div>
    </details>
  );
}

export default function SettingsPanel() {
  const { resolvedTheme, setTheme } = useTheme();
  // The theme is unknown during SSR; render the toggle unchecked until mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="p-5 flex flex-col gap-3">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-1">
        Settings
      </h2>

      <Section Icon={LanguageIcon} title="Language Settings">
        <p className="text-muted">English</p>
      </Section>
      <Section Icon={CogIcon} title="General Settings">
        <p className="text-muted">Coming soon</p>
      </Section>
      <Section Icon={FontIcon} title="Font Settings">
        <p className="text-muted">Coming soon</p>
      </Section>
      <Section Icon={PaletteIcon} title="Appearance Settings" defaultOpen>
        <label className="flex items-center justify-between gap-3 cursor-pointer">
          <span>Night Mode</span>
          <input
            type="checkbox"
            role="switch"
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            className="peer sr-only"
          />
          <span className="relative w-10 h-6 rounded-full bg-line peer-checked:bg-brand-500 transition-colors after:absolute after:top-1 after:left-1 after:w-4 after:h-4 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-4 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-500/40" />
        </label>
      </Section>
    </div>
  );
}
