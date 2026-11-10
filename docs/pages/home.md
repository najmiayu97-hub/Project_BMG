# Halaman Beranda (`/`)

File: `src/App.jsx`

## Struktur

Halaman beranda terdiri dari beberapa section:

1. **Hero** – Judul besar "WE CREATE EXPERIENCES THAT MATTER.", deskripsi BMG, tombol "Explore Our Work" dan "Let's Work Together".
2. **About** – Penjelasan BMG, statistik (10+ events, 20+ brands, 5+ years, 100K+ audience).
3. **Services** – 4 kartu layanan (Event Planning, Production & Logistics, Media Buying, Digital & Social Media).
4. **Work/Portfolio** – 4 proyek unggulan dengan link ke halaman Portofolio.
5. **Clients** – Logo teks klien: JanSport, Coway, Lumi, Serasa Bakehouse, Tel-Popek.
6. **Why BMG** – 5 alasan (Creative Thinking, Strategic Execution, Integrated Solutions, On-Ground Experience, Result-Driven).
7. **Process** – 6 langkah: Discover, Strategize, Create, Produce, Execute, Amplify.
8. **Testimonial** – Kutipan klien + 3 foto.
9. **CTA** – "HAVE AN EVENT IN MIND?" dengan tombol "Start a Project".
10. **Footer** – Info perusahaan, tautan, layanan, kontak.

## Data

Array data didefinisikan di `App.jsx`: `images`, `services`, `projects`, `reasons`, `process`. Konten dilokalkan per bahasa (ID/EN/ZH).

## Header

Header beranda memiliki nav inline (Home, About Us, Services, Portfolio) dan tombol kontak, berbeda dari `SiteHeader` di halaman lain.