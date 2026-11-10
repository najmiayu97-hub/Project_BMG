import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, Eyebrow, PageHero, Wrap } from '../components/ui.jsx'
import { useLanguage } from '../i18n/language.js'

const heroPhoto = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85'

const portfolioItems = [
  { title: { id: 'Bandung Festival 2026', en: 'Bandung Festival 2026', zh: '万隆节 2026' }, category: 'public', date: { from: 19, to: 24, month: 8, year: 2026 }, place: 'Summarecon Mall Bandung', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=850&q=85' },
  { title: { id: 'Pengisi Acara Talkshow & Meet Up', en: 'Talkshow & Meet Up Guest Speaker', zh: '脱口秀与见面会嘉宾' }, category: 'mice', gathering: true, date: { month: 7, year: 2026 }, place: 'Bandung', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=850&q=85' },
  { title: { id: 'Coway Brand Activation', en: 'Coway Brand Activation', zh: 'Coway 品牌推广活动' }, category: 'brand', date: { month: 5, year: 2026 }, place: 'Summarecon Mall Bandung', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=850&q=85' },
  { title: { id: 'Tenant Event Local Brand Day', en: 'Tenant Event Local Brand Day', zh: '本地品牌日租户活动' }, category: 'tenant', date: { month: 4, year: 2026 }, place: 'Summarecon Mall Bandung', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=850&q=85' },
  { title: { id: 'Sera Sa Bakehouse Grand Opening', en: 'Sera Sa Bakehouse Grand Opening', zh: 'Sera Sa Bakehouse 盛大开业' }, category: 'public', date: { month: 3, year: 2026 }, place: 'Bandung', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=850&q=85' },
  { title: { id: 'Lumi Fun Run 5K', en: 'Lumi Fun Run 5K', zh: 'Lumi 5公里欢乐跑' }, category: 'sport', date: { month: 2, year: 2026 }, place: 'Bandung', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=850&q=85' },
  { title: { id: 'Corporate Gathering & Awarding Night', en: 'Corporate Gathering & Awards Night', zh: '企业聚会暨颁奖之夜' }, category: 'corporate', gathering: true, date: { month: 1, year: 2026 }, place: 'Bandung', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=850&q=85' },
  { title: { id: 'Live Streaming Concert', en: 'Live-Streamed Concert', zh: '线上直播音乐会' }, category: 'hybrid', date: { month: 12, year: 2025 }, place: 'Bandung', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=850&q=85' },
]

const filters = ['All Events', 'Mice & Professional', 'Public & Community', 'Corporate', 'Gathering & Team Building', 'Sport Events']

const categoryLabels = {
  public: { id: 'Acara Publik', en: 'Public Event', zh: '公共活动' },
  mice: { id: 'Acara MICE', en: 'MICE Event', zh: 'MICE 活动' },
  brand: { id: 'Aktivasi Merek', en: 'Brand Activation', zh: '品牌推广' },
  tenant: { id: 'Acara Tenant', en: 'Tenant Event', zh: '商户活动' },
  sport: { id: 'Acara Olahraga', en: 'Sport Event', zh: '体育活动' },
  corporate: { id: 'Acara Korporat', en: 'Corporate Event', zh: '企业活动' },
  hybrid: { id: 'Acara Hibrida', en: 'Hybrid Event', zh: '混合式活动' },
}

function matchesFilter(item, filter) {
  if (filter === 'All Events') return true
  if (filter === 'Mice & Professional') return item.category === 'mice' || item.category === 'hybrid'
  if (filter === 'Public & Community') return item.category === 'public' || item.category === 'tenant'
  if (filter === 'Gathering & Team Building') return item.gathering
  if (filter === 'Sport Events') return item.category === 'sport'
  return item.category === 'corporate'
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All Events')
  const [page, setPage] = useState(1)
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'

  const visibleItems = useMemo(() => portfolioItems.filter((item) => matchesFilter(item, filter)), [filter])
  const pageSize = 6
  const totalPages = Math.max(1, Math.ceil(visibleItems.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pagedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return visibleItems.slice(start, start + pageSize)
  }, [visibleItems, currentPage])

  const formatDate = (date) => {
    if (isChinese) {
      const from = date.from ? `${date.from}日` : ''
      const to = date.to ? `${date.to}日` : ''
      const range = date.from && date.to ? `${from}-${to}` : date.from ? from : to
      return `${date.year}年${date.month}月${range}`
    }
    const months = isIndonesian
      ? ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
      : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const monthName = months[date.month - 1]
    if (date.from && date.to) return `${date.from}-${date.to} ${monthName} ${date.year}`
    if (date.from) return `${date.from} ${monthName} ${date.year}`
    return `${monthName} ${date.year}`
  }

  const filterLabels = {
    'All Events': isIndonesian ? 'Semua Event' : isChinese ? '全部活动' : 'All Events',
    'Mice & Professional': isIndonesian ? 'MICE & Profesional' : isChinese ? 'MICE 与专业活动' : 'Mice & Professional',
    'Public & Community': isIndonesian ? 'Publik & Komunitas' : isChinese ? '公众与社群活动' : 'Public & Community',
    Corporate: isIndonesian ? 'Korporat' : isChinese ? '企业活动' : 'Corporate',
    'Gathering & Team Building': isIndonesian ? 'Gathering & Team Building' : isChinese ? '聚会与团队建设' : 'Gathering & Team Building',
    'Sport Events': isIndonesian ? 'Event Olahraga' : isChinese ? '体育活动' : 'Sport Events',
  }

  return (
    <>
      <PageHero
        image={heroPhoto}
        breadcrumb={
          <>
            <Link to="/">{isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home'}</Link>
            <span aria-hidden="true">›</span>
            {isIndonesian ? 'Portofolio' : isChinese ? '作品集' : 'Portfolio'}
          </>
        }
        eyebrow={isIndonesian ? 'Portofolio Kami' : isChinese ? '我们的作品' : 'Our Portfolio'}
        title={
          isIndonesian ? (
            <>
              Event yang <span className="text-accent-400">kami banggakan</span>
            </>
          ) : isChinese ? (
            <>
              我们引以为豪的<span className="text-accent-400">精彩活动</span>
            </>
          ) : (
            <>
              Events we're <span className="text-accent-400">proud of</span>
            </>
          )
        }
        lead={
          isIndonesian
            ? 'Setiap event adalah cerita. Kami menghadirkan ide, perencanaan, dan eksekusi terbaik untuk menciptakan pengalaman yang berkesan.'
            : isChinese
              ? '每一场活动都讲述着独特的故事。我们用创意、规划与执行打造令人难忘的活动体验。'
              : 'Every event tells a story. We bring the best ideas, planning, and execution to create memorable experiences.'
        }
      />

      <section className="section">
        <Wrap>
          {/* Filters -------------------------------------------------- */}
          <div
            className="mb-8 flex gap-2 overflow-x-auto border-b border-line pb-px [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label={isIndonesian ? 'Filter kategori event' : isChinese ? '活动分类筛选' : 'Filter event categories'}
          >
            {filters.map((name) => (
              <button
                type="button"
                key={name}
                aria-pressed={filter === name}
                className={`relative flex-none cursor-pointer px-4 py-3 text-[13px] font-bold whitespace-nowrap transition-colors ${
                  filter === name ? 'text-ink-900' : 'text-muted hover:text-ink-900'
                }`}
                onClick={() => {
                  setFilter(name)
                  setPage(1)
                }}
              >
                {filterLabels[name]}
                {filter === name ? <span className="absolute inset-x-3 bottom-[-1px] h-[2px] rounded-full bg-accent-500" aria-hidden="true" /> : null}
              </button>
            ))}
          </div>

          {/* Grid ----------------------------------------------------- */}
          <AnimatePresence mode="wait">
            <motion.div
              className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3"
              key={`${filter}-${currentPage}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
            >
              {pagedItems.map((item, index) => (
                <motion.article
                  className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[20px] bg-ink-800 text-white"
                  key={item.title.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <img
                    className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                    alt={item.title[language]}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink-950/95 via-ink-950/45 to-transparent" aria-hidden="true" />
                  <span className="chip absolute left-4 top-4 z-[3] bg-accent-500 text-white">
                    {categoryLabels[item.category][language]}
                  </span>
                  <div className="relative z-[2] p-6">
                    <p className="text-[12px] font-medium text-white/70">
                      {item.place} · {formatDate(item.date)}
                    </p>
                    <h3 className="h3 mt-2 text-white">{item.title[language]}</h3>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination ------------------------------------------------ */}
          {totalPages > 1 ? (
            <nav className="mt-12 flex items-center justify-center gap-2" aria-label={isIndonesian ? 'Halaman portofolio' : isChinese ? '作品集页面' : 'Portfolio pages'}>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-[12px] bg-ink-900/5 text-ink-900 transition-colors hover:bg-ink-900/10 disabled:cursor-default disabled:opacity-40"
                disabled={currentPage === 1}
                aria-label={isIndonesian ? 'Halaman sebelumnya' : isChinese ? '上一页' : 'Previous page'}
                onClick={() => setPage((value) => Math.max(1, value - 1))}
              >
                <ChevronLeft size={18} />
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  type="button"
                  key={pageNumber}
                  aria-current={currentPage === pageNumber ? 'page' : undefined}
                  className={`grid h-11 min-w-11 place-items-center rounded-[12px] text-sm font-bold transition-colors ${
                    currentPage === pageNumber ? 'bg-ink-900 text-white' : 'bg-ink-900/5 text-ink-900 hover:bg-ink-900/10'
                  }`}
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-[12px] bg-ink-900/5 text-ink-900 transition-colors hover:bg-ink-900/10 disabled:cursor-default disabled:opacity-40"
                disabled={currentPage === totalPages}
                aria-label={isIndonesian ? 'Halaman berikutnya' : isChinese ? '下一页' : 'Next page'}
                onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
              >
                <ChevronRight size={18} />
              </button>
            </nav>
          ) : null}
        </Wrap>
      </section>

      {/* CTA ---------------------------------------------------------- */}
      <section className="section section--dark cta">
        <svg className="cta-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <path d="M32 7l6.2 18.8L57 32l-18.8 6.2L32 57l-6.2-18.8L7 32l18.8-6.2L32 7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <Wrap>
          <div className="max-w-3xl" data-enter>
            <Eyebrow dark accent>
              {isIndonesian ? 'Ingin hasil yang sama?' : isChinese ? '想要同样的效果？' : 'Want the same result?'}
            </Eyebrow>
            <h2 className="h2 mt-5">
              {isIndonesian ? (
                <>
                  Punya ide event? <span className="text-accent-400">Kita wujudkan.</span>
                </>
              ) : isChinese ? (
                <>
                  有活动想法？<span className="text-accent-400">我们来实现。</span>
                </>
              ) : (
                <>
                  Have an event in mind? <span className="text-accent-400">Let's make it real.</span>
                </>
              )}
            </h2>
            <p className="lead lead--onDark mt-5 max-w-[560px]">
              {isIndonesian
                ? 'Yuk, wujudkan ide event Anda bersama tim profesional kami.'
                : isChinese
                  ? '让我们与专业团队一起把您的活动创意变成现实。'
                  : 'Let our professional team bring your event idea to life.'}
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact" variant="accent">
                {isIndonesian ? 'Mulai proyek' : isChinese ? '开始项目' : 'Start a project'}
                <span className="btn__icon" aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </div>
        </Wrap>
      </section>
    </>
  )
}
