export const profile = {
  name: "Luís Henrique Gava Junior",
  role: "Engenheiro de Software | Engenheiro de IA",
  focusLines: [
    "LLMs, RAG e Agentes de IA | Harness Engineering | LLMOps",
    "LangChain | AWS | Python | NodeJS | React | SQL & NoSQL",
  ] as [string, string],
  location: "Tupã, São Paulo — Brasil",
  summary:
    "Desenvolvo com LLMs, agentes e pipelines de dados, levando soluções do levantamento de requisitos até a produção. Atuo como ponte entre negócio e tecnologia.",
  facts: [
    { k: "Empresa atual", v: "Mentto" },
    { k: "Formação", v: "Big Data · Fatec" },
  ],
};

export const projects: {
  title: string;
  tag: string;
  year: string;
  desc: string;
  stack: string;
  href?: string;
  thumb: string;
}[] = [
  {
    title: "Fundamentos da Periodização",
    tag: "Página de vendas · Kaizen Powerlifting",
    year: "2026",
    desc: "Página de vendas para um curso online de periodização de treino, desenvolvida para a equipe Kaizen Powerlifting. Dylan Azeredo Lopes e Leonardo Hermisdorf — treinadores com recordes mundiais e sul-americanos de levantamento de peso — ensinam como estruturar e manipular variáveis de treino do básico ao alto rendimento.",
    stack: "Next.js · TypeScript · CSS",
    href: "https://fundamentos-periodzacao.vercel.app/",
    thumb: "kaizen-periodizacao",
  },
];

export const experiences = [
  {
    role: "Engenheiro de Software Fullstack",
    company: "Mentto",
    period: "jan/2026 — atual",
    points: [
      {
        text: "Sem intermediários entre mim e o cliente: levantava necessidades direto com usuários e gestores, definia prioridades, projetava, desenvolvia, implantava e dava suporte.",
        stack: "React · FastAPI · PostgreSQL · Docker",
      },
      {
        text: "Programas de inovação acompanhados à mão: criei uma plataforma com agentes de IA que gera relatórios, métricas e formulários personalizados e responde gestores por chatbot com memória de longo prazo — e permite que terceiros operem seus próprios programas.",
        stack: "LLMs · OpenRouter · LangSmith · Redis · Next.js · Python",
      },
      {
        text: "Transcrições de reunião ficavam perdidas: construí um pipeline que as transforma em resumos e conhecimento estruturado, alimentando um chat com memória por equipe e isolamento de dados entre times.",
        stack: "LLMs · Neo4j · JSON estruturado",
      },
      {
        text: "Processos manuais de gestão: desenvolvo e mantenho em produção os sistemas internos — Kanban, OKR e Gantt, ponto com folha em PDF, assinatura digital, custo por projeto, benefícios e CRM — com centenas de horas economizadas por mês.",
        stack: "WebSockets · AWS · S3",
      },
      {
        text: "Prospecção dependia de planilhas: criei um CRM com coleta automática de dados, mapa de conexões entre 700+ leads e gestão de campanhas de venda.",
        stack: "Web scraping · Grafos",
      },
      {
        text: "Sistemas em produção expostos: corrigi vulnerabilidades, conduzi testes de intrusão em ambiente controlado e adequei tudo à LGPD.",
        stack: "Segurança · LGPD",
      },
      {
        text: "Deploy manual, sem staging: estruturei a infraestrutura e o DevOps com deploy automatizado, ambiente de staging, backups diários e testes de carga.",
        stack: "CI/CD · Docker · AWS · Cloudflare · Vercel",
      },
      {
        text: "Mais de 10 sistemas entregues em ciclos semanais, com treinamentos, aulas e tutoriais, e a empresa representada em eventos e workshops técnicos.",
      },
    ],
  },
  {
    role: "Desenvolvedor Fullstack",
    company: "Best Code",
    period: "set/2024 — ago/2025",
    points: [
      {
        text: "Análise de produção era manual: desenvolvi uma dashboard interativa em tempo real integrando Node-RED, InfluxDB e Grafana a um legado em React, Express e MongoDB — menos tempo de análise, insights para gestores e manutenção preventiva mais confiável.",
        stack: "Node-RED · InfluxDB · Grafana · Docker/WSL",
      },
      {
        text: "Planilha Excel com grande volume travava a análise: automatizei com Node-RED e JS e transformei em dashboard no Grafana, com visualização em tempo real.",
        stack: "Node-RED · JS · Grafana",
      },
      {
        text: "Soluções sem dono de ponta a ponta: liderei design (Figma), back-end, front-end e implantação, estruturando cronogramas e validando cada etapa com o cliente — 80% de conformidade já na primeira versão.",
        stack: "Figma · JS · HTML/CSS · Low-code",
      },
      {
        text: "Adoção lenta das ferramentas: conduzi o onboarding com treinamentos, materiais de apoio e suporte remoto — menos de 5 dias para adotar e 60–80% menos carga operacional.",
        stack: "AnyDesk · TeamViewer",
      },
      {
        text: "Métricas de CLPs exigiam verificação manual: modelei e otimizei séries temporais no InfluxDB, com consultas mais eficientes, dashboards mais rápidos e fim da coleta manual.",
        stack: "InfluxDB · Séries temporais",
      },
      {
        text: "Viagens, compras e notas fiscais em processo manual: criei um aplicativo de gerenciamento que reduziu cerca de 70% do tempo das etapas operacionais.",
        stack: "AppSheet",
      },
      {
        text: "Três projetos industriais simultâneos: conduzi reuniões de requisitos, documentação, priorização e acompanhamento — todos entregues no prazo, gerando novos pedidos.",
      },
    ],
  },
  {
    role: "Pesquisador e Analista de Dados",
    company: "Fundação Shunji Nishimura",
    period: "jul/2024",
    points: [
      {
        text: "Indicadores de cidades sem leitura estruturada: analisei dados em equipe interdisciplinar, apoiando o ciclo PDCA de um cliente.",
      },
    ],
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "Neo4j",
  "Redis",
  "LangChain",
  "RAG",
  "AWS",
  "Docker",
  "CI/CD",
];

export const contacts = [
  {
    label: "E-mail",
    value: "eulishenrique7@gmail.com",
    href: "mailto:eulishenrique7@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "in/luishgj",
    href: "https://www.linkedin.com/in/luishgj",
  },
  {
    label: "GitHub",
    value: "LuisHGJ",
    href: "https://github.com/LuisHGJ",
  },
  {
    label: "WhatsApp",
    value: "+55 14 99902-8338",
    href: "https://wa.me/5514999028338",
  },
];

export type Section = "hero" | "hub" | "projects" | "experience" | "contact";
export type Dir = "up" | "down" | "left" | "right";

export const positions: Record<Section, [number, number]> = {
  hero: [0, -1],
  hub: [0, 0],
  projects: [-1, 0],
  experience: [1, 0],
  contact: [0, 1],
};

const navMap: Record<Section, Partial<Record<Dir, Section>>> = {
  hero: { down: "hub" },
  hub: { up: "hero", left: "projects", right: "experience", down: "contact" },
  projects: { right: "hub" },
  experience: { left: "hub" },
  contact: { up: "hub" },
};

export function nextSection(from: Section, dir: Dir): Section | null {
  return navMap[from][dir] ?? null;
}
