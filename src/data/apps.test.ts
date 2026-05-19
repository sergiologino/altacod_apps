import { describe, expect, it } from "vitest";
import { existsSync } from "fs";
import { join } from "path";
import { apps } from "./apps";

const publicRoot = join(process.cwd(), "public");

describe("apps data", () => {
  it("has unique slugs", () => {
    const slugs = apps.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has 20 products from portfolio", () => {
    expect(apps.length).toBe(20);
  });

  it("each app has image files on disk", () => {
    for (const app of apps) {
      const paths = [app.images.card, ...app.images.gallery];
      for (const p of paths) {
        const file = join(publicRoot, p.replace(/^\//, ""));
        expect(existsSync(file), `missing ${file}`).toBe(true);
      }
    }
  });

  it("production apps with url have https links", () => {
    for (const app of apps.filter((a) => a.url)) {
      expect(app.url).toMatch(/^https:\/\//);
    }
  });
});
