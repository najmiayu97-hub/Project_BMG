# Deployment

## Production Build (Website)

```bash
npm run build
```

Static output is in the `dist/` folder. This folder can be deployed to static hosting (Netlify, Vercel, GitHub Pages, Nginx, etc.).

## Preview Build

```bash
npm run preview
```

## Documentation Build

```bash
npm run docs:build
```

Output is in `docs/.vitepress/dist/` (VitePress default). Preview:

```bash
npm run docs:preview
```

## Notes

- The website is a static SPA with no backend; the contact form only shows UI feedback and does not send data.
- Routing is manual by pathname; make sure static hosting falls back to `index.html` so routes like `/about-us` do not 404. Vite preview handles this.
- Images use Unsplash URLs (external) — requires an internet connection at runtime.