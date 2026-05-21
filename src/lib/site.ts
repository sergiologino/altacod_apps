export const SITE_NAME = "Altacod";
/** @deprecated Use i18n ui.siteTagline */
export const SITE_TAGLINE = "Веб и мобильные приложения";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://altacod.com";

export const FINDS_URL =
  process.env.NEXT_PUBLIC_FINDS_URL?.replace(/\/$/, "") ||
  "https://finds.altacod.com";

export const COMPANY_INTRO = `Altacod — студия прикладной разработки. Мы создаём веб- и мобильные сервисы: от классических бизнес-приложений до решений с искусственным интеллектом там, где он действительно усиливает продукт.

Ниже — портфель наших продуктов: от работающих в продакшене до ранних MVP. Каждый проект — отдельная команда, единые стандарты качества, прозрачная архитектура и внимание к SEO и доступности.`;

export const DEFAULT_KEYWORDS = [
  "Altacod",
  "разработка приложений",
  "веб приложения",
  "мобильные приложения",
  "стартап студия",
  "веб приложения Россия",
];
