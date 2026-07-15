import { useState } from "react";
import { Target, ShieldAlert, Sparkles, Briefcase, Repeat } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { personaContent, type Lang } from "../content/translations";

interface PersonaBlockData {
  id: "sofia" | "marcos";
  nome: string;
  idade: number;
  avatarInitials: string;
  foto: string;
  tags: string[];
  perfil: string;
  quote: string;
  rotina: string;
  habitos: string[];
  motivacoes: string[];
  dores: string[];
  desejos: string[];
}

function PersonaBlock({
  persona,
  lang,
  labels,
  photoAlt,
}: {
  persona: PersonaBlockData;
  lang: Lang;
  labels: { rotina: string; motivacoes: string; dores: string; desejos: string; habitos: string };
  photoAlt: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <RevealOnScroll direction="up">
      <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden transition-all duration-300 h-full">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8">
          {/* Avatar Area */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-brand/20 via-brand-soft/10 to-brand-strong/20 p-2 border border-brand/25 flex items-center justify-center mb-5 shadow-inner">
              <div className="w-full h-full rounded-full bg-surface-elevated flex items-center justify-center border border-border overflow-hidden">
                {imageError ? (
                  <span className="text-2xl font-extrabold text-brand bg-gradient-to-r from-brand to-brand-strong bg-clip-text text-transparent">
                    {persona.avatarInitials}
                  </span>
                ) : (
                  <img
                    src={persona.foto}
                    alt={`${photoAlt} ${persona.nome}`}
                    loading="lazy"
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full object-cover object-center"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-text-primary">{persona.nome}</h3>
            <p className="text-sm text-text-secondary mt-1">
              {persona.idade} {lang === "pt" ? "anos" : "years old"} · {persona.perfil}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4 justify-center">
              {persona.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-bold text-brand-strong bg-brand/10 border border-brand/20 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-text-secondary italic mt-6 max-w-xs leading-relaxed border-t border-border pt-4">
              {persona.quote}
            </p>
          </div>

          {/* Info Details */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wide flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-brand-strong" />
                {labels.rotina}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">{persona.rotina}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wide flex items-center gap-2">
                <Target className="w-4 h-4 text-brand-strong" />
                {labels.motivacoes}
              </h4>
              <ul className="space-y-1.5 text-sm text-text-secondary list-disc pl-4 leading-relaxed">
                {persona.motivacoes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 bg-red-500/5 dark:bg-red-500/3 border border-red-500/10 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-red-500 uppercase tracking-wide flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-500" />
                {labels.dores}
              </h4>
              <ul className="space-y-1.5 text-sm text-text-secondary list-disc pl-4 leading-relaxed">
                {persona.dores.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 bg-brand/5 border border-brand/10 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-brand-strong uppercase tracking-wide flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand" />
                {labels.desejos}
              </h4>
              <ul className="space-y-1.5 text-sm text-text-secondary list-disc pl-4 leading-relaxed">
                {persona.desejos.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {persona.habitos && (
              <div className="space-y-3 sm:col-span-2">
                <h4 className="text-sm font-bold text-text-primary uppercase tracking-wide flex items-center gap-2">
                  <Repeat className="w-4 h-4 text-brand-strong" />
                  {labels.habitos}
                </h4>
                <ul className="space-y-1.5 text-sm text-text-secondary list-disc pl-4 leading-relaxed">
                  {persona.habitos.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function PersonaCard({ lang }: { lang: Lang }) {
  const c = personaContent[lang];

  const personas: PersonaBlockData[] = [
    {
      id: "sofia",
      nome: "Sofia",
      idade: 24,
      avatarInitials: "S",
      foto: "/personas/sofia.png",
      tags: lang === "pt" ? ["Estudante EAD Noturna", "Transição de Carreira"] : ["Night Online Student", "Career Transition"],
      ...c.personas.sofia,
    },
    {
      id: "marcos",
      nome: "Marcos",
      idade: 29,
      avatarInitials: "M",
      foto: "/personas/marcos.png",
      tags: lang === "pt" ? ["Engajado", "Veterano", "Familiarizado"] : ["Engaged", "Veteran", "Familiar"],
      ...c.personas.marcos,
    },
  ];

  return (
    <section id="personas" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand/3 dark:bg-brand/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />

      <div className="text-center mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">{c.eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{c.title}</h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-sm">{c.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {personas.map((persona) => (
          <PersonaBlock key={persona.id} persona={persona} lang={lang} labels={c.labels} photoAlt={c.photoAlt} />
        ))}
      </div>

      <RevealOnScroll direction="up">
        <p className="text-text-secondary text-sm leading-relaxed mt-14 max-w-3xl mx-auto text-center">
          {c.transitionToJourney}
        </p>
      </RevealOnScroll>
    </section>
  );
}
