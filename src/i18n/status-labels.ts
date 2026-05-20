import type { AppStatus } from "@/data/apps";
import type { Locale } from "./types";

export const statusLabelsI18n: Record<Locale, Record<AppStatus, string>> = {
  ru: {
    production: "В продакшене",
    beta: "Early access",
    mvp: "MVP",
    development: "В разработке",
    paused: "На паузе",
  },
  en: {
    production: "In production",
    beta: "Early access",
    mvp: "MVP",
    development: "In development",
    paused: "On hold",
  },
};
