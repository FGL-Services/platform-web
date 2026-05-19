# platform-web

> Customer-facing app for FGL-Services. Next.js + TypeScript + Tailwind, static export to GitHub Pages.

[![Status](https://img.shields.io/badge/status-scaffolding-yellow)]()

Part of the [FGL-Services](https://github.com/FGL-Services) platform. Engineering hub: [platform-hub](https://github.com/FGL-Services/platform-hub).

## What this repo does

The customer-facing surface of FGL-Services. The end-state is a drag-and-drop request submission flow: a customer drops their input (a repo URL, a CSV, etc.), gets a quote, pays, and tracks their job. All dynamic work is handled by `platform-api` over HTTP.

Initial scaffold is a placeholder landing page.

## What this repo does NOT do

- No SSR, no API routes — static export only. Anything dynamic happens via `fetch` to `platform-api`.
- No backend secrets. Everything in this repo is public.
- No admin/internal views — see [platform-admin](https://github.com/FGL-Services/platform-admin).
- No marketing/brand pages — see <https://futuregadgetlabs.com>.

## Tech stack

- Next.js 15+ (App Router)
- React 19
- TypeScript
- Tailwind CSS
- ESLint
- `output: 'export'` for static export → `out/`
- Deployed to GitHub Pages from the `gh-pages` branch.

## Local development

```sh
npm install
npm run dev
# http://localhost:3000
```

## Deployment

GitHub Actions builds and deploys to `gh-pages` on push to `main`. Pages must be enabled in repo settings (Settings → Pages → Source: `gh-pages`).

If a custom domain is configured later, drop `basePath` from `next.config.js` and add a `CNAME` file to `public/`.

## Related repos

- [platform-api](https://github.com/FGL-Services/platform-api) — the backend this app talks to. Configure via `NEXT_PUBLIC_API_BASE_URL`.
- [platform-admin](https://github.com/FGL-Services/platform-admin) — sister Next.js app for the owner's ops dashboard.

## Roadmap

- This repo: [ROADMAP.md](./ROADMAP.md)
- Org-wide: <https://fgl-services.github.io/platform-hub/roadmap/>
