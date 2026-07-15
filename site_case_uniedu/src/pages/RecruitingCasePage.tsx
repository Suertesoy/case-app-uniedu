import { useEffect } from "react";
import {
  ArrowRight,
  Sun,
  Moon,
  Sparkles,
  PenSquare,
  MessagesSquare,
  Workflow,
  BookOpenCheck,
  Smartphone,
  RotateCcw,
  EyeOff,
  UserX,
  Gift,
  Mail
} from "lucide-react";
import prototypeLightVideo from "../../../NAVEGACAO_UNIEDU_LIGHTMODE.mp4";
import prototypeDarkVideo from "../../../NAVEGACAO_UNIEDU_DARKMODE.mp4";
import CursorTrail from "../components/CursorTrail";
import MockupReveal3D from "../components/MockupReveal3D";
import RevealOnScroll from "../components/RevealOnScroll";
import { AUTHORS } from "../content/translations";
import { useTheme } from "../hooks/useTheme";

const PAGE_TITLE = "UNIEDU | Case UX/UI e IA Design Engineer | Lucas Cabral";
const PAGE_DESCRIPTION =
  "Case de UX/UI, Product Design e IA aplicada ao design, mostrando como o UNIEDU transforma engajamento em EAD em uma experiência mobile gamificada, prototipada e validada.";

const PROTOTYPE_URL = "https://projeto-uniedu.vercel.app/";

const navLinks = [
  { href: "#resumo", label: "Resumo" },
  { href: "#decisoes", label: "Decisões" },
  { href: "#ui", label: "UI" },
  { href: "#ia", label: "IA no processo" },
  { href: "#validacao", label: "Validação" },
  { href: "#contato", label: "Contato" },
];

const heroCards = [
  { label: "Papel", value: "UX/UI Designer, Product Designer e IA aplicada ao Design" },
  { label: "Produto", value: "App mobile EdTech" },
  { label: "Entrega", value: "Pesquisa, estratégia, fluxos, UI, protótipo navegável, design system e validação" },
  { label: "Diferencial", value: "IA como apoio à síntese, microcopy, crítica de design e aproximação com implementação" },
];

const competencyChips = [
  "UX Research",
  "Product Strategy",
  "UI Design",
  "Design System",
  "Prototipação",
  "UX Writing",
  "IA aplicada ao Design",
  "Handoff",
];

const tensionCards = [
  { icon: RotateCcw, title: "Rotina instável" },
  { icon: EyeOff, title: "Progresso invisível" },
  { icon: UserX, title: "Estudo solitário" },
  { icon: Gift, title: "Recompensas pouco significativas" },
];

const researchBlocks = [
  {
    title: "Métodos usados",
    desc: "Desk research, benchmark, entrevistas, persona, jornada e testes de usabilidade.",
  },
  {
    title: "Principais achados",
    desc: "Perda de ritmo, baixa percepção de evolução, isolamento e falta de valor nas recompensas.",
  },
  {
    title: "Como virou produto",
    desc: "Plano flexível, progresso na home, comunidade, loja de recompensas e suporte contextual com IA.",
  },
];

const decisionCards = [
  {
    insight: "O aluno perde ritmo quando quebra a rotina.",
    decisao: "Plano de estudos flexível.",
    impacto: "Reduzir abandono depois de dias improdutivos.",
  },
  {
    insight: "Pequenas sessões de estudo parecem não gerar avanço.",
    decisao: "Progresso visível desde a home.",
    impacto: "Transformar constância em percepção de evolução.",
  },
  {
    insight: "Medalhas virtuais perdem valor rapidamente.",
    decisao: "Loja de recompensas.",
    impacto: "Conectar esforço acumulado a benefícios tangíveis.",
  },
  {
    insight: "Estudar sozinho aumenta frustração.",
    decisao: "Comunidade e suporte no contexto da aula.",
    impacto: "Reduzir bloqueios durante a jornada de estudo.",
  },
  {
    insight: "Competição pode motivar alguns alunos e afastar outros.",
    decisao: "Ranking opcional.",
    impacto: "Preservar autonomia e evitar pressão social desnecessária.",
  },
];

const uiVideoBlocks = [
  { title: "Home com progresso", video: "/case-screens/04-home-de-progresso.mp4" },
  { title: "Plano de estudos", video: "/case-screens/02-plano-de-estudos.mp4" },
  { title: "Player de aula", video: "/case-screens/07-player-integrado.mp4" },
  { title: "Comunidade", video: "/case-screens/09-comunidade.mp4" },
  { title: "Loja de recompensas", video: "/case-screens/08-loja-de-recompensas.mp4" },
];

const aiCards = [
  { icon: Workflow, title: "Síntese e estruturação" },
  { icon: PenSquare, title: "UX Writing" },
  { icon: Sparkles, title: "Crítica de design" },
  { icon: BookOpenCheck, title: "Handoff e implementação" },
  { icon: MessagesSquare, title: "Narrativa de case" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-bold uppercase tracking-widest text-brand">{children}</span>;
}

export default function RecruitingCasePage() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.title = PAGE_TITLE;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", PAGE_DESCRIPTION);
  }, []);

  return (
    <div className="min-h-screen bg-page text-text-primary selection:bg-brand selection:text-white font-sans transition-colors duration-300">
      <CursorTrail />

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-page/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
          <div className="flex flex-col shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand via-brand-soft to-brand-strong bg-clip-text text-transparent">
                UNIEDU
              </span>
              <span className="bg-brand/10 text-brand-strong text-xs uppercase font-bold tracking-wide px-2 py-0.5 rounded-full border border-brand/20 hidden sm:inline-block">
                Case para recrutadores
              </span>
            </div>
            <a
              href="/"
              className="text-xs text-text-secondary/70 uppercase tracking-wide mt-0.5 hidden lg:inline underline decoration-border underline-offset-2 hover:text-brand-strong transition-colors"
            >
              Ver versão completa/TCC
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-text-secondary hover:text-brand-strong transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-surface border border-border text-text-secondary hover:text-brand-strong transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center hover:bg-surface-elevated shrink-0"
              aria-label="Alternar tema claro/escuro"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <a
              href={PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 xl:px-5 py-2.5 bg-brand text-white rounded-xl text-xs font-bold tracking-wide hover:bg-opacity-90 active:scale-95 transition-all flex items-center gap-1.5 shadow-lg shadow-brand/25 border border-brand shrink-0"
            >
              <span className="hidden sm:inline">Testar protótipo</span>
              <span className="sm:hidden">Protótipo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-20 md:py-28 transition-all duration-300">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-glow-1 rounded-full blur-[120px] pointer-events-none transition-colors duration-300" />
        <div className="absolute top-1/3 left-1/4 w-[25rem] h-[25rem] bg-glow-2 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Texto principal */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <RevealOnScroll direction="up" duration={800}>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.2] mb-6 text-text-primary">
                  UNIEDU: de um desafio de engajamento em EAD a um protótipo mobile gamificado, validado e preparado para handoff.
                </h1>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={100} duration={900}>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0">
                  Atuei na construção de uma experiência de aprendizagem que conecta pesquisa, estratégia de produto, UI, gamificação, comunidade, recompensas e IA aplicada ao suporte do estudante.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={200} duration={900}>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                  O objetivo não era apenas redesenhar uma interface. Era transformar uma jornada dispersa de estudos em um sistema mais claro, motivador e acompanhável.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={300} duration={900}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                  <a
                    href="#decisoes"
                    className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl text-sm font-bold tracking-wide hover:bg-opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/25"
                  >
                    Ver decisões do case
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={PROTOTYPE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-surface text-text-primary border border-border rounded-2xl text-sm font-bold tracking-wide hover:bg-surface-elevated active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    Testar protótipo
                  </a>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={400} duration={1000}>
                <div className="grid sm:grid-cols-2 gap-3">
                  {heroCards.map((card) => (
                    <div key={card.label} className="p-4 rounded-2xl bg-surface border border-border text-left">
                      <span className="text-xs font-bold text-brand uppercase tracking-wide">{card.label}</span>
                      <p className="text-xs text-text-primary font-medium mt-1 leading-relaxed">{card.value}</p>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            {/* Vídeo do protótipo em mockup mobile */}
            <div className="lg:col-span-5 flex justify-center">
              <RevealOnScroll direction="scale" delay={150} duration={900}>
                <MockupReveal3D>
                  <div className="w-[300px] max-w-full aspect-[7/13] bg-black rounded-[42px] border-4 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-center border border-gray-900">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                    </div>
                    <div className="absolute inset-0">
                      <video
                        key={theme}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={theme === "dark" ? prototypeDarkVideo : prototypeLightVideo} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </MockupReveal3D>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* RESUMO EXECUTIVO */}
      <section id="resumo" className="py-20 max-w-4xl mx-auto px-6 transition-all duration-300">
        <RevealOnScroll direction="up" duration={900}>
          <Eyebrow>Resumo executivo</Eyebrow>
          <div className="space-y-5 mt-4 text-text-secondary text-sm md:text-base leading-relaxed">
            <p>
              Estudantes de cursos online não abandonam uma plataforma apenas por falta de interesse. Muitas vezes, eles perdem ritmo, deixam de perceber evolução, estudam de forma isolada e não sentem que o esforço diário gera retorno real.
            </p>
            <p>
              A oportunidade foi criar uma experiência de aprendizagem que tornasse o progresso mais visível, a rotina mais flexível e a motivação mais conectada a recompensas úteis para a vida acadêmica e profissional.
            </p>
            <p>
              A solução foi um app mobile gamificado com plano de estudos personalizável, streaks, metas semanais, loja de recompensas, comunidade, ranking opcional, player com anotações e suporte com IA integrado ao momento de estudo.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* MEU PAPEL */}
      <section id="papel" className="py-20 bg-surface/30 border-y border-border transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll direction="up" duration={900}>
            <Eyebrow>Meu papel</Eyebrow>
            <div className="space-y-5 mt-4 text-text-secondary text-sm md:text-base leading-relaxed">
              <p>
                Este projeto foi desenvolvido em dupla com Najme Simón Alé. Minha atuação passou pela estruturação do problema, condução da lógica de produto, pesquisa com usuários, definição da estratégia de gamificação, desenho de fluxos, prototipação, refinamento visual da interface e uso de IA como apoio ao processo de design.
              </p>
              <p>
                Também atuei na transformação do case em uma experiência navegável para web, aproximando design, narrativa e implementação front-end. Essa etapa foi importante para comunicar melhor as decisões do projeto e tornar o case mais fácil de ser avaliado por recrutadores, professores e stakeholders.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {competencyChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-border text-xs text-text-primary font-semibold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {chip}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROBLEMA REAL */}
      <section id="problema" className="py-20 max-w-6xl mx-auto px-6 transition-all duration-300">
        <RevealOnScroll direction="up" duration={900}>
          <Eyebrow>Problema real</Eyebrow>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
            O problema não estava apenas na interface. Estava na forma como a experiência de estudo lidava com rotina, frustração e continuidade. Em vez de pensar só em telas mais bonitas, investigamos como o produto poderia ajudar o aluno a voltar, perceber evolução e sentir que cada pequena sessão de estudo fazia parte de uma jornada maior.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {tensionCards.map((tension, idx) => (
            <RevealOnScroll key={tension.title} direction="up" delay={idx * 100} duration={800}>
              <div className="p-5 rounded-2xl bg-surface border border-border/80 hover:border-brand/25 hover:-translate-y-1 transition-all duration-300 h-full">
                <tension.icon className="w-5 h-5 text-brand mb-3" />
                <h4 className="font-bold text-sm text-text-primary">{tension.title}</h4>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* PESQUISA QUE VIROU DECISÃO */}
      <section id="pesquisa" className="py-20 bg-surface/20 border-y border-border transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll direction="up" duration={900}>
            <Eyebrow>Pesquisa que virou decisão</Eyebrow>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {researchBlocks.map((block, idx) => (
              <RevealOnScroll key={block.title} direction="up" delay={idx * 100} duration={900}>
                <div className="p-6 rounded-2xl bg-surface-elevated border border-border h-full">
                  <h4 className="font-bold text-sm text-brand-strong mb-2">{block.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{block.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll direction="up" delay={300} duration={900}>
            <p className="text-text-secondary text-sm leading-relaxed mt-8 max-w-3xl">
              A pesquisa ajudou a separar sintomas de causas. O que parecia falta de disciplina apareceu como uma combinação de rotina instável, baixa percepção de progresso e pouca ajuda no momento em que o aluno travava. A partir disso, as decisões de design passaram a responder a comportamentos reais, não apenas a preferências visuais.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* DECISÕES DE PRODUTO */}
      <section id="decisoes" className="py-20 max-w-6xl mx-auto px-6 transition-all duration-300">
        <RevealOnScroll direction="up" duration={900}>
          <Eyebrow>Decisões de produto</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary mt-3 mb-10">
            Insight → decisão → impacto esperado
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {decisionCards.map((card, idx) => (
            <RevealOnScroll key={card.decisao} direction="up" delay={(idx % 3) * 100} duration={900}>
              <div className="p-5 rounded-2xl bg-surface border border-border h-full flex flex-col gap-3">
                <div>
                  <span className="text-xs font-bold text-brand uppercase tracking-wide">Insight</span>
                  <p className="text-xs text-text-secondary leading-relaxed mt-1">{card.insight}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-brand uppercase tracking-wide">Decisão</span>
                  <p className="text-sm font-bold text-text-primary leading-snug mt-1">{card.decisao}</p>
                </div>
                <div className="mt-auto pt-2 border-t border-border/60">
                  <span className="text-xs font-bold text-brand-strong uppercase tracking-wide">Impacto esperado</span>
                  <p className="text-sm text-text-secondary leading-relaxed mt-1">{card.impacto}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* UI E EXPERIÊNCIA */}
      <section id="ui" className="py-20 bg-surface/30 border-y border-border transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll direction="up" duration={900}>
            <Eyebrow>UI e experiência</Eyebrow>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
              A interface foi desenhada para equilibrar motivação e clareza. Como o contexto de uso envolve estudo, ansiedade e retomada de hábito, a UI precisava ser estimulante sem parecer infantilizada. O uso de progresso, cards, contraste, estados visuais e microinterações foi pensado para orientar o aluno sem sobrecarregar a jornada.
            </p>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {uiVideoBlocks.map((block, idx) => (
              <RevealOnScroll key={block.title} direction="up" delay={(idx % 3) * 100} duration={900}>
                <div className="rounded-2xl bg-surface-elevated border border-border overflow-hidden">
                  <div className="aspect-[9/16] bg-black">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src={block.video} type="video/mp4" />
                    </video>
                  </div>
                  <p className="text-xs font-bold text-text-primary text-center py-3">{block.title}</p>
                </div>
              </RevealOnScroll>
            ))}

            <RevealOnScroll direction="up" delay={300} duration={900}>
              <div className="rounded-2xl bg-surface-elevated border border-border h-full flex flex-col items-center justify-center gap-3 p-8 text-center">
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-brand" />
                  <Moon className="w-5 h-5 text-brand-strong" />
                </div>
                <p className="text-xs font-bold text-text-primary">Dark/light mode</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Todo o produto foi construído com temas claro e escuro nativos, alternáveis a qualquer momento.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* IA APLICADA AO PROCESSO */}
      <section id="ia" className="py-20 max-w-6xl mx-auto px-6 transition-all duration-300">
        <RevealOnScroll direction="up" duration={900}>
          <Eyebrow>IA aplicada ao processo</Eyebrow>
          <div className="space-y-5 mt-4 text-text-secondary text-sm md:text-base leading-relaxed max-w-3xl">
            <p>
              Usei IA como ferramenta de aceleração e pensamento crítico durante o processo, principalmente para organizar hipóteses, comparar alternativas de arquitetura, revisar microcopys, apoiar documentação, testar narrativas do case e aproximar o design da implementação front-end.
            </p>
            <p>
              O ponto central não foi substituir o processo de design, mas aumentar a velocidade de iteração, melhorar a clareza das decisões e transformar entregáveis visuais em uma narrativa de produto mais completa.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {aiCards.map((card, idx) => (
            <RevealOnScroll key={card.title} direction="up" delay={idx * 80} duration={800}>
              <div className="p-5 rounded-2xl bg-surface border border-border h-full text-center flex flex-col items-center gap-2">
                <card.icon className="w-5 h-5 text-brand" />
                <p className="text-xs font-bold text-text-primary leading-snug">{card.title}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* VALIDAÇÃO COM USUÁRIOS */}
      <section id="validacao" className="py-20 bg-surface/20 border-y border-border transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll direction="up" duration={900}>
            <Eyebrow>Validação com usuários</Eyebrow>
            <div className="space-y-5 mt-4 text-text-secondary text-sm md:text-base leading-relaxed">
              <p>
                Realizamos testes de usabilidade com usuários representativos da persona para observar compreensão, navegação e fricções nos principais fluxos. As tarefas mais diretas, como configurar o plano e navegar pela home, tiveram boa compreensão. Já fluxos como resgate de recompensas exigiram ajustes de microcopy e maior destaque visual nos CTAs.
              </p>
              <p>
                O aprendizado mais importante foi perceber que a gamificação só funciona quando o usuário entende claramente o que fez, quanto avançou e qual será o próximo passo.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* APRENDIZADOS E PRÓXIMOS PASSOS */}
      <section id="aprendizados" className="py-20 max-w-4xl mx-auto px-6 transition-all duration-300">
        <RevealOnScroll direction="up" duration={900}>
          <Eyebrow>Aprendizados e próximos passos</Eyebrow>
          <div className="space-y-5 mt-4 text-text-secondary text-sm md:text-base leading-relaxed">
            <p>
              Se eu evoluísse o projeto hoje, aprofundaria três frentes: testar a solução com estudantes de áreas além de UX/UI, criar métricas mais claras para retenção e ativação, e aproximar ainda mais o design system da implementação real com tokens, componentes e documentação técnica.
            </p>
            <p>
              Também exploraria melhor o papel da IA dentro do produto, não como um assistente genérico, mas como suporte contextual no momento em que o aluno trava, precisa revisar um conceito ou organizar próximos passos de estudo.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* FECHAMENTO */}
      <section id="contato" className="py-24 max-w-5xl mx-auto px-6 relative transition-all duration-300">
        <div className="bg-gradient-to-b from-surface to-page border border-border rounded-[2.5rem] p-8 md:p-14 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <RevealOnScroll direction="up" duration={900}>
              <p className="text-lg md:text-xl font-bold text-text-primary leading-relaxed max-w-3xl mx-auto">
                O UNIEDU foi o projeto em que consolidei uma visão mais completa sobre produto digital: entender comportamento, transformar pesquisa em decisão, desenhar uma interface consistente, validar com pessoas reais e comunicar a solução de forma clara.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed max-w-2xl mx-auto mt-5">
                Mais do que um app gamificado, este case mostra como penso design: com empatia, estratégia, critério visual, uso inteligente de IA e proximidade com implementação.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={150} duration={900}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={PROTOTYPE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl text-xs font-bold tracking-wide hover:bg-opacity-95 shadow-lg shadow-brand/20 transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  Testar protótipo
                  <Smartphone className="w-4 h-4" />
                </a>
                <a
                  href="/"
                  className="w-full sm:w-auto px-8 py-4 bg-surface text-text-primary border border-border rounded-2xl text-xs font-bold tracking-wide hover:bg-surface-elevated transition-all active:scale-98"
                >
                  Ver versão TCC
                </a>
                <a
                  href={AUTHORS.lucas.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-surface text-text-primary border border-border rounded-2xl text-xs font-bold tracking-wide hover:bg-surface-elevated transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  Entrar em contato
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface py-10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
          <p className="text-xs text-text-secondary leading-relaxed">
            Case UNIEDU — projeto desenvolvido por{" "}
            <span className="font-semibold text-text-primary">{AUTHORS.lucas.name}</span> em dupla com{" "}
            <span className="font-semibold text-text-primary">{AUTHORS.najme.name}</span>.
          </p>
          <p className="text-xs">
            <a
              href="/"
              className="underline decoration-border underline-offset-2 text-text-secondary/70 hover:text-brand-strong transition-colors"
            >
              Ver versão completa/TCC →
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
