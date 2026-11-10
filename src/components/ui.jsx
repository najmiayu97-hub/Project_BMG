import { Link } from 'react-router-dom'

/** Centred content column shared by every section. */
export function Wrap({ className = '', children, ...props }) {
  return (
    <div className={`wrap ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

/** Small uppercase label with a leading rule. */
export function Eyebrow({ children, dark = false, accent = false, center = false, className = '' }) {
  const classes = [
    'eyebrow',
    dark ? 'eyebrow--onDark' : '',
    accent ? 'eyebrow--accent' : '',
    center ? 'eyebrow--center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <p className={classes}>{children}</p>
}

/** Button that renders a router Link or a plain anchor. */
export function ButtonLink({
  to,
  href,
  variant = 'primary',
  size,
  block = false,
  className = '',
  children,
  ...props
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    block ? 'btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )
}

/** Consistent section heading: eyebrow, title, optional lead. */
export function SectionHead({ eyebrow, title, lead, dark = false, center = false, className = '' }) {
  return (
    <div className={`section-head ${center ? 'section-head--center' : ''} ${className}`.trim()}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2 className="h2">{title}</h2>
      {lead ? <p className={`lead ${dark ? 'lead--onDark' : ''}`}>{lead}</p> : null}
    </div>
  )
}

/** Shared hero for inner pages. */
export function PageHero({ eyebrow, title, lead, image, breadcrumb }) {
  return (
    <section className="page-hero">
      {image ? <img className="page-hero__media" src={image} alt="" aria-hidden="true" /> : null}
      <div className="page-hero__scrim" aria-hidden="true" />
      <Wrap className="page-hero__inner">
        {breadcrumb ? (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            {breadcrumb}
          </nav>
        ) : null}
        {eyebrow ? <Eyebrow dark>{eyebrow}</Eyebrow> : null}
        <h1 className="display-2">{title}</h1>
        {lead ? <p className="lead lead--onDark page-hero__lead">{lead}</p> : null}
      </Wrap>
    </section>
  )
}

/** Brand mark: a four-point spark (Gemilang) plus the wordmark. */
export function Logo({ light = false, className = '' }) {
  return (
    <Link
      to="/"
      className={`logo ${light ? 'logo--light' : ''} ${className}`.trim()}
      aria-label="BMG — Beranda"
    >
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <path d="M32 7l6.2 18.8L57 32l-18.8 6.2L32 57l-6.2-18.8L7 32l18.8-6.2L32 7z" fill="currentColor" />
      </svg>
      <span className="logo__type">BMG</span>
    </Link>
  )
}
