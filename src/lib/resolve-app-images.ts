import { existsSync } from "fs";
import { join } from "path";
import type { AppProject } from "@/data/apps";

/** Приоритет: webp → avif → png → jpg → jpeg → gif */
export const RASTER_EXTENSIONS = [
  "webp",
  "avif",
  "png",
  "jpg",
  "jpeg",
  "gif",
] as const;

export const IMAGE_SLOTS = ["card", "detail-1", "detail-2", "detail-3"] as const;

export type ImageSlot = (typeof IMAGE_SLOTS)[number];

const publicRoot = join(process.cwd(), "public");

function appDir(slug: string) {
  return join(publicRoot, "images", "apps", slug);
}

/** Проверяет наличие файла слота с любым известным расширением */
export function slotFileExists(slug: string, slot: ImageSlot): boolean {
  const dir = appDir(slug);
  for (const ext of RASTER_EXTENSIONS) {
    if (existsSync(join(dir, `${slot}.${ext}`))) return true;
  }
  return existsSync(join(dir, `${slot}.svg`));
}

function resolveSlot(slug: string, slot: ImageSlot): string {
  const dir = appDir(slug);
  for (const ext of RASTER_EXTENSIONS) {
    const path = join(dir, `${slot}.${ext}`);
    if (existsSync(path)) {
      return `/images/apps/${slug}/${slot}.${ext}`;
    }
  }
  return `/images/apps/${slug}/${slot}.svg`;
}

export function resolveAppImages(slug: string): AppProject["images"] {
  const gallery = [
    resolveSlot(slug, "detail-1"),
    resolveSlot(slug, "detail-2"),
    resolveSlot(slug, "detail-3"),
  ] as AppProject["images"]["gallery"];

  return {
    card: resolveSlot(slug, "card"),
    gallery,
  };
}
