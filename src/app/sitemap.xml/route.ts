import { getSitemapIndexXml, SEO_XML_HEADERS } from "@/lib/seo-static";

export function GET() {
  return new Response(getSitemapIndexXml(), { headers: SEO_XML_HEADERS });
}

export function HEAD() {
  return new Response(null, { headers: SEO_XML_HEADERS });
}
