"use client";

import { BrandLogo } from "@/components/BrandLogo";
import { SITE_NAME } from "@/lib/site";
import { usePreferences } from "@/components/providers/PreferencesProvider";

export function SiteFooter() {
  const { t } = usePreferences();

  return (
    <footer className="mt-auto border-t border-border bg-footer">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <BrandLogo link={false} className="mb-4 opacity-90" />
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {SITE_NAME}. {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
