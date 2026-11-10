# Architecture

## Routing

Proyek tidak menggunakan React Router. Routing dilakukan manual di `App.jsx` dengan membaca `window.location.pathname`:

```jsx
const path = window.location.pathname.replace(/\/$/, '') || '/'
if (path === '/about-us') return <AboutUs />
if (path === '/services') return <ServicesPage />
if (path === '/portfolio') return <PortfolioPage />
if (path === '/contact') return <ContactPage />
// default: Beranda
```

Navigasi antar halaman menggunakan anchor `<a href="/...">` (full page navigation).

## Sistem Bahasa

- Context: `LanguageContext` dibuat di `language.js`, dikonsumsi via `useLanguage()`.
- Provider: `LanguageProvider.jsx` menyimpan state `language` (default `id`), memuat dari `localStorage` (`bmg-language`), dan menyimpan kembali saat berubah. Juga menyetel `document.documentElement.lang`.
- Switcher: `LanguageSwitcher.jsx` berupa `<select>` dengan opsi `id`, `en`, `zh`.
- Konten dilokalkan langsung di komponen dengan ternary `isIndonesian ? ... : isChinese ? ... : ...`.

Bahasa yang didukung: Indonesia (`id`), Inggris (`en`), Mandarin (`zh`).

## Komponen Chrome

`SiteChrome.jsx` menyediakan `SiteHeader` dan `SiteFooter` bersama yang digunakan oleh halaman Services, Portfolio, dan Contact. Halaman Beranda (`App.jsx`) dan Tentang Kami (`AboutUs.jsx`) memiliki header/footer sendiri.

## Animasi Scroll Reveal

`useScrollReveal.js` menggunakan `IntersectionObserver` untuk menambahkan kelas `is-visible` pada elemen yang masuk viewport. Selector target didefinisikan dalam array `revealSelectors`. Juga menambahkan kelas `page-entering` pada `body`.

## State Management

Tidak ada state management global. State lokal via `useState`/`useMemo` (misalnya filter portofolio, status formulir kontak). Preferensi bahasa disimpan di Context + localStorage.