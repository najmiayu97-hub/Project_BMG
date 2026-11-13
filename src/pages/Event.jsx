import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, Eyebrow, PageHero, Wrap } from '../components/ui.jsx'
import { categoryLabels, events, formatEventDate } from '../data/events.js'
import { localized } from '../data/localized.js'
import { useLanguage } from '../i18n/language.js'

const heroPhoto = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85'

const MotionLink = motion.create(Link)

const filters = ['All Events', 'Mice & Professional', 'Public & Community', 'Corporate', 'Gathering & Team Building', 'Sport Events']

function matchesFilter(item, filter) {
  if (filter === 'All Events') return true
  if (filter === 'Mice & Professional') return item.category === 'mice' || item.category === 'hybrid'
  if (filter === 'Public & Community') return item.category === 'public' || item.category === 'tenant'
  if (filter === 'Gathering & Team Building') return item.gathering
  if (filter === 'Sport Events') return item.category === 'sport'
  return item.category === 'corporate'
}

export default function Event() {
  const [filter, setFilter] = useState('All Events')
  const [page, setPage] = useState(1)
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'

  const visibleItems = useMemo(() => events.filter((item) => matchesFilter(item, filter)), [filter])
  const pageSize = 6
  const totalPages = Math.max(1, Math.ceil(visibleItems.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pagedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return visibleItems.slice(start, start + pageSize)
  }, [visibleItems, currentPage])

  const learnMore = isIndonesian ? 'Lihat detail event' : isChinese ? '查看活动详情' : 'View event details'

  const formatDate = (date) => formatEventDate(date, language)

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
            {isIndonesian ? 'Event' : isChinese ? '活动' : 'Event'}
          </>
        }
        eyebrow={isIndonesian ? 'Event Kami' : isChinese ? '我们的活动' : 'Our Events'}
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
            className="mb-4 md:mb-8 flex gap-2 overflow-x-auto border-b border-line pb-px [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
              {pagedItems.map((item, index) => {
                const itemTitle = localized(item.title, language)
                return (
                  <MotionLink
                    className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[20px] bg-ink-800 text-white"
                    key={item.slug}
                    to={`/event/${item.slug}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <img
                      className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={item.image}
                      alt={itemTitle}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink-950/95 via-ink-950/45 to-transparent" aria-hidden="true" />
                    <span className="chip absolute left-4 top-4 z-[3] bg-accent-500 text-white">
                      {localized(categoryLabels[item.category], language)}
                    </span>
                    <div className="relative z-[2] p-6">
                      <p className="text-[12px] font-medium text-white/70">
                        {item.place} · {formatDate(item.date)}
                      </p>
                      <h3 className="h3 mt-2 text-white">{itemTitle}</h3>
                      <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white/70 transition-colors group-hover:text-white">
                        {learnMore}
                        <ArrowRight size={14} aria-hidden="true" />
                      </span>
                    </div>
                  </MotionLink>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Pagination ------------------------------------------------ */}
          {totalPages > 1 ? (
            <nav className="mt-12 flex items-center justify-center gap-2" aria-label={isIndonesian ? 'Halaman event' : isChinese ? '活动页面' : 'Event pages'}>
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
      <section className="relative isolate text-white py-[62px] max-[680px]:py-[42px]" style={{ '--hero-image': `url(https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2200&q=88)` }}>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(7,14,28,.83),rgba(7,14,28,.72)),var(--hero-image)] bg-center bg-cover" />
        <Wrap className="relative z-[1]">
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
                {isIndonesian ? 'Hubungi Kami' : isChinese ? '联系我们' : 'Contact Us'}
                <span className="btn__icon" aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </div>
        </Wrap>
      </section>
    </>
  )
}
