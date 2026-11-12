import { Link } from 'react-router-dom'
import { ButtonLink, PageHero, Wrap } from '../components/ui.jsx'
import { useLanguage } from '../i18n/language.js'

const contactEmail = 'hello@bmg.co.id'

export default function PrivacyPolicy() {
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'

  const sections = [
    {
      title: { id: '1. Pendahuluan', en: '1. Overview', zh: '1. 概述' },
      paragraphs: {
        id: [
          'Berkah Media Gemilang ("BMG", "kami") menghormati privasi setiap pengunjung situs ini. Kebijakan ini menjelaskan data apa yang kami proses saat Anda mengakses situs, mengisi formulir kontak, atau menghubungi kami — dan bagaimana kami menanganinya.',
          'Berlaku sejak 12 November 2026.',
        ],
        en: [
          'Berkah Media Gemilang ("BMG", "we") respects the privacy of every visitor to this website. This policy explains what data we process when you visit the site, submit the contact form, or reach out to us — and how we handle it.',
          'Effective November 12, 2026.',
        ],
        zh: [
          'Berkah Media Gemilang（“BMG”、“我们”）尊重每一位访问者的隐私。本政策说明您在访问本网站、填写联系表单或与我们联系时，我们会处理哪些数据，以及我们如何处理这些数据。',
          '自 2026 年 11 月 12 日起生效。',
        ],
      },
    },
    {
      title: { id: '2. Data yang Kami Kumpulkan', en: '2. Data We Collect', zh: '2. 我们收集的数据' },
      paragraphs: {
        id: [
          'Situs ini bersifat statis dan tidak menampung data formulir di server kami. Formulir kontak membuka aplikasi email Anda (mailto:), sehingga data hanya sampai ke kami bila Anda sendiri mengirim email tersebut.',
          'Bila Anda menghubungi kami melalui formulir email, WhatsApp, atau saluran lain, kami dapat memproses:',
        ],
        en: [
          'This website is static and does not store form submissions on our servers. The contact form opens your own mail app (mailto:), so your details only reach us if you actually send the email.',
          'If you contact us via the email form, WhatsApp, or any other channel, we may process:',
        ],
        zh: [
          '本网站为静态网站，不会在我们的服务器上存储表单提交内容。联系表单会打开您自己的邮件应用（mailto:），因此只有当您真正发送邮件时，您的信息才会送达我们。',
          '如果您通过邮件表单、WhatsApp 或其他渠道联系我们，我们可能会处理以下信息：',
        ],
      },
      list: {
        id: ['Nama lengkap', 'Alamat email', 'Nomor telepon', 'Jenis kebutuhan event', 'Isi pesan yang Anda kirim'],
        en: ['Full name', 'Email address', 'Phone number', 'Type of event inquiry', 'The message you send us'],
        zh: ['姓名', '电子邮箱', '电话号码', '活动需求类型', '您发送的留言内容'],
      },
    },
    {
      title: { id: '3. Bagaimana Kami Menggunakan Data', en: '3. How We Use Your Data', zh: '3. 我们如何使用您的数据' },
      paragraphs: {
        id: [
          'Kami hanya menggunakan data tersebut untuk: merespons pertanyaan Anda, menyiapkan dan mengirimkan penawaran atau proposal event, serta berkomunikasi terkait layanan yang Anda minta.',
          'Kami tidak menjual data pribadi Anda, dan tidak mengirimkan materi pemasaran tanpa persetujuan Anda.',
        ],
        en: [
          'We use this data only to: respond to your inquiries, prepare and send you event quotes or proposals, and communicate about the services you asked about.',
          'We do not sell your personal data, and we do not send marketing materials without your consent.',
        ],
        zh: [
          '我们仅将这些数据用于：回复您的咨询、为您准备并发送活动报价或提案，以及就您所咨询的服务与您沟通。',
          '我们不会出售您的个人数据，也不会在未经您同意的情况下发送营销内容。',
        ],
      },
    },
    {
      title: { id: '4. Cookie & Penyimpanan Lokal', en: '4. Cookies & Local Storage', zh: '4. Cookie 与本地存储' },
      paragraphs: {
        id: [
          'Situs ini tidak menggunakan cookie pelacakan. Kami hanya menyimpan satu preferensi Anda di localStorage browser: pilihan bahasa (kunci bmg-language). Data tersebut tidak meninggalkan perangkat Anda dan dapat dihapus kapan saja melalui pengaturan browser.',
        ],
        en: [
          'This website does not use tracking cookies. We only store one preference in your browser’s localStorage: your language choice (key bmg-language). That data never leaves your device and can be cleared at any time via your browser settings.',
        ],
        zh: [
          '本网站不使用跟踪型 Cookie。我们仅在您浏览器的 localStorage 中保存一项偏好设置：您的语言选择（键名 bmg-language）。该数据不会离开您的设备，您随时可以通过浏览器设置将其清除。',
        ],
      },
    },
    {
      title: { id: '5. Layanan Pihak Ketiga', en: '5. Third-Party Services', zh: '5. 第三方服务' },
      paragraphs: {
        id: [
          'Situs ini disajikan melalui GitHub Pages. Aset dan tautan di situs ini memuat layanan pihak ketiga berikut — masing-masing memiliki kebijakan privasi sendiri:',
        ],
        en: [
          'This website is served via GitHub Pages. Assets and links on this site involve the following third parties — each with its own privacy policy:',
        ],
        zh: [
          '本网站由 GitHub Pages 托管。网站上的资源与链接涉及以下第三方服务——各方均有其独立的隐私政策：',
        ],
      },
      list: {
        id: [
          'Google Fonts (Inter & Sora) — permintaan font saat halaman dibuka',
          'Unsplash — gambar yang ditampilkan di situs',
          'WhatsApp (wa.me) dan Google Maps — tautan keluar, baru dimuat bila Anda mengkliknya',
          'Penyedia layanan email kami — untuk korespondensi yang Anda kirim ke hello@bmg.co.id',
        ],
        en: [
          'Google Fonts (Inter & Sora) — font requests when the page loads',
          'Unsplash — images displayed on the site',
          'WhatsApp (wa.me) and Google Maps — outbound links, loaded only when you click them',
          'Our email provider — for correspondence you send to hello@bmg.co.id',
        ],
        zh: [
          'Google Fonts（Inter 与 Sora）—— 页面加载时的字体请求',
          'Unsplash —— 网站展示的图片',
          'WhatsApp（wa.me）与 Google 地图 —— 外部链接，仅在您点击时加载',
          '我们的邮件服务提供商 —— 用于您发送至 hello@bmg.co.id 的往来邮件',
        ],
      },
    },
    {
      title: { id: '6. Retensi & Keamanan', en: '6. Retention & Security', zh: '6. 数据保留与安全' },
      paragraphs: {
        id: [
          'Kami menyimpan korespondensi selama diperlukan untuk merespons permintaan Anda dan memenuhi kewajiban hukum yang berlaku — bukan lebih lama dari itu. Akses ke data dibatasi pada anggota tim yang berkepentingan.',
          'Tidak ada metode transmisi atau penyimpanan elektronik yang sepenuhnya aman. Kami menerapkan langkah-langkah wajar sesuai praktik yang berterima untuk melindungi data Anda.',
        ],
        en: [
          'We keep correspondence for as long as needed to respond to your request and meet applicable legal obligations — and not longer. Access to personal data is limited to the team members who need it.',
          'No electronic transmission or storage method is completely secure. We apply reasonable, accepted practices to protect your data.',
        ],
        zh: [
          '我们仅在回应您的请求及履行适用法律义务所需的期间内保留往来邮件，不会更久。个人数据的访问权限仅限于相关团队成员。',
          '没有任何电子传输或存储方式是完全安全的。我们会采取业界认可的合理措施来保护您的数据。',
        ],
      },
    },
    {
      title: { id: '7. Hak Anda', en: '7. Your Rights', zh: '7. 您的权利' },
      paragraphs: {
        id: [
          'Sesuai dengan Undang-Undang Pelindungan Data Pribadi (UU PDP) Republik Indonesia, Anda berhak untuk: mengakses data pribadi Anda yang kami proses, meminta perbaikan data yang tidak akurat, meminta penghapusan data Anda, serta menarik persetujuan yang telah Anda berikan.',
          'Untuk menggunakan hak-hak tersebut, hubungi kami melalui kontak di bagian bawah halaman ini. Kami akan merespons dalam waktu yang wajar.',
        ],
        en: [
          'Under the Indonesian Personal Data Protection Law (UU PDP), you have the right to: access the personal data we process about you, request correction of inaccurate data, request deletion of your data, and withdraw any consent you have given.',
          'To exercise any of these rights, contact us via the details at the bottom of this page. We will respond within a reasonable time.',
        ],
        zh: [
          '根据印度尼西亚《个人数据保护法》（UU PDP），您有权：访问我们处理的您的个人数据、要求更正不准确的数据、要求删除您的数据，以及撤回您已给予的同意。',
          '如需行使上述权利，请通过本页底部的联系方式与我们联系。我们将在合理的时间内予以回复。',
        ],
      },
    },
    {
      title: { id: '8. Perubahan Kebijakan', en: '8. Changes to This Policy', zh: '8. 政策变更' },
      paragraphs: {
        id: [
          'Kami dapat memperbarui kebijakan ini sewaktu-waktu. Versi terbaru selalu tersedia di halaman ini, dengan tanggal berlaku yang tercantum di bagian Pendahuluan.',
        ],
        en: [
          'We may update this policy from time to time. The latest version is always available on this page, with the effective date shown in the Overview section.',
        ],
        zh: [
          '我们可能会不时更新本政策。最新版本将始终发布在本页面，生效日期见“概述”部分。',
        ],
      },
    },
    {
      title: { id: '9. Kontak', en: '9. Contact', zh: '9. 联系我们' },
      paragraphs: {
        id: [
          'Pertanyaan tentang kebijakan ini atau data pribadi Anda? Hubungi kami:',
        ],
        en: [
          'Questions about this policy or your personal data? Get in touch:',
        ],
        zh: [
          '对本政策或您的个人数据有任何疑问？请联系我们：',
        ],
      },
      list: {
        id: [
          `Email: ${contactEmail}`,
          'Telepon / WhatsApp: +62 812-3456-7890 (Senin–Jumat, 09.00–18.00 WIB)',
          'Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Bandung, Jawa Barat',
        ],
        en: [
          `Email: ${contactEmail}`,
          'Phone / WhatsApp: +62 812-3456-7890 (Monday–Friday, 09.00–18.00 WIB)',
          'Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Bandung, West Java',
        ],
        zh: [
          `邮箱：${contactEmail}`,
          '电话 / WhatsApp：+62 812-3456-7890（周一至周五 09.00–18.00 WIB）',
          'Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Bandung, Jawa Barat（西爪哇万隆）',
        ],
      },
    },
  ]

  return (
    <>
      <PageHero
        breadcrumb={
          <>
            <Link to="/">{isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home'}</Link>
            <span aria-hidden="true">›</span>
            {isIndonesian ? 'Kebijakan Privasi' : isChinese ? '隐私政策' : 'Privacy Policy'}
          </>
        }
        eyebrow={isIndonesian ? 'Privasi' : isChinese ? '隐私' : 'Privacy'}
        title={
          isIndonesian ? (
            <>Kebijakan <span className="text-accent-400">Privasi</span></>
          ) : isChinese ? (
            <>隐私<span className="text-accent-400">政策</span></>
          ) : (
            <>Privacy <span className="text-accent-400">Policy</span></>
          )
        }
        lead={
          isIndonesian
            ? 'Bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda saat menggunakan situs BMG.'
            : isChinese
              ? '我们如何收集、使用和保护您在使用 BMG 网站时提供的数据。'
              : 'How we collect, use, and protect your data when you use the BMG website.'
        }
      />

      <section className="section section--white">
        <Wrap className="max-w-3xl">
          {sections.map((section) => (
            <section className="mt-10 first:mt-0" key={section.title.id} aria-labelledby={`privacy-${section.title.id.split('.')[0]}`}>
              <h2 className="h3" id={`privacy-${section.title.id.split('.')[0]}`}>{section.title[language]}</h2>
              {section.paragraphs[language].map((paragraph, index) => (
                <p className="mt-3 text-[15px] leading-relaxed text-muted" key={index}>
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-3 list-disc space-y-1.5 pl-6 text-[15px] leading-relaxed text-muted">
                  {section.list[language].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <div className="mt-12 flex flex-wrap gap-4 border-t border-line pt-8">
            <ButtonLink to="/contact" variant="primary">
              {isIndonesian ? 'Hubungi Kami' : isChinese ? '联系我们' : 'Contact Us'}
              <span className="btn__icon" aria-hidden="true">→</span>
            </ButtonLink>
            <a className="btn btn--outline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            <a
              className="btn btn--outline"
              href={`${import.meta.env.BASE_URL}privacy-policy.html`}
              title={isIndonesian ? 'Versi statis tanpa skrip — untuk pengunjung dengan ad blocker yang memblokir situs utama' : isChinese ? '静态无脚本版本——供广告拦截器拦截主站点时使用' : 'Statically rendered, script-free version — for visitors whose ad blocker blocks the main site'}
            >
              {isIndonesian ? 'Versi statis (tanpa skrip)' : isChinese ? '静态版本（无脚本）' : 'Static version (no scripts)'}
            </a>
          </div>
        </Wrap>
      </section>
    </>
  )
}
