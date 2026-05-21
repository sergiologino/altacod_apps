import "server-only";

import { appsContent, type AppContentBase, type AppProject } from "@/data/apps";
import { resolveAppImages } from "@/lib/resolve-app-images";

function withImages(content: AppContentBase): AppProject {
  return { ...content, images: resolveAppImages(content.slug) };
}

export function getApps(): AppProject[] {
  return appsContent.map(withImages);
}

export function getAppBySlug(slug: string): AppProject | undefined {
  const content = appsContent.find((a) => a.slug === slug);
  return content ? withImages(content) : undefined;
}

export function getAppSlugs(): string[] {
  return appsContent.map((a) => a.slug);
}
