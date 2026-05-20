"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Locale, Theme } from "@/i18n/types";
import { LOCALE_STORAGE_KEY, THEME_STORAGE_KEY } from "@/i18n/types";
import { getUi } from "@/i18n/ui";

type PreferencesContextValue = {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: ReturnType<typeof getUi>;
  mounted: boolean;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "ru";
  return localStorage.getItem(LOCALE_STORAGE_KEY) === "en" ? "en" : "ru";
}

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
}

function applyDom(locale: Locale, theme: Theme) {
  const root = document.documentElement;
  root.lang = locale;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setThemeState(readStoredTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyDom(locale, theme);
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [locale, theme, mounted]);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);
  const setTheme = useCallback((next: Theme) => setThemeState(next), []);
  const toggleLocale = useCallback(
    () => setLocaleState((prev) => (prev === "ru" ? "en" : "ru")),
    [],
  );
  const toggleTheme = useCallback(
    () => setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo(
    () => ({
      locale,
      theme,
      setLocale,
      toggleLocale,
      setTheme,
      toggleTheme,
      t: getUi(locale),
      mounted,
    }),
    [locale, theme, setLocale, toggleLocale, setTheme, toggleTheme, mounted],
  );

  return (
    <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error("usePreferences must be used within PreferencesProvider");
  return ctx;
}
