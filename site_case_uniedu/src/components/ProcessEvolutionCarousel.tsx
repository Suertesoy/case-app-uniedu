import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, PenLine, Layers, Sparkles } from "lucide-react";

interface Step {
  id: string;
  num: string;
  label: string;
  image: string;
  text: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const sketchLabel = "Primeiras ideias no papel";
const sketchText = "Antes da interface, o foco foi organizar a lógica da jornada: início, estudo, progresso, comunidade e navegação principal.";

const wireframeLabel = "Wireframes de baixa fidelidade";
const wireframeText = "Os primeiros fluxos foram estruturados em cinza para validar hierarquia, navegação e organização das telas antes da camada visual.";

const figmaMakeLabel = "Primeira versão visual em alta fidelidade";
const figmaMakeText = "A partir da estrutura validada, a interface ganhou linguagem visual, cores, componentes e telas navegáveis para aproximar a solução do produto final.";

const steps: Step[] = [
  // Etapa 01 — Sketches à mão (3 imagens)
  { id: "sketch-01", num: "01", label: sketchLabel, image: "/process-evolution/sketches/sketch-01.png", text: sketchText, Icon: PenLine },
  { id: "sketch-02", num: "01", label: sketchLabel, image: "/process-evolution/sketches/sketch-02.png", text: sketchText, Icon: PenLine },
  { id: "sketch-03", num: "01", label: sketchLabel, image: "/process-evolution/sketches/sketch-03.png", text: sketchText, Icon: PenLine },

  // Etapa 02 — Wireframes no Figma (5 imagens)
  { id: "wireframe-01", num: "02", label: wireframeLabel, image: "/process-evolution/wireframes/wireframe-01.png", text: wireframeText, Icon: Layers },
  { id: "wireframe-02", num: "02", label: wireframeLabel, image: "/process-evolution/wireframes/wireframe-02.png", text: wireframeText, Icon: Layers },
  { id: "wireframe-03", num: "02", label: wireframeLabel, image: "/process-evolution/wireframes/wireframe-03.png", text: wireframeText, Icon: Layers },
  { id: "wireframe-04", num: "02", label: wireframeLabel, image: "/process-evolution/wireframes/wireframe-04.png", text: wireframeText, Icon: Layers },
  { id: "wireframe-05", num: "02", label: wireframeLabel, image: "/process-evolution/wireframes/wireframe-05.png", text: wireframeText, Icon: Layers },

  // Etapa 03 — Protótipo visual no Figma Make (4 imagens)
  { id: "figma-make-01", num: "03", label: figmaMakeLabel, image: "/process-evolution/figma-make/figma-make-01.png", text: figmaMakeText, Icon: Sparkles },
  { id: "figma-make-02", num: "03", label: figmaMakeLabel, image: "/process-evolution/figma-make/figma-make-02.png", text: figmaMakeText, Icon: Sparkles },
  { id: "figma-make-03", num: "03", label: figmaMakeLabel, image: "/process-evolution/figma-make/figma-make-03.png", text: figmaMakeText, Icon: Sparkles },
  { id: "figma-make-04", num: "03", label: figmaMakeLabel, image: "/process-evolution/figma-make/figma-make-04.png", text: figmaMakeText, Icon: Sparkles },
];

const CARD_W = 256;
const CARD_GAP = 20;
const CARD_STEP = CARD_W + CARD_GAP;

const doubleSteps = [...steps, ...steps];

export default function ProcessEvolutionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleImageError = useCallback((id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  }, []);

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, steps.length - 1));
    setActiveIndex(clamped);
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector(".carousel-card");
      const cardStep = firstCard ? firstCard.clientWidth + 20 : CARD_STEP;
      scrollRef.current.scrollTo({ left: clamped * cardStep, behavior: "smooth" });
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const firstCard = scrollRef.current.querySelector(".carousel-card");
    const cardStep = firstCard ? firstCard.clientWidth + 20 : CARD_STEP;
    const idx = Math.round(scrollRef.current.scrollLeft / cardStep);
    setActiveIndex(Math.max(0, Math.min(idx, steps.length - 1)));
  }, []);

  return (
    <section
      id="processo-evolucao"
      className="py-24 border-y border-border bg-surface/20 transition-all duration-300 overflow-hidden"
    >
      {/* Stylesheet scoping inline for this component to prevent index.css modification */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-process {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 10px));
          }
        }

        @media (min-width: 1024px) {
          .marquee-container {
            overflow-x: hidden !important;
            scroll-snap-type: none !important;
            padding-top: 15px !important;
            padding-bottom: 20px !important;
            margin-top: -15px !important;
            margin-bottom: -20px !important;
          }

          .marquee-track {
            display: flex;
            gap: 20px;
            width: max-content;
            animation: marquee-process 38s linear infinite;
          }

          .marquee-track:hover {
            animation-duration: 110s;
          }

          .carousel-card {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                        opacity 0.4s ease,
                        border-color 0.4s ease,
                        box-shadow 0.4s ease;
          }

          .marquee-track:hover .carousel-card {
            opacity: 0.85;
          }

          .marquee-track:hover .carousel-card:hover {
            opacity: 1;
            transform: scale(1.03) translateY(-4px);
            box-shadow: 0 20px 40px -10px rgba(216, 27, 96, 0.2),
                        0 0 0 1px rgba(216, 27, 96, 0.15);
            border-color: var(--color-brand, #D81B60);
          }

          .desktop-nav-btn {
            display: none !important;
          }
          .desktop-indicators {
            display: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @media (min-width: 1024px) {
            .marquee-container {
              overflow-x: auto !important;
              scroll-snap-type: x mandatory !important;
              padding-top: 0 !important;
              padding-bottom: 0 !important;
              margin-top: 0 !important;
              margin-bottom: 0 !important;
            }
            .marquee-track {
              animation: none !important;
              transform: none !important;
              width: auto;
            }
            .carousel-card {
              transition: none !important;
            }
            .carousel-card:hover {
              transform: none !important;
              box-shadow: none !important;
            }
            .desktop-nav-btn {
              display: flex !important;
            }
            .desktop-indicators {
              display: flex !important;
            }
          }
        }
      ` }} />

      <div className="max-w-7xl mx-auto px-6 mb-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            Maturidade de Processo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Do papel ao produto navegável
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm">
            A evolução do APP UNIEDU passou por esboços no papel, wireframes de baixa fidelidade
            e uma primeira versão visual em alta fidelidade, até chegar à versão atual apresentada
            nas próximas seções do case.
          </p>
          <div className="flex justify-center pt-2">
            <p className="text-xs text-text-secondary italic leading-relaxed border-l-2 border-brand/30 pl-4 text-left max-w-lg">
              "Mais do que uma sequência de telas, o case registra como cada
              decisão foi refinada a partir de hipótese, materialização, teste e
              ajuste."
            </p>
          </div>
        </div>
      </div>

      {/* Carousel — outside of max-w-7xl for full-bleed width on desktop */}
      <div className="relative px-6 lg:px-0">

        {/* Left arrow — desktop only */}
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Etapa anterior"
          className="hidden lg:flex desktop-nav-btn absolute left-4 top-[200px] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface-elevated border border-border shadow-md items-center justify-center text-text-secondary hover:text-brand-strong hover:border-brand/30 transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scroll container wrapper */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="marquee-container flex gap-5 overflow-x-auto scrollbar-none pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {/* Inner track that scrolls on desktop */}
          <div className="marquee-track flex gap-5">
            {doubleSteps.map((step, index) => {
              const { Icon } = step;
              const isError = imageErrors[step.id] ?? false;
              return (
                <article
                  key={`${step.id}-${index}`}
                  className={`carousel-card flex-shrink-0 w-[256px] lg:w-[290px] xl:w-[300px] bg-surface border border-border rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ${
                    index >= steps.length ? "hidden lg:flex" : "flex"
                  }`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Image area — no device mockup, print cru em proporção vertical */}
                  <div className="relative w-full h-[400px] lg:h-[390px] xl:h-[410px] bg-surface-elevated overflow-hidden flex-shrink-0">

                    {/* Step number badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center bg-page/85 backdrop-blur-sm border border-border/60 rounded-full px-2.5 py-1 text-[9px] font-black text-brand tracking-wider">
                        {step.num}
                      </span>
                    </div>

                    {isError ? (
                      /* Placeholder — shown when image is absent or fails */
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-5 gap-3 text-center">
                        <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center shadow-sm">
                          <Icon className="w-5 h-5 text-brand/50" />
                        </div>

                        <div className="space-y-1 px-1">
                          <p className="text-[10px] font-bold text-text-primary leading-tight">
                            {step.label}
                          </p>
                          <p className="text-[7px] font-mono text-text-secondary break-all leading-relaxed">
                            {step.image}
                          </p>
                        </div>

                        <div className="w-full bg-brand/5 border border-brand/15 rounded-xl px-3 py-2.5 text-left">
                          <p className="text-[7px] font-bold text-brand-strong uppercase tracking-wider">
                            Como adicionar
                          </p>
                          <p className="text-[7px] text-text-secondary leading-relaxed mt-0.5">
                            Coloque a imagem em{" "}
                            <span className="font-mono text-brand">public/process-evolution/</span>{" "}
                            com o nome exato acima.
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Real image — object-contain preserves aspect ratio, sem moldura de celular */
                      <img
                        key={step.image}
                        src={step.image}
                        alt={`Etapa ${step.num}: ${step.label}`}
                        className="absolute inset-0 w-full h-full object-contain bg-surface-elevated"
                        onError={() => handleImageError(step.id)}
                      />
                    )}
                  </div>

                  {/* Text content */}
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                      <h3 className="text-xs font-bold text-text-primary leading-tight">
                        {step.label}
                      </h3>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Right arrow — desktop only */}
        <button
          onClick={() => scrollTo(activeIndex + 1)}
          disabled={activeIndex === steps.length - 1}
          aria-label="Próxima etapa"
          className="hidden lg:flex desktop-nav-btn absolute right-4 top-[200px] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface-elevated border border-border shadow-md items-center justify-center text-text-secondary hover:text-brand-strong hover:border-brand/30 transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators + active step label */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col items-center gap-3 desktop-indicators">
        <div className="flex items-center gap-1.5 flex-wrap justify-center" role="tablist" aria-label="Etapas do processo">
          {steps.map((step, i) => (
            <button
              key={`${step.id}-dot`}
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`Ir para imagem ${i + 1} da etapa ${step.num}`}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "w-6 h-2 bg-brand"
                  : "w-2 h-2 bg-border hover:bg-brand/40"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-text-secondary">
          <span className="text-brand font-bold">{steps[activeIndex].num}</span>
          <span className="mx-1 opacity-40">/</span>
          <span className="opacity-40">03</span>
          <span className="mx-2 opacity-30">—</span>
          <span className="font-medium text-text-primary">{steps[activeIndex].label}</span>
        </p>
      </div>

    </section>
  );
}
