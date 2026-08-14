# DETTAGLIO DOSE — Website

Premium lead-generation website for DETTAGLIO DOSE, an automotive detailing,
ceramic coating, PPF and bike detailing business in Hitech City, Hyderabad.

Built with Next.js (App Router) + TypeScript + Tailwind CSS. Fully
statically generated — no backend, no database. Every enquiry flow opens a
pre-filled WhatsApp message instead of submitting a form.

## Status

MVP — see `DETTAGLIO_DOSE_Business_Profile.md` and
`DETTAGLIO_DOSE_Website_Components_and_Standout_Ideas.md` for the research
and planning behind this build. Content, phone/address, and reviews are
placeholders pending confirmation with the business owner (search the
codebase for `UNVERIFIED` to find every flagged fact).

Stock photography is used in a few spots as clearly-labeled illustrative
images; real project photography should replace it before this goes live
as the business's actual website.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint   # eslint
npm run build  # production build — should produce all static routes
```

## Where things live

- `src/data/site.ts` — single source of truth for business facts (name,
  phone, address, hours, services, ratings). Start here to update content.
- `src/data/gallery.ts` — gallery item metadata.
- `src/app/` — pages (App Router). Each service has its own route under
  `src/app/services/<slug>/page.tsx`, all rendering the shared
  `ServiceDetailTemplate` component with different data.
- `src/components/` — shared UI: header/footer, before/after slider,
  treatment configurator, booking flow, etc.
- `public/images/` — stock/placeholder imagery.

## Deployment

Intended for Vercel. Connect this repo, no environment variables required
for the current feature set.

## Reusable template

This project doubles as the reference implementation for a Claude Code
skill (`detailing-site-template`, at the user level in `~/.claude/skills/`)
that scaffolds new websites for other car detailing / ceramic coating / PPF
businesses. See that skill's `SKILL.md` for the retargeting workflow if
adapting this codebase for a different business.
