export default function ToolMarquee() {
  const tools = [
    { name: "Figma", initial: "Fi", desc: "UI Design & Systems" },
    { name: "FigJam", initial: "Fj", desc: "User Research & Flows" },
    { name: "Figma Make", initial: "Fm", desc: "Prototipação Visual com IA" },
    { name: "Notion", initial: "No", desc: "Documentação & Kanban" },
    { name: "Google Workspace", initial: "Gw", desc: "Colaboração & Docs" },
    { name: "Claude Code", initial: "Cc", desc: "IA para Desenvolvimento" },
    { name: "Antigravity", initial: "Ag", desc: "Ambiente de Agentes de IA" },
  ];

  return (
    <section className="py-16 border-y border-border bg-surface/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 text-center md:text-left">
          <p className="text-[10px] font-bold text-brand uppercase tracking-widest">Stack de Ferramentas</p>
          <h3 className="text-xl font-bold mt-1 text-text-primary">
            Tecnologia e Métodos Avançados
          </h3>
          <p className="text-xs text-text-secondary mt-1">
            Ferramentas usadas para pesquisar, organizar, prototipar e aproximar a solução de uma experiência navegável.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-surface border border-border/80 hover:border-brand-soft/40 transition-all duration-300 select-none hover:shadow-md hover:shadow-brand/5 w-[180px]"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-brand/10 to-brand-soft/20 flex items-center justify-center border border-brand/20">
                <span className="text-[11px] font-bold text-brand-strong uppercase">{tool.initial}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-xs text-text-primary leading-tight">
                  {tool.name}
                </span>
                <span className="text-[9px] text-text-secondary mt-0.5 leading-tight">
                  {tool.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
