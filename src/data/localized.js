/** Pick a localized { id, en, zh } field for the given language. */
export function localized(field, language) {
  return field?.[language] ?? field?.id
}
