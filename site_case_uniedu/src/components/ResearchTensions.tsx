import { Users, Compass, MessageSquare, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { tensionsContent, productShowcaseContent, type Lang } from "../content/translations";

const icons = [Users, Compass, MessageSquare, Sparkles, BookOpen];

export default function ResearchTensions({ lang }: { lang: Lang }) {
  const c = tensionsContent[lang];
  const showcase = productShowcaseContent[lang];

  return (
    <section id="tensoes-pesquisa" className="py-24 bg-surface/20 border-t border-border transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">{c.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{c.title}</h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-sm leading-relaxed">{c.description}</p>
        </div>

        {/* Tensões — pilha vertical de blocos amplos, sem tabs/carrossel/accordion */}
        <div className="space-y-8">
          {c.tensions.map((t, idx) => {
            const Icon = icons[idx];
            const relatedScreen = showcase.decisions.find((d) => d.id === t.telaId);

            return (
              <RevealOnScroll key={t.titulo} direction="up" delay={Math.min(idx * 60, 240)}>
                <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-10 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand/3 dark:bg-brand/5 rounded-full blur-[50px] pointer-events-none" />

                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary tracking-tight leading-snug pt-1.5">{t.titulo}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 relative z-10">
                    {/* Coluna esquerda: evidência e insight */}
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-text-secondary uppercase tracking-wide block">
                          {c.labels.achado}
                        </span>
                        <p className="text-sm text-text-secondary leading-relaxed">{t.achado}</p>
                      </div>

                      {relatedScreen && (
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-brand uppercase tracking-wide block">
                            {c.labels.insight}
                          </span>
                          <p className="text-sm text-text-secondary leading-relaxed">{relatedScreen.insight}</p>
                        </div>
                      )}
                    </div>

                    {/* Coluna direita: decisão, manifestação na interface e impacto */}
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-brand-strong uppercase tracking-wide block">
                          {c.labels.decisao}
                        </span>
                        <p className="text-sm text-text-primary font-semibold leading-relaxed">{t.decisao}</p>
                      </div>

                      {relatedScreen && (
                        <div className="space-y-1.5">
                          <span className="text-xs font-bold text-brand uppercase tracking-wide block">
                            {c.labels.manifestacao}
                          </span>
                          <p className="text-sm text-text-secondary leading-relaxed italic">{relatedScreen.telaDesc}</p>
                          <a
                            href={`#tela-${relatedScreen.id}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-strong bg-brand/10 border border-brand/20 rounded-full px-3 py-1.5 mt-1 hover:bg-brand/15 transition-colors"
                          >
                            {c.labels.verTela}: {relatedScreen.label}
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      <div className="space-y-1">
                        <span className="text-xs font-bold text-text-secondary uppercase tracking-wide block">
                          {c.labels.impacto}
                        </span>
                        <p className="text-sm text-text-secondary leading-relaxed">{t.impacto}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-border/60 relative z-10">
                    <p className="text-sm font-semibold text-brand-strong italic leading-relaxed">{t.badge}</p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll direction="up">
          <p className="text-text-secondary text-sm leading-relaxed mt-14 max-w-3xl mx-auto text-center">
            {c.transitionToProduct}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
