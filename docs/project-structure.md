# Project Structure

Proyek BMG dikembangkan menggunakan React dengan struktur folder yang memisahkan komponen, halaman, stylesheet, dan aset.

## Struktur Folder

```
project_BMG/
├── index.html                 # HTML entry, meta, title
├── package.json               # Dependensi & skrip
├── vite.config.js             # Konfigurasi Vite
├── README.md                  # README default template
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── main.jsx               # Entry point React
│   ├── App.jsx                # Halaman Beranda + routing manual
│   ├── App.css                # Styling Beranda
│   ├── index.css              # Global styling
│   ├── AboutUs.jsx            # Halaman Tentang Kami
│   ├── AboutUs.css
│   ├── Services.jsx           # Halaman Layanan
│   ├── Services.css
│   ├── Portfolio.jsx          # Halaman Portofolio
│   ├── Portfolio.css
│   ├── Contact.jsx            # Halaman Kontak
│   ├── Contact.css
│   ├── SiteChrome.jsx         # Header & Footer bersama
│   ├── SiteChrome.css
│   ├── LanguageProvider.jsx   # Context bahasa
│   ├── language.js            # createContext + useLanguage
│   ├── LanguageSwitcher.jsx   # Dropdown bahasa
│   ├── useScrollReveal.js     # Animasi scroll reveal
│   └── assets/                # Aset (svg, png)
├── docs/                      # Dokumentasi VitePress
│   ├── .vitepress/
│   │   └── config.js
│   └── *.md
└── dist/                      # Hasil build produksi
```

## File Utama

- `src/main.jsx` – Entry point, membungkus `App` dengan `LanguageProvider` dan `StrictMode`.
- `src/App.jsx` – Komponen utama Beranda sekaligus router manual berdasarkan `window.location.pathname`.
- `src/App.css` – Styling utama Beranda.
- `src/index.css` – Global styling.

## Komponen Halaman

- `AboutUs.jsx` – Halaman Tentang Kami.
- `Services.jsx` – Halaman Layanan.
- `Portfolio.jsx` – Halaman Portofolio.
- `Contact.jsx` – Halaman Kontak.

## Komponen Pendukung

- `SiteChrome.jsx` – `SiteHeader` dan `SiteFooter` bersama, digunakan oleh Services, Portfolio, Contact.
- `LanguageProvider.jsx`, `language.js`, `LanguageSwitcher.jsx` – Sistem multi-bahasa.
- `useScrollReveal.js` – Animasi elemen saat scroll.