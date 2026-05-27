import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import MockupReveal3D from "./MockupReveal3D";

interface Decision {
  id: string;
  label: string;
  subtitle: string;
  image: string;
  dor: string;
  insight: string;
  decisao: string;
  telaDesc: string;
  valor: string;
}

const decisions: Decision[] = [
  {
    id: "primeiro-acesso",
    label: "Primeiro acesso",
    subtitle: "Login, loading e entrada guiada no produto",
    image: "/case-screens/01-primeiro-acesso.png",
    dor: "Plataformas EAD perdem alunos nos primeiros minutos por interfaces confusas ou fluxos de entrada que não criam expectativa positiva sobre o que vem a seguir.",
    insight: "O primeiro acesso é o momento de maior expectativa e menor comprometimento — a interface deve gerar confiança imediata e curiosidade antes de qualquer conteúdo.",
    decisao: "Projetar um fluxo de login com identidade visual forte, seguido de uma loading experience com narrativa de marca que prepara o aluno para o ecossistema que vai encontrar.",
    telaDesc: "Tela de login com logo UNIEDU, campos de acesso e loading animado com feedback de boas-vindas antes da entrada na Home.",
    valor: "Reduz a ansiedade inicial e cria o primeiro momento de percepção de qualidade do produto, ancorando positivamente a experiência antes mesmo do primeiro conteúdo.",
  },
  {
    id: "plano-estudos",
    label: "Plano de estudos",
    subtitle: "Rotina adaptável ao tempo real do aluno",
    image: "/case-screens/02-plano-estudos.png",
    dor: "Cronogramas rígidos e metas inalcançáveis fazem o aluno desistir na primeira semana em que a vida real não coopera com a grade do curso.",
    insight: "Flexibilidade é a principal variável de retenção em cursos online — quem ajusta o ritmo sem sentir falha continua estudando; quem não consegue, abandona.",
    decisao: "Criar um configurador com planos pré-definidos (Intensivo, Dedicado, Equilibrado, Noturno, Consistente) que o aluno escolhe no onboarding e pode revisar a qualquer momento sem penalidade.",
    telaDesc: "Cards de seleção de plano com ritmo semanal, horas por dia e tag de perfil comportamental. Estado selecionado com checkmark rosa e CTA para salvar.",
    valor: "O aluno entra com expectativa realista sobre seu próprio ritmo, reduzindo a sensação de fracasso e aumentando a adesão no médio prazo.",
  },
  {
    id: "onboarding-jornada",
    label: "Onboarding da jornada",
    subtitle: "Ciclo aprender → interagir → evoluir → ganhar",
    image: "/case-screens/03-onboarding-jornada.png",
    dor: "Alunos não compreendem como o sistema de pontos e recompensas funciona, ignorando funcionalidades que os motivariam a continuar na plataforma.",
    insight: "Explicar o ciclo de valor logo no primeiro acesso transforma a plataforma de repositório de vídeos em uma experiência de progresso com recompensas reais e percebidas.",
    decisao: "Criar um modal de onboarding na Home que apresenta visualmente o ecossistema completo — os 4 pilares da jornada — com ícones temáticos e linguagem direta.",
    telaDesc: "Modal centralizado com mascote UNIEDU, 4 etapas ilustradas (Aprender, Interagir, Evoluir, Ganhar) e CTA 'ENTENDI' para liberar a Home principal.",
    valor: "Aumenta o entendimento do produto desde o dia 1, gerando engajamento com todas as funcionalidades da plataforma e não apenas com as aulas.",
  },
  {
    id: "home-progresso",
    label: "Home de progresso",
    subtitle: "Continuidade, aula em destaque e streak visível",
    image: "/case-screens/04-home-progresso.png",
    dor: "Sofia estuda esporadicamente e sente que seu esforço diário é invisível, perdendo o incentivo ao ver apenas barras de progresso semestrais rígidas e impessoais.",
    insight: "Os alunos necessitam de feedback imediato de suas pequenas vitórias para estabelecer constância como hábito — a Home é o momento de maior abertura para essa mensagem.",
    decisao: "Criar uma Home centrada em continuidade: saldo de pontos visível, streak ativo, card de última aula com CTA imediato e acesso rápido ao plano de estudos e dúvidas.",
    telaDesc: "Header com logo, saldo de pontos e notificações. Card de aula em destaque com thumbnail em gradiente, barra de progresso e botão CONTINUAR. Seções de plano e dúvidas.",
    valor: "Transforma o esforço incremental do aluno em progresso tangível e motivador desde os primeiros segundos do dia, reduzindo o abandono por falta de engajamento.",
  },
  {
    id: "jornada-aprendizado",
    label: "Jornada de aprendizado",
    subtitle: "Checklist gamificado que ativa o ecossistema",
    image: "/case-screens/05-jornada-aprendizado.png",
    dor: "Sem orientação sobre o próximo passo, o aluno navega por curiosidade em vez de estratégia, perdendo o fio condutor do progresso e não interagindo com o ecossistema completo.",
    insight: "Gamificar as ações mais valiosas da plataforma com um checklist temporário ativa comportamentos-chave que, quando repetidos, se tornam hábitos duradouros.",
    decisao: "Criar um bloco 'Jornada de aprendizado' na Home com checklist de 4 ações diárias (aula, comentário, conquista, resgate) com badges de recompensa e barra de progresso visível.",
    telaDesc: "Card com gradiente rosa-magenta, barra de progresso da jornada diária, 4 itens interativos com ícone e badge de pontos. Estado concluído com riscado e feedback verde.",
    valor: "Orienta o aluno sobre o que fazer além de assistir aulas, ativando o ciclo completo de valor da plataforma e consolidando hábitos de estudo mais ricos.",
  },
  {
    id: "aulas-trilhas",
    label: "Aulas e trilhas",
    subtitle: "Conteúdo organizado por módulos com progresso claro",
    image: "/case-screens/06-aulas-trilhas.png",
    dor: "Catálogos desordenados geram paralisia por excesso de escolha e impedem o aluno de manter uma trilha coerente de aprendizado ao longo do semestre.",
    insight: "A progressão clara por módulos com indicadores visuais de estado reduz a carga cognitiva e mantém o aluno em movimento — ele sempre sabe o próximo passo.",
    decisao: "Organizar as aulas em módulos sequenciais com barra de progresso individual, acesso rápido à última aula assistida e destaque visual para a próxima aula desbloqueada.",
    telaDesc: "Lista de módulos com aulas numeradas, progresso em barra colorida e ícones de estado (concluído, em andamento). Thumbnail e CTA de continuidade destacados.",
    valor: "O aluno sabe exatamente onde está na trilha e o que vem a seguir, reduzindo o tempo de decisão e aumentando o tempo efetivo dedicado ao conteúdo.",
  },
  {
    id: "player-integrado",
    label: "Player integrado",
    subtitle: "Estudo, notas e contexto no mesmo fluxo",
    image: "/case-screens/07-player-integrado.png",
    dor: "A dispersão mental ao alternar entre o player de vídeo e softwares externos de anotação quebra o fluxo de concentração e reduz a retenção do conteúdo assistido.",
    insight: "Escrever e sintetizar no momento em que o conteúdo é consumido fixa o aprendizado — eliminar o atrito de troca de ferramenta é uma decisão de produto, não apenas de UX.",
    decisao: "Unificar player de vídeo, notas contextuais por aula, discussões e acesso ao suporte IA em uma única tela, com salvamento automático e atalho flutuante para anotar durante o vídeo.",
    telaDesc: "Player com thumbnail em gradiente. Abas de Discussões, Notas, Arquivos e Turma. Bloco de notas com salvamento automático e FAB flutuante para nova anotação.",
    valor: "Mantém a atenção em um único espaço, aumenta a retenção do conteúdo e cria um banco de conhecimento pessoal do aluno dentro da própria plataforma.",
  },
  {
    id: "loja-recompensas",
    label: "Loja de recompensas",
    subtitle: "Pontos convertidos em valor real para a carreira",
    image: "/case-screens/08-loja-recompensas.png",
    dor: "Pontos fictícios ou medalhas virtuais perdem o apelo em poucas semanas por não gerarem valor real para a vida profissional do aluno.",
    insight: "Para motivar o esforço contínuo, a recompensa deve ser útil e valiosa no mundo real — preferencialmente ligada ao crescimento de carreira do próprio aluno.",
    decisao: "Criar uma loja onde pontos acumulados por constância são trocados por mentoria 1:1, review de portfólio, templates Figma, certificados premium e workshops ao vivo.",
    telaDesc: "Header com saldo de pontos. Strip de como ganhar. Filtros por categoria (Digital, Mentoria, Curso, Certificado). Grid de produtos com preço e estado de acessibilidade por saldo.",
    valor: "Vincula o esforço diário a conquistas profissionais tangíveis, tornando a consistência nos estudos uma estratégia de carreira com retorno percebido.",
  },
  {
    id: "comunidade",
    label: "Comunidade",
    subtitle: "Troca entre alunos, prova social e pertencimento",
    image: "/case-screens/09-comunidade.png",
    dor: "Fóruns estáticos e isolados desestimulam a interação genuína e deixam o aluno se sentindo sozinho em um processo que deveria ser coletivo e estimulante.",
    insight: "Prova social e pertencimento a uma comunidade ativa são fatores de retenção tão poderosos quanto a qualidade do conteúdo — em alguns perfis, ainda mais.",
    decisao: "Criar um feed com múltiplas seções (perguntas, feedback de projetos, vagas, eventos, apresentações) e badges de role para diferenciar Mentores, Experientes e Iniciantes.",
    telaDesc: "Feed com cards de publicações, avatar, role badge (Mentor/Experiente/Iniciante) e contadores de reações. Navegação rápida para Perguntas, Feedback, Vagas e Eventos.",
    valor: "Combate o isolamento do EAD e cria senso de comunidade profissional, aumentando o engajamento e a permanência na plataforma por razões sociais além do conteúdo.",
  },
  {
    id: "suporte-ia",
    label: "Suporte e IA contextual",
    subtitle: "Ajuda no momento de dúvida sem quebrar o estudo",
    image: "/case-screens/10-suporte-ia.png",
    dor: "Travar em um exercício e depender de fóruns com resposta incerta paralisa o ritmo e força o abandono da aula — o momento de maior atrito se torna o de maior risco de churn.",
    insight: "O suporte deve ser imediato e contextualizado — uma IA que conhece as notas e o conteúdo atual do aluno guia a solução de forma muito mais eficaz do que um fórum genérico.",
    decisao: "Criar um chat com IA que lê o contexto da aula atual e as anotações do aluno, com rota de escalada para monitor humano quando a dúvida exige intervenção.",
    telaDesc: "Chat com avatar do mascote UNIEDU, bolhas de diálogo com leitura do contexto da aula, sugestões de próximos passos e botão de escalada para monitor.",
    valor: "Resolve dúvidas no momento exato de atrito, sem quebrar o fluxo de estudo e sem depender de fóruns com tempo de resposta imprevisível.",
  },
  {
    id: "perfil-progresso",
    label: "Perfil e progresso",
    subtitle: "Evolução visível, conquistas e próximas metas",
    image: "/case-screens/11-perfil-progresso.png",
    dor: "Alunos perdem a noção de quanto já evoluíram, o que reduz a motivação para continuar em momentos de dificuldade — o esforço acumulado fica invisível.",
    insight: "Ver o próprio crescimento acumulado — aulas, horas, conquistas e certificados — reforça a identidade de quem está progredindo e reduz o churn no médio prazo.",
    decisao: "Criar um perfil que exibe nível atual com XP, conquistas desbloqueadas, estatísticas de estudo (aulas, horas, dias ativos) e histórico de resgates na loja.",
    telaDesc: "Header com avatar e nível atual. Cards de estatísticas, badge de conquistas e histórico de resgates. Seção de próximas metas desbloqueáveis com pontos necessários.",
    valor: "Cria uma narrativa de crescimento pessoal e profissional que o aluno pode visualizar e compartilhar, reforçando sua identidade como alguém em constante evolução.",
  },
];

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState("primeiro-acesso");
  const [imageError, setImageError] = useState(false);

  const active = decisions.find((d) => d.id === activeId) ?? decisions[0];

  const handleSelect = (id: string) => {
    setImageError(false);
    setActiveId(id);
  };

  return (
    <section id="produto" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/3 dark:bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">Decisões de Design na Tela</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Do Problema ao Produto</h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-sm">
          Cada tela do UNIEDU responde a uma dor real identificada na pesquisa. Veja como cada decisão de design foi tomada e qual funcionalidade nasceu dela.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">

        {/* Left: decision list — horizontal scroll on mobile, vertical scroll on desktop */}
        <div className="lg:col-span-3">
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-3 lg:pb-0 lg:max-h-[620px] lg:overflow-y-auto scrollbar-none">
            {decisions.map((d, i) => (
              <button
                key={d.id}
                onClick={() => handleSelect(d.id)}
                className={`text-left p-3.5 rounded-2xl border transition-all duration-300 flex-shrink-0 min-w-[180px] lg:min-w-0 lg:w-full cursor-pointer ${
                  activeId === d.id
                    ? "bg-surface-elevated border-brand/40 shadow-md"
                    : "bg-surface/50 border-border/50 opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className={`text-[9px] font-black flex-shrink-0 mt-0.5 ${activeId === d.id ? "text-brand" : "text-text-secondary"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-[11px] font-bold leading-tight ${activeId === d.id ? "text-brand-strong" : "text-text-primary"}`}>
                      {d.label}
                    </p>
                    <p className="text-[9px] text-text-secondary mt-0.5 leading-tight line-clamp-2">{d.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Center: phone frame with real screenshot */}
        <div className="lg:col-span-5 flex justify-center">
          <MockupReveal3D>
            <div className="w-[280px] h-[560px] bg-[#111] rounded-[44px] border-[5px] border-[#2a2a2a] shadow-2xl relative overflow-hidden flex-shrink-0 transition-all duration-300">

              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#111] rounded-full z-20 flex items-center justify-center border border-[#1a1a1a]">
                <div className="w-1.5 h-1.5 bg-[#222] rounded-full" />
              </div>

              {/* Side buttons — decorative */}
              <div className="absolute left-[-7px] top-[90px] w-1 h-8 bg-[#2a2a2a] rounded-l-sm" />
              <div className="absolute left-[-7px] top-[130px] w-1 h-12 bg-[#2a2a2a] rounded-l-sm" />
              <div className="absolute left-[-7px] top-[154px] w-1 h-12 bg-[#2a2a2a] rounded-l-sm" />
              <div className="absolute right-[-7px] top-[120px] w-1 h-16 bg-[#2a2a2a] rounded-r-sm" />

              {/* Screenshot area */}
              {imageError ? (
                /* Elegant placeholder — shown when image is absent or fails to load */
                <div className="absolute inset-0 bg-page flex flex-col items-center justify-center p-5 text-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-3xl shadow-sm">
                    📱
                  </div>

                  <div className="space-y-1 px-2">
                    <p className="text-[10px] font-bold text-text-primary leading-tight">
                      {active.label}
                    </p>
                    <p className="text-[7px] text-text-secondary leading-relaxed">
                      {active.subtitle}
                    </p>
                  </div>

                  <div className="w-full bg-surface border border-border rounded-xl px-3 py-2.5 space-y-1 text-left">
                    <p className="text-[7px] font-bold text-brand-strong uppercase tracking-wider">Imagem esperada</p>
                    <p className="text-[7px] text-text-secondary font-mono break-all leading-relaxed">
                      {active.image}
                    </p>
                  </div>

                  <div className="w-full bg-brand/5 border border-brand/20 rounded-xl px-3 py-2.5 text-left">
                    <p className="text-[8px] font-semibold text-brand-strong">Como adicionar</p>
                    <p className="text-[7px] text-text-secondary leading-relaxed mt-0.5">
                      Coloque o print em <span className="font-mono text-brand">public/case-screens/</span> com o nome exato acima.
                    </p>
                  </div>
                </div>
              ) : (
                /* Real screenshot — object-contain preserves full screen without cortes */
                <img
                  key={active.image}
                  src={active.image}
                  alt={`Print do protótipo: ${active.label}`}
                  className="absolute inset-0 w-full h-full object-contain bg-page"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </MockupReveal3D>

          {/* Image path hint below phone — visible only for orientation */}
          <div className="hidden lg:block absolute mt-2 text-center">
            <p className="text-[9px] text-text-secondary font-mono opacity-50">{active.image}</p>
          </div>
        </div>

        {/* Right: strategic analysis */}
        <div className="lg:col-span-4 bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 shadow-md relative transition-all duration-300">
          <div className="space-y-6">

            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[8px] font-black text-brand uppercase tracking-widest">
                  Tela {String(decisions.findIndex(d => d.id === activeId) + 1).padStart(2, "0")} / {String(decisions.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-primary leading-tight">{active.label}</h3>
              <p className="text-[10px] text-text-secondary">{active.subtitle}</p>
            </div>

            <div className="w-full h-[1px] bg-border" />

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <span className="text-[8px] font-bold text-red-500 uppercase tracking-wider block">Dor Identificada</span>
                <p className="text-text-secondary leading-relaxed">{active.dor}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-bold text-brand uppercase tracking-wider block">Insight de Pesquisa</span>
                <p className="text-text-secondary leading-relaxed">{active.insight}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-bold text-brand-strong uppercase tracking-wider block">Decisão de Produto</span>
                <p className="text-text-primary font-medium leading-relaxed">{active.decisao}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-bold text-brand uppercase tracking-wider block">Visualização</span>
                <p className="text-text-secondary leading-relaxed italic">{active.telaDesc}</p>
              </div>

              <div className="bg-brand/5 border border-brand/10 p-3 rounded-xl flex gap-2 items-start text-[10px] text-brand-strong font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Valor para o aluno: {active.valor}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
