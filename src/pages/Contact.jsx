import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Clock, Lock, Mail, MapPin, MessageSquare, Phone, User } from 'lucide-react'
import { PageHero, Wrap } from '../components/ui.jsx'
import { useLanguage } from '../i18n/language.js'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'

const contactPhoto = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1100&q=85'
const contactHeroPhoto = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [phone, setPhone] = useState()
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'

  const t = {
    name: isIndonesian ? 'Nama lengkap' : isChinese ? '姓名' : 'Full name',
    email: 'Email',
    phone: isIndonesian ? 'Nomor telepon' : isChinese ? '电话号码' : 'Phone number',
    inquiry: isIndonesian ? 'Jenis kebutuhan' : isChinese ? '需求类型' : 'Inquiry type',
    message: isIndonesian ? 'Pesan' : isChinese ? '留言' : 'Message',
    submit: isIndonesian ? 'Kirim pesan' : isChinese ? '发送消息' : 'Send message',
    sent: isIndonesian
      ? 'Kami membuka aplikasi email Anda — kirim pesan tersebut untuk menghubungi tim kami.'
      : isChinese
        ? '我们已打开您的邮件应用——发送该邮件即可联系我们的团队。'
        : 'We opened your email app — send that message to reach our team.',
    privacy: isIndonesian
      ? 'Informasi Anda akan kami jaga kerahasiaannya.'
      : isChinese
        ? '您的信息将被严格保密。'
        : 'Your information will be kept confidential.',
    address: 'Jl. Tamblong No.46, Kb. Pisang, Kec. Sumur Bandung, Bandung, Jawa Barat 40112',
    hours: isIndonesian ? 'Senin – Jumat' : isChinese ? '周一 – 周五' : 'Monday – Friday',
    map: isIndonesian ? 'Lihat di Google Maps' : isChinese ? '查看 Google 地图' : 'View on Google Maps',
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Inquiry — ${form.get('inquiry') || 'Event'}`)
    const body = encodeURIComponent(
      `Nama: ${form.get('name')}\nEmail: ${form.get('email')}\nTelepon: ${phone || ''}\n\n${form.get('message')}`
    )
    window.location.href = `mailto:hello@bmg.co.id?subject=${subject}&body=${body}`
    setSent(true)
  }

  const details = [
    {
      Icon: MapPin,
      label: isIndonesian ? 'Alamat kantor' : isChinese ? '办公地址' : 'Office address',
      value: t.address,
    },
    {
      Icon: Mail,
      label: 'Email',
      value: 'hello@bmg.co.id',
      href: 'mailto:hello@bmg.co.id',
    },
    {
      Icon: Phone,
      label: isIndonesian ? 'Telepon / WhatsApp' : isChinese ? '电话 / WhatsApp' : 'Phone / WhatsApp',
      value: '+62 812-3456-7890',
      href: 'tel:+6281234567890',
    },
    {
      Icon: Clock,
      label: isIndonesian ? 'Jam operasional' : isChinese ? '营业时间' : 'Business hours',
      value: `${t.hours}\n09.00 – 18.00 WIB`,
    },
  ]

  return (
    <>
      <PageHero
        image={contactHeroPhoto}
        breadcrumb={
          <>
            <Link to="/">{isIndonesian ? 'Beranda' : isChinese ? '首页' : 'Home'}</Link>
            <span aria-hidden="true">›</span>
            {isIndonesian ? 'Kontak' : isChinese ? '联系' : 'Contact'}
          </>
        }
        eyebrow={isIndonesian ? 'Kontak' : isChinese ? '联系' : 'Contact'}
        title={
          isIndonesian ? (
            <>
              Hubungi <span className="text-accent-400">kami</span>
            </>
          ) : isChinese ? (
            <>
              联系<span className="text-accent-400">我们</span>
            </>
          ) : (
            <>
              Contact <span className="text-accent-400">us</span>
            </>
          )
        }
        lead={
          isIndonesian
            ? 'Kami senang mendengar dari Anda. Isi formulir ini dan tim kami akan segera menghubungi Anda.'
            : isChinese
              ? '我们很期待听到您的想法。填写表单后，我们的团队会尽快与您联系。'
              : "We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible."
        }
      />

      <section className="section">
        <Wrap className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Form ------------------------------------------------------- */}
          <form className="card p-7 md:p-9" onSubmit={handleSubmit}>
            <h2 className="h3 text-[22px]">{isIndonesian ? 'Kirim pesan' : isChinese ? '留言给我们' : 'Send us a message'}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {isIndonesian
                ? 'Ceritakan kebutuhan event Anda kepada kami. Tim kami siap membantu memberikan solusi terbaik.'
                : isChinese
                  ? '告诉我们您的活动需求，我们的团队将为您提供最合适的解决方案。'
                  : 'Tell us about your event needs. Our team is ready to help you find the right solution.'}
            </p>

            <div className="mt-7">
              <label className="label" htmlFor="contact-name">
                {t.name} <span className="font-bold text-red-600" aria-hidden="true">*</span>
              </label>
              <div className="input-wrap">
                <User size={17} aria-hidden="true" />
                <input
                  className="input"
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={isIndonesian ? 'Masukkan nama lengkap Anda' : isChinese ? '请输入您的姓名' : 'Enter your full name'}
                  required
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="label" htmlFor="contact-email">
                {t.email} <span className="font-bold text-red-600" aria-hidden="true">*</span>
              </label>
              <div className="input-wrap">
                <Mail size={17} aria-hidden="true" />
                <input
                  className="input"
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="email@domain.com"
                  required
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="contact-phone">
                  {t.phone} <span className="font-bold text-red-600" aria-hidden="true">*</span>
                </label>
                <PhoneInput
                  className="input-wrap"
                  flags={flags}
                  defaultCountry="ID"
                  international
                  countryCallingCodeEditable={false}
                  value={phone}
                  onChange={setPhone}
                  required
                  autoComplete="tel"
                  numberInputProps={{
                    id: 'contact-phone',
                    className: 'input',
                    placeholder: '812 3456 7890',
                  }}
                />
              </div>

              <div>
                <label className="label" htmlFor="contact-inquiry">
                  {t.inquiry}
                </label>
                <div className="input-wrap relative">
                  <select
                    className="w-full cursor-pointer appearance-none border-0 bg-transparent pr-6 text-[14px] text-ink-900 outline-0"
                    id="contact-inquiry"
                    name="inquiry"
                    defaultValue="Event Planning"
                  >
                    <option>Event Planning</option>
                    <option>Event Production</option>
                    <option>Brand Activation</option>
                    <option>Media & Digital</option>
                    <option>{isIndonesian ? 'Lainnya' : isChinese ? '其他' : 'Other'}</option>
                  </select>
                  <ChevronDown size={16} className="pointer-events-none text-muted-2" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label className="label" htmlFor="contact-message">
                {t.message} <span className="font-bold text-red-600" aria-hidden="true">*</span>
              </label>
              <div className="input-wrap items-start">
                <MessageSquare size={17} className="mt-3 shrink-0" aria-hidden="true" />
                <textarea
                  className="input textarea"
                  id="contact-message"
                  name="message"
                  placeholder={
                    isIndonesian
                      ? 'Tulis pesan atau detail kebutuhan event Anda...'
                      : isChinese
                        ? '请输入您的留言或活动需求...'
                        : 'Write your message or event requirements...'
                  }
                  required
                />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <p className="flex items-center gap-2 text-[13px] text-muted" role="status" aria-live="polite">
                {sent ? (
                  <span className="text-success-600">{t.sent}</span>
                ) : (
                  <>
                    <Lock size={14} aria-hidden="true" />
                    {t.privacy}
                  </>
                )}
              </p>
              <button className="btn btn--primary" type="submit">
                {t.submit}
                <span className="btn__icon" aria-hidden="true">→</span>
              </button>
            </div>
          </form>

          {/* Details ---------------------------------------------------- */}
          <aside className="lg:border-l lg:border-line lg:pl-10">
            <h2 className="h3 text-[22px]">
              {isIndonesian ? 'Informasi kontak' : isChinese ? '联系信息' : 'Contact information'}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {isIndonesian
                ? 'Anda juga dapat menghubungi kami melalui informasi di bawah ini.'
                : isChinese
                  ? '您也可以通过以下方式联系我们。'
                  : 'You can also reach us using the contact details below.'}
            </p>

            <ul className="mt-4 md:mt-8 grid gap-4 md:gap-5">
              {details.map((detail) => (
                <li className="flex items-start gap-4" key={detail.label}>
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-[12px] bg-ink-900 text-white">
                    <detail.Icon size={17} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[13px] font-bold uppercase tracking-[0.06em] text-ink-900">{detail.label}</h3>
                    {detail.href ? (
                      <a
                        className="mt-1 block text-[15px] leading-relaxed text-muted transition-colors hover:text-brand-600"
                        href={detail.href}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 whitespace-pre-line text-[15px] leading-relaxed text-muted">{detail.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              className="group relative mt-4 md:mt-8 block h-[180px] overflow-hidden rounded-[20px] bg-ink-800"
              href="https://maps.google.com/?q=Jl.+Tamblong+No.46,+Bandung"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={contactPhoto}
                alt={isIndonesian ? 'Area sekitar kantor BMG di Bandung' : isChinese ? 'BMG 位于万隆的办公室周边区域' : 'Area around the BMG office in Bandung'}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink-900 shadow-lg">
                <MapPin size={20} />
              </span>
              <span className="chip absolute bottom-4 left-4 bg-white text-ink-900">
                {t.map} <span aria-hidden="true">→</span>
              </span>
            </a>
          </aside>
        </Wrap>
      </section>
    </>
  )
}
