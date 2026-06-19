import { useState } from "react";
import { PenLine, Layers, Sparkles, Image as ImageIcon } from "lucide-react";

interface ProcessGroup {
  id: string;
  numero: string;
  titulo: string;
  legenda: string;
  texto: string;
  Icon: React.ComponentType<{ className?: string }>;
  imagens: string[];
}

const groups: ProcessGroup[] = [
  {
    id: "sketches",
    numero: "01",
    titulo: "Sketches à mão",
    legenda: "Primeiras ideias no papel",
    texto: "Antes da interface, o foco foi organizar a lógica da jornada: início, estudo, progresso, comunidade e navegação principal.",
    Icon: PenLine,
    imagens: [
      "/process-evolution/sketches/sketch-01.png",
      "/process-evolution/sketches/sketch-02.png",
      "/process-evolution/sketches/sketch-03.png",
    ],
  },
  {
    id: "wireframes",
    numero: "02",
    titulo: "Wireframes no Figma",
    legenda: "Wireframes de baixa fidelidade",
    texto: "Os primeiros fluxos foram estruturados em cinza para validar hierarquia, navegação e organização das telas antes da camada visual.",
    Icon: Layers,
    imagens: [
      "/process-evolution/wireframes/wireframe-01.png",
      "/process-evolution/wireframes/wireframe-02.png",
      "/process-evolution/wireframes/wireframe-03.png",
      "/process-evolution/wireframes/wireframe-04.png",
      "/process-evolution/wireframes/wireframe-05.png",
    ],
  },
  {
    id: "figma-make",
    numero: "03",
    titulo: "Protótipo visual no Figma Make",
    legenda: "Primeira versão visual em alta fidelidade",
    texto: "A partir da estrutura validada, a interface ganhou linguagem visual, cores, componentes e telas navegáveis para aproximar a solução do produto final.",
    Icon: Sparkles,
    imagens: [
      "/process-evolution/figma-make/figma-make-01.png",
      "/process-evolution/figma-make/figma-make-02.png",
      "/process-evolution/figma-make/figma-make-03.png",
      "/process-evolution/figma-make/figma-make-04.png",
    ],
  },
];

function ScreenCard({ src, label }: { src: string; label: string }) {
  const [isError, setIsError] = useState(false);

  return (
    <div className="relative w-[120px] sm:w-[140px] md:w-[155px] aspect-[9/19] rounded-2xl border border-border bg-surface-elevated overflow-hidden shrink-0 shadow-sm">
      {isError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 gap-2 text-center">
          <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
            <ImageIcon className="w-4 h-4 text-brand/50" />
          </div>
          <p className="text-[6px] font-mono text-text-secondary break-all leading-tight px-1">{src}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={label}
          className="absolute inset-0 w-full h-full object-contain bg-surface-elevated"
          onError={() => setIsError(true)}
        />
      )}
    </div>
  );
}

export default function ProcessEvolutionCarousel() {
  return (
    <section
      id="processo-evolucao"
      className="py-24 border-y border-border bg-surface/20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
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
        </div>

        {/* Groups 01–03: sketches, wireframes, figma make */}
        <div className="space-y-14">
          {groups.map((group) => {
            const { Icon } = group;
            return (
              <div key={group.id} className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                {/* Group label */}
                <div className="md:w-64 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 text-brand-strong shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] font-bold text-brand uppercase tracking-wider">
                      Etapa {group.numero}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mt-2">{group.titulo}</h3>
                  <p className="text-xs font-semibold text-brand-strong mt-1">{group.legenda}</p>
                  <p className="text-xs text-text-secondary leading-relaxed mt-2">{group.texto}</p>
                </div>

                {/* Group images — vertical screens, no phone frame */}
                <div className="flex-1 flex flex-wrap justify-center md:justify-start gap-4">
                  {group.imagens.map((src) => (
                    <ScreenCard key={src} src={src} label={`${group.titulo} — ${group.legenda}`} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Etapa 04: App atual — chamada discreta, sem galeria nova */}
        <div className="text-center pt-12 mt-12 border-t border-border">
          <span className="text-[10px] font-bold text-brand uppercase tracking-wider">
            Etapa 04 · App atual
          </span>
          <p className="text-xs text-text-secondary leading-relaxed mt-2 max-w-xl mx-auto">
            A versão atual do aplicativo aparece nas próximas seções, já aplicada em vídeo e nos
            mockups navegáveis do case.
          </p>
        </div>
      </div>
    </section>
  );
}
