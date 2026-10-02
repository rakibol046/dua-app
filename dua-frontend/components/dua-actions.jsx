"use client";

import { useEffect, useRef, useState } from "react";
import {
  BookmarkIcon,
  BulbIcon,
  CheckIcon,
  CopyIcon,
  FlagIcon,
  PauseIcon,
  PlayIcon,
  ShareIcon,
} from "./icons";

const iconButton =
  "w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-brand-600 dark:hover:text-brand-400 hover:bg-hover transition-colors";

function AudioButton({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => () => audioRef.current?.pause(), []);

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.addEventListener("ended", () => setPlaying(false));
      audioRef.current.addEventListener("pause", () => setPlaying(false));
      audioRef.current.addEventListener("play", () => setPlaying(true));
    }
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => setPlaying(false));
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause recitation" : "Play recitation"}
      className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-transform"
    >
      {playing ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5 ml-0.5" />}
    </button>
  );
}

export default function DuaActions({ dua }) {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    const text = [
      dua.dua_name_en,
      dua.dua_arabic,
      dua.transliteration_en,
      dua.translation_en,
      dua.refference_en,
    ]
      .filter(Boolean)
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const share = async () => {
    const url = `${window.location.origin}${window.location.pathname}#dua-${dua.dua_id}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: dua.dua_name_en, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {}
  };

  return (
    <footer className="flex items-center justify-between gap-4 pt-4 border-t border-line">
      {dua.audio ? <AudioButton src={dua.audio} /> : <span />}
      <div className="flex items-center gap-1 sm:gap-3">
        <button type="button" onClick={copyText} aria-label={copied ? "Copied" : "Copy dua"} className={iconButton}>
          {copied ? <CheckIcon className="w-4.5 h-4.5 text-brand-500" /> : <CopyIcon className="w-4.5 h-4.5" />}
        </button>
        <button type="button" aria-label="Bookmark" className={iconButton}>
          <BookmarkIcon className="w-4.5 h-4.5" />
        </button>
        <button type="button" aria-label="Memorize" className={iconButton}>
          <BulbIcon className="w-4.5 h-4.5" />
        </button>
        <button type="button" onClick={share} aria-label="Share" className={iconButton}>
          <ShareIcon className="w-4.5 h-4.5" />
        </button>
        <button type="button" aria-label="Report" className={iconButton}>
          <FlagIcon className="w-4.5 h-4.5" />
        </button>
      </div>
    </footer>
  );
}
