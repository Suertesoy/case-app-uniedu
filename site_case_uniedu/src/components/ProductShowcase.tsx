import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import MockupReveal3D from "./MockupReveal3D";

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
      mockContent: (
        <div className="space-y-2.5">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#A31545] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-[7px] font-black text-white">U</span>
              </div>
              <div>
                <p className="text-[6px] text-text-secondary uppercase tracking-wider leading-none">Olá,</p>
                <p className="text-[9px] font-bold text-text-primary leading-tight">Fernanda</p>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-brand/10 border border-brand/20 rounded-full px-2 py-0.5">
              <span className="text-[7px]">🪙</span>
              <span className="text-[8px] font-bold text-brand-strong">450 pts</span>
            </div>
          </div>

          {/* Aula em destaque */}
          <div>
            <p className="text-[7px] font-bold text-text-primary mb-1.5">Você está aqui:</p>
            <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gradient-to-br from-[#F48FB1] via-[#EC407A] to-[#A31545] relative h-[60px] flex items-center justify-center">
                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-[#A31545] text-[10px] ml-0.5">▶</span>
                </div>
                <span className="absolute bottom-1 right-1.5 bg-black/60 text-white text-[5px] px-1 py-0.5 rounded font-medium">28:22 / 43:39</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
                  <div className="h-full w-[65%] bg-white/80" />
                </div>
              </div>
              <div className="px-2.5 pt-1.5 pb-2">
                <p className="text-[6px] text-text-secondary leading-tight mb-1.5">UX Research: Pesquisas Longitudinais — Parte 1</p>
                <div className="bg-[#A31545] text-white text-center text-[6px] font-bold py-1 rounded-lg tracking-widest">CONTINUAR</div>
              </div>
            </div>
          </div>

          {/* Jornada de aprendizado */}
          <div className="bg-gradient-to-br from-[#F48FB1] via-[#EC407A] to-[#A31545] rounded-xl p-2.5">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[6px] font-bold text-white/70 uppercase tracking-wider">Jornada de hoje</p>
              <span className="text-[5px] font-bold text-white/80 bg-white/15 px-1 py-0.5 rounded-full">1/4</span>
            </div>
            <div className="h-0.5 bg-white/20 rounded-full mb-2">
              <div className="h-full w-1/4 bg-white/70 rounded-full" />
            </div>
            <div className="space-y-1">
              {[
                { icon: "📚", label: "Assistir uma aula", pts: "+50 pts", done: true },
                { icon: "💬", label: "Comentar na aula", pts: "+10 pts", done: false },
                { icon: "⭐", label: "Ganhar conquista", pts: "+XP", done: false },
                { icon: "🎁", label: "Resgatar prêmio", pts: "🎉", done: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-1.5 px-2 py-1 rounded-lg ${item.done ? "bg-white/20 border border-white/25" : "bg-white/10"}`}>
                  <div className={`w-3.5 h-3.5 rounded-full border flex-shrink-0 flex items-center justify-center ${item.done ? "bg-green-400 border-green-400" : "border-white/40"}`}>
                    {item.done && <span className="text-[5px] text-white font-bold">✓</span>}
                  </div>
                  <span className="text-[8px]">{item.icon}</span>
                  <span className={`text-[7px] flex-1 leading-none ${item.done ? "text-white/50 line-through" : "text-white"}`}>{item.label}</span>
                  <span className={`text-[5px] font-bold px-1 py-0.5 rounded-full flex-shrink-0 ${item.done ? "bg-green-400/30 text-green-200" : "bg-white/15 text-white/70"}`}>{item.pts}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-surface border border-border rounded-xl p-2 text-center">
              <p className="text-[5px] text-text-secondary uppercase tracking-wide">Pontos</p>
              <p className="text-[12px] font-extrabold text-brand-strong mt-0.5">450</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-2 text-center">
              <p className="text-[5px] text-text-secondary uppercase tracking-wide">Sequência</p>
              <p className="text-[10px] font-extrabold text-text-primary mt-0.5">⚡ 5 dias</p>
            </div>
          </div>
        </div>
      ),
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
      mockContent: (
        <div className="space-y-2">
          {/* Header */}
          <div className="border-b border-border/40 pb-2">
            <p className="text-[6px] text-text-secondary uppercase tracking-wider">Meta de aprendizado</p>
            <p className="text-[10px] font-bold text-text-primary leading-tight">Plano de Estudos</p>
          </div>

          {/* Plan cards */}
          <div className="space-y-1.5">
            {[
              { icon: "💪", title: "Dedicado", desc: "2h/dia · 5 dias por semana", tag: "Recomendado", selected: true },
              { icon: "⚖️", title: "Equilibrado", desc: "3h · 3 dias por semana", tag: "Popular", selected: false },
              { icon: "🌙", title: "Noturno", desc: "1h/dia · foco nos fins de semana", tag: "Flexível", selected: false },
              { icon: "🎯", title: "Consistente", desc: "4h · 4 dias por semana", tag: "Eficiente", selected: false },
            ].map((plan, i) => (
              <div key={i} className={`flex items-center gap-2 p-2 rounded-xl border-2 ${plan.selected ? "border-[#A31545] bg-[#A31545]/5" : "border-border bg-surface"}`}>
                <span className="text-[12px] flex-shrink-0">{plan.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-[8px] font-bold text-text-primary">{plan.title}</span>
                    <span className="text-[5px] font-bold bg-[#A31545]/10 text-brand-strong px-1 py-0.5 rounded-full">{plan.tag}</span>
                  </div>
                  <p className="text-[6px] text-text-secondary leading-tight">{plan.desc}</p>
                </div>
                {plan.selected && (
                  <div className="w-4 h-4 bg-[#A31545] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[6px] text-white font-bold">✓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Streak tracker */}
          <div className="bg-surface border border-border rounded-xl p-2">
            <p className="text-[5px] text-text-secondary font-bold uppercase tracking-wide mb-1.5">Dias ativos desta semana</p>
            <div className="flex justify-between">
              {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <span className="text-[5px] text-text-secondary">{d}</span>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[5px] font-bold ${i >= 1 && i <= 3 ? "bg-[#A31545] text-white" : "bg-surface-elevated border border-border text-text-secondary"}`}>
                    {i >= 1 && i <= 3 ? "✓" : "·"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand/5 border border-brand/10 rounded-xl p-2">
            <p className="text-[7px] text-brand-strong font-semibold leading-tight">💡 Escolha um plano realista para manter a consistência!</p>
          </div>

          <div className="bg-[#A31545] text-white text-center text-[7px] font-bold py-1.5 rounded-xl tracking-widest">SALVAR PLANO</div>
        </div>
      ),
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
      mockContent: (
        <div className="space-y-2">
          {/* Video area */}
          <div className="bg-gradient-to-br from-purple-500 via-[#EC407A] to-[#A31545] rounded-xl relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#A31545] text-[10px] ml-0.5">▶</span>
              </div>
            </div>
            <div className="absolute top-1.5 right-1.5 bg-black/60 rounded-full px-2 py-0.5 flex items-center gap-0.5">
              <span className="text-[6px] text-white/80">✏️</span>
              <span className="text-[5px] text-white font-medium">Anotar</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
              <div className="h-full w-[65%] bg-white/80" />
            </div>
            <span className="absolute bottom-1.5 left-2 text-[5px] text-white/80">28:22 / 43:39</span>
          </div>

          {/* Lesson info + tabs */}
          <div className="border-b border-border pb-1.5">
            <p className="text-[6px] text-text-secondary font-bold uppercase tracking-wide">UX Strategy</p>
            <p className="text-[8px] font-bold text-text-primary leading-tight">Pesquisas Longitudinais — Parte 1</p>
          </div>

          <div className="flex border-b border-border -mt-0.5">
            {["Discussões", "Notas", "Arquivos", "Turma"].map((tab, i) => (
              <div key={i} className={`flex-1 text-center text-[5px] py-1.5 border-b-2 font-semibold ${i === 1 ? "border-[#A31545] text-brand-strong" : "border-transparent text-text-secondary"}`}>
                {tab}
              </div>
            ))}
          </div>

          {/* Notes content */}
          <div className="space-y-1.5">
            {/* IA shortcut */}
            <div className="flex items-center gap-1.5 bg-violet-50 dark:bg-violet-900/10 border border-violet-200 dark:border-violet-800 rounded-xl px-2 py-1.5">
              <span className="text-[9px]">🦄</span>
              <div className="flex-1 min-w-0">
                <p className="text-[6px] font-semibold text-violet-700 dark:text-violet-400">Dúvida sobre esta aula?</p>
                <p className="text-[5px] text-violet-500 dark:text-violet-500">IA ou Monitor — resposta imediata</p>
              </div>
              <span className="text-[8px] text-violet-400 flex-shrink-0">›</span>
            </div>

            {/* Add note CTA */}
            <div className="border-2 border-dashed border-[#A31545]/40 bg-[#A31545]/5 rounded-xl py-2 flex items-center justify-center gap-1.5">
              <div className="w-4 h-4 bg-[#A31545] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[7px] text-white font-bold">+</span>
              </div>
              <div>
                <p className="text-[7px] font-semibold text-brand-strong">Nova anotação</p>
                <p className="text-[5px] text-text-secondary">Salva automaticamente nesta aula</p>
              </div>
            </div>

            {/* Existing note */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-2">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-[5px] text-text-secondary">28 Mai · 10:24 — Salvo</span>
              </div>
              <p className="text-[7px] text-text-primary leading-relaxed">"Sofia prefere estudar de manhã. Dor principal: progresso invisível em sessões curtas de estudo..."</p>
            </div>
          </div>
        </div>
      ),
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
      mockContent: (
        <div className="space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <p className="text-[9px] font-bold text-text-primary">Loja</p>
            <div className="flex items-center gap-1 bg-brand/10 border border-brand/20 rounded-full px-2 py-0.5">
              <span className="text-[7px]">🪙</span>
              <span className="text-[8px] font-bold text-brand-strong">450 pts</span>
            </div>
          </div>

          {/* How to earn */}
          <div className="bg-surface border border-border rounded-xl p-1.5">
            <p className="text-[5px] text-text-secondary font-bold uppercase tracking-wide mb-1">Ganhe pontos estudando</p>
            <div className="flex gap-1.5">
              {[
                { icon: "▶", label: "Aula concluída", pts: "+50 pts" },
                { icon: "💬", label: "Comentar", pts: "+10 pts" },
                { icon: "📝", label: "Publicar", pts: "+50 pts" },
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5 bg-[#A31545]/5 rounded-lg py-1">
                  <span className="text-[8px]">{item.icon}</span>
                  <span className="text-[5px] text-text-secondary text-center leading-tight">{item.label}</span>
                  <span className="text-[6px] font-bold text-brand-strong">{item.pts}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category pills */}
          <div className="flex gap-1 overflow-hidden">
            {["Todos", "Digital", "Mentoria", "Curso"].map((cat, i) => (
              <span key={i} className={`flex-shrink-0 text-[6px] font-bold px-2 py-0.5 rounded-full ${i === 0 ? "bg-[#A31545] text-white" : "bg-surface border border-border text-text-secondary"}`}>
                {cat}
              </span>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { icon: "🎨", name: "Template Figma DS", price: 400, canBuy: true },
              { icon: "🎓", name: "Mentoria 1:1 (1h)", price: 500, canBuy: false },
              { icon: "📐", name: "Kit Wireframes", price: 200, canBuy: true },
              { icon: "📚", name: "E-book UX Research", price: 300, canBuy: true },
              { icon: "🏆", name: "Certificado Premium", price: 300, canBuy: true },
              { icon: "📋", name: "Review de Portfólio", price: 600, canBuy: false },
            ].map((item, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#F48FB1]/10 to-[#A31545]/10 py-2 flex items-center justify-center">
                  <span className="text-[16px]">{item.icon}</span>
                </div>
                <div className="p-1 space-y-0.5">
                  <p className="text-[5px] font-semibold text-text-primary text-center leading-tight line-clamp-2">{item.name}</p>
                  <div className={`flex items-center justify-center gap-0.5 rounded py-0.5 ${item.canBuy ? "bg-[#A31545]" : "bg-surface-elevated border border-border"}`}>
                    <span className="text-[5px]">🪙</span>
                    <span className={`text-[7px] font-bold ${item.canBuy ? "text-white" : "text-text-secondary"}`}>{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
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
      mockContent: (
        <div className="space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <p className="text-[9px] font-bold text-text-primary">Comunidade</p>
            <div className="flex items-center gap-1">
              <span className="text-[6px] font-bold bg-brand/10 text-brand-strong px-1.5 py-0.5 rounded-full border border-brand/20">Feed</span>
              <span className="text-[6px] text-text-secondary px-1 py-0.5">Avisos</span>
            </div>
          </div>

          {/* IA shortcut */}
          <div className="flex items-center gap-1.5 bg-violet-50 dark:bg-violet-900/10 border border-violet-200 dark:border-violet-800 rounded-xl px-2 py-1.5">
            <span className="text-[10px] flex-shrink-0">🦄</span>
            <div className="flex-1 min-w-0">
              <p className="text-[7px] font-semibold text-violet-700 dark:text-violet-400">Dúvida sobre sua aula?</p>
              <p className="text-[5px] text-violet-500 dark:text-violet-500">IA ou Monitor — resposta imediata</p>
            </div>
            <span className="text-[8px] text-violet-400 flex-shrink-0">›</span>
          </div>

          {/* Post 1 */}
          <div className="bg-surface border border-border rounded-xl p-2 space-y-1.5">
            <div className="flex items-start gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F48FB1] to-[#A31545] flex items-center justify-center text-[8px] flex-shrink-0">👩‍💼</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap mb-0.5">
                  <span className="text-[7px] font-bold text-text-primary">Amanda Laurins</span>
                  <span className="text-[5px] font-bold bg-[#A31545]/10 text-brand-strong px-1 py-0.5 rounded-full">Experiente</span>
                  <span className="text-[5px] text-text-secondary ml-auto">3h</span>
                </div>
                <p className="text-[7px] text-text-secondary leading-relaxed">Consegui minha primeira vaga como Product Designer Junior! 6 meses após iniciar o curso 🎉</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1 border-t border-border/40">
              <button className="flex items-center gap-1 text-[6px] text-brand font-medium">
                <span>❤️</span> <span>635</span>
              </button>
              <button className="flex items-center gap-1 text-[6px] text-text-secondary">
                <span>💬</span> <span>88</span>
              </button>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-surface border border-border rounded-xl p-2 space-y-1.5">
            <div className="flex items-start gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-300 to-indigo-400 flex items-center justify-center text-[8px] flex-shrink-0">👩‍🏫</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap mb-0.5">
                  <span className="text-[7px] font-bold text-text-primary">Juliana Mendes</span>
                  <span className="text-[5px] font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-1 py-0.5 rounded-full">Mentor</span>
                  <span className="text-[5px] text-text-secondary ml-auto">2d</span>
                </div>
                <p className="text-[7px] text-text-secondary leading-relaxed">Dica: validem hipóteses com usuários reais antes do design! Economiza muito tempo depois. 💡</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1 border-t border-border/40">
              <button className="flex items-center gap-1 text-[6px] text-text-secondary">
                <span>❤️</span> <span>248</span>
              </button>
              <button className="flex items-center gap-1 text-[6px] text-text-secondary">
                <span>💬</span> <span>42</span>
              </button>
            </div>
          </div>

          {/* Section shortcuts */}
          <div className="grid grid-cols-3 gap-1">
            {[
              { icon: "❓", label: "Perguntas", count: 4 },
              { icon: "🎨", label: "Feedback", count: 3 },
              { icon: "💼", label: "Vagas", count: 4 },
            ].map((s, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-1.5 text-center">
                <span className="text-[10px]">{s.icon}</span>
                <p className="text-[5px] text-text-secondary mt-0.5">{s.label}</p>
                <p className="text-[7px] font-bold text-text-primary">{s.count}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
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

        {/* Center: Device Mockup */}
        <div className="lg:col-span-4 flex justify-center">
          <MockupReveal3D>
            <div className="w-[300px] h-[550px] bg-black rounded-[48px] border-4 border-gray-800 shadow-2xl relative overflow-hidden flex-shrink-0 transition-all duration-300">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center border border-gray-900">
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
              </div>

              {/* Mobile Screen Container */}
              <div className="absolute inset-0 bg-page p-4 pt-12 flex flex-col justify-between text-xs selection:bg-transparent transition-colors duration-300 overflow-hidden">
                {/* Inner Mockup Content */}
                <div className="flex-1 overflow-hidden">
                  {active.mockContent}
                </div>

                {/* Bottom Navigation */}
                <div className="border-t border-border pt-2.5 flex justify-between items-center text-text-secondary text-[8px] flex-shrink-0">
                  <span className={activeTab === "home" ? "text-brand-strong font-bold" : ""}>🏠 Home</span>
                  <span className={activeTab === "estatisticas" ? "text-brand-strong font-bold" : ""}>📅 Plano</span>
                  <span className={activeTab === "player" ? "text-brand-strong font-bold" : ""}>▶ Aulas</span>
                  <span className={activeTab === "loja" ? "text-brand-strong font-bold" : ""}>🛒 Loja</span>
                  <span className={activeTab === "comunidade" ? "text-brand-strong font-bold" : ""}>💬 Turma</span>
                </div>
              </div>
            </div>
          </MockupReveal3D>
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
