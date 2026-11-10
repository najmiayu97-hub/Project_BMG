# Scroll Reveal Animation

## Overview

`src/useScrollReveal.js` provides reveal (fade/slide) animations for elements entering the viewport using `IntersectionObserver`.

## How It Works

1. Adds the `page-entering` class to `body`.
2. Selects all elements matching `revealSelectors`.
3. Adds the `reveal-item` class to each target.
4. If `IntersectionObserver` is unavailable, adds `is-visible` directly.
5. An observer with `threshold: 0.12` and `rootMargin: '0px 0px -36px 0px'` adds `is-visible` when an element enters the viewport, then stops observing it.

## Target Selectors

Some animated selectors:

- `.hero-content`, `.about-hero-copy`, `.who-grid > *`, `.about-stat`
- `.service-card`, `.project-card`, `.reason-card`, `.process-step`
- `.portfolio-card`, `.contact-form`, `.contact-detail`, `.map-card`
- and others (see `revealSelectors` in `useScrollReveal.js`).

## Usage

The hook is called in page components, for example in `App.jsx`:

```jsx
useScrollReveal()
```

Animation styling (transitions, transforms) is defined in CSS (classes `.reveal-item` and `.is-visible`).