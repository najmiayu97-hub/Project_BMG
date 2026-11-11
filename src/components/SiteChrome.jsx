import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from '../i18n/LanguageSwitcher.jsx'
import { useLanguage } from '../i18n/language.js'
import { ButtonLink, Logo } from './ui.jsx'

const routes = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
]

export function SiteHeader() {
  const { language } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'
  const labels = isIndonesian
    ? { Home: 'Beranda', 'About Us': 'Tentang Kami', Services: 'Layanan', Portfolio: 'Event', contact: 'Hubungi Kami' }
    : isChinese
      ? { Home: '首页', 'About Us': '关于我们', Services: '服务', Portfolio: '活动', contact: '联系我们' }
      : { Home: 'Home', 'About Us': 'About Us', Services: 'Services', Portfolio: 'Event', contact: 'Contact Us' }

  const navLabel = isIndonesian ? 'Navigasi utama' : isChinese ? '主导航' : 'Main navigation'
  const openLabel = isIndonesian ? 'Buka menu' : isChinese ? '打开菜单' : 'Open menu'
  const closeLabel = isIndonesian ? 'Tutup menu' : isChinese ? '关闭菜单' : 'Close menu'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap site-header__inner">
        <Logo light />

        <nav className="site-nav" aria-label={navLabel}>
          {routes.map((route) => (
            <NavLink
              key={route.label}
              to={route.href}
              end={route.href === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              {labels[route.label]}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher />
          <ButtonLink to="/contact" variant="accent" size="sm" className="site-header__cta">
            {labels.contact}
          </ButtonLink>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? closeLabel : openLabel}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`}>
        <nav aria-label={navLabel}>
          {routes.map((route) => (
            <NavLink
              key={route.label}
              to={route.href}
              end={route.href === '/'}
              className={({ isActive }) => `mobile-menu__link${isActive ? ' is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {labels[route.label]}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <LanguageSwitcher />
          <ButtonLink to="/contact" variant="accent" block onClick={() => setOpen(false)}>
            {labels.contact}
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
