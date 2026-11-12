import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Check, MapPin, Tag } from 'lucide-react'
import { ButtonLink, Eyebrow, PageHero, Wrap } from '../components/ui.jsx'
import NotFound from './NotFound.jsx'
import { categoryLabels, formatEventDate, getEventBySlug } from '../data/events.js'
import { localized } from '../data/localized.js'
import { useLanguage } from '../i18n/language.js'

const ctaPhoto = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=88'

export default function EventDetail() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'
  const event = getEventBySlug(slug)

  if (!event) return <NotFound />

  const t = (field) => localized(field, language)
  const title = t(event.title)
  const category = t(categoryLabels[event.category])
  const dateLabel = formatEventDate(event.date, language)
  const labels = {
    home: isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home',
    events: isIndonesian ? 'Event' : isChinese ? '活动' : 'Event',
    overview: isIndonesian ? 'Tentang event' : isChinese ? '活动概况' : 'About the event',
    scope: isIndonesian ? 'Cakupan pekerjaan' : isChinese ? '工作范围' : 'Scope of work',
    allEvents: isIndonesian ? 'Semua event' : isChinese ? '全部活动' : 'All events',
  }

  return (
    <>
      <PageHero
        image={event.image}
        breadcrumb={
          <>
            <Link to="/">{labels.home}</Link>
            <span aria-hidden="true">›</span>
            <Link to="/event">{labels.events}</Link>
            <span aria-hidden="true">›</span>
            {title}
          </>
        }
        eyebrow={category}
        title={title}
        lead={t(event.text)}
      />

      {/* Overview + scope ---------------------------------------------- */}
      <section className="section">
        <Wrap>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[20px] shadow-lg">
                <img
                  className="aspect-[4/3] w-full object-cover"
                  src={event.image}
                  alt={title}
                />
              </div>
              <ul className="mt-5 space-y-2 text-[14px] text-muted">
                <li className="flex items-center gap-2">
                  <Calendar size={16} aria-hidden="true" />
                  {dateLabel}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} aria-hidden="true" />
                  {event.place}
                </li>
                <li className="flex items-center gap-2">
                  <Tag size={16} aria-hidden="true" />
                  {category}
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <Eyebrow>{labels.overview}</Eyebrow>
              <h2 className="h2 mt-4">{title}</h2>
              <p className="lead mt-5">{t(event.overview)}</p>
              <h3 className="h3 mt-8">{labels.scope}</h3>
              <ul className="mt-4 space-y-3">
                {t(event.scope).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="icon-badge icon-badge--sm mt-0.5 shrink-0">
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-800">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/event"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                {labels.allEvents}
              </Link>
            </div>
          </div>
        </Wrap>
      </section>

      {/* CTA ----------------------------------------------------------- */}
      <section className="relative isolate py-[62px] text-white max-[680px]:py-[42px]" style={{ '--hero-image': `url(${ctaPhoto})` }}>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(7,14,28,.88),rgba(7,14,28,.76)),var(--hero-image)] bg-cover bg-center" aria-hidden="true" />
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
