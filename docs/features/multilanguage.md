# Multi-Bahasa

## Gambaran

Website mendukung 3 bahasa: Indonesia (`id`), Inggris (`en`), dan Mandarin (`zh`). Preferensi pengguna disimpan di `localStorage` dengan key `bmg-language`, default Indonesia.

## Implementasi

### Context & Provider

- `src/language.js` membuat `LanguageContext` dan hook `useLanguage()`.
- `src/LanguageProvider.jsx` mengelola state dan persistensi.

### Switcher

`src/LanguageSwitcher.jsx` menampilkan dropdown dengan opsi:

| Value | Label |
|-------|-------|
| `id`  | ID |
| `en`  | EN |
| `zh`  | 中文 |

### Lokalisasi Konten

Setiap komponen yang membutuhkan teks multibahasa menggunakan pola:

```jsx
const { language } = useLanguage()
const isIndonesian = language === 'id'
const isChinese = language === 'zh'
// ternary: isIndonesian ? ... : isChinese ? ... : ...
```

### Format Tanggal (Portofolio)

`Portfolio.jsx` memiliki fungsi `formatDate` yang melokalkan nama bulan:

- Indonesia & Inggris: nama bulan lengkap dari array.
- Mandarin: format numerik `YYYY年M月D日`.

### Nama Negara (Formulir Kontak)

Menggunakan `Intl.DisplayNames` dengan locale sesuai bahasa aktif untuk menampilkan nama negara pada dropdown kode telepon.