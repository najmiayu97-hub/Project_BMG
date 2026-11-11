import { Link } from 'react-router-dom'
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { siInstagram, siWhatsapp } from 'simple-icons'
import { useLanguage } from '../i18n/language.js'
import { Logo, Wrap } from './ui.jsx'

export default function Footer() {
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'

  const t = {
    tagline: isIndonesian
      ? 'Event planner & creative partner di Bandung. Kami merancang, memproduksi, dan mengeksekusi event yang berkesan.'
      : isChinese
        ? '万隆的活动策划与创意伙伴。我们策划、制作并执行令人难忘的活动。'
        : 'Event planner & creative partner in Bandung. We plan, produce, and run events that stay with people.',
    links: isIndonesian ? 'Tautan' : isChinese ? '链接' : 'Quick Links',
    services: isIndonesian ? 'Layanan' : isChinese ? '服务' : 'Services',
    contact: isIndonesian ? 'Hubungi Kami' : isChinese ? '联系我们' : 'Contact Us',
    home: isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home',
    about: isIndonesian ? 'Tentang Kami' : isChinese ? '关于我们' : 'About Us',
    servicesNav: isIndonesian ? 'Layanan' : isChinese ? '服务' : 'Services',
    event: isIndonesian ? 'Event' : isChinese ? '活动' : 'Event',
    contactNav: isIndonesian ? 'Kontak' : isChinese ? '联系' : 'Contact',
    address: 'Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Bandung, Jawa Barat',
    rights: isIndonesian ? 'Hak cipta dilindungi.' : isChinese ? '保留所有权利。' : 'All rights reserved.',
    backToTop: isIndonesian ? 'Kembali ke atas' : isChinese ? '返回顶部' : 'Back to top',
  }

  const serviceLinks = [
    isIndonesian ? 'Perencanaan Event' : isChinese ? '活动策划' : 'Event Planning',
    isIndonesian ? 'Produksi & Logistik Event' : isChinese ? '活动制作与物流' : 'Event Production & Logistics',
    'Media Buying',
    isIndonesian ? 'Digital & Media Sosial' : isChinese ? '数字与社交媒体' : 'Digital & Social Media',
  ]

  const pageLinks = [
    { label: t.home, to: '/' },
    { label: t.about, to: '/about-us' },
    { label: t.servicesNav, to: '/services' },
    { label: t.event, to: '/event' },
    { label: t.contactNav, to: '/contact' },
  ]

  return (
    <footer className="bg-ink-950 text-white">
      <Wrap className="footer-main">
        <div className="footer-brand">
          <Logo light />
          <p className="footer-tagline">{t.tagline}</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill={`#${siInstagram.hex}`} aria-hidden="true" focusable="false">
                <path d={siInstagram.path} />
              </svg>
            </a>
            <a href="https://wa.me/6281234567890" aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill={`#${siWhatsapp.hex}`} aria-hidden="true" focusable="false">
                <path d={siWhatsapp.path} />
              </svg>
            </a>
            <a href="mailto:hello@bmg.co.id" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-navs">
          <nav aria-label={t.links}>
            <h2 className="footer-heading">{t.links}</h2>
            <ul className="footer-list">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.services}>
            <h2 className="footer-heading">{t.services}</h2>
            <ul className="footer-list">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link to="/services">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Wrap>

      <Wrap className="footer-contact-band">
        <h2 className="footer-heading">{t.contact}</h2>
        <ul className="footer-contact footer-contact--row">
          <li>
            <MapPin size={16} />
            <span>{t.address}</span>
          </li>
          <li>
            <Phone size={16} />
            <a href="tel:+6281234567890">+62 812-3456-7890</a>
          </li>
          <li>
            <Mail size={16} />
            <a href="mailto:hello@bmg.co.id">hello@bmg.co.id</a>
          </li>
        </ul>
      </Wrap>

      <Wrap className="footer-bottom">
        <p>
          © 2026 Berkah Media Gemilang. {t.rights}{' '}
          <Link to="/bandingkan" className="footer-compare">
            {isIndonesian ? 'Lihat perbandingan versi' : isChinese ? '查看版本对比' : 'View version comparison'}
          </Link>
        </p>
        <button
          type="button"
          className="footer-top"
          aria-label={t.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={18} />
        </button>
      </Wrap>
    </footer>
  )
}
