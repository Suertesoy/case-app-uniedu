export default function ToolMarquee() {
  const tools = [
    { name: "Figma", initial: "Fi", desc: "UI Design & Systems" },
    { name: "FigJam", initial: "Fj", desc: "User Research & Flows" },
    { name: "Figma Make", initial: "Fm", desc: "IA Generativa" },
    { name: "Notion", initial: "No", desc: "Documentação & Kanban" },
    { name: "ChatGPT", initial: "GP", desc: "IA de Redação & Insights" },
    { name: "Claude Code", initial: "Cc", desc: "IA para Desenvolvimento" },
    { name: "Google Workspace", initial: "Gw", desc: "Colaboração & Docs" },
    { name: "Antigravity", initial: "Ag", desc: "Ambiente Integrado" },
  ];

  // Duplicate tools array to ensure seamless infinite looping marquee
  const marqueeItems = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="py-16 border-y border-border bg-surface/10 relative overflow-hidden transition-all duration-300">
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-page to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-page to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left">
        <p className="text-[10px] font-bold text-brand uppercase tracking-widest">Stack de Ferramentas</p>
        <h3 className="text-xl font-bold mt-1 text-text-primary">
          Tecnologia e Métodos Avançados
        </h3>
        <p className="text-xs text-text-secondary mt-1">
          Ferramentas usadas para pesquisar, estruturar, prototipar, validar e aproximar a solução da implementação.
        </p>
      </div>

      <div className="flex w-full overflow-hidden relative">
        <div className="flex gap-4 animate-marquee whitespace-nowrap py-4">
          {marqueeItems.map((tool, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-surface border border-border/80 hover:border-brand-soft/40 transition-all duration-300 select-none cursor-default group hover:shadow-md hover:shadow-brand/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/10 to-brand-soft/20 flex flex-col items-center justify-center border border-brand/20 relative group-hover:scale-105 transition-transform duration-300">
                <span className="text-xs font-bold text-brand-strong uppercase">{tool.initial}</span>
                <span className="text-[6px] text-brand/60 uppercase font-semibold absolute bottom-1 leading-none tracking-tighter">
                  [Logo]
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-text-primary group-hover:text-brand transition-colors">
                  {tool.name}
                </span>
                <span className="text-[9px] text-text-secondary mt-0.5">
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
