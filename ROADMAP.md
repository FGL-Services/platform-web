# Roadmap — platform-web

> This file is the source of truth for this repo's roadmap. `platform-hub` aggregates these into the org-wide view.

## Current focus

Bring up the Next.js skeleton with static export deploying cleanly to GitHub Pages.

## Up next

1. Confirm `output: 'export'` build succeeds in CI.
2. Enable Pages and verify deploy from `gh-pages` works.
3. Stub a landing page that explains the services and lists them.
4. Add the drag-and-drop submission shell (UI only, no real upload yet).
5. Wire `src/lib/api.ts` against the `platform-api` `/jobs` endpoint when that lands.

## Backlog

- Stripe Checkout integration for paid jobs.
- Customer "my jobs" page (read-only).
- Custom domain (e.g., app.futuregadgetlabs.com) — owner decides.
- Analytics (Plausible).

## Done

- 2026-05-19: Initial scaffold.

## Won't do

- **SSR / server actions / Next.js API routes.** Static export only.
- **Auth on this app.** Customer auth is a thin token model handled by `platform-api`; we don't run NextAuth here.
