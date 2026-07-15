import { Compass, Eye, ShieldAlert, Sparkles, MessageSquare, Smile } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { journeyContent, type Lang, type JourneyStage } from "../content/translations";

function StageCard({
  stage,
  index,
  personaId,
  labels,
}: {
  stage: JourneyStage;
  index: number;
  personaId: string;
  labels: {
    contexto: string;
    acoes: string;
    sentimentos: string;
    pensamentos: string;
    dores: string;
    oportunidades: string;
  };
}) {
  return (
    <RevealOnScroll direction="up" delay={Math.min(index * 60, 240)}>
      <div
        id={`jornada-${personaId}-${stage.id}`}
        className="scroll-mt-28 bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-10 shadow-lg relative transition-all duration-300"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/3 dark:bg-brand/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <span className="w-8 h-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-black text-brand-strong flex-shrink-0">
            {index + 1}
          </span>
          <div>
            <p className="text-sm font-bold text-brand-strong leading-tight">{stage.label}</p>
            <p className="text-xs text-text-secondary">{stage.desc}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Side: Context, Actions, Thoughts, Feelings */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contexto */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-brand uppercase tracking-wide block">{labels.contexto}</span>
              <div className="flex gap-2.5 items-start">
                <Compass className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <p className="text-sm text-text-secondary leading-relaxed">{stage.contexto}</p>
              </div>
            </div>

            {/* Ações */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide flex items-center gap-2">
                <Eye className="w-4 h-4 text-brand-strong" />
                {labels.acoes}
              </h4>
              <ul className="space-y-1.5 text-sm text-text-secondary list-disc pl-5 leading-relaxed">
                {stage.acoes.map((acao, i) => (
                  <li key={i}>{acao}</li>
                ))}
              </ul>
            </div>

            {/* Sentimentos (Chips) */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide flex items-center gap-2">
                <Smile className="w-4 h-4 text-brand-strong" />
                {labels.sentimentos}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {stage.sentimentos.map((sent, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand-strong text-xs font-bold"
                  >
                    {sent}
                  </span>
                ))}
              </div>
            </div>

            {/* O que pensa */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-strong" />
                {labels.pensamentos}
              </h4>
              <div className="space-y-2">
                {stage.pensamentos.map((pens, i) => (
                  <div
                    key={i}
                    className="bg-surface p-3 rounded-2xl border border-border/60 text-sm text-text-secondary italic leading-relaxed relative"
                  >
                    <span className="absolute top-2 left-3 text-2xl text-brand-soft/20 font-serif">&ldquo;</span>
                    <p className="pl-5">{pens}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Dores (Friction Points) & Opportunities */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dores */}
            <div className="bg-red-500/5 dark:bg-red-500/3 border border-red-500/10 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold text-red-500 uppercase tracking-wide flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-500" />
                {labels.dores}
              </h4>
              <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5 leading-relaxed">
                {stage.dores.map((dor, i) => (
                  <li key={i} className="marker:text-red-500/70">{dor}</li>
                ))}
              </ul>
            </div>

            {/* Oportunidades */}
            <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold text-brand-strong uppercase tracking-wide flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand" />
                {labels.oportunidades}
              </h4>
              <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5 leading-relaxed">
                {stage.oportunidades.map((op, i) => (
                  <li key={i} className="marker:text-brand">{op}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function JourneyMap({ lang }: { lang: Lang }) {
  const c = journeyContent[lang];

  const personas = [
    { id: "sofia", name: c.tabSofia, stages: c.sofiaStages },
    { id: "marcos", name: c.tabMarcos, stages: c.marcosStages },
  ];

  return (
    <section id="jornada" className="py-24 bg-surface/10 border-y border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">{c.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{c.title}</h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-sm leading-relaxed">{c.description}</p>
        </div>

        <div className="space-y-16">
          {personas.map((persona) => (
            <div key={persona.id} className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Persona summary — sticky index, não é um controle de navegação exclusivo */}
              <div className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start">
                <RevealOnScroll direction="up">
                  <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-text-primary mb-4">{persona.name}</h3>
                    <ol className="space-y-1">
                      {persona.stages.map((stage, i) => (
                        <li key={stage.id}>
                          <a
                            href={`#jornada-${persona.id}-${stage.id}`}
                            className="flex items-center gap-2 py-1.5 text-sm text-text-secondary hover:text-brand-strong transition-colors"
                          >
                            <span className="text-xs font-mono text-brand/70">{i + 1}</span>
                            {stage.label.replace(/^\d+\.\s*/, "")}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Stages — todas visíveis, sem seleção exclusiva */}
              <div className="lg:col-span-9 space-y-6">
                {persona.stages.map((stage, i) => (
                  <StageCard key={stage.id} stage={stage} index={i} personaId={persona.id} labels={c.labels} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <RevealOnScroll direction="up">
          <p className="text-text-secondary text-sm leading-relaxed mt-16 max-w-3xl mx-auto text-center">
            {c.transitionToTensions}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
