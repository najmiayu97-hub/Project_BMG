# Deployment

## Build Produksi (Website)

```bash
npm run build
```

Output statis berada di folder `dist/`. Folder ini dapat di-deploy ke static hosting (Netlify, Vercel, GitHub Pages, Nginx, dll.).

## Preview Build

```bash
npm run preview
```

## Build Dokumentasi

```bash
npm run docs:build
```

Output berada di `docs/.vitepress/dist/` (default VitePress). Preview:

```bash
npm run docs:preview
```

## Catatan

- Website adalah SPA statis tanpa backend; formulir kontak hanya menampilkan feedback UI, tidak mengirim data.
- Routing manual berbasis pathname; pastikan server static hosting mengarahkan request ke `index.html` (fallback SPA) agar route seperti `/about-us` tidak 404. Untuk Vite preview ini sudah ditangani.
- Aset gambar menggunakan URL Unsplash (eksternal) — memerlukan koneksi internet saat runtime.