import { useEffect, useRef, useState } from "react";
import { Sun, Moon, X } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { designSystemContent, componentBoardColumns, type ComponentBoardItem, type Lang } from "../content/translations";

// Lookup plano de todos os itens, na ordem das colunas (col1 → col2 → col3) —
// usado pelo lightbox e como base da lista única do mobile.
const allBoardItems = componentBoardColumns.flat();

// No mobile, os dois componentes mais compactos/quadrados ficam lado a lado no
// final; o restante — incluindo os componentes grandes da jornada — segue em
// coluna única, sempre visível, na mesma ordem da prancha desktop.
const FINAL_PAIR_IDS = ["card-cases", "item-loja"];
const mobileMainItems = allBoardItems.filter((item) => !FINAL_PAIR_IDS.includes(item.id));
const finalPairItems = FINAL_PAIR_IDS.map((id) => allBoardItems.find((item) => item.id === id)!);

interface ThemeToggleProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  labels: { light: string; dark: string };
}

function ThemeToggle({ theme, setTheme, labels }: ThemeToggleProps) {
  const isDark = theme === "dark";
  return (
    <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-surface text-xs">
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

// Botão + imagem de um componente da prancha — usado no board desktop (3
// colunas), na lista única mobile, no acordeão da jornada e no par final.
// Sem card externo: o próprio <img> carrega a moldura, sombra e superfície
// reais do recorte do protótipo.
function BoardImage({
  item,
  meta,
  maxWidth,
  onOpen,
}: {
  item: ComponentBoardItem;
  meta: { title: string; alt: string };
  maxWidth?: number;
  onOpen: (id: string, trigger: HTMLButtonElement) => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => onOpen(item.id, e.currentTarget)}
      className="block w-full cursor-zoom-in"
      aria-label={meta.alt}
    >
      <img
        src={`/components/${item.file}`}
        alt={meta.alt}
        loading="lazy"
        className="block mx-auto w-full h-auto object-contain transition-all duration-300 hover:opacity-85 hover:scale-[1.01]"
        style={{ maxWidth: maxWidth ?? item.maxWidth }}
      />
    </button>
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
  { className: "text-xs font-bold tracking-wide uppercase", size: "10px", weight: "700", leading: "1.4", tracking: "0.1em + uppercase", font: "Inter" },
];

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

  const lightboxItem = allBoardItems.find((item) => item.id === lightboxId) ?? null;

  return (
    <section id="design-system" className="py-24 bg-surface/20 border-t border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <RevealOnScroll direction="up">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-wide uppercase text-brand mb-4 block">
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
            <h3 className="text-xs font-bold tracking-wide uppercase text-brand mb-5">
              {c.section01.title}
            </h3>
            <div className="rounded-2xl border border-border bg-surface-elevated overflow-hidden">
              <div className="px-5 py-3 border-b border-border flex items-center gap-2 bg-surface/50">
                <span className="w-2 h-2 rounded-full bg-brand/40 block" />
                <span className="text-sm text-text-secondary font-medium">
                  {c.section01.fontNote}
                </span>
              </div>
              <div className="divide-y divide-border">
                {typeSamples.map((t) => (
                  <div key={t.role} className="px-5 py-5 flex flex-col md:flex-row gap-3 md:gap-6 items-start">
                    {/* Role tag */}
                    <div className="w-full md:w-16 shrink-0">
                      <span className="text-xs font-bold tracking-wide uppercase text-brand">{t.role}</span>
                    </div>
                    {/* Sample + use */}
                    <div className="flex-1 min-w-0">
                      <p className={`${t.className} text-text-primary leading-tight`}>{t.sample}</p>
                      <p className="text-sm text-text-secondary mt-2 italic leading-relaxed hidden md:block">{t.use}</p>
                    </div>
                    {/* Technical specs */}
                    <div className="hidden md:grid grid-cols-2 gap-x-4 gap-y-1.5 w-52 shrink-0 text-xs">
                      <span className="text-text-secondary font-mono">size</span>
                      <span className="text-text-primary font-mono">{t.size}</span>
                      <span className="text-text-secondary font-mono">weight</span>
                      <span className="text-text-primary font-mono">{t.weight}</span>
                      <span className="text-text-secondary font-mono">line-height</span>
                      <span className="text-text-primary font-mono">{t.leading}</span>
                      <span className="text-text-secondary font-mono">tracking</span>
                      <span className="text-text-primary font-mono">{t.tracking}</span>
                      <span className="text-text-secondary font-mono">font</span>
                      <span className="text-text-primary font-mono text-xs">{t.font}</span>
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
              <h3 className="text-xs font-bold tracking-wide uppercase text-brand">
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
                    <p className="text-xs font-bold text-text-primary leading-tight">{tk.label}</p>
                    <p className="text-xs text-text-secondary font-mono mt-0.5">{tk.hex}</p>
                    <p className="text-sm text-text-secondary mt-1.5 leading-snug">{tk.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* ── 03 · Componentes da Interface — prancha manual em 3 colunas, sem cards ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div data-cursor-trail-ignore className="max-w-[1100px] mx-auto">
            <h3 className="text-xs font-bold tracking-wide uppercase text-brand mb-2 text-left">
              {c.section03.title}
            </h3>
            <p className="text-sm text-text-secondary mb-10 leading-relaxed max-w-2xl text-left">
              {c.section03.description}
            </p>

            {/* Desktop/tablet — prancha manual em 3 colunas (inalterada) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-6">
              {componentBoardColumns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className={
                    colIndex === 2 ? "flex flex-col gap-5 md:grid md:grid-cols-2 md:col-span-2 lg:flex lg:flex-col lg:col-span-1" : "flex flex-col gap-5"
                  }
                >
                  {column.map((item) => (
                    <BoardImage key={item.id} item={item} meta={c.components[item.id]} onOpen={openLightbox} />
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile — coluna única com todos os componentes sempre visíveis, sem accordion; par compacto no final */}
            <div className="flex md:hidden flex-col items-center gap-6">
              {mobileMainItems.map((item) => (
                <BoardImage key={item.id} item={item} meta={c.components[item.id]} maxWidth={320} onOpen={openLightbox} />
              ))}

              <div className="grid grid-cols-2 gap-3.5 w-full max-w-[320px]">
                {finalPairItems.map((item) => (
                  <BoardImage key={item.id} item={item} meta={c.components[item.id]} onOpen={openLightbox} />
                ))}
              </div>
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
            <figcaption className="text-sm font-semibold text-white/90">
              {c.components[lightboxItem.id].title}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
