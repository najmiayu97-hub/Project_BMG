import { Link } from 'react-router-dom'
import { ButtonLink, Eyebrow, Wrap } from '../components/ui.jsx'
import { useLanguage } from '../i18n/language.js'

const links = [
  { key: 'home', to: '/', label: { id: 'Beranda', en: 'Home', zh: '首页' } },
  { key: 'services', to: '/services', label: { id: 'Layanan', en: 'Services', zh: '服务' } },
  { key: 'event', to: '/event', label: { id: 'Event', en: 'Event', zh: '活动' } },
  { key: 'contact', to: '/contact', label: { id: 'Kontak', en: 'Contact', zh: '联系' } },
]

export default function NotFound() {
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'

  const t = {
    eyebrow: isIndonesian ? 'Halaman tidak ditemukan' : isChinese ? '页面未找到' : 'Page not found',
    headline: isIndonesian
      ? <>Acara berjalan <span className="text-accent-400">tanpa kami.</span></>
      : isChinese
        ? <>活动在没有我们<span className="text-accent-400">的情况下进行了。</span></>
        : <>The event went <span className="text-accent-400">on without us.</span></>,
    body: isIndonesian
      ? 'Halaman yang Anda cari tidak ada, sudah dipindahkan, atau tautannya salah. Mari kita kembali ke jalur yang benar.'
      : isChinese
        ? '您要访问的页面不存在、已被移动，或链接有误。让我们回到正轨。'
        : "The page you're looking for doesn't exist, has moved, or the link is wrong. Let's get you back on track.",
    primary: isIndonesian ? 'Kembali ke beranda' : isChinese ? '返回首页' : 'Back to home',
    secondary: isIndonesian ? 'Lihat layanan kami' : isChinese ? '查看我们的服务' : 'See our services',
    quickLinks: isIndonesian ? 'Atau langsung ke' : isChinese ? '或直接前往' : 'Or jump straight to',
  }

  return (
    <section className="page-hero relative" aria-labelledby="notfound-title">
      <svg className="cta-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <path d="M32 7l6.2 18.8L57 32l-18.8 6.2L32 57l-6.2-18.8L7 32l18.8-6.2L32 7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <Wrap className="page-hero__inner">
        <Eyebrow dark>{t.eyebrow}</Eyebrow>

        <p className="notfound__code" aria-hidden="true">404</p>
        <h1 id="notfound-title" className="h2 mt-2 text-white">
          {t.headline}
        </h1>
        <p className="lead lead--onDark mt-4 max-w-[560px]">{t.body}</p>

        <div className="hero__actions">
          <ButtonLink to="/" variant="accent">
            {t.primary}
            <span className="btn__icon" aria-hidden="true">→</span>
          </ButtonLink>
          <ButtonLink to="/services" variant="outlineLight">
            {t.secondary}
          </ButtonLink>
        </div>

        <nav className="mt-10" aria-label={isIndonesian ? 'Tautan cepat' : isChinese ? '快捷链接' : 'Quick links'}>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">{t.quickLinks}</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.key}>
                <Link className="notfound__link" to={link.to}>{link.label[language]}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Wrap>
    </section>
  )
}
