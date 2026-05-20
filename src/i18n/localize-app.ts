import type { AppProject } from "@/data/apps";
import type { Locale } from "./types";
import { appsEn } from "./apps-en";

export function localizeApp(app: AppProject, locale: Locale): AppProject {
  if (locale === "ru") return app;
  const en = appsEn[app.slug];
  if (!en) return app;
  return { ...app, ...en };
}

export function localizeApps(apps: AppProject[], locale: Locale): AppProject[] {
  return apps.map((a) => localizeApp(a, locale));
}
