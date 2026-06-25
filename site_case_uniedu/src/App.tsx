import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  AlertCircle,
  Sun,
  Moon,
  Code2,
  Rocket
} from "lucide-react";
import prototypeLightVideo from "../../NAVEGACAO_UNIEDU_LIGHTMODE.mp4";
import prototypeDarkVideo from "../../NAVEGACAO_UNIEDU_DARKMODE.mp4";
import CursorTrail from "./components/CursorTrail";
import PersonaCard from "./components/PersonaCard";
import JourneyMap from "./components/JourneyMap";
import ResearchTensions from "./components/ResearchTensions";
import ProductShowcase from "./components/ProductShowcase";
import ProcessEvolutionCarousel from "./components/ProcessEvolutionCarousel";
import MockupReveal3D from "./components/MockupReveal3D";
import RevealOnScroll from "./components/RevealOnScroll";
import DesignSystemSection from "./components/DesignSystemSection";
import { AUTHORS, appContent, pageTitle, htmlLang, type Lang } from "./content/translations";

function FlagBR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
      <rect width="20" height="14" rx="2" fill="#009C3B" />
      <polygon points="10,2 18,7 10,12 2,7" fill="#FFDF00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
    </svg>
  );
}

function FlagUS({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
      <rect width="20" height="14" rx="2" fill="#B22234" />
      <g fill="#FFFFFF">
        <rect y="1.08" width="20" height="1.08" />
        <rect y="3.23" width="20" height="1.08" />
        <rect y="5.38" width="20" height="1.08" />
        <rect y="7.54" width="20" height="1.08" />
        <rect y="9.69" width="20" height="1.08" />
        <rect y="11.85" width="20" height="1.08" />
      </g>
      <rect width="9" height="7.54" fill="#3C3B6E" />
    </svg>
  );
}

function LanguageToggle({ lang, setLang, label }: { lang: Lang; setLang: (lang: Lang) => void; label: string }) {
  return (
    <div
      className="flex items-center gap-0.5 p-1 rounded-full bg-surface border border-border"
      role="group"
      aria-label={label}
    >
      <button
        onClick={() => setLang("pt")}
        aria-label="Português"
        aria-pressed={lang === "pt"}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-bold transition-all duration-300 cursor-pointer ${
          lang === "pt"
            ? "bg-surface-elevated text-brand-strong shadow-sm"
            : "text-text-secondary opacity-60 hover:opacity-100"
        }`}
      >
        <FlagBR className="w-4 h-[10px] rounded-[1px] shrink-0" />
        <span className="hidden sm:inline">PT</span>
      </button>
      <button
        onClick={() => setLang("en")}
        aria-label="English"
        aria-pressed={lang === "en"}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-bold transition-all duration-300 cursor-pointer ${
          lang === "en"
            ? "bg-surface-elevated text-brand-strong shadow-sm"
            : "text-text-secondary opacity-60 hover:opacity-100"
        }`}
      >
        <FlagUS className="w-4 h-[10px] rounded-[1px] shrink-0" />
        <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  );
}

function AuthorLink({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} no LinkedIn (abre em nova aba)`}
      className="underline decoration-brand/30 underline-offset-2 hover:decoration-brand-strong hover:text-brand-strong transition-all duration-200"
    >
      {name}
    </a>
  );
}

export default function App() {
  // Theme State
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    // Default to system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Language State
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
    return "pt";
  });

  useEffect(() => {
    document.documentElement.lang = htmlLang[lang];
    document.title = pageTitle[lang];
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = appContent[lang];

  // Scroll to top on load when no hash anchor is present
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  // Replay da animação do título do Hero ao sair e voltar para a primeira seção
  const heroRef = useRef<HTMLElement>(null);
  const [heroAnimKey, setHeroAnimKey] = useState(0);
  const hasLeftHeroRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasLeftHeroRef.current) {
            setHeroAnimKey((k) => k + 1);
            hasLeftHeroRef.current = false;
          }
        } else {
          hasLeftHeroRef.current = true;
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const heroMobileLines = t.hero.titleLines.mobile;
  const heroMobileLast = heroMobileLines[3].split("|");

  return (
    <div className="min-h-screen bg-page text-text-primary selection:bg-brand selection:text-white font-sans transition-colors duration-300">
      <CursorTrail />

      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-page/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand via-brand-soft to-brand-strong bg-clip-text text-transparent">
                UNIEDU
              </span>
              <span className="bg-brand/10 text-brand-strong text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-brand/20">
                {t.header.badge}
              </span>
            </div>
            <span className="text-[10px] text-text-secondary uppercase tracking-widest mt-0.5 hidden sm:inline">
              {t.header.tagline}
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
            {t.header.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">{item.label}</a>
            ))}
          </nav>

          {/* CTAs and Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">

            <LanguageToggle lang={lang} setLang={setLang} label={t.header.langToggleLabel} />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-surface border border-border text-text-secondary hover:text-brand-strong transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center hover:bg-surface-elevated"
              aria-label={t.header.themeToggleLabel}
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <a
              href="https://projeto-uniedu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand text-white rounded-xl text-xs font-bold tracking-wide hover:bg-opacity-90 active:scale-95 transition-all flex items-center gap-1.5 shadow-lg shadow-brand/25 border border-brand"
            >
              {t.header.ctaPrototype}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section ref={heroRef} className="relative overflow-hidden pt-16 pb-24 md:py-32 flex flex-col items-center justify-center transition-all duration-300">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-glow-1 rounded-full blur-[120px] pointer-events-none transition-colors duration-300" />
        <div className="absolute top-1/3 left-1/4 w-[25rem] h-[25rem] bg-glow-2 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/3 via-transparent to-brand/1 pointer-events-none dark:opacity-0 transition-opacity duration-300" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <RevealOnScroll direction="up" delay={100} duration={800}>
            {/* Autoria em Destaque */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8 shadow-sm transition-all duration-300 flex-wrap justify-center">
              <span className="text-xs font-bold text-text-primary">{t.hero.authorsLabel}</span>
              <span className="text-xs font-extrabold text-brand-strong">
                <AuthorLink name={AUTHORS.lucas.name} href={AUTHORS.lucas.linkedin} />
              </span>
              <span className="text-text-secondary text-xs">•</span>
              <span className="text-xs font-extrabold text-brand-strong">
                <AuthorLink name={AUTHORS.najme.name} href={AUTHORS.najme.linkedin} />
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={200} duration={900}>
            <h1 key={heroAnimKey} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.3] mb-6 pb-3 transition-all duration-300" aria-label={t.hero.titleAriaLabel}>
              {/* Desktop/Tablet version */}
              <span className="hidden md:block" aria-hidden="true">
                <span className="hero-dark-line hero-dark-1">{t.hero.titleLines.desktop[0]}</span>
                <span className="hero-dark-line hero-dark-2">{t.hero.titleLines.desktop[1]}</span>
                <span className="hero-gradient-line hero-gradient-1">
                  {t.hero.titleLines.desktop[2]}
                  <span className="progress-staircase" aria-hidden="true">
                    <span className="stair stair-1" />
                    <span className="stair stair-2" />
                    <span className="stair stair-3" />
                    <span className="stair stair-4" />
                    <span className="stair stair-5" />
                    <span className="stair-spark spark-1" />
                    <span className="stair-spark spark-2" />
                    <span className="stair-spark spark-3" />
                    <span className="stair-spark spark-4" />
                  </span>
                </span>
              </span>

              {/* Mobile version */}
              <span className="block md:hidden" aria-hidden="true">
                <span className="hero-dark-line hero-mob-dark-1">{heroMobileLines[0]}</span>
                <span className="hero-dark-line hero-mob-dark-2">{heroMobileLines[1]}</span>
                <span className="hero-dark-line hero-mob-dark-3">{heroMobileLines[2]}</span>
                <span className="hero-gradient-line hero-mob-grad-1">{heroMobileLast[0]}</span>
                <span className="hero-gradient-line hero-mob-grad-2">
                  {heroMobileLast[1]}
                  <span className="progress-staircase mobile-staircase" aria-hidden="true">
                    <span className="stair stair-1" />
                    <span className="stair stair-2" />
                    <span className="stair stair-3" />
                    <span className="stair stair-4" />
                    <span className="stair stair-5" />
                    <span className="stair-spark spark-1" />
                    <span className="stair-spark spark-2" />
                    <span className="stair-spark spark-3" />
                    <span className="stair-spark spark-4" />
                  </span>
                </span>
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={300} duration={1000}>
            {/* Chips de escopo do case */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
              {t.hero.chips.map((item) => (
                <span
                  key={item}
                  className="text-[10px] md:text-xs font-bold text-text-primary bg-surface border border-border px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={400} duration={1000}>
            {/* Linha discreta de ferramentas de processo */}
            <p className="text-[10px] text-text-secondary/70 tracking-wide mb-10">
              {t.hero.toolsLine}
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={500} duration={1000}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#solucao-rapida"
                className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl text-sm font-bold tracking-wide hover:bg-opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/25"
              >
                {t.hero.ctaSolution}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://projeto-uniedu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-surface text-text-primary border border-border rounded-2xl text-sm font-bold tracking-wide hover:bg-surface-elevated active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                {t.hero.ctaPrototype}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. SOLUÇÃO EM POUCOS SEGUNDOS */}
      <section id="solucao-rapida" className="py-24 bg-surface/30 border-y border-border relative transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Contexto textual da solução rápida */}
            <div className="lg:col-span-5">
              <RevealOnScroll direction="left" duration={1000}>
                <div className="space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">{t.quickSolution.eyebrow}</span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                    {t.quickSolution.title}
                  </h2>
                  <div className="w-12 h-1 bg-brand rounded" />
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {t.quickSolution.description}
                  </p>

                  {/* Highlights Rápidos */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {t.quickSolution.highlights.map((h) => (
                      <div key={h.title} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-text-primary">{h.title}</h4>
                          <p className="text-[10px] text-text-secondary mt-0.5">{h.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://projeto-uniedu.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand text-white rounded-xl text-xs font-bold tracking-wide hover:bg-opacity-95 shadow-md shadow-brand/10 transition-all active:scale-98"
                    >
                      {t.quickSolution.ctaFull}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Mockup Mobile de iPhone 16 */}
            <div className="lg:col-span-7 flex justify-center">
              <MockupReveal3D>
                <div className="w-[280px] max-w-full aspect-[7/13] bg-black rounded-[42px] border-4 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.01]">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-center border border-gray-900">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                </div>

                {/* Tela Interna - Vídeo de navegação do protótipo, troca conforme o tema */}
                <div className="absolute inset-0">
                  <video
                    key={theme}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={theme === "dark" ? prototypeDarkVideo : prototypeLightVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </MockupReveal3D>
          </div>

          </div>
        </div>
      </section>

      {/* 4. CONTEXTO DO DESAFIO */}
      <section id="problema" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden transition-all duration-300">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand/3 dark:bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5">
            <RevealOnScroll direction="left" duration={1000}>
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand">{t.challenge.eyebrow}</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  {t.challenge.title}
                </h2>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {t.challenge.description}
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {t.challenge.frictions.map((f, idx) => (
              <RevealOnScroll key={f.tag} direction="up" delay={idx * 150} duration={800}>
                <div className="p-5 rounded-2xl bg-surface border border-border/80 hover:border-brand/25 hover:shadow-lg hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 motion-reduce:hover:translate-y-0">
                  <span className="text-xs font-bold text-brand">{f.tag}</span>
                  <h4 className="font-bold text-sm text-text-primary mt-2">{f.title}</h4>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Referência discreta de apoio às fricções */}
        <p className="mt-6 text-[10px] text-text-secondary leading-relaxed">
          <span className="font-semibold text-text-primary/70">{t.challenge.sourcesLabel}</span> estudos sobre evasão em EAD, presença social em ambientes online e gamificação aplicada ao aprendizado —{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9197481/" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-2 hover:text-brand-strong transition-colors">Shaikh &amp; Asif, 2022</a>,{" "}
          <a href="https://educationaltechnologyjournal.springeropen.com/articles/10.1186/s41239-024-00450-9" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-2 hover:text-brand-strong transition-colors">Rahmani et al., 2024</a>,{" "}
          <a href="https://www.irrodl.org/index.php/irrodl/article/view/2123/3349" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-2 hover:text-brand-strong transition-colors">Richardson et al., 2015</a>{" "}
          {lang === "pt" ? "e" : "and"}{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10448467/" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-2 hover:text-brand-strong transition-colors">Ratinho &amp; Martins, 2023</a>.
        </p>

        {/* Pergunta de Oportunidade (How Might We) */}
        <RevealOnScroll direction="up" delay={200} duration={1000}>
          <div className="mt-16 bg-gradient-to-r from-surface to-surface-elevated border border-brand/20 rounded-3xl p-8 md:p-14 relative overflow-hidden transition-all duration-300 shadow-md flex justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 dark:bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 max-w-[780px] md:max-w-[860px] text-center py-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-strong px-2.5 py-1 rounded-full bg-brand/10 border border-brand/20 mb-5 inline-block">
                {t.challenge.hmwBadge}
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary leading-snug">
                {t.challenge.hmwQuestion}
              </h3>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 4b. NOTA METODOLÓGICA — COMO CONDUZIMOS O PROCESSO (DOUBLE DIAMOND VISUAL) */}
      <section id="processo" className="py-16 max-w-4xl mx-auto px-6 text-center transition-all duration-300">
        <RevealOnScroll direction="up" duration={800}>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand">{t.process.eyebrow}</span>
          <p className="text-text-secondary text-sm leading-relaxed mt-3 max-w-xl mx-auto">
            {t.process.description}
          </p>

          {/* Double Diamond — representação visual em SVG inline */}
          <svg
            viewBox="0 0 800 160"
            className="w-full max-w-2xl mx-auto mt-8 text-brand"
            aria-hidden="true"
          >
            <polygon points="20,80 210,20 400,80 210,140" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
            <polygon points="400,80 590,20 780,80 590,140" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
            <circle cx="20" cy="80" r="5" fill="currentColor" />
            <circle cx="400" cy="80" r="5" fill="currentColor" />
            <circle cx="780" cy="80" r="5" fill="currentColor" />
          </svg>

          {/* Etapas curtas do Double Diamond */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto text-left sm:text-center">
            {t.process.steps.map((step) => (
              <div key={step.title}>
                <p className="text-xs font-bold text-text-primary">{step.title}</p>
                <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* 5. PESQUISA E DESCOBERTA */}
      <section id="pesquisa" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden transition-all duration-300">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand/3 dark:bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center mb-16">
          <RevealOnScroll direction="up" duration={800}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand">{t.research.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-4">{t.research.title}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm">
              {t.research.description}
            </p>
          </RevealOnScroll>
        </div>

        {/* Segmented block layout for Research findings */}
        <div className="space-y-16">

          {/* Subsection 1: Desk Research */}
          <div className="grid md:grid-cols-12 gap-8 items-start border-b border-border pb-12">
            <div className="md:col-span-4">
              <RevealOnScroll direction="left" duration={1000}>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider">{t.research.deskResearch.methodLabel}</span>
                  <h3 className="text-xl font-bold text-text-primary">{t.research.deskResearch.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t.research.deskResearch.desc}
                  </p>
                </div>
              </RevealOnScroll>
            </div>
            <div className="md:col-span-8">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="bg-surface border border-border p-6 rounded-2xl space-y-4">
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t.research.deskResearch.body}
                  </p>
                  <div className="bg-brand/5 border border-brand/10 p-4 rounded-xl flex gap-3 text-xs text-brand-strong font-semibold">
                    <AlertCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{t.research.deskResearch.keyIndicatorLabel}</strong> {t.research.deskResearch.keyIndicator}
                    </span>
                  </div>
                  <p className="text-[10px] text-text-secondary italic">
                    {t.research.deskResearch.source}
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Subsection 2: Benchmark Qualitativo */}
          <div className="grid md:grid-cols-12 gap-8 items-start border-b border-border pb-12">
            <div className="md:col-span-4">
              <RevealOnScroll direction="left" duration={1000}>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider">{t.research.benchmark.methodLabel}</span>
                  <h3 className="text-xl font-bold text-text-primary">{t.research.benchmark.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t.research.benchmark.desc}
                  </p>
                </div>
              </RevealOnScroll>
            </div>
            <div className="md:col-span-8">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {t.research.benchmark.items.map((item) => (
                      <div key={item.name} className="bg-surface border border-border p-5 rounded-2xl space-y-2 hover:border-brand-soft/30 transition-all duration-300">
                        <h4 className="font-bold text-sm text-text-primary flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                          {item.name}
                        </h4>
                        <div className="text-[10px] text-text-secondary space-y-1.5">
                          <p><strong>{t.research.benchmark.obsLabel}</strong> {item.obs}</p>
                          <p><strong>{t.research.benchmark.learnLabel}</strong> {item.learn}</p>
                          <p className="text-brand-strong font-semibold"><strong>{t.research.benchmark.impactLabel}</strong> {item.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Subsection 3: Entrevistas em Profundidade */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <RevealOnScroll direction="left" duration={1000}>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider">{t.research.interviews.methodLabel}</span>
                  <h3 className="text-xl font-bold text-text-primary">{t.research.interviews.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t.research.interviews.desc}
                  </p>
                </div>
              </RevealOnScroll>
            </div>
            <div className="md:col-span-8">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="space-y-6">
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t.research.interviews.body}
                  </p>

                  {/* Grid of interview quotes and audio placeholders */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {t.research.interviews.quotes.map((q) => (
                      <div key={q.meta} className="bg-surface border border-border p-5 rounded-2xl flex flex-col justify-between italic text-text-primary text-xs relative overflow-hidden">
                        <span className="text-3xl text-brand/20 font-serif leading-none absolute top-2 left-2">“</span>
                        <p className="pl-6 pt-3 relative z-10 leading-relaxed mb-4">
                          {q.text}
                        </p>
                        <span className="text-[9px] text-text-secondary font-bold not-italic uppercase tracking-wider">
                          {q.meta}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PERSONA SOFIA */}
      <RevealOnScroll direction="up" duration={1000}>
        <PersonaCard lang={lang} />
      </RevealOnScroll>

      {/* 7. JORNADA DO USUÁRIO */}
      <RevealOnScroll direction="up" duration={1000}>
        <JourneyMap lang={lang} />
      </RevealOnScroll>

      {/* 7b. TENSÕES DE PESQUISA */}
      <RevealOnScroll direction="up" duration={1000}>
        <ResearchTensions lang={lang} />
      </RevealOnScroll>

      {/* 8. PROCESSO DE EVOLUÇÃO DO DESIGN */}
      <RevealOnScroll direction="up" duration={1000}>
        <ProcessEvolutionCarousel lang={lang} />
      </RevealOnScroll>

      {/* 9. VALIDAÇÃO COM USUÁRIOS */}
      <section id="validacao" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Text and stats side */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="left" duration={1000}>
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand">{t.validation.eyebrow}</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.validation.title}</h2>
                <div className="w-12 h-1 bg-brand rounded" />
                <p className="text-text-secondary leading-relaxed text-sm">
                  {t.validation.description}
                </p>

                <div className="bg-surface border border-border rounded-2xl p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-text-secondary leading-relaxed">
                    <strong>{t.validation.keyLearningsLabel}</strong> {t.validation.keyLearnings}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Missions grid and validation records */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="right" duration={1000}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.validation.tasks.map((card) => (
                    <div key={card.label} className="bg-surface border border-border p-4 rounded-2xl space-y-1.5 hover:border-brand-soft/30 transition-all duration-300">
                      <div className="flex justify-between items-center text-[10px] gap-2">
                        <span className="font-bold text-brand bg-brand/10 px-2 py-0.5 rounded border border-brand/25 shrink-0">{card.label}</span>
                        <span className={`font-semibold text-right ${card.cor}`}>{card.resultado}</span>
                      </div>
                      <h4 className="font-bold text-xs text-text-primary leading-snug">{card.titulo}</h4>
                      <p className="text-[11px] text-text-secondary leading-relaxed">{card.texto}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* 10. DOR -> INSIGHT -> SOLUÇÃO EM TELA */}
      <RevealOnScroll direction="up" duration={1000}>
        <ProductShowcase lang={lang} />
      </RevealOnScroll>

      {/* 11. MÉTRICAS DE SUCESSO PROPOSTAS */}
      <section id="estrategia" className="py-24 bg-surface/20 border-y border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up" duration={800}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">{t.metrics.eyebrow}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-5">{t.metrics.title}</h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-sm">
                {t.metrics.description}
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Eixo 01: Impacto Educacional */}
            <RevealOnScroll direction="left" delay={100} duration={1000}>
              <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 shadow-md h-full">
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
                <span className="text-[9px] font-bold text-brand uppercase tracking-widest bg-brand/10 border border-brand/20 px-3 py-1 rounded-full mb-6 inline-block">
                  {t.metrics.axis1Label}
                </span>

                <div className="space-y-4">
                  {t.metrics.axis1Items.map((item, idx) => (
                    <div key={item.title} className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">{idx + 1}</div>
                      <div>
                        <h4 className="text-xs font-bold text-text-primary">{item.title}</h4>
                        <p className="text-[11px] text-text-secondary mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Eixo 02: Sustentabilidade Institucional */}
            <RevealOnScroll direction="right" delay={200} duration={1000}>
              <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 shadow-md h-full">
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
                <span className="text-[9px] font-bold text-brand uppercase tracking-widest bg-brand/10 border border-brand/20 px-3 py-1 rounded-full mb-6 inline-block">
                  {t.metrics.axis2Label}
                </span>

                <div className="space-y-4">
                  {t.metrics.axis2Items.map((item, idx) => (
                    <div key={item.title} className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">{idx + 1}</div>
                      <div>
                        <h4 className="text-xs font-bold text-text-primary">{item.title}</h4>
                        <p className="text-[11px] text-text-secondary mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

          </div>

          <RevealOnScroll direction="up" delay={300} duration={1000}>
            <p className="text-[11px] text-text-secondary italic text-center max-w-2xl mx-auto mt-8">
              {t.metrics.footnote}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 12. DESIGN SYSTEM */}
      <DesignSystemSection theme={theme} setTheme={setTheme} lang={lang} />

      {/* 13. DO FIGMA AO PRODUTO NAVEGÁVEL */}
      <section id="implementacao" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">{t.implementation.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-5">{t.implementation.title}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm">
              {t.implementation.description}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100} duration={1000}>
          <div className="grid sm:grid-cols-3 gap-6">
            {t.implementation.cards.map((card, idx) => {
              const Icon = idx === 0 ? Smartphone : idx === 1 ? Code2 : Rocket;
              return (
                <div key={card.title} className="p-6 rounded-2xl bg-surface border border-border hover:border-brand/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-text-primary mb-2">{card.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="fade" delay={200} duration={1000}>
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {t.implementation.stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium text-text-secondary bg-surface border border-border px-3 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* 14. ESCOPO, AUTORIA E PAPÉIS DO TIME (MATURIDADE E EXECUÇÃO) */}
      <section id="escopo" className="py-16 bg-surface/20 border-t border-border relative transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Left side: Project metadata details */}
            <div className="lg:col-span-5">
              <RevealOnScroll direction="left" duration={1000}>
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">{t.scope.eyebrow}</span>
                  <h2 className="text-3xl font-bold tracking-tight text-text-primary">{t.scope.title}</h2>
                  <div className="w-12 h-1 bg-brand rounded" />

                  <div className="space-y-2.5">
                    {t.scope.fields.map((field) => (
                      <div key={field.label} className="border-b border-border/40 pb-2 flex justify-between items-center text-xs">
                        <span className="text-text-secondary font-bold uppercase tracking-wider">{field.label}</span>
                        <span className="text-text-primary font-semibold">{field.value}</span>
                      </div>
                    ))}
                    <div className="border-b border-border/40 pb-2 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">{t.scope.authorshipLabel}</span>
                      <span className="text-brand-strong font-bold">
                        <AuthorLink name={AUTHORS.lucas.name} href={AUTHORS.lucas.linkedin} /> {t.footer.line1Middle} <AuthorLink name={AUTHORS.najme.name} href={AUTHORS.najme.linkedin} />
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right side: Specialized Team Roles */}
            <div className="lg:col-span-7">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-text-primary">{t.scope.competenciesTitle}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t.scope.competenciesDesc}
                  </p>

                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {t.scope.competencies.map((role) => (
                      <span
                        key={role}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-xs text-text-primary font-semibold hover:border-brand/40 transition-all select-none hover:shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* 15. APRENDIZADOS, LIMITES E PRÓXIMOS PASSOS */}
      <section id="aprendizados" className="py-24 bg-surface/10 border-t border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Core learning text */}
            <div className="lg:col-span-5">
              <RevealOnScroll direction="left" duration={1000}>
                <div className="space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">{t.learnings.eyebrow}</span>
                  <h2 className="text-3xl font-bold tracking-tight text-text-primary">{t.learnings.title}</h2>
                  <div className="w-12 h-1 bg-brand rounded" />
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t.learnings.description}
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Key limits and next steps */}
            <div className="lg:col-span-7">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.learnings.cards.map((card) => (
                    <div key={card.title} className="bg-surface border border-border p-5 rounded-2xl space-y-2">
                      <span className="text-[10px] font-bold text-brand uppercase tracking-wider">{card.tag}</span>
                      <h4 className="font-bold text-sm text-text-primary">{card.title}</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>

        </div>
      </section>

      {/* 16. VALOR ESTRATÉGICO PARA A INSTITUIÇÃO */}
      <section id="valor" className="py-24 bg-surface/30 border-y border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up" duration={800}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">{t.value.eyebrow}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-5">{t.value.title}</h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-sm">
                {t.value.description}
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll direction="up" duration={1200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.value.metrics.map((metric) => (
                <div key={metric.title} className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-brand-soft/40 transition-all duration-300">
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-brand uppercase tracking-wider">{metric.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {metric.desc}
                    </p>
                  </div>
                  <span className="text-[10px] text-brand-strong/80 italic mt-6 inline-block w-fit font-semibold">
                    {metric.tag}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 17. PROTÓTIPO COMPLETO */}
      <section className="py-24 max-w-5xl mx-auto px-6 relative transition-all duration-300">
        <div className="bg-gradient-to-b from-surface to-page border border-border rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <RevealOnScroll direction="up" duration={800}>
              <span className="text-[9px] font-bold text-brand uppercase tracking-widest bg-brand/10 border border-brand/20 rounded-full px-3 py-1 inline-block">
                {t.prototypeSection.badge}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary mt-2">
                {t.prototypeSection.title}
              </h2>
              <p className="text-xs text-text-secondary max-w-xl mx-auto leading-relaxed mt-2">
                {t.prototypeSection.description}
              </p>
            </RevealOnScroll>

            {/* Mockup Mobile de iPhone 16 - Video Tour */}
            <div className="flex justify-center my-8">
              <MockupReveal3D>
                <div className="w-[280px] max-w-full aspect-[7/13] bg-black rounded-[42px] border-4 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.01]">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-center border border-gray-900">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                </div>

                {/* Tela Interna - Vídeo de navegação do protótipo, troca conforme o tema */}
                <div className="absolute inset-0">
                  <video
                    key={theme}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={theme === "dark" ? prototypeDarkVideo : prototypeLightVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </MockupReveal3D>
          </div>

            <RevealOnScroll direction="up" delay={200} duration={800}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://projeto-uniedu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl text-xs font-bold tracking-wide hover:bg-opacity-95 shadow-lg shadow-brand/20 transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  {t.prototypeSection.ctaOpen}
                  <Smartphone className="w-4 h-4" />
                </a>
                <a
                  href="#solucao-rapida"
                  className="w-full sm:w-auto px-8 py-4 bg-surface text-text-primary border border-border rounded-2xl text-xs font-bold tracking-wide hover:bg-surface-elevated transition-all active:scale-98"
                >
                  {t.prototypeSection.ctaBack}
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 18. FECHAMENTO & FOOTER */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center relative overflow-hidden">
        <RevealOnScroll direction="up" duration={1000}>
          <div className="bg-gradient-to-b from-surface to-page border border-border rounded-[2.5rem] p-10 md:p-16 relative z-10 transition-all duration-300">
            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-8 max-w-3xl mx-auto leading-tight transition-all duration-300 text-text-primary">
              {t.closing.quote}
            </h2>

            <div className="w-16 h-0.5 bg-brand mx-auto mb-6 rounded-full" />
            <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">
              {t.closing.credit} · {AUTHORS.lucas.name} {t.footer.line1Middle} {AUTHORS.najme.name}
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface py-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-3">
          <p className="text-xs text-text-secondary leading-relaxed">
            {t.footer.line1Prefix} <span className="font-semibold text-text-primary">{AUTHORS.lucas.name}</span> {t.footer.line1Middle} <span className="font-semibold text-text-primary">{AUTHORS.najme.name}</span> {t.footer.line1Program} <span className="font-semibold text-brand-strong">UX Unicórnio</span>, {t.footer.line1ConductedBy} <span className="font-semibold text-text-primary">Leandro Rezende</span>.
          </p>
          <p className="text-[10px] text-text-secondary/70">
            {t.footer.line2}
          </p>
          <p className="text-[10px] text-text-secondary/80 flex flex-wrap items-center justify-center gap-1.5 pt-1">
            <span className="font-semibold">{t.footer.linkedinLabel}</span>
            <AuthorLink name={AUTHORS.lucas.name} href={AUTHORS.lucas.linkedin} />
            <span aria-hidden="true">·</span>
            <AuthorLink name={AUTHORS.najme.name} href={AUTHORS.najme.linkedin} />
          </p>
        </div>
      </footer>

    </div>
  );
}
