import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'
import { ButtonLink, Eyebrow, PageHero, Wrap } from '../components/ui.jsx'
import NotFound from './NotFound.jsx'
import { getServiceBySlug, localized } from '../data/services.js'
import { useLanguage } from '../i18n/language.js'

const ctaPhoto = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=88'

export default function ServiceDetail() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'
  const service = getServiceBySlug(slug)

  if (!service) return <NotFound />

  const t = (field) => localized(field, language)
  const title = t(service.title)
  const serviceWord = isIndonesian ? 'Layanan' : isChinese ? '服务' : 'Service'
  const labels = {
    home: isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home',
    services: isIndonesian ? 'Layanan' : isChinese ? '服务' : 'Services',
    overview: isIndonesian ? 'Gambaran layanan' : isChinese ? '服务概览' : 'Service overview',
    included: isIndonesian ? 'Termasuk dalam layanan' : isChinese ? '包含的服务内容' : "What's included",
    allServices: isIndonesian ? 'Semua layanan' : isChinese ? '全部服务' : 'All services',
    eyebrow: `${serviceWord} ${service.number}`,
  }

  return (
    <>
      <PageHero
        image={service.image}
        breadcrumb={
          <>
            <Link to="/">{labels.home}</Link>
            <span aria-hidden="true">›</span>
            <Link to="/services">{labels.services}</Link>
            <span aria-hidden="true">›</span>
            {title}
          </>
        }
        eyebrow={labels.eyebrow}
        title={title}
        lead={t(service.text)}
      />

      {/* Overview + deliverables -------------------------------------- */}
      <section className="section">
        <Wrap>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[20px] shadow-lg">
                <img
                  className="aspect-[4/5] w-full object-cover"
                  src={service.image}
                  alt={title}
                />
                <span className="chip absolute left-4 top-4 bg-white/92 text-ink-900">
                  {t(service.category)}
                </span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Eyebrow>{labels.overview}</Eyebrow>
              <h2 className="h2 mt-4">{title}</h2>
              <p className="lead mt-5">{t(service.overview)}</p>
              <h3 className="h3 mt-8">{labels.included}</h3>
              <ul className="mt-4 space-y-3">
                {t(service.deliverables).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="icon-badge icon-badge--sm mt-0.5 shrink-0">
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-800">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                {labels.allServices}
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
              {isIndonesian ? 'Siap mulai?' : isChinese ? '准备好了吗？' : 'Ready to start?'}
            </Eyebrow>
            <h2 className="h2 mt-5">
              {isIndonesian ? (
                <>
                  Ceritakan kebutuhan event <span className="text-accent-400">Anda.</span>
                </>
              ) : isChinese ? (
                <>
                  告诉我们您的<span className="text-accent-400">活动需求。</span>
                </>
              ) : (
                <>
                  Tell us about your <span className="text-accent-400">event.</span>
                </>
              )}
            </h2>
            <p className="lead lead--onDark mt-5 max-w-[560px]">
              {isIndonesian
                ? 'Tim kami siap membantu menemukan solusi yang tepat untuk event Anda.'
                : isChinese
                  ? '我们的团队将协助您找到最适合的活动解决方案。'
                  : 'Our team is ready to help you find the right solution for your event.'}
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
