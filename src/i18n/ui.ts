import type { Locale } from "./types";

export const ui = {
  ru: {
    siteTagline: "Веб и мобильные приложения",
    heroTitle: "цифровые продукты, которые решают реальные задачи",
    companyIntro: [
      "Altacod — студия прикладной разработки. Мы создаём веб- и мобильные сервисы: от классических бизнес-приложений до решений с искусственным интеллектом там, где он действительно усиливает продукт.",
      "Ниже — портфель наших проектов: от работающих в продакшене до ранних MVP. Каждый проект — отдельная команда, единые стандарты качества, прозрачная архитектура и внимание к SEO и доступности.",
    ],
    navProducts: "Продукты",
    navAbout: "О студии",
    findsTitle: "Altacod Finds",
    findsLead: "Коллекция IT, AI и dev — 4 года",
    findsAria: "Открыть коллекцию полезных материалов на finds.altacod.com",
    productsTitle: "Наши приложения",
    productsLead:
      "Каждая карточка ведёт на страницу продукта с подробным описанием, галереей и SEO-разметкой.",
    contactTitle: "Контакты",
    contactLead: "Реквизиты и способы связи будут опубликованы на этой странице.",
    footerRights: "Контактные данные будут добавлены.",
    homeBreadcrumb: "Главная",
    openService: "Открыть сервис →",
    aboutProduct: "О продукте",
    features: "Возможности",
    architecture: "Архитектура",
    gallery: "Галерея",
    galleryLabels: ["Архитектура", "Функциональность", "Интерфейс"],
    faq: "Частые вопросы",
    metaDescription:
      "Витрина продуктов студии Altacod: веб и мобильные приложения — с ИИ и без, образование, финтех, социальные и lifestyle-сервисы.",
    toggleThemeLight: "Светлая тема",
    toggleThemeDark: "Тёмная тема",
    toggleLang: "Switch to English",
  },
  en: {
    siteTagline: "Web and mobile applications",
    heroTitle: "digital products that solve real problems",
    companyIntro: [
      "Altacod is an applied software studio. We build web and mobile services—from classic business applications to AI-powered features where intelligence genuinely adds value.",
      "Below is our product portfolio: from production-ready releases to early MVPs. Each project has its own team, shared quality standards, transparent architecture, and strong focus on SEO and accessibility.",
    ],
    navProducts: "Products",
    navAbout: "About",
    findsTitle: "Altacod Finds",
    findsLead: "IT, AI & dev picks — 4 years",
    findsAria: "Open the curated collection at finds.altacod.com",
    productsTitle: "Our applications",
    productsLead:
      "Each card opens a product page with full description, gallery, and structured SEO.",
    contactTitle: "Contact",
    contactLead: "Company details and contact options will be published here.",
    footerRights: "Contact details will be added soon.",
    homeBreadcrumb: "Home",
    openService: "Open service →",
    aboutProduct: "About the product",
    features: "Features",
    architecture: "Architecture",
    gallery: "Gallery",
    galleryLabels: ["Architecture", "Features", "Interface"],
    faq: "FAQ",
    metaDescription:
      "Altacod product showcase: web and mobile apps—with and without AI—education, fintech, social, and lifestyle services.",
    toggleThemeLight: "Light theme",
    toggleThemeDark: "Dark theme",
    toggleLang: "Переключить на русский",
  },
} as const satisfies Record<Locale, Record<string, string | string[]>>;

export function getUi(locale: Locale) {
  return ui[locale];
}
