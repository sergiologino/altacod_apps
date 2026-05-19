import type { MetadataRoute } from "next";
import { apps } from "@/data/apps";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];
  const appPages: MetadataRoute.Sitemap = apps.map((app) => ({
    url: `${SITE_URL}/apps/${app.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...staticPages, ...appPages];
}
