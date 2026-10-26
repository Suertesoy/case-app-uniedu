export type Lang = "pt" | "en";

export const AUTHORS = {
  lucas: {
    name: "Lucas Cabral",
    linkedin: "https://www.linkedin.com/in/laclucascabral/",
  },
  najme: {
    name: "Najme Simón Alé",
    linkedin: "https://www.linkedin.com/in/najme-simon-al%C3%A9-b08b6221",
  },
};

export const pageTitle: Record<Lang, string> = {
  pt: "UNIEDU — Apresentação de Case e Estratégia de Produto",
  en: "UNIEDU — Case Study and Product Strategy Presentation",
};

export const htmlLang: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en-US",
};

interface AppContent {
  header: {
    badge: string;
    tagline: string;
    nav: { href: string; label: string }[];
    navAriaLabel: string;
    sectionsLabel: string;
    sectionsMenuTitle: string;
    railAriaLabel: string;
    railTopLabel: string;
    backToTopLabel: string;
    themeToggleLabel: string;
    langToggleLabel: string;
    ctaPrototype: string;
    ctaPrototypeShort: string;
  };
  hero: {
    authorsLabel: string;
    titleAriaLabel: string;
    titleLines: {
      desktop: [string, string, string];
      mobile: [string, string, string, string];
    };
    chips: string[];
    toolsLine: string;
    ctaSolution: string;
    ctaPrototype: string;
  };
  quickSolution: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: { title: string; desc: string }[];
    ctaFull: string;
  };
  challenge: {
    eyebrow: string;
    title: string;
    description: string;
    frictions: { tag: string; title: string; desc: string }[];
    sourcesLabel: string;
    hmwBadge: string;
    hmwQuestion: string;
  };
  process: {
    eyebrow: string;
    description: string;
    steps: { title: string; desc: string }[];
  };
  research: {
    eyebrow: string;
    title: string;
    description: string;
    deskResearch: {
      methodLabel: string;
      title: string;
      desc: string;
      body: string;
      keyIndicatorLabel: string;
      keyIndicator: string;
      source: string;
    };
    benchmark: {
      methodLabel: string;
      title: string;
      desc: string;
      items: { name: string; obs: string; learn: string; impact: string }[];
      obsLabel: string;
      learnLabel: string;
      impactLabel: string;
    };
    interviews: {
      methodLabel: string;
      title: string;
      desc: string;
      body: string;
      quotes: { text: string; meta: string }[];
    };
    transitionToPersonas: string;
  };
  validation: {
    eyebrow: string;
    title: string;
    description: string;
    keyLearningsLabel: string;
    keyLearnings: string;
    tasks: { label: string; titulo: string; resultado: string; cor: string; texto: string }[];
  };
  metrics: {
    eyebrow: string;
    title: string;
    description: string;
    axis1Label: string;
    axis1Items: { title: string; desc: string }[];
    axis2Label: string;
    axis2Items: { title: string; desc: string }[];
    footnote: string;
  };
  implementation: {
    eyebrow: string;
    title: string;
    description: string;
    cards: { title: string; desc: string }[];
    stack: string[];
  };
  scope: {
    eyebrow: string;
    title: string;
    fields: { label: string; value: string }[];
    authorshipLabel: string;
    competenciesTitle: string;
    competenciesDesc: string;
    competencies: string[];
  };
  learnings: {
    eyebrow: string;
    title: string;
    description: string;
    cards: { tag: string; title: string; desc: string }[];
  };
  value: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: { title: string; desc: string; tag: string }[];
  };
  prototypeSection: {
    badge: string;
    title: string;
    description: string;
    ctaOpen: string;
    ctaBack: string;
  };
  closing: {
    quote: string;
    credit: string;
  };
  footer: {
    line1Prefix: string;
    line1Middle: string;
    line1Program: string;
    line1ConductedBy: string;
    line2: string;
    linkedinLabel: string;
  };
}

export const appContent: Record<Lang, AppContent> = {
  pt: {
    header: {
      badge: "Case Study",
      tagline: "UX/UI · Product Strategy · EdTech",
      nav: [
        { href: "#solucao-rapida", label: "Visão geral" },
        { href: "#pesquisa", label: "Pesquisa" },
        { href: "#jornada", label: "Jornada" },
        { href: "#produto", label: "Produto" },
        { href: "#validacao", label: "Validação" },
        { href: "#design-system", label: "Design System" },
        { href: "#implementacao", label: "Implementação" },
        { href: "#aprendizados", label: "Aprendizados" },
      ],
      navAriaLabel: "Navegação principal",
      sectionsLabel: "Seções",
      sectionsMenuTitle: "Capítulos do case",
      railAriaLabel: "Índice de capítulos do case",
      railTopLabel: "Início",
      backToTopLabel: "Voltar ao início",
      themeToggleLabel: "Alternar Tema",
      langToggleLabel: "Selecionar idioma",
      ctaPrototype: "Ver Protótipo",
      ctaPrototypeShort: "Protótipo",
    },
    hero: {
      authorsLabel: "Autores:",
      titleAriaLabel: "Gamificação do aprendizado para transformar constância em progresso real",
      titleLines: {
        desktop: ["Gamificação do aprendizado para", "transformar", "constância em progresso real"],
        mobile: ["Gamificação do", "aprendizado para", "transformar", "constância em|progresso real"],
      },
      chips: ["Pesquisa", "Estratégia de Produto", "UX/UI Design", "Prototipação", "Validação", "Implementação"],
      toolsLine: "Figma · FigJam · Notion · Google Workspace · ChatGPT · Gemini · Claude · OBS Studio",
      ctaSolution: "Ver solução proposta",
      ctaPrototype: "Testar protótipo",
    },
    quickSolution: {
      eyebrow: "Visão Geral",
      title: "A Solução em Poucos Segundos",
      description: "Antes de entrar no processo, veja o que a solução propõe: uma experiência de aprendizagem que combina progresso visível, plano de estudos, recompensas, comunidade e suporte no mesmo ecossistema.",
      highlights: [
        { title: "Progresso visível desde a home", desc: "O estudante entende rapidamente o que já avançou e o que ainda precisa fazer." },
        { title: "Plano de estudos ajustável", desc: "A rotina de estudos pode ser adaptada ao tempo disponível de cada pessoa." },
        { title: "Recompensas com valor percebido", desc: "O progresso deixa de ser apenas uma medalha visual e passa a gerar uma sensação mais concreta de recompensa." },
        { title: "Suporte inteligente durante o estudo", desc: "O aluno consegue pedir ajuda sem sair do contexto da aula." },
      ],
      ctaFull: "Testar protótipo completo",
    },
    challenge: {
      eyebrow: "Contexto de Produto",
      title: "O Desafio Real: Mais do que um Design Visual",
      description: "O UNIEDU não foi pensado como um redesenho visual isolado. A proposta nasceu da análise de dificuldades comuns no ensino a distância, como perda de ritmo, baixa percepção de evolução, isolamento e recompensas pouco significativas.",
      frictions: [
        { tag: "Fricção 01", title: "Perda de ritmo semanal", desc: "Quando a rotina quebra, muitos estudantes têm dificuldade para retomar o estudo. Metas rígidas e pouco adaptáveis aumentam a sensação de atraso." },
        { tag: "Fricção 02", title: "Baixa percepção de evolução", desc: "Em sessões curtas de estudo, o progresso pode parecer invisível. Isso reduz a sensação de avanço e enfraquece a motivação para continuar." },
        { tag: "Fricção 03", title: "Sentimento de isolamento", desc: "No ensino online, a falta de interação e suporte no momento certo pode fazer o aluno travar, adiar dúvidas ou abandonar a atividade." },
        { tag: "Fricção 04", title: "Recompensas sem valor percebido", desc: "Pontos e medalhas ajudam no início, mas perdem força quando não se conectam a benefícios claros ou ao objetivo real do estudante." },
      ],
      sourcesLabel: "Base de apoio:",
      hmwBadge: "Pergunta de Oportunidade (How Might We)",
      hmwQuestion: "\"Como poderíamos criar uma experiência de aprendizagem que recompense o esforço real do aluno e transforme constância em hábito?\"",
    },
    process: {
      eyebrow: "Como conduzimos o processo",
      description: "O processo foi guiado pela lógica do Double Diamond, alternando investigação, síntese, exploração e refinamento até chegar à versão final em alta fidelidade.",
      steps: [
        { title: "Descobrir", desc: "Survey, entrevistas e análise de contexto sobre dores em cursos online." },
        { title: "Definir", desc: "Síntese dos achados em personas, jornadas e oportunidades de produto." },
        { title: "Desenvolver", desc: "Wireframes, exploração de fluxos e primeira versão em alta fidelidade." },
        { title: "Entregar e refinar", desc: "Testes de usabilidade, ajustes de interface e versão final consolidada." },
      ],
    },
    research: {
      eyebrow: "Fase de Descoberta",
      title: "Pesquisa e Evidências Comportamentais",
      description: "Decisões de design baseadas em dados qualitativos, benchmarking analítico e escuta real das dores de estudantes.",
      deskResearch: {
        methodLabel: "Método 01",
        title: "Desk Research",
        desc: "Análise de relatórios de mercado em EdTech e pesquisas comportamentais sobre o aprendizado a distância.",
        body: "A pesquisa de apoio indicou que a evasão em cursos online costuma estar relacionada a uma combinação de fatores, como motivação, satisfação, suporte, carga de estudos, sensação de isolamento e dificuldade de manter uma rotina consistente.",
        keyIndicatorLabel: "Indicador chave:",
        keyIndicator: "fatores como motivação, suporte, rotina, presença social e carga de estudos aparecem de forma recorrente em pesquisas sobre permanência e evasão no ensino online.",
        source: "Fonte de apoio: Shaikh & Asif, 2022; Rahmani et al., 2024.",
      },
      benchmark: {
        methodLabel: "Método 02",
        title: "Benchmark Qualitativo",
        desc: "Mapeamento das referências de gamificação e hábitos de consumo de dados em aplicativos consolidados.",
        obsLabel: "Observação:",
        learnLabel: "Aprendizado:",
        impactLabel: "Como influenciou:",
        items: [
          { name: "Duolingo", obs: "Streaks visuais e lembretes de continuidade.", learn: "A recorrência fica mais clara quando o progresso é visível no dia a dia.", impact: "Inspirou a visualização de dias ativos e metas de foco." },
          { name: "SoloLearn", obs: "Conteúdos curtos e exercícios práticos.", learn: "Sessões menores reduzem a barreira de retomada.", impact: "Ajudou a orientar a ideia de microaulas e avanço incremental." },
          { name: "Kahoot", obs: "Dinâmica competitiva e feedback imediato.", learn: "Competição pode engajar, mas também pode pressionar perfis mais reservados.", impact: "Reforçou a decisão de tornar rankings opcionais." },
          { name: "Udemy", obs: "Barras de progresso e conclusão por curso.", learn: "O progresso linear ajuda, mas pode não ser suficiente para manter o hábito.", impact: "Reforçou a busca por recompensas mais conectadas ao esforço." },
          { name: "Alura", obs: "Comunidade e fórum como apoio ao aprendizado.", learn: "A dúvida precisa ser acolhida sem quebrar o fluxo de estudo.", impact: "Inspirou suporte e anotações no contexto do player." },
        ],
      },
      interviews: {
        methodLabel: "Método 03",
        title: "Entrevistas em Profundidade",
        desc: "Investigação qualitativa individual com 8 estudantes ativos de plataformas online.",
        body: "As entrevistas ajudaram a diferenciar o que parecia falta de motivação do que, na prática, era falta de estrutura, feedback e continuidade no processo de aprendizado.",
        quotes: [
          { text: "\"Estudar online dá sensação de solidão. Se eu travo em um exercício, costumo abandonar a aula para não acumular frustração.\"", meta: "Participante 03 · 22 anos" },
          { text: "\"Gostaria de ganhar algo real pelos meus pontos. Acumular medalhas virtuais no app não muda nada na minha vida.\"", meta: "Participante 06 · 28 anos" },
        ],
      },
      transitionToPersonas: "Esses achados se cristalizaram em dois perfis comportamentais recorrentes — apresentados a seguir como as personas do case.",
    },
    validation: {
      eyebrow: "Métricas de Usabilidade",
      title: "Validação e Testes com Usuários",
      description: "Conduzimos testes monitorados com 5 participantes que já tinham familiaridade com cursos online na área de UX/UI. O objetivo foi observar a compreensão dos fluxos principais, identificar pontos de atrito e avaliar se a navegação sustentava a proposta do produto.",
      keyLearningsLabel: "Principais aprendizados:",
      keyLearnings: "os fluxos de plano de estudos, aula, briefing e loja foram compreendidos com facilidade. As maiores dúvidas apareceram nas ações de comunidade e, principalmente, no resgate de pontos das conquistas. A análise mostrou que parte do atrito estava na formulação da tarefa, não apenas na interface, reforçando a importância de validar também a linguagem usada nos testes.",
      tasks: [
        { label: "Tarefa 01", titulo: "Alterar plano de estudos", resultado: "100% de sucesso", cor: "text-green-600 dark:text-green-400", texto: "Fluxo compreendido pelos participantes, sem bloqueios relevantes durante a tarefa." },
        { label: "Tarefa 02", titulo: "Assistir uma aula", resultado: "100% de sucesso", cor: "text-green-600 dark:text-green-400", texto: "A entrada na aula e a continuidade do estudo foram compreendidas com facilidade." },
        { label: "Tarefa 03", titulo: "Visualizar briefing do case", resultado: "100% de sucesso", cor: "text-green-600 dark:text-green-400", texto: "Os participantes localizaram o briefing e entenderam sua relação com a jornada de estudos." },
        { label: "Tarefa 04", titulo: "Realizar compra na loja", resultado: "100% de sucesso", cor: "text-green-600 dark:text-green-400", texto: "A lógica de compra/resgate na loja foi concluída sem bloqueios críticos." },
        { label: "Tarefa 05", titulo: "Fazer publicação na comunidade", resultado: "Sucesso com atritos", cor: "text-amber-600 dark:text-amber-400", texto: "Parte dos participantes precisou de mais orientação para concluir a ação, indicando oportunidade de melhorar rótulos e hierarquia do fluxo." },
        { label: "Tarefa 06", titulo: "Resgatar pontos das conquistas", resultado: "Maior ponto de atenção", cor: "text-red-600 dark:text-red-400", texto: "Foi a tarefa com mais dificuldade. Na análise posterior, identificamos que a própria formulação da tarefa influenciou o desempenho, tornando a intenção menos clara para os participantes." },
      ],
    },
    metrics: {
      eyebrow: "Métricas de Sucesso",
      title: "Métricas de Sucesso Propostas",
      description: "Para avaliar a efetividade da solução, as métricas foram pensadas a partir de dois eixos: impacto educacional e sustentabilidade institucional. A intenção não é medir apenas uso, mas entender se o produto ajuda estudantes a manter constância, avançar no curso e gerar sinais úteis para melhoria contínua da experiência.",
      axis1Label: "Eixo 01 · Impacto Educacional",
      axis1Items: [
        { title: "Continuidade de estudo", desc: "Frequência semanal, retorno ao app, sequência de dias estudando e retomada após pausas." },
        { title: "Progressão no curso", desc: "Aulas concluídas, módulos avançados, cases iniciados e concluídos, percentual da jornada." },
        { title: "Engajamento com gamificação e comunidade", desc: "Conquistas desbloqueadas, pontos acumulados e resgatados, publicações e interações em desafios." },
        { title: "Uso do suporte com IA", desc: "Dúvidas enviadas ao assistente, temas mais recorrentes e encaminhamentos para monitoria." },
      ],
      axis2Label: "Eixo 02 · Sustentabilidade Institucional",
      axis2Items: [
        { title: "Retenção e evasão", desc: "Alunos ativos ao longo do tempo, queda de frequência e sinais de risco de abandono por turma ou etapa." },
        { title: "Reengajamento", desc: "Retomada após pausa, resposta a lembretes e conclusão de módulos incompletos." },
        { title: "Percepção de valor do curso", desc: "Satisfação com a jornada, sensação de progresso e intenção de continuar ou recomendar." },
        { title: "Eficiência para melhoria do curso", desc: "Dúvidas coletadas pela IA, padrões de dificuldade por módulo e insumos para professores e monitores." },
      ],
      footnote: "Essas métricas seriam observadas a partir de eventos de uso, histórico de dúvidas no suporte com IA, acompanhamento da monitoria e análise de comportamento ao longo da jornada do estudante.",
    },
    implementation: {
      eyebrow: "Implementação e Handoff Vivo",
      title: "Do Figma ao Produto Navegável",
      description: "Depois da validação, o projeto não ficou restrito a telas estáticas ou a um handoff tradicional. A solução foi levada para uma versão navegável em ambiente web, aproximando o protótipo de um produto real e permitindo testar fluxos, tema, componentes e narrativa com mais fidelidade.",
      cards: [
        { title: "Protótipo além do Figma", desc: "As telas deixaram de ser apenas uma representação visual e passaram a funcionar em uma experiência navegável, com interações, estados e tema claro/escuro." },
        { title: "Design com viabilidade técnica", desc: "A implementação ajudou a validar decisões de layout, responsividade, componentes e comportamento antes de um handoff definitivo para desenvolvimento." },
        { title: "Deploy como parte da entrega", desc: "A publicação em ambiente web tornou o case mais fácil de apresentar, testar e compartilhar, aproximando a entrega de uma experiência real de produto." },
      ],
      stack: ["React", "Vite", "Tailwind CSS", "Vercel", "Claude Code", "Antigravity", "ChatGPT", "Gemini"],
    },
    scope: {
      eyebrow: "Maturidade e Execução",
      title: "Ficha de Entrega do Projeto",
      fields: [
        { label: "Tipo de Produto", value: "Mobile Application (iOS/Android)" },
        { label: "Área do Case", value: "EdTech / Ensino a Distância" },
        { label: "Duração", value: "Aproximadamente 8 meses (UX Research a Validação)" },
        { label: "Entrega Técnica", value: "Protótipo navegável + Validação de testes" },
      ],
      authorshipLabel: "Autoria e Execução",
      competenciesTitle: "Atuação e Competências de Design",
      competenciesDesc: "Nossa atuação foi do entendimento qualitativo à arquitetura técnica, organizando o trabalho nas seguintes competências estratégicas.",
      competencies: ["UX Research", "UX Strategy", "UX Writing", "UI Design", "Prototipação", "IA aplicada ao Design"],
    },
    learnings: {
      eyebrow: "Reflexão Profissional",
      title: "Maturidade do Processo",
      description: "Em vez de encerrar o projeto em um handoff estático, usamos as ferramentas que dominávamos para aproximar a solução de um produto viável, navegável e mais fácil de comunicar para o time de desenvolvimento.",
      cards: [
        { tag: "Amostragem", title: "Expansão de Pesquisa", desc: "Mais rodadas de entrevistas com estudantes de outras áreas fora de UX fortaleceria a validação comportamental." },
        { tag: "UX Writing", title: "Refinamento de Microcopy", desc: "Refinar as notificações push e mensagens de streaks ativos para calibrar a taxa ideal de conversão de abertura do app." },
        { tag: "Customização", title: "Loja de Recompensas", desc: "Integrar novos tipos de prêmios regionais e parcerias estudantis para personalizar o catálogo conforme o curso." },
        { tag: "Handoff", title: "IA e Código Real", desc: "Aproximar o Design System do desenvolvimento real, implementando tokens CSS válidos para acelerar a engenharia." },
      ],
    },
    value: {
      eyebrow: "Visão Comercial",
      title: "Valor Estratégico para a Instituição",
      description: "Mais do que uma experiência agradável ao aluno, a solução foi desenhada para impactar as métricas institucionais e operacionais de instituições de ensino.",
      metrics: [
        { title: "01. Retenção de Alunos", desc: "A quebra sistemática das barreiras de desânimo por meio de metas flexíveis diminui drasticamente a taxa de evasão e trancamento de matrículas.", tag: "Indicador a validar em nova rodada" },
        { title: "02. Engajamento Diário", desc: "As mecânicas de consistência (streaks) aumentam a recorrência de acessos e a minutagem ativa semanal de estudos no aplicativo.", tag: "Métrica sugerida para acompanhamento" },
        { title: "03. Conclusão de Módulos", desc: "Videoaulas fracionadas e notas contextuais elevam o índice de término de disciplinas, aumentando o sucesso acadêmico geral.", tag: "Hipótese de impacto" },
        { title: "04. Percepção de Evolução", desc: "Os prêmios na loja tangibilizam o esforço diário do aluno em benefícios de carreira, gerando maior percepção do custo-benefício da faculdade.", tag: "Ponto de acompanhamento institucional" },
        { title: "05. Recomendação do Curso", desc: "Um aplicativo dinâmico e gamificado estimula recomendações espontâneas de alunos ativos em suas redes sociais e locais de trabalho.", tag: "Indicador a validar em nova rodada" },
        { title: "06. Comunidade Ativa", desc: "O ecossistema cooperativo estimula que alunos tirem dúvidas entre si, aliviando o fluxo de chamados operacionais e suporte pedagógico.", tag: "Métrica sugerida para acompanhamento" },
      ],
    },
    prototypeSection: {
      badge: "Navegação Funcional",
      title: "Experimente a Jornada Completa do App",
      description: "Depois de entender o problema, a pesquisa e as decisões por trás da solução, explore o protótipo completo e veja como as funcionalidades se conectam em uma jornada única.",
      ctaOpen: "Abrir protótipo navegável",
      ctaBack: "Voltar à Solução",
    },
    closing: {
      quote: "\"UNIEDU propõe uma experiência de aprendizagem mais clara, motivadora e acompanhável, conectando progresso, recompensa, suporte, comunidade e estratégia de produto.\"",
      credit: "UX/UI Case Study",
    },
    footer: {
      line1Prefix: "Case documental desenvolvido por",
      line1Middle: "e",
      line1Program: "como projeto de formação no programa",
      line1ConductedBy: "conduzido por",
      line2: "Pesquisa, estratégia de produto, UX/UI e prototipação aplicadas a uma experiência educacional digital.",
      linkedinLabel: "LinkedIn:",
    },
  },
  en: {
    header: {
      badge: "Case Study",
      tagline: "UX/UI · Product Strategy · EdTech",
      nav: [
        { href: "#solucao-rapida", label: "Overview" },
        { href: "#pesquisa", label: "Research" },
        { href: "#jornada", label: "Journey" },
        { href: "#produto", label: "Product" },
        { href: "#validacao", label: "Validation" },
        { href: "#design-system", label: "Design System" },
        { href: "#implementacao", label: "Implementation" },
        { href: "#aprendizados", label: "Learnings" },
      ],
      navAriaLabel: "Main navigation",
      sectionsLabel: "Sections",
      sectionsMenuTitle: "Case chapters",
      railAriaLabel: "Case chapter index",
      railTopLabel: "Top",
      backToTopLabel: "Back to top",
      themeToggleLabel: "Toggle Theme",
      langToggleLabel: "Select language",
      ctaPrototype: "View Prototype",
      ctaPrototypeShort: "Prototype",
    },
    hero: {
      authorsLabel: "Authors:",
      titleAriaLabel: "Gamifying learning to turn consistency into real progress",
      titleLines: {
        desktop: ["Gamifying learning to turn", "consistency", "into real progress"],
        mobile: ["Gamifying learning", "to turn", "consistency", "into real|progress"],
      },
      chips: ["Research", "Product Strategy", "UX/UI Design", "Prototyping", "Validation", "Implementation"],
      toolsLine: "Figma · FigJam · Notion · Google Workspace · ChatGPT · Gemini · Claude · OBS Studio",
      ctaSolution: "See the proposed solution",
      ctaPrototype: "Try the prototype",
    },
    quickSolution: {
      eyebrow: "Overview",
      title: "The Solution in a Few Seconds",
      description: "Before diving into the process, see what the solution proposes: a learning experience that combines visible progress, a study plan, rewards, community and support in the same ecosystem.",
      highlights: [
        { title: "Visible progress from the home screen", desc: "Students quickly understand what they've already advanced and what's still left to do." },
        { title: "Adjustable study plan", desc: "The study routine can be adapted to each person's available time." },
        { title: "Rewards with perceived value", desc: "Progress stops being just a visual badge and starts generating a more concrete sense of reward." },
        { title: "Smart support while studying", desc: "Students can ask for help without leaving the context of the lesson." },
      ],
      ctaFull: "Try the full prototype",
    },
    challenge: {
      eyebrow: "Product Context",
      title: "The Real Challenge: More Than a Visual Design",
      description: "UNIEDU wasn't conceived as an isolated visual redesign. The proposal emerged from analyzing common difficulties in distance learning, such as loss of rhythm, low perception of progress, isolation and rewards with little meaning.",
      frictions: [
        { tag: "Friction 01", title: "Loss of weekly rhythm", desc: "When the routine breaks, many students struggle to get back into studying. Rigid, inflexible goals increase the feeling of falling behind." },
        { tag: "Friction 02", title: "Low perception of progress", desc: "In short study sessions, progress can feel invisible. This reduces the sense of advancement and weakens motivation to continue." },
        { tag: "Friction 03", title: "Feeling of isolation", desc: "In online learning, the lack of interaction and support at the right moment can make students get stuck, delay questions or abandon the activity." },
        { tag: "Friction 04", title: "Rewards with no perceived value", desc: "Points and badges help at first, but lose their power when not connected to clear benefits or the student's real goal." },
      ],
      sourcesLabel: "Supporting research:",
      hmwBadge: "Opportunity Question (How Might We)",
      hmwQuestion: "\"How might we create a learning experience that rewards students' real effort and turns consistency into habit?\"",
    },
    process: {
      eyebrow: "How we ran the process",
      description: "The process was guided by the Double Diamond logic, alternating investigation, synthesis, exploration and refinement until reaching the final high-fidelity version.",
      steps: [
        { title: "Discover", desc: "Survey, interviews and context analysis of pain points in online courses." },
        { title: "Define", desc: "Synthesis of findings into personas, journeys and product opportunities." },
        { title: "Develop", desc: "Wireframes, flow exploration and the first high-fidelity version." },
        { title: "Deliver and refine", desc: "Usability testing, interface adjustments and the consolidated final version." },
      ],
    },
    research: {
      eyebrow: "Discovery Phase",
      title: "Research and Behavioral Evidence",
      description: "Design decisions grounded in qualitative data, analytical benchmarking and genuine listening to students' pain points.",
      deskResearch: {
        methodLabel: "Method 01",
        title: "Desk Research",
        desc: "Analysis of EdTech market reports and behavioral research on distance learning.",
        body: "Supporting research indicated that dropout in online courses tends to relate to a combination of factors, such as motivation, satisfaction, support, study load, feelings of isolation and difficulty maintaining a consistent routine.",
        keyIndicatorLabel: "Key indicator:",
        keyIndicator: "factors such as motivation, support, routine, social presence and study load show up recurrently in research on retention and dropout in online learning.",
        source: "Supporting source: Shaikh & Asif, 2022; Rahmani et al., 2024.",
      },
      benchmark: {
        methodLabel: "Method 02",
        title: "Qualitative Benchmark",
        desc: "Mapping of gamification references and data-consumption habits in established apps.",
        obsLabel: "Observation:",
        learnLabel: "Learning:",
        impactLabel: "How it shaped the product:",
        items: [
          { name: "Duolingo", obs: "Visual streaks and continuity reminders.", learn: "Recurrence becomes clearer when progress is visible day to day.", impact: "Inspired the visualization of active days and focus goals." },
          { name: "SoloLearn", obs: "Short content and practical exercises.", learn: "Smaller sessions lower the barrier to picking back up.", impact: "Helped shape the idea of micro-lessons and incremental progress." },
          { name: "Kahoot", obs: "Competitive dynamics and instant feedback.", learn: "Competition can engage, but it can also pressure more reserved profiles.", impact: "Reinforced the decision to make rankings optional." },
          { name: "Udemy", obs: "Progress bars and per-course completion.", learn: "Linear progress helps, but may not be enough to sustain the habit.", impact: "Reinforced the search for rewards more connected to effort." },
          { name: "Alura", obs: "Community and forum as learning support.", learn: "Doubts need to be welcomed without breaking the study flow.", impact: "Inspired support and notes within the player's context." },
        ],
      },
      interviews: {
        methodLabel: "Method 03",
        title: "In-Depth Interviews",
        desc: "Individual qualitative research with 8 active students from online platforms.",
        body: "The interviews helped distinguish what looked like a lack of motivation from what was, in practice, a lack of structure, feedback and continuity in the learning process.",
        quotes: [
          { text: "\"Studying online feels lonely. If I get stuck on an exercise, I usually drop the lesson to avoid building up frustration.\"", meta: "Participant 03 · 22 years old" },
          { text: "\"I'd like to get something real for my points. Collecting virtual badges in the app doesn't change anything in my life.\"", meta: "Participant 06 · 28 years old" },
        ],
      },
      transitionToPersonas: "These findings crystallized into two recurring behavioral profiles — presented next as the case's personas.",
    },
    validation: {
      eyebrow: "Usability Metrics",
      title: "Validation and User Testing",
      description: "We ran moderated tests with 5 participants who already had some familiarity with online courses in the UX/UI field. The goal was to observe how well the main flows were understood, identify friction points and assess whether the navigation supported the product's proposal.",
      keyLearningsLabel: "Key takeaways:",
      keyLearnings: "the study plan, lesson, briefing and store flows were understood with ease. The biggest doubts appeared in community actions and, especially, in redeeming points from achievements. The analysis showed that part of the friction came from how the task was worded, not just the interface, reinforcing the importance of also validating the language used in the tests.",
      tasks: [
        { label: "Task 01", titulo: "Change study plan", resultado: "100% success", cor: "text-green-600 dark:text-green-400", texto: "Flow understood by participants, with no relevant blockers during the task." },
        { label: "Task 02", titulo: "Watch a lesson", resultado: "100% success", cor: "text-green-600 dark:text-green-400", texto: "Entering the lesson and continuing the study session were understood with ease." },
        { label: "Task 03", titulo: "View the case briefing", resultado: "100% success", cor: "text-green-600 dark:text-green-400", texto: "Participants located the briefing and understood its relation to the study journey." },
        { label: "Task 04", titulo: "Make a purchase in the store", resultado: "100% success", cor: "text-green-600 dark:text-green-400", texto: "The purchase/redemption logic in the store was completed with no critical blockers." },
        { label: "Task 05", titulo: "Make a post in the community", resultado: "Success with friction", cor: "text-amber-600 dark:text-amber-400", texto: "Some participants needed extra guidance to complete the action, pointing to an opportunity to improve labels and flow hierarchy." },
        { label: "Task 06", titulo: "Redeem achievement points", resultado: "Biggest pain point", cor: "text-red-600 dark:text-red-400", texto: "This was the most difficult task. In our later analysis, we found that the task's own wording influenced performance, making the intent less clear to participants." },
      ],
    },
    metrics: {
      eyebrow: "Success Metrics",
      title: "Proposed Success Metrics",
      description: "To evaluate the solution's effectiveness, metrics were designed around two axes: educational impact and institutional sustainability. The intent isn't just to measure usage, but to understand whether the product helps students stay consistent, advance through the course and generate useful signals for continuously improving the experience.",
      axis1Label: "Axis 01 · Educational Impact",
      axis1Items: [
        { title: "Study continuity", desc: "Weekly frequency, return to the app, consecutive study days and resumption after pauses." },
        { title: "Course progression", desc: "Lessons completed, modules advanced, cases started and finished, percentage of the journey." },
        { title: "Engagement with gamification and community", desc: "Achievements unlocked, points earned and redeemed, posts and interactions in challenges." },
        { title: "Use of AI support", desc: "Questions sent to the assistant, most recurring topics and escalations to tutoring." },
      ],
      axis2Label: "Axis 02 · Institutional Sustainability",
      axis2Items: [
        { title: "Retention and dropout", desc: "Active students over time, drop in frequency and risk signals of abandonment by cohort or stage." },
        { title: "Re-engagement", desc: "Resumption after a pause, response to reminders and completion of unfinished modules." },
        { title: "Perceived course value", desc: "Satisfaction with the journey, sense of progress and intent to continue or recommend." },
        { title: "Efficiency for course improvement", desc: "Questions collected by the AI, difficulty patterns by module and inputs for instructors and tutors." },
      ],
      footnote: "These metrics would be observed through usage events, AI support question history, tutoring follow-up and behavior analysis throughout the student journey.",
    },
    implementation: {
      eyebrow: "Implementation and Living Handoff",
      title: "From Figma to a Navigable Product",
      description: "After validation, the project wasn't limited to static screens or a traditional handoff. The solution was brought into a navigable web version, bringing the prototype closer to a real product and allowing flows, theme, components and narrative to be tested with more fidelity.",
      cards: [
        { title: "Prototype beyond Figma", desc: "The screens stopped being just a visual representation and started working as a navigable experience, with interactions, states and light/dark theme." },
        { title: "Design with technical feasibility", desc: "Implementation helped validate layout, responsiveness, component and behavior decisions before a definitive handoff to development." },
        { title: "Deploy as part of the deliverable", desc: "Publishing to a web environment made the case easier to present, test and share, bringing the deliverable closer to a real product experience." },
      ],
      stack: ["React", "Vite", "Tailwind CSS", "Vercel", "Claude Code", "Antigravity", "ChatGPT", "Gemini"],
    },
    scope: {
      eyebrow: "Maturity and Execution",
      title: "Project Delivery Sheet",
      fields: [
        { label: "Product Type", value: "Mobile Application (iOS/Android)" },
        { label: "Case Area", value: "EdTech / Distance Learning" },
        { label: "Duration", value: "Approximately 8 months (UX Research to Validation)" },
        { label: "Technical Delivery", value: "Navigable prototype + Test validation" },
      ],
      authorshipLabel: "Authorship and Execution",
      competenciesTitle: "Design Scope and Competencies",
      competenciesDesc: "Our work spanned from qualitative understanding to technical architecture, organizing the effort across the following strategic competencies.",
      competencies: ["UX Research", "UX Strategy", "UX Writing", "UI Design", "Prototyping", "AI Applied to Design"],
    },
    learnings: {
      eyebrow: "Professional Reflection",
      title: "Process Maturity",
      description: "Instead of ending the project with a static handoff, we used the tools we mastered to bring the solution closer to a viable, navigable product that's easier to communicate to the development team.",
      cards: [
        { tag: "Sampling", title: "Research Expansion", desc: "More rounds of interviews with students from areas outside of UX would strengthen behavioral validation." },
        { tag: "UX Writing", title: "Microcopy Refinement", desc: "Refine push notifications and active-streak messages to calibrate the ideal app-opening conversion rate." },
        { tag: "Customization", title: "Rewards Store", desc: "Integrate new types of regional prizes and student partnerships to personalize the catalog by course." },
        { tag: "Handoff", title: "AI and Real Code", desc: "Bring the Design System closer to real development by implementing valid CSS tokens to speed up engineering." },
      ],
    },
    value: {
      eyebrow: "Business Vision",
      title: "Strategic Value for the Institution",
      description: "Beyond a pleasant experience for the student, the solution was designed to impact the institutional and operational metrics of educational institutions.",
      metrics: [
        { title: "01. Student Retention", desc: "Systematically breaking down discouragement barriers through flexible goals drastically reduces dropout and enrollment-lock rates.", tag: "Indicator to validate in a new round" },
        { title: "02. Daily Engagement", desc: "Consistency mechanics (streaks) increase the recurrence of access and weekly active study minutes in the app.", tag: "Suggested metric to track" },
        { title: "03. Module Completion", desc: "Bite-sized video lessons and contextual notes raise course-completion rates, increasing overall academic success.", tag: "Impact hypothesis" },
        { title: "04. Perceived Progress", desc: "Store rewards make the student's daily effort tangible in career benefits, increasing the perceived cost-benefit of the program.", tag: "Institutional tracking point" },
        { title: "05. Course Recommendation", desc: "A dynamic, gamified app encourages spontaneous recommendations from active students on social networks and at work.", tag: "Indicator to validate in a new round" },
        { title: "06. Active Community", desc: "The cooperative ecosystem encourages students to help each other, easing the load on operational tickets and pedagogical support.", tag: "Suggested metric to track" },
      ],
    },
    prototypeSection: {
      badge: "Functional Navigation",
      title: "Experience the App's Full Journey",
      description: "After understanding the problem, the research and the decisions behind the solution, explore the full prototype and see how the features connect into a single journey.",
      ctaOpen: "Open navigable prototype",
      ctaBack: "Back to the Solution",
    },
    closing: {
      quote: "\"UNIEDU proposes a clearer, more motivating and trackable learning experience, connecting progress, reward, support, community and product strategy.\"",
      credit: "UX/UI Case Study",
    },
    footer: {
      line1Prefix: "Documentary case developed by",
      line1Middle: "and",
      line1Program: "as a capstone project in the",
      line1ConductedBy: "program, led by",
      line2: "Research, product strategy, UX/UI and prototyping applied to a digital educational experience.",
      linkedinLabel: "LinkedIn:",
    },
  },
};

// ─── PersonaCard ───────────────────────────────────────────────────────────

interface PersonaData {
  perfil: string;
  quote: string;
  rotina: string;
  habitos: string[];
  motivacoes: string[];
  dores: string[];
  desejos: string[];
}

interface PersonaContent {
  eyebrow: string;
  title: string;
  description: string;
  labels: {
    rotina: string;
    motivacoes: string;
    dores: string;
    desejos: string;
    habitos: string;
  };
  photoAlt: string;
  personas: {
    sofia: PersonaData;
    marcos: PersonaData;
  };
  transitionToJourney: string;
}

export const personaContent: Record<Lang, PersonaContent> = {
  pt: {
    eyebrow: "Público-Alvo e Comportamento",
    title: "Personas de Pesquisa",
    description: "Compreender a realidade do usuário final foi a base para desenhar fluxos eficientes de retenção, suporte e progresso.",
    labels: {
      rotina: "Rotina e perfil",
      motivacoes: "Objetivos e motivações",
      dores: "Dores e desafios",
      desejos: "Desejos e necessidades",
      habitos: "Comportamentos e hábitos",
    },
    photoAlt: "Foto da persona",
    personas: {
      sofia: {
        perfil: "Designer Gráfica em transição para UX/UI",
        quote: "“Quero entender o básico de UX/UI sem perder tempo e conciliar com meu trabalho CLT.”",
        rotina: "Sofia trabalha em regime CLT como designer gráfica durante o dia. Seu tempo útil de estudo é à noite ou em pequenos intervalos ao longo da rotina. Busca migrar de carreira sem perder a segurança financeira.",
        habitos: [
          "Alterna turnos de estudo entre trabalho e descanso.",
          "Gosta de estudar com colegas.",
          "Escreve para fixar melhor o conteúdo.",
          "Acelera o vídeo e volta quando tem dúvida.",
        ],
        motivacoes: [
          "Migrar de carreira com estabilidade técnica",
          "Ganhar segurança para entrevistas e desafios reais",
          "Concluir o curso sem acumular pendências mentais",
        ],
        dores: [
          "Falta de ritmo estruturado e quebra de sequência",
          "Vídeos e módulos muito extensos, sem síntese",
          "Isolamento e bloqueios ao tentar realizar exercícios",
          "Dificuldade de mensurar a própria evolução",
        ],
        desejos: [
          "Trilha de estudos incremental e clara",
          "Suporte rápido nos momentos de travamento",
          "Integração social ativa (comunidade cooperativa)",
          "Progresso tangível e recompensas motivadoras",
        ],
      },
      marcos: {
        perfil: "UX Designer",
        quote: "“Quando a aula fica prolixa, eu perco o foco. Gosto de praticidade e otimização.”",
        rotina: "Marcos é UX Designer e quer aprimorar suas habilidades. Tem horários flexíveis e encaixa o curso na rotina.",
        habitos: [
          "Intercala estudo com pausas planejadas.",
          "Estuda online pela praticidade.",
          "Gosta de ver o primeiro passo claro.",
          "Usa Pomodoro e pequenas recompensas.",
          "Organiza agenda e quadro de propósito.",
        ],
        motivacoes: [
          "Melhorar suas habilidades e aplicar o conhecimento.",
          "Buscar promoção e novas oportunidades.",
          "Ampliar networking e experiência prática.",
          "Conseguir certificação.",
        ],
        dores: [
          "Formar grupos em cursos EAD é difícil.",
          "Fica frustrado com conteúdo raso ou prolixo.",
          "A plataforma é chapada e pouco guiada.",
          "Concluir cursos no prazo é um desafio.",
          "Chatbots tornam a experiência fria.",
        ],
        desejos: [
          "Precisa de conteúdo direto e aplicável.",
          "Gosta de comemorações por nível e marco.",
          "Quer saber quanto concluiu e o que falta.",
          "Valoriza espaço de troca e café online.",
        ],
      },
    },
    transitionToJourney: "A partir de Sofia e Marcos, desdobramos cada perfil em uma jornada completa, para localizar onde a rotina se rompe, onde falta apoio e onde existe espaço para uma decisão de produto.",
  },
  en: {
    eyebrow: "Target Audience and Behavior",
    title: "Research Personas",
    description: "Understanding the end user's reality was the foundation for designing efficient flows for retention, support and progress.",
    labels: {
      rotina: "Routine and profile",
      motivacoes: "Goals and motivations",
      dores: "Pain points and challenges",
      desejos: "Wants and needs",
      habitos: "Behaviors and habits",
    },
    photoAlt: "Photo of persona",
    personas: {
      sofia: {
        perfil: "Graphic Designer transitioning into UX/UI",
        quote: "“I want to understand the basics of UX/UI without wasting time, while balancing my full-time job.”",
        rotina: "Sofia works full-time as a graphic designer during the day. Her useful study time is at night or in small breaks throughout her routine. She wants to switch careers without losing financial security.",
        habitos: [
          "Alternates study sessions between work and rest.",
          "Likes studying with peers.",
          "Writes things down to better retain content.",
          "Speeds up videos and rewinds when in doubt.",
        ],
        motivacoes: [
          "Switch careers with technical confidence",
          "Gain confidence for interviews and real challenges",
          "Finish the course without accumulating mental backlog",
        ],
        dores: [
          "Lack of structured rhythm and broken sequence",
          "Videos and modules that are too long, without synthesis",
          "Isolation and getting stuck when trying exercises",
          "Difficulty measuring her own progress",
        ],
        desejos: [
          "Clear, incremental study path",
          "Quick support when stuck",
          "Active social integration (cooperative community)",
          "Tangible progress and motivating rewards",
        ],
      },
      marcos: {
        perfil: "UX Designer",
        quote: "“When a lesson gets long-winded, I lose focus. I like practicality and optimization.”",
        rotina: "Marcos is a UX Designer who wants to sharpen his skills. He has flexible hours and fits the course into his routine.",
        habitos: [
          "Alternates studying with planned breaks.",
          "Studies online for the convenience.",
          "Likes to see a clear first step.",
          "Uses Pomodoro and small rewards.",
          "Organizes his calendar and a purpose board.",
        ],
        motivacoes: [
          "Improve his skills and apply the knowledge.",
          "Pursue promotion and new opportunities.",
          "Expand networking and hands-on experience.",
          "Earn certification.",
        ],
        dores: [
          "Forming groups in online courses is hard.",
          "Gets frustrated with shallow or long-winded content.",
          "The platform feels flat and poorly guided.",
          "Finishing courses on time is a challenge.",
          "Chatbots make the experience feel cold.",
        ],
        desejos: [
          "Needs direct, applicable content.",
          "Likes celebrations for levels and milestones.",
          "Wants to know how much he's completed and what's left.",
          "Values a space for exchange and online coffee chats.",
        ],
      },
    },
    transitionToJourney: "Starting from Sofia and Marcos, we unfolded each profile into a full journey, to pinpoint where the routine breaks down, where support is missing, and where there's room for a product decision.",
  },
};

// ─── JourneyMap ────────────────────────────────────────────────────────────

export interface JourneyStage {
  id: string;
  label: string;
  desc: string;
  contexto: string;
  acoes: string[];
  pensamentos: string[];
  sentimentos: string[];
  dores: string[];
  oportunidades: string[];
}

interface JourneyContent {
  eyebrow: string;
  title: string;
  description: string;
  tabSofia: string;
  tabMarcos: string;
  labels: {
    contexto: string;
    acoes: string;
    sentimentos: string;
    pensamentos: string;
    dores: string;
    oportunidades: string;
  };
  sofiaStages: JourneyStage[];
  marcosStages: JourneyStage[];
  transitionToTensions: string;
}

export const journeyContent: Record<Lang, JourneyContent> = {
  pt: {
    eyebrow: "Entendimento do Comportamento",
    title: "Jornada do Usuário",
    description: "As jornadas sintetizam dois perfis comportamentais identificados na pesquisa. Sofia representa a aluna em transição de carreira que busca clareza, suporte e pertencimento. Marcos representa o aluno familiarizado com estudo online, que busca praticidade, aplicação direta, organização e progresso visível para manter ritmo.",
    tabSofia: "Jornada da Sofia",
    tabMarcos: "Jornada do Marcos",
    labels: {
      contexto: "Contexto Comportamental",
      acoes: "Ações Realizadas",
      sentimentos: "Sentimentos Associados",
      pensamentos: "O que pensa / Citações",
      dores: "Dores / Pontos de Fricção",
      oportunidades: "Oportunidades de Produto",
    },
    sofiaStages: [
      {
        id: "descoberta",
        label: "1. Descoberta",
        desc: "Busca inicial",
        contexto: "Sofia quer migrar para UX/UI. Busca um curso introdutório, direto ao ponto e que seja encaixável em sua rotina.",
        acoes: [
          "Pesquisa no Google e YouTube por conteúdos introdutórios",
          "Assiste a vídeos iniciais explicativos de migração",
          "Conversa com colegas de trabalho que já atuam na área",
        ],
        pensamentos: [
          "Quero entender o básico de UX/UI sem perder tempo.",
          "Preciso encaixar isso na minha rotina.",
        ],
        sentimentos: ["Curiosidade", "Empolgação", "Insegurança", "Medo"],
        dores: [
          "Não sabe por onde começar em meio a tanto conteúdo solto.",
          "Medo de investir em algo prolixo e desorganizado.",
        ],
        oportunidades: [
          "Trilha de aprendizado linear e clara.",
          "Exemplos práticos e objetivos nas primeiras aulas.",
          "Aulas introdutórias gratuitas para avaliação da didática.",
        ],
      },
      {
        id: "consideracao",
        label: "2. Consideração",
        desc: "Análise da Proposta",
        contexto: "Sofia compara os cursos disponíveis buscando conteúdo sólido, acompanhamento próximo e uma comunidade ativa de suporte.",
        acoes: [
          "Lê avaliações de ex-alunos e cases de portfólio",
          "Analisa detalhadamente a ementa, módulos e duração",
          "Verifica a validade do certificado e o suporte de monitores",
        ],
        pensamentos: [
          "Quero algo que me transmita segurança de que vou estar preparada pro mercado de trabalho.",
        ],
        sentimentos: ["Esperança", "Indecisão", "Ansiedade"],
        dores: [
          "Sentimento de que as plataformas tradicionais são muito impessoais.",
          "Vídeos longos e prolixos sem linearidade clara.",
          "Falta de um preview prático de como funciona a plataforma por dentro.",
        ],
        oportunidades: [
          "Exibir a estrutura visual e clara da trilha de estudos.",
          "Destacar o suporte humano constante e canais de tira-dúvidas.",
          "Oferecer um tour ou preview interativo do produto antes da compra.",
        ],
      },
      {
        id: "decisao",
        label: "3. Decisão",
        desc: "O Primeiro Passo",
        contexto: "Sofia escolhe a plataforma que aparenta ser mais direta e com melhor apoio. Ela inicia motivada, mas precisa criar consistência.",
        acoes: [
          "Realiza o login e faz as primeiras configurações",
          "Inicia as primeiras videoaulas introdutórias",
          "Busca os canais de suporte e fóruns de sua turma",
        ],
        pensamentos: [
          "Às vezes não sei por onde começar.",
          "Quero algo direto e com pessoas para trocar dúvidas.",
        ],
        sentimentos: ["Motivação", "Frustração", "Ansiedade"],
        dores: [
          "Sensação imediata de solidão ao iniciar os estudos noturnos.",
          "Dificuldade de manter o ritmo nos primeiros dias sem acompanhamento ativo.",
        ],
        oportunidades: [
          "Onboarding interativo e gamificado de configuração de perfil.",
          "Plano de estudos flexível configurável desde o primeiro acesso.",
          "Ambiente de estudos acolhedor e com ranking desativado por padrão.",
        ],
      },
      {
        id: "adocao",
        label: "4. Adoção",
        desc: "Estudo Habitual",
        contexto: "Ela assiste às aulas e interage com as ferramentas internas. A velocidade e a praticidade são chaves na rotina.",
        acoes: [
          "Utiliza o bloco de notas integrado enquanto assiste",
          "Acelera os vídeos em sessões de cansaço extremo",
          "Posta dúvidas pontuais e responde a colegas no fórum",
        ],
        pensamentos: [
          "Não gosto de competir, quero um ambiente colaborativo.",
          "Gostei da liberdade, mas sinto falta de alguém para trocar ideias.",
        ],
        sentimentos: ["Felicidade", "Solidão", "Frustração"],
        dores: [
          "Frustração severa quando não obtém respostas rápidas em dúvidas.",
          "Falta de espaço integrado para fazer anotações sem pausar o player.",
          "Dificuldade em manter foco caso o conteúdo pareça desatualizado.",
        ],
        oportunidades: [
          "Bloco de notas integrado sincronizado com o tempo do vídeo (timestamps).",
          "Medalhas, conquistas ou incentivos simbólicos por módulo concluído.",
          "Certificado intermediário e badges colecionáveis como reforço positivo.",
        ],
      },
      {
        id: "fidelizacao",
        label: "5. Fidelização",
        desc: "Evolução Tangível",
        contexto: "Finaliza parte da jornada. Sofia sente-se mais confiante para portfólio, mas valoriza imensamente a comunidade e o networking.",
        acoes: [
          "Compartilha conquistas e certificados intermediários no LinkedIn",
          "Participa de eventos ao vivo e mentorias em grupo",
          "Indica a plataforma para colegas interessados em migração",
        ],
        pensamentos: [
          "Gostei do curso, principalmente do apoio dos professores.",
          "Me sinto cada vez mais pronta para entrar no mercado.",
        ],
        sentimentos: ["Satisfação", "Orgulho", "Pertencimento"],
        dores: [
          "Dificuldade para manter o networking ativo após concluir as aulas.",
          "Perda de contato com professores e monitores ao fim do curso.",
        ],
        oportunidades: [
          "Acesso contínuo e vitalício à comunidade e ao chat de alunos.",
          "Convites preferenciais para mentorias avançadas e trilhas corporativas.",
          "Eventos integrando ex-alunos com recrutadores e profissionais ativos.",
        ],
      },
    ],
    marcosStages: [
      {
        id: "descoberta",
        label: "1. Descoberta",
        desc: "Busca inicial",
        contexto: "Marcos é UX Designer e busca aprimorar suas habilidades com um curso prático e otimizado que caiba em sua rotina de trabalho.",
        acoes: [
          "Pesquisa ementas de especialização avançada no Google",
          "Assiste a reviews de didática no YouTube",
          "Analisa a linearidade e objetividade dos temas propostos",
        ],
        pensamentos: [
          "Quero entender o conteúdo avançado de UX/UI sem enrolação ou aulas prolixas.",
          "Gosto de ver primeiro o que será criado para depois criar.",
        ],
        sentimentos: ["Determinação", "Exigência", "Foco"],
        dores: [
          "Perda de foco e desinteresse quando o conteúdo é muito raso ou prolixo.",
          "Dificuldade em identificar se o curso é prático antes da compra.",
        ],
        oportunidades: [
          "Exibir a linearidade da trilha avançada de especialização.",
          "Oferecer uma aula de aplicação prática avançada como preview gratuito.",
        ],
      },
      {
        id: "consideracao",
        label: "2. Consideração",
        desc: "Análise da Proposta",
        contexto: "Marcos compara plataformas de ensino focando em ementas sólidas, acompanhamento humano e canais dinâmicos de interação.",
        acoes: [
          "Lê avaliações de ex-alunos e analisa os prazos dos cursos",
          "Verifica se o suporte de monitores é ativo",
          "Analisa a qualidade e metodologia dos vídeos",
        ],
        pensamentos: [
          "Espero que a plataforma não seja chapada e ofereça um espaço de troca real com outros designers.",
        ],
        sentimentos: ["Expectativa", "Critério", "Ansiedade"],
        dores: [
          "Plataformas de ensino tradicionais que são frias, estáticas e impessoais.",
          "Suporte automatizado ou chatbots que tornam a experiência fria.",
        ],
        oportunidades: [
          "Proporcionar preview da plataforma destacando a comunidade e suporte.",
          "Destacar a existência de canais de troca humana (café online).",
        ],
      },
      {
        id: "decisao",
        label: "3. Decisão",
        desc: "O Primeiro Passo",
        contexto: "Marcos inicia o curso e planeja organizar suas sessões de estudos intercaladas com suas atividades profissionais.",
        acoes: [
          "Realiza o login e configura seu perfil na plataforma",
          "Usa sua agenda pessoal para planejar as metas de estudo",
          "Estrutura o cronograma integrando sessões de foco com a técnica Pomodoro",
        ],
        pensamentos: [
          "Vou organizar meus estudos na agenda para manter a constância.",
          "Quero começar aplicando o conhecimento em desafios reais o quanto antes.",
        ],
        sentimentos: ["Motivação", "Organização", "Confiança"],
        dores: [
          "Dificuldade de sincronizar e terminar as entregas dentro do prazo.",
          "Falta de suporte imediato para dúvidas metodológicas iniciais.",
        ],
        oportunidades: [
          "Onboarding inicial adaptável que ajude a organizar cronogramas flexíveis.",
          "Disponibilizar resumos práticos e objetivos dos desafios logo no primeiro acesso.",
        ],
      },
      {
        id: "adocao",
        label: "4. Adoção",
        desc: "Estudo Habitual",
        contexto: "Estuda ativamente, priorizando conteúdos diretos e valorizando feedbacks de progresso constantes.",
        acoes: [
          "Utiliza Pomodoro e intercala o estudo com momentos de pausa",
          "Acelera as aulas em vídeos prolixos para otimizar o tempo",
          "Usa seu quadro de propósito pessoal para manter-se focado",
        ],
        pensamentos: [
          "Quando o conteúdo das aulas fica muito prolixo eu perco foco, gosto de mais praticidade e otimização.",
          "Quero saber exatamente a minha porcentagem concluída e o que falta.",
        ],
        sentimentos: ["Produtividade", "Foco", "Urgência"],
        dores: [
          "Assuntos excessivamente prolixos deixam a pessoa entediada rapidamente.",
          "Plataforma muito chapada que não celebra marcos de evolução de curto prazo.",
        ],
        oportunidades: [
          "Painel com barra de progresso em porcentagens claras por módulo.",
          "Comemorações visuais ao atingir níveis/marcos e avatares customizados.",
        ],
      },
      {
        id: "fidelizacao",
        label: "5. Fidelização",
        desc: "Evolução Tangível",
        contexto: "Marcos finaliza partes do curso, buscando aplicar os aprendizados no mercado e fazer networking de valor.",
        acoes: [
          "Participa ativamente dos cafés online e espaços de troca de ideias",
          "Compartilha seu progresso e certificado em suas redes",
          "Busca novas indicações e parcerias profissionais na plataforma",
        ],
        pensamentos: [
          "Gostei do curso, principalmente do apoio prático e das trocas.",
          "Conseguir aplicar o conhecimento no meu dia a dia é o meu maior objetivo.",
        ],
        sentimentos: ["Realização", "Orgulho", "Conexão"],
        dores: [
          "Dificuldade extrema de formar grupos no EAD e sincronizar agendas de trabalho.",
          "Perda de contato com a rede profissional de alunos/monitores após o curso.",
        ],
        oportunidades: [
          "Espaço contínuo de café online dinâmico focado em facilitar grupos e networking.",
          "Eventos de conexão entre ex-alunos formados e recrutadores.",
        ],
      },
    ],
    transitionToTensions: "As rupturas e oportunidades mapeadas em cada etapa nem sempre apontam na mesma direção entre os dois perfis — essas divergências viram as tensões de pesquisa a seguir.",
  },
  en: {
    eyebrow: "Understanding Behavior",
    title: "User Journey",
    description: "The journeys synthesize two behavioral profiles identified in the research. Sofia represents the student in career transition who seeks clarity, support and belonging. Marcos represents the student already familiar with online study, who seeks practicality, direct application, organization and visible progress to keep up the pace.",
    tabSofia: "Sofia's Journey",
    tabMarcos: "Marcos's Journey",
    labels: {
      contexto: "Behavioral Context",
      acoes: "Actions Taken",
      sentimentos: "Associated Feelings",
      pensamentos: "Thoughts / Quotes",
      dores: "Pain Points / Friction",
      oportunidades: "Product Opportunities",
    },
    sofiaStages: [
      {
        id: "descoberta",
        label: "1. Discovery",
        desc: "Initial search",
        contexto: "Sofia wants to move into UX/UI. She's looking for an introductory course that's direct and fits into her routine.",
        acoes: [
          "Searches Google and YouTube for introductory content",
          "Watches initial explainer videos about career switching",
          "Talks to coworkers who already work in the field",
        ],
        pensamentos: [
          "I want to understand the basics of UX/UI without wasting time.",
          "I need to fit this into my routine.",
        ],
        sentimentos: ["Curiosity", "Excitement", "Insecurity", "Fear"],
        dores: [
          "Doesn't know where to start amid so much scattered content.",
          "Fear of investing in something long-winded and disorganized.",
        ],
        oportunidades: [
          "Clear, linear learning path.",
          "Practical, objective examples in the first lessons.",
          "Free introductory lessons to evaluate teaching quality.",
        ],
      },
      {
        id: "consideracao",
        label: "2. Consideration",
        desc: "Evaluating the Offer",
        contexto: "Sofia compares the available courses looking for solid content, close support and an active support community.",
        acoes: [
          "Reads reviews from former students and portfolio cases",
          "Carefully analyzes the syllabus, modules and duration",
          "Checks certificate validity and tutor support",
        ],
        pensamentos: [
          "I want something that gives me confidence I'll be ready for the job market.",
        ],
        sentimentos: ["Hope", "Indecision", "Anxiety"],
        dores: [
          "Feeling that traditional platforms are too impersonal.",
          "Long, long-winded videos with no clear linearity.",
          "No hands-on preview of how the platform actually works.",
        ],
        oportunidades: [
          "Show the clear, visual structure of the study path.",
          "Highlight constant human support and Q&A channels.",
          "Offer an interactive tour or preview of the product before purchase.",
        ],
      },
      {
        id: "decisao",
        label: "3. Decision",
        desc: "The First Step",
        contexto: "Sofia chooses the platform that seems most direct and best supported. She starts out motivated, but needs to build consistency.",
        acoes: [
          "Logs in and goes through initial setup",
          "Starts the first introductory video lessons",
          "Looks for support channels and her cohort's forums",
        ],
        pensamentos: [
          "Sometimes I don't know where to start.",
          "I want something direct, with people to exchange questions with.",
        ],
        sentimentos: ["Motivation", "Frustration", "Anxiety"],
        dores: [
          "Immediate feeling of loneliness when starting night study sessions.",
          "Difficulty keeping the pace in the first few days without active follow-up.",
        ],
        oportunidades: [
          "Interactive, gamified onboarding for profile setup.",
          "Flexible study plan configurable from the very first access.",
          "Welcoming study environment with ranking off by default.",
        ],
      },
      {
        id: "adocao",
        label: "4. Adoption",
        desc: "Habitual Study",
        contexto: "She watches lessons and interacts with the internal tools. Speed and practicality are key to her routine.",
        acoes: [
          "Uses the integrated notepad while watching",
          "Speeds up videos during sessions of extreme tiredness",
          "Posts specific questions and replies to peers in the forum",
        ],
        pensamentos: [
          "I don't like competing, I want a collaborative environment.",
          "I liked the freedom, but I miss having someone to exchange ideas with.",
        ],
        sentimentos: ["Happiness", "Loneliness", "Frustration"],
        dores: [
          "Severe frustration when she doesn't get quick answers to questions.",
          "No integrated space to take notes without pausing the player.",
          "Difficulty staying focused if the content feels outdated.",
        ],
        oportunidades: [
          "Integrated notepad synced with video timestamps.",
          "Badges, achievements or symbolic incentives per completed module.",
          "Intermediate certificate and collectible badges as positive reinforcement.",
        ],
      },
      {
        id: "fidelizacao",
        label: "5. Retention",
        desc: "Tangible Growth",
        contexto: "She finishes part of the journey. Sofia feels more confident about her portfolio, but values the community and networking immensely.",
        acoes: [
          "Shares achievements and intermediate certificates on LinkedIn",
          "Joins live events and group mentoring sessions",
          "Refers the platform to coworkers interested in switching careers",
        ],
        pensamentos: [
          "I liked the course, especially the teachers' support.",
          "I feel more and more ready to enter the job market.",
        ],
        sentimentos: ["Satisfaction", "Pride", "Belonging"],
        dores: [
          "Difficulty keeping the network active after finishing the lessons.",
          "Losing touch with teachers and tutors once the course ends.",
        ],
        oportunidades: [
          "Continuous, lifetime access to the community and student chat.",
          "Preferential invitations to advanced mentoring and corporate tracks.",
          "Events connecting alumni with recruiters and active professionals.",
        ],
      },
    ],
    marcosStages: [
      {
        id: "descoberta",
        label: "1. Discovery",
        desc: "Initial search",
        contexto: "Marcos is a UX Designer looking to sharpen his skills with a practical, optimized course that fits his work routine.",
        acoes: [
          "Researches advanced specialization syllabi on Google",
          "Watches teaching-quality reviews on YouTube",
          "Analyzes how linear and objective the proposed topics are",
        ],
        pensamentos: [
          "I want to understand advanced UX/UI content without filler or long-winded lessons.",
          "I like seeing what will be built first, then building it.",
        ],
        sentimentos: ["Determination", "High standards", "Focus"],
        dores: [
          "Loses focus and interest when content is too shallow or long-winded.",
          "Hard to tell if a course is practical before buying it.",
        ],
        oportunidades: [
          "Show the linearity of the advanced specialization path.",
          "Offer an advanced, hands-on lesson as a free preview.",
        ],
      },
      {
        id: "consideracao",
        label: "2. Consideration",
        desc: "Evaluating the Offer",
        contexto: "Marcos compares learning platforms, focusing on solid syllabi, human follow-up and dynamic interaction channels.",
        acoes: [
          "Reads reviews from former students and checks course timelines",
          "Checks whether tutor support is active",
          "Analyzes the quality and methodology of the videos",
        ],
        pensamentos: [
          "I hope the platform isn't flat and offers a real space to exchange ideas with other designers.",
        ],
        sentimentos: ["Expectation", "High standards", "Anxiety"],
        dores: [
          "Traditional learning platforms that feel cold, static and impersonal.",
          "Automated support or chatbots that make the experience feel cold.",
        ],
        oportunidades: [
          "Provide a platform preview highlighting community and support.",
          "Highlight the existence of human exchange channels (online coffee chats).",
        ],
      },
      {
        id: "decisao",
        label: "3. Decision",
        desc: "The First Step",
        contexto: "Marcos starts the course and plans to organize his study sessions alongside his professional activities.",
        acoes: [
          "Logs in and sets up his profile on the platform",
          "Uses his personal calendar to plan study goals",
          "Structures a schedule combining focus sessions with the Pomodoro technique",
        ],
        pensamentos: [
          "I'll organize my studies in my calendar to stay consistent.",
          "I want to start applying the knowledge to real challenges as soon as possible.",
        ],
        sentimentos: ["Motivation", "Organization", "Confidence"],
        dores: [
          "Difficulty syncing and finishing deliverables on time.",
          "No immediate support for initial methodology questions.",
        ],
        oportunidades: [
          "Adaptable initial onboarding that helps organize flexible schedules.",
          "Provide practical, objective challenge summaries right from the first access.",
        ],
      },
      {
        id: "adocao",
        label: "4. Adoption",
        desc: "Habitual Study",
        contexto: "He studies actively, prioritizing direct content and valuing constant progress feedback.",
        acoes: [
          "Uses Pomodoro and alternates studying with break moments",
          "Speeds up long-winded video lessons to save time",
          "Uses his personal purpose board to stay focused",
        ],
        pensamentos: [
          "When lesson content gets too long-winded I lose focus, I prefer more practicality and optimization.",
          "I want to know exactly what percentage I've completed and what's left.",
        ],
        sentimentos: ["Productivity", "Focus", "Urgency"],
        dores: [
          "Excessively long-winded topics make him bored quickly.",
          "A platform too flat to celebrate short-term progress milestones.",
        ],
        oportunidades: [
          "Dashboard with a clear percentage progress bar per module.",
          "Visual celebrations on reaching levels/milestones and custom avatars.",
        ],
      },
      {
        id: "fidelizacao",
        label: "5. Retention",
        desc: "Tangible Growth",
        contexto: "Marcos finishes parts of the course, looking to apply what he's learned at work and build valuable networking.",
        acoes: [
          "Actively joins online coffee chats and idea-exchange spaces",
          "Shares his progress and certificate on his networks",
          "Looks for new referrals and professional partnerships on the platform",
        ],
        pensamentos: [
          "I liked the course, especially the practical support and exchanges.",
          "Being able to apply the knowledge in my day-to-day is my biggest goal.",
        ],
        sentimentos: ["Fulfillment", "Pride", "Connection"],
        dores: [
          "Extremely hard to form groups in online learning and sync work schedules.",
          "Losing touch with the professional network of students/tutors after the course.",
        ],
        oportunidades: [
          "Ongoing, dynamic online coffee-chat space focused on facilitating groups and networking.",
          "Connection events between graduated alumni and recruiters.",
        ],
      },
    ],
    transitionToTensions: "The breakdowns and opportunities mapped at each stage don't always point the same way for both profiles — those divergences become the research tensions below.",
  },
};

// ─── ResearchTensions ──────────────────────────────────────────────────────

interface Tension {
  titulo: string;
  achado: string;
  decisao: string;
  impacto: string;
  badge: string;
  /** Referencia o id de uma tela em productShowcaseContent.decisions — evita duplicar insight/manifestação. */
  telaId: string;
}

interface TensionsContent {
  eyebrow: string;
  title: string;
  description: string;
  labels: {
    achado: string;
    insight: string;
    decisao: string;
    manifestacao: string;
    impacto: string;
    verTela: string;
  };
  tensions: Tension[];
  transitionToProduct: string;
}

export const tensionsContent: Record<Lang, TensionsContent> = {
  pt: {
    eyebrow: "Pontes de Decisão",
    title: "Tensões da Pesquisa que Viraram Decisões de Produto",
    description: "As personas ajudaram a sintetizar os perfis principais, mas outros achados da pesquisa revelaram comportamentos complementares. Em vez de forçar uma única resposta para todos os alunos, a solução foi desenhada para acomodar diferentes estilos de motivação, estudo e continuidade.",
    labels: {
      achado: "Achado da Pesquisa",
      insight: "Insight",
      decisao: "Decisão de Design",
      manifestacao: "Manifestação na Interface",
      impacto: "Impacto no Produto",
      verTela: "Ver esta decisão na tela",
    },
    tensions: [
      {
        titulo: "1. Competição motiva alguns, mas pressiona outros",
        achado: "Parte dos alunos se sente motivada por ranking, comparação e disputa saudável. Outros, como Sofia, preferem reconhecimento individual e progresso pessoal, sem pressão competitiva.",
        decisao: "Ranking opcional com toggle de visibilidade.",
        impacto: "A plataforma mantém a competição como alavanca de engajamento para quem se motiva com isso, mas não obriga todos os alunos a participarem da lógica competitiva.",
        badge: "Competição virou escolha, não obrigação.",
        telaId: "ranking",
      },
      {
        titulo: "2. Autonomia é valorizada, mas sem estrutura vira abandono",
        achado: "Alguns perfis de alunos valorizam estudar no próprio ritmo, pausar, retomar e encaixar o curso na rotina. Mas, sem trilha clara, metas e acompanhamento, essa autonomia pode virar perda de ritmo.",
        decisao: "Plano de estudos personalizável, checkpoints e progresso visível.",
        impacto: "O aluno mantém total autonomia sobre sua rotina, mas conta com orientação estruturada suficiente para continuar avançando sem se dispersar.",
        badge: "Autonomia com trilha de segurança.",
        telaId: "plano-estudos",
      },
      {
        titulo: "3. IA ajuda, mas sozinha pode parecer fria",
        achado: "Outros participantes da pesquisa querem respostas rápidas, mas também demonstram necessidade de troca humana, comunidade e suporte próximo. Um chatbot isolado pode tornar a experiência impessoal.",
        decisao: "ChatBot IA combinado com monitor humano e comunidade ativa no mesmo ecossistema.",
        impacto: "A experiência ganha agilidade e respostas instantâneas sem perder o acolhimento e a empatia da troca com outras pessoas.",
        badge: "Tecnologia ágil com suporte humano.",
        telaId: "suporte-ia",
      },
      {
        titulo: "4. Recompensas engajam quando conectadas ao esforço real",
        achado: "Alguns perfis mais engajados valorizam comemorações em cada nível, marcos visíveis de progresso e o sentimento de reconhecimento pelo esforço contínuo.",
        decisao: "Pontos, conquistas, loja de recompensas e certificados intermediários por módulo concluído.",
        impacto: "A plataforma transforma o avanço de aprendizado diário em progresso percebido e recompensado com prêmios de carreira.",
        badge: "Progresso invisível vira valor percebido.",
        telaId: "loja-recompensas",
      },
      {
        titulo: "5. Conteúdo profundo precisa de síntese e aplicação",
        achado: "Variações comportamentais de alunos indicam que conteúdos longos, prolixos ou puramente teóricos geram cansaço, perda de foco e dificuldade para retomar o estudo posterior.",
        decisao: "Player com notas integradas, estrutura de aula dividida em blocos e foco em continuidade.",
        impacto: "O estudante consegue assistir às aulas, pausar e retomar seu progresso com facilidade, assimilando o valor prático com notas contextuais.",
        badge: "Foco total na aplicação prática.",
        telaId: "player-integrado",
      },
    ],
    transitionToProduct: "Cada uma dessas decisões amadurece ao longo do processo de design e se manifesta, tela a tela, no produto final.",
  },
  en: {
    eyebrow: "Decision Bridges",
    title: "Research Tensions That Became Product Decisions",
    description: "The personas helped synthesize the main profiles, but other research findings revealed complementary behaviors. Instead of forcing a single answer for all students, the solution was designed to accommodate different styles of motivation, study and continuity.",
    labels: {
      achado: "Research Finding",
      insight: "Insight",
      decisao: "Design Decision",
      manifestacao: "Interface Manifestation",
      impacto: "Product Impact",
      verTela: "See this decision on screen",
    },
    tensions: [
      {
        titulo: "1. Competition motivates some, but pressures others",
        achado: "Some students feel motivated by rankings, comparison and healthy rivalry. Others, like Sofia, prefer individual recognition and personal progress, without competitive pressure.",
        decisao: "Optional ranking with a visibility toggle.",
        impacto: "The platform keeps competition as an engagement lever for those motivated by it, without forcing every student into the competitive logic.",
        badge: "Competition became a choice, not an obligation.",
        telaId: "ranking",
      },
      {
        titulo: "2. Autonomy is valued, but without structure it turns into dropout",
        achado: "Some student profiles value studying at their own pace, pausing, resuming and fitting the course into their routine. But without a clear path, goals and follow-up, that autonomy can turn into a loss of rhythm.",
        decisao: "Customizable study plan, checkpoints and visible progress.",
        impacto: "Students keep full autonomy over their routine, while having enough structured guidance to keep advancing without drifting off track.",
        badge: "Autonomy with a safety net.",
        telaId: "plano-estudos",
      },
      {
        titulo: "3. AI helps, but alone it can feel cold",
        achado: "Other research participants want quick answers, but also show a need for human exchange, community and close support. An isolated chatbot can make the experience impersonal.",
        decisao: "AI chatbot combined with a human tutor and an active community in the same ecosystem.",
        impacto: "The experience gains speed and instant answers without losing the warmth and empathy of exchanging with other people.",
        badge: "Agile technology with human support.",
        telaId: "suporte-ia",
      },
      {
        titulo: "4. Rewards engage when connected to real effort",
        achado: "Some more engaged profiles value celebrations at every level, visible progress milestones and the feeling of being recognized for continuous effort.",
        decisao: "Points, achievements, a rewards store and intermediate certificates per completed module.",
        impacto: "The platform turns daily learning progress into perceived progress, rewarded with career-oriented prizes.",
        badge: "Invisible progress becomes perceived value.",
        telaId: "loja-recompensas",
      },
      {
        titulo: "5. Deep content needs synthesis and application",
        achado: "Behavioral variations among students indicate that long, long-winded or purely theoretical content causes fatigue, loss of focus and difficulty resuming study later.",
        decisao: "Player with integrated notes, lessons broken into blocks and a focus on continuity.",
        impacto: "Students can watch lessons, pause and resume their progress with ease, absorbing the practical value through contextual notes.",
        badge: "Total focus on practical application.",
        telaId: "player-integrado",
      },
    ],
    transitionToProduct: "Each of these decisions matures through the design process and shows up, screen by screen, in the final product.",
  },
};

// ─── ProductShowcase ───────────────────────────────────────────────────────

interface ShowcaseDecision {
  id: string;
  label: string;
  subtitle: string;
  dor: string;
  insight: string;
  decisao: string;
  telaDesc: string;
  valor: string;
}

interface ProductShowcaseContent {
  eyebrow: string;
  title: string;
  description: string;
  labels: {
    dor: string;
    insight: string;
    decisao: string;
    tela: string;
    valorPrefix: string;
    screenCounter: string;
    mediaUnavailable: string;
  };
  decisions: ShowcaseDecision[];
  transitionToValidation: string;
}

export const productShowcaseContent: Record<Lang, ProductShowcaseContent> = {
  pt: {
    eyebrow: "Decisões de Design na Tela",
    title: "Do Problema ao Produto",
    description: "Cada tela do UNIEDU responde a uma dor real identificada na pesquisa. Veja como cada decisão de design foi tomada e qual funcionalidade nasceu dela.",
    labels: {
      dor: "Dor Identificada",
      insight: "Insight de Pesquisa",
      decisao: "Decisão de Produto",
      tela: "Manifestação na Interface",
      valorPrefix: "Valor para o aluno:",
      screenCounter: "Tela",
      mediaUnavailable: "Mídia indisponível no momento.",
    },
    decisions: [
      {
        id: "primeiro-acesso",
        label: "Primeiro acesso",
        subtitle: "Login, loading e entrada guiada no produto",
        dor: "Plataformas EAD perdem alunos nos primeiros minutos por interfaces confusas ou fluxos de entrada que não criam expectativa positiva sobre o que vem a seguir.",
        insight: "O primeiro acesso é o momento de maior expectativa e menor comprometimento — a interface deve gerar confiança imediata e curiosidade antes de qualquer conteúdo.",
        decisao: "Projetar um fluxo de login com identidade visual forte, seguido de uma loading experience com narrativa de marca que prepara o aluno para o ecossistema que vai encontrar.",
        telaDesc: "Tela de login com logo UNIEDU, campos de acesso e loading animado com feedback de boas-vindas antes da entrada na Home.",
        valor: "Reduz a ansiedade inicial e cria o primeiro momento de percepção de qualidade do produto, ancorando positivamente a experiência antes mesmo do primeiro conteúdo.",
      },
      {
        id: "plano-estudos",
        label: "Plano de estudos",
        subtitle: "Rotina adaptável ao tempo real do aluno",
        dor: "Cronogramas rígidos e metas inalcançáveis fazem o aluno desistir na primeira semana em que a vida real não coopera com a grade do curso.",
        insight: "Flexibilidade é a principal variável de retenção em cursos online — quem ajusta o ritmo sem sentir falha continua estudando; quem não consegue, abandona.",
        decisao: "Criar um plano de estudos de acordo com as preferências do aluno, com opções de ritmo (Intensivo, Dedicado, Equilibrado, Noturno, Consistente) que podem ser revisadas a qualquer momento sem penalidade.",
        telaDesc: "Cards de seleção de plano com ritmo semanal, horas por dia e tag de perfil comportamental. Estado selecionado com checkmark rosa e CTA para salvar.",
        valor: "O aluno entra com expectativa realista sobre seu próprio ritmo, reduzindo a sensação de fracasso e aumentando a adesão no médio prazo.",
      },
      {
        id: "onboarding-jornada",
        label: "Onboarding da jornada",
        subtitle: "Ciclo aprender → interagir → evoluir → ganhar",
        dor: "Alunos não compreendem como o sistema de pontos e recompensas funciona, ignorando funcionalidades que os motivariam a continuar na plataforma.",
        insight: "Explicar o ciclo de valor logo no primeiro acesso transforma a plataforma de repositório de vídeos em uma experiência de progresso com recompensas reais e percebidas.",
        decisao: "Criar um modal de onboarding na Home que apresenta visualmente o ecossistema completo — os 4 pilares da jornada — com ícones temáticos e linguagem direta.",
        telaDesc: "Modal centralizado com mascote UNIEDU, 4 etapas ilustradas (Aprender, Interagir, Evoluir, Ganhar) e CTA 'ENTENDI' para liberar a Home principal.",
        valor: "Aumenta o entendimento do produto desde o dia 1, gerando engajamento com todas as funcionalidades da plataforma e não apenas com as aulas.",
      },
      {
        id: "home-progresso",
        label: "Home de progresso",
        subtitle: "Continuidade, aula em destaque e streak visível",
        dor: "Sofia estuda esporadicamente e sente que seu esforço diário é invisível, perdendo o incentivo ao ver apenas barras de progresso semestrais rígidas e impessoais.",
        insight: "Os alunos necessitam de feedback imediato de suas pequenas vitórias para estabelecer constância como hábito — a Home é o momento de maior abertura para essa mensagem.",
        decisao: "Criar uma Home centrada em continuidade: saldo de pontos visível, streak ativo, card de última aula com CTA imediato e acesso rápido ao plano de estudos e dúvidas.",
        telaDesc: "Header com logo, saldo de pontos e notificações. Card de aula em destaque com thumbnail em gradiente, barra de progresso e botão CONTINUAR. Seções de plano e dúvidas.",
        valor: "Transforma o esforço incremental do aluno em progresso tangível e motivador desde os primeiros segundos do dia, reduzindo o abandono por falta de engajamento.",
      },
      {
        id: "jornada-aprendizado",
        label: "Jornada de aprendizado",
        subtitle: "Checklist gamificado que ativa o ecossistema",
        dor: "Sem orientação sobre o próximo passo, o aluno navega por curiosidade em vez de estratégia, perdendo o fio condutor do progresso e não interagindo com o ecossistema completo.",
        insight: "Gamificar as ações mais valiosas da plataforma com um checklist temporário ativa comportamentos-chave que, quando repetidos, se tornam hábitos duradouros.",
        decisao: "Criar um bloco 'Jornada de aprendizado' na Home com checklist de 4 ações diárias (aula, comentário, conquista, resgate) com badges de recompensa e barra de progresso visível.",
        telaDesc: "Card com gradiente rosa-magenta, barra de progresso da jornada diária, 4 itens interativos com ícone e badge de pontos. Estado concluído com riscado e feedback verde.",
        valor: "Orienta o aluno sobre o que fazer além de assistir aulas, ativando o ciclo completo de valor da plataforma e consolidando hábitos de estudo mais ricos.",
      },
      {
        id: "aulas-trilhas",
        label: "Aulas e trilhas",
        subtitle: "Conteúdo organizado por módulos com progresso claro",
        dor: "Catálogos desordenados geram paralisia por excesso de escolha e impedem o aluno de manter uma trilha coerente de aprendizado ao longo do semestre.",
        insight: "A progressão clara por módulos com indicadores visuais de estado reduz a carga cognitiva e mantém o aluno em movimento — ele sempre sabe o próximo passo.",
        decisao: "Organizar as aulas em módulos sequenciais com barra de progresso individual, acesso rápido à última aula assistida e destaque visual para a próxima aula desbloqueada.",
        telaDesc: "Lista de módulos com aulas numeradas, progresso em barra colorida e ícones de estado (concluído, em andamento). Thumbnail e CTA de continuidade destacados.",
        valor: "O aluno sabe exatamente onde está na trilha e o que vem a seguir, reduzindo o tempo de decisão e aumentando o tempo efetivo dedicado ao conteúdo.",
      },
      {
        id: "player-integrado",
        label: "Player integrado",
        subtitle: "Estudo, notas e contexto no mesmo fluxo",
        dor: "A dispersão mental ao alternar entre o player de vídeo e softwares externos de anotação quebra o fluxo de concentração e reduz a retenção do conteúdo assistido.",
        insight: "Escrever e sintetizar no momento em que o conteúdo é consumido fixa o aprendizado — eliminar o atrito de troca de ferramenta é uma decisão de produto, não apenas de UX.",
        decisao: "Unificar player de vídeo, notas contextuais por aula, discussões e acesso ao suporte IA em uma única tela, com salvamento automático e atalho flutuante para anotar durante o vídeo.",
        telaDesc: "Player com thumbnail em gradiente. Abas de Discussões, Notas, Arquivos e Turma. Bloco de notas com salvamento automático e FAB flutuante para nova anotação.",
        valor: "Mantém a atenção em um único espaço, aumenta a retenção do conteúdo e cria um banco de conhecimento pessoal do aluno dentro da própria plataforma.",
      },
      {
        id: "loja-recompensas",
        label: "Loja de recompensas",
        subtitle: "Pontos convertidos em valor real para a carreira",
        dor: "Pontos fictícios ou medalhas virtuais perdem o apelo em poucas semanas por não gerarem valor real para a vida profissional do aluno.",
        insight: "Para motivar o esforço contínuo, a recompensa deve ser útil e valiosa no mundo real — preferencialmente ligada ao crescimento de carreira do próprio aluno.",
        decisao: "Criar uma loja onde pontos acumulados por constância são trocados por mentoria 1:1, review de portfólio, templates Figma, certificados premium e workshops ao vivo.",
        telaDesc: "Header com saldo de pontos. Strip de como ganhar. Filtros por categoria (Digital, Mentoria, Curso, Certificado). Grid de produtos com preço e estado de acessibilidade por saldo.",
        valor: "Vincula o esforço diário a conquistas profissionais tangíveis, tornando a consistência nos estudos uma estratégia de carreira com retorno percebido.",
      },
      {
        id: "comunidade",
        label: "Comunidade",
        subtitle: "Troca entre alunos, prova social e pertencimento",
        dor: "Fóruns estáticos e isolados desestimulam a interação genuína e deixam o aluno se sentindo sozinho em um processo que deveria ser coletivo e estimulante.",
        insight: "Prova social e pertencimento a uma comunidade ativa são fatores de retenção tão poderosos quanto a qualidade do conteúdo — em alguns perfis, ainda mais.",
        decisao: "Criar um feed com múltiplas seções (perguntas, feedback de projetos, vagas, eventos, apresentações) e badges de role para diferenciar Mentores, Experientes e Iniciantes.",
        telaDesc: "Feed com cards de publicações, avatar, role badge (Mentor/Experiente/Iniciante) e contadores de reações. Navegação rápida para Perguntas, Feedback, Vagas e Eventos.",
        valor: "Combate o isolamento do EAD e cria senso de comunidade profissional, aumentando o engajamento e a permanência na plataforma por razões sociais além do conteúdo.",
      },
      {
        id: "suporte-ia",
        label: "Suporte e IA contextual",
        subtitle: "Ajuda no momento de dúvida sem quebrar o estudo",
        dor: "Travar em um exercício e depender de fóruns com resposta incerta paralisa o ritmo e força o abandono da aula — o momento de maior atrito se torna o de maior risco de churn.",
        insight: "O suporte deve ser imediato e contextualizado — uma IA que conhece as notas e o conteúdo atual do aluno guia a solução de forma muito mais eficaz do que um fórum genérico.",
        decisao: "Criar um chat com IA que lê o contexto da aula atual e as anotações do aluno, com rota de escalada para monitor humano quando a dúvida exige intervenção.",
        telaDesc: "Chat com avatar do mascote UNIEDU, bolhas de diálogo com leitura do contexto da aula, sugestões de próximos passos e botão de escalada para monitor.",
        valor: "Resolve dúvidas no momento exato de atrito, sem quebrar o fluxo de estudo e sem depender de fóruns com tempo de resposta imprevisível.",
      },
      {
        id: "perfil-progresso",
        label: "Perfil e progresso",
        subtitle: "Evolução visível, conquistas e próximas metas",
        dor: "Alunos perdem a noção de quanto já evoluíram, o que reduz a motivação para continuar em momentos de dificuldade — o esforço acumulado fica invisível.",
        insight: "Ver o próprio crescimento acumulado — aulas, horas, conquistas e certificados — reforça a identidade de quem está progredindo e reduz o churn no médio prazo.",
        decisao: "Criar um perfil que exibe nível atual com XP, conquistas desbloqueadas, estatísticas de estudo (aulas, horas, dias ativos) e histórico de resgates na loja.",
        telaDesc: "Header com avatar e nível atual. Cards de estatísticas, badge de conquistas e histórico de resgates. Seção de próximas metas desbloqueáveis com pontos necessários.",
        valor: "Cria uma narrativa de crescimento pessoal e profissional que o aluno pode visualizar e compartilhar, reforçando sua identidade como alguém em constante evolução.",
      },
      {
        id: "ranking",
        label: "Ranking",
        subtitle: "Competição opcional, visível só quando faz sentido",
        dor: "Parte dos alunos se sente motivada por ranking e comparação positiva. Outros, porém, podem interpretar a classificação como pressão, exposição ou sinal de atraso em relação aos colegas.",
        insight: "A competição funciona melhor quando não é obrigatória. Para alguns perfis, ela reforça progresso e engajamento; para outros, pode gerar frustração e desmotivação.",
        decisao: "Criar um ranking com controle de visibilidade, permitindo que o aluno escolha participar, visualizar sua posição ou manter essa camada desligada, sem comprometer sua jornada de aprendizagem.",
        telaDesc: "Tela de ranking com opção de ativar ou desativar a participação, exibindo posição, pontuação e comparação apenas quando o aluno quiser acompanhar essa dinâmica.",
        valor: "O aluno pode usar a competição como motivação quando isso fizer sentido para seu perfil, sem ser obrigado a se comparar com outras pessoas durante o processo de aprendizagem.",
      },
    ],
    transitionToValidation: "Depois de desenhadas, essas telas foram colocadas na frente de usuários reais — veja a seguir como cada fluxo se saiu na validação.",
  },
  en: {
    eyebrow: "On-Screen Design Decisions",
    title: "From Problem to Product",
    description: "Every UNIEDU screen answers a real pain point identified in the research. See how each design decision was made and which feature was born from it.",
    labels: {
      dor: "Identified Pain Point",
      insight: "Research Insight",
      decisao: "Product Decision",
      tela: "Interface Manifestation",
      valorPrefix: "Value for the student:",
      screenCounter: "Screen",
      mediaUnavailable: "Media currently unavailable.",
    },
    decisions: [
      {
        id: "primeiro-acesso",
        label: "First access",
        subtitle: "Login, loading and guided entry into the product",
        dor: "Distance-learning platforms lose students in the first minutes due to confusing interfaces or entry flows that fail to build positive expectations about what comes next.",
        insight: "First access is the moment of highest expectation and lowest commitment — the interface must build immediate trust and curiosity before any content.",
        decisao: "Design a login flow with strong visual identity, followed by a loading experience with brand storytelling that prepares the student for the ecosystem they're about to find.",
        telaDesc: "Login screen with the UNIEDU logo, access fields and an animated loading screen with a welcome message before entering the Home screen.",
        valor: "Reduces initial anxiety and creates the first moment of perceived product quality, positively anchoring the experience even before the first piece of content.",
      },
      {
        id: "plano-estudos",
        label: "Study plan",
        subtitle: "Routine adaptable to the student's real time",
        dor: "Rigid schedules and unreachable goals make students give up in the first week real life doesn't cooperate with the course grid.",
        insight: "Flexibility is the main retention variable in online courses — those who can adjust their pace without feeling like a failure keep studying; those who can't, drop out.",
        decisao: "Create a study plan based on student preferences, with pace options (Intensive, Dedicated, Balanced, Night, Consistent) that can be revised at any time with no penalty.",
        telaDesc: "Plan-selection cards showing weekly pace, hours per day and a behavioral profile tag. Selected state shown with a pink checkmark and a save CTA.",
        valor: "Students start with realistic expectations about their own pace, reducing the sense of failure and increasing mid-term adherence.",
      },
      {
        id: "onboarding-jornada",
        label: "Journey onboarding",
        subtitle: "Learn → interact → grow → earn cycle",
        dor: "Students don't understand how the points and rewards system works, missing out on features that would motivate them to keep using the platform.",
        insight: "Explaining the value cycle right at first access turns the platform from a video repository into a progress experience with real, perceived rewards.",
        decisao: "Create an onboarding modal on the Home screen that visually presents the full ecosystem — the journey's 4 pillars — with themed icons and direct language.",
        telaDesc: "Centered modal with the UNIEDU mascot, 4 illustrated steps (Learn, Interact, Grow, Earn) and a 'GOT IT' CTA to unlock the main Home screen.",
        valor: "Increases product understanding from day one, driving engagement with all of the platform's features, not just the lessons.",
      },
      {
        id: "home-progresso",
        label: "Progress home",
        subtitle: "Continuity, featured lesson and a visible streak",
        dor: "Sofia studies sporadically and feels her daily effort is invisible, losing motivation when seeing only rigid, impersonal semester-long progress bars.",
        insight: "Students need immediate feedback on their small wins to establish consistency as a habit — Home is the moment of greatest openness for that message.",
        decisao: "Create a Home screen centered on continuity: visible points balance, active streak, a last-lesson card with an immediate CTA and quick access to the study plan and questions.",
        telaDesc: "Header with logo, points balance and notifications. Featured lesson card with a gradient thumbnail, progress bar and a CONTINUE button. Plan and questions sections.",
        valor: "Turns the student's incremental effort into tangible, motivating progress from the first seconds of the day, reducing dropout from lack of engagement.",
      },
      {
        id: "jornada-aprendizado",
        label: "Learning journey",
        subtitle: "Gamified checklist that activates the ecosystem",
        dor: "With no guidance on the next step, students navigate out of curiosity rather than strategy, losing the thread of progress and not engaging with the full ecosystem.",
        insight: "Gamifying the platform's most valuable actions with a temporary checklist activates key behaviors that, when repeated, become lasting habits.",
        decisao: "Create a 'Learning journey' block on Home with a checklist of 4 daily actions (lesson, comment, achievement, redemption) with reward badges and a visible progress bar.",
        telaDesc: "Card with a pink-magenta gradient, daily journey progress bar, 4 interactive items with icon and points badge. Completed state shown with strikethrough and green feedback.",
        valor: "Guides students on what to do beyond watching lessons, activating the platform's full value cycle and building richer study habits.",
      },
      {
        id: "aulas-trilhas",
        label: "Lessons and tracks",
        subtitle: "Content organized by modules with clear progress",
        dor: "Disorganized catalogs cause paralysis from too much choice and prevent students from keeping a coherent learning path throughout the semester.",
        insight: "Clear progression by modules with visual state indicators reduces cognitive load and keeps students moving — they always know the next step.",
        decisao: "Organize lessons into sequential modules with an individual progress bar, quick access to the last watched lesson and visual highlight for the next unlocked lesson.",
        telaDesc: "List of modules with numbered lessons, colored progress bar and state icons (completed, in progress). Thumbnail and continuation CTA highlighted.",
        valor: "Students know exactly where they are on the path and what's next, reducing decision time and increasing time effectively spent on content.",
      },
      {
        id: "player-integrado",
        label: "Integrated player",
        subtitle: "Study, notes and context in the same flow",
        dor: "Mental dispersion from switching between the video player and external note-taking software breaks concentration and reduces retention of watched content.",
        insight: "Writing and synthesizing while consuming the content cements learning — removing the friction of switching tools is a product decision, not just a UX one.",
        decisao: "Unify the video player, per-lesson contextual notes, discussions and access to AI support in a single screen, with autosave and a floating shortcut to take notes during the video.",
        telaDesc: "Player with a gradient thumbnail. Discussion, Notes, Files and Class tabs. Notepad with autosave and a floating FAB for new notes.",
        valor: "Keeps attention in a single space, increases content retention and builds a personal knowledge base for the student inside the platform itself.",
      },
      {
        id: "loja-recompensas",
        label: "Rewards store",
        subtitle: "Points converted into real career value",
        dor: "Fictional points or virtual badges lose their appeal within a few weeks because they generate no real value for the student's professional life.",
        insight: "To motivate ongoing effort, the reward must be useful and valuable in the real world — preferably tied to the student's own career growth.",
        decisao: "Create a store where points earned through consistency are exchanged for 1:1 mentoring, portfolio reviews, Figma templates, premium certificates and live workshops.",
        telaDesc: "Header with points balance. Strip explaining how to earn points. Category filters (Digital, Mentoring, Course, Certificate). Product grid with price and accessibility state by balance.",
        valor: "Ties daily effort to tangible career achievements, turning study consistency into a career strategy with a perceived return.",
      },
      {
        id: "comunidade",
        label: "Community",
        subtitle: "Exchange between students, social proof and belonging",
        dor: "Static, isolated forums discourage genuine interaction and leave students feeling alone in a process that should be collective and stimulating.",
        insight: "Social proof and belonging to an active community are retention factors as powerful as content quality — for some profiles, even more so.",
        decisao: "Create a feed with multiple sections (questions, project feedback, job openings, events, showcases) and role badges to distinguish Mentors, Experienced and Beginners.",
        telaDesc: "Feed with post cards, avatar, role badge (Mentor/Experienced/Beginner) and reaction counters. Quick navigation for Questions, Feedback, Jobs and Events.",
        valor: "Fights the isolation of distance learning and builds a sense of professional community, increasing engagement and retention on the platform for social reasons beyond content.",
      },
      {
        id: "suporte-ia",
        label: "Contextual AI support",
        subtitle: "Help at the moment of doubt without breaking the study flow",
        dor: "Getting stuck on an exercise and depending on forums with an uncertain response paralyzes momentum and forces lesson abandonment — the moment of highest friction becomes the moment of highest churn risk.",
        insight: "Support must be immediate and contextual — an AI that knows the student's notes and current content guides the solution far more effectively than a generic forum.",
        decisao: "Create an AI chat that reads the context of the current lesson and the student's notes, with an escalation path to a human tutor when the question requires intervention.",
        telaDesc: "Chat with the UNIEDU mascot avatar, dialogue bubbles reading the lesson context, next-step suggestions and an escalation button to a tutor.",
        valor: "Resolves questions at the exact moment of friction, without breaking the study flow and without depending on forums with unpredictable response times.",
      },
      {
        id: "perfil-progresso",
        label: "Profile and progress",
        subtitle: "Visible growth, achievements and upcoming goals",
        dor: "Students lose track of how much they've already progressed, which reduces motivation to continue during difficult moments — accumulated effort becomes invisible.",
        insight: "Seeing your own accumulated growth — lessons, hours, achievements and certificates — reinforces the identity of someone who's progressing and reduces mid-term churn.",
        decisao: "Create a profile that shows current level with XP, unlocked achievements, study statistics (lessons, hours, active days) and store redemption history.",
        telaDesc: "Header with avatar and current level. Statistic cards, achievement badges and redemption history. Section of upcoming unlockable goals with points required.",
        valor: "Creates a personal and professional growth narrative students can visualize and share, reinforcing their identity as someone constantly progressing.",
      },
      {
        id: "ranking",
        label: "Ranking",
        subtitle: "Optional competition, visible only when it makes sense",
        dor: "Some students feel motivated by ranking and positive comparison. Others, however, may interpret the ranking as pressure, exposure or a sign of falling behind peers.",
        insight: "Competition works best when it's not mandatory. For some profiles, it reinforces progress and engagement; for others, it can generate frustration and demotivation.",
        decisao: "Create a ranking with visibility controls, letting students choose to participate, view their position or keep that layer turned off, without compromising their learning journey.",
        telaDesc: "Ranking screen with an option to turn participation on or off, showing position, score and comparison only when the student wants to follow that dynamic.",
        valor: "Students can use competition as motivation when it fits their profile, without being forced to compare themselves to others during the learning process.",
      },
    ],
    transitionToValidation: "Once designed, these screens were put in front of real users — see next how each flow performed in validation.",
  },
};

// ─── ProcessEvolutionCarousel ──────────────────────────────────────────────

interface ProcessEvolutionContent {
  eyebrow: string;
  title: string;
  description: string;
  quote: string;
  phase1Label: string;
  phase2Label: string;
  phase3Label: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
  tablistAriaLabel: string;
  dotAriaLabel: (index: number, phaseNum: string) => string;
  transitionToProduct: string;
}

export const processEvolutionContent: Record<Lang, ProcessEvolutionContent> = {
  pt: {
    eyebrow: "Maturidade de Processo",
    title: "Do papel ao produto navegável",
    description: "A evolução do APP UNIEDU passou por esboços no papel, wireframes de baixa fidelidade e uma primeira versão visual em alta fidelidade, até chegar à versão atual apresentada nas próximas seções do case.",
    quote: "\"Mais do que uma sequência de telas, o case registra como cada decisão foi refinada a partir de hipótese, materialização, teste e ajuste.\"",
    phase1Label: "Sketches no papel",
    phase2Label: "Wireframes",
    phase3Label: "Alta fidelidade: 1ª versão",
    prevAriaLabel: "Etapa anterior",
    nextAriaLabel: "Próxima etapa",
    tablistAriaLabel: "Etapas do processo",
    dotAriaLabel: (index, phaseNum) => `Ir para imagem ${index} da fase ${phaseNum}`,
    transitionToProduct: "Da primeira ideia no papel à versão em alta fidelidade, essas iterações resultaram nas 12 telas detalhadas a seguir.",
  },
  en: {
    eyebrow: "Process Maturity",
    title: "From paper to navigable product",
    description: "The evolution of the UNIEDU APP went through paper sketches, low-fidelity wireframes and a first high-fidelity visual version, leading up to the current version presented in the next sections of the case.",
    quote: "\"More than a sequence of screens, the case documents how each decision was refined through hypothesis, materialization, testing and adjustment.\"",
    phase1Label: "Paper sketches",
    phase2Label: "Wireframes",
    phase3Label: "High fidelity: 1st version",
    prevAriaLabel: "Previous step",
    nextAriaLabel: "Next step",
    tablistAriaLabel: "Process steps",
    dotAriaLabel: (index, phaseNum) => `Go to image ${index} of phase ${phaseNum}`,
    transitionToProduct: "From the first idea on paper to the high-fidelity version, these iterations resulted in the 12 screens detailed next.",
  },
};


// ─── DesignSystemSection ───────────────────────────────────────────────────
// Espelha a biblioteca do Figma (mesmos números e decisões de RecruitingDesignSystemSection).
// Hex, nomes de tokens e nomes de componentes não mudam com o idioma e ficam no componente.

interface DesignSystemBlockCopy {
  label: string;
  title: string;
  text: string;
}

interface PropCopy {
  name: string;
  kind: string;
}

interface DesignSystemContent {
  eyebrow: string;
  title: string;
  intro: string;
  authorshipOriginal: string;
  authorshipAnd: string;
  authorshipDs: string;
  authorshipAi: string;
  facts: { value: string; label: string }[];
  pipelineLabel: string;
  pipeline: { step: string; desc: string }[];
  tokens: DesignSystemBlockCopy & {
    colToken: string;
    colLight: string;
    colDark: string;
    roles: { actionPrimary: string; bgSurface: string; textContent: string };
    figureAlt: string;
    figureCaptionStrong: string;
    figureCaption: string;
  };
  components: DesignSystemBlockCopy & {
    selectionLabel: string;
    catalog: { name: string; desc: string }[];
    composition: { kicker: string; desc: string; alt: string; props: PropCopy[] };
    button: { kicker: string; desc: string; alt: string; props: PropCopy[] };
    nav: {
      kicker: string;
      activeLabel: string;
      altAulas: string;
      altPerfil: string;
      props: PropCopy[];
    };
  };
  application: DesignSystemBlockCopy & {
    screensLight: string;
    screensDark: string;
    altLight: string;
    altDark: string;
    screensNote: string;
    accessibilityKicker: string;
    accessibilityTitle: string;
    accessibilityP1: string;
    accessibilityP2: string;
    asBuiltLabel: string;
    asBuiltBadge: string;
    asBuiltAlt: string;
    proposedLabel: string;
    proposedBadge: string;
    proposedAlt: string;
    status: string;
    statusDetail: string;
  };
  closing: string;
  cta: string;
  newTab: string;
}

export const designSystemContent: Record<Lang, DesignSystemContent> = {
  pt: {
    eyebrow: "Design System",
    title: "Da interface ao sistema",
    intro:
      "Depois de concluído o protótipo do UNIEDU, seus padrões visuais foram organizados em uma biblioteca reutilizável no Figma. Tokens, componentes, variantes e temas tornam as decisões de interface mais consistentes, documentadas e fáceis de evoluir.",
    authorshipOriginal: "Projeto original e identidade visual:",
    authorshipAnd: "e",
    authorshipDs: "Estruturação do Design System, decisões técnicas e validação:",
    authorshipAi: "com apoio de IA na execução.",
    facts: [
      { value: "146", label: "variáveis em 6 coleções" },
      { value: "2", label: "temas por modo de variável" },
      { value: "8", label: "famílias de componentes, 32 variantes" },
      { value: "14", label: "estilos de texto" },
    ],
    pipelineLabel: "Do protótipo à biblioteca",
    pipeline: [
      { step: "Foundations", desc: "Plus Jakarta Sans e Inter, escala de espaçamento em múltiplos de 4 px e raios de 10 a 16 px." },
      { step: "Tokens", desc: "Primitivos guardam valores brutos; tokens semânticos dão a função de cada valor e mudam por tema." },
      { step: "Components", desc: "Header/Page, Nav/Bottom, 4 Card/Module e 19 Card/Lesson, com Progress/Bar aninhada." },
      { step: "Interface", desc: "A tela Aulas em Light e Dark, montada só com instâncias vinculadas, sem frames desanexados." },
    ],
    tokens: {
      label: "Foundations e tokens",
      title: "O componente mantém sua função. O tema determina quais valores ele utiliza.",
      text:
        "Os componentes usam apenas tokens semânticos. Cada token aponta para um primitivo diferente em Light e em Dark, então a troca de tema não exige redesenhar nada. Esta é uma seleção de três tokens, não a tabela completa.",
      colToken: "Token semântico",
      colLight: "Light",
      colDark: "Dark",
      roles: {
        actionPrimary: "Ação principal, aba ativa, foco",
        bgSurface: "Superfície de cards e barras",
        textContent: "Títulos e texto de conteúdo",
      },
      figureAlt: "Componente Card/Lesson exibido lado a lado nos temas Light e Dark, com as mesmas aulas e propriedades.",
      figureCaptionStrong: "Card/Lesson",
      figureCaption: "nos dois temas: mesmo componente, mesmas propriedades. Só o modo de variável muda.",
    },
    components: {
      label: "Componentes reutilizáveis",
      title: "Poucos componentes, com propriedades que cobrem os casos reais.",
      text:
        "Em vez de reconstruir elementos em cada tela, os padrões viraram componentes configuráveis. Variantes resolvem estados e tamanhos; textos, booleanos, troca de ícone e slots evitam multiplicar variantes. Tudo é montado com Auto Layout e usado como instância.",
      selectionLabel: "Seleção apresentada",
      catalog: [
        { name: "Button/Primary", desc: "3 tamanhos × 4 estados" },
        { name: "Header/Page", desc: "cabeçalho das telas" },
        { name: "Nav/Bottom", desc: "5 destinos" },
        { name: "Card/Module", desc: "4 cores + Progress/Bar" },
        { name: "Card/Lesson", desc: "19 instâncias" },
      ],
      composition: {
        kicker: "Composição",
        desc: "O cabeçalho aninha uma Progress/Bar; as aulas entram por um slot como instâncias de Card/Lesson.",
        alt: "Card/Module UX Strategy expandido, com barra de progresso aninhada e duas instâncias de Card/Lesson no slot de aulas.",
        props: [
          { name: "Color", kind: "variant · 4" },
          { name: "Title · Meta", kind: "texto" },
          { name: "Show Lessons", kind: "booleano" },
          { name: "Lessons", kind: "slot" },
          { name: "Progress/Bar", kind: "aninhada" },
        ],
      },
      button: {
        kicker: "Variantes",
        desc: "3 tamanhos × 4 estados = 12 variantes.",
        alt: "Variantes do Button/Primary: tamanhos SM, MD e LG e estados Pressed, Focus e Disabled.",
        props: [
          { name: "Size", kind: "variant" },
          { name: "State", kind: "variant" },
          { name: "Label", kind: "texto" },
          { name: "Show Icon", kind: "booleano" },
          { name: "Icon", kind: "troca de instância" },
        ],
      },
      nav: {
        kicker: "Uma variante por destino",
        activeLabel: "Active",
        altAulas: "Nav/Bottom com o destino Aulas ativo.",
        altPerfil: "Nav/Bottom com o destino Perfil ativo.",
        props: [
          { name: "Active", kind: "variant · 5 destinos" },
          { name: "Nav/Item State × Focus", kind: "variant" },
        ],
      },
    },
    application: {
      label: "Aplicação real e acessibilidade",
      title: "A tela Aulas, recomposta com a biblioteca.",
      text:
        "As versões Light e Dark usam os mesmos componentes principais. Cada uma tem suas próprias instâncias, configuradas pelo modo de variável do tema. Busca e abas ainda são estruturas locais da tela.",
      screensLight: "Light",
      screensDark: "Dark",
      altLight: "Tela Aulas no tema Light, composta com instâncias da biblioteca.",
      altDark: "Tela Aulas no tema Dark, composta com as mesmas instâncias e o modo Dark.",
      screensNote: "As duas telas já incluem as melhorias de contraste propostas abaixo, por isso diferem do protótipo publicado.",
      accessibilityKicker: "Revisão de acessibilidade",
      accessibilityTitle: "Cabeçalho do módulo",
      accessibilityP1:
        "No protótipo, o título e a meta em branco ficam sobre um gradiente rosa claro. Medido nos dois extremos do gradiente, o contraste fica abaixo de 4,5:1, mínimo exigido para texto desse tamanho (WCAG 1.4.3).",
      accessibilityP2:
        "A proposta mantém o matiz e o texto branco e escurece o gradiente para os tons -700 de cada módulo. A diferenciação entre módulos continua, e a legibilidade passa no critério.",
      asBuiltLabel: "As built · protótipo publicado",
      asBuiltBadge: "2,76–2,86:1 · reprova",
      asBuiltAlt: "Cabeçalho do módulo UX Strategy como está no protótipo: texto branco sobre gradiente rosa claro.",
      proposedLabel: "Proposed · Figma",
      proposedBadge: "5,91–6,03:1 · passa",
      proposedAlt: "Cabeçalho do módulo UX Strategy proposto no Figma: texto branco sobre gradiente rosa escuro.",
      status: "A melhoria está especificada no Figma e ainda não foi implementada no protótipo publicado.",
      statusDetail: "O tema Dark já atendia ao critério e não mudou.",
    },
    closing:
      "A documentação completa, com tokens, fichas de componentes, critérios de contraste e correspondência com o código, está no arquivo do Figma. A biblioteca ainda não está conectada ao código do app: não há Code Connect nem sincronização automática.",
    cta: "Explorar Design System no Figma",
    newTab: "(abre em nova aba)",
  },
  en: {
    eyebrow: "Design System",
    title: "From interface to system",
    intro:
      "Once the UNIEDU prototype was finished, its visual patterns were organized into a reusable Figma library. Tokens, components, variants and themes make interface decisions more consistent, documented and easier to evolve.",
    authorshipOriginal: "Original project and visual identity:",
    authorshipAnd: "and",
    authorshipDs: "Design System structure, technical decisions and validation:",
    authorshipAi: "with AI support in execution.",
    facts: [
      { value: "146", label: "variables in 6 collections" },
      { value: "2", label: "themes via variable modes" },
      { value: "8", label: "component families, 32 variants" },
      { value: "14", label: "text styles" },
    ],
    pipelineLabel: "From prototype to library",
    pipeline: [
      { step: "Foundations", desc: "Plus Jakarta Sans and Inter, a spacing scale in multiples of 4 px and 10 to 16 px radii." },
      { step: "Tokens", desc: "Primitives hold raw values; semantic tokens give each value its role and change per theme." },
      { step: "Components", desc: "Header/Page, Nav/Bottom, 4 Card/Module and 19 Card/Lesson, with a nested Progress/Bar." },
      { step: "Interface", desc: "The Lessons screen in Light and Dark, built only from linked instances, with no detached frames." },
    ],
    tokens: {
      label: "Foundations and tokens",
      title: "The component keeps its role. The theme decides which values it uses.",
      text:
        "Components use semantic tokens only. Each token points to a different primitive in Light and in Dark, so switching theme requires no redesign. This is a selection of three tokens, not the full table.",
      colToken: "Semantic token",
      colLight: "Light",
      colDark: "Dark",
      roles: {
        actionPrimary: "Primary action, active tab, focus",
        bgSurface: "Surface of cards and bars",
        textContent: "Titles and content text",
      },
      figureAlt: "Card/Lesson component shown side by side in the Light and Dark themes, with the same lessons and properties.",
      figureCaptionStrong: "Card/Lesson",
      figureCaption: "in both themes: same component, same properties. Only the variable mode changes.",
    },
    components: {
      label: "Reusable components",
      title: "A few components, with properties that cover real cases.",
      text:
        "Instead of rebuilding elements on every screen, the patterns became configurable components. Variants handle states and sizes; text, booleans, icon swaps and slots avoid multiplying variants. Everything is built with Auto Layout and used as an instance.",
      selectionLabel: "Selection shown",
      catalog: [
        { name: "Button/Primary", desc: "3 sizes × 4 states" },
        { name: "Header/Page", desc: "screen header" },
        { name: "Nav/Bottom", desc: "5 destinations" },
        { name: "Card/Module", desc: "4 colors + Progress/Bar" },
        { name: "Card/Lesson", desc: "19 instances" },
      ],
      composition: {
        kicker: "Composition",
        desc: "The header nests a Progress/Bar; lessons enter through a slot as Card/Lesson instances.",
        alt: "Expanded UX Strategy Card/Module, with a nested progress bar and two Card/Lesson instances in the lessons slot.",
        props: [
          { name: "Color", kind: "variant · 4" },
          { name: "Title · Meta", kind: "text" },
          { name: "Show Lessons", kind: "boolean" },
          { name: "Lessons", kind: "slot" },
          { name: "Progress/Bar", kind: "nested" },
        ],
      },
      button: {
        kicker: "Variants",
        desc: "3 sizes × 4 states = 12 variants.",
        alt: "Button/Primary variants: SM, MD and LG sizes and Pressed, Focus and Disabled states.",
        props: [
          { name: "Size", kind: "variant" },
          { name: "State", kind: "variant" },
          { name: "Label", kind: "text" },
          { name: "Show Icon", kind: "boolean" },
          { name: "Icon", kind: "instance swap" },
        ],
      },
      nav: {
        kicker: "One variant per destination",
        activeLabel: "Active",
        altAulas: "Nav/Bottom with the Lessons destination active.",
        altPerfil: "Nav/Bottom with the Profile destination active.",
        props: [
          { name: "Active", kind: "variant · 5 destinations" },
          { name: "Nav/Item State × Focus", kind: "variant" },
        ],
      },
    },
    application: {
      label: "Real application and accessibility",
      title: "The Lessons screen, rebuilt with the library.",
      text:
        "The Light and Dark versions use the same main components. Each has its own instances, set by the theme's variable mode. Search and tabs are still local structures of the screen.",
      screensLight: "Light",
      screensDark: "Dark",
      altLight: "Lessons screen in the Light theme, built with library instances.",
      altDark: "Lessons screen in the Dark theme, built with the same instances and the Dark mode.",
      screensNote: "Both screens already include the contrast improvements proposed below, so they differ from the published prototype.",
      accessibilityKicker: "Accessibility review",
      accessibilityTitle: "Module header",
      accessibilityP1:
        "In the prototype, the white title and meta sit on a light pink gradient. Measured at both ends of the gradient, contrast falls below 4.5:1, the minimum required for text of this size (WCAG 1.4.3).",
      accessibilityP2:
        "The proposal keeps the hue and the white text and darkens the gradient to each module's -700 tones. Modules stay distinguishable, and legibility meets the criterion.",
      asBuiltLabel: "As built · published prototype",
      asBuiltBadge: "2.76–2.86:1 · fails",
      asBuiltAlt: "UX Strategy module header as it is in the prototype: white text on a light pink gradient.",
      proposedLabel: "Proposed · Figma",
      proposedBadge: "5.91–6.03:1 · passes",
      proposedAlt: "UX Strategy module header proposed in Figma: white text on a dark pink gradient.",
      status: "The improvement is specified in Figma and has not been implemented in the published prototype yet.",
      statusDetail: "The Dark theme already met the criterion and did not change.",
    },
    closing:
      "The full documentation, with tokens, component sheets, contrast criteria and the mapping to code, lives in the Figma file. The library is not connected to the app's code yet: there is no Code Connect or automatic sync.",
    cta: "Explore the Design System in Figma",
    newTab: "(opens in a new tab)",
  },
};
