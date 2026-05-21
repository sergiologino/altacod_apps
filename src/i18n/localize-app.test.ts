import { describe, expect, it } from "vitest";
import { appsContent } from "@/data/apps";
import { resolveAppImages } from "@/lib/resolve-app-images";
import { appsEn } from "./apps-en";
import { localizeApp } from "./localize-app";

function appWithImages(index: number) {
  const base = appsContent[index];
  return { ...base, images: resolveAppImages(base.slug) };
}

describe("localizeApp", () => {
  it("covers all apps with English overlay", () => {
    for (const app of appsContent) {
      expect(appsEn[app.slug], `missing EN for ${app.slug}`).toBeDefined();
    }
  });

  it("returns English tagline when locale is en", () => {
    const app = appWithImages(0);
    const en = localizeApp(app, "en");
    expect(en.tagline).toBe(appsEn[app.slug]?.tagline);
    expect(en.tagline).not.toBe(app.tagline);
  });
});
