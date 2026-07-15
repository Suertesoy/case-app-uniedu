import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ImageOff } from "lucide-react";
import MockupReveal3D from "./MockupReveal3D";
import RevealOnScroll from "./RevealOnScroll";
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

/**
 * Reproduz vídeo apenas quando >=50% visível na viewport e pausa ao sair,
 * evitando que as 12 telas toquem em autoplay simultâneo. Respeita
 * prefers-reduced-motion trocando autoplay por controles manuais.
 */
function ScreenMedia({ screenId, label, unavailableLabel }: { screenId: string; label: string; unavailableLabel: string }) {
  const entry = media[screenId];
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (entry.type !== "video" || !wrapperRef.current || reducedMotion) return;
    const el = wrapperRef.current;
    const observer = new IntersectionObserver(
      ([intersection]) => {
        const video = videoRef.current;
        if (!video) return;
        if (intersection.isIntersecting && intersection.intersectionRatio >= 0.5) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.5, 1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [entry.type, reducedMotion]);

  if (error) {
    return (
      <div className="absolute inset-0 bg-page flex flex-col items-center justify-center p-5 text-center gap-3">
        <ImageOff className="w-6 h-6 text-text-secondary/50" />
        <p className="text-xs font-bold text-text-primary leading-tight">{label}</p>
        <p className="text-xs text-text-secondary leading-relaxed">{unavailableLabel}</p>
      </div>
    );
  }

  if (entry.type === "video") {
    return (
      <div ref={wrapperRef} className="absolute inset-0">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          controls={reducedMotion}
          width={300}
          height={600}
          className="absolute inset-0 w-full h-full object-contain"
          onError={() => setError(true)}
        >
          <source src={entry.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <img
      src={entry.src}
      alt={label}
      loading="lazy"
      width={300}
      height={600}
      className="absolute inset-0 w-full h-full object-contain"
      onError={() => setError(true)}
    />
  );
}

function PhoneMockup({ screenId, label, unavailableLabel }: { screenId: string; label: string; unavailableLabel: string }) {
  return (
    <MockupReveal3D>
      <div className="w-[260px] h-[520px] md:w-[280px] md:h-[560px] bg-black rounded-[42px] border-4 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-center border border-gray-900">
          <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
        </div>
        <ScreenMedia screenId={screenId} label={label} unavailableLabel={unavailableLabel} />
      </div>
    </MockupReveal3D>
  );
}

export default function ProductShowcase({ lang }: { lang: Lang }) {
  const c = productShowcaseContent[lang];

  return (
    <section id="produto" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/3 dark:bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center mb-16 space-y-4 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">{c.eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{c.title}</h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-sm">{c.description}</p>
      </div>

      <div className="space-y-20 relative z-10">
        {c.decisions.map((d, i) => {
          const reversed = i % 2 === 1;
          return (
            <RevealOnScroll key={d.id} direction="up">
              <article
                id={`tela-${d.id}`}
                className="scroll-mt-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center border-t border-border pt-16 first:border-t-0 first:pt-0"
              >
                {/* Mídia — sempre primeiro no DOM, ordem visual pode alternar no desktop */}
                <div className={`lg:col-span-5 flex justify-center ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                  <PhoneMockup screenId={d.id} label={d.label} unavailableLabel={c.labels.mediaUnavailable} />
                </div>

                {/* Análise */}
                <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-black text-brand uppercase tracking-wide">
                      {c.labels.screenCounter} {String(i + 1).padStart(2, "0")} / {String(c.decisions.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary leading-tight">{d.label}</h3>
                  <p className="text-sm text-text-secondary mt-1">{d.subtitle}</p>

                  <div className="w-full h-[1px] bg-border my-5" />

                  <div className="space-y-5 text-sm">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-red-500 uppercase tracking-wide block">{c.labels.dor}</span>
                      <p className="text-text-secondary leading-relaxed">{d.dor}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-bold text-brand uppercase tracking-wide block">{c.labels.insight}</span>
                      <p className="text-text-secondary leading-relaxed">{d.insight}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-bold text-brand-strong uppercase tracking-wide block">{c.labels.decisao}</span>
                      <p className="text-text-primary font-medium leading-relaxed">{d.decisao}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-bold text-brand uppercase tracking-wide block">{c.labels.tela}</span>
                      <p className="text-text-secondary leading-relaxed italic">{d.telaDesc}</p>
                    </div>

                    <div className="bg-brand/5 border border-brand/10 p-3 rounded-xl flex gap-2 items-start text-sm text-brand-strong font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{c.labels.valorPrefix} {d.valor}</span>
                    </div>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>

      <RevealOnScroll direction="up">
        <p className="text-text-secondary text-sm leading-relaxed mt-16 max-w-3xl mx-auto text-center relative z-10">
          {c.transitionToValidation}
        </p>
      </RevealOnScroll>
    </section>
  );
}
