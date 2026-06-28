# Organic Engine

An independent search engine optimization practice website — built to be a
production-quality example of SEO, AI discoverability, and Playwright-validated
infrastructure. No fabricated reviews, ratings, case results, certifications,
or outcome guarantees.

## Stack

- Next.js 14 (App Router, static export)
- TypeScript
- Tailwind CSS
- No runtime data dependencies — everything pre-rendered at build time

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build & verify

```bash
npm run typecheck    # TypeScript
npm run lint         # ESLint
npm run build        # Static export to out/
npm run audit:routes # Audit every generated HTML for H1, canonical, meta description, valid JSON-LD
npm run serve:export # Serve out/ on port 3000 for manual inspection
npm run test:playwright
```

## AI-guidance engine

This site ships with explicit AI guidance:

| Path | Purpose |
| --- | --- |
| `/llms.txt` | Concise AI manifest |
| `/llms-full.txt` | Detailed AI manifest |
| `/for-ai` | Explicit guidance for AI assistants |
| `/must-haves` | What this site requires of itself |
| `/where-to-go` | Guided map of the site by intent |
| `/playbook` | Site prompt of must-haves |

Before summarizing this site with an AI, read `/for-ai` and `/must-haves`.

## Architecture

- `app/` — App Router pages, route handlers, and global metadata
- `components/` — Shared UI components (Nav, Footer, Breadcrumbs, JsonLd, CTA)
- `content/` — Typed content data (services, industries, locations, resources)
- `lib/` — Site config and SEO helpers
- `public/` — Static files (robots, llms.txt, llms-full.txt, humans.txt, favicon)
- `scripts/audit-routes.mjs` — Build-time route audit
- `tests/seo.spec.ts` — Playwright validation suite

## Domain configuration

The production domain is read from `NEXT_PUBLIC_SITE_URL`. Default is
`https://organic-engine.onrender.com` (a safe placeholder). On Render, set
`NEXT_PUBLIC_SITE_URL` as an env var in the service's Secrets tab.

## Deployment

This repository is set up for manual deploy from Render. After pushing to
`main` (or your default branch), trigger a deploy from the Render dashboard
or Render API.

## Compliance

- No legal, medical, or financial advice rendered by this site
- No fabricated reviews, ratings, testimonials, or case results
- No guaranteed outcomes (rankings, traffic, revenue)
- Privacy policy, terms of service, disclaimer, and cookies page are
  present and accurate
- AI bot policy is explicit in `app/robots.ts` and `/llms.txt`

## License

Proprietary. All rights reserved.