# Multi-Language

## Overview

The website supports 3 languages: Indonesian (`id`), English (`en`), and Mandarin (`zh`). User preference is stored in `localStorage` under the key `bmg-language`, defaulting to Indonesian.

## Implementation

### Context & Provider

- `src/language.js` creates `LanguageContext` and the `useLanguage()` hook.
- `src/LanguageProvider.jsx` manages state and persistence.

### Switcher

`src/LanguageSwitcher.jsx` displays a dropdown with options:

| Value | Label |
|-------|-------|
| `id`  | ID |
| `en`  | EN |
| `zh`  | 中文 |

### Content Localization

Each component needing multilingual text uses the pattern:

```jsx
const { language } = useLanguage()
const isIndonesian = language === 'id'
const isChinese = language === 'zh'
// ternary: isIndonesian ? ... : isChinese ? ... : ...
```

### Date Formatting (Portfolio)

`Portfolio.jsx` has a `formatDate` function that localizes month names:

- Indonesian & English: full month names from an array.
- Mandarin: numeric format `YYYY年M月D日`.

### Country Names (Contact Form)

Uses `Intl.DisplayNames` with a locale based on the active language to display country names in the phone code dropdown.