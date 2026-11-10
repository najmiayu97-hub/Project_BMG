import { useLanguage } from './language.js'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-switcher">
      <select
        aria-label="Pilih bahasa / Select language / 选择语言"
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
      >
        <option value="id">ID</option>
        <option value="en">EN</option>
        <option value="zh">中文</option>
      </select>
      <span aria-hidden="true">⌄</span>
    </div>
  )
}
