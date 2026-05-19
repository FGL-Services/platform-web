# AGENTS.md — platform-web

## Purpose

`platform-web` is the customer-facing surface of FGL-Services. The end-state is a drag-and-drop submission flow that lets customers submit a request, get a quote, pay, and check status. Every dynamic operation is a fetch against `platform-api`. The site itself is statically exported and hosted on GitHub Pages.

## Where this fits in the bigger picture

Request flow: **`platform-web`** → `platform-api` → Pub/Sub → `*-pipeline` → GCS → `platform-api` returns a signed URL → `platform-web` displays it to the customer.

## Tech stack and key dependencies

- Next.js 15+ App Router with `output: 'export'`
- React 19, TypeScript
- Tailwind CSS
- ESLint

## Conventions

- **Folder structure:**
  - `src/app/` — App Router pages (file-based routing).
  - `src/components/` — reusable React components.
  - `src/lib/api.ts` — the only place that calls `platform-api`. Use a fetch wrapper that reads `NEXT_PUBLIC_API_BASE_URL`.
- **Naming:** kebab-case files, PascalCase component exports.
- **Testing:** TODO — Playwright or Vitest+RTL once there's UI worth testing.
- **Error handling:** every `api.ts` call returns a `Result<T>` discriminated union, never throws into rendering code.
- **Logging/observability:** no telemetry yet. If we add one, prefer a privacy-respecting choice (Plausible, Umami).

## What to read first

1. `README.md`
2. `next.config.js` (static export config)
3. `src/lib/api.ts` (the API client)
4. `src/app/page.tsx`
5. `.github/workflows/deploy.yml`

## Roadmap location

- This repo: [ROADMAP.md](./ROADMAP.md)
- Aggregated view: <https://fgl-services.github.io/platform-hub/roadmap/>

## Out of scope

- Server-side rendering, server actions, API routes — static export only.
- Authentication — handled by `platform-api` and (for ops) `platform-admin`.
- Direct database or GCP SDK access.
- Direct Claude calls.

## Cost discipline

Hosting cost is zero (GitHub Pages). API call cost is bounded by `platform-api`. This repo's main lever is keeping the bundle small (matters for mobile users on poor networks more than for the spend column).
