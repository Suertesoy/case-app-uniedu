import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  AlertCircle,
  UserCheck,
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

  // Scroll to top on load when no hash anchor is present
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

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
                Case Study
              </span>
            </div>
            <span className="text-[10px] text-text-secondary uppercase tracking-widest mt-0.5 hidden sm:inline">
              UX/UI · Product Strategy · EdTech
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
            <a href="#solucao-rapida" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Solução</a>
            <a href="#problema" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Desafio</a>
            <a href="#processo" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Processo</a>
            <a href="#pesquisa" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Pesquisa</a>
            <a href="#validacao" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Validação</a>
            <a href="#produto" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Produto</a>
            <a href="#estrategia" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Métricas</a>
            <a href="#design-system" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Design System</a>
            <a href="#implementacao" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Implementação</a>
            <a href="#valor" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Valor</a>
            <a href="#escopo" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Maturidade</a>
          </nav>

          {/* CTAs and Toggle */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-surface border border-border text-text-secondary hover:text-brand-strong transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center hover:bg-surface-elevated"
              aria-label="Alternar Tema"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <a
              href="https://projeto-uniedu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand text-white rounded-xl text-xs font-bold tracking-wide hover:bg-opacity-90 active:scale-95 transition-all flex items-center gap-1.5 shadow-lg shadow-brand/25 border border-brand"
            >
              Ver Protótipo
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8 shadow-sm transition-all duration-300">
              <span className="text-xs font-bold text-text-primary">Autores:</span>
              <span className="text-xs font-extrabold text-brand-strong">Lucas Cabral</span>
              <span className="text-text-secondary text-xs">•</span>
              <span className="text-xs font-extrabold text-brand-strong">Najme Simon Alé</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={200} duration={900}>
            <h1 key={heroAnimKey} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.3] mb-6 pb-3 transition-all duration-300" aria-label="Gamificação do aprendizado para transformar constância em progresso real">
              {/* Desktop/Tablet version */}
              <span className="hidden md:block" aria-hidden="true">
                <span className="hero-dark-line hero-dark-1">Gamificação do aprendizado para</span>
                <span className="hero-dark-line hero-dark-2">transformar</span>
                <span className="hero-gradient-line hero-gradient-1">
                  constância em progresso real
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
                <span className="hero-dark-line hero-mob-dark-1">Gamificação do</span>
                <span className="hero-dark-line hero-mob-dark-2">aprendizado para</span>
                <span className="hero-dark-line hero-mob-dark-3">transformar</span>
                <span className="hero-gradient-line hero-mob-grad-1">constância em</span>
                <span className="hero-gradient-line hero-mob-grad-2">
                  progresso real
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
              {["Pesquisa", "Estratégia de Produto", "UX/UI Design", "Prototipação", "Validação", "Implementação"].map((item) => (
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
              Figma · FigJam · Notion · Google Workspace · ChatGPT · Gemini · Claude · OBS Studio
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={500} duration={1000}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#solucao-rapida"
                className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl text-sm font-bold tracking-wide hover:bg-opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/25"
              >
                Ver solução proposta
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://projeto-uniedu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-surface text-text-primary border border-border rounded-2xl text-sm font-bold tracking-wide hover:bg-surface-elevated active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                Testar protótipo
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
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">Visão Geral</span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                    A Solução em Poucos Segundos
                  </h2>
                  <div className="w-12 h-1 bg-brand rounded" />
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Antes de entrar no processo, veja o que a solução propõe: uma experiência de aprendizagem que combina progresso visível, plano de estudos, recompensas, comunidade e suporte no mesmo ecossistema.
                  </p>

                  {/* Highlights Rápidos */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-text-primary">Progresso visível desde a home</h4>
                        <p className="text-[10px] text-text-secondary mt-0.5">O estudante entende rapidamente o que já avançou e o que ainda precisa fazer.</p>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-text-primary">Plano de estudos ajustável</h4>
                        <p className="text-[10px] text-text-secondary mt-0.5">A rotina de estudos pode ser adaptada ao tempo disponível de cada pessoa.</p>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-text-primary">Recompensas com valor percebido</h4>
                        <p className="text-[10px] text-text-secondary mt-0.5">O progresso deixa de ser apenas uma medalha visual e passa a gerar uma sensação mais concreta de recompensa.</p>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-text-primary">Suporte inteligente durante o estudo</h4>
                        <p className="text-[10px] text-text-secondary mt-0.5">O aluno consegue pedir ajuda sem sair do contexto da aula.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://projeto-uniedu.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand text-white rounded-xl text-xs font-bold tracking-wide hover:bg-opacity-95 shadow-md shadow-brand/10 transition-all active:scale-98"
                    >
                      Testar protótipo completo
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
                <span className="text-xs font-bold uppercase tracking-widest text-brand">Contexto de Produto</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  O Desafio Real: Mais do que um Design Visual
                </h2>
                <div className="w-12 h-1 bg-brand rounded" />
                <p className="text-text-secondary leading-relaxed text-sm">
                  O UNIEDU não foi pensado como um redesenho visual isolado. A proposta nasceu da análise de dificuldades comuns no ensino a distância, como perda de ritmo, baixa percepção de evolução, isolamento e recompensas pouco significativas.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <RevealOnScroll direction="up" delay={0} duration={800}>
              <div className="p-5 rounded-2xl bg-surface border border-border/80 hover:border-brand/25 hover:shadow-lg hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 motion-reduce:hover:translate-y-0">
                <span className="text-xs font-bold text-brand">Fricção 01</span>
                <h4 className="font-bold text-sm text-text-primary mt-2">Perda de ritmo semanal</h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Quando a rotina quebra, muitos estudantes têm dificuldade para retomar o estudo. Metas rígidas e pouco adaptáveis aumentam a sensação de atraso.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={150} duration={800}>
              <div className="p-5 rounded-2xl bg-surface border border-border/80 hover:border-brand/25 hover:shadow-lg hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 motion-reduce:hover:translate-y-0">
                <span className="text-xs font-bold text-brand">Fricção 02</span>
                <h4 className="font-bold text-sm text-text-primary mt-2">Baixa percepção de evolução</h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Em sessões curtas de estudo, o progresso pode parecer invisível. Isso reduz a sensação de avanço e enfraquece a motivação para continuar.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={300} duration={800}>
              <div className="p-5 rounded-2xl bg-surface border border-border/80 hover:border-brand/25 hover:shadow-lg hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 motion-reduce:hover:translate-y-0">
                <span className="text-xs font-bold text-brand">Fricção 03</span>
                <h4 className="font-bold text-sm text-text-primary mt-2">Sentimento de isolamento</h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  No ensino online, a falta de interação e suporte no momento certo pode fazer o aluno travar, adiar dúvidas ou abandonar a atividade.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={450} duration={800}>
              <div className="p-5 rounded-2xl bg-surface border border-border/80 hover:border-brand/25 hover:shadow-lg hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 motion-reduce:hover:translate-y-0">
                <span className="text-xs font-bold text-brand">Fricção 04</span>
                <h4 className="font-bold text-sm text-text-primary mt-2">Recompensas sem valor percebido</h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Pontos e medalhas ajudam no início, mas perdem força quando não se conectam a benefícios claros ou ao objetivo real do estudante.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Referência discreta de apoio às fricções */}
        <p className="mt-6 text-[10px] text-text-secondary leading-relaxed">
          <span className="font-semibold text-text-primary/70">Base de apoio:</span> estudos sobre evasão em EAD, presença social em ambientes online e gamificação aplicada ao aprendizado —{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9197481/" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-2 hover:text-brand-strong transition-colors">Shaikh &amp; Asif, 2022</a>,{" "}
          <a href="https://educationaltechnologyjournal.springeropen.com/articles/10.1186/s41239-024-00450-9" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-2 hover:text-brand-strong transition-colors">Rahmani et al., 2024</a>,{" "}
          <a href="https://www.irrodl.org/index.php/irrodl/article/view/2123/3349" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-2 hover:text-brand-strong transition-colors">Richardson et al., 2015</a>{" "}
          e{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10448467/" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-2 hover:text-brand-strong transition-colors">Ratinho &amp; Martins, 2023</a>.
        </p>

        {/* Pergunta de Oportunidade (How Might We) */}
        <RevealOnScroll direction="up" delay={200} duration={1000}>
          <div className="mt-16 bg-gradient-to-r from-surface to-surface-elevated border border-brand/20 rounded-3xl p-8 md:p-14 relative overflow-hidden transition-all duration-300 shadow-md flex justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 dark:bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 max-w-[780px] md:max-w-[860px] text-center py-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-strong px-2.5 py-1 rounded-full bg-brand/10 border border-brand/20 mb-5 inline-block">
                Pergunta de Oportunidade (How Might We)
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary leading-snug">
                "Como poderíamos criar uma experiência de aprendizagem que recompense o esforço real do aluno e transforme constância em hábito?"
              </h3>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 4b. NOTA METODOLÓGICA — COMO CONDUZIMOS O PROCESSO (DOUBLE DIAMOND VISUAL) */}
      <section id="processo" className="py-16 max-w-4xl mx-auto px-6 text-center transition-all duration-300">
        <RevealOnScroll direction="up" duration={800}>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand">Como conduzimos o processo</span>
          <p className="text-text-secondary text-sm leading-relaxed mt-3 max-w-xl mx-auto">
            O processo foi guiado pela lógica do Double Diamond, alternando investigação, síntese, exploração e refinamento até chegar à versão final em alta fidelidade.
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
            <div>
              <p className="text-xs font-bold text-text-primary">Descobrir</p>
              <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                Survey, entrevistas e análise de contexto sobre dores em cursos online.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-text-primary">Definir</p>
              <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                Síntese dos achados em personas, jornadas e oportunidades de produto.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-text-primary">Desenvolver</p>
              <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                Wireframes, exploração de fluxos e primeira versão em alta fidelidade.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-text-primary">Entregar e refinar</p>
              <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                Testes de usabilidade, ajustes de interface e versão final consolidada.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 5. PESQUISA E DESCOBERTA */}
      <section id="pesquisa" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden transition-all duration-300">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand/3 dark:bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center mb-16">
          <RevealOnScroll direction="up" duration={800}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Fase de Descoberta</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-4">Pesquisa e Evidências Comportamentais</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm">
              Decisões de design baseadas em dados qualitativos, benchmarking analítico e escuta real das dores de estudantes.
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
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Método 01</span>
                  <h3 className="text-xl font-bold text-text-primary">Desk Research</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Análise de relatórios de mercado em EdTech e pesquisas comportamentais sobre o aprendizado a distância.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
            <div className="md:col-span-8">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="bg-surface border border-border p-6 rounded-2xl space-y-4">
                  <p className="text-xs text-text-secondary leading-relaxed">
                    A pesquisa de apoio indicou que a evasão em cursos online costuma estar relacionada a uma combinação de fatores, como motivação, satisfação, suporte, carga de estudos, sensação de isolamento e dificuldade de manter uma rotina consistente.
                  </p>
                  <div className="bg-brand/5 border border-brand/10 p-4 rounded-xl flex gap-3 text-xs text-brand-strong font-semibold">
                    <AlertCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Indicador chave:</strong> fatores como motivação, suporte, rotina, presença social e carga de estudos aparecem de forma recorrente em pesquisas sobre permanência e evasão no ensino online.
                    </span>
                  </div>
                  <p className="text-[10px] text-text-secondary italic">
                    Fonte de apoio: Shaikh &amp; Asif, 2022; Rahmani et al., 2024.
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
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Método 02</span>
                  <h3 className="text-xl font-bold text-text-primary">Benchmark Qualitativo</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Mapeamento das referências de gamificação e hábitos de consumo de dados em aplicativos consolidados.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
            <div className="md:col-span-8">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "Duolingo", obs: "Streaks visuais e lembretes de continuidade.", learn: "A recorrência fica mais clara quando o progresso é visível no dia a dia.", impact: "Inspirou a visualização de dias ativos e metas de foco." },
                      { name: "SoloLearn", obs: "Conteúdos curtos e exercícios práticos.", learn: "Sessões menores reduzem a barreira de retomada.", impact: "Ajudou a orientar a ideia de microaulas e avanço incremental." },
                      { name: "Kahoot", obs: "Dinâmica competitiva e feedback imediato.", learn: "Competição pode engajar, mas também pode pressionar perfis mais reservados.", impact: "Reforçou a decisão de tornar rankings opcionais." },
                      { name: "Udemy", obs: "Barras de progresso e conclusão por curso.", learn: "O progresso linear ajuda, mas pode não ser suficiente para manter o hábito.", impact: "Reforçou a busca por recompensas mais conectadas ao esforço." },
                      { name: "Alura", obs: "Comunidade e fórum como apoio ao aprendizado.", learn: "A dúvida precisa ser acolhida sem quebrar o fluxo de estudo.", impact: "Inspirou suporte e anotações no contexto do player." }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-surface border border-border p-5 rounded-2xl space-y-2 hover:border-brand-soft/30 transition-all duration-300">
                        <h4 className="font-bold text-sm text-text-primary flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                          {item.name}
                        </h4>
                        <div className="text-[10px] text-text-secondary space-y-1.5">
                          <p><strong>Observação:</strong> {item.obs}</p>
                          <p><strong>Aprendizado:</strong> {item.learn}</p>
                          <p className="text-brand-strong font-semibold"><strong>Como influenciou:</strong> {item.impact}</p>
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
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Método 03</span>
                  <h3 className="text-xl font-bold text-text-primary">Entrevistas em Profundidade</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Investigação qualitativa individual com 8 estudantes ativos de plataformas online.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
            <div className="md:col-span-8">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="space-y-6">
                  <p className="text-xs text-text-secondary leading-relaxed">
                    As entrevistas ajudaram a diferenciar o que parecia falta de motivação do que, na prática, era falta de estrutura, feedback e continuidade no processo de aprendizado.
                  </p>

                  {/* Grid of interview quotes and audio placeholders */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-surface border border-border p-5 rounded-2xl flex flex-col justify-between italic text-text-primary text-xs relative overflow-hidden">
                      <span className="text-3xl text-brand/20 font-serif leading-none absolute top-2 left-2">“</span>
                      <p className="pl-6 pt-3 relative z-10 leading-relaxed mb-4">
                        "Estudar online dá sensação de solidão. Se eu travo em um exercício, costumo abandonar a aula para não acumular frustração."
                      </p>
                      <span className="text-[9px] text-text-secondary font-bold not-italic uppercase tracking-wider">
                        Participante 03 · 22 anos
                      </span>
                    </div>

                    <div className="bg-surface border border-border p-5 rounded-2xl flex flex-col justify-between italic text-text-primary text-xs relative overflow-hidden">
                      <span className="text-3xl text-brand/20 font-serif leading-none absolute top-2 left-2">“</span>
                      <p className="pl-6 pt-3 relative z-10 leading-relaxed mb-4">
                        "Gostaria de ganhar algo real pelos meus pontos. Acumular medalhas virtuais no app não muda nada na minha vida."
                      </p>
                      <span className="text-[9px] text-text-secondary font-bold not-italic uppercase tracking-wider">
                        Participante 06 · 28 anos
                      </span>
                    </div>
                  </div>

                  {/* Placeholder de evidência qualitativa / gravação */}
                  <div className="bg-surface-elevated border border-border rounded-2xl p-4 flex items-center justify-between transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-text-primary">Gravações de Áudio das Entrevistas</p>
                        <p className="text-[9px] text-text-secondary mt-0.5">Sintetizado para validação de persona e jornada.</p>
                      </div>
                    </div>
                    <span className="text-[9px] text-text-secondary uppercase font-bold tracking-wider bg-surface px-2.5 py-1 rounded border border-border">
                      [Placeholder de gravação]
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PERSONA SOFIA */}
      <RevealOnScroll direction="up" duration={1000}>
        <PersonaCard />
      </RevealOnScroll>

      {/* 7. JORNADA DO USUÁRIO */}
      <RevealOnScroll direction="up" duration={1000}>
        <JourneyMap />
      </RevealOnScroll>

      {/* 7b. TENSÕES DE PESQUISA */}
      <RevealOnScroll direction="up" duration={1000}>
        <ResearchTensions />
      </RevealOnScroll>

      {/* 8. PROCESSO DE EVOLUÇÃO DO DESIGN */}
      <RevealOnScroll direction="up" duration={1000}>
        <ProcessEvolutionCarousel />
      </RevealOnScroll>

      {/* 9. VALIDAÇÃO COM USUÁRIOS */}
      <section id="validacao" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Text and stats side */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="left" duration={1000}>
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand">Métricas de Usabilidade</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Validação e Testes com Usuários</h2>
                <div className="w-12 h-1 bg-brand rounded" />
                <p className="text-text-secondary leading-relaxed text-sm">
                  Conduzimos testes monitorados com 5 participantes que já tinham familiaridade com cursos online na área de UX/UI. O objetivo foi observar a compreensão dos fluxos principais, identificar pontos de atrito e avaliar se a navegação sustentava a proposta do produto.
                </p>

                <div className="bg-surface border border-border rounded-2xl p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-text-secondary leading-relaxed">
                    <strong>Principais aprendizados:</strong> os fluxos de plano de estudos, aula, briefing e loja foram compreendidos com facilidade. As maiores dúvidas apareceram nas ações de comunidade e, principalmente, no resgate de pontos das conquistas. A análise mostrou que parte do atrito estava na formulação da tarefa, não apenas na interface, reforçando a importância de validar também a linguagem usada nos testes.
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
                  {[
                    {
                      label: "Tarefa 01",
                      titulo: "Alterar plano de estudos",
                      resultado: "100% de sucesso",
                      cor: "text-green-600 dark:text-green-400",
                      texto: "Fluxo compreendido pelos participantes, sem bloqueios relevantes durante a tarefa.",
                    },
                    {
                      label: "Tarefa 02",
                      titulo: "Assistir uma aula",
                      resultado: "100% de sucesso",
                      cor: "text-green-600 dark:text-green-400",
                      texto: "A entrada na aula e a continuidade do estudo foram compreendidas com facilidade.",
                    },
                    {
                      label: "Tarefa 03",
                      titulo: "Visualizar briefing do case",
                      resultado: "100% de sucesso",
                      cor: "text-green-600 dark:text-green-400",
                      texto: "Os participantes localizaram o briefing e entenderam sua relação com a jornada de estudos.",
                    },
                    {
                      label: "Tarefa 04",
                      titulo: "Realizar compra na loja",
                      resultado: "100% de sucesso",
                      cor: "text-green-600 dark:text-green-400",
                      texto: "A lógica de compra/resgate na loja foi concluída sem bloqueios críticos.",
                    },
                    {
                      label: "Tarefa 05",
                      titulo: "Fazer publicação na comunidade",
                      resultado: "Sucesso com atritos",
                      cor: "text-amber-600 dark:text-amber-400",
                      texto: "Parte dos participantes precisou de mais orientação para concluir a ação, indicando oportunidade de melhorar rótulos e hierarquia do fluxo.",
                    },
                    {
                      label: "Tarefa 06",
                      titulo: "Resgatar pontos das conquistas",
                      resultado: "Maior ponto de atenção",
                      cor: "text-red-600 dark:text-red-400",
                      texto: "Foi a tarefa com mais dificuldade. Na análise posterior, identificamos que a própria formulação da tarefa influenciou o desempenho, tornando a intenção menos clara para os participantes.",
                    },
                  ].map((card) => (
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

                {/* Registros de validação */}
                <div className="bg-surface-elevated border border-border rounded-2xl p-4 flex items-center justify-between gap-3 flex-wrap transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary">Registros de validação</p>
                      <p className="text-[9px] text-text-secondary mt-0.5">Anotações e tempos de execução foram usados para identificar padrões de compreensão, dúvidas recorrentes e oportunidades de ajuste na interface e na formulação das tarefas.</p>
                    </div>
                  </div>
                  <span className="text-[9px] text-text-secondary uppercase font-bold tracking-wider bg-surface px-2.5 py-1 rounded border border-border">
                    Evidência de teste
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* 10. DOR -> INSIGHT -> SOLUÇÃO EM TELA */}
      <RevealOnScroll direction="up" duration={1000}>
        <ProductShowcase />
      </RevealOnScroll>

      {/* 11. MÉTRICAS DE SUCESSO PROPOSTAS */}
      <section id="estrategia" className="py-24 bg-surface/20 border-y border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up" duration={800}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">Métricas de Sucesso</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-5">Métricas de Sucesso Propostas</h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-sm">
                Para avaliar a efetividade da solução, as métricas foram pensadas a partir de dois eixos: impacto educacional e sustentabilidade institucional. A intenção não é medir apenas uso, mas entender se o produto ajuda estudantes a manter constância, avançar no curso e gerar sinais úteis para melhoria contínua da experiência.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Eixo 01: Impacto Educacional */}
            <RevealOnScroll direction="left" delay={100} duration={1000}>
              <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 shadow-md h-full">
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
                <span className="text-[9px] font-bold text-brand uppercase tracking-widest bg-brand/10 border border-brand/20 px-3 py-1 rounded-full mb-6 inline-block">
                  Eixo 01 · Impacto Educacional
                </span>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">1</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Continuidade de estudo</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Frequência semanal, retorno ao app, sequência de dias estudando e retomada após pausas.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">2</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Progressão no curso</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Aulas concluídas, módulos avançados, cases iniciados e concluídos, percentual da jornada.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">3</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Engajamento com gamificação e comunidade</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Conquistas desbloqueadas, pontos acumulados e resgatados, publicações e interações em desafios.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">4</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Uso do suporte com IA</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Dúvidas enviadas ao assistente, temas mais recorrentes e encaminhamentos para monitoria.</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Eixo 02: Sustentabilidade Institucional */}
            <RevealOnScroll direction="right" delay={200} duration={1000}>
              <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 shadow-md h-full">
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
                <span className="text-[9px] font-bold text-brand uppercase tracking-widest bg-brand/10 border border-brand/20 px-3 py-1 rounded-full mb-6 inline-block">
                  Eixo 02 · Sustentabilidade Institucional
                </span>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">1</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Retenção e evasão</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Alunos ativos ao longo do tempo, queda de frequência e sinais de risco de abandono por turma ou etapa.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">2</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Reengajamento</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Retomada após pausa, resposta a lembretes e conclusão de módulos incompletos.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">3</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Percepção de valor do curso</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Satisfação com a jornada, sensação de progresso e intenção de continuar ou recomendar.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">4</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Eficiência para melhoria do curso</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Dúvidas coletadas pela IA, padrões de dificuldade por módulo e insumos para professores e monitores.</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>

          <RevealOnScroll direction="up" delay={300} duration={1000}>
            <p className="text-[11px] text-text-secondary italic text-center max-w-2xl mx-auto mt-8">
              Essas métricas seriam observadas a partir de eventos de uso, histórico de dúvidas no suporte com IA, acompanhamento da monitoria e análise de comportamento ao longo da jornada do estudante.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 12. DESIGN SYSTEM */}
      <DesignSystemSection theme={theme} setTheme={setTheme} />

      {/* 13. DO FIGMA AO PRODUTO NAVEGÁVEL */}
      <section id="implementacao" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Implementação e Handoff Vivo</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-5">Do Figma ao Produto Navegável</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm">
              Depois da validação, o projeto não ficou restrito a telas estáticas ou a um handoff tradicional. A solução foi levada para uma versão navegável em ambiente web, aproximando o protótipo de um produto real e permitindo testar fluxos, tema, componentes e narrativa com mais fidelidade.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100} duration={1000}>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface border border-border hover:border-brand/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-text-primary mb-2">Protótipo além do Figma</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                As telas deixaram de ser apenas uma representação visual e passaram a funcionar em uma experiência navegável, com interações, estados e tema claro/escuro.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border hover:border-brand/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-text-primary mb-2">Design com viabilidade técnica</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                A implementação ajudou a validar decisões de layout, responsividade, componentes e comportamento antes de um handoff definitivo para desenvolvimento.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border hover:border-brand/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-text-primary mb-2">Deploy como parte da entrega</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                A publicação em ambiente web tornou o case mais fácil de apresentar, testar e compartilhar, aproximando a entrega de uma experiência real de produto.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="fade" delay={200} duration={1000}>
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {["React", "Vite", "Tailwind CSS", "Vercel", "Claude Code", "Antigravity", "ChatGPT", "Gemini"].map((tech) => (
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

      {/* 14. VALOR ESTRATÉGICO PARA A INSTITUIÇÃO */}
      <section id="valor" className="py-24 bg-surface/30 border-y border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up" duration={800}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">Visão Comercial</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-5">Valor Estratégico para a Instituição</h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-sm">
                Mais do que uma experiência agradável ao aluno, a solução foi desenhada para impactar as métricas institucionais e operacionais de instituições de ensino.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll direction="up" duration={1200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Metric 1 */}
              <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-brand-soft/40 transition-all duration-300">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-brand uppercase tracking-wider">01. Retenção de Alunos</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    A quebra sistemática das barreiras de desânimo por meio de metas flexíveis diminui drasticamente a taxa de evasão e trancamento de matrículas.
                  </p>
                </div>
                <span className="text-[10px] text-brand-strong/80 italic mt-6 inline-block w-fit font-semibold">
                  Indicador a validar em nova rodada
                </span>
              </div>

              {/* Metric 2 */}
              <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-brand-soft/40 transition-all duration-300">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-brand uppercase tracking-wider">02. Engajamento Diário</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    As mecânicas de consistência (streaks) aumentam a recorrência de acessos e a minutagem ativa semanal de estudos no aplicativo.
                  </p>
                </div>
                <span className="text-[10px] text-brand-strong/80 italic mt-6 inline-block w-fit font-semibold">
                  Métrica sugerida para acompanhamento
                </span>
              </div>

              {/* Metric 3 */}
              <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-brand-soft/40 transition-all duration-300">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-brand uppercase tracking-wider">03. Conclusão de Módulos</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Videoaulas fracionadas e notas contextuais elevam o índice de término de disciplinas, aumentando o sucesso acadêmico geral.
                  </p>
                </div>
                <span className="text-[10px] text-brand-strong/80 italic mt-6 inline-block w-fit font-semibold">
                  Hipótese de impacto
                </span>
              </div>

              {/* Metric 4 */}
              <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-brand-soft/40 transition-all duration-300">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-brand uppercase tracking-wider">04. Percepção de Evolução</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Os prêmios na loja tangibilizam o esforço diário do aluno em benefícios de carreira, gerando maior percepção do custo-benefício da faculdade.
                  </p>
                </div>
                <span className="text-[10px] text-brand-strong/80 italic mt-6 inline-block w-fit font-semibold">
                  Ponto de acompanhamento institucional
                </span>
              </div>

              {/* Metric 5 */}
              <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-brand-soft/40 transition-all duration-300">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-brand uppercase tracking-wider">05. Recomendação do Curso</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Um aplicativo dinâmico e gamificado estimula recomendações espontâneas de alunos ativos em suas redes sociais e locais de trabalho.
                  </p>
                </div>
                <span className="text-[10px] text-brand-strong/80 italic mt-6 inline-block w-fit font-semibold">
                  Indicador a validar em nova rodada
                </span>
              </div>

              {/* Metric 6 */}
              <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-brand-soft/40 transition-all duration-300">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-brand uppercase tracking-wider">06. Comunidade Ativa</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    O ecossistema cooperativo estimula que alunos tirem dúvidas entre si, aliviando o fluxo de chamados operacionais e suporte pedagógico.
                  </p>
                </div>
                <span className="text-[10px] text-brand-strong/80 italic mt-6 inline-block w-fit font-semibold">
                  Métrica sugerida para acompanhamento
                </span>
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 15. PROTÓTIPO COMPLETO */}
      <section className="py-24 max-w-5xl mx-auto px-6 relative transition-all duration-300">
        <div className="bg-gradient-to-b from-surface to-page border border-border rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <RevealOnScroll direction="up" duration={800}>
              <span className="text-[9px] font-bold text-brand uppercase tracking-widest bg-brand/10 border border-brand/20 rounded-full px-3 py-1 inline-block">
                Navegação Funcional
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary mt-2">
                Experimente a Jornada Completa do App
              </h2>
              <p className="text-xs text-text-secondary max-w-xl mx-auto leading-relaxed mt-2">
                Depois de entender o problema, a pesquisa e as decisões por trás da solução, explore o protótipo completo e veja como as funcionalidades se conectam em uma jornada única.
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
                  Abrir protótipo navegável
                  <Smartphone className="w-4 h-4" />
                </a>
                <a
                  href="#solucao-rapida"
                  className="w-full sm:w-auto px-8 py-4 bg-surface text-text-primary border border-border rounded-2xl text-xs font-bold tracking-wide hover:bg-surface-elevated transition-all active:scale-98"
                >
                  Voltar à Solução
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 16. ESCOPO, AUTORIA E PAPÉIS DO TIME (MATURIDADE E EXECUÇÃO) */}
      <section id="escopo" className="py-16 bg-surface/20 border-t border-border relative transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Left side: Project metadata details */}
            <div className="lg:col-span-5">
              <RevealOnScroll direction="left" duration={1000}>
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">Maturidade e Execução</span>
                  <h2 className="text-3xl font-bold tracking-tight text-text-primary">Ficha de Entrega do Projeto</h2>
                  <div className="w-12 h-1 bg-brand rounded" />

                  <div className="space-y-2.5">
                    <div className="border-b border-border/40 pb-2 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">Tipo de Produto</span>
                      <span className="text-text-primary font-semibold">Mobile Application (iOS/Android)</span>
                    </div>
                    <div className="border-b border-border/40 pb-2 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">Área do Case</span>
                      <span className="text-text-primary font-semibold">EdTech / Ensino a Distância</span>
                    </div>
                    <div className="border-b border-border/40 pb-2 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">Duração</span>
                      <span className="text-text-primary font-semibold">Aproximadamente 8 meses (UX Research a Validação)</span>
                    </div>
                    <div className="border-b border-border/40 pb-2 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">Entrega Técnica</span>
                      <span className="text-text-primary font-semibold">Protótipo navegável + Validação de testes</span>
                    </div>
                    <div className="border-b border-border/40 pb-2 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">Autoria e Execução</span>
                      <span className="text-brand-strong font-bold">Lucas Cabral e Najme Simon Alé</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right side: Specialized Team Roles */}
            <div className="lg:col-span-7">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-text-primary">Atuação e Competências de Design</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Nossa atuação foi do entendimento qualitativo à arquitetura técnica, organizando o trabalho nas seguintes competências estratégicas.
                  </p>

                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {[
                      "UX Research",
                      "UX Strategy",
                      "UX Writing",
                      "UI Design",
                      "Prototipação",
                      "IA aplicada ao Design"
                    ].map((role, idx) => (
                      <span
                        key={idx}
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

      {/* 17. APRENDIZADOS, LIMITES E PRÓXIMOS PASSOS */}
      <section id="aprendizados" className="py-24 bg-surface/10 border-t border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Core learning text */}
            <div className="lg:col-span-5">
              <RevealOnScroll direction="left" duration={1000}>
                <div className="space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">Reflexão Profissional</span>
                  <h2 className="text-3xl font-bold tracking-tight text-text-primary">Maturidade do Processo</h2>
                  <div className="w-12 h-1 bg-brand rounded" />
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Em vez de encerrar o projeto em um handoff estático, usamos as ferramentas que dominávamos para aproximar a solução de um produto viável, navegável e mais fácil de comunicar para o time de desenvolvimento.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Key limits and next steps */}
            <div className="lg:col-span-7">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-surface border border-border p-5 rounded-2xl space-y-2">
                    <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Amostragem</span>
                    <h4 className="font-bold text-sm text-text-primary">Expansão de Pesquisa</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Mais rodadas de entrevistas com estudantes de outras áreas fora de UX fortaleceria a validação comportamental.
                    </p>
                  </div>

                  <div className="bg-surface border border-border p-5 rounded-2xl space-y-2">
                    <span className="text-[10px] font-bold text-brand uppercase tracking-wider">UX Writing</span>
                    <h4 className="font-bold text-sm text-text-primary">Refinamento de Microcopy</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Refinar as notificações push e mensagens de streaks ativos para calibrar a taxa ideal de conversão de abertura do app.
                    </p>
                  </div>

                  <div className="bg-surface border border-border p-5 rounded-2xl space-y-2">
                    <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Customização</span>
                    <h4 className="font-bold text-sm text-text-primary">Loja de Recompensas</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Integrar novos tipos de prêmios regionais e parcerias estudantis para personalizar o catálogo conforme o curso.
                    </p>
                  </div>

                  <div className="bg-surface border border-border p-5 rounded-2xl space-y-2">
                    <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Handoff</span>
                    <h4 className="font-bold text-sm text-text-primary">IA e Código Real</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Aproximar o Design System do desenvolvimento real, implementando tokens CSS válidos para acelerar a engenharia.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

        </div>
      </section>

      {/* 18. FECHAMENTO & FOOTER */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center relative overflow-hidden">
        <RevealOnScroll direction="up" duration={1000}>
          <div className="bg-gradient-to-b from-surface to-page border border-border rounded-[2.5rem] p-10 md:p-16 relative z-10 transition-all duration-300">
            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-8 max-w-3xl mx-auto leading-tight transition-all duration-300 text-text-primary">
              "UNIEDU propõe uma experiência de aprendizagem mais clara, motivadora e acompanhável, conectando progresso, recompensa, suporte, comunidade e estratégia de produto."
            </h2>

            <div className="w-16 h-0.5 bg-brand mx-auto mb-6 rounded-full" />
            <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">
              UX/UI Case Study · Lucas Cabral e Najme Simon Alé
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface py-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-text-secondary">
            <span>•</span>
            <span>EdTech 2026</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
