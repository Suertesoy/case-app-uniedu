import { useState, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  PenLine,
  Layers,
  Sparkles,
  Code2,
  Users,
  SlidersHorizontal,
  Monitor,
} from "lucide-react";

interface Step {
  id: string;
  num: string;
  label: string;
  image: string;
  text: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    id: "esboco-papel",
    num: "01",
    label: "Esboço no papel",
    image: "/process-evolution/01-esboco-papel.png",
    text: "Primeiras hipóteses de navegação, hierarquia e organização da experiência.",
    Icon: PenLine,
  },
  {
    id: "wireframes-figma",
    num: "02",
    label: "Wireframes no Figma",
    image: "/process-evolution/02-wireframes-figma.png",
    text: "Estruturação dos fluxos principais antes da camada visual de alta fidelidade.",
    Icon: Layers,
  },
  {
    id: "figma-make",
    num: "03",
    label: "Exploração no Figma Make",
    image: "/process-evolution/03-figma-make.png",
    text: "Primeiras materializações visuais para testar direção, componentes e atmosfera do produto.",
    Icon: Sparkles,
  },
  {
    id: "prototipo-codado",
    num: "04",
    label: "Protótipo codado com IA",
    image: "/process-evolution/04-prototipo-codado.png",
    text: "Transformação da solução em uma experiência navegável com apoio de Claude Code e iterações técnicas.",
    Icon: Code2,
  },
  {
    id: "testes-usabilidade",
    num: "05",
    label: "Testes de usabilidade",
    image: "/process-evolution/05-testes-usabilidade.png",
    text: "Observação de fricções reais, ajustes de compreensão, fluxo e clareza de interface.",
    Icon: Users,
  },
  {
    id: "refinamentos-finais",
    num: "06",
    label: "Refinamentos finais",
    image: "/process-evolution/06-refinamentos-finais.png",
    text: "Ajustes de acessibilidade, contraste, hierarquia visual, consistência e responsividade.",
    Icon: SlidersHorizontal,
  },
  {
    id: "alta-fidelidade",
    num: "07",
    label: "Alta fidelidade navegável",
    image: "/process-evolution/07-alta-fidelidade.png",
    text: "Consolidação da experiência final com identidade visual, gamificação e lógica de produto integrada.",
    Icon: Monitor,
  },
];

const CARD_W = 256;
const CARD_GAP = 20;
const CARD_STEP = CARD_W + CARD_GAP;

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
    scrollRef.current?.scrollTo({ left: clamped * CARD_STEP, behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const idx = Math.round(scrollRef.current.scrollLeft / CARD_STEP);
    setActiveIndex(Math.max(0, Math.min(idx, steps.length - 1)));
  }, []);

  return (
    <section
      id="processo-evolucao"
      className="py-24 border-y border-border bg-surface/20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            Maturidade de Processo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Do papel ao produto navegável
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm">
            A evolução do APP UNIEDU passou por esboços, wireframes, prototipação
            assistida por IA, testes de usabilidade e refinamentos visuais até
            chegar a uma experiência navegável de alta fidelidade.
          </p>
          <div className="flex justify-center pt-2">
            <p className="text-xs text-text-secondary italic leading-relaxed border-l-2 border-brand/30 pl-4 text-left max-w-lg">
              "Mais do que uma sequência de telas, o case registra como cada
              decisão foi refinada a partir de hipótese, materialização, teste e
              ajuste."
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left arrow — desktop only */}
          <button
            onClick={() => scrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Etapa anterior"
            className="hidden lg:flex absolute left-0 top-[200px] -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-surface-elevated border border-border shadow-md items-center justify-center text-text-secondary hover:text-brand-strong hover:border-brand/30 transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto scrollbar-none pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {steps.map((step) => {
              const { Icon } = step;
              const isError = imageErrors[step.id] ?? false;
              return (
                <article
                  key={step.id}
                  className="flex-shrink-0 w-[256px] bg-surface border border-border rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:border-brand/25 hover:shadow-lg"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Image area — portrait proportions ~9:14 */}
                  <div className="relative w-full h-[400px] bg-surface-elevated overflow-hidden flex-shrink-0">

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
                      /* Real image — object-contain preserves aspect ratio */
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

          {/* Right arrow — desktop only */}
          <button
            onClick={() => scrollTo(activeIndex + 1)}
            disabled={activeIndex === steps.length - 1}
            aria-label="Próxima etapa"
            className="hidden lg:flex absolute right-0 top-[200px] -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-surface-elevated border border-border shadow-md items-center justify-center text-text-secondary hover:text-brand-strong hover:border-brand/30 transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators + active step label */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2" role="tablist" aria-label="Etapas do processo">
            {steps.map((step, i) => (
              <button
                key={step.id}
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Ir para ${step.label}`}
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
            <span className="opacity-40">{String(steps.length).padStart(2, "0")}</span>
            <span className="mx-2 opacity-30">—</span>
            <span className="font-medium text-text-primary">{steps[activeIndex].label}</span>
          </p>
        </div>

      </div>
    </section>
  );
}
