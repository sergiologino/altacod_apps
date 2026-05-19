import { SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {SITE_NAME}. Контактные данные будут добавлены.
        </p>
      </div>
    </footer>
  );
}
