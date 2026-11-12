/**
 * Shared event catalogue for the /event page and the event detail pages
 * (/event/:slug). Localized fields use { id, en, zh } objects — pick with
 * `localized()` from ./localized.js.
 */

export const categoryLabels = {
  public: { id: 'Acara Publik', en: 'Public Event', zh: '公共活动' },
  mice: { id: 'Acara MICE', en: 'MICE Event', zh: 'MICE 活动' },
  brand: { id: 'Aktivasi Merek', en: 'Brand Activation', zh: '品牌推广' },
  tenant: { id: 'Acara Tenant', en: 'Tenant Event', zh: '商户活动' },
  sport: { id: 'Acara Olahraga', en: 'Sport Event', zh: '体育活动' },
  corporate: { id: 'Acara Korporat', en: 'Corporate Event', zh: '企业活动' },
  hybrid: { id: 'Acara Hibrida', en: 'Hybrid Event', zh: '混合式活动' },
}

const MONTHS = {
  id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}

export function formatEventDate(date, language) {
  if (language === 'zh') {
    const from = date.from ? `${date.from}日` : ''
    const to = date.to ? `${date.to}日` : ''
    const range = date.from && date.to ? `${from}-${to}` : date.from ? from : to
    return `${date.year}年${date.month}月${range}`
  }
  const monthName = (MONTHS[language] ?? MONTHS.id)[date.month - 1]
  if (date.from && date.to) return `${date.from}-${date.to} ${monthName} ${date.year}`
  if (date.from) return `${date.from} ${monthName} ${date.year}`
  return `${monthName} ${date.year}`
}

export const events = [
  {
    slug: 'bandung-festival-2026',
    title: { id: 'Bandung Festival 2026', en: 'Bandung Festival 2026', zh: '万隆节 2026' },
    category: 'public',
    gathering: false,
    date: { from: 19, to: 24, month: 8, year: 2026 },
    place: 'Summarecon Mall Bandung',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=850&q=85',
    text: {
      id: 'Festival publik enam hari di Summarecon Mal Bandung dengan panggung hiburan, bazar, dan agenda komunitas.',
      en: 'A six-day public festival at Summarecon Mall Bandung featuring live entertainment, bazaars, and community programming.',
      zh: '在 Summarecon 万隆购物中心举办的六天公众节庆，包含现场演出、市集与社群活动。',
    },
    overview: {
      id: 'Bandung Festival 2026 adalah festival publik enam hari yang kami produksi di Summarecon Mal Bandung — dari panggung utama hingga area tenant, dari pembukaan hingga penutupan. Tim kami mengelola keseluruhan produksi: perencanaan, perizinan, vendor, artis, dan operasional harian di lapangan.',
      en: 'Bandung Festival 2026 is a six-day public festival we produced at Summarecon Mall Bandung — from the main stage to the tenant area, from opening to closing. Our team manages the entire production: planning, permits, vendors, artists, and day-to-day on-site operations.',
      zh: '“万隆节 2026”是我们在 Summarecon 万隆购物中心制作的六天公众节庆——从主舞台到商户区，从开幕到闭幕。我们的团队负责全部制作：企划、审批、供应商、艺人与每日现场运营。',
    },
    scope: {
      id: ['Produksi panggung utama & side stage selama 6 hari', 'Manajemen tenant, booth, dan bazar', 'Booking artis & kurasi program harian', 'Operasional lapangan: kru, keamanan, dan perizinan'],
      en: ['Main & side stage production across 6 days', 'Tenant, booth & bazaar management', 'Artist booking & daily program curation', 'On-site operations: crew, security & permits'],
      zh: ['六天主舞台与副舞台制作', '商户、展位与市集管理', '艺人预订与每日节目策划', '现场运营：团队、安保与审批'],
    },
  },
  {
    slug: 'talkshow-meet-up-guest-speaker',
    title: { id: 'Pengisi Acara Talkshow & Meet Up', en: 'Talkshow & Meet Up Guest Speaker', zh: '脱口秀与见面会嘉宾' },
    category: 'mice',
    gathering: true,
    date: { month: 7, year: 2026 },
    place: 'Bandung',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=850&q=85',
    text: {
      id: 'Sesi talkshow dan meet up dengan pengisi acara pilihan — kami tangani pembicara, panggung, hingga sesi interaksi.',
      en: 'A talkshow and meet-up session with hand-picked guests — we handle the speakers, stage, and audience interaction.',
      zh: '精选嘉宾的脱口秀与见面会——我们负责嘉宾、舞台与互动环节。',
    },
    overview: {
      id: 'Acara talkshow dan meet up ini mempertemukan audiens dengan tokoh pilihan dalam suasana yang intim dan terstruktur. Kami menangani seluruh alurnya: booking dan koordinasi pengisi acara, rundown, produksi panggung dan audio, hingga sesi tanda tangan dan foto bersama.',
      en: 'This talkshow and meet-up brought audiences face-to-face with hand-picked guest speakers in an intimate, structured setting. We handled the full flow: guest booking and coordination, rundown, stage and audio production, down to the signing and photo sessions.',
      zh: '这场脱口秀与见面会让观众与精选嘉宾在温馨有序的氛围中近距离交流。我们负责完整流程：嘉宾预订与协调、流程把控、舞台与音响制作，直至签名合影环节。',
    },
    scope: {
      id: ['Booking & koordinasi pengisi acara (fee, kontrak, rider)', 'Rundown talkshow, Q&A, dan sesi meet up', 'Produksi panggung, audio, dan dokumentasi', 'Pengelolaan antrean & interaksi audiens'],
      en: ['Guest booking & coordination (fee, contract, rider)', 'Rundown for talkshow, Q&A & meet-up session', 'Stage, audio & documentation production', 'Queue and audience interaction management'],
      zh: ['嘉宾预订与协调（费用、合同、rider）', '脱口秀、问答与见面会流程安排', '舞台、音响与影像制作', '签名合影队列与互动管理'],
    },
  },
  {
    slug: 'coway-brand-activation',
    title: { id: 'Coway Brand Activation', en: 'Coway Brand Activation', zh: 'Coway 品牌推广活动' },
    category: 'brand',
    gathering: false,
    date: { month: 5, year: 2026 },
    place: 'Summarecon Mall Bandung',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=850&q=85',
    text: {
      id: 'Aktivasi brand Coway di mal — booth interaktif, product demo, dan lead capture untuk pengunjung.',
      en: 'Coway brand activation at the mall — interactive booth, product demos, and lead capture for visitors.',
      zh: 'Coway 品牌商场激活——互动展位、产品演示与访客线索收集。',
    },
    overview: {
      id: 'Coway Brand Activation di Summarecon Mal Bandung dirancang untuk menarik pengunjung lewat booth interaktif dan demonstrasi produk secara langsung. Tim kami mengeksekusi konsep, produksi booth, promotor, dan sistem lead capture dari hari pertama hingga hari terakhir.',
      en: 'Coway Brand Activation at Summarecon Mall Bandung was designed to draw visitors through an interactive booth and live product demonstrations. Our team executed the concept, booth production, promoters, and lead capture from day one to the last.',
      zh: 'Coway 品牌推广活动在 Summarecon 万隆购物中心举办，通过互动展位与现场产品演示吸引访客。我们的团队从首日到尾日负责概念、展位制作、促销人员与线索收集系统。',
    },
    scope: {
      id: ['Konsep aktivasi & desain booth', 'Produksi booth, display & properti', 'Product demo & promotor management', 'Lead capture & laporan hasil aktivasi'],
      en: ['Activation concept & booth design', 'Booth, display & property production', 'Product demos & promoter management', 'Lead capture & activation report'],
      zh: ['激活创意与展位设计', '展位、陈列与物料制作', '产品演示与促销员管理', '线索收集与激活效果报告'],
    },
  },
  {
    slug: 'tenant-event-local-brand-day',
    title: { id: 'Tenant Event Local Brand Day', en: 'Tenant Event Local Brand Day', zh: '本地品牌日租户活动' },
    category: 'tenant',
    gathering: false,
    date: { month: 4, year: 2026 },
    place: 'Summarecon Mall Bandung',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=850&q=85',
    text: {
      id: 'Satu hari penuh merayakan merek-merek lokal — kurasi tenant, booth, dan pengalaman belanja di mal.',
      en: 'A full day celebrating local brands — tenant curation, booths, and shopping experiences at the mall.',
      zh: '一整天的本地品牌日——商户甄选、展位与商场购物体验。',
    },
    overview: {
      id: 'Tenant Event Local Brand Day adalah hari khusus untuk merek-merek lokal tampil di Summarecon Mal Bandung. Kami menangani kurasi tenant, tata letak dan dekorasi area, promosi ke pengunjung, dan operasional acara dari persiapan hingga bongkar.',
      en: 'Tenant Event Local Brand Day is a dedicated day for local brands to shine at Summarecon Mall Bandung. We handled tenant curation, area layout and decoration, visitor promotions, and event operations from setup to teardown.',
      zh: '本地品牌日是属于本土品牌的专属日，在 Summarecon 万隆购物中心亮相。我们负责商户甄选、区域布置装饰、访客推广以及从搭建到撤展的整体运营。',
    },
    scope: {
      id: ['Kurasi & koordinasi tenant lokal', 'Layout area, booth & dekorasi', 'Promosi & marketing ke pengunjung mal', 'Operasional acara: setup, manpower, bongkar'],
      en: ['Local tenant curation & coordination', 'Area layout, booths & decoration', 'Visitor promotions & marketing', 'Event operations: setup, crew, teardown'],
      zh: ['本土商户甄选与协调', '区域布局、展位与装饰', '访客推广与营销', '活动执行：搭建、人员、撤展'],
    },
  },
  {
    slug: 'sera-sa-bakehouse-grand-opening',
    title: { id: 'Sera Sa Bakehouse Grand Opening', en: 'Sera Sa Bakehouse Grand Opening', zh: 'Sera Sa Bakehouse 盛大开业' },
    category: 'public',
    gathering: false,
    date: { month: 3, year: 2026 },
    place: 'Bandung',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=850&q=85',
    text: {
      id: 'Grand opening Sera Sa Bakehouse — seremoni pembukaan, hiburan, dan pengalaman pertama pelanggan.',
      en: "Sera Sa Bakehouse grand opening — opening ceremony, entertainment, and customers' first experience.",
      zh: 'Sera Sa Bakehouse 盛大开业——开业仪式、演出娱乐与顾客的首次体验。',
    },
    overview: {
      id: 'Grand opening Sera Sa Bakehouse dirayakan dengan seremoni pembukaan dan hiburan untuk pelanggan pertama. Kami merancang rangkaian acaranya — seremoni, hiburan, MC, dan dokumentasi — serta mengelola tamu undangan dan alur selama hari-H.',
      en: 'Sera Sa Bakehouse grand opening was celebrated with an opening ceremony and entertainment for its first customers. We designed the program — ceremony, entertainment, MC, and documentation — and managed guest arrivals and the flow throughout the day.',
      zh: 'Sera Sa Bakehouse 盛大开业以开业仪式与演出迎接首批顾客。我们策划了活动流程——仪式、演出、主持与影像记录——并管理来宾接待与当天动线。',
    },
    scope: {
      id: ['Konsep & dekorasi hari-H', 'Seremoni pembukaan & rangkaian acara', 'Hiburan, MC & dokumentasi', 'Manajemen tamu undangan & alur acara'],
      en: ['Day-of concept & decoration', 'Opening ceremony & program', 'Entertainment, MC & documentation', 'Guest management & event flow'],
      zh: ['开业当天概念与装饰', '开业仪式与活动流程', '演出、主持与影像记录', '来宾接待与活动动线'],
    },
  },
  {
    slug: 'lumi-fun-run-5k',
    title: { id: 'Lumi Fun Run 5K', en: 'Lumi Fun Run 5K', zh: 'Lumi 5公里欢乐跑' },
    category: 'sport',
    gathering: false,
    date: { month: 2, year: 2026 },
    place: 'Bandung',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=850&q=85',
    text: {
      id: 'Fun run 5K untuk komunitas Lumi — registrasi, race kit, rute lari, dan pengalaman purna-lomba.',
      en: 'The Lumi 5K fun run — registration, race kits, the race route, and the finish-line experience.',
      zh: 'Lumi 5公里欢乐跑——报名、参赛物资、赛道与终点体验。',
    },
    overview: {
      id: 'Lumi Fun Run 5K mengajak komunitas berlari 5 kilometer di Bandung dengan pengalaman yang tertata: dari registrasi dan race kit, penandaan rute, marshal dan medis, hingga area finish dan pembagian merchandise.',
      en: 'The Lumi 5K fun run brought the community together for a 5-kilometer run in Bandung with a well-crafted experience: from registration and race kits to route marking, marshals and medical support, finish-line area and merchandise hand-out.',
      zh: 'Lumi 5公里欢乐跑邀约社区伙伴在万隆完成 5 公里赛程，体验井然有序：从报名与参赛物资领取、赛道标记、引导员与医疗支持，到终点区域与礼品发放。',
    },
    scope: {
      id: ['Konsep lomba & perizinan rute 5K', 'Sistem registrasi peserta & race kit', 'Marshal, medis & keamanan rute', 'Area start/finish & hiburan purna-lomba'],
      en: ['Race concept & 5K route permits', 'Participant registration & race kit', 'Marshals, medical & route safety', 'Start/finish area & post-race entertainment'],
      zh: ['赛事概念与 5 公里赛道审批', '选手报名与参赛物资', '引导员、医疗与赛道安保', '起终点区域与赛后娱乐'],
    },
  },
  {
    slug: 'corporate-gathering-awarding-night',
    title: { id: 'Corporate Gathering & Awarding Night', en: 'Corporate Gathering & Awards Night', zh: '企业聚会暨颁奖之夜' },
    category: 'corporate',
    gathering: true,
    date: { month: 1, year: 2026 },
    place: 'Bandung',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=850&q=85',
    text: {
      id: 'Malam apresiasi korporat — gala, awarding ceremony, dan hiburan untuk tim internal.',
      en: 'A corporate appreciation night — gala dinner, awarding ceremony, and entertainment for internal teams.',
      zh: '企业答谢夜——晚宴、颁奖典礼与团队娱乐。',
    },
    overview: {
      id: 'Corporate Gathering & Awarding Night adalah malam apresiasi untuk tim dan mitra terbaik. Kami mengeksekusi konsep gala, produksi panggung dan lighting, rundown awarding ceremony, hiburan, serta dokumentasi — memastikan setiap momen penghargaan terasa spesial.',
      en: 'Corporate Gathering & Awarding Night is an appreciation evening for the best teams and partners. We executed the gala concept, stage and lighting production, awarding ceremony rundown, entertainment, and documentation — making every award moment feel special.',
      zh: '企业聚会暨颁奖之夜是属于最佳团队与伙伴的答谢夜。我们执行晚宴创意、舞台与灯光制作、颁奖流程、演出与影像记录——让每个颁奖时刻都格外特别。',
    },
    scope: {
      id: ['Konsep gala & tema awarding', 'Produksi panggung, lighting & LED screen', 'Rundown awarding ceremony & presenter', 'Hiburan, dokumentasi & after-movie'],
      en: ['Gala concept & awarding theme', 'Stage, lighting & LED screen production', 'Awarding ceremony rundown & presenters', 'Entertainment, documentation & aftermovie'],
      zh: ['晚宴创意与颁奖主题', '舞台、灯光与 LED 屏制作', '颁奖流程与颁奖嘉宾', '演出、影像记录与 aftermovie'],
    },
  },
  {
    slug: 'live-streaming-concert',
    title: { id: 'Live Streaming Concert', en: 'Live-Streamed Concert', zh: '线上直播音乐会' },
    category: 'hybrid',
    gathering: false,
    date: { month: 12, year: 2025 },
    place: 'Bandung',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=850&q=85',
    text: {
      id: 'Konser yang disiarkan langsung — produksi multi-kamera, audio, dan streaming berkualitas dari Bandung.',
      en: 'A live-streamed concert — multi-camera production, audio, and quality streaming from Bandung.',
      zh: '线上直播音乐会——来自万隆的多机位、音响与高质量流媒体制作。',
    },
    overview: {
      id: 'Live Streaming Concert ini diproduksi sebagai konser hibrida yang bisa dinikmati di mana saja. Kami menangani produksi panggung dan live streaming: setup multi-kamera, audio, encoding dan platform streaming, serta moderasi chat — hingga konten highlight setelahnya.',
      en: 'This Live-Streamed Concert was produced as a hybrid concert that could be enjoyed from anywhere. We handled the stage and streaming production: multi-camera setup, audio, streaming encoding and platform, and chat moderation — plus highlight content afterwards.',
      zh: '这场线上直播音乐会以混合式形式制作，让线上观众也能同步欣赏。我们负责舞台与直播制作：多机位设置、音响、推流编码与平台、聊天室管理——以及后续精彩剪辑。',
    },
    scope: {
      id: ['Produksi panggung & show management', 'Multi-kamera, audio & live switching', 'Encoding, platform & moderasi streaming', 'Konten highlight & distribusi pasca-acara'],
      en: ['Stage production & show management', 'Multi-camera, audio & live switching', 'Encoding, platform & stream moderation', 'Highlight content & post-event distribution'],
      zh: ['舞台制作与 show 执行', '多机位、音响与直播切换', '推流编码、平台与聊天室管理', '精彩剪辑与赛后分发'],
    },
  },
]

export function getEventBySlug(slug) {
  return events.find((event) => event.slug === slug) ?? null
}
