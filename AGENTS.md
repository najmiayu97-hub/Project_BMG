# AGENTS.md — project-bmg

## Project

- Stack: React 19 + Vite 8 + Tailwind CSS 4 + React Router 7.
- Source: `src/`, static assets: `public/`, docs (VitePress): `docs/`.
- Commands: `npm run dev`, `npm run build`, `npm run lint` (oxlint), `npm run preview`.

## Installed Skills (UI/UX/Design)

The following skills are installed under `.agents/skills/` and are the **only** approved design-related skill set for this project. Prefer them over ad-hoc guidance:

| Skill | Purpose |
|---|---|
| `frontend-design` | Distinctive, intentional visual design direction; typography, aesthetics. |
| `web-design-guidelines` | Review UI for Web Interface Guidelines (accessibility, best practices). |
| `ui-ux-pro-max` | UI/UX design intelligence: styles, palettes, fonts, UX rules, stacks. |
| `impeccable` | Design/redesign/critique/polish frontend interfaces, design systems, tokens. |
| `design-taste-frontend` | Anti-slop frontend craft for landing/company/product sites. |
| `refactoring-ui` | Fix visual hierarchy, spacing, color, depth, design tokens, dark mode. |
| `ux-heuristics` | Usability audits (Nielsen/Krug), navigation, forms, accessibility. |

When a UI/UX/design task arises, load the most relevant skill above and follow it. Combine skills when needed (e.g. `ui-ux-pro-max` for direction + `refactoring-ui` for polish + `ux-heuristics` for review).

## Restrictions

- **Do NOT create new skills.** Never run `npx skills init`, never author a `SKILL.md`, and never add entries under `.agents/skills/` manually. The skill set above is curated; extending it is out of scope.
- **Do NOT install additional skills without explicit user approval.** If a capability seems missing, ask the user first. Discovery via `npx skills find` is allowed for research, but installation requires confirmation.
- **Do NOT modify or delete installed skill files** under `.agents/skills/`. Treat them as read-only dependencies managed by the Skills CLI.
- If no installed skill fits, proceed with general capabilities and state that limitation rather than inventing a skill.
- Keep changes consistent with the existing React + Tailwind v4 setup; do not introduce new UI frameworks or styling systems without approval.