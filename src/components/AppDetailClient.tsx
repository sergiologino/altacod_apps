"use client";

import Link from "next/link";
import type { AppProject } from "@/data/apps";
import { AppImage } from "@/components/AppImage";
import { StatusBadge } from "@/components/StatusBadge";
import { localizeApp } from "@/i18n/localize-app";
import { usePreferences } from "@/components/providers/PreferencesProvider";

export function AppDetailClient({ app }: { app: AppProject }) {
  const { locale, t } = usePreferences();
  const localized = localizeApp(app, locale);
  const galleryLabels = t.galleryLabels as string[];

  return (
    <>
      <nav className="mb-8 text-sm text-muted">
        <Link href="/" className="hover:text-accent">
          {t.homeBreadcrumb}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{localized.name}</span>
      </nav>

      <header className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-image-bg">
          <AppImage src={localized.images.card} alt={localized.name} priority className="h-full w-full" />
        </div>
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <StatusBadge status={localized.status} />
            <span className="text-sm text-muted">{localized.category}</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground">{localized.name}</h1>
          <p className="mt-2 text-xl text-accent">{localized.tagline}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted">{localized.shortDescription}</p>
          {localized.url && (
            <a
              href={localized.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-500 transition-colors"
            >
              {t.openService}
            </a>
          )}
        </div>
      </header>

      <div className="prose-app mt-14 max-w-3xl">
        <h2>{t.aboutProduct}</h2>
        <p>{localized.fullDescription}</p>
        <h2>{t.features}</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          {localized.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <h2>{t.architecture}</h2>
        <p>{localized.architecture}</p>
      </div>

      <section className="mt-16" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="mb-8 text-2xl font-semibold text-foreground">
          {t.gallery}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {localized.images.gallery.map((src, i) => (
            <figure key={src} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-[16/9] bg-image-bg">
                <AppImage src={src} alt={`${localized.name} — ${galleryLabels[i]}`} className="h-full w-full" />
              </div>
              <figcaption className="px-3 py-2 text-center text-sm text-muted">
                {galleryLabels[i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {localized.faq.length > 0 && (
        <section className="mt-16 max-w-3xl" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="mb-6 text-2xl font-semibold text-foreground">
            {t.faq}
          </h2>
          <dl className="space-y-6">
            {localized.faq.map((item) => (
              <div key={item.question}>
                <dt className="font-medium text-foreground">{item.question}</dt>
                <dd className="mt-2 text-muted">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </>
  );
}
