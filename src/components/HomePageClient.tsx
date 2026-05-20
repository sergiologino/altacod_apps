"use client";

import { apps } from "@/data/apps";
import { AppCard } from "@/components/AppCard";
import { usePreferences } from "@/components/providers/PreferencesProvider";
import { SITE_NAME } from "@/lib/site";

export function HomePageClient() {
  const { t } = usePreferences();
  const intro = t.companyIntro as string[];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-hero-glow via-background to-background" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            {t.siteTagline}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {SITE_NAME} — {t.heroTitle}
          </h1>
          <div id="about" className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            {intro.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-2 text-3xl font-semibold text-foreground">{t.productsTitle}</h2>
        <p className="mb-10 max-w-2xl text-muted">{t.productsLead}</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-footer">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-foreground">{t.contactTitle}</h2>
          <p className="mt-2 text-muted">{t.contactLead}</p>
        </div>
      </section>
    </>
  );
}
