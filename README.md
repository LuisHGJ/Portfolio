# Portfólio — Luís Henrique Gava Junior

Site pessoal de apresentação: um portfólio navegável com seções de apresentação, projetos, experiência, habilidades e contato. Os dados (perfil, projetos, experiências, skills e contatos) ficam centralizados em um único arquivo, o que facilita manter tudo atualizado sem mexer na estrutura das seções.

**Em produção:** [https://luishportfolio.vercel.app/](https://luishportfolio.vercel.app/)

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/) |
| Linguagem | [TypeScript 5.8](https://www.typescriptlang.org/) |
| Estilos | CSS Modules + CSS global (`src/styles/`) |
| Ícones | [Lucide React](https://lucide.dev/) |
| Deploy | [Vercel](https://vercel.com/) (`vercel.json`) |
| Container | Docker (build multi-stage com `node:22-alpine` + `docker-compose.yml`) |

## Estrutura

```
src/
├── app/          # App Router (layout.tsx com metadata, page.tsx)
├── components/   # Componentes reutilizáveis (Pipes, HubArrow, BackButton, thumbs)
├── lib/          # portfolio-data.ts — todos os dados do portfólio
├── sections/     # Hero, Hub, Projects, Experience, Contact (+ .module.css)
└── styles/       # globals, layout, components, sections
```

## Rodando localmente

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:3000
```

Scripts disponíveis:

```bash
npm run build      # build de produção
npm run start      # serve o build
npm run lint       # lint
npm run typecheck  # checagem de tipos (tsc --noEmit)
```

### Docker

```bash
docker compose up --build
```

### Assets

A foto de perfil (`retrato.png`) e o currículo (`curriculo-luis-henrique-gava-junior.pdf`) estão em `public/`.
