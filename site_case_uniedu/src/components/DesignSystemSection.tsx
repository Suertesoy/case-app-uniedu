import { Sun, Moon, Trophy, BookOpen, Lock, CheckCircle2, Clock, Zap, Play } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

interface ThemeToggleProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const isDark = theme === "dark";
  return (
    <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-surface text-[11px]">
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
          !isDark
            ? "bg-surface-elevated text-text-primary shadow-sm"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        <Sun size={11} />Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
          isDark
            ? "bg-[#1E1A1D] text-[#FCE4EC] shadow-sm"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        <Moon size={11} />Dark
      </button>
    </div>
  );
}

// ─── Color tokens ─────────────────────────────────────────────────────────────
const colorTokens = [
  {
    label: "Primary Pink",
    hex: "#D81B60",
    bg: "#D81B60",
    lightText: true,
    usage: "Barra de progresso, badge de XP, estado ativo e ícone de gamificação",
  },
  {
    label: "Accent Pink",
    hex: "#F06292",
    bg: "#F06292",
    lightText: true,
    usage: "Hover, gradientes de suporte e microinterações — camada secundária do brand",
  },
  {
    label: "Soft Pink",
    hex: "#F48FB1",
    bg: "#F48FB1",
    lightText: false,
    usage: "Botão primário e CTA acessível no Dark Mode; acento de texto sobre fundos escuros",
  },
  {
    label: "Strong Pink",
    hex: "#A31545",
    bg: "#A31545",
    lightText: true,
    usage: "Botão primário no Light Mode; header real do app (#A31545 na barra superior)",
  },
  {
    label: "BG Dark",
    hex: "#120E10",
    bg: "#120E10",
    lightText: true,
    usage: "Fundo profundo aquecido — preto com toque rosado, nunca preto puro",
  },
  {
    label: "Surface Dark",
    hex: "#1E1A1D",
    bg: "#1E1A1D",
    lightText: true,
    usage: "Cards, bottom nav e superfícies elevadas no Dark Mode",
  },
  {
    label: "BG Light",
    hex: "#FFFBFD",
    bg: "#FFFBFD",
    lightText: false,
    usage: "Fundo principal claro — off-white rosado; nunca branco puro",
  },
  {
    label: "Surface Light",
    hex: "#FDF2F5",
    bg: "#FDF2F5",
    lightText: false,
    usage: "Cards e superfícies no Light Mode — cria hierarquia sem sombra",
  },
  {
    label: "Text on Dark",
    hex: "#FCE4EC",
    bg: "#FCE4EC",
    lightText: false,
    usage: "Texto primário no Dark Mode — rose claro, harmônico com o brand",
  },
  {
    label: "Muted",
    hex: "#9E9EAE",
    bg: "#9E9EAE",
    lightText: true,
    usage: "Captions, metadados e labels secundários — verificar contraste WCAG AA no contexto",
  },
];

// ─── Typography hierarchy ─────────────────────────────────────────────────────
const typeSamples = [
  {
    role: "Display",
    sample: "Aprenda com consistência",
    className: "text-2xl md:text-3xl font-extrabold tracking-tight",
    size: "32–40px",
    weight: "800",
    leading: "1.2",
    tracking: "−0.02em",
    font: "Plus Jakarta Sans",
    use: "Hero, milestone desbloqueado, conquista de nível",
  },
  {
    role: "Heading",
    sample: "Módulo 2 — Gestão do Tempo",
    className: "text-xl font-bold tracking-tight",
    size: "20px",
    weight: "700",
    leading: "1.3",
    tracking: "−0.01em",
    font: "Plus Jakarta Sans",
    use: "Título de card, nome do módulo, seção de onboarding",
  },
  {
    role: "Body",
    sample: "Acompanhe seu ritmo de estudos e construa hábitos que persistem.",
    className: "text-sm font-normal",
    size: "14px",
    weight: "400",
    leading: "1.6",
    tracking: "—",
    font: "Inter",
    use: "Descrições de aula, feedbacks, texto de apoio em cards e modais",
  },
  {
    role: "Caption",
    sample: "MÓDULO CONCLUÍDO · 120 XP",
    className: "text-[10px] font-bold tracking-widest uppercase",
    size: "10px",
    weight: "700",
    leading: "1.4",
    tracking: "0.1em + uppercase",
    font: "Inter",
    use: "Labels de estado (CONCLUÍDO, EM ANDAMENTO), badges de XP, metadados",
  },
];

// ─── Usage rules ──────────────────────────────────────────────────────────────
const usageRules = [
  {
    rule: "Rosa como acento, não ruído",
    detail: "Use rosa/magenta apenas em CTAs, barras de progresso, badges ativos e estados de destaque. Evite como cor de fundo dominante ou ícone puramente decorativo.",
  },
  {
    rule: "Gamificação adulta",
    detail: "XP, streaks e pontos devem parecer conquistas profissionais. Recompensas reais (mentoria, certificados, templates) ancoram o valor percebido da consistência.",
  },
  {
    rule: "Estados visuais distintos",
    detail: "Concluído, Em andamento, Bloqueado e Novo devem ser distinguíveis por cor, ícone E texto. Nunca dependa de cor como único diferenciador.",
  },
  {
    rule: "Dark mode aquecido",
    detail: "Evite preto puro e cinzas frios. O fundo usa #120E10 — preto rosado que mantém o tom emocional do produto e afasta o visual genérico de apps comuns.",
  },
  {
    rule: "Hierarquia por superfície",
    detail: "Surface > Background em ambos os modos. Profundidade visual clara sem sombras pesadas — apenas diferença de valor de cor entre as camadas.",
  },
  {
    rule: "Contraste e acessibilidade",
    detail: "Texto primário sempre acima de 4.5:1 (WCAG AA). Muted (#9E9EAE) deve ser usado apenas em metadados onde o contexto visual complementa a leitura.",
  },
  {
    rule: "Área de toque confortável",
    detail: "Botões e itens de bottom nav respeitam 44×44px mínimo. Itens de checklist e aulas também devem ser confortáveis para toque sem erro.",
  },
  {
    rule: "Progressive disclosure",
    detail: "Onboarding e modal da jornada orientam sem poluir permanentemente. Usuários avançados ignoram overlays de introdução sem penalidade de UX.",
  },
  {
    rule: "Recompensas com valor percebido",
    detail: "Cada ação de estudo deve ter pontuação clara. Resgates na loja devem mostrar o benefício de carreira concreto, não apenas o nome do item.",
  },
];

// ─── Static data for product components (outside component for clean renders) ──
const jornadaItems = [
  { icon: "📚", label: "Assistir uma aula",    pts: "+50 pts", done: true  },
  { icon: "💬", label: "Fazer um comentário",  pts: "+10 pts", done: true  },
  { icon: "⭐", label: "Ganhar uma conquista", pts: "+XP",     done: true  },
  { icon: "🎁", label: "Resgatar recompensa",  pts: "🎉",      done: false },
];

const navTabs = [
  { emoji: "🏠", label: "Home",  active: true  },
  { emoji: "📅", label: "Plano", active: false },
  { emoji: "▶",  label: "Aulas", active: false },
  { emoji: "🛒", label: "Loja",  active: false },
];

// ─────────────────────────────────────────────────────────────────────────────

interface DesignSystemSectionProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export default function DesignSystemSection({ theme, setTheme }: DesignSystemSectionProps) {
  const isDark = theme === "dark";

  const pv = {
    bg:      isDark ? "#120E10" : "#FFFBFD",
    surface: isDark ? "#1E1A1D" : "#FDF2F5",
    elevated:isDark ? "#2A2228" : "#FFFFFF",
    text:    isDark ? "#FCE4EC" : "#1D1518",
    muted:   isDark ? "#9E9EAE" : "#6E5E64",
    border:  isDark ? "rgba(255,255,255,0.08)" : "rgba(216,27,96,0.08)",
    brand:   isDark ? "#F48FB1" : "#A31545",
  };

  const lessonItems = [
    { Icon: CheckCircle2, color: "#10b981", label: "Técnicas Pomodoro",      active: false },
    { Icon: CheckCircle2, color: "#10b981", label: "Flow State e Deep Work", active: false },
    { Icon: Clock,        color: "#D81B60", label: "Gestão de Distrações",   active: true  },
    { Icon: Lock,         color: pv.muted,  label: "Revisão Espaçada",       active: false },
  ];

  const statusBadges = [
    { label: "Concluído",    bg: "rgba(16,185,129,0.12)",  color: "#10b981" },
    { label: "Em andamento", bg: "rgba(216,27,96,0.12)",   color: "#D81B60" },
    { label: "Não iniciado", bg: isDark ? "rgba(255,255,255,0.06)" : "rgba(110,94,100,0.10)", color: pv.muted },
    { label: "Bloqueado",    bg: isDark ? "rgba(255,255,255,0.04)" : "rgba(110,94,100,0.07)", color: pv.muted },
    { label: "Novo",         bg: "rgba(216,27,96,0.12)",   color: "#F06292" },
  ];

  return (
    <section id="design-system" className="py-24 bg-surface/20 border-t border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <RevealOnScroll direction="up">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand mb-4 block">
              Sistema Visual
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Design System do APP UNIEDU
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm leading-relaxed">
              Cores, tipografia, componentes e regras de uso que tornam a experiência do UNIEDU consistente, acessível e alinhada ao propósito de gamificação adulta e aprendizagem contínua.
            </p>
          </div>
        </RevealOnScroll>

        {/* ── 01 · Tipografia ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="mb-16">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand mb-5">
              01 · Tipografia
            </h3>
            <div className="rounded-2xl border border-border bg-surface-elevated overflow-hidden">
              <div className="px-5 py-3 border-b border-border flex items-center gap-2 bg-surface/50">
                <span className="w-2 h-2 rounded-full bg-brand/40 block" />
                <span className="text-[11px] text-text-secondary font-medium">
                  Plus Jakarta Sans — Display e Heading · Inter — Body e Caption
                </span>
              </div>
              <div className="divide-y divide-border">
                {typeSamples.map((t) => (
                  <div key={t.role} className="px-5 py-5 flex flex-col md:flex-row gap-3 md:gap-6 items-start">
                    {/* Role tag */}
                    <div className="w-full md:w-16 shrink-0">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-brand">{t.role}</span>
                    </div>
                    {/* Sample + use */}
                    <div className="flex-1 min-w-0">
                      <p className={`${t.className} text-text-primary leading-tight`}>{t.sample}</p>
                      <p className="text-[10px] text-text-secondary mt-2 italic leading-relaxed hidden md:block">{t.use}</p>
                    </div>
                    {/* Technical specs */}
                    <div className="hidden md:grid grid-cols-2 gap-x-4 gap-y-1.5 w-52 shrink-0 text-[10px]">
                      <span className="text-text-secondary font-mono">size</span>
                      <span className="text-text-primary font-mono">{t.size}</span>
                      <span className="text-text-secondary font-mono">weight</span>
                      <span className="text-text-primary font-mono">{t.weight}</span>
                      <span className="text-text-secondary font-mono">line-height</span>
                      <span className="text-text-primary font-mono">{t.leading}</span>
                      <span className="text-text-secondary font-mono">tracking</span>
                      <span className="text-text-primary font-mono">{t.tracking}</span>
                      <span className="text-text-secondary font-mono">font</span>
                      <span className="text-text-primary font-mono text-[9px]">{t.font}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ── 02 · Cores e Tokens ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="mb-16">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand mb-5">
              02 · Cores e Tokens
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {colorTokens.map((c) => (
                <div key={c.label} className="rounded-xl border border-border overflow-hidden bg-surface-elevated">
                  <div className="h-10 w-full" style={{ background: c.bg }} />
                  <div className="p-3">
                    <p className="text-[11px] font-bold text-text-primary leading-tight">{c.label}</p>
                    <p className="text-[9px] text-text-secondary font-mono mt-0.5">{c.hex}</p>
                    <p className="text-[9px] text-text-secondary mt-1.5 leading-snug">{c.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* ── 03 · Componentes — Light/Dark preview ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand">
                03 · Componentes
              </h3>
              {/* Toggle global — controla o tema do site inteiro (header, seção 03 e seção 04) */}
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>

            {/* Preview canvas */}
            <div
              className="rounded-2xl border overflow-hidden transition-all duration-500"
              style={{ background: pv.bg, borderColor: pv.border }}
            >
              {/* Window chrome */}
              <div
                className="px-5 py-3 flex items-center justify-between border-b transition-all duration-500"
                style={{ background: pv.surface, borderColor: pv.border }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: pv.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Prévia — {isDark ? "Dark Mode" : "Light Mode"}
                </span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/50 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/50 block" />
                </div>
              </div>

              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Left — module card + lesson list */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl p-5 flex flex-col gap-4 transition-all duration-500" style={{ background: pv.surface, border: `1px solid ${pv.border}` }}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#D81B60", marginBottom: 4 }}>Módulo 2</p>
                        <p style={{ fontSize: 15, fontWeight: 700, color: pv.text, lineHeight: 1.3 }}>Gestão do Tempo e Foco</p>
                      </div>
                      <div style={{ background: "rgba(216,27,96,0.12)", color: "#D81B60", borderRadius: 8, padding: "4px 8px", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
                        <Zap size={10} />+120 XP
                      </div>
                    </div>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontSize: 11, color: pv.muted }}>Progresso</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: "#D81B60" }}>65%</span>
                      </div>
                      <div style={{ background: "rgba(216,27,96,0.12)", borderRadius: 9999, height: 5, overflow: "hidden" }}>
                        <div style={{ background: "linear-gradient(to right,#D81B60,#F06292)", width: "65%", height: "100%", borderRadius: 9999 }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: pv.muted }}>
                        <BookOpen size={12} />3 de 5 aulas
                      </div>
                      <div style={{ background: "rgba(216,27,96,0.12)", color: "#D81B60", borderRadius: 9999, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>
                        Em andamento
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl px-4 py-2 transition-all duration-500" style={{ background: pv.elevated, border: `1px solid ${pv.border}` }}>
                    {lessonItems.map((item, i) => (
                      <div
                        key={item.label}
                        style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < lessonItems.length - 1 ? `1px solid ${pv.border}` : "none" }}
                      >
                        <item.Icon size={13} color={item.color} strokeWidth={2.5} />
                        <span style={{ fontSize: 12, color: item.active ? pv.text : pv.muted, fontWeight: item.active ? 600 : 400, flex: 1 }}>{item.label}</span>
                        {item.active && <span style={{ fontSize: 10, fontWeight: 700, color: "#D81B60" }}>Atual</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — achievement + badges + buttons */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-xl p-4 flex items-center gap-3 transition-all duration-500" style={{ background: pv.elevated, border: `1px solid ${pv.border}` }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(216,27,96,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Trophy size={18} color="#D81B60" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: pv.text }}>Semana Consistente</p>
                      <p style={{ fontSize: 11, color: pv.muted, marginTop: 2 }}>7 dias de acesso consecutivo</p>
                    </div>
                    <div style={{ background: "linear-gradient(135deg,#D81B60,#F06292)", color: "#fff", borderRadius: 8, padding: "4px 8px", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                      +50 XP
                    </div>
                  </div>

                  <div className="rounded-xl p-4 transition-all duration-500" style={{ background: pv.surface, border: `1px solid ${pv.border}` }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: pv.muted, marginBottom: 12 }}>Estados de Progresso</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {statusBadges.map((b) => (
                        <span key={b.label} style={{ background: b.bg, color: b.color, borderRadius: 9999, padding: "4px 12px", fontSize: 11, fontWeight: 600 }}>{b.label}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl p-4 transition-all duration-500" style={{ background: pv.surface, border: `1px solid ${pv.border}` }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: pv.muted, marginBottom: 12 }}>Botões</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                      <button style={{ background: pv.brand, color: "#fff", borderRadius: 10, padding: "8px 18px", fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer" }}>Continuar</button>
                      <button style={{ background: "transparent", color: pv.brand, borderRadius: 10, padding: "7px 16px", fontSize: 13, fontWeight: 600, border: `1.5px solid ${isDark ? "rgba(244,143,177,0.30)" : "rgba(163,21,69,0.30)"}`, cursor: "pointer" }}>Ver detalhes</button>
                      <button style={{ background: "transparent", color: pv.muted, borderRadius: 10, padding: "7px 16px", fontSize: 12, fontWeight: 500, border: `1.5px solid ${pv.border}`, cursor: "pointer" }}>Cancelar</button>
                      <button style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(110,94,100,0.07)", color: pv.muted, borderRadius: 10, padding: "7px 16px", fontSize: 12, fontWeight: 500, border: "none", cursor: "not-allowed", opacity: 0.45 }}>Bloqueado</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ── 04 · Sistema aplicado ao APP UNIEDU ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand">
                04 · Sistema aplicado ao APP UNIEDU
              </h3>
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
            <p className="text-[9px] text-text-secondary italic mb-2">Os componentes acompanham o tema global do site.</p>
            <p className="text-[11px] text-text-secondary mb-6 leading-relaxed max-w-2xl">
              Componentes extraídos do produto real — codados em JSX, sem imagens. Documentação viva de como o sistema visual se aplica em contexto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* C1: Card de aula em destaque */}
              <div>
                <p className="text-[9px] font-bold text-brand/50 uppercase tracking-widest mb-3">C1 · Card de aula em destaque</p>
                <div className="rounded-2xl p-3 transition-all duration-500" style={{ background: pv.bg, border: `1px solid ${pv.border}` }}>
                  <div style={{ background: pv.surface, border: `1px solid ${pv.border}`, borderRadius: 14, overflow: "hidden" }}>
                    {/* Gradient thumbnail */}
                    <div style={{ height: 120, background: "linear-gradient(135deg,#F48FB1 0%,#EC407A 50%,#A31545 100%)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 44, height: 44, borderRadius: 22, background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
                        <Play size={16} color="#A31545" fill="#A31545" />
                      </div>
                      <div style={{ position: "absolute", bottom: 6, right: 8, background: "rgba(0,0,0,0.65)", color: "#fff", fontSize: 9, padding: "2px 6px", borderRadius: 4, fontFamily: "monospace" }}>
                        28:22 / 43:39
                      </div>
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "rgba(255,255,255,0.20)" }}>
                        <div style={{ width: "65%", height: "100%", background: pv.brand }} />
                      </div>
                    </div>
                    {/* Content */}
                    <div style={{ padding: "10px 12px 12px" }}>
                      <p style={{ fontSize: 10, color: pv.muted, marginBottom: 8, lineHeight: 1.4 }}>UX Research: Pesquisas Longitudinais — Parte 1</p>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                        <span style={{ fontSize: 9, color: pv.muted }}>Progresso</span>
                        <span style={{ fontSize: 9, fontWeight: 700, color: "#D81B60" }}>65%</span>
                      </div>
                      <div style={{ height: 4, borderRadius: 2, background: "rgba(216,27,96,0.12)", marginBottom: 10 }}>
                        <div style={{ width: "65%", height: "100%", borderRadius: 2, background: "linear-gradient(to right,#D81B60,#F06292)" }} />
                      </div>
                      <button style={{ width: "100%", background: pv.brand, color: "#fff", border: "none", borderRadius: 8, padding: "8px 0", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer" }}>CONTINUAR</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* C2: Jornada de aprendizado */}
              <div>
                <p className="text-[9px] font-bold text-brand/50 uppercase tracking-widest mb-3">C2 · Jornada de aprendizado</p>
                <div className="rounded-2xl p-3 transition-all duration-500" style={{ background: pv.bg, border: `1px solid ${pv.border}` }}>
                  <div style={{ background: "linear-gradient(135deg,#F48FB1,#EC407A,#A31545)", borderRadius: 14, padding: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                      <p style={{ fontSize: 9, color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Sua jornada de aprendizado</p>
                      <span style={{ fontSize: 9, color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.18)", borderRadius: 99, padding: "2px 8px", fontWeight: 700 }}>3/4</span>
                    </div>
                    <div style={{ height: 3, background: "rgba(255,255,255,0.20)", borderRadius: 2, marginBottom: 12, overflow: "hidden" }}>
                      <div style={{ width: "75%", height: "100%", background: "rgba(255,255,255,0.82)", borderRadius: 2 }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {jornadaItems.map((item) => (
                        <div
                          key={item.label}
                          style={{ display: "flex", alignItems: "center", gap: 8, background: item.done ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.10)", border: `1px solid ${item.done ? "rgba(255,255,255,0.30)" : "rgba(255,255,255,0.10)"}`, borderRadius: 10, padding: "7px 10px" }}
                        >
                          <div style={{ width: 18, height: 18, borderRadius: 9, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: item.done ? "#4ade80" : "transparent", border: `2px solid ${item.done ? "#4ade80" : "rgba(255,255,255,0.40)"}` }}>
                            {item.done && <span style={{ fontSize: 9, color: "#fff", fontWeight: 700, lineHeight: 1 }}>✓</span>}
                          </div>
                          <span style={{ fontSize: 12 }}>{item.icon}</span>
                          <span style={{ fontSize: 10, flex: 1, color: item.done ? "rgba(255,255,255,0.55)" : "#fff", fontWeight: item.done ? 400 : 600, textDecoration: item.done ? "line-through" : "none" }}>{item.label}</span>
                          <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 99, background: item.done ? "rgba(74,222,128,0.25)" : "rgba(255,255,255,0.15)", color: item.done ? "#bbf7d0" : "rgba(255,255,255,0.75)" }}>{item.pts}</span>
                        </div>
                      ))}
                    </div>
                    <p style={{ fontSize: 9, color: "rgba(255,255,255,0.75)", textAlign: "center", marginTop: 10, fontWeight: 500 }}>Falta 1 ação para completar a jornada de hoje.</p>
                  </div>
                </div>
              </div>

              {/* C3: Card de recompensa */}
              <div>
                <p className="text-[9px] font-bold text-brand/50 uppercase tracking-widest mb-3">C3 · Card de recompensa da loja</p>
                <div className="rounded-2xl p-3 transition-all duration-500" style={{ background: pv.bg, border: `1px solid ${pv.border}` }}>
                  <div style={{ background: pv.surface, border: `1px solid ${pv.border}`, borderRadius: 14, overflow: "hidden", maxWidth: 220 }}>
                    <div style={{ height: 80, background: isDark ? "rgba(216,27,96,0.08)" : "rgba(216,27,96,0.05)", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: `1px solid ${pv.border}` }}>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: isDark ? "rgba(216,27,96,0.15)" : "rgba(216,27,96,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🎓</div>
                    </div>
                    <div style={{ padding: "10px 12px 12px" }}>
                      <p style={{ fontSize: 9, color: "#D81B60", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Mentoria</p>
                      <p style={{ fontSize: 12, fontWeight: 700, color: pv.text, lineHeight: 1.3, marginBottom: 4 }}>Mentoria 1h com Especialista</p>
                      <p style={{ fontSize: 9, color: pv.muted, marginBottom: 10, lineHeight: 1.4 }}>Sessão 1:1 com especialista sênior em UX Design</p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <span style={{ fontSize: 12 }}>🪙</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: pv.text }}>500 pts</span>
                        </div>
                        <button style={{ background: pv.brand, color: "#fff", border: "none", borderRadius: 8, padding: "5px 12px", fontSize: 10, fontWeight: 700, cursor: "pointer" }}>RESGATAR</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* C4: Bottom Navigation */}
              <div>
                <p className="text-[9px] font-bold text-brand/50 uppercase tracking-widest mb-3">C4 · Bottom Navigation</p>
                <div className="rounded-2xl p-3 transition-all duration-500" style={{ background: pv.bg, border: `1px solid ${pv.border}` }}>
                  <div style={{ background: pv.surface, border: `1px solid ${pv.border}`, borderRadius: 14, overflow: "hidden" }}>
                    <div style={{ height: 72, background: pv.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <p style={{ fontSize: 10, color: pv.muted, fontStyle: "italic" }}>conteúdo da tela</p>
                    </div>
                    <div style={{ background: pv.elevated, borderTop: `1px solid ${pv.border}`, display: "flex", padding: "10px 0 8px" }}>
                      {navTabs.map((tab) => (
                        <div key={tab.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                          <span style={{ fontSize: tab.active ? 18 : 16, opacity: tab.active ? 1 : 0.45 }}>{tab.emoji}</span>
                          <p style={{ fontSize: 8, fontWeight: tab.active ? 700 : 400, color: tab.active ? pv.brand : pv.muted, margin: 0 }}>{tab.label}</p>
                          {tab.active && <div style={{ width: 4, height: 4, borderRadius: 2, background: pv.brand }} />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: 10, display: "flex", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 6, height: 6, borderRadius: 3, background: pv.brand }} />
                      <span style={{ fontSize: 9, color: pv.muted }}>Ativo — cor do brand</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 6, height: 6, borderRadius: 3, background: pv.muted, opacity: 0.4 }} />
                      <span style={{ fontSize: 9, color: pv.muted }}>Inativo — muted</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>

        {/* ── 05 · Regras de Uso ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand mb-5">
              05 · Regras de Uso
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {usageRules.map((r, i) => (
                <div key={r.rule} className="rounded-xl p-5 bg-surface-elevated border border-border">
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-bold text-brand/40 font-mono shrink-0 mt-0.5 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-text-primary mb-1">{r.rule}</p>
                      <p className="text-xs text-text-secondary leading-relaxed">{r.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
