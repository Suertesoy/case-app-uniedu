import { useEffect, useRef, useState } from "react";
import { Sun, Moon, X } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { designSystemContent, componentGalleryItems, type ComponentSize, type Lang } from "../content/translations";

// Largura (colspan) no mosaico de 12 colunas — controla apenas o posicionamento.
// A imagem nunca estica para preencher a célula; seu próprio max-width manda.
const sizeColSpan: Record<ComponentSize, string> = {
  wide: "col-span-12 md:col-span-6",
  medium: "col-span-12 md:col-span-4",
  small: "col-span-6 md:col-span-3",
  tall: "col-span-12 md:col-span-4",
};

// Max-width interno da imagem, por tipo — preserva a escala mental de mobile
// em vez de deixar o componente esticar para a largura do desktop.
const sizeImgMaxWidth: Record<ComponentSize, number> = {
  wide: 400,
  medium: 340,
  small: 250,
  tall: 340,
};

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

// Componentes em ordem narrativa, prontos para renderização contínua (sem categorias)
const galleryItems = [...componentGalleryItems].sort((a, b) => a.order - b.order);

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
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const openLightbox = (id: string, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setLightboxId(id);
  };

  const closeLightbox = () => {
    setLightboxId(null);
    // Devolve o foco ao card que abriu o modal, em vez de perdê-lo no body.
    lastTriggerRef.current?.focus();
  };

  useEffect(() => {
    if (!lightboxId) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
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

        {/* ── 03 · Componentes da Interface — prancha editorial, sem cards nem categorias ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand mb-2">
              {c.section03.title}
            </h3>
            <p className="text-[11px] text-text-secondary mb-10 leading-relaxed max-w-2xl">
              {c.section03.description}
            </p>

            <div className="grid grid-cols-12 gap-x-6 gap-y-12">
              {galleryItems.map((item) => {
                const meta = c.components[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => openLightbox(item.id, e.currentTarget)}
                    className={`group flex flex-col items-center text-center ${sizeColSpan[item.size]}`}
                    aria-label={meta.alt}
                  >
                    <img
                      src={`/components/${item.file}`}
                      alt={meta.alt}
                      loading="lazy"
                      className="block mx-auto w-full h-auto object-contain cursor-zoom-in transition-all duration-300 group-hover:opacity-85 group-hover:scale-[1.015]"
                      style={{ maxWidth: sizeImgMaxWidth[item.size] }}
                    />
                    <p className="mt-3 text-xs font-semibold text-text-primary">
                      <span className="font-mono text-text-secondary/50 mr-1">{String(item.order).padStart(2, "0")}.</span>
                      {meta.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-text-secondary leading-snug max-w-[260px]">
                      {meta.description}
                    </p>
                  </button>
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
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
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
            <figcaption className="text-center">
              <p className="text-sm font-semibold text-white/90">{c.components[lightboxItem.id].title}</p>
              <p className="text-xs text-white/60 mt-1">{c.components[lightboxItem.id].description}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
