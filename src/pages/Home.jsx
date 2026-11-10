import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  PlayCircle,
  Search,
  Settings,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Volume2,
  Wrench,
} from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import { ButtonLink, Eyebrow, SectionHead, Wrap } from '../components/ui.jsx'
import { useLanguage } from '../i18n/language.js'

const images = {
  hero: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2200&q=88',
  about: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85',
  festival: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=85',
  speaker: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85',
  brand: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85',
  tenant: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85',
  field1: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=85',
  field2: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=85',
  field3: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=85',
}

const services = [
  { icon: 'calendar', title: 'Event Planning', text: 'Perencanaan strategis dan konsep kreatif yang dirancang untuk menciptakan event bermakna dan berkesan.' },
  { icon: 'tools', title: 'Event Production & Logistics', text: 'Manajemen produksi end-to-end, pengadaan vendor, venue, peralatan, hingga eksekusi di lapangan.' },
  { icon: 'sound', title: 'Media Buying', text: 'Penempatan media yang tepat untuk memaksimalkan jangkauan dan efektivitas promosi event.' },
  { icon: 'phone', title: 'Digital & Social Media Amplification', text: 'Meningkatkan awareness event melalui kampanye digital, konten kreatif, dan engagement audiens.' },
]

const projects = [
  { image: images.festival, title: { id: 'Bandung Festival 2026', en: 'Bandung Festival 2026', zh: '万隆节 2026' }, subtitle: { id: 'Festival', en: 'Festival', zh: '节庆活动' } },
  { image: images.speaker, title: { id: 'Pengisi Acara', en: 'Guest Speaker', zh: '活动嘉宾' }, subtitle: { id: 'Talkshow & Meet Up', en: 'Talkshow & Meet Up', zh: '脱口秀与见面会' } },
  { image: images.brand, title: { id: 'Brand Activation', en: 'Brand Activation', zh: '品牌推广活动' }, subtitle: { id: 'Summarecon Mall Bandung', en: 'Summarecon Mall Bandung', zh: 'Summarecon Mall Bandung' } },
  { image: images.tenant, title: { id: 'Tenant Event', en: 'Tenant Event', zh: '商户活动' }, subtitle: { id: 'Local Brand Day', en: 'Local Brand Day', zh: '本地品牌日' } },
]

const reasons = [
  { icon: 'bulb', title: 'Creative Thinking', text: 'Kami menghadirkan ide kreatif yang relevan dan berkesan.' },
  { icon: 'play', title: 'Strategic Execution', text: 'Perencanaan matang dan eksekusi tepat sasaran untuk hasil maksimal.' },
  { icon: 'briefcase', title: 'Integrated Solutions', text: 'Semua kebutuhan event dari planning, production, hingga digital dalam satu ekosistem.' },
  { icon: 'people', title: 'On-Ground Experience', text: 'Tim berpengalaman yang siap menghadapi setiap tantangan di lapangan.' },
  { icon: 'trend', title: 'Result-Driven', text: 'Setiap event kami rancang untuk menciptakan dampak dan nilai yang terukur.' },
]

const process = [
  [Search, '01', 'Discover', 'Memahami tujuan, audiens, dan ekspektasi Anda.'],
  [Target, '02', 'Strategize', 'Menyusun strategi event dan pendekatan komunikasi yang tepat.'],
  [Lightbulb, '03', 'Create', 'Mengembangkan konsep, visual, dan pengalaman event yang unik.'],
  [Settings, '04', 'Produce', 'Menyiapkan produksi, logistik, vendor, dan kebutuhan teknis.'],
  [PlayCircle, '05', 'Execute', 'Mengeksekusi event dengan detail dan profesional.'],
  [TrendingUp, '06', 'Amplify', 'Memperluas dampak event melalui media dan kanal digital.'],
]

const clients = ['JanSports', 'Coway', 'Lumi', 'Serasa Bakehouse', 'Tel-Popek']

const iconMap = {
  calendar: Calendar,
  tools: Wrench,
  sound: Volume2,
  phone: Smartphone,
  bulb: Lightbulb,
  play: PlayCircle,
  briefcase: Briefcase,
  people: Users,
  trend: TrendingUp,
}

function Icon({ name, size = 24 }) {
  const Component = iconMap[name] || Calendar
  return <Component size={size} />
}

export default function HomePage() {
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'
  const workCarouselRef = useRef(null)
  const fieldCarouselRef = useRef(null)
  const scrollWork = (direction) => {
    const el = workCarouselRef.current
    if (!el) return
    el.scrollBy({ left: direction * Math.max(280, el.clientWidth * 0.72), behavior: 'smooth' })
  }
  const scrollField = (direction) => {
    const el = fieldCarouselRef.current
    if (!el) return
    el.scrollBy({ left: direction * Math.max(280, el.clientWidth * 0.72), behavior: 'smooth' })
  }

  const localizedServices = isIndonesian
    ? services
    : isChinese
      ? [
          { icon: 'calendar', title: '活动策划', text: '结合创意与战略思维，为每场活动打造有意义且难忘的体验。' },
          { icon: 'tools', title: '活动制作与物流', text: '覆盖活动全流程管理、供应商协调、场地与设备安排及现场执行。' },
          { icon: 'sound', title: '媒体投放', text: '精准投放媒体资源，提升活动曝光率与宣传效果。' },
          { icon: 'phone', title: '数字与社交媒体推广', text: '通过数字营销、创意内容与受众互动提升活动影响力。' },
        ]
      : [
          { icon: 'calendar', title: 'Event Planning', text: 'Strategic planning and creative concepts designed to make every event meaningful and memorable.' },
          { icon: 'tools', title: 'Event Production & Logistics', text: 'End-to-end production management, vendor sourcing, venue, equipment, and on-site execution.' },
          { icon: 'sound', title: 'Media Buying', text: 'The right media placements to maximize your event promotion reach and effectiveness.' },
          { icon: 'phone', title: 'Digital & Social Media Amplification', text: 'Boosting event awareness through digital campaigns, creative content, and audience engagement.' },
        ]

  const localizedReasons = isIndonesian
    ? reasons
    : isChinese
      ? [
          { icon: 'bulb', title: '创意思维', text: '我们将富有针对性的创意灵感转化为让人难忘的活动体验。' },
          { icon: 'play', title: '战略执行', text: '科学规划与精准执行，确保每一步都朝着最佳成果推进。' },
          { icon: 'briefcase', title: '一体化方案', text: '从策划、制作到数字推广，我们为您提供全链路支持。' },
          { icon: 'people', title: '现场经验', text: '经验丰富的团队时刻准备好迎接各类现场挑战。' },
          { icon: 'trend', title: '成果导向', text: '每一场活动都以可衡量的传播价值与品牌影响为目标。' },
        ]
      : [
          { icon: 'bulb', title: 'Creative Thinking', text: 'We bring forward creative ideas that are relevant and memorable.' },
          { icon: 'play', title: 'Strategic Execution', text: 'Thoughtful planning and precise execution for the best results.' },
          { icon: 'briefcase', title: 'Integrated Solutions', text: 'Everything your event needs, from planning and production to digital, in one ecosystem.' },
          { icon: 'people', title: 'On-Ground Experience', text: 'An experienced team ready to handle every challenge on the ground.' },
          { icon: 'trend', title: 'Result-Driven', text: 'Every event is designed to create measurable impact and value.' },
        ]

  const localizedProcess = isIndonesian
    ? process
    : isChinese
      ? [
          [Search, '01', '发现', '了解您的目标、受众与核心需求。'],
          [Target, '02', '规划', '设计符合品牌定位的活动策略与传播方向。'],
          [Lightbulb, '03', '创意', '打造独特概念、视觉与整体活动体验。'],
          [Settings, '04', '制作', '统筹制作、物流、供应商与技术支持。'],
          [PlayCircle, '05', '执行', '以专业标准与细致协调确保活动顺利落地。'],
          [TrendingUp, '06', '推广', '通过媒体与数字渠道扩展活动影响力。'],
        ]
      : [
          [Search, '01', 'Discover', 'Understanding your goals, audience, and expectations.'],
          [Target, '02', 'Strategize', 'Building the right event strategy and communication approach.'],
          [Lightbulb, '03', 'Create', 'Developing a unique concept, visuals, and event experience.'],
          [Settings, '04', 'Produce', 'Preparing production, logistics, vendors, and technical needs.'],
          [PlayCircle, '05', 'Execute', 'Delivering your event with care and professionalism.'],
          [TrendingUp, '06', 'Amplify', 'Extending event impact through media and digital channels.'],
        ]

  const stats = [
    { end: 10, suffix: '+', label: isIndonesian ? 'Event terlaksana' : isChinese ? '已举办活动' : 'Events delivered' },
    { end: 20, suffix: '+', label: isIndonesian ? 'Brand & mitra' : isChinese ? '品牌与合作伙伴' : 'Brands & partners' },
    { end: 5, suffix: '+', label: isIndonesian ? 'Tahun pengalaman' : isChinese ? '多年行业经验' : 'Years experience' },
    { end: 100, suffix: 'K+', label: isIndonesian ? 'Audiens terjangkau' : isChinese ? '覆盖受众超 10 万' : 'Audience reached' },
  ]

  const fieldPhotos = [
    { src: images.field1, alt: isIndonesian ? 'Peserta konferensi bisnis' : isChinese ? '商务会议参与者' : 'Business conference attendees' },
    { src: images.field2, alt: isIndonesian ? 'Sesi presentasi di meja konferensi' : isChinese ? '会议桌前的演示环节' : 'Presentation at a conference table' },
    { src: images.field3, alt: isIndonesian ? 'Panggung acara dengan pencahayaan' : isChinese ? '灯光璀璨的活动舞台' : 'Event stage with lighting' },
  ]

  return (
    <>
      {/* Hero --------------------------------------------------------- */}
      <section className="hero">
        <img className="hero__media" src={images.hero} alt={isIndonesian ? 'Kerumunan penonton konser di malam hari' : isChinese ? '夜晚演唱会观众人群' : 'Concert crowd at night'} />
        <div className="hero__scrim" aria-hidden="true" />
        <Wrap className="hero__inner">
          <div className="hero__content" data-enter>
            <Eyebrow dark accent>
              {isIndonesian ? 'Event planner & creative partner' : isChinese ? '活动策划与创意伙伴' : 'Event planner & creative partner'}
            </Eyebrow>
            <h1 className="display-1 mt-5">
              {isIndonesian ? (
                <>
                  Kami menciptakan <span className="text-accent-400">pengalaman event</span> yang bermakna.
                </>
              ) : isChinese ? (
                <>
                  我们创造<span className="text-accent-400">有意义的活动体验</span>。
                </>
              ) : (
                <>
                  We create <span className="text-accent-400">event experiences</span> that matter.
                </>
              )}
            </h1>
            <p className="lead lead--onDark mt-5 max-w-[560px]">
              {isIndonesian
                ? 'Berkah Media Gemilang menghadirkan solusi terintegrasi dalam perencanaan, produksi, promosi, hingga eksekusi event.'
                : isChinese
                  ? 'Berkah Media Gemilang 提供从活动策划、制作、宣传到现场执行的一体化解决方案。'
                  : 'Berkah Media Gemilang delivers integrated solutions in planning, production, promotion, and event execution.'}
            </p>
            <div className="hero__actions">
              <ButtonLink to="/portfolio" variant="accent">
                {isIndonesian ? 'Jelajahi karya kami' : isChinese ? '查看我们的作品' : 'Explore our work'}
                <span className="btn__icon" aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink to="/contact" variant="outlineLight">
                {isIndonesian ? 'Mari berkolaborasi' : isChinese ? '让我们合作' : "Let's work together"}
              </ButtonLink>
            </div>
            <ul className="hero__facts">
              {stats.slice(0, 3).map((stat) => (
                <li className="hero__fact" key={stat.label}>
                  <strong>
                    {stat.end}
                    {stat.suffix}
                  </strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Wrap>
      </section>

      {/* About -------------------------------------------------------- */}
      <section className="section">
        <Wrap className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow={isIndonesian ? 'Tentang BMG' : isChinese ? '关于 BMG' : 'About BMG'}
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
            <div className="grid max-w-[520px] grid-cols-2 gap-x-6 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong className="stat__value">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </strong>
                  <span className="stat__label mt-2 block">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-[280px] justify-self-center sm:max-w-[340px] md:max-w-[400px] lg:max-w-[470px] lg:justify-self-end xl:max-w-[510px]">
            <img
              className="aspect-[4/3] w-full rounded-[20px] object-cover shadow-lg"
              src={images.about}
              alt={isIndonesian ? 'Tim BMG berkolaborasi dalam rapat perencanaan event' : isChinese ? 'BMG 团队在活动策划会议中协作' : 'BMG team collaborating in an event planning meeting'}
              loading="lazy"
            />
          </div>
        </Wrap>
      </section>

      {/* Services ----------------------------------------------------- */}
      <section className="section section--dark">
        <Wrap>
          <SectionHead
            dark
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
                ? 'Layanan terintegrasi dari hulu ke hilir untuk memastikan setiap event berjalan sukses.'
                : isChinese
                  ? '从前期策划到落地执行的全流程服务，确保每场活动都顺利、有影响力。'
                  : 'End-to-end integrated services to make sure every event is successful and impactful.'
            }
            className="mb-0 max-w-2xl"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {localizedServices.map((service, index) => (
              <article className="card card--dark card--hover p-7" key={service.title}>
                <div className="flex items-start justify-between">
                  <div className="icon-badge icon-badge--dark">
                    <Icon name={service.icon} />
                  </div>
                  <span className="font-display text-sm font-bold text-white/60">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="h3 mt-6 text-white">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/62">{service.text}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      {/* Work --------------------------------------------------------- */}
      <section className="section section--white">
        <Wrap>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              eyebrow={isIndonesian ? 'Karya Kami' : isChinese ? '我们的作品' : 'Our Work'}
              title={
                isIndonesian ? (
                  <>
                    Event yang <span className="text-accent-600">kami banggakan</span>
                  </>
                ) : isChinese ? (
                  <>
                    我们引以为豪的<span className="text-accent-600">精彩活动</span>
                  </>
                ) : (
                  <>
                    Events we're <span className="text-accent-600">proud of</span>
                  </>
                )
              }
              className=""
            />
            <ButtonLink to="/portfolio" variant="outline">
              {isIndonesian ? 'Lihat semua portofolio' : isChinese ? '查看全部作品' : 'View all portfolio'}
              <span className="btn__icon" aria-hidden="true">→</span>
            </ButtonLink>
          </div>

          <div className="relative">
            <div
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              ref={workCarouselRef}
            >
              {projects.map((project) => (
                <Link
                  to="/portfolio"
                  className="group relative block aspect-[16/10] shrink-0 basis-[86%] snap-start overflow-hidden rounded-[20px] bg-ink-800 sm:basis-[58%] lg:aspect-[4/3] lg:basis-[48%]"
                  key={project.title.id}
                >
                  <img
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                    alt={project.title[language]}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/45 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent-300">{project.subtitle[language]}</p>
                    <h3 className="h3 mt-2 text-white">{project.title[language]}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink-900 transition-colors hover:border-ink-900 hover:text-accent-600"
                aria-label={isIndonesian ? 'Proyek sebelumnya' : isChinese ? '上一个项目' : 'Previous project'}
                onClick={() => scrollWork(-1)}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink-900 transition-colors hover:border-ink-900 hover:text-accent-600"
                aria-label={isIndonesian ? 'Proyek berikutnya' : isChinese ? '下一个项目' : 'Next project'}
                onClick={() => scrollWork(1)}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Wrap>
      </section>

      {/* Clients ------------------------------------------------------ */}
      <section className="section--tight section--white border-t border-line">
        <Wrap>
          <Eyebrow className="mb-8">
            {isIndonesian ? 'Dipercaya oleh brand terkemuka' : isChinese ? '值得信赖的知名品牌' : 'Trusted by great brands'}
          </Eyebrow>
          <div className="clients">
            {clients.map((client) => (
              <div className="clients__item" key={client}>
                {client}
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* Why BMG ------------------------------------------------------ */}
      <section className="section">
        <Wrap>
          <SectionHead
            eyebrow={isIndonesian ? 'Mengapa BMG?' : isChinese ? '为什么选择 BMG？' : 'Why BMG?'}
            title={
              isIndonesian ? (
                <>
                  Alasan memilih <span className="text-accent-600">kami</span>
                </>
              ) : isChinese ? (
                <>
                  选择<span className="text-accent-600">我们的理由</span>
                </>
              ) : (
                <>
                  Reasons to choose <span className="text-accent-600">us</span>
                </>
              )
            }
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {localizedReasons.map((reason) => (
              <div className="text-center" key={reason.title}>
                <div className="icon-badge mx-auto">
                  <Icon name={reason.icon} />
                </div>
                <h3 className="h3 mt-5">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{reason.text}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* Process ------------------------------------------------------ */}
      <section className="section section--dark">
        <Wrap>
          <SectionHead
            dark
            eyebrow={isIndonesian ? 'Proses Kami' : isChinese ? '我们的流程' : 'Our Process'}
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
            lead={
              isIndonesian
                ? 'Enam tahap yang kami jalankan di setiap proyek, dari Brief pertama hingga laporan akhir.'
                : isChinese
                  ? '每个项目都遵循的六个阶段，从首次brief到最终报告。'
                  : 'Six stages we run on every project, from the first brief to the final report.'
            }
          />

          <div className="timeline">
            {localizedProcess.map(([ProcessIcon, number, title, text], index) => {
              const side = index % 2 === 0 ? 'left' : 'right'
              return (
                <div className="timeline__row" key={number}>
                  <div className="timeline__icon">
                    <ProcessIcon size={18} />
                  </div>
                  <div className={`timeline__card card card--dark p-6 sm:max-w-[430px] ${side === 'left' ? 'timeline__card--left' : 'timeline__card--right'}`}>
                    <span className="text-xs font-bold tracking-[0.14em] text-brand-300">{number}</span>
                    <h3 className="h3 mt-2 text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/62">{text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Wrap>
      </section>

      {/* Field stories ------------------------------------------------ */}
      <section className="section section--white">
        <Wrap className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHead
              eyebrow={isIndonesian ? 'Cerita di Lapangan' : isChinese ? '现场故事' : 'Field Stories'}
              title={
                isIndonesian ? (
                  <>
                    Detail yang rapi, <span className="text-accent-600">momen yang terasa.</span>
                  </>
                ) : isChinese ? (
                  <>
                    细节井然，<span className="text-accent-600">瞬间动人。</span>
                  </>
                ) : (
                  <>
                    Neat detail, <span className="text-accent-600">felt moments.</span>
                  </>
                )
              }
              lead={
                isIndonesian
                  ? 'Setiap event yang kami kerjakan dimulai dari Brief dan berakhir di lapangan — dan kami berada di keduanya.'
                  : isChinese
                    ? '我们打造的每场活动都从brief开始，在现场结束——两端都有我们的身影。'
                    : 'Every event we run starts with a brief and ends on the ground — and we are present at both ends.'
              }
            />
            <ButtonLink to="/portfolio" variant="outline" className="mt-8">
              {isIndonesian ? 'Lihat semua karya' : isChinese ? '查看全部作品' : 'See all work'}
              <span className="btn__icon" aria-hidden="true">→</span>
            </ButtonLink>
          </div>
          <div className="relative">
            <div
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              ref={fieldCarouselRef}
            >
              {fieldPhotos.map((photo) => (
                <div
                  className="media-frame aspect-[4/3.2] w-full shrink-0 snap-start sm:aspect-[16/10] lg:aspect-[4/3]"
                  key={photo.src}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink-900 transition-colors hover:border-ink-900 hover:text-accent-600"
                aria-label={isIndonesian ? 'Foto sebelumnya' : isChinese ? '上一张照片' : 'Previous photo'}
                onClick={() => scrollField(-1)}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink-900 transition-colors hover:border-ink-900 hover:text-accent-600"
                aria-label={isIndonesian ? 'Foto berikutnya' : isChinese ? '下一张照片' : 'Next photo'}
                onClick={() => scrollField(1)}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Wrap>
      </section>

      {/* CTA ---------------------------------------------------------- */}
      <section className="section section--darker cta">
        <svg className="cta-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <path d="M32 7l6.2 18.8L57 32l-18.8 6.2L32 57l-6.2-18.8L7 32l18.8-6.2L32 7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <Wrap>
          <div className="max-w-3xl" data-enter>
            <Eyebrow dark accent>
              {isIndonesian ? 'Mulai dari sebuah ide' : isChinese ? '从一个想法开始' : 'Start with an idea'}
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
                ? 'Konsultasikan kebutuhan Anda bersama tim profesional kami.'
                : isChinese
                  ? '与我们的专业团队一起探讨您的需求。'
                  : 'Talk to our professional team about what you need.'}
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
