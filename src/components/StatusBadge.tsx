"use client";

import type { AppStatus } from "@/data/apps";
import { usePreferences } from "@/components/providers/PreferencesProvider";
import { statusLabelsI18n } from "@/i18n/status-labels";

const styles: Record<AppStatus, string> = {
  production: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 ring-emerald-500/30",
  beta: "bg-sky-500/15 text-sky-700 dark:text-sky-300 ring-sky-500/30",
  mvp: "bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-amber-500/30",
  development: "bg-violet-500/15 text-violet-700 dark:text-violet-300 ring-violet-500/30",
  paused: "bg-slate-500/15 text-slate-600 dark:text-slate-400 ring-slate-500/30",
};

export function StatusBadge({ status }: { status: AppStatus }) {
  const { locale } = usePreferences();
  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
    >
      {statusLabelsI18n[locale][status]}
    </span>
  );
}
