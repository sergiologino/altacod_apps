import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "public", "images", "apps");

const RASTER_EXT = ["webp", "avif", "png", "jpg", "jpeg", "gif"];
const SLOTS = ["card", "detail-1", "detail-2", "detail-3"];

const apps = [
  { slug: "altakid", title: "AltaKid", subtitle: "Родительский контроль", colors: ["#0ea5e9", "#6366f1"], icon: "🛡️" },
  { slug: "altanote", title: "AltaNote", subtitle: "Умные заметки", colors: ["#8b5cf6", "#ec4899"], icon: "📝" },
  { slug: "altapens", title: "AltaPens", subtitle: "Забота о близких", colors: ["#14b8a6", "#3b82f6"], icon: "💚" },
  { slug: "altatrade", title: "AltaTrade", subtitle: "Аналитика рынков", colors: ["#1e3a5f", "#0ea5e9"], icon: "📈" },
  { slug: "publisher", title: "Publisher", subtitle: "Контент и автопостинг", colors: ["#f59e0b", "#ef4444"], icon: "📣" },
  { slug: "neuromaster", title: "NeuroMaster", subtitle: "ИИ-инструменты", colors: ["#7c3aed", "#06b6d4"], icon: "✨" },
  { slug: "voensovet", title: "Voensovet", subtitle: "Помощь военным", colors: ["#1d4ed8", "#64748b"], icon: "🎖️" },
  { slug: "dacha-ai", title: "Любимая Дача", subtitle: "Сад и огород", colors: ["#22c55e", "#84cc16"], icon: "🌱" },
  { slug: "neurofriend", title: "NeuroFriend", subtitle: "Нейрособеседник", colors: ["#a855f7", "#f472b6"], icon: "💬" },
  { slug: "ipra", title: "ИПРА.РФ", subtitle: "Социальная поддержка", colors: ["#0d9488", "#2563eb"], icon: "🤝" },
  { slug: "app-audit", title: "App Audit", subtitle: "Готовность к релизу", colors: ["#f97316", "#eab308"], icon: "🔍" },
  { slug: "demand-pilot", title: "Demand Pilot", subtitle: "Спрос на продукт", colors: ["#6366f1", "#14b8a6"], icon: "🎯" },
  { slug: "wibestyle", title: "WibeStyle", subtitle: "Виртуальная примерка", colors: ["#ec4899", "#8b5cf6"], icon: "👗" },
  { slug: "orchestra", title: "Orchestra", subtitle: "Мультиагенты", colors: ["#334155", "#06b6d4"], icon: "🎼" },
  { slug: "multitool", title: "MultiTool", subtitle: "Агентная платформа", colors: ["#475569", "#7c3aed"], icon: "🔧" },
  { slug: "docbuddy", title: "DocBuddy", subtitle: "Для самозанятых", colors: ["#0284c7", "#10b981"], icon: "📋" },
  { slug: "lovebaby", title: "МалышAI", subtitle: "Родителям малышей", colors: ["#fb7185", "#fda4af"], icon: "👶" },
  { slug: "drinkbuddy", title: "DrinkBuddy", subtitle: "Компания для отдыха", colors: ["#f59e0b", "#b45309"], icon: "🍻" },
  { slug: "school-trainer", title: "School Trainer", subtitle: "Школьный тренажёр", colors: ["#3b82f6", "#22d3ee"], icon: "📚" },
  { slug: "xintegra", title: "Xintegra", subtitle: "Интегратор X", colors: ["#0f172a", "#38bdf8"], icon: "𝕏" },
];

function slotExists(dir, slot) {
  for (const ext of [...RASTER_EXT, "svg"]) {
    if (existsSync(join(dir, `${slot}.${ext}`))) return true;
  }
  return false;
}

function svg({ title, subtitle, colors, icon, variant }) {
  const [c1, c2] = colors;
  const label =
    variant === "card"
      ? subtitle
      : variant === "detail-1"
        ? "Архитектура"
        : variant === "detail-2"
          ? "Функции"
          : "Интерфейс";
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="#0b1220"/>
  <rect width="1200" height="675" fill="url(#g)" opacity="0.35"/>
  <circle cx="980" cy="120" r="180" fill="${c2}" opacity="0.15"/>
  <circle cx="200" cy="560" r="220" fill="${c1}" opacity="0.12"/>
  <text x="80" y="120" font-family="system-ui,sans-serif" font-size="72">${icon}</text>
  <text x="80" y="280" fill="#f8fafc" font-family="system-ui,sans-serif" font-size="64" font-weight="700">${title}</text>
  <text x="80" y="350" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="32">${subtitle}</text>
  <rect x="80" y="400" width="320" height="8" rx="4" fill="${c1}"/>
  <text x="80" y="480" fill="#cbd5e1" font-family="system-ui,sans-serif" font-size="28">${label} · Altacod</text>
  <text x="80" y="580" fill="#64748b" font-family="system-ui,sans-serif" font-size="22">altacod.com</text>
</svg>`;
}

let created = 0;
let skipped = 0;

for (const app of apps) {
  const dir = join(root, app.slug);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  for (const slot of SLOTS) {
    if (slotExists(dir, slot)) {
      skipped++;
      continue;
    }
    writeFileSync(join(dir, `${slot}.svg`), svg({ ...app, variant: slot }));
    created++;
  }
}

console.log(
  `App images: ${created} SVG placeholder(s) created, ${skipped} slot(s) skipped (user raster/svg present).`,
);
