import { notFound } from "next/navigation";
import { getAppBySlug, getAppSlugs } from "@/data/get-apps";
import { AppDetailClient } from "@/components/AppDetailClient";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAppSlugs().map((slug) => ({ slug }));
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
      <AppDetailClient app={app} />
    </article>
  );
}
