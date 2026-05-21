import { describe, expect, it } from "vitest";
import { organizationJsonLd, softwareApplicationJsonLd } from "./seo";
import { appsContent } from "@/data/apps";
import { resolveAppImages } from "@/lib/resolve-app-images";

describe("seo json-ld", () => {
  it("organization has required fields", () => {
    const data = organizationJsonLd() as Record<string, unknown>;
    expect(data["@type"]).toBe("Organization");
    expect(data.name).toBeTruthy();
    expect(data.url).toMatch(/^https?:\/\//);
  });

  it("software application uses app metadata", () => {
    const base = appsContent[0];
    const app = { ...base, images: resolveAppImages(base.slug) };
    const data = softwareApplicationJsonLd(app) as Record<string, unknown>;
    expect(data.name).toBe(app.name);
    expect(data.description).toBe(app.seoDescription);
  });
});
