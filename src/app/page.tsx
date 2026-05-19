import { apps } from "@/data/apps";
import { AppCard } from "@/components/AppCard";
import { COMPANY_INTRO, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            {SITE_TAGLINE}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
            {SITE_NAME} — цифровые продукты, которые решают реальные задачи
          </h1>
          <div id="about" className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-400">
            {COMPANY_INTRO.split("\n\n").map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-2 text-3xl font-semibold text-slate-50">Наши приложения</h2>
        <p className="mb-10 max-w-2xl text-slate-400">
          Каждая карточка ведёт на страницу продукта с подробным описанием, галереей и SEO-разметкой.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-50">Контакты</h2>
          <p className="mt-2 text-slate-400">
            Реквизиты и способы связи будут опубликованы на этой странице.
          </p>
        </div>
      </section>
    </>
  );
}
