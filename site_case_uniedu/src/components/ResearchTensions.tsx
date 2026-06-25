import { Users, Compass, MessageSquare, Sparkles, BookOpen } from "lucide-react";
import { tensionsContent, type Lang } from "../content/translations";

const icons = [Users, Compass, MessageSquare, Sparkles, BookOpen];

export default function ResearchTensions({ lang }: { lang: Lang }) {
  const c = tensionsContent[lang];

  return (
    <section id="tensoes-pesquisa" className="py-24 bg-surface/20 border-t border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">{c.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{c.title}</h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-sm leading-relaxed">
            {c.description}
          </p>
        </div>

        {/* Tension cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {c.tensions.map((t, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={t.titulo}
                className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-brand-soft/40 transition-all duration-300 shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/3 dark:bg-brand/5 rounded-full blur-[40px] pointer-events-none" />

                <div className="space-y-5 relative z-10 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm font-bold text-text-primary tracking-tight leading-snug">
                      {t.titulo}
                    </h3>
                  </div>

                  <div className="space-y-4 mt-2">
                    {/* Achado */}
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-text-secondary uppercase tracking-widest block">
                        {c.labels.achado}
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {t.achado}
                      </p>
                    </div>

                    {/* Decisão */}
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-brand-strong uppercase tracking-widest block">
                        {c.labels.decisao}
                      </span>
                      <p className="text-xs text-text-primary font-semibold leading-relaxed">
                        {t.decisao}
                      </p>
                    </div>

                    {/* Impacto */}
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-text-secondary uppercase tracking-widest block">
                        {c.labels.impacto}
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {t.impacto}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Síntese da tensão — nota de destaque, não é um botão */}
                <div className="pt-4 mt-6 border-t border-border/60 relative z-10">
                  <p className="text-[10px] font-semibold text-brand-strong italic leading-relaxed">
                    {t.badge}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
