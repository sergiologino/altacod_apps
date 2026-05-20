"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { usePreferences } from "@/components/providers/PreferencesProvider";
import { HeaderToolbar } from "@/components/HeaderToolbar";

export function SiteHeader() {
  const { t } = usePreferences();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <BrandLogo />
        <nav className="flex items-center gap-4 sm:gap-6 text-sm text-muted">
          <Link href="/#products" className="hidden sm:inline hover:text-accent transition-colors">
            {t.navProducts}
          </Link>
          <Link href="/#about" className="hidden sm:inline hover:text-accent transition-colors">
            {t.navAbout}
          </Link>
          <HeaderToolbar />
        </nav>
      </div>
    </header>
  );
}
