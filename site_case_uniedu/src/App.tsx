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
  Sun,
  Moon
} from "lucide-react";
import CursorTrail from "./components/CursorTrail";

export default function App() {
  const [activeSolutionTab, setActiveSolutionTab] = useState("home");
  
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm font-medium text-text-secondary hover:text-brand-strong transition-colors">Problema</a>
            <a href="#pesquisa" className="text-sm font-medium text-text-secondary hover:text-brand-strong transition-colors">Pesquisa</a>
            <a href="#decisoes" className="text-sm font-medium text-text-secondary hover:text-brand-strong transition-colors">Decisões</a>
            <a href="#solucao" className="text-sm font-medium text-text-secondary hover:text-brand-strong transition-colors">Solução</a>
            <a href="#validacao" className="text-sm font-medium text-text-secondary hover:text-brand-strong transition-colors">Validação</a>
            <a href="#valor" className="text-sm font-medium text-text-secondary hover:text-brand-strong transition-colors">Valor de Negócio</a>
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
      <section className="relative overflow-hidden pt-12 pb-24 md:py-32 flex flex-col items-center justify-center transition-all duration-300">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-glow-1 rounded-full blur-[120px] pointer-events-none transition-colors duration-300" />
        <div className="absolute top-1/3 left-1/4 w-[25rem] h-[25rem] bg-glow-2 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />

        {/* Diagonal Soft Background Design for Light Mode to give a sophisticated pinkish edtech look */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand/3 via-transparent to-brand/1 pointer-events-none dark:opacity-0 transition-opacity duration-300" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border mb-8 backdrop-blur-sm transition-all duration-300">
            <Sparkles className="w-4 h-4 text-brand-strong" />
            <span className="text-xs font-semibold text-text-secondary">Trabalho de Conclusão de Curso (TCC)</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 transition-all duration-300">
            Gamificação do aprendizado para transformar{" "}
            <span className="bg-gradient-to-r from-brand via-brand-soft to-brand-strong bg-clip-text text-transparent">
              constância em progresso real
            </span>
          </h1>

          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-300">
            Um case de UX/UI e Product Strategy projetado para elevar o engajamento, retenção comportamental e 
            a percepção de evolução contínua em plataformas de ensino online.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#solucao"
              className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl text-sm font-bold tracking-wide hover:bg-opacity-90 hover:shadow-xl hover:shadow-brand/10 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              Ver solução proposta
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pesquisa"
              className="w-full sm:w-auto px-8 py-4 bg-surface text-text-primary border border-border rounded-2xl text-sm font-bold tracking-wide hover:bg-surface-elevated hover:border-brand-strong/20 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              Ver processo de pesquisa
            </a>
          </div>
        </div>
      </section>

      {/* 3. CONTEXTO DO PROJETO */}
      <section className="bg-surface/30 border-y border-border py-12 relative transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            <div className="p-4 rounded-2xl bg-surface border border-border/50 transition-all duration-300">
              <p className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 font-bold">Tipo de Produto</p>
              <p className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-brand-strong" />
                Mobile App
              </p>
            </div>
            
            <div className="p-4 rounded-2xl bg-surface border border-border/50 transition-all duration-300">
              <p className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 font-bold">Área do Case</p>
              <p className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-brand-strong" />
                EdTech / EAD
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-border/50 transition-all duration-300">
              <p className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 font-bold">Papéis do Time</p>
              <p className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-strong" />
                UX/UI, Strategy
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-border/50 transition-all duration-300">
              <p className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 font-bold">Parceria/Autores</p>
              <p className="text-sm font-semibold text-text-primary">Lucas Cabral & Najm</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-border/50 transition-all duration-300">
              <p className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 font-bold">Duração do Projeto</p>
              <p className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-strong" />
                6 Meses
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-border/50 transition-all duration-300">
              <p className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 font-bold">Ferramentas Chave</p>
              <p className="text-xs font-semibold text-text-secondary truncate">Figma, FigJam, Make, Notion</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O PROBLEMA */}
      <section id="problema" className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand/3 dark:bg-brand/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Contexto de Mercado</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              O desafio da retenção no Ensino EAD
            </h2>
            <div className="w-12 h-1 bg-brand rounded" />
          </div>

          <div className="md:col-span-7 space-y-6">
            <p className="text-text-primary leading-relaxed">
              As plataformas de ensino online (EAD) enfrentam uma dura realidade comportamental: taxas de conclusão 
              historicamente baixas, dispersão rápida e sensação constante de solidão nos estudos.
            </p>
            <p className="text-text-secondary leading-relaxed text-sm">
              Sem feedback visual imediato e sem suporte social estruturado, os estudantes perdem o ritmo e a 
              motivação, sentindo que seu esforço diário é invisível para a instituição de ensino.
            </p>
          </div>
        </div>

        {/* Opportunity Card (HMW) */}
        <div className="mt-16 bg-gradient-to-r from-surface to-surface-elevated border border-brand/20 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 dark:bg-brand/10 rounded-full blur-[80px] pointer-events-none transition-colors duration-300" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-strong px-2.5 py-1 rounded-full bg-brand/10 border border-brand/20 mb-4 inline-block">
              Pergunta de Oportunidade (How Might We)
            </span>
            <h3 className="text-xl md:text-3xl font-bold tracking-tight text-text-primary leading-snug mt-2">
              "Como poderíamos criar uma experiência de aprendizagem que recompense o esforço real do aluno e transforme a consistência nos estudos em um hábito natural?"
            </h3>
          </div>
        </div>
      </section>

      {/* 5. PESQUISA E EVIDÊNCIAS */}
      <section id="pesquisa" className="py-24 bg-surface/10 border-t border-border relative transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Entendimento e Descoberta</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Pesquisa e Evidências Comportamentais</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm">
              Decisões de design baseadas em dados empíricos, benchmarking estratégico e entendimento profundo das dores de estudantes reais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Desk Research */}
            <div className="bg-surface border border-border/80 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-strong/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Search className="w-5 h-5 text-brand-strong" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-brand transition-colors">Desk Research</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Análise de relatórios de mercado em EdTech revelando que 70% dos alunos que abandonam cursos online citam a falta de rotina e o isolamento como os principais causadores.
                </p>
              </div>
              <span className="text-[10px] text-text-secondary mt-6 font-semibold uppercase tracking-wider">Fundamentação Inicial</span>
            </div>

            {/* Card 2: Benchmark */}
            <div className="bg-surface border border-border/80 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-strong/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Activity className="w-5 h-5 text-brand-strong" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-brand transition-colors">Benchmark Competitivo</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Estudo de referências em gamificação (como Duolingo e Strava). Concluímos que a gamificação madura deve focar em progresso tangível e recompensas reais, e não em dinâmicas puramente infantis.
                </p>
              </div>
              <span className="text-[10px] text-text-secondary mt-6 font-semibold uppercase tracking-wider">Mapeamento de Padrões</span>
            </div>

            {/* Card 3: Entrevistas */}
            <div className="bg-surface border border-border/80 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-strong/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Users className="w-5 h-5 text-brand-strong" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-brand transition-colors">Entrevistas em Profundidade</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Conversas com 8 estudantes reais de cursos à distância. Identificamos a dor de que "o tempo estudando parece improdutivo quando não se consegue finalizar um módulo inteiro de uma só vez".
                </p>
              </div>
              <span className="text-[10px] text-text-secondary mt-6 font-semibold uppercase tracking-wider">Escuta Qualitativa</span>
            </div>

            {/* Card 4: Persona Sofia */}
            <div className="bg-surface border border-border/80 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-strong/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Compass className="w-5 h-5 text-brand-strong" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-brand transition-colors">Persona Sofia</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Sofia (24 anos) representa a estudante que concilia trabalho e estudo. Sua maior dor é a perda de ritmo ao pausar vídeos e a falta de visibilidade do progresso incremental que realiza em sessões curtas de 15 minutos.
                </p>
              </div>
              <span className="text-[10px] text-text-secondary mt-6 font-semibold uppercase tracking-wider">Direcionamento de UX</span>
            </div>

            {/* Card 5: Jornada do Usuário */}
            <div className="bg-surface border border-border/80 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-strong/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Layers className="w-5 h-5 text-brand-strong" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-brand transition-colors">Mapa da Jornada</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Mapeamento dos altos e baixos de engajamento. Identificamos que o ponto mais crítico de atrito ocorre no final de uma aula longa e no reinício da semana de estudos (fase de resfriamento).
                </p>
              </div>
              <span className="text-[10px] text-text-secondary mt-6 font-semibold uppercase tracking-wider">Pontos de Atrito</span>
            </div>

            {/* Card 6: HEART / AARRR */}
            <div className="bg-surface border border-border/80 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-strong/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <TrendingUp className="w-5 h-5 text-brand-strong" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-brand transition-colors">HEART & AARRR Frameworks</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Uso do HEART do Google para medir Felicidade e Sucesso de tarefas (tempo para anotar/testar) e do funil AARRR com foco central na Ativação e Retenção através do ciclo de gamificação.
                </p>
              </div>
              <span className="text-[10px] text-text-secondary mt-6 font-semibold uppercase tracking-wider">Métricas de Sucesso</span>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DECISÕES DE DESIGN ORIENTADAS POR DADOS */}
      <section id="decisoes" className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Soluções Inteligentes</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Decisões de Design Orientadas por Dados</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm">
            Como traduzimos as maiores dores identificadas nas pesquisas de comportamento dos alunos em funcionalidades específicas do produto digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-2xl p-6 flex gap-4 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 font-bold border border-red-500/20">!</div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase text-red-500">Dor do Estudante</p>
              <h4 className="text-base font-bold text-text-primary">Sem percepção de progresso no EAD tradicional</h4>
              <p className="text-text-secondary text-sm">Sentimento de que o progresso só existe ao finalizar módulos longos.</p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-strong">
                <ChevronRight className="w-4 h-4 text-brand" />
                Decisão: Home com indicador visual de progresso contínuo e micro-evolução.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-2xl p-6 flex gap-4 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 font-bold border border-red-500/20">!</div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase text-red-500">Dor do Estudante</p>
              <h4 className="text-base font-bold text-text-primary">Esforço de estudo diário sem retorno concreto</h4>
              <p className="text-text-secondary text-sm">Acumular "pontos virtuais" ou conquistas bobas não gera valor real percebido.</p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-strong">
                <ChevronRight className="w-4 h-4 text-brand" />
                Decisão: Loja integrada para resgate de pontos por benefícios acadêmicos reais.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-2xl p-6 flex gap-4 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 font-bold border border-red-500/20">!</div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase text-red-500">Dor do Estudante</p>
              <h4 className="text-base font-bold text-text-primary">Competição direta gera ansiedade e desmotivação</h4>
              <p className="text-text-secondary text-sm">Ver rankings expostos inibe alunos com menos tempo de estudo.</p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-strong">
                <ChevronRight className="w-4 h-4 text-brand" />
                Decisão: Ranking gamificado opcional com ativação manual por toggle.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-2xl p-6 flex gap-4 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 font-bold border border-red-500/20">!</div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase text-red-500">Dor do Estudante</p>
              <h4 className="text-base font-bold text-text-primary">Quebra de ritmo mental ao fazer anotações de estudo</h4>
              <p className="text-text-secondary text-sm">Ter que pausar o player e alternar para cadernos ou aplicativos externos.</p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-strong">
                <ChevronRight className="w-4 h-4 text-brand" />
                Decisão: Bloco de notas rápido e anotações integradas diretamente abaixo do player de vídeo.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-2xl p-6 flex gap-4 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 font-bold border border-red-500/20">!</div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase text-red-500">Dor do Estudante</p>
              <h4 className="text-base font-bold text-text-primary">Isolamento e bloqueio ao travar em exercícios</h4>
              <p className="text-text-secondary text-sm">Esperar dias para obter resposta de fóruns desmotiva o aprendizado.</p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-strong">
                <ChevronRight className="w-4 h-4 text-brand" />
                Decisão: Suporte híbrido com IA contextual rápida e contato direto com monitores no chat.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-2xl p-6 flex gap-4 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 font-bold border border-red-500/20">!</div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase text-red-500">Dor do Estudante</p>
              <h4 className="text-base font-bold text-text-primary">Dificuldade em manter um cronograma rígido de estudos</h4>
              <p className="text-text-secondary text-sm">Imprevistos diários quebram planos rígidos e provocam abandono total.</p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-strong">
                <ChevronRight className="w-4 h-4 text-brand" />
                Decisão: Planos de estudos dinâmicos que se reajustam ao ritmo semanal do aluno.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. SOLUÇÃO PROPOSTA - MOCKUPS PREMIUM EM CSS */}
      <section id="solucao" className="py-24 bg-surface/10 border-y border-border relative overflow-hidden transition-all duration-300">
        <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-brand/3 dark:bg-brand/5 rounded-full blur-[120px] pointer-events-none transition-colors duration-300" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Protótipo e Interface</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Experiência do Produto Proposta</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm">
              Explore os módulos chave projetados especificamente para a experiência gamificada e responsiva do UNIEDU.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Tab navigation */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
              {[
                { id: "home", label: "Home de Progresso", desc: "Gamificação e tracking" },
                { id: "estatisticas", label: "Plano de Estudos", desc: "Cronograma personalizável" },
                { id: "player", label: "Player Integrado", desc: "Estudo e notas rápidas" },
                { id: "loja", label: "Loja de Recompensas", desc: "Troca de pontos reais" },
                { id: "comunidade", label: "Comunidade e Suporte", desc: "Social e IA contextual" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSolutionTab(tab.id)}
                  className={`flex-1 text-left p-4 rounded-xl border transition-all duration-300 flex-shrink-0 min-w-[200px] lg:min-w-0 cursor-pointer ${
                    activeSolutionTab === tab.id
                      ? "bg-surface-elevated border-brand/40 shadow-lg"
                      : "bg-surface/50 border-border/50 opacity-60 hover:opacity-100"
                  }`}
                >
                  <p className={`text-xs font-bold ${activeSolutionTab === tab.id ? "text-brand-strong" : "text-text-secondary"}`}>
                    {tab.label}
                  </p>
                  <p className="text-[11px] text-text-secondary mt-1">{tab.desc}</p>
                </button>
              ))}
            </div>

            {/* Showcase Visual (CSS-based mockups) */}
            <div className="lg:col-span-8 bg-surface border border-border rounded-3xl p-8 min-h-[500px] flex flex-col md:flex-row gap-8 items-center relative transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/3 dark:bg-brand/5 rounded-full blur-[80px] pointer-events-none transition-colors duration-300" />
              
              {/* iPhone Mockup Container */}
              <div className="w-[280px] h-[520px] bg-black rounded-[40px] border-4 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.01]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                </div>

                {/* Inside Screen Content - Adapts dynamically to Light/Dark case theme! */}
                <div className="absolute inset-0 bg-page p-4 pt-10 flex flex-col justify-between text-xs selection:bg-transparent transition-colors duration-300">
                  
                  {activeSolutionTab === "home" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[9px] text-text-secondary">BOM DIA,</p>
                          <p className="font-bold text-text-primary">Sofia Martins</p>
                        </div>
                        <div className="bg-brand/10 border border-brand/20 rounded-full px-2 py-0.5 text-brand-strong text-[9px] font-bold">
                          ⚡ 5 Dias
                        </div>
                      </div>

                      {/* Video hero */}
                      <div className="bg-gradient-to-r from-brand to-rose-600 rounded-2xl p-3 text-white flex justify-between items-center shadow-sm">
                        <div>
                          <p className="text-[9px] text-white/80">VOCÊ ESTÁ EM</p>
                          <p className="font-bold text-xs">UX Strategy Avançado</p>
                          <p className="text-[9px] text-white/70 mt-1">Aulas 4 de 12</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">▶</div>
                      </div>

                      {/* Onboarding Checklist */}
                      <div className="bg-surface border border-border rounded-xl p-2.5">
                        <p className="font-bold text-[10px] text-text-primary mb-2">Primeiros Passos</p>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 text-[9px] text-green-600 dark:text-green-400">
                            <span className="font-bold">✓</span> Assistir 1ª aula
                          </div>
                          <div className="flex items-center gap-1.5 text-[9px] text-text-primary">
                            <span className="w-2.5 h-2.5 rounded-full border border-border inline-block" /> Fazer uma anotação
                          </div>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-surface border border-border rounded-xl p-2.5 text-center">
                          <p className="text-[9px] text-text-secondary font-semibold">PONTOS</p>
                          <p className="text-base font-bold text-brand-strong">450</p>
                        </div>
                        <div className="bg-surface border border-border rounded-xl p-2.5 text-center">
                          <p className="text-[9px] text-text-secondary font-semibold">CONQUISTAS</p>
                          <p className="text-base font-bold text-text-primary">12</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSolutionTab === "estatisticas" && (
                    <div className="space-y-4">
                      <div>
                        <p className="text-[9px] text-text-secondary">CRONOGRAMA</p>
                        <p className="font-bold text-text-primary">Plano de Estudos</p>
                      </div>

                      <div className="bg-surface border border-border rounded-xl p-3 space-y-3">
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-text-primary">Meta Semanal</p>
                          <span className="text-[9px] text-brand-strong font-semibold">3 / 5 Aulas</span>
                        </div>
                        <div className="w-full bg-border/25 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-brand h-full w-3/5" />
                        </div>
                      </div>

                      {/* Days progress */}
                      <div className="bg-surface border border-border rounded-xl p-2.5">
                        <p className="text-[9px] text-text-secondary mb-2">SEUS DIAS DE FOCO</p>
                        <div className="flex justify-between">
                          {["D", "S", "T", "Q", "Q", "S", "S"].map((dia, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-1">
                              <span className="text-[9px] text-text-secondary">{dia}</span>
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                                idx > 0 && idx < 4 
                                  ? "bg-brand text-white shadow-sm" 
                                  : "bg-surface-elevated border border-border text-text-secondary"
                              }`}>
                                {idx > 0 && idx < 4 ? "✓" : "-"}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-brand/10 border border-brand/20 rounded-xl p-2.5 text-center">
                        <p className="text-[9px] text-brand-strong font-bold">Dica de Produtividade</p>
                        <p className="text-[8px] text-text-secondary mt-1">Estudar 15 min hoje garante sua sequência de 6 dias!</p>
                      </div>
                    </div>
                  )}

                  {activeSolutionTab === "player" && (
                    <div className="space-y-4">
                      {/* Fake Video Player */}
                      <div className="aspect-video bg-border/20 dark:bg-gray-900 border border-border rounded-xl flex items-center justify-center relative overflow-hidden">
                        <span className="text-xs font-semibold text-text-secondary">Player de Vídeo</span>
                        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                          <div className="h-1 bg-brand w-2/3 rounded-full" />
                          <span className="text-[8px] text-text-secondary">12:45 / 24:00</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-text-primary">Aula 4: UX Research na Prática</h4>
                        <p className="text-[9px] text-text-secondary">Módulo 2: Pesquisa e Descoberta</p>
                      </div>

                      {/* Integrated Notes Section */}
                      <div className="bg-surface border border-border rounded-xl p-3 space-y-2">
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-[10px] text-text-primary">Minhas Anotações</p>
                          <span className="text-[8px] bg-surface-elevated border border-border rounded px-1.5 py-0.5 text-text-secondary">Salvo em 12:40</span>
                        </div>
                        <div className="bg-page p-2 rounded-lg text-[9px] text-text-secondary leading-normal border border-border/50">
                          "Sofia prefere estudar de manhã cedo. A maior dor identificada nas entrevistas..."
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSolutionTab === "loja" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[9px] text-text-secondary">LOJA INTERNA</p>
                          <p className="font-bold text-text-primary">Recompensas Reais</p>
                        </div>
                        <span className="text-[10px] font-bold text-brand-strong">🪙 450 pts</span>
                      </div>

                      <div className="space-y-2">
                        
                        <div className="bg-surface border border-border rounded-xl p-2.5 flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-text-primary">Mentoria (1h)</p>
                            <p className="text-[8px] text-text-secondary">Feedback de Portfólio</p>
                          </div>
                          <span className="bg-brand text-white text-[9px] font-bold px-2 py-1 rounded-lg">
                            400 🪙
                          </span>
                        </div>

                        <div className="bg-surface border border-border rounded-xl p-2.5 flex justify-between items-center opacity-60">
                          <div>
                            <p className="font-semibold text-text-primary">Revisão de TCC</p>
                            <p className="text-[8px] text-text-secondary">Análise de Board</p>
                          </div>
                          <span className="bg-surface-elevated border border-border text-text-secondary text-[9px] font-bold px-2 py-1 rounded-lg">
                            600 🪙
                          </span>
                        </div>

                      </div>
                    </div>
                  )}

                  {activeSolutionTab === "comunidade" && (
                    <div className="space-y-4">
                      <div>
                        <p className="text-[9px] text-text-secondary">DÚVIDAS E SUPORTE</p>
                        <p className="font-bold text-text-primary">Comunidade e IA</p>
                      </div>

                      {/* IA Chat bubble */}
                      <div className="bg-brand/10 border border-brand/20 rounded-xl p-2.5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[9px] text-brand-strong font-bold uppercase">UNIEDU AI</span>
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        </div>
                        <p className="text-[9px] text-text-primary leading-normal">
                          Percebi que você anotou sobre as dores de Sofia. Quer que eu sugira um modelo de mapa de empatia?
                        </p>
                      </div>

                      {/* Student post */}
                      <div className="bg-surface border border-border rounded-xl p-2.5">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-brand to-rose-600 shadow-sm" />
                          <span className="text-[9px] font-bold text-text-primary">Alan S.</span>
                          <span className="text-[8px] text-text-secondary">há 10 min</span>
                        </div>
                        <p className="text-[9px] text-text-secondary truncate">Pessoal, o que acharam da aula sobre Persona?</p>
                      </div>
                    </div>
                  )}

                  {/* Bottom Tab Bar */}
                  <div className="border-t border-border pt-2 flex justify-between items-center text-text-secondary text-[8px]">
                    <span className="text-brand-strong font-bold flex flex-col items-center">
                      <span>🏠</span><span className="mt-0.5">Home</span>
                    </span>
                    <span className="flex flex-col items-center">
                      <span>📖</span><span className="mt-0.5">Aulas</span>
                    </span>
                    <span className="flex flex-col items-center">
                      <span>🛒</span><span className="mt-0.5">Loja</span>
                    </span>
                    <span className="flex flex-col items-center">
                      <span>💬</span><span className="mt-0.5">Turma</span>
                    </span>
                  </div>

                </div>
              </div>

              {/* Functional description side */}
              <div className="flex-1 space-y-6">
                {activeSolutionTab === "home" && (
                  <>
                    <h3 className="text-2xl font-bold text-text-primary">Home de Progresso Contínuo</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      A tela inicial funciona como um agregador de status motivacional. Focada no conceito de "onboarding comportamental", ela orienta os primeiros passos do aluno com metas rápidas de engajamento que somem assim que a rotina de estudos é estabelecida.
                    </p>
                    <ul className="space-y-2.5 text-xs text-text-primary">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Card de continuidade do curso em destaque de alta visibilidade.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Checklist temporário para incentivar novos hábitos.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Saldo de pontos e sequência de atividade em destaque.
                      </li>
                    </ul>
                  </>
                )}

                {activeSolutionTab === "estatisticas" && (
                  <>
                    <h3 className="text-2xl font-bold text-text-primary">Plano de Estudos Personalizado</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Flexibilidade em vez de prazos rígidos que causam estresse. O aluno define quantas aulas deseja realizar por semana, e a plataforma adapta o painel. Caso ocorra um imprevisto, o plano sugere microdicas em vez de punir a quebra de sequência.
                    </p>
                    <ul className="space-y-2.5 text-xs text-text-primary">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Status de meta semanal flexível baseado em barras visuais.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Histórico de consistência sem metas inalcançáveis.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Identificação de padrões de estudo mais produtivos.
                      </li>
                    </ul>
                  </>
                )}

                {activeSolutionTab === "player" && (
                  <>
                    <h3 className="text-2xl font-bold text-text-primary">Player de Vídeo Integrado</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      A centralização do foco. O aluno pode assistir à aula e salvar anotações rápidas vinculadas ao timestamp exato do vídeo de forma instantânea, eliminando a dispersão mental de trocar de janelas.
                    </p>
                    <ul className="space-y-2.5 text-xs text-text-primary">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Anotações sincronizadas com marcação de tempo (timestamps).
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Material de apoio acessível em apenas um clique abaixo do vídeo.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Prevenção de interrupções de fluxo de aprendizagem.
                      </li>
                    </ul>
                  </>
                )}

                {activeSolutionTab === "loja" && (
                  <>
                    <h3 className="text-2xl font-bold text-text-primary">Loja de Recompensas Acadêmicas</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      O fechamento do loop de engajamento (Hook Model). Os pontos acumulados nos estudos e interações na comunidade deixam de ser virtuais e podem ser resgatados por mentoria individualizada, correções de projetos ou descontos em cursos.
                    </p>
                    <ul className="space-y-2.5 text-xs text-text-primary">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Validação de esforço recompensada de forma palpável.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Itens na loja desenhados para agregar valor profissional.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Lógica de incentivo saudável conectada à evolução.
                      </li>
                    </ul>
                  </>
                )}

                {activeSolutionTab === "comunidade" && (
                  <>
                    <h3 className="text-2xl font-bold text-text-primary">Comunidade e Suporte Contextual</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Estudo acompanhado. A comunidade de alunos é vinculada às aulas específicas para cooperação mútua. Um chatbot com IA processa as anotações do aluno para responder dúvidas de imediato ou sinalizar um monitor humano caso necessário.
                    </p>
                    <ul className="space-y-2.5 text-xs text-text-primary">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Suporte de IA integrado e contextualizado com os estudos.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Fóruns rápidos por aula evitando quebras de fluxo.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-strong" />
                        Monitoramento humano ágil para dúvidas de alta complexidade.
                      </li>
                    </ul>
                  </>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. VALIDAÇÃO DOS TESTES DE USABILIDADE */}
      <section id="validacao" className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Testes Práticos</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Validação Visual e de Usabilidade</h2>
            <div className="w-12 h-1 bg-brand rounded" />
            <p className="text-text-secondary leading-relaxed text-sm">
              Conduzimos testes de usabilidade monitorados com 5 usuários reais do público-alvo para mapear a clareza dos fluxos propostos e o tempo de realização das tarefas chaves.
            </p>
            <div className="bg-surface border border-border rounded-2xl p-4 flex gap-3 transition-all duration-300">
              <AlertCircle className="w-5 h-5 text-brand-strong flex-shrink-0 mt-0.5" />
              <p className="text-xs text-text-secondary leading-normal">
                <strong>Apoio de Teste:</strong> Tarefas fundamentais (login, navegação e abertura de aula) foram concluídas rapidamente, mas o fluxo de resgate de pontos e o contraste de ícones em certos cards demandaram refinamentos visuais executados.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            
            <div className="bg-surface border border-border p-5 rounded-2xl space-y-3 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-brand-strong bg-brand/10 px-2 py-0.5 rounded border border-brand/25">Tarefa 1</span>
                <span className="text-[10px] text-green-600 dark:text-green-400 font-semibold">100% Sucesso</span>
              </div>
              <h4 className="font-semibold text-sm text-text-primary">Onboarding e Login</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Todos os usuários concluíram o login e a configuração do primeiro plano de estudos em menos de 45 segundos.
              </p>
            </div>

            <div className="bg-surface border border-border p-5 rounded-2xl space-y-3 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-brand-strong bg-brand/10 px-2 py-0.5 rounded border border-brand/25">Tarefa 2</span>
                <span className="text-[10px] text-green-600 dark:text-green-400 font-semibold">90% Sucesso</span>
              </div>
              <h4 className="font-semibold text-sm text-text-primary">Acessar e Anotar na Aula</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Utilização natural das notas integradas logo abaixo do vídeo, mantendo o foco no conteúdo sem quebrar o ritmo.
              </p>
            </div>

            <div className="bg-surface border border-border p-5 rounded-2xl space-y-3 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-brand-strong bg-brand/10 px-2 py-0.5 rounded border border-brand/25">Tarefa 3</span>
                <span className="text-[10px] text-yellow-600 dark:text-yellow-400 font-semibold">Refinada</span>
              </div>
              <h4 className="font-semibold text-sm text-text-primary">Navegação e Resgate</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Identificado atrito inicial para encontrar os botões de resgate da loja. A interface foi ajustada para dar maior contraste e foco visual ao CTA.
              </p>
            </div>

            <div className="bg-surface border border-border p-5 rounded-2xl space-y-3 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-brand-strong bg-brand/10 px-2 py-0.5 rounded border border-brand/25">Métrica Geral</span>
                <span className="text-[10px] text-green-600 dark:text-green-400 font-semibold">Média 4.6/5</span>
              </div>
              <h4 className="font-semibold text-sm text-text-primary">Percepção de Valor</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Os testadores avaliaram a experiência como motivadora e muito menos cansativa em comparação com as plataformas EAD que costumam usar.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 9. VALOR PARA A INSTITUIÇÃO (VISÃO DE NEGÓCIO) */}
      <section id="valor" className="py-24 bg-surface/30 border-t border-border relative overflow-hidden transition-all duration-300">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/3 dark:bg-brand/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Retorno Comercial e de Marca</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Valor Estratégico para a Instituição</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm">
              Mais do que um protótipo visual, o UNIEDU foi estruturado para resolver os principais gargalos financeiros e operacionais de EdTechs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-surface-elevated border border-border/80 flex flex-col justify-between hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <TrendingUp className="w-6 h-6 text-brand-strong" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Aumento de Retenção</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Diminuição expressiva no churn anual através do incentivo contínuo do plano semanal e das recompensas da loja, estimulando o estudante a renovar sua assinatura.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface-elevated border border-border/80 flex flex-col justify-between hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Zap className="w-6 h-6 text-brand-strong" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Maior Engajamento</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Criação de um ciclo de estudo habitual impulsionado por mecânicas de streaks e gamificação saudável, gerando maior tempo de tela de qualidade e progresso real.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface-elevated border border-border/80 flex flex-col justify-between hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Award className="w-6 h-6 text-brand-strong" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Percepção de Valor</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  A recompensa tangível por meio do esforço acadêmico posiciona a instituição como parceira de carreira do aluno, elevando o valor da mensalidade (LTV).
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface-elevated border border-border/80 flex flex-col justify-between hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Activity className="w-6 h-6 text-brand-strong" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Dados Comportamentais</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Acompanhamento analítico da evolução dos alunos em tempo real (dashboard interno), possibilitando ações proativas de suporte pedagógico antes de um possível abandono.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface-elevated border border-border/80 flex flex-col justify-between hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Sparkles className="w-6 h-6 text-brand-strong" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Diferenciação no Mercado</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Uma experiência inovadora e gamificada que se destaca frente ao modelo conservador e monótono de concorrentes diretos no setor EdTech.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface-elevated border border-border/80 flex flex-col justify-between hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Users className="w-6 h-6 text-brand-strong" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Comunidade Ativa</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Fomento ao estudo cooperativo que reduz a sobrecarga do suporte acadêmico padrão da faculdade, descentralizando a resolução de dúvidas básicas entre os próprios pares.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FECHAMENTO & CONCLUSAO */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 dark:bg-brand/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />

        <div className="bg-gradient-to-b from-surface to-page border border-border rounded-[2.5rem] p-10 md:p-16 relative z-10 transition-all duration-300">
          <span className="text-[10px] font-bold text-brand-strong uppercase tracking-widest bg-brand/10 border border-brand/20 rounded-full px-3.5 py-1 mb-6 inline-block">
            Conclusão do Case
          </span>
          
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 max-w-3xl mx-auto leading-tight transition-all duration-300">
            "UNIEDU não propõe apenas uma interface mais bonita. Propõe uma experiência de aprendizagem mais clara, motivadora e acompanhável, conectando progresso, recompensa, suporte e comunidade."
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-brand to-brand-strong mx-auto mb-10 rounded-full" />

          <p className="text-xs text-text-secondary mb-8 max-w-xl mx-auto">
            Design de Produto feito para demonstrar viabilidade de negócios e pensamento estratégico em EdTech.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://projeto-uniedu-corrigido.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl text-sm font-bold tracking-wide hover:bg-opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/25"
            >
              Testar o Protótipo do App
              <Smartphone className="w-4 h-4" />
            </a>
            <a
              href="#problema"
              className="w-full sm:w-auto px-8 py-4 bg-surface text-text-primary border border-border rounded-2xl text-sm font-bold tracking-wide hover:bg-surface-elevated active:scale-98 transition-all"
            >
              Voltar ao Início
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface py-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-bold text-sm text-text-primary">UNIEDU — Case Study</p>
            <p className="text-xs text-text-secondary mt-1">Desenvolvimento e Design Estratégico por Lucas Cabral & Najm</p>
          </div>
          <div className="flex gap-6 text-xs text-text-secondary">
            <span>Apresentação Acadêmica do TCC</span>
            <span>•</span>
            <span>EdTech 2026</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
