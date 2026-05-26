import { Target, AlertCircle, ShieldAlert, Sparkles } from "lucide-react";

export default function PersonaCard() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 relative transition-all duration-300">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand/3 dark:bg-brand/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />
      
      <div className="text-center mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">Público-Alvo e Comportamento</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">A Persona do Projeto</h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-sm">
          Compreender a realidade do usuário final foi a base para desenhar fluxos eficientes de retenção e usabilidade.
        </p>
      </div>

      <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden transition-all duration-300">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* Avatar Area */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-brand/20 via-brand-soft/10 to-brand-strong/20 p-2 border border-brand/25 relative flex items-center justify-center mb-6 shadow-inner">
              <div className="w-full h-full rounded-full bg-surface-elevated flex flex-col items-center justify-center relative overflow-hidden border border-border">
                <span className="text-3xl font-extrabold text-brand bg-gradient-to-r from-brand to-brand-strong bg-clip-text text-transparent">SM</span>
                <span className="text-[7px] text-text-secondary uppercase font-bold tracking-wider absolute bottom-3">
                  [Placeholder de Persona]
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                24
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-text-primary">Sofia Martins</h3>
            <p className="text-xs text-text-secondary mt-1">Designer Gráfica em transição para UX/UI</p>
            <span className="text-[10px] font-bold text-brand-strong bg-brand/10 border border-brand/20 rounded-full px-3 py-1 mt-4 inline-block">
              Estudante EAD Noturna
            </span>
          </div>

          {/* Info Details */}
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-6 md:gap-8">
            {/* Perfil & Rotina */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand" />
                Rotina & Perfil
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Sofia trabalha em regime CLT como designer gráfica durante o dia. Seu tempo útil de estudos é à noite ou em pequenos intervalos de 15 minutos ao longo do dia. Busca migrar de carreira sem perder a segurança financeira.
              </p>
            </div>

            {/* Motivações */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-brand-strong" />
                Motivações
              </h4>
              <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-4 leading-relaxed">
                <li>Migrar de carreira com estabilidade técnica</li>
                <li>Ganhar segurança para entrevistas e desafios reais</li>
                <li>Concluir o curso sem acumular pendências mentais</li>
              </ul>
            </div>

            {/* Dores */}
            <div className="space-y-3 bg-red-500/5 dark:bg-red-500/3 border border-red-500/10 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-500" />
                Dores & Desafios
              </h4>
              <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-4 leading-relaxed">
                <li>Falta de ritmo estruturado e quebra de sequência</li>
                <li>Vídeos e módulos muito extensos, sem síntese</li>
                <li>Isolamento e bloqueios ao tentar realizar exercícios</li>
                <li>Dificuldade de mensurar a própria evolução</li>
              </ul>
            </div>

            {/* Desejos */}
            <div className="space-y-3 bg-brand/5 border border-brand/10 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-brand-strong uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand" />
                Desejos & Necessidades
              </h4>
              <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-4 leading-relaxed">
                <li>Trilha de estudos incremental e clara</li>
                <li>Suporte rápido nos momentos de travamento</li>
                <li>Integração social ativa (comunidade cooperativa)</li>
                <li>Progresso tangível e recompensas motivadoras</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
