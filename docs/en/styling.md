# Styling

## Approach

Styling uses plain CSS, one CSS file per component/page:

- `src/index.css` – Global styling.
- `src/App.css` – Home styling.
- `src/AboutUs.css`, `src/Services.css`, `src/Portfolio.css`, `src/Contact.css`
- `src/SiteChrome.css` – Shared header/footer.

## Color Theme

Main colors (from meta & CSS): dark navy `#0d1833` (theme-color), with orange/blue accents on buttons (`.button-orange`, `.button-blue`).

## Utility Classes

- `.container` – content wrapper.
- `.section`, `.dark-section` – section with dark theme.
- `.button`, `.button-orange`, `.button-blue`, `.button-outline` – buttons.
- `.eyebrow`, `.orange-rule` – decorative elements.
- `.reveal-item`, `.is-visible` – scroll reveal animation.

## Responsive

Layout uses CSS grid/flexbox. Breakpoints and responsive rules live in each CSS file (e.g., `.desktop-break`, `.contact-desktop-break`).