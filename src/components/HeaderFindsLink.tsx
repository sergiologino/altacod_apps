"use client";

import { FINDS_URL } from "@/lib/site";
import { usePreferences } from "@/components/providers/PreferencesProvider";

export function HeaderFindsLink() {
  const { t } = usePreferences();

  return (
    <a
      href={FINDS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.findsAria}
      className="group flex max-w-[11rem] shrink-0 items-center gap-2 rounded-xl border border-border bg-card/80 px-2.5 py-1.5 transition hover:border-accent/45 hover:bg-card sm:max-w-none sm:px-3"
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-base ring-1 ring-inset ring-accent/20"
        aria-hidden
      >
        ✦
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-xs font-semibold text-foreground group-hover:text-accent">
          {t.findsTitle}
        </span>
        <span className="hidden truncate text-[10px] text-muted sm:block">{t.findsLead}</span>
      </span>
    </a>
  );
}
