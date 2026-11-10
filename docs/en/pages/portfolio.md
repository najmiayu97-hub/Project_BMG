# Portfolio Page (`/portfolio`)

File: `src/Portfolio.jsx`

## Header/Footer

Uses `SiteHeader` (active="Portfolio") and `SiteFooter`.

## Project Data

8 portfolio items with fields: title (id/en/zh), category, date, place, image, and optional `gathering`.

| Project | Category | Gathering |
|---------|----------|-----------|
| Bandung Festival 2026 | public | - |
| Talkshow & Meet Up Guest Speaker | mice | ✓ |
| Coway Brand Activation | brand | - |
| Tenant Event Local Brand Day | tenant | - |
| Sera Sa Bakehouse Grand Opening | public | - |
| Lumi Fun Run 5K | sport | - |
| Corporate Gathering & Awards Night | corporate | ✓ |
| Live-Streamed Concert | hybrid | - |

## Filters

6 filters: All Events, Mice & Professional, Public & Community, Corporate, Gathering & Team Building, Sport Events. Filtering is applied via `matchesFilter`. Filter labels are localized.

## Date Formatting

The `formatDate` function displays dates according to the language (month names for ID/EN, numeric format for ZH).

## Pagination

Pagination buttons are decorative (they change the filter), not real pagination.

## CTA

"HAVE AN EVENT IN MIND?" section with a button to the Contact page.