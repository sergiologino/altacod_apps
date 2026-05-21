export type AppStatus =
  | "production"
  | "beta"
  | "mvp"
  | "development"
  | "paused";

export interface AppProject {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: AppStatus;
  url?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  architecture: string;
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
  faq: { question: string; answer: string }[];
  images: {
    card: string;
    gallery: [string, string, string];
  };
}

export type AppContentBase = Omit<AppProject, "images">;

export const appsContent: AppContentBase[] = [
  {
    slug: "altakid",
    name: "AltaKid",
    tagline: "Родительский контроль нового поколения",
    category: "Семья и безопасность",
    status: "production",
    url: "https://altakid.ru",
    shortDescription:
      "AltaKid помогает родителям защитить ребёнка в цифровой среде: лимиты экранного времени, геолокация, контроль приложений и умная аналитика. Маркетинговый сайт и родительский веб-кабинет дополняют мобильное приложение в RuStore.",
    fullDescription:
      "AltaKid — экосистема родительского контроля для Android. Родитель видит, где ребёнок, сколько времени проводит в телефоне и какие приложения использует. Планируется тесная интеграция со School Trainer — школьным тренажёром внутри той же семьи продуктов Altacod.",
    features: [
      "Лимиты доступности смартфона ребенку",
      "Местоположение ребенка на карте с координатамидля навигатора",
      "Блокировка отдельных приложений",
      "Уроки и задания по русскому, матеше и инглишу",
      "Родительский веб-кабинет",
      "Публикация в RuStore",
      "Веб-версия для родителей - владельцев iPhone"
    ],
    architecture:
      "React/Vite лендинг с SEO (Helmet, JSON-LD, sitemap); мобильное приложение — отдельный APK; ссылки на web.altakid.ru.",
    keywords: ["родительский контроль", "AltaKid", "безопасность детей", "геолокация ребёнка"],
    seoTitle: "AltaKid — родительский контроль | Altacod",
    seoDescription:
      "AltaKid: лимиты экрана, геолокация и контроль приложений для Android и iPhone. Продукт Altacod — altakid.ru.",
    faq: [
      {
        question: "Где скачать приложение AltaKid?",
        answer: "Приложение доступно в RuStore; на сайте altakid.ru — инструкции и ссылка на установку. Также есть веб-версия если у родителя iPhone",
      },
    ],
  },
  {
    slug: "altanote",
    name: "AltaNote",
    tagline: "Заметки со связями и ИИ",
    category: "Продуктивность",
    status: "paused",
    url: "https://altanote.pro",
    shortDescription:
      "AltaNote — визуальная система заметок: холст, связи между идеями, богатый редактор и синхронизация. Расширение для браузера и Telegram-бот дополняют веб-приложение. Статус публикации приостановлен — продукт дорабатывается.",
    fullDescription:
      "Интеллектуальные заметки для исследователей и авторов: граф связей на базе React Flow, TinyMCE/Quill, OAuth, WebSocket-синхронизация, Spring Boot API и хранение файлов. Архитектура — SPA на /app/ за nginx с SEO-проксированием главной.",
    features: [
      "Канвас и граф связей",
      "Синхронизация в реальном времени",
      "Chrome-расширение для захвата страниц",
      "Telegram-бот",
      "OAuth Google / Yandex",
    ],
    architecture: "React + Vite, Spring Boot 3.4, PostgreSQL, MinIO, nginx.",
    keywords: ["заметки", "Zettelkasten", "AltaNote", "ИИ заметки"],
    seoTitle: "AltaNote — умные заметки | Altacod",
    seoDescription: "AltaNote: визуальные заметки, связи и ИИ-ассистент. Продукт студии Altacod.",
    faq: [
      {
        question: "Доступен ли AltaNote сейчас?",
        answer: "Проект временно снят с активной публикации; витрина отражает портфель Altacod.",
      },
    ],
  },
  {
    slug: "altapens",
    name: "AltaPens",
    tagline: "Цифровая забота о пожилых",
    category: "Здоровье и забота",
    status: "mvp",
    url: "https://altapens.ru",
    shortDescription:
      "AltaPens объединяет пожилого человека, родственников и сиделку: напоминания о лекарствах, чек-ины самочувствия, сеть заботы и пожертвования. MVP в активной разработке на стеке Next.js + Spring Boot.",
    fullDescription:
      "Продукт для российского рынка заботы: мобильные клиенты (Capacitor/Kotlin WebView), лендинг, API с YooKassa и push (FCM). Голосовой режим и Metrika заложены в дорожную карту.",
    features: [
      "Календарь лекарств",
      "Чек-ины wellbeing",
      "Сеть родственников и сиделок",
      "Донаты через YooKassa",
      "PWA и мобильные оболочки",
    ],
    architecture: "Monorepo: Next.js landing, Spring Boot API, PostgreSQL, Docker/Coolify.",
    keywords: ["пожилые", "уход", "AltaPens", "телемедицина"],
    seoTitle: "AltaPens — забота о пожилых | Altacod",
    seoDescription: "AltaPens: цифровая забота, лекарства и семья на одной платформе. altapens.ru.",
    faq: [
      {
        question: "Для кого AltaPens?",
        answer: "Для семей с пожилыми родственниками и профессиональных сиделок в России.",
      },
    ],
  },
  {
    slug: "altatrade",
    name: "AltaTrade",
    tagline: "Аналитика рынков с ML и ИИ",
    category: "Финтех",
    status: "beta",
    url: "https://altatrade.tech",
    shortDescription:
      "AltaTrade — платформа анализа активов: исторические котировки, прогнозы LSTM, лента событий, аномалии и рекомендации с пояснениями от ИИ. Early access: ручной трейдинг с ассистентом, без автоматического исполнения сделок.",
    fullDescription:
      "Три сервиса: React-дашборд, Java Spring API и Python FastAPI ML с общей PostgreSQL. OAuth, избранное, RU/EN, тестовый контур с фикстурами. Фокус — информирование трейдера, не брокеридж.",
    features: [
      "Прогнозы 7/30 дней с доверительными интервалами",
      "Лента macro/corporate/social",
      "Алерты аномалий",
      "Рекомендации entry/exit",
      "ИИ-объяснения по активу",
    ],
    architecture: "AltaTrade_front (Vite/React), AltaTrade_back (Spring Boot 21), AltaTrade_ML (FastAPI, PyTorch).",
    keywords: ["трейдинг", "ML прогноз", "AltaTrade", "аналитика акций"],
    seoTitle: "AltaTrade — аналитика для трейдеров | Altacod",
    seoDescription: "AltaTrade: котировки, ML-прогнозы и ИИ-объяснения. Early access на altatrade.tech.",
    faq: [
      {
        question: "Исполняет ли AltaTrade сделки?",
        answer: "Нет. Платформа аналитическая; автоторговля вне текущего scope.",
      },
    ],
  },
  {
    slug: "publisher",
    name: "Publisher",
    tagline: "Контент-хаб и автопостинг",
    category: "Медиа и маркетинг",
    status: "production",
    url: "https://myposts.pro",
    shortDescription:
      "Publisher (myposts.pro) — платформа автора: единый источник постов и синдикация в Telegram, VK, OK, MAX. AI-студия для черновиков и промптов. Работает в продакшене; дорабатывается интеграция изображений.",
    fullDescription:
      "POSSE-подход: пишете один раз — публикуете везде. Spring Boot API, React-приложение, Redis-очередь исходящих постов, публичные блоги. Смежный продукт MarketFlow — отдельная механика дистрибуции.",
    features: [
      "Мультиплатформенный автопостинг",
      "AI-промпты и студия",
      "Публичные блоги авторов",
      "Очередь публикаций Redis",
      "Интеграция соцсетей RU",
    ],
    architecture: "Spring Boot + React + Redis; writer_showcase monorepo.",
    keywords: ["автопостинг", "myposts", "POSSE", "блог платформа"],
    seoTitle: "Publisher — автопостинг для авторов | Altacod",
    seoDescription: "Publisher на myposts.pro: посты, блоги и синдикация в соцсети. Altacod.",
    faq: [
      {
        question: "Какие сети поддерживаются?",
        answer: "Telegram, VK, OK, MAX и расширяемый список через очередь публикаций.",
      },
    ],
  },
  {
    slug: "neuromaster",
    name: "NeuroMaster",
    tagline: "Универсальная обёртка над ИИ",
    category: "ИИ-платформа",
    status: "production",
    url: "https://neuromaster.pro",
    shortDescription:
      "NeuroMaster — веб-доступ к генерации текстов, изображений и видео через единый аккаунт, оплату и админку. Простой вход в ИИ-инструменты для пользователей без технического бэкграунда.",
    fullDescription:
      "Spring Boot 3.4 backend: JWT, OAuth Google/Yandex, YooKassa, диалоги, статистика токенов, Feign к AI-integration. Экосистемный хаб для Orchestra и MultiTool на поддоменах.",
    features: ["Тексты, картинки, видео", "OAuth и подписки", "Админ-панель", "Статистика токенов"],
    architecture: "Ai_chat_backend (Java 21) + фронт neuromaster.pro.",
    keywords: ["нейросеть", "NeuroMaster", "генерация текста", "ИИ чат"],
    seoTitle: "NeuroMaster — ИИ тексты и медиа | Altacod",
    seoDescription: "NeuroMaster.pro: тексты, рисунки и видео в одном аккаунте.",
    faq: [
      {
        question: "Чем NeuroMaster отличается от Orchestra?",
        answer: "NeuroMaster — потребительская обёртка; Orchestra — мультиагентные задачи с approvals.",
      },
    ],
  },
  {
    slug: "voensovet",
    name: "Voensovet",
    tagline: "Помощь военным и семьям",
    category: "Социальные проекты",
    status: "production",
    url: "https://voensovet.ru",
    shortDescription:
      "Voensovet.ru — волонтёрский портал для военнослужащих, ветеранов и семей: информация, сервисы и ИИ-ассистент «Комбат» с историей диалогов. Работает в продакшене с полноценным SEO.",
    fullDescription:
      "Vite/React SPA + Express API, hash-маршрутизация, Yandex Metrika, константы SEO и sitemap на voensovet.ru. AI-клиент для чата интегрирован в портал.",
    features: ["Портал помощи", "ИИ «Комбат»", "SEO и sitemap", "Yandex Metrika"],
    architecture: "app2: client + server/, canonical https://voensovet.ru.",
    keywords: ["военные", "ветераны", "Voensovet", "волонтёры"],
    seoTitle: "Voensovet.ru — портал поддержки | Altacod",
    seoDescription: "Voensovet: помощь военным, семьям и ИИ-ассистент Комбат.",
    faq: [
      {
        question: "Кто может пользоваться порталом?",
        answer: "Военнослужащие, ветераны, члены семей и волонтёры — открытый информационный ресурс.",
      },
    ],
  },
  {
    slug: "dacha-ai",
    name: "Любимая Дача",
    tagline: "Умный помощник садовода",
    category: "Lifestyle",
    status: "production",
    url: "https://dacha-ai.ru",
    shortDescription:
      "PWA для дачников: участок, календарь работ, 100+ культур, vision «Агроэксперт», чат, галерея, погода и семейный доступ. Premium через YooKassa. Активно развивается на Next.js 16 + Prisma.",
    fullDescription:
      "«Любимая Дача» (dacha-ai.ru) объединяет планирование сезона, распознавание болезней растений по фото и офлайн-синхронизацию. SEO: llms.txt, structured data, push-уведомления в roadmap.",
    features: [
      "Календарь и культуры",
      "Vision Агроэксперт",
      "Чат и галерея",
      "Погода и семейный доступ",
      "Premium подписка",
    ],
    architecture: "Next.js 16, Prisma, PostgreSQL, PWA.",
    keywords: ["дача", "сад", "dacha-ai", "огород ИИ"],
    seoTitle: "Любимая Дача — dacha-ai.ru | Altacod",
    seoDescription: "PWA для садоводов: календарь, Agro-эксперт и чат. dacha-ai.ru.",
    faq: [
      {
        question: "Нужен ли интернет на даче?",
        answer: "Базовые функции рассчитаны на PWA; офлайн-пакеты в развитии.",
      },
    ],
  },
  {
    slug: "neurofriend",
    name: "NeuroFriend",
    tagline: "Нейрособеседник с памятью",
    category: "ИИ-компаньон",
    status: "development",
    shortDescription:
      "NeuroFriend — «нейродруг»: эмпатичный ИИ-собеседник с долгой памятью, голосом и этическими ограничениями. Flutter-клиент и FastAPI backend с Qdrant для семантической памяти. Локальные тесты пройдены; интеграции с облачными LLM в работе.",
    fullDescription:
      "Реляционный компаньон: PostgreSQL/Alembic, Whisper/TTS, tracked events, repair-flow v4.4, пресеты личности. Не замена терапевта — сопровождение и поддержка.",
    features: ["Долгая память", "Голос in/out", "Этические guardrails", "Flutter + FastAPI"],
    architecture: "Application/: backend (FastAPI), mobile Flutter, Qdrant.",
    keywords: ["нейрособеседник", "NeuroFriend", "ИИ друг", "чатбот"],
    seoTitle: "NeuroFriend — нейродруг | Altacod",
    seoDescription: "NeuroFriend: ИИ-собеседник с памятью и голосом. В разработке Altacod.",
    faq: [
      {
        question: "Это психотерапия?",
        answer: "Нет. Продукт позиционируется как supportive companion, не медицинский сервис.",
      },
    ],
  },
  {
    slug: "ipra",
    name: "ИПРА.РФ",
    tagline: "Помощь людям с ОВЗ",
    category: "Социальные проекты",
    status: "mvp",
    url: "https://ipra.ru",
    shortDescription:
      "Волонтёрская платформа для сопровождения индивидуальной программы реабилитации: черновики ИПРА, AI-подсказки, RBAC. MVP снят с публикации; архитектура Spring Boot + React готова к развитию.",
    fullDescription:
      "IPRA_back и IPRA_front: JWT, POST /api/v1/ipra/drafts, интеграция с noteapp-ai опционально. Социальный impact-проект Altacod.",
    features: ["Черновики ИПРА", "AI-ассистент (stub)", "RBAC", "React + Spring"],
    architecture: "Два репозитория: IPRA_back :8081, Vite proxy.",
    keywords: ["ИПРА", "инвалидность", "волонтёры", "реабилитация"],
    seoTitle: "ИПРА.РФ — платформа поддержки | Altacod",
    seoDescription: "ИПРА.РФ: цифровая помощь в программах реабилитации. MVP Altacod.",
    faq: [
      {
        question: "Доступен ли сервис публично?",
        answer: "Статус MVP, публикация приостановлена до доработки.",
      },
    ],
  },
  {
    slug: "app-audit",
    name: "App Audit",
    tagline: "Готовность лендинга к продакшену",
    category: "DevTools",
    status: "production",
    url: "https://app-audit.pro",
    shortDescription:
      "AI-аудит посадочных страниц: оценка 0–100 по 8 категориям (SEO, дизайн, paywall, конверсия). GPT-4 Vision, скриншоты Thum.io, freemium unlock. Работает; планируется RU-локализация и перенос инфраструктуры.",
    fullDescription:
      "RoastPage.ai / app-audit.pro: Supabase, USDT Polygon, promo codes, share OG cards. MVP на Vercel.",
    features: ["8 категорий оценки", "Vision анализ", "Freemium unlock", "Share cards"],
    architecture: "Next/Vercel + Supabase + OpenAI.",
    keywords: ["аудит сайта", "roast landing", "app-audit", "SEO проверка"],
    seoTitle: "App Audit — аудит лендинга | Altacod",
    seoDescription: "App-audit.pro: AI-оценка готовности страницы к запуску.",
    faq: [
      {
        question: "Что проверяет App Audit?",
        answer: "SEO, визуал, paywall, доверие, CTA и ещё 4 категории — итоговый балл и рекомендации.",
      },
    ],
  },
  {
    slug: "demand-pilot",
    name: "Demand Pilot",
    tagline: "Диагностика спроса на софт",
    category: "DevTools",
    status: "mvp",
    url: "https://pilot.app-audit.pro",
    shortDescription:
      "SaaS для поиска источников трафика и валидации спроса: цикл Analyze→Research→Map→Prove→Experiment→Learn. Spring Boot + React, RU/EN UI; анализаторы на M1–M2 с mock-данными.",
    fullDescription:
      "Связан с экосистемой app-audit; помогает founder’ам понять, есть ли рынок до масштабной разработки.",
    features: ["Demand map", "Paywall diagnosis", "Research signals", "RU/EN"],
    architecture: "DemandPilot: Spring + Postgres + Vite React.",
    keywords: ["product market fit", "Demand Pilot", "спрос SaaS"],
    seoTitle: "Demand Pilot — валидация спроса | Altacod",
    seoDescription: "Demand Pilot: исследование спроса и карта каналов для SaaS.",
    faq: [
      {
        question: "Demand Pilot уже в проде?",
        answer: "MVP локально; публичный запуск на pilot.app-audit.pro планируется.",
      },
    ],
  },
  {
    slug: "wibestyle",
    name: "WibeStyle",
    tagline: "Виртуальная примерочная",
    category: "Fashion tech",
    status: "development",
    url: "https://wibestyle.ru",
    shortDescription:
      "«Я на стиле»: фото пользователя + карточка маркетплейса → образ в одежде, видео, стилист, макияж и причёска. Лендинг на Next.js 16 с SEO и лидами; core ML в разработке.",
    fullDescription:
      "Fashion-tech витрина с Yandex Metrika, llms.txt и промо «первые 100». Запуск подбора образов ориентировочно 2026.",
    features: ["Virtual try-on", "Стилист AI", "Лиды API", "SEO лендинг"],
    architecture: "Look/wibestyle — Next.js multi-page.",
    keywords: ["примерочная онлайн", "WibeStyle", "fashion AI"],
    seoTitle: "WibeStyle — виртуальная примерка | Altacod",
    seoDescription: "WibeStyle.ru: примерка одежды с маркетплейса по фото.",
    faq: [
      {
        question: "Какие маркетплейсы поддерживаются?",
        answer: "Целевой сценарий — ссылка на карточку товара; список интеграций расширяется.",
      },
    ],
  },
  {
    slug: "orchestra",
    name: "Orchestra",
    tagline: "Мультиагентные задачи",
    category: "ИИ-платформа",
    status: "paused",
    url: "https://orchestra.neuromaster.pro",
    shortDescription:
      "Платформа запуска задач через MCP-агентов с human-in-the-loop approvals. Была в проде; снята на доработку и фикс багов. Spring orchestration + React UI.",
    fullDescription:
      "Task runs, patterns, prompts, connections, OpenAI/MCP clients. Runbooks в репозитории Orchestra.",
    features: ["MCP агенты", "Approvals", "Task runs", "Runbooks"],
    architecture: "Monorepo Orchestra — Spring Boot + React.",
    keywords: ["multi-agent", "Orchestra", "MCP", "автоматизация"],
    seoTitle: "Orchestra — мультиагенты | Altacod",
    seoDescription: "Orchestra: задачи через AI-агентов с подтверждением человека.",
    faq: [
      {
        question: "Когда вернётся Orchestra?",
        answer: "После стабилизации багов; следите за orchestra.neuromaster.pro.",
      },
    ],
  },
  {
    slug: "multitool",
    name: "MultiTool",
    tagline: "Продвинутая агентная среда",
    category: "ИИ-платформа",
    status: "development",
    url: "https://muiltitool.neuromaster.pro",
    shortDescription:
      "Эволюция идеи Orchestra: более мощная canvas-среда для tool-using агентов (React Flow, Zustand, Python backend). Ещё не выпущен публично; разработка локально.",
    fullDescription:
      "multitool-agent-platform: граф workflows, Playwright, venv backend. Поддомен neuromaster ecosystem.",
    features: ["Workflow canvas", "React Flow", "Python agents", "Playwright tools"],
    architecture: "multitool-agent-platform_full_4 в ! MultiTool ARENA.",
    keywords: ["AI agents", "MultiTool", "workflow automation"],
    seoTitle: "MultiTool — агентная платформа | Altacod",
    seoDescription: "MultiTool: продвинутые AI-агенты и canvas. В разработке Altacod.",
    faq: [
      {
        question: "Чем MultiTool отличается от Orchestra?",
        answer: "Более гибкий canvas и расширенный набор инструментов; пока pre-release.",
      },
    ],
  },
  {
    slug: "docbuddy",
    name: "DocBuddy",
    tagline: "Помощник самозанятого",
    category: "Бизнес",
    status: "development",
    url: "https://delegato.pro",
    shortDescription:
      "DocBuddy AI для ИП и самозанятых: OCR документов, генерация форм, налоговые подсказки, CRM и мониторинг. Trial 7 дней, OAuth, YooKassa. Посевная стадия.",
    fullDescription:
      "React/Vite/Tailwind, Tesseract.js, экспорт PDF. delegato.pro — целевой домен.",
    features: ["OCR", "Генерация документов", "Налоги РФ", "Подписка"],
    architecture: "DocBuddy_NEW — Vite SPA.",
    keywords: ["самозанятый", "DocBuddy", "delegato", "ИП помощник"],
    seoTitle: "DocBuddy — для самозанятых | Altacod",
    seoDescription: "DocBuddy / delegato.pro: документы и налоги для микробизнеса.",
    faq: [
      {
        question: "Для какого режима налогообложения?",
        answer: "Фокус на самозанятых и ИП в РФ; детали в продуктовой документации.",
      },
    ],
  },
  {
    slug: "lovebaby",
    name: "МалышAI",
    tagline: "Помощник молодым родителям",
    category: "Семья",
    status: "development",
    shortDescription:
      "PWA-трекер ребёнка 0–5 лет: рост, вес, фото-дневник и AI-советы по нормам педиатрии РФ. Посевная стадия на React/Vite.",
    fullDescription:
      "LoveBaby / baby-GPT5.3 — забота о новорождённом: напоминания, дневник, сравнение с нормами.",
    features: ["Дневник роста", "Фото-дневник", "AI советы", "PWA"],
    architecture: "GROK/baby-ai — React Vite PWA.",
    keywords: ["новорождённый", "МалышAI", "родители", "трекер ребёнка"],
    seoTitle: "МалышAI — для родителей | Altacod",
    seoDescription: "МалышAI: трекер развития малыша 0–5 лет с AI-подсказками.",
    faq: [
      {
        question: "Заменяет ли приложение педиатра?",
        answer: "Нет. Информационные подсказки; при симптомах — обращайтесь к врачу.",
      },
    ],
  },
  {
    slug: "drinkbuddy",
    name: "DrinkBuddy",
    tagline: "Компания для вечернего отдыха",
    category: "Социальные сети",
    status: "development",
    shortDescription:
      "Соцсеть поиска компании: карта, матчинг, зашифрованный чат, премиум-подписка. React Native; тесты проходили — в работе дизайн и интеграции.",
    fullDescription:
      "MeetUp Buddy / DrinkBuddy: найти людей для пива после работы или совместного досуга. Socket.io, OAuth, i18n.",
    features: ["Карта и матчинг", "Чат", "Premium", "React Native"],
    architecture: "!_DrinkBuddy/Claude — mobile RN.",
    keywords: ["знакомства", "DrinkBuddy", "отдых", "соцсеть"],
    seoTitle: "DrinkBuddy — найти компанию | Altacod",
    seoDescription: "DrinkBuddy: соцсеть для совместного отдыха рядом с вами.",
    faq: [
      {
        question: "Есть ли публичный релиз?",
        answer: "Пока тестовые сборки; домен не привязан.",
      },
    ],
  },
  {
    slug: "school-trainer",
    name: "School Trainer",
    tagline: "Школьный тренажёр",
    category: "Образование",
    status: "production",
    url: "https://school-trainer.altakid.ru",
    shortDescription:
      "PWA для изучения школьной программы (старт — 5 класс): математика, русский, английский, тесты и офлайн-пакеты. Работает в проде; планируется встройка в AltaKid.",
    fullDescription:
      "npm workspaces: frontend + Fastify/SQLite backend, sync manifest, контент из legacy PWAs.",
    features: ["Предметные модули", "Тесты", "Офлайн пакеты", "Интеграция с AltaKid"],
    architecture: "school_trainer/1_school learning — PWA monorepo.",
    keywords: ["школа", "тренажёр", "School Trainer", "обучение детей"],
    seoTitle: "School Trainer — школьные предметы | Altacod",
    seoDescription: "School Trainer: тренажёр для учеников на school-trainer.altakid.ru.",
    faq: [
      {
        question: "С какого класса доступен контент?",
        answer: "Старт с 5 класса; расширение классов в roadmap.",
      },
    ],
  },
  {
    slug: "xintegra",
    name: "Xintegra",
    tagline: "Интегратор X (Twitter)",
    category: "Медиа и маркетинг",
    status: "paused",
    url: "https://xintegra.space",
    shortDescription:
      "X-Inbox: мониторинг тредов X, AI-перевод и генерация ответов и постов. Spring Boot + React; тестировался локально, публичный сервис отключён для доработки UI.",
    fullDescription:
      "xintegra backend: Postgres, Swagger, AI_INTEGRATION; фронт CRA. Автоматизация SMM для X.",
    features: ["Мониторинг X", "AI перевод", "Черновики постов", "Отправка в X"],
    architecture: "X-integration: xintegra + xinterga_front.",
    keywords: ["Twitter", "Xintegra", "SMM automation", "ИИ посты"],
    seoTitle: "Xintegra — автоматизация X | Altacod",
    seoDescription: "Xintegra.space: AI-помощник для X/Twitter. Altacod.",
    faq: [
      {
        question: "Работает ли xintegra.space сейчас?",
        answer: "Сервис отключён; витрина описывает портфель и планы возврата.",
      },
    ],
  },
];

export const statusLabels: Record<AppStatus, string> = {
  production: "В продакшене",
  beta: "Early access",
  mvp: "MVP",
  development: "В разработке",
  paused: "На паузе",
};
