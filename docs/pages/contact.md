# Halaman Kontak (`/contact`)

File: `src/Contact.jsx`

## Header/Footer

Menggunakan `SiteHeader` (active="Contact", contactPage) dan `SiteFooter`.

## Formulir

Formulir "Send Us a Message" dengan field:

- Nama Lengkap (required)
- Email (required)
- Nomor Telepon (required) dengan dropdown kode negara (semua negara, default +62)
- Jenis Kebutuhan (Event Planning, Event Production, Brand Activation, Media & Digital, Other)
- Pesan (required)

Saat submit, state `sent` menjadi `true` dan menampilkan pesan sukses. **Tidak ada pengiriman data ke backend** — hanya feedback UI.

## Informasi Kontak

- Alamat: Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Bandung, Jawa Barat 40112
- Email: hello@bmg.co.id
- Telepon/WhatsApp: +62 812-3456-7890
- Jam Operasional: Senin–Jumat, 09.00–18.00 WIB
- Link Google Maps ke lokasi kantor.

## Lokalisasi

Label, placeholder, dan pesan dilokalkan untuk ID/EN/ZH. Nama negara pada dropdown kode telepon menggunakan `Intl.DisplayNames` sesuai bahasa aktif.