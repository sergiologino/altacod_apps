import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getAppBySlug } from "@/data/apps";
import { AppImage } from "@/components/AppImage";
import { JsonLd } from "@/components/JsonLd";
import { StatusBadge } from "@/components/StatusBadge";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};
  return buildPageMetadata({
    title: app.seoTitle,
    description: app.seoDescription,
    keywords: app.keywords,
    path: `/apps/${app.slug}`,
    image: app.images.card,
    type: "article",
  });
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  const galleryLabels = ["Архитектура", "Функциональность", "Интерфейс"];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd
        data={[
          softwareApplicationJsonLd(app),
          breadcrumbJsonLd([
            { name: "Главная", path: "/" },
            { name: app.name, path: `/apps/${app.slug}` },
          ]),
          ...(app.faq.length ? [faqJsonLd(app.faq)] : []),
        ]}
      />

      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/" className="hover:text-cyan-400">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{app.name}</span>
      </nav>

      <header className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800">
          <AppImage src={app.images.card} alt={app.name} priority className="h-full w-full" />
        </div>
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <StatusBadge status={app.status} />
            <span className="text-sm text-slate-500">{app.category}</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-50">{app.name}</h1>
          <p className="mt-2 text-xl text-cyan-400">{app.tagline}</p>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">{app.shortDescription}</p>
          {app.url && (
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-500 transition-colors"
            >
              Открыть сервис →
            </a>
          )}
        </div>
      </header>

      <div className="prose-app mt-14 max-w-3xl">
        <h2>О продукте</h2>
        <p>{app.fullDescription}</p>
        <h2>Возможности</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-400">
          {app.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <h2>Архитектура</h2>
        <p>{app.architecture}</p>
      </div>

      <section className="mt-16" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="mb-8 text-2xl font-semibold text-slate-50">
          Галерея
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {app.images.gallery.map((src, i) => (
            <figure key={src} className="overflow-hidden rounded-xl border border-slate-800">
              <div className="relative aspect-[16/9]">
                <AppImage src={src} alt={`${app.name} — ${galleryLabels[i]}`} className="h-full w-full" />
              </div>
              <figcaption className="px-3 py-2 text-center text-sm text-slate-500">
                {galleryLabels[i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {app.faq.length > 0 && (
        <section className="mt-16 max-w-3xl" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="mb-6 text-2xl font-semibold text-slate-50">
            Частые вопросы
          </h2>
          <dl className="space-y-6">
            {app.faq.map((item) => (
              <div key={item.question}>
                <dt className="font-medium text-slate-200">{item.question}</dt>
                <dd className="mt-2 text-slate-400">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </article>
  );
}
