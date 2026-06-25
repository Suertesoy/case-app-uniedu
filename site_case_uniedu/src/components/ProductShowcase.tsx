import { useState } from "react";
import { CheckCircle2, ChevronDown, ImageOff } from "lucide-react";
import MockupReveal3D from "./MockupReveal3D";
import { productShowcaseContent, type Lang } from "../content/translations";

const media: Record<string, { src: string; type: "video" | "image" }> = {
  "primeiro-acesso": { src: "/case-screens/01-primeiro-acesso.mp4", type: "video" },
  "plano-estudos": { src: "/case-screens/02-plano-de-estudos.mp4", type: "video" },
  "onboarding-jornada": { src: "/case-screens/03-onboarding-da-jornada.jpeg", type: "image" },
  "home-progresso": { src: "/case-screens/04-home-de-progresso.mp4", type: "video" },
  "jornada-aprendizado": { src: "/case-screens/05-jornada-de-aprendizado.mp4", type: "video" },
  "aulas-trilhas": { src: "/case-screens/06-aulas-e-trilhas.mp4", type: "video" },
  "player-integrado": { src: "/case-screens/07-player-integrado.mp4", type: "video" },
  "loja-recompensas": { src: "/case-screens/08-loja-de-recompensas.mp4", type: "video" },
  comunidade: { src: "/case-screens/09-comunidade.mp4", type: "video" },
  "suporte-ia": { src: "/case-screens/10-ia-contextual.mp4", type: "video" },
  "perfil-progresso": { src: "/case-screens/11-perfil-e-progresso.mp4", type: "video" },
  ranking: { src: "/case-screens/12-ranking.mp4", type: "video" },
};

export default function ProductShowcase({ lang }: { lang: Lang }) {
  const c = productShowcaseContent[lang];
  const decisions = c.decisions.map((d) => ({ ...d, media: media[d.id].src, mediaType: media[d.id].type }));

  const [activeId, setActiveId] = useState(decisions[0].id);
  const [imageError, setImageError] = useState(false);

  const active = decisions.find((d) => d.id === activeId) ?? decisions[0];

  const handleSelect = (id: string) => {
    setImageError(false);
    setActiveId(id);
  };

  // Mobile accordion — estado independente do preview desktop
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);
  const [mobileImageErrors, setMobileImageErrors] = useState<Record<string, boolean>>({});

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
  };

  const handleMobileImageError = (id: string) => {
    setMobileImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="produto" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/3 dark:bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">{c.eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{c.title}</h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-sm">
          {c.description}
        </p>
      </div>

      {/* Desktop layout — tabs + preview central + painel de análise */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 md:gap-12 items-start">

        {/* Left: decision list — vertical scroll on desktop */}
        <div className="lg:col-span-3">
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-3 lg:pb-0 lg:max-h-[620px] lg:overflow-y-auto scrollbar-none">
            {decisions.map((d, i) => (
              <button
                key={d.id}
                onClick={() => handleSelect(d.id)}
                className={`text-left p-3.5 rounded-2xl border transition-all duration-300 flex-shrink-0 min-w-[180px] lg:min-w-0 lg:w-full cursor-pointer ${
                  activeId === d.id
                    ? "bg-surface-elevated border-brand/40 shadow-md"
                    : "bg-surface/50 border-border/50 opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className={`text-[9px] font-black flex-shrink-0 mt-0.5 ${activeId === d.id ? "text-brand" : "text-text-secondary"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-[11px] font-bold leading-tight ${activeId === d.id ? "text-brand-strong" : "text-text-primary"}`}>
                      {d.label}
                    </p>
                    <p className="text-[9px] text-text-secondary mt-0.5 leading-tight line-clamp-2">{d.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Center: real phone mockup — tela do app dentro de um celular, não card branco */}
        <div className="lg:col-span-5 flex justify-center">
          <MockupReveal3D>
            <div className="w-[300px] h-[600px] bg-black rounded-[42px] border-4 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.01]">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-center border border-gray-900">
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
              </div>

              {/* Screen area */}
              {imageError ? (
                /* Minimal fallback — shown only if the real media fails to load */
                <div className="absolute inset-0 bg-page flex flex-col items-center justify-center p-5 text-center gap-3">
                  <ImageOff className="w-6 h-6 text-text-secondary/50" />
                  <p className="text-[10px] font-bold text-text-primary leading-tight">
                    {active.label}
                  </p>
                  <p className="text-[9px] text-text-secondary leading-relaxed">
                    {c.labels.mediaUnavailable}
                  </p>
                </div>
              ) : active.mediaType === "video" ? (
                /* Real screen recording — object-contain shows the full screen; any gap reveals the mockup's own black frame, not a white bar */
                <video
                  key={active.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-contain"
                  onError={() => setImageError(true)}
                >
                  <source src={active.media} type="video/mp4" />
                </video>
              ) : (
                /* Real screenshot — object-contain shows the full screen; any gap reveals the mockup's own black frame, not a white bar */
                <img
                  key={active.media}
                  src={active.media}
                  alt={`${active.label}`}
                  className="absolute inset-0 w-full h-full object-contain"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </MockupReveal3D>
        </div>

        {/* Right: strategic analysis */}
        <div className="lg:col-span-4 bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 shadow-md relative transition-all duration-300">
          <div className="space-y-6">

            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[8px] font-black text-brand uppercase tracking-widest">
                  {c.labels.screenCounter} {String(decisions.findIndex(d => d.id === activeId) + 1).padStart(2, "0")} / {String(decisions.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-primary leading-tight">{active.label}</h3>
              <p className="text-[10px] text-text-secondary">{active.subtitle}</p>
            </div>

            <div className="w-full h-[1px] bg-border" />

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <span className="text-[8px] font-bold text-red-500 uppercase tracking-wider block">{c.labels.dor}</span>
                <p className="text-text-secondary leading-relaxed">{active.dor}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-bold text-brand uppercase tracking-wider block">{c.labels.insight}</span>
                <p className="text-text-secondary leading-relaxed">{active.insight}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-bold text-brand-strong uppercase tracking-wider block">{c.labels.decisao}</span>
                <p className="text-text-primary font-medium leading-relaxed">{active.decisao}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-bold text-brand uppercase tracking-wider block">{c.labels.tela}</span>
                <p className="text-text-secondary leading-relaxed italic">{active.telaDesc}</p>
              </div>

              <div className="bg-brand/5 border border-brand/10 p-3 rounded-xl flex gap-2 items-start text-[10px] text-brand-strong font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{c.labels.valorPrefix} {active.valor}</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Mobile layout — cards empilhados com expansão inline, sem autoplay */}
      <div className="lg:hidden space-y-4">
        {decisions.map((d, i) => {
          const isExpanded = expandedMobileId === d.id;
          const hasImageError = mobileImageErrors[d.id] ?? false;

          return (
            <div
              key={d.id}
              className="bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="p-4 space-y-3">
                {/* Header da tela */}
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-black text-brand flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-text-primary leading-tight">{d.label}</p>
                    <p className="text-[11px] text-text-secondary mt-0.5 leading-tight">{d.subtitle}</p>
                  </div>
                </div>

                {/* Mockup de celular — proporcional, sem estourar a largura da tela */}
                <div className="flex justify-center py-2">
                  <div className="w-[200px] h-[400px] bg-black rounded-[36px] border-4 border-gray-800 shadow-xl relative overflow-hidden flex-shrink-0">
                    {/* Dynamic Island */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20 flex items-center justify-center border border-gray-900">
                      <div className="w-1 h-1 bg-gray-800 rounded-full" />
                    </div>

                    {hasImageError ? (
                      <div className="absolute inset-0 bg-page flex flex-col items-center justify-center gap-2 p-4 text-center">
                        <ImageOff className="w-5 h-5 text-text-secondary/50" />
                        <p className="text-[10px] text-text-secondary leading-relaxed">{c.labels.mediaUnavailableFor} {d.label}</p>
                      </div>
                    ) : d.mediaType === "video" ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-contain"
                        onError={() => handleMobileImageError(d.id)}
                      >
                        <source src={d.media} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={d.media}
                        alt={`${d.label}`}
                        className="absolute inset-0 w-full h-full object-contain"
                        onError={() => handleMobileImageError(d.id)}
                      />
                    )}
                  </div>
                </div>

                {/* Botão para expandir a decisão de design */}
                <button
                  onClick={() => toggleMobileExpand(d.id)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-surface-elevated border border-border text-xs font-bold text-brand-strong cursor-pointer transition-all duration-300"
                >
                  {isExpanded ? c.labels.hideDecision : c.labels.showDecision}
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                {/* Explicação inline — abre dentro do fluxo da página, sem modal */}
                {isExpanded && (
                  <div className="space-y-3 text-xs pt-2 border-t border-border">
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-red-500 uppercase tracking-wider block">{c.labels.dor}</span>
                      <p className="text-text-secondary leading-relaxed">{d.dor}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-brand uppercase tracking-wider block">{c.labels.insight}</span>
                      <p className="text-text-secondary leading-relaxed">{d.insight}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-brand-strong uppercase tracking-wider block">{c.labels.decisao}</span>
                      <p className="text-text-primary font-medium leading-relaxed">{d.decisao}</p>
                    </div>

                    <div className="bg-brand/5 border border-brand/10 p-3 rounded-xl flex gap-2 items-start text-[10px] text-brand-strong font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{c.labels.valorPrefix} {d.valor}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
