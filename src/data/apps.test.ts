import { describe, expect, it } from "vitest";
import { existsSync, mkdirSync, writeFileSync, rmSync } from "fs";
import { join } from "path";
import { appsContent } from "./apps";
import { resolveAppImages, RASTER_EXTENSIONS } from "@/lib/resolve-app-images";

const publicRoot = join(process.cwd(), "public");

describe("apps data", () => {
  it("has unique slugs", () => {
    const slugs = appsContent.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has 20 products from portfolio", () => {
    expect(appsContent.length).toBe(20);
  });

  it("production apps with url have https links", () => {
    for (const app of appsContent.filter((a) => a.url)) {
      expect(app.url).toMatch(/^https:\/\//);
    }
  });
});

describe("resolveAppImages", () => {
  it("resolves paths to existing files (raster or svg fallback)", () => {
    for (const app of appsContent) {
      const images = resolveAppImages(app.slug);
      for (const p of [images.card, ...images.gallery]) {
        expect(existsSync(join(publicRoot, p.replace(/^\//, ""))), `missing ${p}`).toBe(
          true,
        );
      }
    }
  });

  it("prefers raster over svg when both exist", () => {
    const slug = "_test-raster-priority";
    const dir = join(publicRoot, "images", "apps", slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "card.svg"), "<svg/>");
    writeFileSync(join(dir, "card.webp"), "RIFF");
    writeFileSync(join(dir, "detail-1.svg"), "<svg/>");
    writeFileSync(join(dir, "detail-2.svg"), "<svg/>");
    writeFileSync(join(dir, "detail-3.svg"), "<svg/>");
    try {
      expect(resolveAppImages(slug).card).toContain("card.webp");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("raster extensions", () => {
  it("documents supported formats", () => {
    expect(RASTER_EXTENSIONS).toContain("webp");
    expect(RASTER_EXTENSIONS).toContain("png");
    expect(RASTER_EXTENSIONS).toContain("jpg");
  });
});
