import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SiteHeader } from '../components/SiteChrome.jsx'
import Footer from '../components/Footer.jsx'
import { useLanguage } from '../i18n/language.js'

export default function MainLayout() {
  const location = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])

  const skipLabel = language === 'id' ? 'Lewati ke konten' : language === 'zh' ? '跳到内容' : 'Skip to content'

  return (
    <div className="app-shell">
      <a href="#main" className="skip-link">
        {skipLabel}
      </a>
      <SiteHeader />
      <main id="main" className="page-enter" key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
