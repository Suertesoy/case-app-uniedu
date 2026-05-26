import { useState } from "react";
import { CheckCircle2, ChevronRight, AlertCircle, Sparkles, HelpCircle } from "lucide-react";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("home");

  const modules = [
    {
      id: "home",
      label: "Home de Progresso",
      subtitle: "Gamificação e tracking comportamental",
      dor: "Sofia estuda esporadicamente e sente que seu esforço diário é invisível, perdendo o incentivo ao ver apenas barras de progresso semestrais rígidas.",
      insight: "Os alunos necessitam de feedback imediato de suas pequenas vitórias de aprendizagem para estabelecer constância como hábito.",
      decisao: "Criar uma Home com foco em micro-onboarding, exibindo um saldo de pontos visível, streaks ativos (sequência de dias) e atalhos rápidos de continuidade do conteúdo.",
      telaDesc: "Painel mobile dinâmico com indicador de sequência (ex. ⚡ 5 Dias), checklist de boas-vindas e pontuação acumulada.",
      valor: "Transforma o esforço incremental do aluno em progresso tangível e motivador desde os primeiros segundos do dia.",
      // Placeholder data
      mockTitle: "Home de Progresso",
      mockContent: (
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-border/40 pb-2">
            <div>
              <p className="text-[8px] text-text-secondary uppercase">BOM DIA,</p>
              <p className="font-bold text-text-primary text-[11px]">Sofia Martins</p>
            </div>
            <div className="bg-brand/10 border border-brand/20 rounded-full px-2 py-0.5 text-brand-strong text-[8px] font-bold">
              ⚡ 5 Dias Ativos
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-brand to-rose-600 rounded-2xl p-3 text-white flex justify-between items-center shadow-sm">
            <div>
              <p className="text-[8px] text-white/80">VOCÊ ESTÁ EM</p>
              <p className="font-bold text-[11px]">UX Strategy Avançado</p>
              <p className="text-[8px] text-white/70 mt-1">Aulas 4 de 12 (35% concluído)</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px]">▶</div>
          </div>

          <div className="bg-surface-elevated border border-border rounded-xl p-2.5 space-y-2">
            <p className="font-bold text-[9px] text-text-primary">Metas Iniciais</p>
            <div className="space-y-1 text-[8px]">
              <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                <span>✓</span> Assistir 1ª aula do módulo
              </div>
              <div className="flex items-center gap-1 text-text-primary">
                <span className="w-2 h-2 rounded-full border border-border inline-block" /> Fazer uma anotação rápida
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-[8px]">
            <div className="bg-surface border border-border rounded-xl p-2">
              <p className="text-text-secondary">PONTOS ACUMULADOS</p>
              <p className="text-[12px] font-bold text-brand-strong">450 pts</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-2">
              <p className="text-text-secondary">CONQUISTAS</p>
              <p className="text-[12px] font-bold text-text-primary">12 salvas</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "estatisticas",
      label: "Plano de Estudos",
      subtitle: "Cronograma dinâmico e flexível",
      dor: "A rigidez dos cronogramas tradicionais pune alunos em semanas atribuladas de trabalho, gerando frustração e sensação de incapacidade.",
      insight: "A flexibilidade estimula a constância. É mais efetivo diminuir o ritmo temporariamente do que forçar o abandono.",
      decisao: "Desenvolver um configurador que permite ajustar metas semanais por volume (ex. 3 aulas por semana) e sugere revisões curtas em dias mais cheios.",
      telaDesc: "Painel de cronograma semanal com gráficos de barras de preenchimento de foco e lembretes para manter o streak ativo.",
      valor: "Reduz a ansiedade do estudante por meio de um planejamento flexível que se molda à vida real.",
      // Placeholder data
      mockTitle: "Plano de Estudos",
      mockContent: (
        <div className="space-y-4">
          <div>
            <p className="text-[8px] text-text-secondary uppercase">META DE APRENDIZADO</p>
            <p className="font-bold text-text-primary text-[11px]">Consistência Semanal</p>
          </div>

          <div className="bg-surface-elevated border border-border rounded-xl p-2.5 space-y-2">
            <div className="flex justify-between text-[8px]">
              <span className="font-semibold text-text-primary">Meta Semanal</span>
              <span className="text-brand-strong font-bold">3 / 5 aulas concluídas</span>
            </div>
            <div className="w-full bg-border/20 h-2 rounded-full overflow-hidden">
              <div className="bg-brand h-full w-3/5 rounded-full" />
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-2.5">
            <p className="text-[8px] text-text-secondary font-bold mb-2 uppercase">DIAS ATIVOS NESTA SEMANA</p>
            <div className="flex justify-between text-[8px]">
              {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="text-text-secondary">{d}</span>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${i > 0 && i < 4 ? "bg-brand text-white" : "bg-surface-elevated border border-border text-text-secondary"}`}>
                    {i > 0 && i < 4 ? "✓" : "-"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand/10 border border-brand/20 rounded-xl p-2 text-center text-[8px] text-text-secondary leading-normal">
            <strong className="text-brand-strong block">Sugestão do Dia:</strong>
            Estudar 15 minutos hoje garante que sua meta continue ativa!
          </div>
        </div>
      )
    },
    {
      id: "player",
      label: "Player Integrado",
      subtitle: "Centralização de foco e anotações rápidas",
      dor: "A dispersão mental provocada ao alternar entre janelas de vídeo e softwares externos de notas sabota o fluxo de concentração.",
      insight: "Escrever e sintetizar ideias no momento em que são assistidas fixa o conteúdo e economiza tempo de revisão.",
      decisao: "Integrar um bloco de notas contextualizado diretamente abaixo do vídeo, salvando anotações vinculadas aos timestamps do player.",
      telaDesc: "Interface com player de vídeo em andamento e editor de notas ricas abaixo com salvamento automático local.",
      valor: "Mantém a atenção focada em um único espaço, eliminando o atrito de troca de ferramentas.",
      // Placeholder data
      mockTitle: "Player Integrado",
      mockContent: (
        <div className="space-y-4">
          <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden border border-border">
            <span className="text-[8px] text-gray-500 font-bold uppercase">[Player de Vídeo]</span>
            <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[6px] text-gray-400">
              <div className="w-2/3 h-1 bg-brand rounded-full" />
              <span>12:45 / 24:00</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-primary text-[10px]">Aula 4: UX Research na Prática</h4>
            <p className="text-[8px] text-text-secondary">Módulo 2: Pesquisa e Descoberta</p>
          </div>

          <div className="bg-surface-elevated border border-border rounded-xl p-2.5 space-y-2">
            <div className="flex justify-between items-center text-[8px]">
              <span className="font-bold text-text-primary">Bloco de Notas</span>
              <span className="bg-surface px-1 py-0.5 rounded border border-border text-text-secondary">Salvo em 12:40</span>
            </div>
            <div className="bg-surface p-2 rounded text-[8px] text-text-secondary border border-border/50 leading-relaxed italic">
              "Sofia prefere estudar de manhã cedo. A maior dor identificada nas entrevistas..."
            </div>
          </div>
        </div>
      )
    },
    {
      id: "loja",
      label: "Loja de Recompensas",
      subtitle: "Fechamento do loop de valor",
      dor: "Pontos fictícios ou medalhas virtuais vazias perdem o apelo em poucas semanas por não gerarem valor real para a vida do aluno.",
      insight: "Para motivar o esforço contínuo, a recompensa deve ser percebida como útil e valiosa no mundo real.",
      decisao: "Acoplar uma loja interna onde os pontos acumulados por constância são resgatados por mentoria individualizada, revisões de portfólio e apoio acadêmico.",
      telaDesc: "Catálogo de prêmios com descrição de pontos necessários, indicação de saldo e CTAs de resgate imediato.",
      valor: "Vincula o esforço diário de estudos a conquistas profissionais tangíveis e crescimento na carreira.",
      // Placeholder data
      mockTitle: "Loja de Recompensas",
      mockContent: (
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-border/40 pb-2">
            <div>
              <p className="text-[8px] text-text-secondary">SEUS PONTOS</p>
              <p className="font-bold text-text-primary text-[11px]">Loja de Recompensas</p>
            </div>
            <span className="text-[10px] font-bold text-brand-strong">🪙 450 pts</span>
          </div>

          <div className="space-y-2">
            <div className="bg-surface-elevated border border-border rounded-xl p-2 flex justify-between items-center">
              <div>
                <p className="font-semibold text-text-primary text-[9px]">Mentoria de Portfólio (1h)</p>
                <p className="text-[7px] text-text-secondary">Feedback com designers seniores</p>
              </div>
              <span className="bg-brand text-white text-[8px] font-bold px-2 py-1 rounded-lg">400 🪙</span>
            </div>

            <div className="bg-surface-elevated border border-border rounded-xl p-2 flex justify-between items-center opacity-50">
              <div>
                <p className="font-semibold text-text-primary text-[9px]">Revisão de TCC / Artigo</p>
                <p className="text-[7px] text-text-secondary">Análise ortográfica e metodológica</p>
              </div>
              <span className="bg-surface border border-border text-text-secondary text-[8px] font-bold px-2 py-1 rounded-lg">600 🪙</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "comunidade",
      label: "Comunidade e Suporte",
      subtitle: "Aprendizagem colaborativa com IA",
      dor: "Travar em exercícios práticos e ter que esperar dias por respostas em fóruns legados paralisa o ritmo de aprendizado do estudante.",
      insight: "O suporte nos momentos de atrito deve ser ágil e contextualizado com a dúvida exata e anotações do aluno.",
      decisao: "Criar uma aba integrada de suporte híbrido: uma IA que lê o contexto e notas do aluno para guiar a solução, além de um chat direto com monitores.",
      telaDesc: "Fórum interno da turma, chat inteligente com IA contextualizada e área de contato humanizado de monitoria.",
      valor: "Combate o isolamento do EAD e acelera a resolução de dúvidas, removendo barreiras de atrito.",
      // Placeholder data
      mockTitle: "Comunidade e Suporte",
      mockContent: (
        <div className="space-y-4">
          <div>
            <p className="text-[8px] text-text-secondary">SUPORTE E TURMA</p>
            <p className="font-bold text-text-primary text-[11px]">Comunidade Integrada</p>
          </div>

          <div className="bg-brand/10 border border-brand/20 rounded-xl p-2 space-y-1">
            <div className="flex items-center gap-1">
              <span className="text-[7px] text-brand-strong font-bold uppercase">UNIEDU AI</span>
              <span className="w-1 h-1 bg-green-500 rounded-full" />
            </div>
            <p className="text-[8px] text-text-primary leading-normal">
              Percebi que você anotou sobre as dores de Sofia. Quer que eu sugira um modelo de mapa de empatia?
            </p>
          </div>

          <div className="bg-surface-elevated border border-border rounded-xl p-2 space-y-1">
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-brand to-rose-600" />
              <span className="text-[8px] font-bold text-text-primary">Alan S.</span>
              <span className="text-[6px] text-text-secondary">há 10 min</span>
            </div>
            <p className="text-[8px] text-text-secondary truncate">Pessoal, o que acharam da aula sobre Persona no EAD?</p>
          </div>
        </div>
      )
    }
  ];

  const active = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <section id="produto" className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/3 dark:bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="text-center mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">Decisões de Design na Tela</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Decisões de Design Orientadas a Telas</h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-sm">
          Como convertemos as dores e oportunidades comportamentais identificadas na fase de pesquisa em funcionalidades do produto digital.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Left Side: Module Tabs Navigation */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2.5 pb-4 lg:pb-0 scrollbar-none">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(mod.id)}
              className={`flex-1 text-left p-5 rounded-2xl border transition-all duration-300 flex-shrink-0 min-w-[200px] lg:min-w-0 cursor-pointer ${
                activeTab === mod.id
                  ? "bg-surface-elevated border-brand/40 shadow-lg"
                  : "bg-surface/50 border-border/50 opacity-60 hover:opacity-100"
              }`}
            >
              <p className={`text-xs font-bold ${activeTab === mod.id ? "text-brand-strong" : "text-text-primary"}`}>
                {mod.label}
              </p>
              <p className="text-[10px] text-text-secondary mt-1">{mod.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Center: Device Mockup Placeholder */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="w-[300px] h-[550px] bg-black rounded-[48px] border-4 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0 p-4 pt-10 flex flex-col justify-between transition-all duration-300">
            {/* Phone Speaker Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center border border-gray-900">
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
            </div>

            {/* Mobile Screen Container */}
            <div className="absolute inset-0 bg-page p-4 pt-12 flex flex-col justify-between text-xs selection:bg-transparent transition-colors duration-300">
              {/* Inner Mockup Content */}
              {active.mockContent}

              {/* Bottom Navigation Simulated */}
              <div className="border-t border-border pt-2.5 flex justify-between items-center text-text-secondary text-[8px]">
                <span className={activeTab === "home" ? "text-brand-strong font-bold" : ""}>🏠 Home</span>
                <span className={activeTab === "estatisticas" ? "text-brand-strong font-bold" : ""}>📅 Plano</span>
                <span className={activeTab === "player" ? "text-brand-strong font-bold" : ""}>▶ Aulas</span>
                <span className={activeTab === "loja" ? "text-brand-strong font-bold" : ""}>🛒 Loja</span>
                <span className={activeTab === "comunidade" ? "text-brand-strong font-bold" : ""}>💬 Turma</span>
              </div>
            </div>

            {/* Overlay Premium Provisório Placeholder Alert */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white z-30 select-none pointer-events-none">
              <AlertCircle className="w-8 h-8 text-brand mb-2 animate-bounce" />
              <p className="text-[10px] font-bold tracking-wider uppercase text-brand-soft">Provisório</p>
              <p className="text-xs font-semibold mt-1">
                [Placeholder de print do protótipo]
              </p>
              <p className="text-[9px] text-gray-300 mt-2 leading-relaxed">
                Esta tela em HTML/CSS funciona como espaço reservado e será substituída por um print real do protótipo.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed strategic text breakdown */}
        <div className="lg:col-span-4 bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-8 shadow-md relative transition-all duration-300">
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-[8px] font-bold text-brand uppercase tracking-widest">Análise de Fluxo</span>
              <h3 className="text-xl font-bold text-text-primary">{active.label}</h3>
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

              <div className="bg-brand/5 border border-brand/10 p-3 rounded-xl flex gap-2 items-center text-[10px] text-brand-strong font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                <span>Valor para o aluno: {active.valor}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
