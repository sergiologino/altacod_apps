"use client";

import { usePreferences } from "@/components/providers/PreferencesProvider";

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted transition hover:border-accent/50 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      {children}
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
    </svg>
  );
}

function LangIcon({ locale }: { locale: "ru" | "en" }) {
  return (
    <span className="text-xs font-bold tracking-wide" aria-hidden>
      {locale === "ru" ? "EN" : "RU"}
    </span>
  );
}

export function HeaderToolbar() {
  const { theme, toggleTheme, toggleLocale, locale, t, mounted } = usePreferences();

  if (!mounted) {
    return <div className="flex gap-2" aria-hidden style={{ width: 80, height: 36 }} />;
  }

  return (
    <div className="flex items-center gap-2">
      <IconButton
        label={theme === "dark" ? t.toggleThemeLight : t.toggleThemeDark}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </IconButton>
      <IconButton label={t.toggleLang} onClick={toggleLocale}>
        <LangIcon locale={locale} />
      </IconButton>
    </div>
  );
}
