import { appsContent } from "@/data/apps";
import { FINDS_URL, SITE_URL } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function urlEntry(loc: string, changefreq: string, priority: string, lastmod: string) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function getRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${FINDS_URL}/sitemap.xml
Host: ${SITE_URL}
`;
}

export function getSitemapIndexXml(now = new Date()) {
  const lastmod = now.toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${escapeXml(`${SITE_URL}/sitemap-main.xml`)}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${escapeXml(`${FINDS_URL}/sitemap.xml`)}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;
}

export function getSitemapMainXml(now = new Date()) {
  const lastmod = now.toISOString();
  const urls = [
    urlEntry(`${SITE_URL}/`, "weekly", "1.0", lastmod),
    urlEntry(`${FINDS_URL}/`, "daily", "0.9", lastmod),
    urlEntry(`${FINDS_URL}/import`, "monthly", "0.7", lastmod),
    ...appsContent.map((app) =>
      urlEntry(`${SITE_URL}/apps/${app.slug}`, "monthly", "0.8", lastmod),
    ),
  ].join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export const SEO_XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600",
} as const;

export const ROBOTS_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600",
} as const;
