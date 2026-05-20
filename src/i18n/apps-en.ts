import type { AppProject } from "@/data/apps";

type AppEnFields = Partial<
  Pick<
    AppProject,
    | "tagline"
    | "category"
    | "shortDescription"
    | "fullDescription"
    | "features"
    | "architecture"
    | "keywords"
    | "seoTitle"
    | "seoDescription"
    | "faq"
  >
>;

export const appsEn: Record<string, AppEnFields> = {
  altakid: {
    tagline: "Next-generation parental control",
    category: "Family & safety",
    shortDescription:
      "AltaKid helps parents protect children online: screen limits, location, app control, and smart analytics. Marketing site and parent web dashboard complement the RuStore mobile app.",
    fullDescription:
      "AltaKid is a parental control ecosystem for Android. Parents see where the child is, screen time, and installed apps. Tight integration with School Trainer is planned within the Altacod product family.",
    features: ["Screen limits & schedules", "Geofences & map", "App control", "Parent web dashboard", "RuStore release"],
    architecture: "React/Vite landing with SEO; mobile APK; web.altakid.ru parent app.",
    seoTitle: "AltaKid — parental control | Altacod",
    seoDescription: "AltaKid: screen limits, location, and app control for Android. altakid.ru.",
    faq: [{ question: "Where to download AltaKid?", answer: "Available on RuStore; altakid.ru has setup instructions." }],
  },
  altanote: {
    tagline: "Smart notes with links and AI",
    category: "Productivity",
    shortDescription:
      "AltaNote is a visual note system: canvas, idea links, rich editor, and sync. Browser extension and Telegram bot extend the web app. Publishing is paused while the product evolves.",
    fullDescription:
      "Smart notes for researchers and writers: React Flow graph, TinyMCE/Quill, OAuth, WebSocket sync, Spring Boot API, file storage. SPA at /app/ behind nginx with SEO on the landing.",
    features: ["Canvas & link graph", "Real-time sync", "Chrome capture extension", "Telegram bot", "Google / Yandex OAuth"],
    architecture: "React + Vite, Spring Boot 3.4, PostgreSQL, MinIO, nginx.",
    seoTitle: "AltaNote — smart notes | Altacod",
    seoDescription: "AltaNote: visual notes, links, and AI assistant. Altacod portfolio.",
    faq: [{ question: "Is AltaNote available now?", answer: "Temporarily unpublished; listed as part of the Altacod portfolio." }],
  },
  altapens: {
    tagline: "Digital care for seniors",
    category: "Health & care",
    shortDescription:
      "AltaPens connects seniors, relatives, and caregivers: medication reminders, wellbeing check-ins, care network, and donations. Active MVP on Next.js + Spring Boot.",
    fullDescription:
      "Care product for Russia: mobile clients (Capacitor/Kotlin WebView), landing, API with YooKassa and FCM push. Voice mode and analytics on the roadmap.",
    features: ["Medication calendar", "Wellbeing check-ins", "Family & caregiver network", "YooKassa donations", "PWA & mobile shells"],
    architecture: "Monorepo: Next.js landing, Spring Boot API, PostgreSQL, Docker/Coolify.",
    seoTitle: "AltaPens — senior care | Altacod",
    seoDescription: "AltaPens: digital care, meds, and family on one platform. altapens.ru.",
    faq: [{ question: "Who is AltaPens for?", answer: "Families with elderly relatives and professional caregivers in Russia." }],
  },
  altatrade: {
    tagline: "Market analytics with ML and AI",
    category: "Fintech",
    shortDescription:
      "AltaTrade analyzes assets: quotes, LSTM forecasts, event feed, anomalies, and AI-explained recommendations. Early access for manual trading—no automated order execution.",
    fullDescription:
      "Three services: React dashboard, Java Spring API, Python FastAPI ML sharing PostgreSQL. OAuth, watchlists, RU/EN, test fixtures. Trader information, not brokerage.",
    features: ["7/30-day forecasts with bands", "Macro/corporate/social feed", "Anomaly alerts", "Entry/exit hints", "AI asset explanations"],
    architecture: "AltaTrade_front, AltaTrade_back (Spring Boot 21), AltaTrade_ML (FastAPI, PyTorch).",
    seoTitle: "AltaTrade — analytics for traders | Altacod",
    seoDescription: "AltaTrade: quotes, ML forecasts, AI insights. Early access at altatrade.tech.",
    faq: [{ question: "Does AltaTrade execute trades?", answer: "No. Analytics only; auto-trading is out of scope." }],
  },
  publisher: {
    tagline: "Content hub & auto-posting",
    category: "Media & marketing",
    shortDescription:
      "Publisher (myposts.pro): single source for posts syndicated to Telegram, VK, OK, MAX. AI studio for drafts. In production; image integration being refined.",
    fullDescription:
      "POSSE workflow: write once, publish everywhere. Spring Boot API, React app, Redis outbound queue, public author blogs. MarketFlow is a related product with different distribution mechanics.",
    features: ["Multi-platform auto-posting", "AI prompts & studio", "Public author blogs", "Redis publish queue", "RU social integrations"],
    architecture: "Spring Boot + React + Redis; writer_showcase monorepo.",
    seoTitle: "Publisher — auto-posting for authors | Altacod",
    seoDescription: "Publisher on myposts.pro: posts, blogs, and social syndication.",
    faq: [{ question: "Which networks are supported?", answer: "Telegram, VK, OK, MAX, and more via the publish queue." }],
  },
  neuromaster: {
    tagline: "Unified AI tools access",
    category: "AI platform",
    shortDescription:
      "NeuroMaster offers text, image, and video generation with one account, billing, and admin. Simple entry to AI tools for non-technical users.",
    fullDescription:
      "Spring Boot 3.4 backend: JWT, OAuth, YooKassa, dialogs, token stats, Feign to AI-integration. Hub for Orchestra and MultiTool subdomains.",
    features: ["Text, images, video", "OAuth & subscriptions", "Admin panel", "Token statistics"],
    architecture: "Ai_chat_backend (Java 21) + neuromaster.pro frontend.",
    seoTitle: "NeuroMaster — AI text & media | Altacod",
    seoDescription: "NeuroMaster.pro: text, images, and video in one account.",
    faq: [{ question: "How is NeuroMaster different from Orchestra?", answer: "NeuroMaster is consumer-facing; Orchestra is multi-agent tasks with approvals." }],
  },
  voensovet: {
    tagline: "Support for military & families",
    category: "Social impact",
    shortDescription:
      "Voensovet.ru is a volunteer portal for service members, veterans, and families: information, services, and AI assistant “Kombat” with chat history. Live in production with full SEO.",
    fullDescription:
      "Vite/React SPA + Express API, Yandex Metrika, SEO constants and sitemap at voensovet.ru. AI chat client integrated into the portal.",
    features: ["Help portal", "AI assistant Kombat", "SEO & sitemap", "Yandex Metrika"],
    architecture: "app2: client + server/, canonical https://voensovet.ru.",
    seoTitle: "Voensovet.ru — support portal | Altacod",
    seoDescription: "Voensovet: help for military, families, and AI assistant Kombat.",
    faq: [{ question: "Who can use the portal?", answer: "Service members, veterans, families, and volunteers—open information resource." }],
  },
  "dacha-ai": {
    tagline: "Smart gardener assistant",
    category: "Lifestyle",
    shortDescription:
      "PWA for gardeners: plot, work calendar, 100+ crops, vision “Agro expert”, chat, gallery, weather, family access. Premium via YooKassa. Built on Next.js 16 + Prisma.",
    fullDescription:
      "Beloved Dacha (dacha-ai.ru): season planning, plant disease recognition from photos, offline sync roadmap. SEO with llms.txt and structured data.",
    features: ["Calendar & crops", "Vision agro expert", "Chat & gallery", "Weather & family access", "Premium subscription"],
    architecture: "Next.js 16, Prisma, PostgreSQL, PWA.",
    seoTitle: "Beloved Dacha — dacha-ai.ru | Altacod",
    seoDescription: "Garden PWA: calendar, agro expert, and chat. dacha-ai.ru.",
    faq: [{ question: "Internet required at the dacha?", answer: "PWA-first; offline packages are in development." }],
  },
  neurofriend: {
    tagline: "AI companion with memory",
    category: "AI companion",
    shortDescription:
      "NeuroFriend is an empathetic AI companion with long-term memory, voice, and ethical guardrails. Flutter client and FastAPI backend with Qdrant. Cloud LLM integrations in progress.",
    fullDescription:
      "Relational companion stack: PostgreSQL/Alembic, Whisper/TTS, tracked events, personality presets. Supportive companion—not therapy.",
    features: ["Long-term memory", "Voice in/out", "Ethical guardrails", "Flutter + FastAPI"],
    architecture: "Application/: FastAPI backend, Flutter mobile, Qdrant.",
    seoTitle: "NeuroFriend — AI companion | Altacod",
    seoDescription: "NeuroFriend: AI companion with memory and voice. In development at Altacod.",
    faq: [{ question: "Is this therapy?", answer: "No. Supportive companion, not a medical service." }],
  },
  ipra: {
    tagline: "Support for people with disabilities",
    category: "Social impact",
    shortDescription:
      "Volunteer platform for individual rehabilitation programs: IPRA drafts, AI hints, RBAC. MVP unpublished; Spring Boot + React architecture ready to grow.",
    fullDescription:
      "IPRA_back and IPRA_front: JWT, draft API, optional noteapp-ai integration. Social impact project by Altacod.",
    features: ["IPRA drafts", "AI assistant (stub)", "RBAC", "React + Spring"],
    architecture: "Two repos: IPRA_back :8081, Vite proxy.",
    seoTitle: "IPRA.RF — support platform | Altacod",
    seoDescription: "IPRA.RF: digital help for rehabilitation programs. Altacod MVP.",
    faq: [{ question: "Publicly available?", answer: "MVP status; publishing paused until further work." }],
  },
  "app-audit": {
    tagline: "Landing readiness audit",
    category: "DevTools",
    shortDescription:
      "AI audit of landing pages: 0–100 score across 8 categories (SEO, design, paywall, conversion). GPT-4 Vision, Thum.io screenshots, freemium unlock. RU localization planned.",
    fullDescription:
      "RoastPage.ai / app-audit.pro: Supabase, USDT Polygon unlock, promo codes, share OG cards. MVP on Vercel.",
    features: ["8 scoring categories", "Vision analysis", "Freemium unlock", "Share cards"],
    architecture: "Next/Vercel + Supabase + OpenAI.",
    seoTitle: "App Audit — landing review | Altacod",
    seoDescription: "app-audit.pro: AI score for launch readiness.",
    faq: [{ question: "What does App Audit check?", answer: "SEO, visual, paywall, trust, CTA, and four more categories with recommendations." }],
  },
  "demand-pilot": {
    tagline: "Software demand diagnostics",
    category: "DevTools",
    shortDescription:
      "SaaS to find traffic sources and validate demand: Analyze→Research→Map→Prove→Experiment→Learn. Spring Boot + React, RU/EN UI; M1–M2 analyzers with mock data.",
    fullDescription:
      "Part of the app-audit ecosystem; helps founders validate market before large builds.",
    features: ["Demand map", "Paywall diagnosis", "Research signals", "RU/EN"],
    architecture: "DemandPilot: Spring + Postgres + Vite React.",
    seoTitle: "Demand Pilot — demand validation | Altacod",
    seoDescription: "Demand Pilot: research demand and channel map for SaaS.",
    faq: [{ question: "Is Demand Pilot live?", answer: "MVP locally; public launch on pilot.app-audit.pro is planned." }],
  },
  wibestyle: {
    tagline: "Virtual try-on",
    category: "Fashion tech",
    shortDescription:
      "User photo + marketplace listing → outfit image, video, stylist, makeup, and hair. Next.js 16 landing with SEO and leads; core ML in development.",
    fullDescription:
      "Fashion-tech showcase with analytics and “first 100” promo. Outfit matching launch targeted around 2026.",
    features: ["Virtual try-on", "AI stylist", "Leads API", "SEO landing"],
    architecture: "Look/wibestyle — Next.js multi-page.",
    seoTitle: "WibeStyle — virtual fitting | Altacod",
    seoDescription: "WibeStyle.ru: try marketplace clothes on your photo.",
    faq: [{ question: "Which marketplaces?", answer: "Product URL scenario; integrations expanding." }],
  },
  orchestra: {
    tagline: "Multi-agent tasks",
    category: "AI platform",
    shortDescription:
      "Run tasks via MCP agents with human-in-the-loop approvals. Was in production; paused for bug fixes. Spring orchestration + React UI.",
    fullDescription:
      "Task runs, patterns, prompts, connections, OpenAI/MCP clients. Runbooks in the Orchestra repo.",
    features: ["MCP agents", "Approvals", "Task runs", "Runbooks"],
    architecture: "Orchestra monorepo — Spring Boot + React.",
    seoTitle: "Orchestra — multi-agent platform | Altacod",
    seoDescription: "Orchestra: AI agent tasks with human approval.",
    faq: [{ question: "When will Orchestra return?", answer: "After stabilization; watch orchestra.neuromaster.pro." }],
  },
  multitool: {
    tagline: "Advanced agent environment",
    category: "AI platform",
    shortDescription:
      "Evolution of Orchestra: powerful canvas for tool-using agents (React Flow, Zustand, Python backend). Not public yet; local development.",
    fullDescription:
      "multitool-agent-platform: workflow graph, Playwright, Python venv backend. Part of the NeuroMaster ecosystem.",
    features: ["Workflow canvas", "React Flow", "Python agents", "Playwright tools"],
    architecture: "multitool-agent-platform_full_4 in MultiTool ARENA.",
    seoTitle: "MultiTool — agent platform | Altacod",
    seoDescription: "MultiTool: advanced AI agents and canvas. In development.",
    faq: [{ question: "MultiTool vs Orchestra?", answer: "More flexible canvas and tools; pre-release." }],
  },
  docbuddy: {
    tagline: "Self-employed assistant",
    category: "Business",
    shortDescription:
      "DocBuddy AI for sole proprietors: OCR, form generation, tax hints, CRM, monitoring. 7-day trial, OAuth, YooKassa. Seed stage.",
    fullDescription:
      "React/Vite/Tailwind, Tesseract.js, PDF export. Target domain delegato.pro.",
    features: ["OCR", "Document generation", "RU tax helpers", "Subscription"],
    architecture: "DocBuddy_NEW — Vite SPA.",
    seoTitle: "DocBuddy — for self-employed | Altacod",
    seoDescription: "DocBuddy / delegato.pro: documents and taxes for micro-business.",
    faq: [{ question: "Which tax regime?", answer: "Focused on self-employed and sole props in Russia." }],
  },
  lovebaby: {
    tagline: "Helper for new parents",
    category: "Family",
    shortDescription:
      "PWA tracker for ages 0–5: growth, weight, photo diary, AI tips vs Russian pediatric norms. Seed stage on React/Vite.",
    fullDescription:
      "LoveBaby / MalyshAI: newborn care—reminders, diary, growth benchmarks.",
    features: ["Growth diary", "Photo diary", "AI tips", "PWA"],
    architecture: "GROK/baby-ai — React Vite PWA.",
    seoTitle: "MalyshAI — for parents | Altacod",
    seoDescription: "MalyshAI: child development tracker 0–5 with AI hints.",
    faq: [{ question: "Replaces a pediatrician?", answer: "No. Informational hints only; see a doctor when needed." }],
  },
  drinkbuddy: {
    tagline: "Company for evening leisure",
    category: "Social",
    shortDescription:
      "Social app to find company nearby: map, matching, encrypted chat, premium. React Native; tests passed—design and integrations in progress.",
    fullDescription:
      "MeetUp Buddy / DrinkBuddy: find people for drinks or activities. Socket.io, OAuth, i18n.",
    features: ["Map & matching", "Chat", "Premium", "React Native"],
    architecture: "!_DrinkBuddy/Claude — mobile RN.",
    seoTitle: "DrinkBuddy — find company | Altacod",
    seoDescription: "DrinkBuddy: social network for leisure nearby.",
    faq: [{ question: "Public release?", answer: "Test builds only; domain not attached yet." }],
  },
  "school-trainer": {
    tagline: "School learning trainer",
    category: "Education",
    shortDescription:
      "PWA for school curriculum (starting grade 5): math, Russian, English, tests, offline packs. In production; AltaKid integration planned.",
    fullDescription:
      "npm workspaces: frontend + Fastify/SQLite backend, sync manifest, content from legacy PWAs.",
    features: ["Subject modules", "Tests", "Offline packs", "AltaKid integration"],
    architecture: "school_trainer/1_school learning — PWA monorepo.",
    seoTitle: "School Trainer — school subjects | Altacod",
    seoDescription: "School Trainer for students at school-trainer.altakid.ru.",
    faq: [{ question: "From which grade?", answer: "Starts at grade 5; more grades on the roadmap." }],
  },
  xintegra: {
    tagline: "X (Twitter) integrator",
    category: "Media & marketing",
    shortDescription:
      "X-Inbox: monitor X threads, AI translation, replies and posts. Spring Boot + React; tested locally; public service off for UI work.",
    fullDescription:
      "xintegra backend: Postgres, Swagger, AI integration; CRA frontend. SMM automation for X.",
    features: ["X monitoring", "AI translation", "Post drafts", "Publish to X"],
    architecture: "X-integration: xintegra + xinterga_front.",
    seoTitle: "Xintegra — X automation | Altacod",
    seoDescription: "Xintegra.space: AI assistant for X/Twitter.",
    faq: [{ question: "Is xintegra.space live?", answer: "Service disabled; showcase describes portfolio and return plans." }],
  },
};
