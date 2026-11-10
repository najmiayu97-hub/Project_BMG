# Architecture

## Routing

The project does not use React Router. Routing is done manually in `App.jsx` by reading `window.location.pathname`:

```jsx
const path = window.location.pathname.replace(/\/$/, '') || '/'
if (path === '/about-us') return <AboutUs />
if (path === '/services') return <ServicesPage />
if (path === '/portfolio') return <PortfolioPage />
if (path === '/contact') return <ContactPage />
// default: Home
```

Navigation between pages uses anchor tags `<a href="/...">` (full page navigation).

## Language System

- Context: `LanguageContext` created in `language.js`, consumed via `useLanguage()`.
- Provider: `LanguageProvider.jsx` stores the `language` state (default `id`), loads from `localStorage` (`bmg-language`), and saves again on change. It also sets `document.documentElement.lang`.
- Switcher: `LanguageSwitcher.jsx` is a `<select>` with options `id`, `en`, `zh`.
- Content is localized directly in components using the ternary `isIndonesian ? ... : isChinese ? ... : ...`.

Supported languages: Indonesian (`id`), English (`en`), Mandarin (`zh`).

## Chrome Components

`SiteChrome.jsx` provides a shared `SiteHeader` and `SiteFooter` used by the Services, Portfolio, and Contact pages. The Home (`App.jsx`) and About Us (`AboutUs.jsx`) pages have their own header/footer.

## Scroll Reveal Animation

`useScrollReveal.js` uses `IntersectionObserver` to add the `is-visible` class to elements entering the viewport. Target selectors are defined in the `revealSelectors` array. It also adds the `page-entering` class to `body`.

## State Management

There is no global state management. Local state via `useState`/`useMemo` (e.g., portfolio filter, contact form status). Language preference is stored in Context + localStorage.