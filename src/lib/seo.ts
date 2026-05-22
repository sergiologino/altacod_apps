import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, DEFAULT_KEYWORDS } from "./site";
import type { AppProject } from "@/data/apps";

export function buildPageMetadata(opts: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE_URL}${opts.path ?? ""}`;
  const image = opts.image?.startsWith("http")
    ? opts.image
    : `${SITE_URL}${opts.image ?? "/og-default.svg"}`;
  const keywords = [...DEFAULT_KEYWORDS, ...(opts.keywords ?? [])];

  return {
    title: opts.title,
    description: opts.description,
    keywords,
    alternates: { canonical: url },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/brand/logo-mark.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      type: opts.type ?? "website",
      locale: "ru_RU",
      url,
      siteName: SITE_NAME,
      title: opts.title,
      description: opts.description,
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Студия разработки цифровых продуктов с искусственным интеллектом: веб, мобильные приложения, SaaS.",
    areaServed: { "@type": "Country", name: "Россия" },
    knowsAbout: [
      "Искусственный интеллект",
      "Веб-разработка",
      "Мобильные приложения",
      "SaaS",
    ],
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "ru-RU",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function softwareApplicationJsonLd(app: AppProject) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    applicationCategory: app.category,
    operatingSystem: "Web, Android, iOS",
    description: app.seoDescription,
    url: app.url ? `https://${app.url.replace(/^https?:\/\//, "")}` : `${SITE_URL}/apps/${app.slug}`,
    image: `${SITE_URL}${app.images.card}`,
    offers: {
      "@type": "Offer",
      availability:
        app.status === "production"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
    },
    author: { "@type": "Organization", name: SITE_NAME },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
