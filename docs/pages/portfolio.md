# Halaman Portofolio (`/portfolio`)

File: `src/Portfolio.jsx`

## Header/Footer

Menggunakan `SiteHeader` (active="Portfolio") dan `SiteFooter`.

## Data Proyek

8 item portofolio dengan field: title (id/en/zh), category, date, place, image, dan opsional `gathering`.

| Proyek | Kategori | Gathering |
|--------|----------|-----------|
| Bandung Festival 2026 | public | - |
| Talkshow & Meet Up Guest Speaker | mice | ✓ |
| Coway Brand Activation | brand | - |
| Tenant Event Local Brand Day | tenant | - |
| Sera Sa Bakehouse Grand Opening | public | - |
| Lumi Fun Run 5K | sport | - |
| Corporate Gathering & Awards Night | corporate | ✓ |
| Live-Streamed Concert | hybrid | - |

## Filter

6 filter: All Events, Mice & Professional, Public & Community, Corporate, Gathering & Team Building, Sport Events. Filter diterapkan via `matchesFilter`. Label filter dilokalkan.

## Format Tanggal

Fungsi `formatDate` menampilkan tanggal sesuai bahasa (nama bulan ID/EN, format numerik ZH).

## Pagination

Tombol pagination bersifat dekoratif (mengubah filter), bukan pagination nyata.

## CTA

Section "HAVE AN EVENT IN MIND?" dengan tombol ke halaman Kontak.