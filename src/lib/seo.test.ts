import { describe, expect, it } from "vitest";
import { organizationJsonLd, softwareApplicationJsonLd } from "./seo";
import { apps } from "@/data/apps";

describe("seo json-ld", () => {
  it("organization has required fields", () => {
    const data = organizationJsonLd() as Record<string, unknown>;
    expect(data["@type"]).toBe("Organization");
    expect(data.name).toBeTruthy();
    expect(data.url).toMatch(/^https?:\/\//);
  });

  it("software application uses app metadata", () => {
    const app = apps[0];
    const data = softwareApplicationJsonLd(app) as Record<string, unknown>;
    expect(data.name).toBe(app.name);
    expect(data.description).toBe(app.seoDescription);
  });
});
