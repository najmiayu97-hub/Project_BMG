import { useEffect, useState } from 'react'
import { LanguageContext } from './language.js'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('bmg-language')
    if (savedLanguage === 'en' || savedLanguage === 'zh') return savedLanguage
    return 'id'
  })

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('bmg-language', language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}
