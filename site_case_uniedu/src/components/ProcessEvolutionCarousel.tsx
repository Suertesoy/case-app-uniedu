import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import prototipo1 from "../../../PROTOTIPO 1.png";
import prototipo2 from "../../../PROTOTIPO 2.png";
import prototipo3 from "../../../PROTOTIPO 3.png";
import prototipo4 from "../../../PROTOTIPO 4.png";
import prototipo5 from "../../../PROTOTIPO 5.png";
import prototipo6 from "../../../PROTOTIPO 6.png";
import prototipo7 from "../../../PROTOTIPO 7.png";
import prototipo8 from "../../../PROTOTIPO 8.png";
import prototipo9 from "../../../PROTOTIPO 9.png";
import prototipo10 from "../../../PROTOTIPO 10.png";
import prototipo11 from "../../../PROTOTIPO 11.png";

interface Step {
  id: string;
  num: string;
  label: string;
  image: string;
}

const phase1Label = "Sketches no papel";
const phase2Label = "Wireframes";
const phase3Label = "Alta fidelidade: 1ª versão";

const steps: Step[] = [
  // Fase 01 — Primeiras ideias no papel
  { id: "prototipo-1", num: "01", label: phase1Label, image: prototipo1 },
  { id: "prototipo-2", num: "01", label: phase1Label, image: prototipo2 },
  { id: "prototipo-3", num: "01", label: phase1Label, image: prototipo3 },

  // Fase 02 — Wireframes de baixa fidelidade
  { id: "prototipo-4", num: "02", label: phase2Label, image: prototipo4 },
  { id: "prototipo-5", num: "02", label: phase2Label, image: prototipo5 },
  { id: "prototipo-6", num: "02", label: phase2Label, image: prototipo6 },
  { id: "prototipo-7", num: "02", label: phase2Label, image: prototipo7 },
  { id: "prototipo-8", num: "02", label: phase2Label, image: prototipo8 },

  // Fase 03 — Primeira versão em alta fidelidade
  { id: "prototipo-9", num: "03", label: phase3Label, image: prototipo9 },
  { id: "prototipo-10", num: "03", label: phase3Label, image: prototipo10 },
  { id: "prototipo-11", num: "03", label: phase3Label, image: prototipo11 },
];

const CARD_W = 256;
const CARD_GAP = 20;
const CARD_STEP = CARD_W + CARD_GAP;

const doubleSteps = [...steps, ...steps];

export default function ProcessEvolutionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

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

          /* Pausa exatamente no ponto atual — não altera duration, não reinicia a animação */
          .marquee-track:hover {
            animation-play-state: paused;
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
            {doubleSteps.map((step, index) => (
              <article
                key={`${step.id}-${index}`}
                className={`carousel-card flex-shrink-0 w-[256px] lg:w-[290px] xl:w-[300px] rounded-[1.5rem] transition-all duration-300 ${
                  index >= steps.length ? "hidden lg:flex" : "flex"
                }`}
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Image area — imagem solta, sem card branco externo, sem moldura de device */}
                <div className="relative w-full h-[400px] lg:h-[390px] xl:h-[410px] bg-surface-elevated overflow-hidden rounded-[1.5rem] flex-shrink-0">
                  {/* Rótulo curto da fase */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center bg-page/85 backdrop-blur-sm border border-border/60 rounded-full px-2.5 py-1 text-[9px] font-black text-brand tracking-wider">
                      {step.num} · {step.label}
                    </span>
                  </div>

                  <img
                    src={step.image}
                    alt={`${step.label} — imagem ${step.id.replace("prototipo-", "")}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem]"
                  />
                </div>
              </article>
            ))}
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
              aria-label={`Ir para imagem ${i + 1} da fase ${step.num}`}
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
