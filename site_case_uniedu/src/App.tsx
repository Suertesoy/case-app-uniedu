import { useState, useEffect } from "react";
import {
  BookOpen,
  Target,
  Award,
  Users,
  MessageSquare,
  Sparkles,
  Clock,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Activity,
  Compass,
  Smartphone,
  ChevronRight,
  Zap,
  Lock,
  Layers,
  Search,
  Wrench,
  ThumbsUp,
  AlertCircle,
  Play,
  Share2,
  FileText,
  UserCheck,
  Sun,
  Moon
} from "lucide-react";
import CursorTrail from "./components/CursorTrail";
import ToolMarquee from "./components/ToolMarquee";
import PersonaCard from "./components/PersonaCard";
import JourneyMap from "./components/JourneyMap";
import ResearchTensions from "./components/ResearchTensions";
import ProductShowcase from "./components/ProductShowcase";
import MockupReveal3D from "./components/MockupReveal3D";
import RevealOnScroll from "./components/RevealOnScroll";

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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#solucao-rapida" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Solução</a>
            <a href="#problema" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Desafio</a>
            <a href="#pesquisa" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Pesquisa</a>
            <a href="#estrategia" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Estratégia</a>
            <a href="#produto" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Produto</a>
            <a href="#validacao" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Validação</a>
            <a href="#valor" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Valor Institucional</a>
            <a href="#aprendizados" className="text-xs font-medium text-text-secondary hover:text-brand-strong transition-colors">Aprendizados</a>
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
              href="https://projeto-uniedu-corrigido.vercel.app/home"
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
      <section className="relative overflow-hidden pt-16 pb-24 md:py-32 flex flex-col items-center justify-center transition-all duration-300">
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
              <span className="text-xs font-extrabold text-brand-strong">Najme Simón Alé</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={200} duration={900}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.3] mb-6 pb-3 transition-all duration-300">
              <span className="hero-dark-line hero-dark-1">Gamificação do aprendizado para</span>
              <span className="hero-dark-line hero-dark-2">transformar</span>
              <span className="hero-gradient-line">constância em progresso real<span className="hero-exclamation">!</span></span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={300} duration={1000}>
            <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-300">
              Uma solução de UX/UI e Product Strategy para tornar a jornada de estudos mais clara, motivadora e acompanhável, combatendo a dispersão comportamental do ensino a distância.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={400} duration={1000}>
            {/* Posicionamento */}
            <div className="text-[10px] md:text-xs text-text-secondary font-bold tracking-widest uppercase mb-10 space-x-1 md:space-x-2">
              <span>Pesquisa</span>
              <span>·</span>
              <span>Estratégia de Produto</span>
              <span>·</span>
              <span>UI Design</span>
              <span>·</span>
              <span>Prototipação</span>
              <span>·</span>
              <span>IA aplicada ao Design</span>
            </div>
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
                href="https://projeto-uniedu-corrigido.vercel.app/home"
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
                        <h4 className="text-xs font-bold text-text-primary">Progresso desde a Home</h4>
                        <p className="text-[10px] text-text-secondary mt-0.5">Visibilidade constante das metas diárias.</p>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-text-primary">Estudos Customizáveis</h4>
                        <p className="text-[10px] text-text-secondary mt-0.5">Metas flexíveis ajustadas à rotina real.</p>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-text-primary">Recompensas Reais</h4>
                        <p className="text-[10px] text-text-secondary mt-0.5">Esforço revertido em vantagens tangíveis.</p>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-text-primary">Suporte com IA</h4>
                        <p className="text-[10px] text-text-secondary mt-0.5">Atendimento inteligente integrado no player.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://projeto-uniedu-corrigido.vercel.app/home"
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
                <div className="w-[280px] h-[520px] bg-black rounded-[42px] border-4 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.01]">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-center border border-gray-900">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                </div>

                {/* Tela Interna - Adapta ao Light/Dark mode */}
                <div className="absolute inset-0 bg-page p-4 pt-10 flex flex-col justify-between text-xs selection:bg-transparent transition-colors duration-300">
                  
                  {/* Conteúdo Provisório */}
                  <div className="space-y-4 flex-1">
                    {/* Top row */}
                    <div className="flex justify-between items-center text-[8px] text-text-secondary">
                      <span>9:41</span>
                      <span>📶 🔋</span>
                    </div>

                    {/* Header do Mockup */}
                    <div className="flex justify-between items-center border-b border-border/40 pb-2">
                      <div>
                        <p className="text-[7px] text-text-secondary uppercase tracking-wider">ESTUDOS</p>
                        <p className="font-bold text-text-primary text-[10px]">UNIEDU App</p>
                      </div>
                      <div className="bg-brand/10 border border-brand/20 rounded-full px-2 py-0.5 text-brand-strong text-[8px] font-bold">
                        ⚡ 5 Dias
                      </div>
                    </div>

                    {/* Card de Progresso (Rosa) */}
                    <div className="bg-gradient-to-r from-brand to-rose-600 rounded-2xl p-3 text-white shadow-md relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                      <div className="relative z-10">
                        <p className="text-[7px] text-white/80 font-bold uppercase tracking-wider">Seu Progresso Semanal</p>
                        <p className="font-bold text-[11px] mt-0.5">Módulo 2: UX Strategy</p>
                        <div className="mt-2 flex justify-between text-[7px] text-white/90">
                          <span>3 / 5 aulas concluídas</span>
                          <span>60%</span>
                        </div>
                        <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mt-1">
                          <div className="bg-white h-full w-3/5 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Pequenos blocos de pontos/conquistas */}
                    <div className="grid grid-cols-2 gap-2 text-center text-[8px]">
                      <div className="bg-surface border border-border rounded-xl p-2.5">
                        <p className="text-text-secondary font-medium">SALDO ACUMULADO</p>
                        <p className="text-[11px] font-extrabold text-brand-strong mt-0.5">450 pts</p>
                      </div>
                      <div className="bg-surface border border-border rounded-xl p-2.5">
                        <p className="text-text-secondary font-medium">CONQUISTAS</p>
                        <p className="text-[11px] font-extrabold text-text-primary mt-0.5">12 salvas</p>
                      </div>
                    </div>

                    {/* Bloco de notas rápido ou IA */}
                    <div className="bg-surface-elevated border border-border rounded-xl p-2.5 space-y-1.5">
                      <div className="flex justify-between items-center text-[7px]">
                        <span className="font-bold text-text-primary">Anotação Inteligente</span>
                        <span className="text-[6px] text-brand font-semibold">Salvo ✔</span>
                      </div>
                      <p className="text-[8px] text-text-secondary leading-relaxed bg-surface/50 p-1.5 rounded border border-border/40">
                        "Foco na retenção do aluno no onboarding..."
                      </p>
                    </div>
                  </div>

                  {/* Barra inferior simplificada */}
                  <div className="border-t border-border pt-2 flex justify-between items-center text-text-secondary text-[7px] font-medium">
                    <span className="text-brand-strong font-bold">🏠 Home</span>
                    <span>📅 Plano</span>
                    <span>▶ Aulas</span>
                    <span>🛒 Loja</span>
                  </div>

                </div>

                {/* Overlay Premium Provisório Placeholder */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white z-30 select-none pointer-events-none">
                  <Smartphone className="w-8 h-8 text-brand mb-2 animate-bounce" />
                  <p className="text-[10px] font-bold tracking-wider uppercase text-brand-soft">Placeholder de Mockup</p>
                  <p className="text-xs font-semibold mt-1">
                    [Placeholder de print do protótipo]
                  </p>
                  <p className="text-[8px] text-gray-300 mt-2 leading-relaxed">
                    Visual e proporção mobile representando o layout real do aplicativo. Será substituído por print/vídeo definitivo.
                  </p>
                </div>
              </div>
            </MockupReveal3D>
          </div>

          </div>
        </div>
      </section>

      {/* 4. CONTEXTO DO DESAFIO */}
      <section id="problema" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
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
                  Evitando o rótulo de um simples "redesign" estético, o UNIEDU foi concebido a partir das fricções reais encontradas no ensino a distância, abordando o engajamento através do prisma comportamental.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <RevealOnScroll direction="up" delay={0} duration={800}>
              <div className="p-5 rounded-2xl bg-surface border border-border/80 hover:border-brand/20 transition-all duration-300">
                <span className="text-xs font-bold text-brand">Fricção 01</span>
                <h4 className="font-bold text-sm text-text-primary mt-2">Perda de Ritmo Semanal</h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Estudantes desistem quando imprevistos quebram sua rotina e as plataformas exigem metas inalcançáveis.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={150} duration={800}>
              <div className="p-5 rounded-2xl bg-surface border border-border/80 hover:border-brand/20 transition-all duration-300">
                <span className="text-xs font-bold text-brand">Fricção 02</span>
                <h4 className="font-bold text-sm text-text-primary mt-2">Baixa Percepção de Evolução</h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Progresso invisível em sessões curtas de estudo gera cansaço mental e sensação de estagnação.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={300} duration={800}>
              <div className="p-5 rounded-2xl bg-surface border border-border/80 hover:border-brand/20 transition-all duration-300">
                <span className="text-xs font-bold text-brand">Fricção 03</span>
                <h4 className="font-bold text-sm text-text-primary mt-2">Sentimento de Isolamento</h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Fóruns estáticos desestimulam a interatividade e paralisam o aluno ao travar em exercícios práticos.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={450} duration={800}>
              <div className="p-5 rounded-2xl bg-surface border border-border/80 hover:border-brand/20 transition-all duration-300">
                <span className="text-xs font-bold text-brand">Fricção 04</span>
                <h4 className="font-bold text-sm text-text-primary mt-2">Recompensas Sem Valor Real</h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Medalhas digitais vazias deixam de engajar rapidamente por não conversarem com a carreira do aluno.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Pergunta de Oportunidade (How Might We) */}
        <RevealOnScroll direction="up" delay={200} duration={1000}>
          <div className="mt-16 bg-gradient-to-r from-surface to-surface-elevated border border-brand/20 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-300 shadow-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 dark:bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-strong px-2.5 py-1 rounded-full bg-brand/10 border border-brand/20 mb-4 inline-block">
                Pergunta de Oportunidade (How Might We)
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary leading-snug">
                "Como poderíamos criar uma experiência de aprendizagem que recompense o esforço real do aluno e transforme consistência em hábito?"
              </h3>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 5. ESCOPO, AUTORIA E PAPÉIS DO TIME */}
      <section id="escopo" className="py-24 bg-surface/20 border-t border-border relative transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Project metadata details */}
            <div className="lg:col-span-5">
              <RevealOnScroll direction="left" duration={1000}>
                <div className="space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">Maturidade & Execução</span>
                  <h2 className="text-3xl font-bold tracking-tight text-text-primary">Ficha de Entrega do Projeto</h2>
                  <div className="w-12 h-1 bg-brand rounded" />

                  <div className="space-y-4">
                    <div className="border-b border-border/40 pb-3 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">Tipo de Produto</span>
                      <span className="text-text-primary font-semibold">Mobile Application (iOS/Android)</span>
                    </div>
                    <div className="border-b border-border/40 pb-3 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">Área do Case</span>
                      <span className="text-text-primary font-semibold">EdTech / Ensino a Distância</span>
                    </div>
                    <div className="border-b border-border/40 pb-3 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">Duração</span>
                      <span className="text-text-primary font-semibold">6 Meses (UX Research a Validação)</span>
                    </div>
                    <div className="border-b border-border/40 pb-3 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">Entrega Técnica</span>
                      <span className="text-text-primary font-semibold">Protótipo navegável + Validação de Testes</span>
                    </div>
                    <div className="border-b border-border/40 pb-3 flex justify-between items-center text-xs">
                      <span className="text-text-secondary font-bold uppercase tracking-wider">Autoria e Execução</span>
                      <span className="text-brand-strong font-bold">Lucas Cabral & Najme Simón Alé</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right side: Specialized Team Roles */}
            <div className="lg:col-span-7">
              <RevealOnScroll direction="right" duration={1000}>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-text-primary">Atuação e Competências de Design</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Nossa atuação cobriu do entendimento qualitativo à arquitetura técnica, dividindo o time nas seguintes competências estratégicas:
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

      {/* 6. FAIXA DE FERRAMENTAS */}
      <RevealOnScroll direction="fade" duration={1000}>
        <ToolMarquee />
      </RevealOnScroll>

      {/* 7. PESQUISA E DESCOBERTA */}
      <section id="pesquisa" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand/3 dark:bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center mb-16 space-y-4">
          <RevealOnScroll direction="up" duration={800}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Fase de Descoberta</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Pesquisa e Evidências Comportamentais</h2>
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
                    Investigações iniciais apontaram que a maior taxa de evasão em cursos online não decorre da complexidade das disciplinas, mas da dificuldade de manter hábitos de foco e da sensação de progresso estático.
                  </p>
                  <div className="bg-brand/5 border border-brand/10 p-4 rounded-xl flex gap-3 text-xs text-brand-strong font-semibold">
                    <AlertCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Indicador Chave:</strong> Dificuldades associadas à conciliação da rotina diária e à ausência de loops imediatos de recompensa são os principais fatores que levam estudantes a abandonar a plataforma nas primeiras 4 semanas.
                    </span>
                  </div>
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
                      { name: "Duolingo", obs: "Streaks visuais e punição branda.", learn: "Cria urgência saudável na rotina.", impact: "Influenciou os dias ativos de foco no App." },
                      { name: "SoloLearn", obs: "Módulos de códigos interativos.", learn: "Estudos curtos aumentam ativação.", impact: "Guiou a estruturação de microaulas." },
                      { name: "Kahoot", obs: "Competitividade imediata em tempo real.", learn: "Rankings diretos podem afastar tímidos.", impact: "Influenciou o toggle de ranking opcional." },
                      { name: "Udemy", obs: "Apenas barras de progresso linear.", learn: "Ausência de incentivo a cada marco.", impact: "Reforçou a criação da Loja de Prêmios." },
                      { name: "Alura", obs: "Fórum de comunidade em separado.", learn: "Interrupção de foco para tirar dúvida.", impact: "Gerou o player de anotações unificadas." }
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

      {/* 8. PERSONA SOFIA */}
      <RevealOnScroll direction="up" duration={1000}>
        <PersonaCard />
      </RevealOnScroll>

      {/* 9. JORNADA DO USUÁRIO */}
      <RevealOnScroll direction="up" duration={1000}>
        <JourneyMap />
      </RevealOnScroll>

      {/* 9b. TENSÕES DE PESQUISA */}
      <RevealOnScroll direction="up" duration={1000}>
        <ResearchTensions />
      </RevealOnScroll>

      {/* 10. ESTRATÉGIA DE PRODUTO */}
      <section id="estrategia" className="py-24 bg-surface/20 border-y border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <RevealOnScroll direction="up" duration={800}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">Alinhamento e Objetivos</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Estratégia de Produto Conectada a Negócio</h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-sm">
                Não se trata apenas de frameworks teóricos. Usamos o HEART do Google e o funil AARRR para ligar a experiência de estudos (UX) aos resultados institucionais de engajamento e retenção.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* HEART Framework */}
            <RevealOnScroll direction="left" delay={100} duration={1000}>
              <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 shadow-md h-full">
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
                <span className="text-[9px] font-bold text-brand uppercase tracking-widest bg-brand/10 border border-brand/20 px-3 py-1 rounded-full mb-6 inline-block">
                  GOOGLE HEART Framework (Qualidade da Experiência)
                </span>
                
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">H</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Happiness (Felicidade)</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Satisfação ao concluir tarefas rápidas e resgatar prêmios na loja.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">E</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Engagement (Engajamento)</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Dias ativos (streaks) e frequência de anotações feitas no player.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">A</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Adoption (Adoção)</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Adesão ao plano flexível de estudos logo na primeira semana.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">R</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Retention (Retenção)</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Redução do abandono da meta de estudos semanal no médio prazo.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">T</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Task Success (Sucesso das Tarefas)</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Velocidade ao anotar durante o vídeo e resgatar itens na loja.</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* AARRR Framework */}
            <RevealOnScroll direction="right" delay={200} duration={1000}>
              <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 shadow-md h-full">
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
                <span className="text-[9px] font-bold text-brand uppercase tracking-widest bg-brand/10 border border-brand/20 px-3 py-1 rounded-full mb-6 inline-block">
                  Métricas AARRR (Crescimento e Retenção)
                </span>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">A</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Aquisição</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Atração de alunos pelo diferencial da loja e feedback visual de constância.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">A</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Ativação</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Configuração do plano personalizado e conclusão das primeiras duas aulas.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">R</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Retenção</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Estudantes continuam estudando no app para preservar streaks e metas.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">R</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Receita</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Adesão constante reduz cancelamentos (churn), estabilizando a receita recorrente.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-strong">R</div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">Recomendação</h4>
                      <p className="text-[11px] text-text-secondary mt-0.5">Alunos engajados indicam a plataforma organicamente por causa dos prêmios.</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* 11. DOR -> INSIGHT -> SOLUÇÃO EM TELA */}
      <RevealOnScroll direction="up" duration={1000}>
        <ProductShowcase />
      </RevealOnScroll>

      {/* 12. VALIDAÇÃO COM USUÁRIOS */}
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
                  Conduzimos testes monitorados com 5 usuários representativos da persona Sofia. Avaliamos a facilidade de navegação e o fluxo de raciocínio nas seguintes tarefas:
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Alterar plano de estudos",
                    "Assistir uma aula",
                    "Visualizar briefing do case",
                    "Realizar compra na loja",
                    "Fazer publicação na comunidade",
                    "Resgatar pontos das conquistas"
                  ].map((task, idx) => (
                    <span key={idx} className="bg-surface border border-border px-3 py-1.5 rounded-lg text-[10px] text-text-primary font-medium">
                      {task}
                    </span>
                  ))}
                </div>

                <div className="bg-surface border border-border rounded-2xl p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-text-secondary leading-relaxed">
                    <strong>Principais Destaques:</strong> As tarefas básicas (onboarding e anotações) obtiveram 100% de sucesso. A mecânica de resgate na loja gerou pequenas dúvidas de interface, o que nos guiou a otimizar microcopys e o realce visual dos CTAs.
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Metrics grid and video placeholder */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="right" duration={1000}>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-surface border border-border p-5 rounded-2xl space-y-2 hover:border-brand-soft/30 transition-all duration-300">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="font-bold text-brand bg-brand/10 px-2 py-0.5 rounded border border-brand/25">Onboarding</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">100% Sucesso</span>
                    </div>
                    <h4 className="font-bold text-sm text-text-primary">Login e Configuração</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Conclusão rápida do fluxo de setup do plano semanal sob tempo médio de 45 segundos.
                    </p>
                  </div>

                  <div className="bg-surface border border-border p-5 rounded-2xl space-y-2 hover:border-brand-soft/30 transition-all duration-300">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="font-bold text-brand bg-brand/10 px-2 py-0.5 rounded border border-brand/25">Player</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">90% Sucesso</span>
                    </div>
                  {/* Test validation media placeholder */}
                  <div className="bg-surface border border-border rounded-2xl p-4 flex items-center justify-between transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-text-primary">Registros de Usabilidade do Protótipo</p>
                        <p className="text-[9px] text-text-secondary mt-0.5">Gravações de tela mostrando as interações dos usuários.</p>
                      </div>
                    </div>
                    <span className="text-[9px] text-text-secondary uppercase font-bold tracking-wider bg-surface px-2.5 py-1 rounded border border-border">
                      [Placeholder de evidência de teste]
                    </span>
                  </div>
                </div>
                </div>
              </div>
              </RevealOnScroll>
            </div>

          </div>
        </section>

      {/* 13. VALOR ESTRATÉGICO PARA A INSTITUIÇÃO */}
      <section id="valor" className="py-24 bg-surface/30 border-y border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <RevealOnScroll direction="up" duration={800}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">Visão Comercial</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Valor Estratégico para a Instituição</h2>
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
                <span className="text-[10px] text-brand-strong bg-brand/10 px-2 py-1 rounded-md border border-brand/20 mt-6 inline-block w-fit font-bold">
                  [Dado de retenção a inserir]
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
                <span className="text-[10px] text-brand-strong bg-brand/10 px-2 py-1 rounded-md border border-brand/20 mt-6 inline-block w-fit font-bold">
                  [Dado de engajamento a inserir]
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
                <span className="text-[10px] text-brand-strong bg-brand/10 px-2 py-1 rounded-md border border-brand/20 mt-6 inline-block w-fit font-bold">
                  [Dado de conclusão de módulos a inserir]
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
                <span className="text-[10px] text-brand-strong bg-brand/10 px-2 py-1 rounded-md border border-brand/20 mt-6 inline-block w-fit font-bold">
                  [Dado de percepção a inserir]
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
                <span className="text-[10px] text-brand-strong bg-brand/10 px-2 py-1 rounded-md border border-brand/20 mt-6 inline-block w-fit font-bold">
                  [Dado de recomendação a inserir]
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
                <span className="text-[10px] text-brand-strong bg-brand/10 px-2 py-1 rounded-md border border-brand/20 mt-6 inline-block w-fit font-bold">
                  [Dado de suporte a inserir]
                </span>
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 14. PROTÓTIPO COMPLETO */}
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
                <div className="w-[280px] h-[520px] bg-black rounded-[42px] border-4 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.01]">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-center border border-gray-900">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                </div>

                {/* Tela Interna - Adapta ao Light/Dark mode */}
                <div className="absolute inset-0 bg-page p-4 pt-10 flex flex-col justify-between text-xs selection:bg-transparent transition-colors duration-300">
                  {/* Top Row status */}
                  <div className="flex justify-between items-center text-[8px] text-text-secondary">
                    <span>9:41</span>
                    <span>📶 🔋</span>
                  </div>

                  {/* Player Content area */}
                  <div className="flex-1 flex flex-col items-center justify-center p-4 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong animate-pulse cursor-pointer hover:scale-105 transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold text-brand uppercase tracking-wider">
                        [Placeholder de vídeo / Tour completo]
                      </p>
                      <p className="text-[10px] font-bold text-text-primary leading-tight">
                        Explore o Protótipo Mobile UNIEDU
                      </p>
                      <p className="text-[8px] text-text-secondary leading-relaxed">
                        Tour interativo de 3 minutos demonstrando as transições de fluxos, streaks ativos e resgate de recompensas na loja.
                      </p>
                    </div>

                    {/* App Mockup visual element */}
                    <div className="w-full bg-surface border border-border rounded-xl p-2 text-left space-y-1.5 mt-2">
                      <div className="flex justify-between items-center text-[7px] font-bold text-text-primary">
                        <span>📖 Módulo: Gamificação de Retenção</span>
                        <span className="text-brand">85%</span>
                      </div>
                      <div className="w-full bg-border h-1 rounded-full overflow-hidden">
                        <div className="bg-brand h-full w-[85%] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom bar inside phone */}
                  <div className="border-t border-border pt-2 flex justify-between items-center text-text-secondary text-[7px] font-medium">
                    <span>🏠 Home</span>
                    <span>📅 Plano</span>
                    <span className="text-brand-strong font-bold">▶ Aulas</span>
                    <span>🛒 Loja</span>
                  </div>
                </div>
              </div>
            </MockupReveal3D>
          </div>

            <RevealOnScroll direction="up" delay={200} duration={800}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://projeto-uniedu-corrigido.vercel.app/home"
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

      {/* 15. APRENDIZADOS, LIMITES E PRÓXIMOS PASSOS */}
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

      {/* 16. FECHAMENTO & FOOTER */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center relative overflow-hidden">
        <RevealOnScroll direction="up" duration={1000}>
          <div className="bg-gradient-to-b from-surface to-page border border-border rounded-[2.5rem] p-10 md:p-16 relative z-10 transition-all duration-300">
            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-8 max-w-3xl mx-auto leading-tight transition-all duration-300 text-text-primary">
              "UNIEDU não propõe apenas uma interface mais bonita. Propõe uma experiência de aprendizagem mais clara, motivadora e acompanhável, conectando progresso, recompensa, suporte, comunidade e estratégia de produto."
            </h2>
            
            <div className="w-16 h-0.5 bg-brand mx-auto mb-6 rounded-full" />
            <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">
              UX/UI Case Study · Lucas Cabral & Najme Simón Alé
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
