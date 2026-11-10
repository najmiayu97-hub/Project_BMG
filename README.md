# Berkah Media Gemilang (BMG) Website

Website company profile untuk **Berkah Media Gemilang (BMG)** — agensi perencanaan event dan creative partner berbasis di Bandung.

## Tech Stack

- React 19
- Vite 8
- VitePress 1.6 (dokumentasi)
- Oxlint

## Skrip

```bash
npm run dev          # dev server
npm run build        # build produksi
npm run preview      # preview build
npm run lint         # linting
npm run docs:dev     # docs dev server
npm run docs:build   # build docs
npm run docs:preview  # preview docs
```

## Dokumentasi

Dokumentasi lengkap tersedia di folder `docs/` dan dapat dijalankan dengan VitePress:

```bash
npm run docs:dev
```

## Struktur

Lihat `docs/project-structure.md` dan `docs/architecture.md`.

## Versi Sebelum Redesign (Arsip)

Folder `classic/` berisi source versi BMG sebelum redesign (arsip, tidak ikut dikembangkan). Hasil build-nya disajikan statis di `/classic/` sehingga kedua versi bisa dibandingkan berdampingan:

```bash
npm run build:classic   # build arsip ke public/classic/
npm run build:all       # build arsip + build utama
npm run dev:classic     # dev server arsip (HMR) di http://localhost:5173/classic/
```

Setelah build, halaman perbandingan tersedia di `/bandingkan` (kiri: versi sebelum redesign, kanan: versi sekarang). Versi arsip juga bisa dibuka langsung di `/classic/` (misal `/classic/#/portfolio`).
