import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { ButtonLink, Eyebrow, PageHero, Wrap } from '../components/ui.jsx'
import { useLanguage } from '../i18n/language.js'

const heroPhoto =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85'
const portrait = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=80`

const ctaPhoto =
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=88'

const team = [
  {
    name: 'Andika Pratama',
    role: { id: 'Founder & CEO', en: 'Founder & CEO', zh: '创始人兼 CEO' },
    src: portrait('photo-1560250097-0b93528c311a'),
    bio: {
      id: 'Menggagas arah kreatif dan strategi brand sejak hari pertama BMG berdiri.',
      en: "Driving BMG's creative direction and brand strategy since day one.",
      zh: '从创立第一天起，主导 BMG 的创意方向与品牌战略。',
    },
    detail: {
      id: 'Andika memimpin BMG sejak hari pertama berdiri — dari menyusun visi perusahaan dan arah kreatif hingga memastikan setiap klien mendapatkan pengalaman terbaik.',
      en: 'Andika has led BMG since day one — from shaping the company vision and creative direction to making sure every client gets the best possible experience.',
      zh: 'Andika 自创立第一天起领导 BMG——从公司愿景、创意方向到确保每位客户获得最佳体验。',
    },
    focus: {
      id: ['Strategi Brand', 'Arah Kreatif', 'Leadership'],
      en: ['Brand Strategy', 'Creative Direction', 'Leadership'],
      zh: ['品牌战略', '创意方向', '领导力'],
    },
  },
  {
    name: 'Lintang Ayudya',
    role: { id: 'Brand Strategist', en: 'Brand Strategist', zh: '品牌策略师' },
    src: portrait('photo-1573497019940-1c28c88b4f3e'),
    bio: {
      id: 'Merancang positioning brand dan narasi di setiap proyek yang kami tangani.',
      en: 'Crafting brand positioning and narratives for every project.',
      zh: '为每个项目打造品牌定位与叙事。',
    },
    detail: {
      id: 'Lintang merancang positioning brand dan narasi kampanye untuk setiap klien BMG — memastikan setiap event punya cerita yang kuat dan konsisten dengan identitas brand.',
      en: 'Lintang crafts brand positioning and campaign narratives for every BMG client — making sure each event carries a strong story consistent with brand identity.',
      zh: 'Lintang 为每位 BMG 客户设计品牌定位与活动叙事——确保每场活动都有有力的故事，并与品牌形象保持一致。',
    },
    focus: {
      id: ['Brand Positioning', 'Narasi & Messaging', 'Campaign Strategy'],
      en: ['Brand Positioning', 'Narrative & Messaging', 'Campaign Strategy'],
      zh: ['品牌定位', '叙事与传播', '活动策略'],
    },
  },
  {
    name: 'Sinta Dewi',
    role: { id: 'Project Manager', en: 'Project Manager', zh: '项目经理' },
    src: portrait('photo-1573496359142-b8d87734a5a2'),
    bio: {
      id: 'Menjaga timeline, scope, dan komunikasi klien dari kick-off hingga hari-H.',
      en: 'Owning timelines, scope, and client communication from kick-off to event day.',
      zh: '把控每个项目从启动到落地的时间线、范围与客户沟通。',
    },
    detail: {
      id: 'Sinta menjaga timeline, scope, anggaran, dan komunikasi klien — dari kick-off hingga load-out, memastikan tidak ada detail yang terlewat.',
      en: 'Sinta owns the timeline, scope, budget, and client communication — from kick-off to load-out, so no detail slips through.',
      zh: 'Sinta 把控时间线、范围、预算与客户沟通——从项目启动到撤场，不错过任何细节。',
    },
    focus: {
      id: ['Timeline Management', 'Budget & Scope', 'Komunikasi Klien'],
      en: ['Timeline Management', 'Budget & Scope', 'Client Communication'],
      zh: ['时间线管理', '预算与范围', '客户沟通'],
    },
  },
  {
    name: 'Rafi Akbar',
    role: { id: 'Assistant PM', en: 'Assistant PM', zh: '项目助理' },
    src: portrait('photo-1507003211169-0a1dd7228f2d'),
    bio: {
      id: 'Membantu administrasi proyek dan memastikan detail harian tidak terlewat.',
      en: 'Keeping project admin and daily details on track.',
      zh: '负责项目日常行政与协调支持。',
    },
    detail: {
      id: 'Rafi mendampingi Sinta dalam administrasi proyek, koordinasi harian, dan dokumentasi — memastikan setiap meeting dan keputusan tercatat rapi.',
      en: 'Rafi supports Sinta on project admin, daily coordination, and documentation — keeping every meeting and decision properly recorded.',
      zh: 'Rafi 协助 Sinta 处理项目行政、日常协调与文档工作——确保每次会议与决策都被妥善记录。',
    },
    focus: {
      id: ['Administrasi Proyek', 'Koordinasi Harian', 'Dokumentasi'],
      en: ['Project Admin', 'Daily Coordination', 'Documentation'],
      zh: ['项目行政', '日常协调', '文档管理'],
    },
  },
  {
    name: 'Dimas Saputra',
    role: { id: 'Production Lead', en: 'Production Lead', zh: '制作负责人' },
    src: portrait('photo-1500648767791-00dcc994a43e'),
    bio: {
      id: 'Mengawal produksi panggung, venue, peralatan, dan teknis di lapangan.',
      en: 'Owning stage, venue, equipment, and technical production on the ground.',
      zh: '负责现场舞台、场地、设备与技术制作。',
    },
    detail: {
      id: 'Dimas memimpin produksi panggung, lighting, sound, dan venue — mengoordinasikan vendor teknis agar hari-H berjalan tanpa hambatan.',
      en: 'Dimas leads stage, lighting, sound, and venue production — coordinating technical vendors so the big day runs without a hitch.',
      zh: 'Dimas 负责舞台、灯光、音响与场地的制作——协调技术供应商，确保活动当天顺利进行。',
    },
    focus: {
      id: ['Stage & Venue', 'Vendor Teknis', 'Produksi Lapangan'],
      en: ['Stage & Venue', 'Technical Vendors', 'On-ground Production'],
      zh: ['舞台与场地', '技术供应商', '现场制作'],
    },
  },
  {
    name: 'Fajar Ramadhan',
    role: { id: 'Logistics Officer', en: 'Logistics Officer', zh: '物流专员' },
    src: portrait('photo-1506794778202-cad84cf45f1d'),
    bio: {
      id: 'Memastikan peralatan, vendor, dan transportasi tiba tepat waktu.',
      en: 'Ensuring equipment, vendors, and transport arrive on time.',
      zh: '确保设备、供应商与运输准时到位。',
    },
    detail: {
      id: 'Fajar memastikan peralatan, transportasi, dan vendor tiba tepat waktu — dari perencanaan rute hingga loading di venue.',
      en: 'Fajar makes sure equipment, transport, and vendors arrive on time — from route planning to unloading at the venue.',
      zh: 'Fajar 确保设备、运输与供应商准时到位——从路线规划到现场装卸。',
    },
    focus: {
      id: ['Transportasi', 'Manajemen Peralatan', 'Koordinasi Vendor'],
      en: ['Transportation', 'Equipment Management', 'Vendor Coordination'],
      zh: ['运输管理', '设备管理', '供应商协调'],
    },
  },
  {
    name: 'Ayu Lestari',
    role: { id: 'Digital Lead', en: 'Digital Lead', zh: '数字负责人' },
    src: portrait('photo-1580489944761-15a19d654956'),
    bio: {
      id: 'Mengatur strategi digital dan performa kampanye untuk setiap event.',
      en: 'Steering digital strategy and campaign performance for every event.',
      zh: '统筹每个活动的数字策略与传播效果。',
    },
    detail: {
      id: 'Ayu mengatur strategi digital dan performa kampanye untuk setiap event — dari social media plan hingga iklan dan analisis pasca-event.',
      en: 'Ayu steers digital strategy and campaign performance for every event — from social media plans to paid ads and post-event analysis.',
      zh: 'Ayu 负责每场活动的数字策略与效果跟踪——从社媒方案到投放与会后复盘。',
    },
    focus: {
      id: ['Strategi Digital', 'Social Media', 'Paid Campaign'],
      en: ['Digital Strategy', 'Social Media', 'Paid Campaigns'],
      zh: ['数字策略', '社交媒体', '付费投放'],
    },
  },
  {
    name: 'Aditya Nugraha',
    role: { id: 'Media Buyer', en: 'Media Buyer', zh: '媒体采购' },
    src: portrait('photo-1472099645785-5658abf4ff4e'),
    bio: {
      id: 'Menegosiasikan placement media terbaik dengan budget yang efisien.',
      en: 'Negotiating the best media placements at efficient cost.',
      zh: '以高性价比争取最佳媒体位置。',
    },
    detail: {
      id: 'Aditya menegosiasikan placement media terbaik dengan anggaran paling efisien — memastikan pesan BMG menjangkau audiens yang tepat.',
      en: 'Aditya negotiates the best media placements at the most efficient cost — making sure BMG’s message reaches the right audience.',
      zh: 'Aditya 以最高性价比争取最佳媒体位置——确保 BMG 的讯息精准触达目标受众。',
    },
    focus: {
      id: ['Media Planning', 'Negosiasi Rate', 'Media Monitoring'],
      en: ['Media Planning', 'Rate Negotiation', 'Media Monitoring'],
      zh: ['媒体规划', '价格谈判', '媒体监测'],
    },
  },
  {
    name: 'Nadia Putri',
    role: { id: 'Talent Manager', en: 'Talent Manager', zh: '艺人经理' },
    src: portrait('photo-1531123897727-8f129e1688ce'),
    bio: {
      id: 'Mencocokkan talent, MC, dan performer dengan konsep dan audiens event Anda.',
      en: 'Matching the right talent, MCs, and performers to your concept and audience.',
      zh: '根据活动概念与受众，匹配艺人、主持人与表演者。',
    },
    detail: {
      id: 'Nadia mencocokkan talent, MC, dan performer dengan konsep dan audiens event Anda — dari scouting hingga hari tampil.',
      en: 'Nadia matches talent, MCs, and performers to your concept and audience — from scouting to show day.',
      zh: 'Nadia 根据活动概念与受众匹配合适的艺人、主持人与表演者——从挖掘到登台。',
    },
    focus: {
      id: ['Talent Scouting', 'Artist Briefing', 'Booking & Scheduling'],
      en: ['Talent Scouting', 'Artist Briefing', 'Booking & Scheduling'],
      zh: ['艺人发掘', '艺人简报', '档期管理'],
    },
  },
  {
    name: 'Bimo Aji',
    role: { id: 'Artist Liaison', en: 'Artist Liaison', zh: '艺人对接' },
    src: portrait('photo-1519085360753-af0119f7cbe7'),
    bio: {
      id: 'Mengurus kebutuhan artistik dan kontrak setiap performer yang tampil.',
      en: 'Handling artist needs and contracts for every performer on stage.',
      zh: '负责每位登台艺人的需求与合约对接。',
    },
    detail: {
      id: 'Bimo menjadi jembatan antara BMG dan para artist — menangani kebutuhan artistik, rider, dan kontrak setiap performer yang tampil.',
      en: 'Bimo is the bridge between BMG and the artists — handling artistic needs, riders, and contracts for every performer on stage.',
      zh: 'Bimo 是 BMG 与艺人之间的桥梁——处理每位登台艺人的需求、rider 与合约。',
    },
    focus: {
      id: ['Rider & Hospitality', 'Kontrak Artist', 'Artist Liaison'],
      en: ['Rider & Hospitality', 'Artist Contracts', 'Artist Liaison'],
      zh: ['艺人需求与接待', '艺人合约', '艺人对接'],
    },
  },
  {
    name: 'Galih Prakoso',
    role: { id: 'Crew Lead', en: 'Crew Lead', zh: '小队长' },
    initials: 'GP',
    bio: {
      id: 'Memimpin tim lapangan dari bongkar muat hingga acara selesai.',
      en: 'Leading the on-ground crew from load-in to wrap.',
      zh: '带领现场团队完成从搭建到撤场。',
    },
    detail: {
      id: 'Galih memimpin kru lapangan dari load-in hingga load-out — memastikan set-up panggung, registrasi, dan operasional hari-H berjalan sesuai run-of-show.',
      en: 'Galih leads the on-ground crew from load-in to load-out — keeping staging, registration, and show-day operations on the run-of-show.',
      zh: 'Galih 带领现场团队完成从搭建到撤场——确保舞台、签到与执行完全按 run-of-show 推进。',
    },
    focus: {
      id: ['Load-in / Load-out', 'Run-of-Show', 'Supervisi Crew'],
      en: ['Load-in / Load-out', 'Run-of-Show', 'Crew Supervision'],
      zh: ['搭建与撤场', '执行流程', '团队监督'],
    },
  },
  {
    name: 'Maya Anindita',
    role: { id: 'Crew', en: 'Crew', zh: '执行组员' },
    initials: 'MA',
    bio: {
      id: 'Menjaga operasional registrasi dan run-of-show di hari-H.',
      en: 'Running registration and show operations on event day.',
      zh: '负责现场签到与演出流程执行。',
    },
    detail: {
      id: 'Maya menjalankan operasional registrasi dan kebutuhan tamu di hari-H — memastikan setiap peserta terlayani dengan cepat dan ramah.',
      en: 'Maya runs registration and guest operations on event day — making sure every attendee is served quickly and warmly.',
      zh: 'Maya 负责现场签到与嘉宾接待——确保每位参与者都能得到快速、周到的服务。',
    },
    focus: {
      id: ['Registrasi', 'Guest Handling', 'Run-of-Show Support'],
      en: ['Registration', 'Guest Handling', 'Run-of-Show Support'],
      zh: ['签到接待', '嘉宾服务', '流程支持'],
    },
  },
  {
    name: 'Satria Wibowo',
    role: { id: 'Crew', en: 'Crew', zh: '执行组员' },
    initials: 'SW',
    bio: {
      id: 'Mendampingi setup teknis dan koordinasi vendor di venue.',
      en: 'Supporting technical setup and vendor coordination at venues.',
      zh: '支持场地技术搭建与供应商协调。',
    },
    detail: {
      id: 'Satria mendampingi setup teknis dan koordinasi vendor di venue — dari sound check hingga pengecekan akhir sebelum acara dimulai.',
      en: 'Satria supports technical setup and vendor coordination at venues — from sound check to the final walkthrough before doors open.',
      zh: 'Satria 负责场地的技术搭建与供应商协调——从彩排检查到开场前的最终确认。',
    },
    focus: {
      id: ['Technical Setup', 'Sound Check', 'Vendor Coordination'],
      en: ['Technical Setup', 'Sound Check', 'Vendor Coordination'],
      zh: ['技术搭建', '彩排检查', '供应商协调'],
    },
  },
]

export default function OurTeam() {
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'
  const [selected, setSelected] = useState(null)
  const closeButtonRef = useRef(null)
  const lastTriggerRef = useRef(null)

  const isOpen = selected !== null

  useEffect(() => {
    if (!isOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    const previousOverflow = document.body.style.overflow
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      lastTriggerRef.current?.focus()
    }
  }, [isOpen])

  const t = {
    breadcrumbHome: isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home',
    breadcrumbAbout: isIndonesian ? 'Tentang Kami' : isChinese ? '关于我们' : 'About Us',
    team: isIndonesian ? 'Tim Kami' : isChinese ? '我们的团队' : 'Our Team',
    eyebrow: isIndonesian ? 'Tim Kami' : isChinese ? '我们的团队' : 'Our Team',
    title: isIndonesian ? (
      <>Orang-orang di balik <span className="text-accent-400">event yang hebat</span></>
    ) : isChinese ? (
      <>精彩活动<span className="text-accent-400">背后的团队</span></>
    ) : (
      <>People behind <span className="text-accent-400">great events</span></>
    ),
    lead: isIndonesian
      ? 'Peran dan tanggung jawab yang membuat setiap event BMG berjalan — dari konsep pertama hingga penutupan.'
      : isChinese
        ? '我们每个角色与职责，共同支撑 BMG 的每一场活动——从首次创意到落幕。'
        : 'The roles and responsibilities behind every BMG event — from the first idea to the last cue.',
    listTitle: isIndonesian ? (
      <>Setiap orang, <span className="text-accent-400">setiap perannya</span></>
    ) : isChinese ? (
      <>每一个人，<span className="text-accent-400">各司其职</span></>
    ) : (
      <>Every person, <span className="text-accent-400">every role</span></>
    ),
    listLead: isIndonesian
      ? 'Kami bekerja sebagai satu tim — dari meja kreatif sampai lapangan.'
      : isChinese
        ? '我们是一个整体的团队——从创意桌到现场。'
        : 'We work as one team — from the creative table to the field.',
    viewDetail: isIndonesian ? 'Lihat detail' : isChinese ? '查看详情' : 'View details',
    closeLabel: isIndonesian ? 'Tutup' : isChinese ? '关闭' : 'Close',
    focusLabel: isIndonesian ? 'Fokus' : isChinese ? '专长' : 'Focus',
    modalCta: isIndonesian ? 'Hubungi Kami' : isChinese ? '联系我们' : 'Contact Us',
    ctaEyebrow: isIndonesian ? 'Bergabung dengan Kami' : isChinese ? '加入我们' : 'Join Us',
    ctaTitle: isIndonesian ? (
      <>Ingin jadi bagian dari <span className="text-accent-400">tim kami?</span></>
    ) : isChinese ? (
      <>想成为<span className="text-accent-400">我们团队的一员吗？</span></>
    ) : (
      <>Want to be part of <span className="text-accent-400">the team?</span></>
    ),
    ctaBody: isIndonesian
      ? 'Kami selalu terbuka untuk talenta di bidang event, produksi, media, dan kreatif. Ceritakan tentang Anda lewat halaman kontak kami.'
      : isChinese
        ? '我们常年欢迎活动、制作、媒体与创意领域的人才加入。欢迎通过联系页面与我们交流。'
        : 'We are always open to talent in events, production, media, and creative. Tell us about yourself through our contact page.',
    ctaButton: isIndonesian ? 'Hubungi Kami' : isChinese ? '联系我们' : 'Contact Us',
  }

  const openMember = (member, trigger) => {
    lastTriggerRef.current = trigger
    setSelected(member)
  }

  return (
    <>
      <PageHero
        image={heroPhoto}
        breadcrumb={
          <>
            <Link to="/">{t.breadcrumbHome}</Link>
            <span aria-hidden="true">›</span>
            <Link to="/about-us">{t.breadcrumbAbout}</Link>
            <span aria-hidden="true">›</span>
            {t.team}
          </>
        }
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
      />

      <section className="section">
        <Wrap>
          <div className="section-head">
            <h2 className="h2">{t.listTitle}</h2>
            <p className="lead mt-4 max-w-[560px]">{t.listLead}</p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member) => (
              <li key={member.name}>
                <article className="card card--hover flex h-full flex-col items-center p-6 text-center">
                  {member.src ? (
                    <img
                      className="h-32 w-32 rounded-full border-4 border-white object-cover object-top shadow-md"
                      src={member.src}
                      alt={`${member.name} — ${member.role[language]}`}
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className="grid h-32 w-32 place-items-center rounded-full border-4 border-white bg-brand-50 text-3xl font-bold text-brand-700 shadow-md"
                      aria-hidden="true"
                    >
                      {member.initials}
                    </span>
                  )}
                  <h3 className="h3 mt-5 text-[17px] leading-snug">{member.name}</h3>
                  <span className="chip mt-2 bg-brand-50 text-brand-700">{member.role[language]}</span>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{member.bio[language]}</p>
                  <button
                    type="button"
                    className="btn btn--outline btn--sm mt-5"
                    aria-haspopup="dialog"
                    onClick={(event) => openMember(member, event.currentTarget)}
                  >
                    {t.viewDetail}
                    <span className="btn__icon" aria-hidden="true">→</span>
                  </button>
                </article>
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      <section className="relative isolate py-[62px] text-white max-[680px]:py-[42px]" style={{ '--hero-image': `url(${ctaPhoto})` }}>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(7,14,28,.88),rgba(7,14,28,.76)),var(--hero-image)] bg-cover bg-center" aria-hidden="true" />
        <Wrap className="relative z-[1]">
          <div className="max-w-3xl" data-enter>
            <Eyebrow dark accent>
              {t.ctaEyebrow}
            </Eyebrow>
            <h2 className="h2 mt-5">{t.ctaTitle}</h2>
            <p className="lead lead--onDark mt-4 max-w-[560px]">{t.ctaBody}</p>
            <div className="hero__actions">
              <ButtonLink
                to="/contact"
                variant="accent"
              >
                {t.ctaButton}
                <span className="btn__icon" aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </div>
        </Wrap>
      </section>

      {selected ? createPortal(
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink-900/70 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="our-team-modal-title"
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-[24px] bg-white p-6 text-center shadow-xl sm:rounded-[24px] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label={t.closeLabel}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-brand-50 hover:text-ink-900"
              onClick={() => setSelected(null)}
            >
              <X size={20} aria-hidden="true" />
            </button>

            {selected.src ? (
              <img
                className="mx-auto h-36 w-36 rounded-full border-4 border-brand-50 object-cover object-top shadow-md"
                src={selected.src}
                alt={`${selected.name} — ${selected.role[language]}`}
              />
            ) : (
              <span
                className="mx-auto grid h-36 w-36 place-items-center rounded-full border-4 border-brand-50 bg-brand-50 text-4xl font-bold text-brand-700 shadow-md"
                aria-hidden="true"
              >
                {selected.initials}
              </span>
            )}

            <h3 id="our-team-modal-title" className="h3 mt-5">{selected.name}</h3>
            <span className="chip mt-2 bg-brand-50 text-brand-700">{selected.role[language]}</span>

            <p className="mt-4 text-[15px] leading-relaxed text-muted">{selected.detail[language]}</p>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700">{t.focusLabel}</p>
            <ul className="mt-2 flex flex-wrap justify-center gap-2">
              {selected.focus[language].map((item) => (
                <li key={item} className="chip bg-brand-50 text-brand-700">{item}</li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center">
              <ButtonLink to="/contact" variant="accent" onClick={() => setSelected(null)}>
                {t.modalCta}
                <span className="btn__icon" aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </div>
        </div>,
        document.body
      ) : null}
    </>
  )
}
