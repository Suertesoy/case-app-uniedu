import { ArrowUpRight, CheckCircle2, Info, XCircle } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { AUTHORS } from "../content/translations";

export const DESIGN_SYSTEM_FIGMA_URL =
  "https://www.figma.com/design/RJqLwsh5UsqKIOYzgy63yF?node-id=65-2";

const ASSET_BASE = "/case-design-system";

// Contagens do arquivo Figma (prancha 01 — Overview). Não são métricas de resultado.
const libraryFacts = [
  { value: "146", label: "variáveis em 6 coleções" },
  { value: "2", label: "temas por modo de variável" },
  { value: "8", label: "famílias de componentes, 32 variantes" },
  { value: "14", label: "estilos de texto" },
];

// Valores conferidos nas variáveis do Figma (modos Light e Dark).
const semanticTokens = [
  {
    token: "action/primary",
    role: "Ação principal, aba ativa, foco",
    light: { primitive: "pink/700", hex: "#A31545" },
    dark: { primitive: "pink/300", hex: "#F48FB1" },
  },
  {
    token: "bg/surface",
    role: "Superfície de cards e barras",
    light: { primitive: "neutral/0", hex: "#FFFFFF" },
    dark: { primitive: "neutral/900", hex: "#1E1A1D" },
  },
  {
    token: "text/content",
    role: "Títulos e texto de conteúdo",
    light: { primitive: "neutral/1000", hex: "#0A0A0A" },
    dark: { primitive: "tw/gray-100", hex: "#F3F4F6" },
  },
];

const buttonProps = [
  { name: "Size", kind: "variant" },
  { name: "State", kind: "variant" },
  { name: "Label", kind: "texto" },
  { name: "Show Icon", kind: "booleano" },
  { name: "Icon", kind: "troca de instância" },
];

const moduleProps = [
  { name: "Color", kind: "variant · 4" },
  { name: "Title · Meta", kind: "texto" },
  { name: "Show Lessons", kind: "booleano" },
  { name: "Lessons", kind: "slot" },
  { name: "Progress/Bar", kind: "aninhada" },
];

const navProps = [
  { name: "Active", kind: "variant · 5 destinos" },
  { name: "Nav/Item State × Focus", kind: "variant" },
];

const compositionSteps = [
  {
    step: "Foundations",
    desc: "Plus Jakarta Sans e Inter, escala de espaçamento em múltiplos de 4 px e raios de 10 a 16 px.",
  },
  {
    step: "Tokens",
    desc: "module/pink/start aponta para #C6005C no Light e para a cor de superfície no Dark.",
  },
  {
    step: "Components",
    desc: "Header/Page, Nav/Bottom, 4 Card/Module e 19 Card/Lesson, com Progress/Bar aninhada.",
  },
  {
    step: "Interface",
    desc: "A tela Aulas em Light e Dark, montada só com instâncias vinculadas, sem frames desanexados.",
  },
];

function Prop({ name, kind }: { name: string; kind: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-elevated border border-border text-xs whitespace-nowrap">
      <span className="font-semibold text-text-primary">{name}</span>
      <span className="text-text-secondary">{kind}</span>
    </span>
  );
}

/*
 * Prancha neutra na cor bg/page do Figma (#F9FAFB): os recortes exportados têm esse fundo.
 * A moldura externa usa as superfícies do site para a prancha clara não "flutuar" no Dark.
 */
function Canvas({
  children,
  className = "",
  grow = false,
}: {
  children: React.ReactNode;
  className?: string;
  grow?: boolean;
}) {
  return (
    <div className={`rounded-2xl bg-surface-elevated border border-border p-1.5 shadow-sm ${grow ? "flex-1 flex flex-col" : ""}`}>
      <div className={`rounded-xl bg-[#F9FAFB] ring-1 ring-black/5 p-3 sm:p-4 ${grow ? "flex-1" : ""} ${className}`}>
        {children}
      </div>
    </div>
  );
}

function DemoHeading({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-bold text-brand-strong tabular-nums">{index}</span>
      <span className="h-px w-8 bg-brand/40" />
      <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">{label}</span>
    </div>
  );
}

function Swatch({ hex, primitive }: { hex: string; primitive: string }) {
  return (
    <div className="flex items-center gap-2.5 min-w-0">
      <span
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-black/10 shrink-0 shadow-sm"
        style={{ backgroundColor: hex }}
        aria-hidden="true"
      />
      <span className="min-w-0">
        <span className="block text-xs font-semibold text-text-primary truncate">{primitive}</span>
        <span className="block text-xs text-text-secondary font-mono">{hex}</span>
      </span>
    </div>
  );
}

function ContrastBadge({ pass, children }: { pass: boolean; children: React.ReactNode }) {
  const Icon = pass ? CheckCircle2 : XCircle;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold text-text-primary whitespace-nowrap ${
        pass ? "border-emerald-600/40 bg-emerald-600/10" : "border-red-500/40 bg-red-500/10"
      }`}
    >
      <Icon className={`w-3.5 h-3.5 shrink-0 ${pass ? "text-emerald-600" : "text-red-500"}`} />
      {children}
    </span>
  );
}

export default function RecruitingDesignSystemSection() {
  return (
    <section id="design-system" className="py-20 border-b border-border transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* INTRODUÇÃO */}
        <RevealOnScroll direction="up" duration={900}>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Design System</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mt-3">
              Da interface ao sistema.
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-4">
              Depois de desenvolver o protótipo do UNIEDU, organizei seus padrões visuais em uma biblioteca reutilizável no Figma. Estruturei tokens, componentes, variantes e temas para tornar as decisões de interface mais consistentes, documentadas e fáceis de evoluir.
            </p>
            <p className="text-text-secondary text-xs leading-relaxed mt-4">
              Projeto original e identidade visual: {AUTHORS.lucas.name} e {AUTHORS.najme.name}. Estruturação do Design System, decisões técnicas e validação: {AUTHORS.lucas.name}, com apoio de IA na execução.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100} duration={900}>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px mt-10 rounded-2xl overflow-hidden border border-border bg-border">
            {libraryFacts.map((fact) => (
              <div key={fact.label} className="bg-page p-4 sm:p-5">
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="block text-2xl md:text-3xl font-bold tracking-tight text-text-primary">{fact.value}</span>
                  <span className="block text-xs text-text-secondary leading-snug mt-1">{fact.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </RevealOnScroll>

        {/* 01 — FOUNDATIONS E TOKENS */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <RevealOnScroll direction="up" duration={900}>
              <DemoHeading index="01" label="Foundations e tokens" />
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary mt-4 leading-snug">
                O componente mantém sua função. O tema determina quais valores ele utiliza.
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-4">
                Os primitivos guardam valores brutos, como cores e dimensões. Os tokens semânticos definem a função de cada valor na interface e apontam para um primitivo diferente em cada tema. Os componentes usam apenas os tokens semânticos.
              </p>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <RevealOnScroll direction="up" delay={100} duration={900}>
              <div className="rounded-2xl bg-surface border border-border overflow-hidden">
                <div className="hidden sm:grid grid-cols-[1.3fr_1fr_1fr] gap-4 px-5 py-3 border-b border-border text-xs font-bold uppercase tracking-wide text-text-secondary">
                  <span>Token semântico</span>
                  <span>Light</span>
                  <span>Dark</span>
                </div>
                <ul>
                  {semanticTokens.map((item) => (
                    <li
                      key={item.token}
                      className="grid grid-cols-2 sm:grid-cols-[1.3fr_1fr_1fr] gap-x-4 gap-y-3 px-5 py-4 border-b border-border last:border-b-0"
                    >
                      <div className="col-span-2 sm:col-span-1 min-w-0">
                        <p className="text-sm font-bold text-text-primary font-mono">{item.token}</p>
                        <p className="text-xs text-text-secondary mt-0.5">{item.role}</p>
                      </div>
                      <div>
                        <span className="sm:hidden block text-xs font-bold uppercase tracking-wide text-text-secondary mb-1.5">Light</span>
                        <Swatch {...item.light} />
                      </div>
                      <div>
                        <span className="sm:hidden block text-xs font-bold uppercase tracking-wide text-text-secondary mb-1.5">Dark</span>
                        <Swatch {...item.dark} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={150} duration={900}>
              <figure>
                <Canvas>
                  <img
                    src={`${ASSET_BASE}/card-lesson-light-dark.webp`}
                    alt="Componente Card/Lesson exibido lado a lado nos temas Light e Dark, com as mesmas aulas e propriedades."
                    width={1056}
                    height={426}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto"
                  />
                </Canvas>
                <figcaption className="text-xs text-text-secondary leading-relaxed mt-3">
                  <span className="font-semibold text-text-primary">Card/Lesson</span> nos dois temas: mesmo componente, mesmas propriedades. Só o modo de variável muda.
                </figcaption>
              </figure>
            </RevealOnScroll>
          </div>
        </div>

        {/* 02 — COMPONENTES REUTILIZÁVEIS */}
        <div className="mt-24">
          <RevealOnScroll direction="up" duration={900}>
            <div className="max-w-3xl">
              <DemoHeading index="02" label="Componentes reutilizáveis" />
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary mt-4 leading-snug">
                Poucos componentes, com propriedades que cobrem os casos reais.
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-4">
                Em vez de reconstruir elementos em cada tela, organizei padrões que podem ser reutilizados e configurados conforme o contexto. Variantes resolvem estados e tamanhos; textos, booleanos, troca de ícone e slots evitam multiplicar variantes. Tudo é montado com Auto Layout e usado como instância.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-12 gap-5 mt-10">
            <div className="lg:col-span-7">
              <RevealOnScroll direction="up" duration={900}>
                <figure className="p-5 sm:p-6 rounded-2xl bg-surface border border-border h-full flex flex-col">
                  <figcaption className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wide text-brand">Composição</span>
                    <p className="text-base font-bold text-text-primary mt-1">Card/Module</p>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">
                      O cabeçalho aninha uma Progress/Bar; as aulas entram por um slot como instâncias de Card/Lesson.
                    </p>
                  </figcaption>
                  <Canvas grow className="flex items-center">
                    <img
                      src={`${ASSET_BASE}/card-module-composition.webp`}
                      alt="Card/Module UX Strategy expandido, com barra de progresso aninhada e duas instâncias de Card/Lesson no slot de aulas."
                      width={1056}
                      height={578}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </Canvas>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {moduleProps.map((prop) => (
                      <Prop key={prop.name} {...prop} />
                    ))}
                  </div>
                </figure>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-5">
              <RevealOnScroll direction="up" delay={100} duration={900}>
                <figure className="p-5 sm:p-6 rounded-2xl bg-surface border border-border">
                  <figcaption className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wide text-brand">Variantes</span>
                    <p className="text-base font-bold text-text-primary mt-1">Button/Primary</p>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">
                      3 tamanhos × 4 estados = 12 variantes.
                    </p>
                  </figcaption>
                  <Canvas>
                    <img
                      src={`${ASSET_BASE}/button-primary-variants.webp`}
                      alt="Variantes do Button/Primary: tamanhos SM, MD e LG e estados Pressed, Focus e Disabled."
                      width={1056}
                      height={312}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </Canvas>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {buttonProps.map((prop) => (
                      <Prop key={prop.name} {...prop} />
                    ))}
                  </div>
                </figure>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={200} duration={900}>
                <figure className="p-5 sm:p-6 rounded-2xl bg-surface border border-border">
                  <figcaption className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wide text-brand">Uma variante por destino</span>
                    <p className="text-base font-bold text-text-primary mt-1">Nav/Bottom</p>
                  </figcaption>
                  <Canvas className="space-y-3">
                    {[
                      { file: "nav-bottom-active-aulas.webp", active: "Aulas" },
                      { file: "nav-bottom-active-perfil.webp", active: "Perfil" },
                    ].map((nav) => (
                      <div key={nav.file}>
                        <img
                          src={`${ASSET_BASE}/${nav.file}`}
                          alt={`Nav/Bottom com o destino ${nav.active} ativo.`}
                          width={1056}
                          height={128}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto rounded-md"
                        />
                        <p className="text-xs text-[#4A5565] mt-1.5">
                          Active = <span className="font-semibold text-[#0A0A0A]">{nav.active}</span>
                        </p>
                      </div>
                    ))}
                  </Canvas>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {navProps.map((prop) => (
                      <Prop key={prop.name} {...prop} />
                    ))}
                  </div>
                </figure>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* 03 — APLICAÇÃO REAL E ACESSIBILIDADE */}
        <div className="mt-24 rounded-[2rem] bg-surface border border-border p-5 sm:p-8 lg:p-12">
          <RevealOnScroll direction="up" duration={900}>
            <div className="max-w-3xl">
              <DemoHeading index="03" label="Aplicação real e acessibilidade" />
              <h3 className="text-xl md:text-3xl font-bold tracking-tight text-text-primary mt-4 leading-snug">
                A tela Aulas, recomposta com a biblioteca.
              </h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-4">
                As versões Light e Dark usam os mesmos componentes principais. Cada uma tem suas próprias instâncias, configuradas pelo modo de variável do tema. Busca e abas ainda são estruturas locais da tela.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mt-10 items-center">
            <div className="lg:col-span-7">
              <RevealOnScroll direction="scale" delay={100} duration={900}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 max-w-[17rem] sm:max-w-[34rem] mx-auto">
                  {[
                    { file: "aulas-light.webp", label: "Light", alt: "Tela Aulas no tema Light, composta com instâncias da biblioteca." },
                    { file: "aulas-dark.webp", label: "Dark", alt: "Tela Aulas no tema Dark, composta com as mesmas instâncias e o modo Dark." },
                  ].map((screen) => (
                    <figure key={screen.file} className="min-w-0">
                      <figcaption className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-3 text-center">
                        {screen.label}
                      </figcaption>
                      <div className="rounded-[1.25rem] sm:rounded-[1.75rem] border border-border bg-page p-1 sm:p-1.5 shadow-xl">
                        <img
                          src={`${ASSET_BASE}/${screen.file}`}
                          alt={screen.alt}
                          width={786}
                          height={1704}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto rounded-[1rem] sm:rounded-[1.4rem]"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5">
              <RevealOnScroll direction="up" delay={150} duration={900}>
                <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">
                  Foundations → Tokens → Components → Interface
                </p>
                <ol className="border-l border-border">
                  {compositionSteps.map((item, idx) => (
                    <li key={item.step} className="relative pl-6 pb-6 last:pb-0">
                      <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand ring-4 ring-surface" />
                      <p className="text-sm font-bold text-text-primary">
                        <span className="text-brand-strong tabular-nums mr-2">0{idx + 1}</span>
                        {item.step}
                      </p>
                      <p className="text-xs text-text-secondary leading-relaxed mt-1">{item.desc}</p>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-text-secondary leading-relaxed mt-6 pt-5 border-t border-border">
                  As duas telas já incluem as melhorias de contraste propostas abaixo, por isso diferem do protótipo publicado.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          {/* REVISÃO DE ACESSIBILIDADE */}
          <div className="mt-14 pt-10 border-t border-border grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <RevealOnScroll direction="up" duration={900}>
                <span className="text-xs font-bold uppercase tracking-wide text-brand">Revisão de acessibilidade</span>
                <h4 className="text-lg font-bold text-text-primary mt-2">Cabeçalho do módulo</h4>
                <p className="text-text-secondary text-sm leading-relaxed mt-3">
                  No protótipo, o título e a meta em branco ficam sobre um gradiente rosa claro. Medido nos dois extremos do gradiente, o contraste fica abaixo de 4,5:1, mínimo exigido para texto desse tamanho (WCAG 1.4.3).
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mt-3">
                  A proposta mantém o matiz e o texto branco e escurece o gradiente para os tons -700 de cada módulo. A diferenciação entre módulos continua, e a legibilidade passa no critério.
                </p>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <RevealOnScroll direction="up" delay={100} duration={900}>
                <figure>
                  <figcaption className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-text-secondary">
                      As built · protótipo publicado
                    </span>
                    <ContrastBadge pass={false}>2,76–2,86:1 · reprova</ContrastBadge>
                  </figcaption>
                  <Canvas>
                    <img
                      src={`${ASSET_BASE}/module-header-as-built.webp`}
                      alt="Cabeçalho do módulo UX Strategy como está no protótipo: texto branco sobre gradiente rosa claro."
                      width={1056}
                      height={210}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </Canvas>
                  <p className="text-xs text-text-secondary mt-2 font-mono">#FFFFFF sobre #FB64B6 → #FF637E</p>
                </figure>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={150} duration={900}>
                <figure>
                  <figcaption className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-brand-strong">
                      Proposed · Figma
                    </span>
                    <ContrastBadge pass>5,91–6,03:1 · passa</ContrastBadge>
                  </figcaption>
                  <Canvas>
                    <img
                      src={`${ASSET_BASE}/module-header-proposed.webp`}
                      alt="Cabeçalho do módulo UX Strategy proposto no Figma: texto branco sobre gradiente rosa escuro."
                      width={1056}
                      height={210}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </Canvas>
                  <p className="text-xs text-text-secondary mt-2 font-mono">#FFFFFF sobre #C6005C → #C70036</p>
                </figure>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={200} duration={900}>
                <div className="flex gap-3 p-4 rounded-xl bg-page border border-brand/30">
                  <Info className="w-4 h-4 text-brand-strong shrink-0 mt-0.5" />
                  <p className="text-sm text-text-primary leading-relaxed">
                    <span className="font-bold">A melhoria está especificada no Figma e ainda não foi implementada no protótipo publicado.</span>{" "}
                    <span className="text-text-secondary">O tema Dark já atendia ao critério e não mudou.</span>
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* FECHAMENTO + CTA */}
        <RevealOnScroll direction="up" duration={900}>
          <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
              A documentação completa, com tokens, fichas de componentes, critérios de contraste e correspondência com o código, está no arquivo do Figma. A biblioteca ainda não está conectada ao código do app: não há Code Connect nem sincronização automática.
            </p>
            <a
              href={DESIGN_SYSTEM_FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto shrink-0 px-7 py-4 bg-surface-elevated text-text-primary border border-brand/40 rounded-2xl text-sm font-bold tracking-wide hover:border-brand hover:text-brand-strong active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              Explorar Design System no Figma
              <ArrowUpRight className="w-4 h-4" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
