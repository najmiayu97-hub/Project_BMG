/**
 * Shared service catalogue for the /services page, the service detail
 * pages (/services/:slug) and the footer. Localized fields use
 * { id, en, zh } objects — pick with `localized()`.
 */

import { localized } from './localized.js'

export { localized }

export const services = [
  {
    slug: 'event-planning',
    number: '01',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85',
    category: { id: 'Planning', en: 'Planning', zh: '策划' },
    title: { id: 'Event Planning', en: 'Event Planning', zh: '活动策划' },
    text: {
      id: 'Perencanaan strategis dan konsep kreatif yang dirancang untuk menciptakan event bermakna dan berkesan.',
      en: 'Strategic planning and creative concepts designed to make every event meaningful and memorable.',
      zh: '结合创意与战略思维，为每场活动打造有意义且难忘的体验。',
    },
    overview: {
      id: 'Kami mulai dari memahami tujuan bisnis Anda, audiens, dan konteks acara — lalu menerjemahkannya menjadi strategi, konsep kreatif, rundown, dan anggaran yang realistis. Setiap detail direncanakan sejak awal agar eksekusi berjalan lancar.',
      en: 'We start by understanding your business goals, audience, and event context — then translate them into a strategy, creative concept, rundown, and realistic budget. Every detail is planned up front so execution runs smoothly.',
      zh: '我们从理解您的商业目标、受众与活动背景出发，将其转化为活动策略、创意概念、流程安排与务实预算。每一个细节都提前规划，确保执行顺畅。',
    },
    deliverables: {
      id: ['Pemetaan tujuan, audiens, dan konsep event', 'Strategi kreatif & tema event', 'Rundown acara dan manajemen lini masa', 'Perencanaan anggaran dan risiko'],
      en: ['Goal, audience & concept mapping', 'Creative strategy & event theme', 'Event rundown and timeline management', 'Budget and risk planning'],
      zh: ['活动目标、受众与概念梳理', '创意策略与活动主题', '活动流程与时间线管理', '预算与风险规划'],
    },
  },
  {
    slug: 'event-production-logistics',
    number: '02',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85',
    category: { id: 'Production', en: 'Production', zh: '制作' },
    title: { id: 'Event Production & Logistics', en: 'Event Production & Logistics', zh: '活动制作与物流' },
    text: {
      id: 'Manajemen produksi end-to-end, pengadaan vendor, venue, peralatan, hingga eksekusi di lapangan.',
      en: 'End-to-end production management, vendor sourcing, venue, equipment, and on-site execution.',
      zh: '覆盖活动全流程管理、供应商协调、场地与设备安排及现场执行。',
    },
    overview: {
      id: 'Dari pemilihan venue hingga pembongkaran, tim produksi kami mengelola vendor, peralatan, jadwal, dan kru di lapangan — memastikan semuanya hadir tepat waktu dan bekerja sesuai standar.',
      en: 'From venue selection to load-out, our production team manages vendors, equipment, schedules, and on-site crew — ensuring everything arrives on time and works to standard.',
      zh: '从场地甄选到撤展，我们的制作团队统筹供应商、设备、进度与现场工作人员，确保一切按时交付并符合标准。',
    },
    deliverables: {
      id: ['Manajemen vendor dan pengadaan', 'Produksi teknis: panggung, audio-visual & lighting', 'Manajemen venue, perizinan, dan logistik', 'Koordinasi kru dan eksekusi di lapangan'],
      en: ['Vendor management and procurement', 'Technical production: stage, AV & lighting', 'Venue management, permits & logistics', 'Crew coordination and on-site execution'],
      zh: ['供应商管理与采购', '技术制作：舞台、视听与灯光', '场地管理、审批与物流', '现场团队协调与执行'],
    },
  },
  {
    slug: 'media-buying',
    number: '03',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
    category: { id: 'Media', en: 'Media', zh: '媒体' },
    title: { id: 'Media Buying', en: 'Media Buying', zh: '媒体投放' },
    text: {
      id: 'Penempatan media yang tepat untuk memaksimalkan jangkauan dan efektivitas promosi event.',
      en: 'The right media placements to maximize your event promotion reach and effectiveness.',
      zh: '精准投放媒体资源，提升活动曝光率与宣传效果。',
    },
    overview: {
      id: 'Kami menempatkan pesan Anda di kanal yang tepat — dari media cetak dan luring hingga digital — dengan negosiasi tarif, targeting audiens, dan pelaporan performa yang transparan.',
      en: 'We place your message on the right channels — from print and offline to digital — with rate negotiation, audience targeting, and transparent performance reporting.',
      zh: '我们将您的信息投放到最合适的渠道——从平面、线下到数字媒体——并提供议价、精准定向与透明的效果报告。',
    },
    deliverables: {
      id: ['Riset kanal dan perencanaan media', 'Negosiasi dan pengadaan ruang media (cetak, radio, luar ruang, digital)', 'Targeting audiens dan penjadwalan tayang', 'Monitoring dan laporan performa kampanye'],
      en: ['Channel research and media planning', 'Space negotiation (print, radio, OOH, digital)', 'Audience targeting and scheduling', 'Campaign monitoring and performance reports'],
      zh: ['渠道调研与媒体规划', '媒体资源议价（平面、广播、户外、数字）', '受众定向与排期投放', '投放监控与效果报告'],
    },
  },
  {
    slug: 'digital-social-media-amplification',
    number: '04',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85',
    category: { id: 'Digital', en: 'Digital', zh: '数字' },
    title: { id: 'Digital & Social Media Amplification', en: 'Digital & Social Media Amplification', zh: '数字与社交媒体推广' },
    text: {
      id: 'Meningkatkan awareness event melalui kampanye digital, konten kreatif, dan engagement audiens.',
      en: 'Boosting event awareness through digital campaigns, creative content, and audience engagement.',
      zh: '通过数字营销、创意内容与受众互动提升活动影响力。',
    },
    overview: {
      id: 'Sebelum, selama, dan sesudah event — kami membangun momentum digital melalui konten kreatif, kampanye berbayar, dan pengelolaan komunitas agar acara Anda menjangkau audiens yang lebih luas.',
      en: 'Before, during, and after the event — we build digital momentum through creative content, paid campaigns, and community management so your event reaches a wider audience.',
      zh: '活动前、中、后——我们通过创意内容、付费推广与社群运营打造持续的线上热度，扩大活动影响力。',
    },
    deliverables: {
      id: ['Strategi konten dan kalender editorial', 'Produksi konten kreatif (foto, video, copywriting)', 'Kampanye iklan digital (Meta, Google, TikTok)', 'Live coverage dan manajemen komunitas'],
      en: ['Content strategy and editorial calendar', 'Creative production (photo, video, copywriting)', 'Paid campaigns (Meta, Google, TikTok)', 'Live coverage and community management'],
      zh: ['内容策略与编辑日历', '创意内容制作（图片、视频、文案）', '数字广告投放（Meta、Google、TikTok）', '现场直播报道与社群运营'],
    },
  },
  {
    slug: 'brand-activation',
    number: '05',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85',
    category: { id: 'Activation', en: 'Activation', zh: '活动' },
    title: { id: 'Brand Activation', en: 'Brand Activation', zh: '品牌活动' },
    text: {
      id: 'Menghidupkan brand melalui pengalaman interaktif yang menarik perhatian dan menciptakan koneksi kuat dengan audiens.',
      en: 'Bringing brands to life through engaging interactive experiences that build strong audience connections.',
      zh: '通过互动体验让品牌与受众建立强连接，增强品牌认知。',
    },
    overview: {
      id: 'Kami merancang pengalaman interaktif — dari roadshow dan booth hingga pop-up dan sampling — yang menghidupkan brand Anda dan menciptakan koneksi nyata dengan audiens.',
      en: 'We design interactive experiences — from roadshows and booths to pop-ups and sampling — that bring your brand to life and build real audience connections.',
      zh: '我们策划互动体验——从路演、展位到快闪店与试用活动——让您的品牌真正“活”起来，与受众建立真实连接。',
    },
    deliverables: {
      id: ['Konsep aktivasi dan pengalaman brand', 'Desain dan produksi booth, instalasi & properti', 'Aktivasi di mal, kampus, dan ruang publik', 'Sampling, demo produk, dan lead capture'],
      en: ['Activation concept and brand experience', 'Booth, installation & property design and production', 'Mall, campus & public space activations', 'Sampling, product demos & lead capture'],
      zh: ['品牌互动创意概念', '展位、装置与物料设计制作', '商场、校园与公共空间激活', '产品试用、演示与线索收集'],
    },
  },
  {
    slug: 'talent-entertainment-management',
    number: '06',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85',
    category: { id: 'Talent', en: 'Talent', zh: '艺人' },
    title: { id: 'Talent & Entertainment Management', en: 'Talent & Entertainment Management', zh: '艺人与娱乐管理' },
    text: {
      id: 'Menyediakan talent, MC, performer, hingga hiburan berkualitas yang sesuai dengan kebutuhan event Anda.',
      en: 'Providing talent, MCs, performers, and quality entertainment tailored to your event needs.',
      zh: '为活动提供主持人、表演者与娱乐资源，满足不同场景需求。',
    },
    overview: {
      id: 'Dari MC dan pembicara hingga penyanyi dan performer — kami menyediakan talenta yang tepat, mengelola kontrak, rider, dan kebutuhan teknisnya agar tampil sempurna di acara Anda.',
      en: 'From MCs and speakers to singers and performers — we source the right talent and manage contracts, riders, and technical needs so every appearance shines at your event.',
      zh: '从主持人、演讲嘉宾到歌手与表演者——我们匹配最合适的艺人，并负责合同、rider 与技术需求，确保每一次登场都精彩呈现。',
    },
    deliverables: {
      id: ['Kurasi dan booking talent, MC & performer', 'Negosiasi fee, kontrak, dan rider', 'Manajemen rundown penampilan', 'Koordinasi teknis dan hospitality talent'],
      en: ['Talent, MC & performer curation and booking', 'Fee, contract & rider negotiation', 'Performance rundown management', 'Technical coordination and talent hospitality'],
      zh: ['艺人、主持人与表演者甄选预订', '费用、合同与 rider 洽谈', '演出流程管理', '艺人技术协调与接待'],
    },
  },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) ?? null
}
