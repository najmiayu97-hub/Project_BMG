# Perbandingan Konten: Classic (Sebelum Redesign) vs Sekarang

Dokumen ini membandingkan **isi/konten** versi sebelum redesign (folder `classic/`) dengan versi sekarang (`src/`). Tidak ada perubahan kode dibuat berdasarkan dokumen ini.

Ringkas cara pakai: halaman `/bandingkan` untuk melihat berdampingan, atau `/classic/` untuk arsip.

---

## 1. Ringkasan

| Aspek | Classic | Sekarang |
|---|---|---|
| Jumlah halaman | 5 (Beranda, Tentang Kami, Layanan, Portofolio, Kontak) | 6 (sama + `/bandingkan`) |
| Bahasa | ID / EN / ZH | ID / EN / ZH (tidak berubah) |
| Copy | Banyak huruf kapital semua | Sentence case, campuran |
| Fakta & angka | 10+ event, 20+ mitra, 5+ tahun, 100K+ audiens | Sama (tidak diubah) |
| Formulir kontak | Fake success (setSent saja) | Buka aplikasi email (mailto:) + setSent |
| Brand mark | Kotak B (header/footer) | Ikon spark (SVG) |
| Favicon | Logo template ungu (sisa template Vite) | Spark oranye (`#0b1220` / `#FF7A00`) |

---

## 2. Konten yang HILANG di versi sekarang

### 2.1 Testimonial Beranda (bagian "Kata Mereka") — DIHAPUS TOTAL
Ini kehilangan konten terbesar. Yang hilang:
- Kutipan: "BMG membantu kami mengubah konsep event menjadi pengalaman yang melampaui ekspektasi." (EN: "BMG helped us turn our event concept into an experience that exceeded our expectations." ZH: tidak ada di klasik)
- Atribusi: "Manajer Pemasaran — Brand Gaya Hidup Terkemuka" / "Manajer Pemasaran — Leading Lifestyle Brand"
- 3 foto carousel (photo-1540575467063, photo-1517245386807, photo-1505373877841)
- Label "Kata Mereka" / "What They Say"

Dampak: Beranda sekarang tidak punya social proof sama sekali — tidak ada kutipan klien, tidak ada angka "dipercaya X brand", hanya statistik (10+/20+/5+/100K+) dan daftar nama klien.

### 2.2 Marquee logo klien (animasi berjalan)
Classic: marquee otomatis bergerak berulang — JANSPORT (hitam tebal), coway (lowercase tebal), Lumi (vertikal kecil), Serasa Bakehouse (italic serif), Tel-Popek (dengan glyph "?").

Sekarang: grid 5 nama tanpa animasi sebagai teks biasa. Dua hal hilang sekaligus: (a) animasinya, (b) diferensiasi gaya tipografi tiap logo — sekarang semua teks seragam.

Catatan kesalahan baru: nama ditulis **"JanSports"** (dengan S di belakang). Classic menulis "JANSPORT". Merek resminya "JanSport".

### 2.3 Kolom `<Link>` mati "Lihat Proyek →" di kartu Portofolio
Classic: tiap kartu portofolio menampilkan tautan "Lihat Proyek →" (tanpa `to`, jadi link mati).

Sekarang: dihapus (tautan mati tidak layak), diganti baris `tempat · tanggal` **di kartu yang sama**. Secara konten ini bukan penghapusan, tapi info tanggal+tempat sekarang tampil (sebelumnya hanya title + kategori).

### 2.4 Paragraf tersembunyi SEO "Berkah Media Gemilang"
Classic Beranda punya `<p className="hidden">Berkah Media Gemilang</p>`.

Sekarang: dihapus (teks tersembunyi tidak membantu SEO dan membingungkan pembaca layar).

### 2.5 CTA Beranda memakai ulang hero image
Classic: section "PUNYA IDE EVENT?" memakai foto konser yang sama dengan hero (overlay lebih gelap).

Sekarang: tidak memakai foto; jadi blok gelap + spark watermark.

---

## 3. Konten yang BARU bertambah

### 3.1 Section "Cerita di Lapangan" (Beranda)
Menambah section baru dengan 3 foto (foto-1540575467063, 1517245386807, 1505373877841 — foto testimonial lama dipakai ulang sebagai foto lapangan) dan copy baru:
- ID: "Detail yang rapi, momen yang terasa."
- EN: "Neat detail, felt moments."
- ZH: "细节井然，瞬间动人。"
- Plus lead ID/EN/ZH dan tombol "Lihat semua karya".

### 3.2 Hero sekarang punya "fakta cepat"
Di bawah tombol CTA hero Beranda: 3 angka besar (10+, 20+, 5+) + label. Classic tidak punya ini di hero.

### 3.3 Eyebrow "Event planner & creative partner" di hero Beranda
Label kecil di atas headline. Classic tidak punya.

### 3.4 Section CTA di halaman Layanan
Classic: halaman Layanan berakhir di timeline proses.

Sekarang: ditambah CTA gelap "Siap mulai? Ceritakan kebutuhan event Anda." + tombol "Hubungi kami".

### 3.5 Link "Lihat perbandingan versi" di footer

### 3.6 Halaman `/bandingkan` (pembuatan ini)

---

## 4. Copy yang BERUBAH (bukan hilang, tapi berbeda kata)

| Lokasi | Classic (ID) | Sekarang (ID) |
|---|---|---|
| Hero Beranda H1 | "KAMI BUAT PENGALAMAN BERMAKNA." (uppercase) | "Kami menciptakan pengalaman event yang bermakna." (sentence case) — kata berubah, bukan cuma huruf |
| Hero Beranda sub | "Berkah Media Gemilang adalah event planner dan creative partner yang menghadirkan solusi terintegrasi..." | Sama, tetap dipertahankan |
| Section Beranda "Why BMG" | "Mengapa BMG?" + "5 alasan" tampil tanpa judul utama | "Mengapa BMG?" + judul baru "Alasan memilih kami" |
| Beranda CTA bawah | "PUNYA IDE EVENT?" + "Yuk, wujudkan ide event Anda bersama tim profesional kami. Konsultasikan kebutuhan Anda sekarang!" + tombol "Mulai Proyek" | "Punya ide event? Kita wujudkan." + "Konsultasikan kebutuhan Anda bersama tim profesional kami." + tombol "Mulai proyek" (huruf kecil) |
| Hero Tentang Kami | "TENTANG KAMI" + garis aksen + lead | Gambar hero (team building) + breadcrumb "Beranda › Tentang Kami" + judul baru "Tim di balik event yang hebat" — **judul lama diganti total** |
| Hero Layanan H1 | "SOLUSI UNTUK SETIAP KEBUTUHAN EVENT" (uppercase) | "Solusi untuk setiap kebutuhan event" (sentence case) — kata sama |
| Hero Portofolio H1 | "EVENT YANG KAMI BANGGAKAN" | "Event yang kami banggakan" — kata sama |
| Card Portofolio | Menampilkan `Lihat Proyek →` | Menampilkan `Summarecon Mall Bandung · 19-24 Agustus 2026` |
| CTA Portofolio | "PUNYA IDE EVENT?" + tombol "Mulai Proyek" oranye | "Punya ide event? Kita wujudkan." |
| Hero Kontak | "HUBUNGI KAMI" | "Hubungi kami" |
| Submit sukses | "Pesan Terkirim ✓" lalu permanen "Terima kasih! Tim kami akan segera menghubungi Anda." | "Kami membuka aplikasi email Anda — kirim pesan tersebut untuk menghubungi tim kami." |
| Footer tagline | "Berkah Media Gemilang adalah event planner dan creative partner yang menghadirkan solusi terintegrasi untuk event Anda." | **Ditulis ulang**: "Event planner & creative partner di Bandung. Kami merancang, memproduksi, dan mengeksekusi event yang berkesan." |
| Label judul section semua halaman | uppercase letter-spacing | sentence case (dibuat design system) |

Catatan: EN dan ZH mengikuti penulisan ulang di atas (bukan terjemahan literal dari klasik di beberapa titik — perlu diverifikasi kalau konsistensi lintas bahasa penting).

---

## 5. Data & fakta yang berubah / salah

### 5.1 Kode panggilan negara — 3 SALAH (error rekonstruksi, bukan keputusan desain)
| Negara | Classic | Sekarang | Fakta |
|---|---|---|---|
| Bulgaria | +359 | **+351** (itu kode Portugal, duplikat) | +359 |
| Bahrain | +973 | **+974** (itu kode Qatar, duplikat) | +973 |
| Somalia | +252 | **+258** (itu kode Mozambique) | +252 |

241 entri kode panggilan lain identik. Ini perlu diperbaiki jika Anda setuju (belum dilakukan).

### 5.2 Nama klien
"JANSPORT" (classic) → **"JanSports"** (sekarang). Merek resmi: **JanSport**.

### 5.3 Angka & statistik — TIDAK BERUBAH
10+ event terlaksana, 20+ brand & mitra, 5+ tahun pengalaman, 100K+ audiens terjangkau — sama di Beranda & Tentang Kami.

### 5.4 Alamat, telepon, email, jam operasional — TIDAK BERUBAH
- Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Bandung, Jawa Barat 40112
- +62 812-3456-7890
- hello@bmg.co.id
- Senin–Jumat 09.00–18.00 WIB

### 5.5 Daftar 8 portofolio (judul, tanggal, tempat, foto) — TIDAK BERUBAH
Hanya urutan/presentasi yang berubah (heading H2→H3, kartu tanpa link mati).

---

## 6. Foto yang dipakai — perbedaan

| Foto | Classic | Sekarang |
|---|---|---|
| Hero Beranda (konser, photo-1501386761578) | dipakai di hero + CTA | hanya hero (CTA sudah tidak pakai foto) |
| Team building (photo-1511632765486) | Tentang Kami — "Siapa Kami" | **Tentang Kami — hero DAN "Siapa Kami" (sama, 2x di halaman yang sama)** |
| Kantor kolaborasi (photo-1521737711867) | Beranda About + Tentang Kami Team | sama |
| Konferensi (photo-1540575467063) | Beranda testimonial 1 + Kontak hero | **Beranda "Cerita di Lapangan" + Kontak hero** |
| Konferensi meja (photo-1517245386807) | testimonial 2 + Portofolio (Corporate Gathering) | Field Stories + Portfolio |
| Pembicara (photo-1505373877841) | testimonial 3 | Field Stories |

Catatan: foto hero kontak dan foto beranda Field Stories (#3) memakai sumber yang sama dengan testimonial lama.

---

## 7. Struktur yang tidak berubah

- Peran header/nav, 5 rute utama (`/`, `/about-us`, `/services`, `/portfolio`, `/contact`)
- i18n 3 bahasa (ID default, tersimpan di localStorage `bmg-language`)
- Semua teks layanan (4 di Beranda, 6 di Layanan, 6 filter Portofolio) & kategori — kata-katanya sama
- Nilai/misi/visi, proses 6 langkah (Discover→Amplify), 5 alasan (Creative Thinking→Result-Driven)
- Formulir kontak: field identik (+ daftar negara 238, 3 salah seperti di 5.1)
- Foto alamat/map, tombol Google Maps

---

## 8. Hal yang perlu diputuskan (belum diimplementasikan)

1. **Testimonial dihapus** — apakah dikembalikan (misal sebagai section terpisah atau digabung ke Field Stories), atau memang tidak lagi diinginkan? Datanya (quote, atribusi, 3 foto) masih ada di `classic/src/pages/Home.jsx`.
2. **3 kode negara salah** — perbaiki atau biarkan?
3. **Nama klien "JanSports"** — perbaiki jadi "JanSport"?
4. **Foto team building dipakai 2x** di Tentang Kami (hero + Siapa Kami) — ganti salah satunya?
5. **Footer tagline ditulis ulang** — setuju dengan versi baru, atau kembalikan kalimat klasik?
6. **Judul hero Tentang Kami** diganti dari "TENTANG KAMI" — apakah oke?
7. **Info tanggal+tempat di kartu Portofolio** sekarang selalu tampil — setuju, atau kembalikan gaya "Lihat Proyek"?
8. Perilaku submit kontak berubah dari fake-success menjadi **mail client** — ini bukan pengiriman nyata (mailto), apakah ingin seperti itu atau ada endpoint asli?
