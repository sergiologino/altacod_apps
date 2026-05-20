"use client";

import Link from "next/link";
import type { AppProject } from "@/data/apps";
import { AppImage } from "./AppImage";
import { StatusBadge } from "./StatusBadge";
import { localizeApp } from "@/i18n/localize-app";
import { usePreferences } from "@/components/providers/PreferencesProvider";

export function AppCard({ app }: { app: AppProject }) {
  const { locale } = usePreferences();
  const localized = localizeApp(app, locale);

  return (
    <Link
      href={`/apps/${app.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-accent/40 hover:shadow-lg hover:shadow-cyan-500/5"
    >
      <div className="relative aspect-[16/9] w-full bg-image-bg">
        <AppImage
          src={localized.images.card}
          alt={localized.name}
          className="h-full w-full"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {localized.name}
          </h2>
          <StatusBadge status={localized.status} />
        </div>
        <p className="text-sm text-accent/90">{localized.tagline}</p>
        <p className="text-sm leading-relaxed text-muted line-clamp-4">
          {localized.shortDescription}
        </p>
        {localized.url && (
          <span className="mt-auto text-xs text-muted group-hover:text-accent">
            {localized.url.replace(/^https?:\/\//, "")} →
          </span>
        )}
      </div>
    </Link>
  );
}
