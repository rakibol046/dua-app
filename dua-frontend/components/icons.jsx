// Inline stroke icons (Heroicons-style paths) shared across the UI.
function Svg({ className = "w-5 h-5", strokeWidth = 2, children, ...props }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const PrayIcon = (p) => (
  <Svg {...p}>
    <path d="M7 11v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2z" />
    <path d="M17 11v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2z" />
    <path d="M8 12a4 4 0 0 1 8 0v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" />
  </Svg>
);

export const HomeIcon = (p) => (
  <Svg {...p}>
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </Svg>
);

export const GridIcon = (p) => (
  <Svg {...p}>
    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </Svg>
);

export const BulbIcon = (p) => (
  <Svg {...p}>
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </Svg>
);

export const BookmarkIcon = (p) => (
  <Svg {...p}>
    <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </Svg>
);

export const TasbihIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </Svg>
);

export const SpeakerIcon = (p) => (
  <Svg {...p}>
    <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
  </Svg>
);

export const BookIcon = (p) => (
  <Svg {...p}>
    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </Svg>
);

export const HeartIcon = ({ filled, ...p }) => (
  <Svg {...p} fill={filled ? "currentColor" : "none"} strokeWidth={filled ? 0 : p.strokeWidth}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </Svg>
);

export const SearchIcon = (p) => (
  <Svg {...p}>
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </Svg>
);

export const BellIcon = (p) => (
  <Svg {...p}>
    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </Svg>
);

export const ChevronDownIcon = (p) => (
  <Svg {...p}>
    <path d="M19 9l-7 7-7-7" />
  </Svg>
);

export const ChevronRightIcon = (p) => (
  <Svg {...p}>
    <path d="M9 5l7 7-7 7" />
  </Svg>
);

export const CopyIcon = (p) => (
  <Svg {...p}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </Svg>
);

export const CheckIcon = (p) => (
  <Svg {...p}>
    <path d="M5 13l4 4L19 7" />
  </Svg>
);

export const ShareIcon = (p) => (
  <Svg {...p}>
    <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </Svg>
);

export const FlagIcon = (p) => (
  <Svg {...p}>
    <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z" />
  </Svg>
);

export const PlayIcon = (p) => (
  <Svg {...p} fill="currentColor" strokeWidth={0}>
    <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86A1 1 0 008 5.14z" />
  </Svg>
);

export const PauseIcon = (p) => (
  <Svg {...p} fill="currentColor" strokeWidth={0}>
    <path d="M7 4h3a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1zm7 0h3a1 1 0 011 1v14a1 1 0 01-1 1h-3a1 1 0 01-1-1V5a1 1 0 011-1z" />
  </Svg>
);

export const SunIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </Svg>
);

export const MoonIcon = (p) => (
  <Svg {...p}>
    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </Svg>
);

export const LanguageIcon = (p) => (
  <Svg {...p}>
    <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
  </Svg>
);

export const CogIcon = (p) => (
  <Svg {...p}>
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </Svg>
);

export const FontIcon = (p) => (
  <Svg {...p}>
    <path d="M4 7V5h16v2M9 19h6M12 5v14" />
  </Svg>
);

export const PaletteIcon = (p) => (
  <Svg {...p}>
    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </Svg>
);

const StarIcon = (p) => (
  <Svg {...p}>
    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </Svg>
);

export const ClockIcon = (p) => (
  <Svg {...p}>
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </Svg>
);

export const ShieldIcon = (p) => (
  <Svg {...p}>
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </Svg>
);

const PersonIcon = (p) => (
  <Svg {...p}>
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </Svg>
);

const DropIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3s6 6.6 6 11a6 6 0 01-12 0c0-4.4 6-11 6-11z" />
  </Svg>
);

const MegaphoneIcon = (p) => (
  <Svg {...p}>
    <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </Svg>
);

// Per-category icon and accent, keyed by cat_id. Class strings are written out
// in full so Tailwind can detect them.
const CATEGORY_STYLES = {
  1: { Icon: HeartIcon, tile: "from-emerald-500/20 to-teal-600/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500" },
  2: { Icon: StarIcon, tile: "from-amber-500/20 to-emerald-600/10 border-amber-500/25 text-amber-600 dark:text-amber-400", dot: "bg-amber-400" },
  3: { Icon: ClockIcon, tile: "from-cyan-500/20 to-blue-600/10 border-cyan-500/25 text-cyan-600 dark:text-cyan-400", dot: "bg-cyan-400" },
  4: { Icon: ShieldIcon, tile: "from-emerald-500/20 to-teal-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-400" },
  5: { Icon: SunIcon, tile: "from-orange-500/20 to-indigo-600/10 border-orange-500/25 text-orange-600 dark:text-orange-400", dot: "bg-orange-400" },
  6: { Icon: MoonIcon, tile: "from-indigo-500/20 to-purple-600/10 border-indigo-500/25 text-indigo-600 dark:text-indigo-400", dot: "bg-indigo-400" },
  7: { Icon: PersonIcon, tile: "from-violet-500/20 to-pink-500/10 border-violet-500/25 text-violet-600 dark:text-violet-400", dot: "bg-violet-400" },
  8: { Icon: HomeIcon, tile: "from-emerald-500/20 to-teal-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-400" },
  9: { Icon: DropIcon, tile: "from-blue-500/20 to-teal-500/10 border-blue-500/25 text-blue-600 dark:text-blue-400", dot: "bg-blue-400" },
  10: { Icon: MegaphoneIcon, tile: "from-teal-500/20 to-emerald-500/10 border-teal-500/25 text-teal-600 dark:text-teal-400", dot: "bg-teal-400" },
};

export function getCategoryStyle(catId) {
  return CATEGORY_STYLES[catId] ?? { ...CATEGORY_STYLES[1], Icon: BookIcon };
}

export function CategoryTile({ catId, size = "md" }) {
  const { Icon, tile } = getCategoryStyle(catId);
  const box = size === "sm" ? "w-10 h-10 rounded-xl" : "w-13 h-13 rounded-2xl";
  const icon = size === "sm" ? "w-5 h-5" : "w-7 h-7";
  return (
    <div
      className={`${box} ${tile} bg-gradient-to-br border flex items-center justify-center shrink-0`}
    >
      <Icon className={icon} strokeWidth={1.8} />
    </div>
  );
}
