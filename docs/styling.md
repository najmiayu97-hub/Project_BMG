# Styling

## Pendekatan

Styling menggunakan CSS biasa (plain CSS), satu file CSS per komponen/halaman:

- `src/index.css` – Global styling.
- `src/App.css` – Styling Beranda.
- `src/AboutUs.css`, `src/Services.css`, `src/Portfolio.css`, `src/Contact.css`
- `src/SiteChrome.css` – Header/footer bersama.

## Tema Warna

Warna utama (dari meta & CSS): dark navy `#0d1833` (theme-color), dengan aksen oranye/biru pada tombol (`.button-orange`, `.button-blue`).

## Kelas Utilitas

- `.container` – wrapper konten.
- `.section`, `.dark-section` – section dengan tema gelap.
- `.button`, `.button-orange`, `.button-blue`, `.button-outline` – tombol.
- `.eyebrow`, `.orange-rule` – elemen dekoratif.
- `.reveal-item`, `.is-visible` – animasi scroll reveal.

## Responsif

Layout menggunakan CSS grid/flexbox. Breakpoint dan responsive rules ada di file CSS masing-masing (misalnya `.desktop-break`, `.contact-desktop-break`).