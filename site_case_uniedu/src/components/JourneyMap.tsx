import { useState } from "react";
import { Compass, Eye, ShieldAlert, Sparkles, MessageSquare, Smile } from "lucide-react";
import { journeyContent, type Lang } from "../content/translations";

export default function JourneyMap({ lang }: { lang: Lang }) {
  const [activePersona, setActivePersona] = useState<"sofia" | "marcos">("sofia");
  const [activeStage, setActiveStage] = useState("descoberta");

  const handlePersonaChange = (persona: "sofia" | "marcos") => {
    setActivePersona(persona);
    setActiveStage("descoberta");
  };

  const c = journeyContent[lang];
  const stages = activePersona === "sofia" ? c.sofiaStages : c.marcosStages;
  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section id="pesquisa" className="py-24 bg-surface/10 border-y border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">{c.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{c.title}</h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-sm leading-relaxed">
            {c.description}
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => handlePersonaChange("sofia")}
            className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
              activePersona === "sofia"
                ? "bg-surface-elevated border-brand/40 shadow-sm text-brand-strong scale-[1.01]"
                : "bg-surface/30 border-border/40 text-text-secondary opacity-60 hover:opacity-100"
            }`}
          >
            {c.tabSofia}
          </button>
          <button
            onClick={() => handlePersonaChange("marcos")}
            className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
              activePersona === "marcos"
                ? "bg-surface-elevated border-brand/40 shadow-sm text-brand-strong scale-[1.01]"
                : "bg-surface/30 border-border/40 text-text-secondary opacity-60 hover:opacity-100"
            }`}
          >
            {c.tabMarcos}
          </button>
        </div>

        {/* Tab Headers */}
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none border-b border-border mb-12">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`flex-1 text-center py-4 px-5 rounded-2xl border transition-all duration-300 flex-shrink-0 min-w-[160px] md:min-w-0 cursor-pointer ${
                activeStage === stage.id
                  ? "bg-surface-elevated border-brand/40 shadow-md scale-[1.01]"
                  : "bg-surface/30 border-border/40 opacity-60 hover:opacity-100"
              }`}
            >
              <p className={`text-xs font-bold ${activeStage === stage.id ? "text-brand-strong" : "text-text-primary"}`}>
                {stage.label}
              </p>
              <p className="text-[10px] text-text-secondary mt-1">{stage.desc}</p>
            </button>
          ))}
        </div>

        {/* Journey Content Grid */}
        <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-10 shadow-lg relative transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/3 dark:bg-brand/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Left Side: Context, Actions, Thoughts, Feelings */}
            <div className="lg:col-span-7 space-y-6">

              {/* Contexto */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-brand uppercase tracking-wider block">{c.labels.contexto}</span>
                <div className="flex gap-2.5 items-start">
                  <Compass className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-text-secondary leading-relaxed">{current.contexto}</p>
                </div>
              </div>

              {/* Ações */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <Eye className="w-4 h-4 text-brand-strong" />
                  {c.labels.acoes}
                </h4>
                <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-5 leading-relaxed">
                  {current.acoes.map((acao, i) => (
                    <li key={i}>{acao}</li>
                  ))}
                </ul>
              </div>

              {/* Sentimentos (Chips) */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <Smile className="w-4 h-4 text-brand-strong" />
                  {c.labels.sentimentos}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {current.sentimentos.map((sent, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand-strong text-[10px] font-bold"
                    >
                      {sent}
                    </span>
                  ))}
                </div>
              </div>

              {/* O que pensa */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-strong" />
                  {c.labels.pensamentos}
                </h4>
                <div className="space-y-2">
                  {current.pensamentos.map((pens, i) => (
                    <div
                      key={i}
                      className="bg-surface p-3 rounded-2xl border border-border/60 text-xs text-text-secondary italic leading-relaxed relative"
                    >
                      <span className="absolute top-2 left-3 text-2xl text-brand-soft/20 font-serif">“</span>
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
                <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                  {c.labels.dores}
                </h4>
                <ul className="space-y-2 text-xs text-text-secondary list-disc pl-5 leading-relaxed">
                  {current.dores.map((dor, i) => (
                    <li key={i} className="marker:text-red-500/70">{dor}</li>
                  ))}
                </ul>
              </div>

              {/* Oportunidades */}
              <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 space-y-3">
                <h4 className="text-xs font-bold text-brand-strong uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand" />
                  {c.labels.oportunidades}
                </h4>
                <ul className="space-y-2 text-xs text-text-secondary list-disc pl-5 leading-relaxed">
                  {current.oportunidades.map((op, i) => (
                    <li key={i} className="marker:text-brand">{op}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
