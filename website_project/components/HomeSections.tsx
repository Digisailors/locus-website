import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, ArrowUp, Building2, Factory, GraduationCap, HeartPulse, Hotel, Plane,
  ShoppingBag, Trophy, Wifi, MapPin, Package, ShieldCheck, Users, Radar, Navigation,
} from 'lucide-react'

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

/* ---------- Intro ---------- */
function Intro() {
  return (
    <section className="cs-intro">
      <div className="cs-intro__wave" aria-hidden="true"><i /><i /></div>
      <div className="cs-wrap cs-intro__inner">
        <motion.p className="cs-intro__brand" {...reveal}>Locus Spatial Intelligence</motion.p>
        <motion.h1 {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
          Turn Your Buildings into Smart Spaces
        </motion.h1>
        <motion.p className="cs-intro__lead" {...reveal} transition={{ ...reveal.transition, delay: 0.16 }}>
          A cloud platform that connects <b className="is-people">people</b> &amp; <b className="is-things">things</b> with
          spaces with no additional hardware and drives efficiency &amp; cost optimizations
        </motion.p>
        <motion.div className="cs-intro__cta" {...reveal} transition={{ ...reveal.transition, delay: 0.24 }}>
          <Link href="/discover/experience-locus" className="cs-btn cs-btn--dark">Experience Locus</Link>
          <Link href="/resources/product-tour" className="cs-btn cs-btn--outline">Start Product Tour</Link>
        </motion.div>
        <motion.p className="cs-intro__trust" {...reveal} transition={{ ...reveal.transition, delay: 0.32 }}>
          Trusted by teams in <b>every kind of space</b>, from hospitals to stadiums
        </motion.p>
        <motion.ul className="cs-logos" {...reveal} transition={{ ...reveal.transition, delay: 0.4 }}>
          {[
            [HeartPulse, 'Healthcare'], [ShoppingBag, 'Retail'], [GraduationCap, 'Campuses'],
            [Plane, 'Airports'], [Trophy, 'Venues'], [Factory, 'Industry'],
          ].map(([Icon, label]: any) => (
            <li key={label}><Icon size={30} aria-hidden="true" /><span>{label}</span></li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

/* ---------- Solution tiles ---------- */
function Tiles() {
  return (
    <section className="cs-tiles">
      <div className="cs-wrap cs-tiles__grid">
        {/* Wide tile */}
        <motion.article className="cs-tile cs-tile--wide" {...reveal}>
          <div className="cs-tile__text">
            <p className="cs-eyebrow is-green">Optimize your workspace</p>
            <h3>Smarter Workspaces, Better Hybrid Work: Optimise Space, Energy &amp; Wellbeing</h3>
            <ul className="cs-pills"><li>Space analytics</li><li>Smart rooms</li><li>Wayfinding</li></ul>
            <Link href="/solutions/smart-workspaces" className="cs-see">See How <span><ArrowRight size={16} /></span></Link>
          </div>
          <div className="cs-art cs-art--work" aria-hidden="true">
            <div className="cs-art__grid">
              <b className="c1">15%</b><b className="c2">10%</b><b className="c3">40%</b><b className="c4">15%</b>
            </div>
            <div className="cs-art__ring"><span>Wellbeing</span><small>2 people in this space</small></div>
            <div className="cs-art__monitor"><i /><i /><i /><i /><i /></div>
            <div className="cs-art__phone"><i /><i /></div>
          </div>
        </motion.article>

        <motion.article className="cs-tile" {...reveal}>
          <p className="cs-eyebrow is-amber">Create moments that matter</p>
          <h3>Memorable Customer Experiences, Smart Analytics: Drive Engagement and Growth</h3>
          <ul className="cs-pills"><li>Guest onboarding</li><li>Personalized engagements</li><li>Wi-Fi monetization</li></ul>
          <div className="cs-art cs-art--guest" aria-hidden="true">
            <div className="cs-art__bubble"><b>Locus</b> Lisa, Enjoy 20% Off Your In-Store Purchase Today!</div>
            <div className="cs-art__wifi"><Wifi size={34} /><em>Connected to Wi-Fi</em></div>
            <div className="cs-art__person p1" /><div className="cs-art__person p2" />
          </div>
          <Link href="/solutions/smart-venues" className="cs-see">See How <span><ArrowRight size={16} /></span></Link>
        </motion.article>

        <motion.article className="cs-tile" {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
          <p className="cs-eyebrow is-blue">Smarter &amp; safer healthcare</p>
          <h3>Better Patient Experiences, Efficient Operations &amp; People Safety</h3>
          <ul className="cs-pills"><li>Asset tracking</li><li>People safety</li><li>Environmental monitoring</li></ul>
          <div className="cs-art cs-art--care" aria-hidden="true">
            <span className="cs-art__pulse" /><span className="cs-art__pulse p2" />
            <div className="cs-art__ap"><Radar size={30} /></div>
            <div className="cs-art__handset"><i /><i /><i /><MapPin size={16} /></div>
          </div>
          <Link href="/solutions/smart-healthcare" className="cs-see">See How <span><ArrowRight size={16} /></span></Link>
        </motion.article>
      </div>
    </section>
  )
}

/* ---------- Connect people & things ---------- */
function Connect() {
  return (
    <section className="cs-connect">
      <div className="cs-wrap cs-connect__grid">
        <motion.div className="cs-connect__text" {...reveal}>
          <h2>Connect <em className="is-people">people</em> &amp; <em className="is-things">things</em> in your buildings</h2>
          <p>
            Locus captures location signals from <b className="is-people">people</b> and <b className="is-things">things</b> within
            your buildings. By leveraging your existing network infrastructure &ndash; access points, switches, cameras,
            collaboration devices and third-party IoT sensors &ndash; you can now make your buildings smarter at a low TCO
            (Total Cost of Ownership) and at unprecedented scale.
          </p>
          <Link href="/discover/locus-platform" className="cs-know">Know more <ArrowRight size={20} /></Link>
        </motion.div>

        <motion.div className="cs-iso" {...reveal} transition={{ ...reveal.transition, delay: 0.12 }} aria-hidden="true">
          <svg viewBox="0 0 520 600">
            <defs>
              <linearGradient id="isoL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#38bdf8" /><stop offset="1" stopColor="#0e7490" /></linearGradient>
              <linearGradient id="isoR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4ade80" /><stop offset="1" stopColor="#166534" /></linearGradient>
              <radialGradient id="cloud" cx=".5" cy=".4" r=".7"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#d7f5df" /></radialGradient>
            </defs>
            <polygon points="30,380 260,490 260,580 30,470" fill="url(#isoL)" />
            <polygon points="260,490 490,380 490,470 260,580" fill="url(#isoR)" />
            <polygon points="260,270 490,380 260,490 30,380" fill="#fff" stroke="#bfe9cc" strokeWidth="2" />
            {[[150, 380], [260, 330], [370, 380], [260, 440], [200, 350], [330, 420]].map(([x, y], i) => (
              <g key={i}>
                <line x1={x} y1={y} x2="260" y2="380" className="cs-iso__link" />
                <circle cx={x} cy={y} r="9" fill="#22c55e" className="cs-iso__node" style={{ animationDelay: `${i * 0.35}s` }} />
              </g>
            ))}
            <line x1="260" y1="380" x2="260" y2="170" className="cs-iso__beam" />
            <line x1="235" y1="380" x2="235" y2="190" className="cs-iso__beam b2" />
            <line x1="285" y1="380" x2="285" y2="190" className="cs-iso__beam b3" />
            <ellipse cx="260" cy="160" rx="120" ry="52" fill="url(#cloud)" className="cs-iso__cloud" />
            <ellipse cx="260" cy="120" rx="70" ry="30" fill="#86efac" opacity=".85" className="cs-iso__cloud" />
            <ellipse cx="260" cy="60" rx="46" ry="20" fill="#22c55e" opacity=".9" className="cs-iso__cloud" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- In a nutshell ---------- */
const floaters = [
  [Building2, 'f1'], [Navigation, 'f2'], [Package, 'f3'], [ShieldCheck, 'f4'], [Users, 'f5'], [MapPin, 'f6'],
] as const

function Nutshell() {
  return (
    <section className="cs-nut">
      <div className="cs-wrap">
        <motion.div className="cs-laptop" {...reveal}>
          {floaters.map(([Icon, cls]) => <span key={cls} className={`cs-float ${cls}`}><Icon size={44} /></span>)}
          <div className="cs-laptop__screen">
            <p>Digitization Stats</p>
            <div className="cs-laptop__stats">
              {['1,201 Locations', '33,467 Access Points', '108M Location Updates', '85M Sq. Ft.', '25M Visitors', '159M Visits'].map((s) => (
                <span key={s}><b>{s.split(' ')[0]}</b>{s.split(' ').slice(1).join(' ')}</span>
              ))}
            </div>
            <div className="cs-laptop__apps">
              {['Behavior Metrics', 'Right Now', 'Camera Metrics', 'OpenRoaming', 'Location Analytics', 'Detect & Locate'].map((a) => <span key={a}>{a}</span>)}
            </div>
          </div>
          <div className="cs-laptop__base" />
        </motion.div>

        <motion.h2 className="cs-nut__title" {...reveal}>Locus in a nutshell</motion.h2>
        <div className="cs-nut__cols">
          <motion.div {...reveal}>
            <h3>Native Apps</h3>
            <p>Location-powered apps built by Locus to help you derive quick value</p>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <h3>App Center</h3>
            <p>Ready-to-install apps, built by industry-leading app developers</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Licence banner ---------- */
function LicenceBanner() {
  return (
    <section className="cs-lic">
      <div className="cs-lic__glow" aria-hidden="true" />
      <motion.div className="cs-lic__inner" {...reveal}>
        <h2>Got Locus licences?<br /><span>Let&apos;s <mark>Find</mark> Them!</span></h2>
        <Link href="/contact" className="cs-btn cs-btn--green">Find my licence now <ArrowRight size={18} /></Link>
      </motion.div>
    </section>
  )
}

/* ---------- Stories ---------- */
const stories = [
  { img: '/images/retail_hero.webp', tag: 'Retail group', cta: 'Watch the story', quote: 'With Locus, we can get in touch with customers at the right moment and create what we call personalised personas. We know if a customer is a frequent weekend visitor, or a daily visitor, and we get insight into shopping habits.', name: 'IT Product Owner', role: 'Retail group' },
  { img: '/images/real_estate_hero.webp', tag: 'Report', cta: 'Get the report', quote: 'The benefit of Locus comes down to a colleague’s efficiency. We reduced a 30-minute journey to find a room to just 2 minutes, saving significant time across a large workforce.', name: 'Program Manager', role: 'Financial services' },
  { img: '/images/healthcare_hero.webp', tag: 'Health system', cta: 'Read the case study', quote: 'Asset tracking was always on our roadmap. Clinicians now have the right equipment in the right place at the right time. Frontline staff have more time to care for patients.', name: 'Director of Digital Transformation', role: 'Health system' },
]

function Stories() {
  return (
    <section className="cs-stories">
      <div className="cs-wrap">
        <motion.div className="cs-center" {...reveal}>
          <h2>Stories from Locus</h2>
          <p>Real Stories. Real Customers. Really Smart Spaces</p>
        </motion.div>
        <div className="cs-stories__grid">
          {stories.map((s, i) => (
            <motion.article key={s.tag} className="cs-story" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
              <div className="cs-story__media">
                <img src={s.img} alt="" loading="lazy" />
                <span className="cs-story__tint" />
                <Link href="/resources/stories-from-locus" className="cs-story__btn">{s.cta} <ArrowUpRight size={16} /></Link>
              </div>
              <div className="cs-story__body">
                <p>{s.quote}</p>
                <b>{s.name}</b>
                <span>{s.role}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Latest resources ---------- */
const latest = [
  { tag: 'Webinar', title: 'Smart Spaces Starts Here', date: 'September 21, 2026', href: '/resources/webinars', img: '/images/cards/webinar.svg', tone: 'a' },
  { tag: 'Articles / Blogs', title: 'Beyond Guest Wi-Fi: What You Can Actually Do with Locus Captive Portal', date: 'September 7, 2026', href: '/resources/blogs', img: '/images/cards/guest.svg', tone: 'b' },
  { tag: 'On-demand webinar', title: 'Session 1: Onboard Your Guests and Employees with Captive Portals', date: 'September 7, 2026', href: '/resources/webinars', img: '/images/cards/laptop.svg', tone: 'c' },
  { tag: 'Articles / Blogs', title: 'Introducing Locus Asset Tracking: Your Network Just Learned a New Trick', date: 'July 24, 2026', href: '/resources/blogs', img: '/images/cards/asset.svg', tone: 'd' },
]

function Latest() {
  return (
    <section className="cs-latest">
      <div className="cs-wrap">
        <motion.h2 {...reveal}>Our latest resources</motion.h2>
        <div className="cs-latest__grid">
          {latest.map((r, i) => (
            <motion.div key={r.title} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
              <Link href={r.href} className="cs-res">
                <div className={`cs-res__media t-${r.tone}`}><img src={r.img} alt="" loading="lazy" /><span>{r.tag}</span></div>
                <h3>{r.title}</h3>
                <p>{r.date}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Featured outcomes ---------- */
const outcomes = [
  ['Indoor Location Services', '/solutions/indoor-navigation'], ['Smart Logistics', '/solutions/asset-tracking'],
  ['Occupancy Monitoring', '/solutions/occupancy-monitoring'], ['Smart Hospitals', '/solutions/smart-healthcare'],
  ['Contact Tracing', '/solutions/detect-locate'], ['Location Analytics', '/solutions/location-analytics'],
  ['Asset Tracking', '/solutions/asset-tracking'], ['Density Monitoring', '/solutions/density-monitoring'],
  ['Indoor Navigation', '/solutions/indoor-navigation'], ['Detect & Locate', '/solutions/detect-locate'],
  ['Contactless Experience', '/solutions/contextual-engagements'], ['Smart Healthcare', '/solutions/smart-healthcare'],
]

function Outcomes() {
  return (
    <section className="cs-outcomes">
      <div className="cs-wrap cs-outcomes__grid">
        <ul className="cs-legal">
          {['Terms & Conditions', 'Privacy Statement', 'Cookies', 'Trademarks', 'For Partners', 'Contact us'].map((l) => (
            <li key={l}><Link href={l === 'Contact us' ? '/contact' : '#'}>{l}</Link></li>
          ))}
        </ul>
        <div>
          <h3>Featured Outcomes</h3>
          <ul className="cs-outcomes__list">
            {outcomes.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}
          </ul>
        </div>
        <button type="button" className="cs-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top <ArrowUp size={18} />
        </button>
      </div>
    </section>
  )
}

export default function HomeSections() {
  return (
    <>
      <Intro />
      <Tiles />
      <Connect />
      <Nutshell />
      <LicenceBanner />
      <Stories />
      <Latest />
      <Outcomes />
    </>
  )
}
