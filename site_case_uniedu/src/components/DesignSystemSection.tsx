import { ArrowUpRight, CheckCircle2, Info, XCircle } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { DESIGN_SYSTEM_FIGMA_URL } from "./RecruitingDesignSystemSection";
import { AUTHORS, designSystemContent, type Lang } from "../content/translations";

const ASSET_BASE = "/case-design-system";

// Valores conferidos nas variáveis do Figma (modos Light e Dark). Não mudam com o idioma.
const semanticTokens = [
  {
    token: "action/primary",
    role: "actionPrimary",
    light: { primitive: "pink/700", hex: "#A31545" },
    dark: { primitive: "pink/300", hex: "#F48FB1" },
  },
  {
    token: "bg/surface",
    role: "bgSurface",
    light: { primitive: "neutral/0", hex: "#FFFFFF" },
    dark: { primitive: "neutral/900", hex: "#1E1A1D" },
  },
  {
    token: "text/content",
    role: "textContent",
    light: { primitive: "neutral/1000", hex: "#0A0A0A" },
    dark: { primitive: "tw/gray-100", hex: "#F3F4F6" },
  },
] as const;

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

function BlockHeading({ index, label }: { index: string; label: string }) {
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

export default function DesignSystemSection({ lang }: { lang: Lang }) {
  const c = designSystemContent[lang];

  return (
    <section id="design-system" className="py-24 bg-surface/20 border-t border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* 01 — DA INTERFACE AO SISTEMA */}
        <RevealOnScroll direction="up" duration={900}>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">{c.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mt-3 mb-5">{c.title}</h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">{c.intro}</p>
            <p className="text-text-secondary text-xs leading-relaxed mt-4">
              {c.authorshipOriginal} {AUTHORS.lucas.name} {c.authorshipAnd} {AUTHORS.najme.name}. {c.authorshipDs}{" "}
              {AUTHORS.lucas.name}, {c.authorshipAi}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100} duration={900}>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px mt-12 rounded-2xl overflow-hidden border border-border bg-border">
            {c.facts.map((fact) => (
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

        <RevealOnScroll direction="up" delay={150} duration={900}>
          <div className="mt-12">
            <BlockHeading index="01" label={c.pipelineLabel} />
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {c.pipeline.map((item, idx) => (
                <li key={item.step} className="p-5 rounded-2xl bg-surface border border-border">
                  <p className="text-sm font-bold text-text-primary">
                    <span className="text-brand-strong tabular-nums mr-2">0{idx + 1}</span>
                    {item.step}
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed mt-2">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </RevealOnScroll>

        {/* 02 — FOUNDATIONS E TOKENS */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-24 items-start">
          <div className="lg:col-span-5">
            <RevealOnScroll direction="left" duration={900}>
              <BlockHeading index="02" label={c.tokens.label} />
              <h3 className="text-xl md:text-3xl font-bold tracking-tight text-text-primary mt-4 leading-snug">
                {c.tokens.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-4">{c.tokens.text}</p>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <RevealOnScroll direction="right" duration={900}>
              <div className="rounded-2xl bg-surface border border-border overflow-hidden">
                <div className="hidden sm:grid grid-cols-[1.3fr_1fr_1fr] gap-4 px-5 py-3 border-b border-border text-xs font-bold uppercase tracking-wide text-text-secondary">
                  <span>{c.tokens.colToken}</span>
                  <span>{c.tokens.colLight}</span>
                  <span>{c.tokens.colDark}</span>
                </div>
                <ul>
                  {semanticTokens.map((item) => (
                    <li
                      key={item.token}
                      className="grid grid-cols-2 sm:grid-cols-[1.3fr_1fr_1fr] gap-x-4 gap-y-3 px-5 py-4 border-b border-border last:border-b-0"
                    >
                      <div className="col-span-2 sm:col-span-1 min-w-0">
                        <p className="text-sm font-bold text-text-primary font-mono">{item.token}</p>
                        <p className="text-xs text-text-secondary mt-0.5">{c.tokens.roles[item.role]}</p>
                      </div>
                      <div>
                        <span className="sm:hidden block text-xs font-bold uppercase tracking-wide text-text-secondary mb-1.5">
                          {c.tokens.colLight}
                        </span>
                        <Swatch {...item.light} />
                      </div>
                      <div>
                        <span className="sm:hidden block text-xs font-bold uppercase tracking-wide text-text-secondary mb-1.5">
                          {c.tokens.colDark}
                        </span>
                        <Swatch {...item.dark} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={100} duration={900}>
              <figure>
                <Canvas>
                  <img
                    src={`${ASSET_BASE}/card-lesson-light-dark.webp`}
                    alt={c.tokens.figureAlt}
                    width={1056}
                    height={426}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto"
                  />
                </Canvas>
                <figcaption className="text-xs text-text-secondary leading-relaxed mt-3">
                  <span className="font-semibold text-text-primary">{c.tokens.figureCaptionStrong}</span> {c.tokens.figureCaption}
                </figcaption>
              </figure>
            </RevealOnScroll>
          </div>
        </div>

        {/* 03 — COMPONENTES REUTILIZÁVEIS */}
        <div className="mt-24">
          <RevealOnScroll direction="up" duration={900}>
            <div className="max-w-3xl">
              <BlockHeading index="03" label={c.components.label} />
              <h3 className="text-xl md:text-3xl font-bold tracking-tight text-text-primary mt-4 leading-snug">
                {c.components.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-4">{c.components.text}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={100} duration={900}>
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-wide text-text-secondary mb-3">{c.components.selectionLabel}</p>
              <ul className="flex flex-wrap gap-2">
                {c.components.catalog.map((item) => (
                  <li
                    key={item.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
                    <span className="font-bold text-text-primary font-mono">{item.name}</span>
                    <span className="text-text-secondary">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-12 gap-5 mt-8">
            <div className="lg:col-span-7">
              <RevealOnScroll direction="up" duration={900}>
                <figure className="p-5 sm:p-6 rounded-2xl bg-surface border border-border h-full flex flex-col">
                  <figcaption className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wide text-brand">{c.components.composition.kicker}</span>
                    <p className="text-base font-bold text-text-primary mt-1 font-mono">Card/Module</p>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">{c.components.composition.desc}</p>
                  </figcaption>
                  <Canvas grow className="flex items-center">
                    <img
                      src={`${ASSET_BASE}/card-module-composition.webp`}
                      alt={c.components.composition.alt}
                      width={1056}
                      height={578}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </Canvas>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {c.components.composition.props.map((prop) => (
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
                    <span className="text-xs font-bold uppercase tracking-wide text-brand">{c.components.button.kicker}</span>
                    <p className="text-base font-bold text-text-primary mt-1 font-mono">Button/Primary</p>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">{c.components.button.desc}</p>
                  </figcaption>
                  <Canvas>
                    <img
                      src={`${ASSET_BASE}/button-primary-variants.webp`}
                      alt={c.components.button.alt}
                      width={1056}
                      height={312}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </Canvas>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {c.components.button.props.map((prop) => (
                      <Prop key={prop.name} {...prop} />
                    ))}
                  </div>
                </figure>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={200} duration={900}>
                <figure className="p-5 sm:p-6 rounded-2xl bg-surface border border-border">
                  <figcaption className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wide text-brand">{c.components.nav.kicker}</span>
                    <p className="text-base font-bold text-text-primary mt-1 font-mono">Nav/Bottom</p>
                  </figcaption>
                  <Canvas className="space-y-3">
                    {[
                      { file: "nav-bottom-active-aulas.webp", active: "Aulas", alt: c.components.nav.altAulas },
                      { file: "nav-bottom-active-perfil.webp", active: "Perfil", alt: c.components.nav.altPerfil },
                    ].map((nav) => (
                      <div key={nav.file}>
                        <img
                          src={`${ASSET_BASE}/${nav.file}`}
                          alt={nav.alt}
                          width={1056}
                          height={128}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto rounded-md"
                        />
                        <p className="text-xs text-[#4A5565] mt-1.5">
                          {c.components.nav.activeLabel} = <span className="font-semibold text-[#0A0A0A]">{nav.active}</span>
                        </p>
                      </div>
                    ))}
                  </Canvas>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {c.components.nav.props.map((prop) => (
                      <Prop key={prop.name} {...prop} />
                    ))}
                  </div>
                </figure>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* 04 — APLICAÇÃO REAL E ACESSIBILIDADE */}
        <div className="mt-24 rounded-[2rem] bg-surface border border-border p-5 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <RevealOnScroll direction="left" duration={900}>
                <BlockHeading index="04" label={c.application.label} />
                <h3 className="text-xl md:text-3xl font-bold tracking-tight text-text-primary mt-4 leading-snug">
                  {c.application.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mt-4">{c.application.text}</p>
                <p className="text-xs text-text-secondary leading-relaxed mt-6 pt-5 border-t border-border">
                  {c.application.screensNote}
                </p>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-7">
              <RevealOnScroll direction="scale" delay={100} duration={900}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 max-w-[17rem] sm:max-w-[34rem] mx-auto">
                  {[
                    { file: "aulas-light.webp", label: c.application.screensLight, alt: c.application.altLight },
                    { file: "aulas-dark.webp", label: c.application.screensDark, alt: c.application.altDark },
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
          </div>

          {/* REVISÃO DE ACESSIBILIDADE — AS BUILT × PROPOSED */}
          <div className="mt-14 pt-10 border-t border-border grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <RevealOnScroll direction="up" duration={900}>
                <span className="text-xs font-bold uppercase tracking-wide text-brand">{c.application.accessibilityKicker}</span>
                <h4 className="text-lg font-bold text-text-primary mt-2">{c.application.accessibilityTitle}</h4>
                <p className="text-text-secondary text-sm leading-relaxed mt-3">{c.application.accessibilityP1}</p>
                <p className="text-text-secondary text-sm leading-relaxed mt-3">{c.application.accessibilityP2}</p>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <RevealOnScroll direction="up" delay={100} duration={900}>
                <figure>
                  <figcaption className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-text-secondary">{c.application.asBuiltLabel}</span>
                    <ContrastBadge pass={false}>{c.application.asBuiltBadge}</ContrastBadge>
                  </figcaption>
                  <Canvas>
                    <img
                      src={`${ASSET_BASE}/module-header-as-built.webp`}
                      alt={c.application.asBuiltAlt}
                      width={1056}
                      height={210}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </Canvas>
                  <p className="text-xs text-text-secondary mt-2 font-mono">#FFFFFF / #FB64B6 → #FF637E</p>
                </figure>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={150} duration={900}>
                <figure>
                  <figcaption className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-brand-strong">{c.application.proposedLabel}</span>
                    <ContrastBadge pass>{c.application.proposedBadge}</ContrastBadge>
                  </figcaption>
                  <Canvas>
                    <img
                      src={`${ASSET_BASE}/module-header-proposed.webp`}
                      alt={c.application.proposedAlt}
                      width={1056}
                      height={210}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </Canvas>
                  <p className="text-xs text-text-secondary mt-2 font-mono">#FFFFFF / #C6005C → #C70036</p>
                </figure>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={200} duration={900}>
                <div className="flex gap-3 p-4 rounded-xl bg-page border border-brand/30">
                  <Info className="w-4 h-4 text-brand-strong shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-text-primary leading-relaxed">
                    <span className="font-bold">{c.application.status}</span>{" "}
                    <span className="text-text-secondary">{c.application.statusDetail}</span>
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* FECHAMENTO + CTA */}
        <RevealOnScroll direction="up" duration={900}>
          <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">{c.closing}</p>
            <a
              href={DESIGN_SYSTEM_FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto shrink-0 px-7 py-4 bg-surface-elevated text-text-primary border border-brand/40 rounded-2xl text-sm font-bold tracking-wide hover:border-brand hover:text-brand-strong active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              {c.cta}
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">{c.newTab}</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
