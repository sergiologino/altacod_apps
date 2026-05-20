import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { PreferencesInitScript } from "@/components/PreferencesInitScript";
import { PreferencesProvider } from "@/components/providers/PreferencesProvider";
import { buildPageMetadata, organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { ui } from "@/i18n/ui";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = buildPageMetadata({
  title: `${SITE_NAME} — ${ui.ru.siteTagline}`,
  description: ui.ru.metaDescription,
  path: "/",
  image: "/og-default.svg",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} dark h-full`} suppressHydrationWarning>
      <head>
        <PreferencesInitScript />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans antialiased">
        <PreferencesProvider>
          <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
          <Analytics />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </PreferencesProvider>
      </body>
    </html>
  );
}
