import { Link } from 'react-router-dom'
import { ArrowRight, Lightbulb, Play, Search, Settings, Target, TrendingUp } from 'lucide-react'
import { ButtonLink, Eyebrow, PageHero, SectionHead, Wrap } from '../components/ui.jsx'
import { localized, services } from '../data/services.js'
import { useLanguage } from '../i18n/language.js'

const heroPhoto = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85'
const ctaPhoto = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=88'

const approachSteps = [
  [Search, '01', 'Discover', 'Memahami tujuan, audiens, dan kebutuhan event Anda.'],
  [Target, '02', 'Strategize', 'Menyusun strategi event dan komunikasi yang tepat.'],
  [Lightbulb, '03', 'Create', 'Mengembangkan konsep, visual, dan pengalaman event yang unik.'],
  [Settings, '04', 'Produce', 'Menyiapkan produksi, logistik, vendor, dan kebutuhan teknis.'],
  [Play, '05', 'Execute', 'Menjalankan event dengan presisi dan koordinasi profesional.'],
  [TrendingUp, '06', 'Amplify', 'Memperluas dampak event melalui media dan kanal digital.'],
]

export default function Services() {
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'

  const t = (field) => localized(field, language)
  const learnMore = isIndonesian ? 'Lihat detail layanan' : isChinese ? '查看服务详情' : 'View service details'

  const displayedSteps = isIndonesian
    ? approachSteps
    : isChinese
      ? [
          [Search, '01', '发现', '了解活动目标、受众与具体需求。'],
          [Target, '02', '规划', '制定合适的活动策略与传播方向。'],
          [Lightbulb, '03', '创意', '打造独特概念、视觉内容和整体活动体验。'],
          [Settings, '04', '制作', '统筹制作、物流、供应商与技术支持。'],
          [Play, '05', '执行', '以专业协调和高标准执行确保活动顺利落地。'],
          [TrendingUp, '06', '推广', '借助媒体与数字渠道扩大活动影响力。'],
        ]
      : [
          [Search, '01', 'Discover', 'Understanding your event goals, audience, and needs.'],
          [Target, '02', 'Strategize', 'Building the right event strategy and communication approach.'],
          [Lightbulb, '03', 'Create', 'Developing a unique concept, visuals, and event experience.'],
          [Settings, '04', 'Produce', 'Preparing production, logistics, vendors, and technical needs.'],
          [Play, '05', 'Execute', 'Delivering your event with precision and professional coordination.'],
          [TrendingUp, '06', 'Amplify', 'Extending event impact through media and digital channels.'],
        ]

  return (
    <>
      <PageHero
        image={heroPhoto}
        breadcrumb={
          <>
            <Link to="/">{isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home'}</Link>
            <span aria-hidden="true">›</span>
            {isIndonesian ? 'Layanan' : isChinese ? '服务' : 'Services'}
          </>
        }
        eyebrow={isIndonesian ? 'Layanan Kami' : isChinese ? '我们的服务' : 'Our Services'}
        title={
          isIndonesian ? (
            <>
              Solusi untuk <span className="text-accent-400">setiap kebutuhan event</span>
            </>
          ) : isChinese ? (
            <>
              为每一场活动<span className="text-accent-400">提供专业解决方案</span>
            </>
          ) : (
            <>
              Solutions for <span className="text-accent-400">every event need</span>
            </>
          )
        }
        lead={
          isIndonesian
            ? 'Kami menyediakan layanan terintegrasi dari hulu ke hilir untuk memastikan setiap event berjalan sukses, berdampak, dan berkesan.'
            : isChinese
              ? '我们提供从前期策划到落地执行的全流程服务，确保每场活动都顺利、有影响力且令人难忘。'
              : 'We provide end-to-end integrated services to make sure every event is successful, impactful, and memorable.'
        }
      />

      {/* Service cards ------------------------------------------------- */}
      <section className="section">
        <Wrap>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const serviceTitle = t(service.title)
              return (
                <Link
                  className="card card--hover group overflow-hidden"
                  key={service.slug}
                  to={`/services/${service.slug}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={service.image}
                      alt={`${serviceTitle} ${isIndonesian ? 'layanan' : isChinese ? '服务' : 'service'}`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" aria-hidden="true" />
                    <span className="chip absolute left-4 top-4 bg-white/92 text-ink-900">
                      {t(service.category)}
                    </span>
                  </div>
                  <div className="p-7">
                    <span className="font-display text-sm font-bold text-brand-600">{service.number}</span>
                    <h3 className="h3 mt-2">{serviceTitle}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{t(service.text)}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-600">
                      {learnMore}
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </Wrap>
      </section>

      {/* Approach ------------------------------------------------------- */}
      <section className="section section--dark">
        <Wrap>
          <SectionHead
            dark
            eyebrow={isIndonesian ? 'Alur Implementasi' : isChinese ? '实施流程' : 'Implementation Flow'}
            title={
              isIndonesian ? (
                <>
                  Dari konsep <span className="text-accent-400">hingga dampak</span>
                </>
              ) : isChinese ? (
                <>
                  从创意<span className="text-accent-400">到落地</span>
                </>
              ) : (
                <>
                  From concept <span className="text-accent-400">to impact</span>
                </>
              )
            }
          />
          <div className="timeline">
            {displayedSteps.map(([StepIcon, number, title, description], index) => {
              const side = index % 2 === 0 ? 'left' : 'right'
              return (
                <div className="timeline__row" key={number}>
                  <div className="timeline__icon">
                    <StepIcon size={18} />
                  </div>
                  <div className={`timeline__card card card--dark p-6 sm:max-w-[430px] ${side === 'left' ? 'timeline__card--left' : 'timeline__card--right'}`}>
                    <span className="text-xs font-bold tracking-[0.14em] text-brand-300">{number}</span>
                    <h3 className="h3 mt-2 text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/62">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Wrap>
      </section>

      {/* CTA ------------------------------------------------------------ */}
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
