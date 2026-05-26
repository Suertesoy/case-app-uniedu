import { useState } from "react";
import { Compass, Eye, ShieldAlert, Sparkles, BookOpen } from "lucide-react";

export default function JourneyMap() {
  const [activeStage, setActiveStage] = useState("descoberta");

  const stages = [
    {
      id: "descoberta",
      label: "1. Descoberta",
      desc: "Sofrendo com a dispersão",
      contexto: "Sofia percebe que seus cursos EAD atuais não a motivam a concluir os módulos. Ela estuda esporadicamente, mas se sente dispersa.",
      acao: "Procura fóruns de design e busca por plataformas alternativas com métodos focados em constância.",
      pensamento: "'Preciso de algo que se ajuste à minha rotina cansativa, e não de videoaulas infinitas de 1 hora.'",
      dor: "Fadiga extrema ao chegar do trabalho e ver um dashboard entediante e sem vida.",
      oportunidade: "Captar o interesse mostrando microdicas de constância e uma proposta de valor focada em progresso diário de 15 minutos."
    },
    {
      id: "consideracao",
      label: "2. Consideração",
      desc: "Análise da Proposta",
      contexto: "Conhece a proposta do UNIEDU. O conceito de progresso visível e recompensas reais chama sua atenção.",
      acao: "Lê sobre o funcionamento do plano de estudos adaptável e da loja integrada.",
      pensamento: "'Será que isso realmente vai me ajudar a manter o ritmo ou é só mais uma promessa de gamificação boba?'",
      dor: "Medo de investir tempo em mais uma plataforma e abandoná-la nas primeiras semanas.",
      oportunidade: "Demonstrar valor imediato de forma transparente, reforçando a seriedade acadêmica da loja de recompensas."
    },
    {
      id: "decisao",
      label: "3. Decisão",
      desc: "O Primeiro Passo",
      contexto: "Sofia cria sua conta e realiza o primeiro onboarding focado em definir sua meta de tempo semanal.",
      acao: "Responde às perguntas do assistente para formatar um plano realista de 3 aulas semanais de 15 min.",
      pensamento: "'Gostei de não ser obrigada a seguir um cronograma rígido. Vou tentar assistir a primeira aula hoje.'",
      dor: "Dúvida sobre conseguir encaixar a meta inicial nas noites de cansaço extremo.",
      oportunidade: "Reforçar o micro-onboarding inicial com mensagens de incentivo (UX Writing) e feedback imediato de progresso."
    },
    {
      id: "adocao",
      label: "4. Adoção",
      desc: "Estudo Habitual",
      contexto: "Ela estuda há 2 semanas. Usa o player integrado e faz anotações rápidas sincronizadas sem trocar de tela.",
      acao: "Completa sua meta semanal, acumula pontos e acompanha seu streak de 5 dias.",
      pensamento: "'É prático anotar as coisas sem pausar o vídeo o tempo todo. E ver meus pontos subindo me faz sentir produtiva.'",
      dor: "Esquecimento eventual em dias corridos ou bloqueio ao travar em um exercício complexo.",
      oportunidade: "Enviar notificações push discretas no celular antes de quebrar o streak e oferecer IA contextual no chat."
    },
    {
      id: "fidelizacao",
      label: "5. Fidelização",
      desc: "Evolução Tangível",
      contexto: "Após 2 meses, Sofia resgatou uma mentoria de portfólio na loja com os pontos que acumulou estudando.",
      acao: "Renova sua assinatura de estudos e recomenda o aplicativo para colegas de trabalho.",
      pensamento: "'Pela primeira vez, terminei um módulo e ganhei um feedback real no meu portfólio pelo meu esforço diário.'",
      dor: "Sentimento de platô ou fim das recompensas motivadoras de curto prazo.",
      oportunidade: "Atualizar os benefícios da loja periodicamente e incentivar Sofia a se tornar mentora de novos alunos na comunidade."
    }
  ];

  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section className="py-24 bg-surface/10 border-y border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Fluxo e Sentimento</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Jornada do Usuário</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm">
            Mapeamento estratégico da jornada comportamental da persona Sofia, cobrindo sentimentos, dores e oportunidades do primeiro contato à fidelização.
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
                  ? "bg-surface-elevated border-brand/40 shadow-md"
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

        {/* Tab Content Display */}
        <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-8 shadow-lg relative transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/3 dark:bg-brand/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Context & Action */}
            <div className="md:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] font-bold text-brand uppercase tracking-wider">Cenário Comportamental</span>
                <h4 className="text-xl font-bold text-text-primary flex items-center gap-2">
                  <Compass className="w-5 h-5 text-brand" />
                  Contexto Atual
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">{current.contexto}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-text-primary flex items-center gap-2">
                  <Eye className="w-5 h-5 text-brand" />
                  Ação do Usuário
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">{current.acao}</p>
              </div>

              <div className="bg-brand/5 border border-brand/15 rounded-2xl p-5 italic text-text-primary text-xs relative">
                <span className="absolute top-3 left-4 text-3xl text-brand-soft/40 font-serif leading-none">“</span>
                <p className="pl-6 relative z-10 leading-relaxed">{current.pensamento}</p>
              </div>
            </div>

            {/* Right side: Pain & Opportunity */}
            <div className="md:col-span-6 space-y-6">
              {/* Dor */}
              <div className="bg-red-500/5 dark:bg-red-500/3 border border-red-500/10 rounded-2xl p-6 space-y-2">
                <h4 className="text-sm font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                  Dor / Ponto de Fricção
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">{current.dor}</p>
              </div>

              {/* Oportunidade */}
              <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 space-y-2">
                <h4 className="text-sm font-bold text-brand-strong uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand" />
                  Oportunidade de Produto
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">{current.oportunidade}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
