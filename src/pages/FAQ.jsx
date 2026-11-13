import { Link } from 'react-router-dom'
import { PageHero, Wrap } from '../components/ui.jsx'
import { useLanguage } from '../i18n/language.js'

export default function FAQ() {
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'

  const items = isIndonesian
    ? [
        { q: 'Bagaimana cara menghubungi BMG?', a: 'Anda dapat mengisi formulir di halaman Kontak atau mengirim email ke hello@bmg.co.id.' },
        { q: 'Apakah BMG melayani event di luar Bandung?', a: 'Ya, kami dapat menyesuaikan lokasi event sesuai kebutuhan klien.' },
        { q: 'Berapa lama proses perencanaan event?', a: 'Tergantung skala event, biasanya 2 hingga 8 minggu.' },
        { q: 'Apakah BMG menyediakan vendor?', a: 'Kami dapat mengoordinasikan vendor yang dibutuhkan untuk event Anda.' },
      ]
    : isChinese
      ? [
          { q: '如何联系 BMG？', a: '您可以通过联系页面表单或发送邮件至 hello@bmg.co.id 与我们联系。' },
          { q: 'BMG 是否服务万隆以外的活动？', a: '是的，我们可以根据客户需求调整活动地点。' },
          { q: '活动策划需要多长时间？', a: '取决于活动规模，通常为 2 至 8 周。' },
          { q: 'BMG 是否提供供应商？', a: '我们可以为您的活动协调所需的供应商。' },
        ]
      : [
          { q: 'How can I contact BMG?', a: 'You can fill out the form on the Contact page or email hello@bmg.co.id.' },
          { q: 'Does BMG handle events outside Bandung?', a: 'Yes, we can adapt to event locations based on client needs.' },
          { q: 'How long does event planning take?', a: 'Depending on scale, typically 2 to 8 weeks.' },
          { q: 'Does BMG provide vendors?', a: 'We can coordinate the vendors needed for your event.' },
        ]

  return (
    <>
      <PageHero
        breadcrumb={
          <>
            <Link to="/">{isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home'}</Link>
            <span aria-hidden="true">›</span>
            {isIndonesian ? 'FAQ' : isChinese ? '常见问题' : 'FAQ'}
          </>
        }
        eyebrow={isIndonesian ? 'Bantuan' : isChinese ? '帮助' : 'Help'}
        title={isIndonesian ? <>Pertanyaan <span className="text-accent-400">Umum</span></> : isChinese ? <>常见<span className="text-accent-400">问题</span></> : <>Frequently Asked <span className="text-accent-400">Questions</span></>}
        lead={isIndonesian ? 'Jawaban atas pertanyaan yang sering diajukan tentang layanan BMG.' : isChinese ? '关于 BMG 服务的常见问题解答。' : 'Answers to common questions about BMG services.'}
      />
      <section className="section section--white">
        <Wrap className="max-w-3xl">
          <div className="grid gap-4">
            {items.map((item) => (
              <details key={item.q} className="card p-6">
                <summary className="cursor-pointer list-none text-[16px] font-bold text-ink-900">{item.q}</summary>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 md:mt-10">
            <Link to="/contact" className="btn btn--primary">
              {isIndonesian ? 'Masih ada pertanyaan?' : isChinese ? '还有问题？' : 'Still have questions?'}
              <span className="btn__icon" aria-hidden="true">→</span>
            </Link>
          </div>
        </Wrap>
      </section>
    </>
  )
}