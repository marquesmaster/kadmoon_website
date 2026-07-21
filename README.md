# Kadmoon, Inc. — Marketing Site

The public marketing site for Kadmoon, Inc., a US custom-software engineering
firm based in Austin, TX. Single-page, static-first, built to deploy on Vercel
at kadmoon.com.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with design tokens as CSS variables
- Fonts via `next/font/google`: Plus Jakarta Sans (display), Inter (body),
  JetBrains Mono (labels/data)
- No database, CMS, or admin. The contact form posts to a form service or
  falls back to `mailto:`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Design system

Tokens live in `app/globals.css` (`:root`) and are wired into Tailwind in
`tailwind.config.ts`.

| Token      | Value     | Use                                    |
| ---------- | --------- | -------------------------------------- |
| `--paper`  | `#FFFFFF` | Base background                        |
| `--mist`   | `#F2F4F8` | Soft section background                |
| `--ink`    | `#0A1628` | Primary text                           |
| `--navy`   | `#0C1D44` | Brand primary, dark sections, CTA      |
| `--accent` | `#EA5A1F` | Warm orange, used sparingly            |
| `--line`   | `#E4E8EF` | Borders / hairlines                    |

Navy dominates; orange is a restrained accent (eyebrow dots, accent phrase,
small highlights). Light theme throughout, with navy full-bleed sections
(stats, contact) for contrast.

## Content

All copy is centralized in `lib/content.ts`. Site-wide config
(name, URL, email) is in `lib/site.ts`.

## Placeholders to confirm before launch

Search the codebase for `TODO(founder)` and `PLACEHOLDER`. The founder must
confirm or replace:

- Stats band figures (`lib/content.ts` → `stats`)
- Both case studies, including NDA framing and translated figures
  (`lib/content.ts` → `work`). Do **not** imply Microsoft was the client
  unless that is true.
- Per-vertical project counts (`lib/content.ts` → `industries`)

The credibility assets come from the parent team's track record and are framed
honestly as "delivered by our engineering team." Swap in the first real US case
as it lands.

## Contact form

The form posts to `/api/contact` (`app/api/contact/route.ts`), which:

- validates input with zod,
- enforces a honeypot and a timing trap,
- rate limits to 5 requests / 10 min per IP (hashed),
- stores the lead in Postgres via Prisma (`prisma/schema.prisma`),
- optionally emails the lead if SMTP env is configured (`lib/mailer.ts`).

## Deploy

Self-hosted on a VPS with Docker Compose (app + dedicated Postgres) behind
nginx with Let's Encrypt TLS. See `DEPLOY.md` for the full runbook and the
required `.env` values.
