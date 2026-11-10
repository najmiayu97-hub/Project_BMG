# Configuration

## Vite (`vite.config.js`)

Minimal configuration:

```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
})
```

Only the React plugin is enabled (Oxc-based). No path aliases or special configuration.

## HTML Entry (`index.html`)

- `lang="id"`
- Favicon: `/favicon.svg`
- Theme color: `#0d1833`
- Meta description: "Berkah Media Gemilang — event planner dan creative partner dengan solusi event terintegrasi."
- Title: "BMG | Berkah Media Gemilang"
- Root div `#root`, script module `/src/main.jsx`.

## Package (`package.json`)

- `name`: `project-bmg`
- `version`: `0.0.0`
- `type`: `module`
- `private`: true

Main dependencies: `react`, `react-dom` (^19.2.8). Dev: `@types/react`, `@types/react-dom`, `@vitejs/plugin-react`, `oxlint`, `vite`, `vitepress`.

## Scripts

| Script | Command |
|-------|---------|
| `dev` | `vite` |
| `build` | `vite build` |
| `lint` | `oxlint` |
| `preview` | `vite preview` |
| `docs:dev` | `vitepress dev docs` |
| `docs:build` | `vitepress build docs` |
| `docs:preview` | `vitepress preview docs` |

## VitePress Config (`docs/.vitepress/config.js`)

Sets title, description, nav, sidebar, and socialLinks. See the file for details.