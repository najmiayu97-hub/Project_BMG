# Contact Page (`/contact`)

File: `src/Contact.jsx`

## Header/Footer

Uses `SiteHeader` (active="Contact", contactPage) and `SiteFooter`.

## Form

"Send Us a Message" form with fields:

- Full Name (required)
- Email (required)
- Phone Number (required) with country code dropdown (all countries, default +62)
- Inquiry Type (Event Planning, Event Production, Brand Activation, Media & Digital, Other)
- Message (required)

On submit, the `sent` state becomes `true` and shows a success message. **No data is sent to a backend** — UI feedback only.

## Contact Information

- Address: Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Bandung, Jawa Barat 40112
- Email: hello@bmg.co.id
- Phone/WhatsApp: +62 812-3456-7890
- Business Hours: Monday–Friday, 09:00–18:00 WIB
- Google Maps link to the office location.

## Localization

Labels, placeholders, and messages are localized for ID/EN/ZH. Country names in the phone code dropdown use `Intl.DisplayNames` based on the active language.