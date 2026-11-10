import { Link } from 'react-router-dom'
import { Calendar, Diamond, Eye, Handshake, Star, Target, Users } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import { ButtonLink, PageHero, SectionHead, Wrap } from '../components/ui.jsx'
import { useLanguage } from '../i18n/language.js'

const teamPhoto = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=88'
const activityPhoto = 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=88'
const heroPhoto = 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=85'

export default function AboutUs() {
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'

  const statistics = [
    { Icon: Calendar, end: 10, suffix: '+', label: isIndonesian ? 'Event terlaksana' : isChinese ? '已举办活动' : 'Events executed' },
    { Icon: Handshake, end: 20, suffix: '+', label: isIndonesian ? 'Brand & mitra' : isChinese ? '品牌与合作伙伴' : 'Brands & partners' },
    { Icon: Star, end: 5, suffix: '+', label: isIndonesian ? 'Tahun pengalaman' : isChinese ? '多年行业经验' : 'Years experience' },
    { Icon: Users, end: 100, suffix: 'K+', label: isIndonesian ? 'Audiens terjangkau' : isChinese ? '覆盖受众超 10 万' : 'Audience reached' },
  ]

  const values = isIndonesian
    ? [
        { Icon: Target, title: 'Misi Kami', text: 'Memberikan solusi event yang inovatif, terintegrasi, dan berdampak melalui perencanaan matang, eksekusi profesional, serta komunikasi yang efektif.' },
        { Icon: Eye, title: 'Visi Kami', text: 'Menjadi event organizer terpercaya dan berpengaruh untuk menciptakan pengalaman berkesan dan memberikan nilai lebih bagi klien dan audiens.' },
        { Icon: Diamond, title: 'Nilai Kami', text: 'Kreativitas\nIntegritas\nKolaborasi\nKeunggulan\nBerorientasi Hasil' },
      ]
    : isChinese
      ? [
          { Icon: Target, title: '我们的使命', text: '提供创新、整合且具影响力的活动解决方案，确保每个环节都兼顾策划、执行与传播效果。' },
          { Icon: Eye, title: '我们的愿景', text: '成为值得信赖且具有影响力的活动策划伙伴，持续打造让人难忘并为客户与受众创造价值的活动体验。' },
          { Icon: Diamond, title: '我们的价值观', text: '创意\n诚信\n协作\n卓越\n成果导向' },
        ]
      : [
          { Icon: Target, title: 'Our Mission', text: 'To deliver innovative, integrated, and impactful event solutions through thoughtful planning, professional execution, and effective communication.' },
          { Icon: Eye, title: 'Our Vision', text: 'To become a trusted and influential event organizer, creating memorable experiences and greater value for clients and audiences.' },
          { Icon: Diamond, title: 'Our Values', text: 'Creativity\nIntegrity\nCollaboration\nExcellence\nResult Driven' },
        ]

  return (
    <>
      <PageHero
        image={heroPhoto}
        breadcrumb={
          <>
            <Link to="/">{isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home'}</Link>
            <span aria-hidden="true">›</span>
            {isIndonesian ? 'Tentang Kami' : isChinese ? '关于我们' : 'About Us'}
          </>
        }
        eyebrow={isIndonesian ? 'Tentang Kami' : isChinese ? '关于我们' : 'About Us'}
        title={
          isIndonesian ? (
            <>
              Tim di balik <span className="text-accent-400">event yang hebat</span>
            </>
          ) : isChinese ? (
            <>
              精彩活动<span className="text-accent-400">背后的团队</span>
            </>
          ) : (
            <>
              The people behind <span className="text-accent-400">great events</span>
            </>
          )
        }
        lead={
          isIndonesian
            ? 'Berkah Media Gemilang adalah event planner dan creative partner yang menghadirkan solusi terintegrasi dalam perencanaan, produksi, promosi, hingga eksekusi event.'
            : isChinese
              ? 'Berkah Media Gemilang 是一支为品牌与机构提供全方位活动策划与创意执行的专业团队，覆盖活动规划、制作、宣传与现场执行。'
              : 'Berkah Media Gemilang is an event planning and creative partner delivering integrated solutions in planning, production, promotion, and event execution.'
        }
      />

      {/* Who we are --------------------------------------------------- */}
      <section className="section">
        <Wrap className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHead
              eyebrow={isIndonesian ? 'Siapa Kami' : isChinese ? '我们是谁' : 'Who We Are'}
              title={
                isIndonesian ? (
                  <>
                    Kami tak hanya mengatur event. <span className="text-accent-600">Kami menciptakan pengalaman.</span>
                  </>
                ) : isChinese ? (
                  <>
                    我们不只是策划活动。<span className="text-accent-600">我们创造难忘体验。</span>
                  </>
                ) : (
                  <>
                    We don't just organize events. <span className="text-accent-600">We create experiences.</span>
                  </>
                )
              }
              lead={
                isIndonesian
                  ? 'BMG hadir sebagai partner strategis untuk membantu brand, perusahaan, dan instansi menciptakan event yang berkesan, berdampak, dan relevan dengan tujuan komunikasi mereka.'
                  : isChinese
                    ? 'BMG 为品牌、企业与机构提供全方位策略支持，帮助他们打造富有感染力、兼具影响力且符合传播目标的活动体验。'
                    : 'BMG is a strategic partner helping brands, companies, and institutions create memorable, impactful events aligned with their communication goals.'
              }
            />
          </div>
          <div className="media-frame aspect-[4/3]">
            <img
              src={activityPhoto}
              alt={isIndonesian ? 'Tim dan peserta mengikuti aktivitas team building BMG' : isChinese ? 'BMG 团队与参与者进行团队建设活动' : 'BMG team and participants taking part in a team-building activity'}
              loading="lazy"
            />
          </div>
        </Wrap>
      </section>

      {/* Stats --------------------------------------------------------- */}
      <section className="section--tight section--white border-y border-line">
        <Wrap className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-line bg-line md:grid-cols-4">
          {statistics.map((stat) => (
            <div className="flex flex-col items-center bg-white px-4 py-10 text-center" key={stat.label}>
              <stat.Icon size={20} className="text-brand-600" />
              <strong className="stat__value mt-4">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </strong>
              <span className="stat__label mt-2">{stat.label}</span>
            </div>
          ))}
        </Wrap>
      </section>

      {/* Team ---------------------------------------------------------- */}
      <section className="section">
        <Wrap className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="media-frame aspect-[4/3] lg:order-1">
            <img
              src={teamPhoto}
              alt={isIndonesian ? 'Tim Berkah Media Gemilang berkolaborasi di kantor' : isChinese ? 'Berkah Media Gemilang 团队在办公室协作' : 'Berkah Media Gemilang team collaborating in the office'}
              loading="lazy"
            />
          </div>
          <div>
            <SectionHead
              eyebrow={isIndonesian ? 'Tim Kami' : isChinese ? '我们的团队' : 'Our Team'}
              title={
                isIndonesian ? (
                  <>
                    Orang-orang di balik <span className="text-accent-600">event yang hebat</span>
                  </>
                ) : isChinese ? (
                  <>
                    精彩活动<span className="text-accent-600">背后的团队</span>
                  </>
                ) : (
                  <>
                    People behind <span className="text-accent-600">great events</span>
                  </>
                )
              }
              lead={
                isIndonesian
                  ? 'Tim profesional dengan pengalaman dan dedikasi tinggi yang siap memastikan setiap detail event berjalan dengan sempurna.'
                  : isChinese
                    ? '我们拥有丰富经验和高度责任心的专业团队，确保每一个细节都被精心把控，活动顺利落地。'
                    : 'A professional team with deep experience and dedication, ready to make sure every detail of your event runs perfectly.'
              }
            />
            <ButtonLink href="mailto:hello@bmg.co.id?subject=Meet%20the%20BMG%20team" variant="primary" className="mt-8">
              {isIndonesian ? 'Kenali tim kami' : isChinese ? '认识我们的团队' : 'Meet the team'}
            </ButtonLink>
          </div>
        </Wrap>
      </section>

      {/* Values -------------------------------------------------------- */}
      <section className="section section--white">
        <Wrap>
          <SectionHead
            eyebrow={isIndonesian ? 'Nilai-Nilai Kami' : isChinese ? '我们的价值观' : 'Our Values'}
            title={
              isIndonesian ? (
                <>
                  Prinsip yang kami <span className="text-accent-600">pegang</span>
                </>
              ) : isChinese ? (
                <>
                  我们坚持的<span className="text-accent-600">原则</span>
                </>
              ) : (
                <>
                  What we <span className="text-accent-600">stand for</span>
                </>
              )
            }
          />
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article className="card p-8" key={value.title}>
                <div className="icon-badge">
                  <value.Icon size={22} />
                </div>
                <h3 className="h3 mt-6">{value.title}</h3>
                <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>
    </>
  )
}
