import { useEffect, useState } from "react";
import { Sun, Moon, X, Maximize2 } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { designSystemContent, componentGalleryItems, type ComponentCategoryId, type Lang } from "../content/translations";

interface ThemeToggleProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  labels: { light: string; dark: string };
}

function ThemeToggle({ theme, setTheme, labels }: ThemeToggleProps) {
  const isDark = theme === "dark";
  return (
    <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-surface text-[11px]">
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
          !isDark
            ? "bg-surface-elevated text-text-primary shadow-sm"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        <Sun size={11} />{labels.light}
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
          isDark
            ? "bg-[#1E1A1D] text-[#FCE4EC] shadow-sm"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        <Moon size={11} />{labels.dark}
      </button>
    </div>
  );
}

// ─── Static hex/bg values per token — separados por contexto Light/Dark ─────
const colorHexLight = ["#D81B60", "#F06292", "#A31545", "#FFFBFD", "#FDF2F5", "#1D1518", "#6E5E64"];
const colorHexDark = ["#D81B60", "#F06292", "#F48FB1", "#120E10", "#1E1A1D", "#FCE4EC", "#9E9EAE"];

// ─── Typography style metadata (language-independent) ────────────────────────
const typeMeta = [
  { className: "text-2xl md:text-3xl font-extrabold tracking-tight", size: "32–40px", weight: "800", leading: "1.2", tracking: "−0.02em", font: "Plus Jakarta Sans" },
  { className: "text-xl font-bold tracking-tight", size: "20px", weight: "700", leading: "1.3", tracking: "−0.01em", font: "Plus Jakarta Sans" },
  { className: "text-sm font-normal", size: "14px", weight: "400", leading: "1.6", tracking: "—", font: "Inter" },
  { className: "text-[10px] font-bold tracking-widest uppercase", size: "10px", weight: "700", leading: "1.4", tracking: "0.1em + uppercase", font: "Inter" },
];

// Ordem de exibição das categorias da galeria de componentes
const categoryOrder: ComponentCategoryId[] = ["navigation", "progress", "gamification", "community", "profile"];

// ─────────────────────────────────────────────────────────────────────────────

interface DesignSystemSectionProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  lang: Lang;
}

export default function DesignSystemSection({ theme, setTheme, lang }: DesignSystemSectionProps) {
  const isDark = theme === "dark";
  const c = designSystemContent[lang];

  const colorHex = isDark ? colorHexDark : colorHexLight;
  const colorTokens = (isDark ? c.colorTokensDark : c.colorTokensLight).map((token, i) => ({
    ...token,
    bg: colorHex[i],
  }));

  const typeSamples = c.typeSamples.map((sample, i) => ({ ...sample, ...typeMeta[i] }));

  const [lightboxId, setLightboxId] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxId) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxId]);

  const lightboxItem = componentGalleryItems.find((item) => item.id === lightboxId) ?? null;

  return (
    <section id="design-system" className="py-24 bg-surface/20 border-t border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <RevealOnScroll direction="up">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand mb-4 block">
              {c.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              {c.title}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm leading-relaxed">
              {c.description}
            </p>
          </div>
        </RevealOnScroll>

        {/* ── 01 · Tipografia ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="mb-16">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand mb-5">
              {c.section01.title}
            </h3>
            <div className="rounded-2xl border border-border bg-surface-elevated overflow-hidden">
              <div className="px-5 py-3 border-b border-border flex items-center gap-2 bg-surface/50">
                <span className="w-2 h-2 rounded-full bg-brand/40 block" />
                <span className="text-[11px] text-text-secondary font-medium">
                  {c.section01.fontNote}
                </span>
              </div>
              <div className="divide-y divide-border">
                {typeSamples.map((t) => (
                  <div key={t.role} className="px-5 py-5 flex flex-col md:flex-row gap-3 md:gap-6 items-start">
                    {/* Role tag */}
                    <div className="w-full md:w-16 shrink-0">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-brand">{t.role}</span>
                    </div>
                    {/* Sample + use */}
                    <div className="flex-1 min-w-0">
                      <p className={`${t.className} text-text-primary leading-tight`}>{t.sample}</p>
                      <p className="text-[10px] text-text-secondary mt-2 italic leading-relaxed hidden md:block">{t.use}</p>
                    </div>
                    {/* Technical specs */}
                    <div className="hidden md:grid grid-cols-2 gap-x-4 gap-y-1.5 w-52 shrink-0 text-[10px]">
                      <span className="text-text-secondary font-mono">size</span>
                      <span className="text-text-primary font-mono">{t.size}</span>
                      <span className="text-text-secondary font-mono">weight</span>
                      <span className="text-text-primary font-mono">{t.weight}</span>
                      <span className="text-text-secondary font-mono">line-height</span>
                      <span className="text-text-primary font-mono">{t.leading}</span>
                      <span className="text-text-secondary font-mono">tracking</span>
                      <span className="text-text-primary font-mono">{t.tracking}</span>
                      <span className="text-text-secondary font-mono">font</span>
                      <span className="text-text-primary font-mono text-[9px]">{t.font}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ── 02 · Cores e Tokens — preview separada por Light/Dark ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand">
                {c.section02.title}
              </h3>
              {/* Toggle local — preview de tokens Light/Dark, independente do tema global do site */}
              <ThemeToggle theme={theme} setTheme={setTheme} labels={c.themeToggle} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {colorTokens.map((tk) => (
                <div key={tk.label} className="rounded-xl border border-border overflow-hidden bg-surface-elevated">
                  <div className="h-10 w-full" style={{ background: tk.bg }} />
                  <div className="p-3">
                    <p className="text-[11px] font-bold text-text-primary leading-tight">{tk.label}</p>
                    <p className="text-[9px] text-text-secondary font-mono mt-0.5">{tk.hex}</p>
                    <p className="text-[9px] text-text-secondary mt-1.5 leading-snug">{tk.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* ── 03 · Componentes da Interface — galeria com imagens reais do protótipo ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand mb-2">
              {c.section03.title}
            </h3>
            <p className="text-[11px] text-text-secondary mb-10 leading-relaxed max-w-2xl">
              {c.section03.description}
            </p>

            <div className="space-y-12">
              {categoryOrder.map((categoryId) => {
                const items = componentGalleryItems.filter((item) => item.category === categoryId);
                if (items.length === 0) return null;

                return (
                  <div key={categoryId}>
                    <h4 className="text-sm font-bold text-text-primary mb-4">
                      {c.categories[categoryId]}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {items.map((item) => {
                        const meta = c.components[item.id];
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setLightboxId(item.id)}
                            className={`group text-left bg-surface border border-border rounded-2xl p-4 transition-all duration-300 hover:border-brand/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/5 cursor-zoom-in motion-reduce:hover:translate-y-0 ${
                              item.wide ? "sm:col-span-2" : ""
                            }`}
                            aria-label={meta.alt}
                          >
                            <div className="relative rounded-xl overflow-hidden bg-surface-elevated/50 flex items-center justify-center">
                              <img
                                src={`/components/${item.file}`}
                                alt={meta.alt}
                                loading="lazy"
                                className="block max-w-full h-auto object-contain"
                                style={{ maxHeight: item.wide ? "260px" : "420px" }}
                              />
                              <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-page/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Maximize2 className="w-3.5 h-3.5 text-text-primary" />
                              </span>
                            </div>
                            <p className="text-xs font-bold text-text-primary mt-3">{meta.title}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

      </div>

      {/* ── Lightbox — visualização ampliada do componente selecionado ── */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={c.components[lightboxItem.id].title}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightboxId(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxId(null)}
            aria-label={lang === "pt" ? "Fechar" : "Close"}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <figure
            className="max-w-4xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/components/${lightboxItem.file}`}
              alt={c.components[lightboxItem.id].alt}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
            />
            <figcaption className="text-sm font-semibold text-white/90">
              {c.components[lightboxItem.id].title}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
