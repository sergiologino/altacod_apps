import Link from "next/link";
import type { AppProject } from "@/data/apps";
import { AppImage } from "./AppImage";
import { StatusBadge } from "./StatusBadge";

export function AppCard({ app }: { app: AppProject }) {
  return (
    <Link
      href={`/apps/${app.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5"
    >
      <div className="relative aspect-[16/9] w-full">
        <AppImage
          src={app.images.card}
          alt={app.name}
          className="h-full w-full"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-xl font-semibold text-slate-50 group-hover:text-cyan-300 transition-colors">
            {app.name}
          </h2>
          <StatusBadge status={app.status} />
        </div>
        <p className="text-sm text-cyan-400/90">{app.tagline}</p>
        <p className="text-sm leading-relaxed text-slate-400 line-clamp-4">
          {app.shortDescription}
        </p>
        {app.url && (
          <span className="mt-auto text-xs text-slate-500 group-hover:text-cyan-400">
            {app.url.replace(/^https?:\/\//, "")} →
          </span>
        )}
      </div>
    </Link>
  );
}
