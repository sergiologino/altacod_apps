import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 text-sm font-bold text-white">
            A
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-50 group-hover:text-cyan-300 transition-colors">
            {SITE_NAME}
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/#products" className="hover:text-cyan-300 transition-colors">
            Продукты
          </Link>
          <Link href="/#about" className="hover:text-cyan-300 transition-colors">
            О студии
          </Link>
        </nav>
      </div>
    </header>
  );
}
