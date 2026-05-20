import { describe, expect, it } from "vitest";
import { existsSync } from "fs";
import { join } from "path";

const publicRoot = join(process.cwd(), "public");
const appRoot = join(process.cwd(), "src", "app");

describe("brand assets", () => {
  it("logo and favicon files exist", () => {
    expect(existsSync(join(publicRoot, "brand", "logo-mark.svg"))).toBe(true);
    expect(existsSync(join(publicRoot, "brand", "logo-full.svg"))).toBe(true);
    expect(existsSync(join(appRoot, "icon.svg"))).toBe(true);
    expect(existsSync(join(publicRoot, "og-default.svg"))).toBe(true);
  });
});
