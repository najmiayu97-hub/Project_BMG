import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Clock, Lock, Mail, MapPin, MessageSquare, Phone, User } from 'lucide-react'
import { PageHero, Wrap } from '../components/ui.jsx'
import { useLanguage } from '../i18n/language.js'

const contactPhoto = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1100&q=85'
const contactHeroPhoto = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85'

const countryCallingCodes = [
  ['AF', '+93'], ['AL', '+355'], ['DZ', '+213'], ['AS', '+1 684'], ['AD', '+376'], ['AO', '+244'],
  ['AI', '+1 264'], ['AG', '+1 268'], ['AR', '+54'], ['AM', '+374'], ['AW', '+297'], ['AU', '+61'],
  ['AT', '+43'], ['AZ', '+994'], ['BS', '+1 242'], ['BH', '+974'], ['BD', '+880'], ['BB', '+1 246'],
  ['BY', '+375'], ['BE', '+32'], ['BZ', '+501'], ['BJ', '+229'], ['BM', '+1 441'], ['BT', '+975'],
  ['BO', '+591'], ['BA', '+387'], ['BW', '+267'], ['BR', '+55'], ['VG', '+1 284'], ['BN', '+673'],
  ['BG', '+351'], ['BF', '+226'], ['BI', '+257'], ['KH', '+855'], ['CM', '+237'], ['CA', '+1'],
  ['CV', '+238'], ['KY', '+1 345'], ['CF', '+236'], ['TD', '+235'], ['CL', '+56'], ['CN', '+86'],
  ['CO', '+57'], ['KM', '+269'], ['CG', '+242'], ['CD', '+243'], ['CK', '+682'], ['CR', '+506'],
  ['CI', '+225'], ['HR', '+385'], ['CU', '+53'], ['CW', '+599'], ['CY', '+357'], ['CZ', '+420'],
  ['DK', '+45'], ['DJ', '+253'], ['DM', '+1 767'], ['DO', '+1 809'], ['DO', '+1 829'], ['DO', '+1 849'],
  ['EC', '+593'], ['EG', '+20'], ['SV', '+503'], ['GQ', '+240'], ['ER', '+291'], ['EE', '+372'],
  ['SZ', '+268'], ['ET', '+251'], ['FK', '+500'], ['FO', '+298'], ['FJ', '+679'], ['FI', '+358'],
  ['FR', '+33'], ['GF', '+594'], ['PF', '+689'], ['GA', '+241'], ['GM', '+220'], ['GE', '+995'],
  ['DE', '+49'], ['GH', '+233'], ['GI', '+350'], ['GR', '+30'], ['GL', '+299'], ['GD', '+1 473'],
  ['GP', '+590'], ['GU', '+1 671'], ['GT', '+502'], ['GG', '+44 1481'], ['GN', '+224'], ['GW', '+245'],
  ['GY', '+592'], ['HT', '+509'], ['HN', '+504'], ['HK', '+852'], ['HU', '+36'], ['IS', '+354'],
  ['IN', '+91'], ['ID', '+62'], ['IR', '+98'], ['IQ', '+964'], ['IE', '+353'], ['IM', '+44 1624'],
  ['IL', '+972'], ['IT', '+39'], ['JM', '+1 876'], ['JP', '+81'], ['JE', '+44 1534'], ['JO', '+962'],
  ['KZ', '+7'], ['KE', '+254'], ['KI', '+686'], ['XK', '+383'], ['KW', '+965'], ['KG', '+996'],
  ['LA', '+856'], ['LV', '+371'], ['LB', '+961'], ['LS', '+266'], ['LR', '+231'], ['LY', '+218'],
  ['LI', '+423'], ['LT', '+370'], ['LU', '+352'], ['MO', '+853'], ['MG', '+261'], ['MW', '+265'],
  ['MY', '+60'], ['MV', '+960'], ['ML', '+223'], ['MT', '+356'], ['MH', '+692'], ['MQ', '+596'],
  ['MR', '+222'], ['MU', '+230'], ['YT', '+262'], ['MX', '+52'], ['FM', '+691'], ['MD', '+373'],
  ['MC', '+377'], ['MN', '+976'], ['ME', '+382'], ['MS', '+1 664'], ['MA', '+212'], ['MZ', '+258'],
  ['MM', '+95'], ['NA', '+264'], ['NR', '+674'], ['NP', '+977'], ['NL', '+31'], ['NC', '+687'],
  ['NZ', '+64'], ['NI', '+505'], ['NE', '+227'], ['NG', '+234'], ['NU', '+683'], ['NF', '+672'],
  ['KP', '+850'], ['MK', '+389'], ['MP', '+1 670'], ['NO', '+47'], ['OM', '+968'], ['PK', '+92'],
  ['PW', '+680'], ['PS', '+970'], ['PA', '+507'], ['PG', '+675'], ['PY', '+595'], ['PE', '+51'],
  ['PH', '+63'], ['PL', '+48'], ['PT', '+351'], ['PR', '+1 787'], ['PR', '+1 939'], ['QA', '+974'],
  ['RE', '+262'], ['RO', '+40'], ['RU', '+7'], ['RW', '+250'], ['BL', '+590'], ['SH', '+290'],
  ['KN', '+1 869'], ['LC', '+1 758'], ['MF', '+590'], ['PM', '+508'], ['VC', '+1 784'],
  ['WS', '+685'], ['SM', '+378'], ['ST', '+239'], ['SA', '+966'], ['SN', '+221'], ['RS', '+381'],
  ['SC', '+248'], ['SL', '+232'], ['SG', '+65'], ['SX', '+1 721'], ['SK', '+421'], ['SI', '+386'],
  ['SB', '+677'], ['SO', '+258'], ['ZA', '+27'], ['KR', '+82'], ['SS', '+211'], ['ES', '+34'],
  ['LK', '+94'], ['SD', '+249'], ['SR', '+597'], ['SE', '+46'], ['CH', '+41'], ['SY', '+963'],
  ['TW', '+886'], ['TJ', '+992'], ['TZ', '+255'], ['TH', '+66'], ['TL', '+670'], ['TG', '+228'],
  ['TK', '+690'], ['TO', '+676'], ['TT', '+1 868'], ['TN', '+216'], ['TR', '+90'], ['TM', '+993'],
  ['TC', '+1 649'], ['TV', '+688'], ['UG', '+256'], ['UA', '+380'], ['AE', '+971'], ['GB', '+44'],
  ['US', '+1'], ['UY', '+598'], ['UZ', '+998'], ['VU', '+678'], ['VA', '+39 06 698'], ['VE', '+58'],
  ['VN', '+84'], ['VI', '+1 340'], ['WF', '+681'], ['EH', '+212'], ['YE', '+967'], ['ZM', '+260'],
  ['ZW', '+263'], ['AX', '+358 18'],
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const { language } = useLanguage()
  const isIndonesian = language === 'id'
  const isChinese = language === 'zh'
  const countryNames = new Intl.DisplayNames([isIndonesian ? 'id' : isChinese ? 'zh' : 'en'], { type: 'region' })

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
    countryCode: isIndonesian ? 'Kode negara' : isChinese ? '国家区号' : 'Country calling code',
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Inquiry — ${form.get('inquiry') || 'Event'}`)
    const body = encodeURIComponent(
      `Nama: ${form.get('name')}\nEmail: ${form.get('email')}\nTelepon: ${form.get('countryCode')} ${form.get('phone')}\n\n${form.get('message')}`
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
        <Wrap className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
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
                {t.name} <span className="text-brand-600" aria-hidden="true">*</span>
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
                {t.email} <span className="text-brand-600" aria-hidden="true">*</span>
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
                  {t.phone} <span className="text-brand-600" aria-hidden="true">*</span>
                </label>
                <div className="input-wrap">
                  <select
                    className="w-[46%] min-w-0 shrink-0 cursor-pointer border-0 bg-transparent text-[14px] text-ink-900 outline-0"
                    aria-label={t.countryCode}
                    name="countryCode"
                    defaultValue="+62"
                  >
                    {countryCallingCodes.map(([countryCode, callingCode], index) => (
                      <option key={`${countryCode}-${callingCode}-${index}`} value={callingCode}>
                        {countryNames.of(countryCode)} ({callingCode})
                      </option>
                    ))}
                  </select>
                  <input
                    className="input min-w-0 flex-1 border-l border-line pl-3"
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel-national"
                    inputMode="tel"
                    placeholder="812 3456 7890"
                    required
                  />
                </div>
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
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {isIndonesian ? 'Pilih kebutuhan Anda' : isChinese ? '请选择您的需求' : 'Select your needs'}
                    </option>
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
                {t.message} <span className="text-brand-600" aria-hidden="true">*</span>
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

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button className="btn btn--primary" type="submit">
                {t.submit}
                <span className="btn__icon" aria-hidden="true">→</span>
              </button>
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

            <ul className="mt-8 grid gap-5">
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
              className="group relative mt-8 block h-[180px] overflow-hidden rounded-[20px] bg-ink-800"
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
