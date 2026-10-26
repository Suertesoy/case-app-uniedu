import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";

export interface ChapterLink {
  href: string;
  label: string;
}

/*
 * Cada capítulo da navegação reúne as seções reais da página que lhe pertencem, em ordem de
 * documento. Seções sem entrada própria no menu (problema, personas, estratégia...) contam para
 * o capítulo em que estão inseridas na narrativa, para a régua nunca ficar "sem capítulo" no meio
 * da leitura. O Hero fica de fora de propósito: antes do primeiro capítulo, nada é destacado.
 */
const CHAPTER_SECTIONS: Record<string, string[]> = {
  "solucao-rapida": ["solucao-rapida", "problema", "processo"],
  pesquisa: ["pesquisa", "personas"],
  jornada: ["jornada", "tensoes-pesquisa"],
  produto: ["processo-evolucao", "produto"],
  validacao: ["validacao", "estrategia"],
  "design-system": ["design-system"],
  implementacao: ["implementacao", "escopo"],
  aprendizados: ["aprendizados", "valor"],
};

export const chapterId = (href: string) => href.replace(/^#/, "");

/*
 * Capítulo predominante no viewport, via IntersectionObserver. A "janela" de observação é uma faixa
 * fina a ~40% da altura da tela: o capítulo que cruza essa linha é o atual. Só há atualização de
 * estado quando o capítulo muda, então nada re-renderiza durante a rolagem dentro de um capítulo.
 *
 * Ao clicar num link, o destino vira o capítulo ativo imediatamente e o observer fica em pausa até
 * a rolagem terminar (scrollend, ou o usuário assumir o controle, ou um limite de tempo). Assim o
 * destaque não pisca por todos os capítulos intermediários durante a rolagem suave.
 */
export function useActiveChapter() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const lockedRef = useRef(false);
  const recomputeRef = useRef<() => void>(() => {});
  const releaseRef = useRef<() => void>(() => {});

  useEffect(() => {
    const sectionToChapter = new Map<string, string>();
    Object.entries(CHAPTER_SECTIONS).forEach(([chapter, ids]) =>
      ids.forEach((id) => sectionToChapter.set(id, chapter))
    );
    const elements = [...sectionToChapter.keys()]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const intersecting = new Set<HTMLElement>();

    const recompute = () => {
      if (lockedRef.current) return;
      let current: HTMLElement | null = null;
      let currentTop = -Infinity;
      intersecting.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top > currentTop) {
          current = el;
          currentTop = top;
        }
      });
      if (current) {
        setActiveId(sectionToChapter.get((current as HTMLElement).id) ?? null);
      } else if (elements[0].getBoundingClientRect().top > window.innerHeight * 0.4) {
        // Acima do primeiro capítulo (Hero). Entre capítulos, mantém o último.
        setActiveId(null);
      }
    };
    recomputeRef.current = recompute;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) intersecting.add(el);
          else intersecting.delete(el);
        });
        recompute();
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      releaseRef.current();
    };
  }, []);

  const activate = useCallback((id: string | null) => {
    // Encerra uma pausa anterior antes de abrir a nova, para ela não sobrescrever o destino.
    releaseRef.current();
    lockedRef.current = true;
    setActiveId(id);

    let timer = 0;
    const release = () => {
      window.clearTimeout(timer);
      window.removeEventListener("scrollend", release);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchstart", release);
      lockedRef.current = false;
      recomputeRef.current();
      releaseRef.current = () => {};
    };
    releaseRef.current = release;
    window.addEventListener("scrollend", release, { once: true });
    window.addEventListener("wheel", release, { once: true, passive: true });
    window.addEventListener("touchstart", release, { once: true, passive: true });
    timer = window.setTimeout(release, 1500);
  }, []);

  return { activeId, activate };
}

interface SectionsMenuProps {
  items: ChapterLink[];
  activeId: string | null;
  onNavigate: (id: string) => void;
  label: string;
  title: string;
}

/*
 * Índice completo dos capítulos. Padrão "disclosure": botão com aria-expanded que revela uma lista
 * de links (não é role="menu"). Fecha com Escape (devolvendo o foco ao botão), com clique fora,
 * quando o foco sai do conjunto e ao escolher um destino. É o único controle de navegação no
 * mobile e o índice completo nas larguras maiores. O painel é posicionado pelo contêiner
 * relativo mais próximo, que deve ser o miolo do header.
 */
export function SectionsMenu({ items, activeId, onNavigate, label, title }: SectionsMenuProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) setOpen(false);
    };
    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={label}
        className="flex items-center gap-2 p-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-surface border border-border text-text-secondary hover:text-brand-strong hover:bg-surface-elevated transition-all duration-300 active:scale-95 cursor-pointer shrink-0 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {open ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
        <span className="hidden sm:inline">{label}</span>
      </button>

      {open && (
        <div
          ref={panelRef}
          id={panelId}
          className="absolute right-4 sm:right-6 top-full mt-2 w-[min(20rem,calc(100vw-2rem))] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl bg-surface-elevated border border-border shadow-xl p-2"
        >
          <nav aria-label={title}>
            <p className="px-3 pt-2 pb-1 text-xs font-bold uppercase tracking-widest text-text-secondary">{title}</p>
            <ol>
              {items.map((item, idx) => {
                const id = chapterId(item.href);
                const isActive = id === activeId;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => {
                        onNavigate(id);
                        setOpen(false);
                      }}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand ${
                        isActive
                          ? "bg-brand/10 text-brand-strong font-bold"
                          : "text-text-primary font-semibold hover:bg-surface"
                      }`}
                    >
                      <span className="text-xs tabular-nums text-text-secondary w-5">{String(idx + 1).padStart(2, "0")}</span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      )}
    </>
  );
}

interface ChapterRailProps {
  items: ChapterLink[];
  activeId: string | null;
  onNavigate: (id: string | null) => void;
  ariaLabel: string;
  topLabel: string;
}

/*
 * Régua lateral de capítulos, só em telas largas (xl+), fixa à direita e fora da área de texto.
 * Em 2xl a margem lateral comporta os rótulos, sempre visíveis. Em xl a margem é estreita, então
 * só os traços aparecem (o ativo, mais longo e em rosa) e os rótulos surgem ao passar o mouse ou
 * focar. Os rótulos ficam no DOM o tempo todo: leitores de tela e teclado não perdem nada.
 * Aparece só depois que a leitura começa (primeiro capítulo alcançado), mantendo o Hero limpo.
 */
export function ChapterRail({ items, activeId, onNavigate, ariaLabel, topLabel }: ChapterRailProps) {
  const visible = activeId !== null;

  const labelClass = (isActive: boolean) =>
    `whitespace-nowrap text-xs transition-all duration-200 overflow-hidden max-w-0 opacity-0 group-hover/rail:max-w-40 group-hover/rail:opacity-100 group-focus-within/rail:max-w-40 group-focus-within/rail:opacity-100 2xl:max-w-40 2xl:opacity-100 ${
      isActive ? "text-brand-strong font-bold" : "text-text-secondary group-hover/item:text-text-primary"
    }`;

  return (
    <nav
      aria-label={ariaLabel}
      className={`hidden xl:block fixed right-1.5 2xl:right-4 top-1/2 -translate-y-1/2 z-40 group/rail rounded-2xl p-1.5 transition-[opacity,visibility,background-color] duration-300 motion-reduce:transition-none border border-transparent hover:bg-page/90 hover:backdrop-blur-md hover:border-border focus-within:bg-page/90 focus-within:backdrop-blur-md focus-within:border-border 2xl:hover:bg-transparent 2xl:hover:backdrop-blur-none 2xl:hover:border-transparent 2xl:focus-within:bg-transparent 2xl:focus-within:backdrop-blur-none 2xl:focus-within:border-transparent ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <ol className="flex flex-col items-end gap-0.5">
        <li>
          <a
            href="#inicio"
            onClick={() => onNavigate(null)}
            className="group/item flex items-center justify-end gap-2 px-1.5 py-1 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span className={labelClass(false)}>{topLabel}</span>
            <ArrowUp className="w-3 h-3 text-text-secondary group-hover/item:text-brand-strong shrink-0" aria-hidden="true" />
          </a>
        </li>
        {items.map((item) => {
          const id = chapterId(item.href);
          const isActive = id === activeId;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => onNavigate(id)}
                aria-current={isActive ? "location" : undefined}
                className="group/item flex items-center justify-end gap-2 px-1.5 py-1 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <span className={labelClass(isActive)}>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={`block h-0.5 rounded-full shrink-0 transition-all duration-300 motion-reduce:transition-none ${
                    isActive
                      ? "w-6 bg-brand"
                      : "w-3 bg-text-secondary/40 group-hover/item:w-4 group-hover/item:bg-brand-soft"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/*
 * Botão discreto de retorno ao início. Aparece depois de ~1,5 tela de rolagem, detectado por um
 * sentinela posicionado no topo do documento (IntersectionObserver, sem listener de scroll).
 * Invisível = fora da ordem de tabulação.
 */
export function BackToTop({ label, onTop }: { label: string; onTop: () => void }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTop = () => {
    onTop();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduced ? "auto" : "smooth" });
    // Tira o hash da URL (o usuário voltou ao início) sem criar nova entrada no histórico.
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    document.getElementById("inicio")?.focus({ preventScroll: true });
  };

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="absolute top-0 left-0 w-px h-[150vh] pointer-events-none invisible"
      />
      <button
        type="button"
        onClick={goTop}
        aria-label={label}
        title={label}
        className={`fixed bottom-4 right-4 z-40 w-11 h-11 rounded-full flex items-center justify-center bg-surface-elevated text-text-secondary hover:text-brand-strong border border-border shadow-lg cursor-pointer transition-[opacity,visibility,color] duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
          visible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ArrowUp className="w-4 h-4" aria-hidden="true" />
      </button>
    </>
  );
}
