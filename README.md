# Shubham Maheshwari — Portfolio

A dark, "quant-terminal" portfolio built with Next.js (App Router), TypeScript,
Tailwind, and Framer Motion, with an AI chat bubble powered by the Groq API.

## Quick start

```bash
npm install
cp .env.local.example .env.local   # then paste your real GROQ_API_KEY
npm run dev                         # http://localhost:3000
```

## Editing content

**Everything lives in `lib/data.ts`.** Name, roles, projects, experience,
ticker stats, skills, certifications — edit that one file and the whole site
(and the chatbot's knowledge) updates. Search the file for `TODO`:

- Add a square photo to `/public` and set `personal.photo`.
- Add `repo` / `demo` URLs to each project.

The resume download button points at `/public/resume.pdf` (already included).

## The chatbot

- Route: `app/api/chat/route.ts`.
- It builds a system prompt from `data.ts` and answers in the first person as you.
- Default model: `llama-3.1-8b-instant` (fast + cheap). Change it with the
  `CHAT_MODEL` env var (e.g. `llama-3.3-70b-versatile`).
- Your API key stays server-side and is never sent to the browser.

## Deploy (Vercel)

1. Push this folder to GitHub.
2. Import the repo at vercel.com → New Project.
3. Add an env var: `GROQ_API_KEY` = your key. (Optional: `CHAT_MODEL`.)
4. Deploy. The chatbot goes live immediately.

## Design tokens

- Background `#0a0a0a`, accent `#e2ff59`
- Headings: Syne · Labels/code: JetBrains Mono
- All defined in `tailwind.config.ts` + `app/globals.css`
