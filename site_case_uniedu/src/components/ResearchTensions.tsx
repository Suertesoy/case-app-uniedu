import { Users, Compass, MessageSquare, Sparkles, BookOpen } from "lucide-react";

export default function ResearchTensions() {
  const tensions = [
    {
      icon: Users,
      titulo: "1. Competição motiva alguns, mas pressiona outros",
      achado: "Parte dos alunos se sente motivada por ranking, comparação e disputa saudável. Outros, como Sofia, preferem reconhecimento individual e progresso pessoal, sem pressão competitiva.",
      decisao: "Ranking opcional com toggle de visibilidade.",
      impacto: "A plataforma mantém a competição como alavanca de engajamento para quem se motiva com isso, mas não obriga todos os alunos a participarem da lógica competitiva.",
      badge: "Competição virou escolha, não obrigação."
    },
    {
      icon: Compass,
      titulo: "2. Autonomia é valorizada, mas sem estrutura vira abandono",
      achado: "Alguns perfis de alunos valorizam estudar no próprio ritmo, pausar, retomar e encaixar o curso na rotina. Mas, sem trilha clara, metas e acompanhamento, essa autonomia pode virar perda de ritmo.",
      decisao: "Plano de estudos personalizável, checkpoints e progresso visível.",
      impacto: "O aluno mantém total autonomia sobre sua rotina, mas conta com orientação estruturada suficiente para continuar avançando sem se dispersar.",
      badge: "Autonomia com trilha de segurança."
    },
    {
      icon: MessageSquare,
      titulo: "3. IA ajuda, mas sozinha pode parecer fria",
      achado: "Outros participantes da pesquisa querem respostas rápidas, mas também demonstram necessidade de troca humana, comunidade e suporte próximo. Um chatbot isolado pode tornar a experiência impessoal.",
      decisao: "ChatBot IA combinado com monitor humano e comunidade ativa no mesmo ecossistema.",
      impacto: "A experiência ganha agilidade e respostas instantâneas sem perder o acolhimento e a empatia da troca com outras pessoas.",
      badge: "Tecnologia ágil com suporte humano."
    },
    {
      icon: Sparkles,
      titulo: "4. Recompensas engajam quando conectadas ao esforço real",
      achado: "Alguns perfis mais engajados valorizam comemorações em cada nível, marcos visíveis de progresso e o sentimento de reconhecimento pelo esforço contínuo.",
      decisao: "Pontos, conquistas, loja de recompensas e certificados intermediários por módulo concluído.",
      impacto: "A plataforma transforma o avanço de aprendizado diário em progresso percebido e recompensado com prêmios de carreira.",
      badge: "Progresso invisível vira valor percebido."
    },
    {
      icon: BookOpen,
      titulo: "5. Conteúdo profundo precisa de síntese e aplicação",
      achado: "Variações comportamentais de alunos indicam que conteúdos longos, prolixos ou puramente teóricos geram cansaço, perda de foco e dificuldade para retomar o estudo posterior.",
      decisao: "Player com notas integradas, estrutura de aula dividida em blocos e foco em continuidade.",
      impacto: "O estudante consegue assistir às aulas, pausar e retomar seu progresso com facilidade, assimilando o valor prático com notas contextuais.",
      badge: "Foco total na aplicação prática."
    }
  ];

  return (
    <section id="tensoes-pesquisa" className="py-24 bg-surface/20 border-t border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Pontes de Decisão</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Tensões da pesquisa que viraram decisões de produto</h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-sm leading-relaxed">
            As personas ajudaram a sintetizar os perfis principais, mas outros achados da pesquisa revelaram comportamentos complementares. Em vez de forçar uma única resposta para todos os alunos, a solução foi desenhada para acomodar diferentes estilos de motivação, estudo e continuidade.
          </p>
        </div>

        {/* Tension cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {tensions.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-brand-soft/40 transition-all duration-300 shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/3 dark:bg-brand/5 rounded-full blur-[40px] pointer-events-none" />
                
                <div className="space-y-5 relative z-10 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-strong">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <h3 className="text-sm font-bold text-text-primary tracking-tight leading-snug">
                      {t.titulo}
                    </h3>
                  </div>

                  <div className="space-y-4 mt-2">
                    {/* Achado */}
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-text-secondary uppercase tracking-widest block">
                        Achado da Pesquisa
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {t.achado}
                      </p>
                    </div>

                    {/* Decisão */}
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-brand-strong uppercase tracking-widest block">
                        Decisão de Design
                      </span>
                      <p className="text-xs text-text-primary font-semibold leading-relaxed">
                        {t.decisao}
                      </p>
                    </div>

                    {/* Impacto */}
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-text-secondary uppercase tracking-widest block">
                        Impacto no Produto
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {t.impacto}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Badge Destaque */}
                <div className="text-[9px] font-extrabold text-brand-strong bg-brand/10 border border-brand/20 px-3 py-2 rounded-full w-full text-center mt-6 select-none relative z-10">
                  {t.badge}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
