import { useState } from "react";
import { Compass, Eye, ShieldAlert, Sparkles, MessageSquare, Smile } from "lucide-react";

export default function JourneyMap() {
  const [activeStage, setActiveStage] = useState("descoberta");

  const stages = [
    {
      id: "descoberta",
      label: "1. Descoberta",
      desc: "Busca inicial",
      contexto: "Sofia quer migrar para UX/UI. Busca um curso introdutório, direto ao ponto e que seja encaixável em sua rotina.",
      acoes: [
        "Pesquisa no Google e YouTube por conteúdos introdutórios",
        "Assiste a vídeos iniciais explicativos de migração",
        "Conversa com colegas de trabalho que já atuam na área"
      ],
      pensamentos: [
        "Quero entender o básico de UX/UI sem perder tempo.",
        "Preciso encaixar isso na minha rotina."
      ],
      sentimentos: ["Curiosidade", "Empolgação", "Insegurança", "Medo"],
      dores: [
        "Não sabe por onde começar em meio a tanto conteúdo solto.",
        "Medo de investir em algo prolixo e desorganizado."
      ],
      oportunidades: [
        "Trilha de aprendizado linear e clara.",
        "Exemplos práticos e objetivos nas primeiras aulas.",
        "Aulas introdutórias gratuitas para avaliação da didática."
      ]
    },
    {
      id: "consideracao",
      label: "2. Consideração",
      desc: "Análise da Proposta",
      contexto: "Sofia compara os cursos disponíveis buscando conteúdo sólido, acompanhamento próximo e uma comunidade ativa de suporte.",
      acoes: [
        "Lê avaliações de ex-alunos e cases de portfólio",
        "Analisa detalhadamente a ementa, módulos e duração",
        "Verifica a validade do certificado e o suporte de monitores"
      ],
      pensamentos: [
        "Quero algo que me transmita segurança de que vou estar preparada pro mercado de trabalho."
      ],
      sentimentos: ["Esperança", "Indecisão", "Ansiedade"],
      dores: [
        "Sentimento de que as plataformas tradicionais são muito impessoais.",
        "Vídeos longos e prolixos sem linearidade clara.",
        "Falta de um preview prático de como funciona a plataforma por dentro."
      ],
      oportunidades: [
        "Exibir a estrutura visual e clara da trilha de estudos.",
        "Destacar o suporte humano constante e canais de tira-dúvidas.",
        "Oferecer um tour ou preview interativo do produto antes da compra."
      ]
    },
    {
      id: "decisao",
      label: "3. Decisão",
      desc: "O Primeiro Passo",
      contexto: "Sofia escolhe a plataforma que aparenta ser mais direta e com melhor apoio. Ela inicia motivada, mas precisa criar consistência.",
      acoes: [
        "Realiza o login e faz as primeiras configurações",
        "Inicia as primeiras videoaulas introdutórias",
        "Busca os canais de suporte e fóruns de sua turma"
      ],
      pensamentos: [
        "Às vezes não sei por onde começar.",
        "Quero algo direto e com pessoas para trocar dúvidas."
      ],
      sentimentos: ["Motivação", "Frustração", "Ansiedade"],
      dores: [
        "Sensação imediata de solidão ao iniciar os estudos noturnos.",
        "Dificuldade de manter o ritmo nos primeiros dias sem acompanhamento ativo."
      ],
      oportunidades: [
        "Onboarding interativo e gamificado de configuração de perfil.",
        "Plano de estudos flexível configurável desde o primeiro acesso.",
        "Ambiente de estudos acolhedor e com ranking desativado por padrão."
      ]
    },
    {
      id: "adocao",
      label: "4. Adoção",
      desc: "Estudo Habitual",
      contexto: "Ela assiste às aulas e interage com as ferramentas internas. A velocidade e a praticidade são chaves na rotina.",
      acoes: [
        "Utiliza o bloco de notas integrado enquanto assiste",
        "Acelera os vídeos em sessões de cansaço extremo",
        "Posta dúvidas pontuais e responde a colegas no fórum"
      ],
      pensamentos: [
        "Não gosto de competir, quero um ambiente colaborativo.",
        "Gostei da liberdade, mas sinto falta de alguém para trocar ideias."
      ],
      sentimentos: ["Felicidade", "Solidão", "Frustração"],
      dores: [
        "Frustração severa quando não obtém respostas rápidas em dúvidas.",
        "Falta de espaço integrado para fazer anotações sem pausar o player.",
        "Dificuldade em manter foco caso o conteúdo pareça desatualizado."
      ],
      oportunidades: [
        "Bloco de notas integrado sincronizado com o tempo do vídeo (timestamps).",
        "Medalhas, conquistas ou incentivos simbólicos por módulo concluído.",
        "Certificado intermediário e badges colecionáveis como reforço positivo."
      ]
    },
    {
      id: "fidelizacao",
      label: "5. Fidelização",
      desc: "Evolução Tangível",
      contexto: "Finaliza parte da jornada. Sofia sente-se mais confiante para portfólio, mas valoriza imensamente a comunidade e o networking.",
      acoes: [
        "Compartilha conquistas e certificados intermediários no LinkedIn",
        "Participa de eventos ao vivo e mentorias em grupo",
        "Indica a plataforma para colegas interessados em migração"
      ],
      pensamentos: [
        "Gostei do curso, principalmente do apoio dos professores.",
        "Me sinto cada vez mais pronta para entrar no mercado."
      ],
      sentimentos: ["Satisfação", "Orgulho", "Pertencimento"],
      dores: [
        "Dificuldade para manter o networking ativo após concluir as aulas.",
        "Perda de contato com professores e monitores ao fim do curso."
      ],
      oportunidades: [
        "Acesso contínuo e vitalício à comunidade e ao chat de alunos.",
        "Convites preferenciais para mentorias avançadas e trilhas corporativas.",
        "Eventos integrando ex-alunos com recrutadores e profissionais ativos."
      ]
    }
  ];

  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section id="pesquisa" className="py-24 bg-surface/10 border-y border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Entendimento do Comportamento</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Jornada da Persona Sofia</h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-sm leading-relaxed">
            A jornada da Sofia organiza os principais momentos de decisão, uso e continuidade identificados na pesquisa. Ela ajudou a transformar dores comportamentais em oportunidades de produto, conectando motivação, suporte, progresso e retenção.
          </p>
        </div>

        {/* Tab Headers */}
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none border-b border-border mb-12">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`flex-1 text-center py-4 px-5 rounded-2xl border transition-all duration-300 flex-shrink-0 min-w-[160px] md:min-w-0 cursor-pointer ${
                activeStage === stage.id
                  ? "bg-surface-elevated border-brand/40 shadow-md scale-[1.01]"
                  : "bg-surface/30 border-border/40 opacity-60 hover:opacity-100"
              }`}
            >
              <p className={`text-xs font-bold ${activeStage === stage.id ? "text-brand-strong" : "text-text-primary"}`}>
                {stage.label}
              </p>
              <p className="text-[10px] text-text-secondary mt-1">{stage.desc}</p>
            </button>
          ))}
        </div>

        {/* Journey Content Grid */}
        <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-10 shadow-lg relative transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/3 dark:bg-brand/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Context, Actions, Thoughts, Feelings */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Contexto */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-brand uppercase tracking-wider block">Contexto Comportamental</span>
                <div className="flex gap-2.5 items-start">
                  <Compass className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-text-secondary leading-relaxed">{current.contexto}</p>
                </div>
              </div>

              {/* Ações */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <Eye className="w-4 h-4 text-brand-strong" />
                  Ações Realizadas
                </h4>
                <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-5 leading-relaxed">
                  {current.acoes.map((acao, i) => (
                    <li key={i}>{acao}</li>
                  ))}
                </ul>
              </div>

              {/* Sentimentos (Chips) */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <Smile className="w-4 h-4 text-brand-strong" />
                  Sentimentos Associados
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {current.sentimentos.map((sent, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand-strong text-[10px] font-bold"
                    >
                      {sent}
                    </span>
                  ))}
                </div>
              </div>

              {/* O que ela Pensa */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-strong" />
                  O que ela Pensa / Citações
                </h4>
                <div className="space-y-2">
                  {current.pensamentos.map((pens, i) => (
                    <div
                      key={i}
                      className="bg-surface p-3 rounded-2xl border border-border/60 text-xs text-text-secondary italic leading-relaxed relative"
                    >
                      <span className="absolute top-2 left-3 text-2xl text-brand-soft/20 font-serif">“</span>
                      <p className="pl-5">{pens}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side: Dores (Friction Points) & Opportunities */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Dores */}
              <div className="bg-red-500/5 dark:bg-red-500/3 border border-red-500/10 rounded-2xl p-6 space-y-3">
                <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                  Dores / Pontos de Fricção
                </h4>
                <ul className="space-y-2 text-xs text-text-secondary list-disc pl-5 leading-relaxed">
                  {current.dores.map((dor, i) => (
                    <li key={i} className="marker:text-red-500/70">{dor}</li>
                  ))}
                </ul>
              </div>

              {/* Oportunidades */}
              <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 space-y-3">
                <h4 className="text-xs font-bold text-brand-strong uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand" />
                  Oportunidades de Produto
                </h4>
                <ul className="space-y-2 text-xs text-text-secondary list-disc pl-5 leading-relaxed">
                  {current.oportunidades.map((op, i) => (
                    <li key={i} className="marker:text-brand">{op}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
