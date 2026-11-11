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

<guardrails>
=== guardrails (safe execution) ===

# Guardrails

Safety-first constraints for agent behavior. Read before any workflow or implementation step. **Guardrails take precedence over workflow rules if they conflict.**

- **Question vs implementation:** if the user asks a question (e.g. "this is a question", "just check"), answer only — never edit files until explicitly told to implement.
- **Scope guard:** do not refactor, delete, or "improve" beyond the asked scope. Spot problems outside scope? Report them; do not fix them silently.
- **Re-scan before editing:** never edit from memory of a file's earlier state — re-read it fresh every time. Content you did not write must be preserved and built on, never discarded, reverted, overwritten, or "fixed"; if it conflicts with the task or your planned change, stop and report instead of silently adapting.
- **Foreign changes:** files shown in `git status` that you did not change belong to the user/another agent — report them, never stash/restore/commit/revert them. Build byproducts (e.g. `npm run build`, `composer install`) also regenerate files — expected noise, never revert or commit unless asked.
- **Destructive operations need an explicit yes:** never run `git rm` on tracked files, `git reset --hard`, `git clean`, `git restore`/`git checkout -- <file>`, force-push, deleting tracked files or dropping published assets without explicit confirmation; when in doubt, list what would be deleted/lost first.
- **Stash guard:** `git stash drop` and `git stash clear` destroy stored work — an explicit yes is required, and show the basis plus a file-stat summary of the stash first; never `git stash` on your own initiative; propose `git stash pop`/`apply` only with the conflict risk stated for a dirty working tree; `git stash list`/`stash show` are safe to read freely.
- **Git remote actions:** never `git push` (or set/push upstreams) without explicit request; commits follow repo style; no `[skip ci]` unless the skip rule below applies.
- **No claim without proof:** never say "done/fixed/working" without verifying evidence (test output, lint/types check, build success, route count, or a browser check for UI).
- **Blocked means stop:** if blocked by a missing business decision or permission, stop and report; do not guess business logic.
- **Language:** chat responses use the user's language (whatever they write); English by default for code, docs, comments, and commit messages; the user's language is allowed only for reports/notes inside internal folders (e.g. `.ignore/`, `.plan/`, `.feature/`).
- **Routing map first (if present):** before editing, open the project's rules index (e.g. `.ai/rules/index.md` and/or `.agents/rules/master.md` if they exist); load a detail leaf only when its routing-map row matches the task; never load the folder wholesale.
- **Push checklist:** before `git push`, show the staged list (what goes up), confirm nothing ignored-but-needed (e.g. `.env`) is sneaking in, and the commit message matches repo conventions.
- **Long sessions end with a handoff:** close with Done / Pending / Decisions-needed so the next session or reviewer can continue without re-deriving context.
- **[skip ci] rule:** add `[skip ci]` (or `[ci skip]`) only when the commit changes nothing CI verifies — docs, markdown, AGENTS.md, skills-lock, `.gitignore`, rules folders. Never for source code, or stack-specific verified paths (e.g. `database/`, `tests/`, `composer.json`/lock, frontend/build files, `.env.example` which CI copies as `.env`, or CI workflow files). Adapt the "never" list to your stack; when in doubt, omit it.
</guardrails>

<project-workflow-rules>
=== project workflow rules ===

# Project Workflow Rules

## 1. Proactive Skill & Tool Usage Policy
- **Autonomous Execution:** You are REQUIRED to proactively scan, load, and execute relevant skills, tools, or MCP servers available in this repository without waiting for explicit instructions or manual `@mention` from the user.
- **Strict Trigger Bypass:** Do not act passively. If a task requires code inspection, database analysis, or testing, immediately invoke the appropriate tool automatically.

## 2. End-to-End Workflow (A to Z)
Whenever you receive a task to create, fix, or modify a feature, execute the following sequential workflow automatically within a single session:
1. **Analysis & Context Scan:** Read and gather the entire code structure of the related module from end-to-end (A–Z) using available tools or file searches before modifying anything.
2. **Implementation:** Write or refactor code strictly adhering to the project's language/framework conventions and existing project patterns.
3. **Dynamic Testing:**
   - Do not blindly rely on or rigidly stick to pre-existing tests if they no longer fit the current context. Instead, adapt, modify, or add new tests tailored specifically to the exact behavior, edge cases, and conditions occurring during the current implementation.
   - Run the updated test suite to verify the changes.
   - If the task involves frontend/view changes, leverage browser tools or preview tools to verify UI layout and ensure no elements are broken or misaligned.
4. **Documentation & Formatting:**
   - Create or update documentation files *only* if explicitly requested by the user.
   - Internal notes/reports go to internal folders (e.g. `.ignore/`, `.plan/`, `.feature/`, or similar).
   - Project documentation deliverables follow the project's docs workflow rules (if defined).

## 3. Communication Style
- Provide clear, structured, and direct summaries focused strictly on the technical changes implemented once the entire end-to-end workflow is complete.

## 4. Delegation & Task Sizing
- Deploy a sub-agent only for genuinely large/heavy tasks (e.g. mass docs updates, building a module end-to-end, cross-file analysis) that benefit from parallelism or isolated context.
- For concise tasks, do the work inline to avoid burning context credits and triggering redundant re-reads.
- Deploy a sub-agent only when the runtime supports it and the current agent acts as an orchestrator that can consume the result efficiently; if the model can complete the task without a sub-agent, do not deploy one. **If the runtime does not support sub-agents, ignore sub-agent guidance entirely and work inline.**

## 5. Internal Notes Hygiene
- Internal notes/reports (e.g. `.ignore/`, `.plan/`, `.feature/`, `docs/.local/`, or similar) must never be committed.
- If such a folder does not exist when needed, create it.
- Ensure the folder contains a `.gitignore` with exactly:
  ```
  *
  !.gitignore
  ```
  If the `.gitignore` is missing or does not match, create/overwrite it with the content above.
- Never place committed deliverables inside these folders.
</project-workflow-rules>

<docs-workflow-rules>
=== docs workflow rules (ADAPTER - customize per project) ===

# Docs Workflow Rules (Adapter)

**This block is a per-project adapter, not a core rule.** Adapt Site & tooling, Location, Language, and Format to your stack before use. The core guardrails and workflow rules remain portable.

Project documentation deliverables (e.g. `docs/`, README, API docs, changelog). Internal working notes are NOT governed here.

- **Site & tooling (ADAPT):** describe the doc tool (e.g. VitePress, Docusaurus, MkDocs) and its config/commands; if no site, use plain Markdown under `docs/`.
- **Scope:** committed documentation deliverables only; never commit build artifacts (e.g. `dist/`, `cache/`) or internal notes (e.g. `docs/.local/`). Internal notes folders must follow Internal Notes Hygiene (create folder + `.gitignore` with `*` / `!.gitignore`) — see project-workflow-rules.
- **Location & structure (ADAPT):** define where docs live and the folder layout (e.g. `architecture/`, `modules/`, `guides/`, `reference/`). If multilingual, specify the mirror path and that new/renamed pages must be registered in each locale's navigation config.
- **Language (ADAPT):** default language for committed docs (e.g. English) and where translations live; internal notes may use the user's language.
- **When to create/update:** only when explicitly requested by the user, or when public behavior/API changes and docs would become stale. Pure copy/styling/layout changes do not require doc updates. Never update docs without an explicit request.
- **On a docs update request:**
  - Deploy a sub-agent if possible to understand the existing structure and apply updates that fit it (see project-workflow-rules "Delegation & Task Sizing"); fall back to inline for small edits. If the runtime does not support sub-agents, work inline.
  - Do not perform direct translation; multilingual parity must be handled deliberately (e.g. via sub-agent or a dedicated pass), not auto-translated inline.
  - Do not update the changelog as part of a docs update.
- **When updating the changelog:**
  - First inspect its structure and conventions before editing.
  - Verify state via `git status` (and related) to confirm what changed and avoid duplicating/stale entries; do not fabricate entries.
- **Format (ADAPT):** Markdown conventions; consistent headings, code blocks with language tags, diagrams in a designated folder; examples must match the codebase.
- **Review:** run the docs build (if any) to catch broken links/dead pages; verify navigation/parity registration; do not leave placeholder content.
- **Delegation:** mass documentation updates may use a sub-agent (see project-workflow-rules "Delegation & Task Sizing"); small single-file edits stay inline. If the runtime does not support sub-agents, work inline.
</docs-workflow-rules>