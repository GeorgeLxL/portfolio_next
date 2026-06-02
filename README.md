# Sato Takeru — Portfolio (Next.js)

Portfolio site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and i18next (EN / JP). Data is sourced from `src/data/resume.ts`.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Pages

- `/` — Hero
- `/about` — Summary + languages
- `/experience` — Timeline (Salesforce → AWS → Rakuten → Freelance → Advantech → Nissan → Dell)
- `/skills` — Categorized skills + bars + tags
- `/education` — Chuo University + coursework + languages
- `/works` — Highlighted projects (Telehealth, RAG search, AI agent, ERP, SaaS, Client Portal)
- `/contact` — Form posting to `/api/contact`

## Style

Same dark theme + green accent as `project1`, with the matching particle / falling-code / terminal-grid backgrounds.
