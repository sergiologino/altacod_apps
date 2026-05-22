import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "fs";
import { join } from "path";
import {
  getRobotsTxt,
  getSitemapIndexXml,
  getSitemapMainXml,
} from "@/lib/seo-static";

describe("seo-static", () => {
  it("robots.txt references both sitemaps and host", () => {
    const robots = getRobotsTxt();
    expect(robots).toContain("Sitemap: https://altacod.com/sitemap.xml");
    expect(robots).toContain("Sitemap: https://finds.altacod.com/sitemap.xml");
    expect(robots).toContain("Host: https://altacod.com");
  });

  it("sitemap index includes main and finds child sitemaps", () => {
    const xml = getSitemapIndexXml();
    expect(xml).toContain("<sitemapindex");
    expect(xml).toContain("sitemap-main.xml");
    expect(xml).toContain("finds.altacod.com/sitemap.xml");
  });

  it("sitemap-main lists altacod apps and finds landing pages", () => {
    const xml = getSitemapMainXml();
    expect(xml).toContain("https://altacod.com/apps/altakid");
    expect(xml).toContain("https://finds.altacod.com/");
    expect(xml).toContain("https://finds.altacod.com/import");
  });
});

describe("brand assets", () => {
  it("favicon files exist after generate step", () => {
    const publicRoot = join(process.cwd(), "public");
    const appRoot = join(process.cwd(), "src", "app");
    expect(existsSync(join(publicRoot, "brand", "logo-mark.svg"))).toBe(true);
    expect(existsSync(join(appRoot, "favicon.ico"))).toBe(true);
    expect(existsSync(join(publicRoot, "favicon.ico"))).toBe(true);
    expect(existsSync(join(publicRoot, "favicon.svg"))).toBe(true);
    expect(readFileSync(join(appRoot, "favicon.ico")).length).toBeGreaterThan(0);
  });
});
