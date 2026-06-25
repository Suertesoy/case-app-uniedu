import { useState } from "react";
import { Target, ShieldAlert, Sparkles, Briefcase, Repeat } from "lucide-react";
import { personaContent, type Lang } from "../content/translations";

export default function PersonaCard({ lang }: { lang: Lang }) {
  const [activePersona, setActivePersona] = useState<"sofia" | "marcos">("sofia");
  const [imageError, setImageError] = useState(false);

  const selectPersona = (id: "sofia" | "marcos") => {
    setActivePersona(id);
    setImageError(false);
  };

  const c = personaContent[lang];

  const personas = {
    sofia: {
      id: "sofia",
      nome: "Sofia",
      idade: 24,
      avatarInitials: "S",
      foto: "/personas/sofia.png",
      tags: lang === "pt" ? ["Estudante EAD Noturna", "Transição de Carreira"] : ["Night Online Student", "Career Transition"],
      ...c.personas.sofia,
    },
    marcos: {
      id: "marcos",
      nome: "Marcos",
      idade: 29,
      avatarInitials: "M",
      foto: "/personas/marcos.png",
      tags: lang === "pt" ? ["Engajado", "Veterano", "Familiarizado"] : ["Engaged", "Veteran", "Familiar"],
      ...c.personas.marcos,
    },
  };

  const current = personas[activePersona];

  return (
    <section id="personas" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand/3 dark:bg-brand/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />

      <div className="text-center mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">{c.eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{c.title}</h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-sm">
          {c.description}
        </p>
      </div>

      {/* Persona Toggle Buttons */}
      <div className="flex justify-center gap-3 mb-10">
        <button
          onClick={() => selectPersona("sofia")}
          className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
            activePersona === "sofia"
              ? "bg-surface-elevated border-brand/40 shadow-sm text-brand-strong scale-[1.01]"
              : "bg-surface/30 border-border/40 text-text-secondary opacity-60 hover:opacity-100"
          }`}
        >
          Sofia
        </button>
        <button
          onClick={() => selectPersona("marcos")}
          className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
            activePersona === "marcos"
              ? "bg-surface-elevated border-brand/40 shadow-md text-brand-strong scale-[1.01]"
              : "bg-surface/30 border-border/40 text-text-secondary opacity-60 hover:opacity-100"
          }`}
        >
          Marcos
        </button>
      </div>

      <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden transition-all duration-300">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* Avatar Area */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-brand/20 via-brand-soft/10 to-brand-strong/20 p-2 border border-brand/25 flex items-center justify-center mb-6 shadow-inner">
              <div className="w-full h-full rounded-full bg-surface-elevated flex items-center justify-center border border-border overflow-hidden">
                {imageError ? (
                  <span className="text-3xl font-extrabold text-brand bg-gradient-to-r from-brand to-brand-strong bg-clip-text text-transparent">
                    {current.avatarInitials}
                  </span>
                ) : (
                  <img
                    key={current.id}
                    src={current.foto}
                    alt={`${c.photoAlt} ${current.nome}`}
                    className="w-full h-full rounded-full object-cover object-center"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-text-primary">{current.nome}</h3>
            <p className="text-xs text-text-secondary mt-1">{current.idade} {lang === "pt" ? "anos" : "years old"} · {current.perfil}</p>

            {/* Tags as Chips */}
            <div className="flex flex-wrap gap-1.5 mt-4 justify-center">
              {current.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-bold text-brand-strong bg-brand/10 border border-brand/20 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-[11px] text-text-secondary italic mt-6 max-w-[240px] leading-relaxed border-t border-border pt-4">
              {current.quote}
            </p>
          </div>

          {/* Info Details */}
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-6 md:gap-8">
            {/* Perfil & Rotina */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-brand-strong" />
                {c.labels.rotina}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {current.rotina}
              </p>
            </div>

            {/* Motivações ou Objetivos */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-brand-strong" />
                {c.labels.motivacoes}
              </h4>
              <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-4 leading-relaxed">
                {current.motivacoes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Dores */}
            <div className="space-y-3 bg-red-500/5 dark:bg-red-500/3 border border-red-500/10 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-500" />
                {c.labels.dores}
              </h4>
              <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-4 leading-relaxed">
                {current.dores.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Desejos */}
            <div className="space-y-3 bg-brand/5 border border-brand/10 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-brand-strong uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand" />
                {c.labels.desejos}
              </h4>
              <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-4 leading-relaxed">
                {current.desejos.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Comportamentos e hábitos */}
            {current.habitos && (
              <div className="space-y-3 sm:col-span-2">
                <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <Repeat className="w-4 h-4 text-brand-strong" />
                  {c.labels.habitos}
                </h4>
                <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-4 leading-relaxed">
                  {current.habitos.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
