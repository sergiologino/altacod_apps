/**
 * SEO is served at runtime by Route Handlers:
 *   src/app/robots.txt/route.ts
 *   src/app/sitemap.xml/route.ts
 *   src/app/sitemap-main.xml/route.ts
 * Logic lives in src/lib/seo-static.ts (covered by tests).
 */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://altacod.com").replace(/\/$/, "");
const findsUrl = (process.env.NEXT_PUBLIC_FINDS_URL || "https://finds.altacod.com").replace(
  /\/$/,
  "",
);

console.log(`SEO routes: ${siteUrl}/robots.txt, ${siteUrl}/sitemap.xml, finds → ${findsUrl}/sitemap.xml`);
