import { useState } from 'react'
import { useLanguage } from '../i18n/language.js'

const pages = [
  { key: 'home', label: 'Beranda', labelEn: 'Home', labelZh: '首页' },
  { key: 'about-us', label: 'Tentang Kami', labelEn: 'About Us', labelZh: '关于我们' },
  { key: 'services', label: 'Layanan', labelEn: 'Services', labelZh: '服务' },
  { key: 'portfolio', label: 'Event', labelEn: 'Event', labelZh: '活动' },
  { key: 'contact', label: 'Kontak', labelEn: 'Contact', labelZh: '联系' },
]

function toNewPath(key) {
  return key === 'home' ? '/' : `/${key}`
}

function toClassicPath(key) {
  return `/classic/#${toNewPath(key)}`
}

export default function Compare() {
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'
  const [page, setPage] = useState('home')
  const [device, setDevice] = useState('desktop')

  const label = (p) => (isIndonesian ? p.label : isChinese ? p.labelZh : p.labelEn)
  const heading = isIndonesian ? 'Perbandingan versi' : isChinese ? '版本对比' : 'Version comparison'
  const subheading = isIndonesian
    ? 'Versi sebelumnya (arsip) di kiri, versi sekarang (redesign) di kanan.'
    : isChinese
      ? '左侧为旧版本（存档），右侧为当前版本（重新设计）。'
      : 'Previous version (archive) on the left, current version (redesigned) on the right.'
  const beforeLabel = isIndonesian ? 'Versi Sebelumnya' : isChinese ? '旧版本' : 'Previous version'
  const afterLabel = isIndonesian ? 'Versi Sekarang' : isChinese ? '当前版本' : 'Current version'
  const deviceLabel = isIndonesian ? 'Tampilan' : isChinese ? '视图' : 'View'
  const desktopLabel = isIndonesian ? 'Desktop' : 'Desktop'
  const mobileLabel = isIndonesian ? 'Ponsel' : isChinese ? '手机' : 'Mobile'

  const frameClass = device === 'mobile' ? 'mx-auto w-full max-w-[390px]' : 'w-full'

  return (
    <section className="section">
      <div className="wrap">
        <h1 className="h2">{heading}</h1>
        <p className="lead mt-3 max-w-[560px]">{subheading}</p>

        {/* Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label={isIndonesian ? 'Pilih halaman' : isChinese ? '选择页面' : 'Choose page'}>
            {pages.map((p) => (
              <button
                key={p.key}
                type="button"
                aria-pressed={page === p.key}
                onClick={() => setPage(p.key)}
                className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-bold transition-colors ${
                  page === p.key
                    ? 'border-ink-900 bg-ink-900 text-white'
                    : 'border-line bg-white text-muted hover:border-ink-900 hover:text-ink-900'
                }`}
              >
                {label(p)}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2" role="group" aria-label={deviceLabel}>
            <button
              type="button"
              aria-pressed={device === 'desktop'}
              onClick={() => setDevice('desktop')}
              className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-bold transition-colors ${
                device === 'desktop' ? 'border-ink-900 bg-ink-900 text-white' : 'border-line bg-white text-muted hover:text-ink-900'
              }`}
            >
              {desktopLabel}
            </button>
            <button
              type="button"
              aria-pressed={device === 'mobile'}
              onClick={() => setDevice('mobile')}
              className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-bold transition-colors ${
                device === 'mobile' ? 'border-ink-900 bg-ink-900 text-white' : 'border-line bg-white text-muted hover:text-ink-900'
              }`}
            >
              {mobileLabel}
            </button>
          </div>
        </div>

        {/* Side-by-side frames */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <figure className="min-w-0">
            <figcaption className="mb-3 flex items-center justify-between gap-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-muted">{beforeLabel}</span>
              <a href={toClassicPath(page)} target="_blank" rel="noreferrer" className="link-more">
                {isIndonesian ? 'Buka penuh' : isChinese ? '打开完整页面' : 'Open full page'}
                <span className="link-more__icon" aria-hidden="true">→</span>
              </a>
            </figcaption>
            <div className={`overflow-hidden rounded-[20px] border border-line bg-white shadow-sm ${frameClass}`}>
              <iframe
                title={`${beforeLabel} — ${label(pages.find((p) => p.key === page))}`}
                src={toClassicPath(page)}
                className="block h-[78vh] min-h-[520px] w-full border-0"
              />
            </div>
          </figure>

          <figure className="min-w-0">
            <figcaption className="mb-3 flex items-center justify-between gap-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-600">{afterLabel}</span>
              <a href={toNewPath(page)} target="_blank" rel="noreferrer" className="link-more">
                {isIndonesian ? 'Buka penuh' : isChinese ? '打开完整页面' : 'Open full page'}
                <span className="link-more__icon" aria-hidden="true">→</span>
              </a>
            </figcaption>
            <div className={`overflow-hidden rounded-[20px] border border-line bg-white shadow-sm ${frameClass}`}>
              <iframe
                title={`${afterLabel} — ${label(pages.find((p) => p.key === page))}`}
                src={toNewPath(page)}
                className="block h-[78vh] min-h-[520px] w-full border-0"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
