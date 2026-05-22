import { getRobotsTxt, ROBOTS_HEADERS } from "@/lib/seo-static";

export function GET() {
  return new Response(getRobotsTxt(), { headers: ROBOTS_HEADERS });
}

export function HEAD() {
  return new Response(null, { headers: ROBOTS_HEADERS });
}
