# Project Structure

The BMG project is developed with React using a folder structure that separates components, pages, stylesheets, and assets.

## Folder Structure

```
project_BMG/
├── index.html                 # HTML entry, meta, title
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
├── README.md                  # README (default template)
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Home page + manual routing
│   ├── App.css                # Home styling
│   ├── index.css              # Global styling
│   ├── AboutUs.jsx            # About Us page
│   ├── AboutUs.css
│   ├── Services.jsx           # Services page
│   ├── Services.css
│   ├── Portfolio.jsx          # Portfolio page
│   ├── Portfolio.css
│   ├── Contact.jsx            # Contact page
│   ├── Contact.css
│   ├── SiteChrome.jsx         # Shared header & footer
│   ├── SiteChrome.css
│   ├── LanguageProvider.jsx   # Language context
│   ├── language.js            # createContext + useLanguage
│   ├── LanguageSwitcher.jsx   # Language dropdown
│   ├── useScrollReveal.js     # Scroll reveal animation
│   └── assets/                # Assets (svg, png)
├── docs/                      # VitePress documentation
│   ├── .vitepress/
│   │   └── config.js
│   └── *.md
└── dist/                      # Production build output
```

## Main Files

- `src/main.jsx` – Entry point, wraps `App` with `LanguageProvider` and `StrictMode`.
- `src/App.jsx` – Main Home component and manual router based on `window.location.pathname`.
- `src/App.css` – Home styling.
- `src/index.css` – Global styling.

## Page Components

- `AboutUs.jsx` – About Us page.
- `Services.jsx` – Services page.
- `Portfolio.jsx` – Portfolio page.
- `Contact.jsx` – Contact page.

## Supporting Components

- `SiteChrome.jsx` – Shared `SiteHeader` and `SiteFooter`, used by Services, Portfolio, Contact.
- `LanguageProvider.jsx`, `language.js`, `LanguageSwitcher.jsx` – Multi-language system.
- `useScrollReveal.js` – Element animation on scroll.