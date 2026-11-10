# Getting Started

## Prasyarat

- Node.js (disarankan versi LTS terbaru)
- npm (bundled dengan Node.js)
- Git (opsional, untuk version control)

## Instalasi

1. Masuk ke direktori proyek:

```bash
cd C:\xampp\htdocs\project_BMG
```

2. Instal dependensi:

```bash
npm install
```

## Menjalankan Mode Pengembangan

```bash
npm run dev
```

Vite akan menjalankan dev server dengan HMR (Hot Module Replacement). Buka URL yang ditampilkan di terminal (biasanya `http://localhost:5173`).

## Linting

```bash
npm run lint
```

Menggunakan Oxlint untuk memeriksa kode.

## Build Produksi

```bash
npm run build
```

Output build berada di folder `dist/`.

## Preview Build

```bash
npm run preview
```

## Dokumentasi (VitePress)

```bash
npm run docs:dev      # dev server docs
npm run docs:build    # build docs
npm run docs:preview  # preview docs build
```