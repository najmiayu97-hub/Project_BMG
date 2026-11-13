import { Link } from 'react-router-dom'
import { ButtonLink, PageHero, Wrap } from '../components/ui.jsx'
import { useLanguage } from '../i18n/language.js'

export default function Help() {
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'

  return (
    <>
      <PageHero
        breadcrumb={
          <>
            <Link to="/">{isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home'}</Link>
            <span aria-hidden="true">›</span>
            {isIndonesian ? 'Pusat Bantuan' : isChinese ? '帮助中心' : 'Help Center'}
          </>
        }
        eyebrow={isIndonesian ? 'Bantuan' : isChinese ? '帮助' : 'Help'}
        title={isIndonesian ? <>Pusat <span className="text-accent-400">Bantuan</span></> : isChinese ? <>帮助<span className="text-accent-400">中心</span></> : <>Help <span className="text-accent-400">Center</span></>}
        lead={isIndonesian ? 'Butuh bantuan? Hubungi tim BMG atau lihat tautan di bawah ini.' : isChinese ? '需要帮助？请联系 BMG 团队或查看以下链接。' : 'Need help? Contact the BMG team or see the links below.'}
      />
      <section className="section section--white">
        <Wrap className="max-w-3xl">
          <ul className="grid gap-4">
            <li className="card p-6">
              <h2 className="h3">{isIndonesian ? 'Hubungi Kami' : isChinese ? '联系我们' : 'Contact Us'}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{isIndonesian ? 'Kirim pesan lewat formulir kontak kami.' : isChinese ? '通过联系表单给我们留言。' : 'Send us a message through our contact form.'}</p>
              <ButtonLink to="/contact" variant="primary" className="mt-4">
                {isIndonesian ? 'Ke halaman kontak' : isChinese ? '前往联系页面' : 'Go to contact page'}
                <span className="btn__icon" aria-hidden="true">→</span>
              </ButtonLink>
            </li>
            <li className="card p-6">
              <h2 className="h3">{isIndonesian ? 'Kebijakan Privasi' : isChinese ? '隐私政策' : 'Privacy Policy'}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{isIndonesian ? 'Pelajari bagaimana kami melindungi data Anda.' : isChinese ? '了解我们如何保护您的数据。' : 'Learn how we protect your data.'}</p>
              <Link to="/privacy" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                {isIndonesian ? 'Baca kebijakan privasi' : isChinese ? '阅读隐私政策' : 'Read privacy policy'}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
            <li className="card p-6">
              <h2 className="h3">{isIndonesian ? 'FAQ' : isChinese ? '常见问题' : 'FAQ'}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{isIndonesian ? 'Lihat pertanyaan yang sering diajukan.' : isChinese ? '查看常见问题。' : 'See frequently asked questions.'}</p>
              <Link to="/faq" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                {isIndonesian ? 'Buka FAQ' : isChinese ? '打开常见问题' : 'Open FAQ'}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </Wrap>
      </section>
    </>
  )
}