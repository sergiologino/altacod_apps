import { describe, expect, it } from "vitest";
import { apps } from "@/data/apps";
import { appsEn } from "./apps-en";
import { localizeApp } from "./localize-app";

describe("localizeApp", () => {
  it("covers all apps with English overlay", () => {
    for (const app of apps) {
      expect(appsEn[app.slug], `missing EN for ${app.slug}`).toBeDefined();
    }
  });

  it("returns English tagline when locale is en", () => {
    const app = apps[0];
    const en = localizeApp(app, "en");
    expect(en.tagline).toBe(appsEn[app.slug]?.tagline);
    expect(en.tagline).not.toBe(app.tagline);
  });
});
