# Scroll Reveal Animation

## Gambaran

`src/useScrollReveal.js` menyediakan animasi muncul (fade/slide) pada elemen saat masuk viewport menggunakan `IntersectionObserver`.

## Cara Kerja

1. Menambahkan kelas `page-entering` pada `body`.
2. Memilih semua elemen yang cocok dengan `revealSelectors`.
3. Menambahkan kelas `reveal-item` pada tiap target.
4. Jika `IntersectionObserver` tidak tersedia, langsung menambahkan `is-visible`.
5. Observer dengan `threshold: 0.12` dan `rootMargin: '0px 0px -36px 0px'` menambahkan `is-visible` saat elemen masuk viewport, lalu berhenti mengamati.

## Selector Target

Beberapa selector yang dianimasikan:

- `.hero-content`, `.about-hero-copy`, `.who-grid > *`, `.about-stat`
- `.service-card`, `.project-card`, `.reason-card`, `.process-step`
- `.portfolio-card`, `.contact-form`, `.contact-detail`, `.map-card`
- dan lainnya (lihat `revealSelectors` di `useScrollReveal.js`).

## Penggunaan

Hook dipanggil di komponen halaman, misalnya di `App.jsx`:

```jsx
useScrollReveal()
```

Styling animasi (transition, transform) didefinisikan di CSS (kelas `.reveal-item` dan `.is-visible`).