import Link from 'next/link'
import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { discover } from '../data/info'
import WhyLocus from './WhyLocus'

const ease = [0.22, 1, 0.36, 1] as const
const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease },
}

const page = (slug: string) => discover.find((d) => d.slug === slug)!

/** Word-by-word rising headline */
function Words({ text, className = '', gradientFrom = -1, gradientTo = 999, delay = 0 }: { text: string; className?: string; gradientFrom?: number; gradientTo?: number; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="dp-word" aria-hidden="true">
          <motion.span
            className={gradientFrom >= 0 && i >= gradientFrom && i <= gradientTo ? 'dp-grad' : ''}
            initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease, delay: delay + i * 0.09 }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  )
}

function TryButton({ label = 'Try for free' }: { label?: string }) {
  return <Link href="/contact" className="dp-try">{label}</Link>
}

/* ============ Why Locus ============ */
function Why() {
  const p = page('why-locus')
  const reasons = [
    { n: '01', t: 'No new hardware', d: p.highlights[0].description },
    { n: '02', t: 'One map, many outcomes', d: p.highlights[1].description },
    { n: '03', t: 'Open by design', d: p.highlights[2].description },
    { n: '04', t: 'Built for the enterprise', d: `${p.bullets[0]}. ${p.bullets[1]}.` },
  ]
  return (
    <>
      <section className="dp-hero dp-hero--why">
        <h1 className="dp-giant"><Words text="Why" /><Words text="Locus?" gradientFrom={0} delay={0.15} /></h1>
        <motion.span className="dp-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} aria-hidden="true"><i /></motion.span>
      </section>
      <section className="dp-block">
        <div className="dp-wrap">
          {reasons.map((r, i) => (
            <motion.div key={r.n} className="dp-reason" {...reveal}>
              <span className="dp-reason__n dp-grad">{r.n}</span>
              <h2>{r.t}</h2>
              <p>{r.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="dp-cta">
        <motion.h2 {...reveal}>Ready to see it in your buildings?</motion.h2>
        <motion.div {...reveal}><TryButton /></motion.div>
      </section>
    </>
  )
}

/* ============ Platform ============ */
function Platform() {
  const p = page('locus-platform')
  return (
    <>
      <section className="dp-hero dp-hero--platform">
        <div className="dp-orb" aria-hidden="true"><i /><i /><i /></div>
        <div className="dp-hero__inner">
          <h1 className="dp-h1"><Words text="The Ultimate Platform To Turn Your Buildings Into Smart Spaces" gradientFrom={1} gradientTo={2} /></h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}>
            Locus connects People, Things and Spaces. It harnesses the power of your existing Wi-Fi, BLE and sensors,
            making your buildings safe, smart and sustainable, creating seamless experiences for the people in them.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}><TryButton /></motion.div>
        </div>
      </section>
      <section className="dp-block">
        <div className="dp-wrap">
          <motion.h2 className="dp-h2" {...reveal}>One platform. <span className="dp-grad">Three layers.</span></motion.h2>
          <div className="dp-layers">
            {p.highlights.map((h, i) => (
              <motion.article key={h.title} className="dp-layer" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                <span className="dp-layer__n">{i + 1}</span>
                <h3>{h.title}</h3>
                <p>{h.description}</p>
              </motion.article>
            ))}
          </div>
          <ul className="dp-checks">
            {p.bullets.map((b, i) => (
              <motion.li key={b} {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }}><Check size={18} /> {b}</motion.li>
            ))}
          </ul>
        </div>
      </section>
      <section className="dp-cta"><motion.h2 {...reveal}>Start building on Locus</motion.h2><motion.div {...reveal}><TryButton /></motion.div></section>
    </>
  )
}

/* ============ Smart Spaces Apps ============ */
type AppItem = { code: string; name: string; text: string }
const appGroups: Record<'spaces' | 'partner', { lead: string; rest: string; apps: AppItem[] }[]> = {
  spaces: [
    { lead: 'Experience.', rest: ' Make everyday interactions memorable.', apps: [
      { code: 'GR', name: 'Guest Roaming', text: 'Seamless, secure Wi-Fi as guests move between sites' },
      { code: 'CP', name: 'Captive Portal', text: 'Branded onboarding with social, OTP and form login' },
      { code: 'EN', name: 'Engagements', text: 'Location-triggered messages and offers' },
      { code: 'SB', name: 'Space Booking', text: 'Find and book rooms and desks in a few taps' } ] },
    { lead: 'Efficiency.', rest: ' Run every space smarter.', apps: [
      { code: 'OM', name: 'Occupancy Monitoring', text: 'Live headcount by floor, zone and room' },
      { code: 'AT', name: 'Asset Tracking', text: 'Find any tagged asset in seconds' },
      { code: 'DL', name: 'Detect & Locate', text: 'Search and locate devices and tags on the map' },
      { code: 'SD', name: 'Smart Desking', text: 'Hybrid desk booking with automatic check-in' } ] },
    { lead: 'Analytics.', rest: ' Let data drive decisions.', apps: [
      { code: 'BM', name: 'Behavior Metrics', text: 'Footfall, dwell and repeat-visit insight' },
      { code: 'IA', name: 'Impact Analysis', text: 'Measure the effect of events and campaigns' },
      { code: 'LA', name: 'Location Analytics', text: 'Custom reports across every site' },
      { code: 'DM', name: 'Density Monitoring', text: 'Crowd heatmaps and threshold alerts' } ] },
  ],
  partner: [
    { lead: 'Workplace.', rest: ' Plug into the tools people already use.', apps: [
      { code: 'CA', name: 'Calendar Sync', text: 'Room availability from your calendar platform' },
      { code: 'BM', name: 'Building Management', text: 'Occupancy-driven HVAC and lighting' },
      { code: 'AC', name: 'Access Control', text: 'Badge and door events on the same map' },
      { code: 'CH', name: 'Chat & Collaboration', text: 'Find colleagues and book from chat' } ] },
    { lead: 'Healthcare.', rest: ' Purpose-built clinical integrations.', apps: [
      { code: 'NC', name: 'Nurse Call', text: 'Route the nearest nurse to a call' },
      { code: 'EH', name: 'EHR Context', text: 'Location context inside clinical records' },
      { code: 'CE', name: 'Clinical Engineering', text: 'Maintenance status for tracked equipment' },
      { code: 'IP', name: 'Infant Protection', text: 'Tag-based protection and alerts' } ] },
    { lead: 'Retail & Venues.', rest: ' Grow spend and loyalty.', apps: [
      { code: 'CR', name: 'CRM Connector', text: 'Consented visitor profiles into your CRM' },
      { code: 'LY', name: 'Loyalty', text: 'Recognise and reward returning visitors' },
      { code: 'PS', name: 'POS Insights', text: 'Join footfall with sales data' },
      { code: 'QM', name: 'Queue Management', text: 'Live queue length and wait times' } ] },
  ],
}

function Apps() {
  const p = page('smart-spaces-apps')
  const [tab, setTab] = useState<'spaces' | 'partner'>('spaces')
  return (
    <>
      <section className="dp-hero dp-hero--apps">
        <h1 className="dp-h1 dp-h1--white"><Words text="Smart Spaces Apps" /></h1>
        <motion.h2 className="dp-sub" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>{p.summary}</motion.h2>
        <motion.p className="dp-small" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }}>
          Choose built-in apps for core capabilities, or extend with partner apps for specialized solutions.
        </motion.p>
        <motion.div className="dp-toggle" role="tablist" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}>
          {(['spaces', 'partner'] as const).map((k) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={tab === k ? 'is-on' : ''}>
              {tab === k && <motion.span layoutId="toggle-pill" className="dp-toggle__pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
              <span>{k === 'spaces' ? 'Locus Apps' : 'Partner Apps'}</span>
            </button>
          ))}
        </motion.div>
      </section>
      <section className="dp-block dp-block--apps">
        <div className="dp-wrap dp-wrap--wide">
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35, ease }}>
              {appGroups[tab].map((g) => (
                <div key={g.lead} className="dp-appgroup">
                  <h3><b>{g.lead}</b>{g.rest}</h3>
                  <div className="dp-appgrid">
                    {g.apps.map((a, i) => (
                      <motion.div key={a.name} className="dp-app" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5, ease }}>
                        <span className="dp-app__badge">{a.code}</span>
                        <h4>{a.name}</h4>
                        <p>{a.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="dp-cta"><motion.h2 {...reveal}>Find the apps that fit your spaces</motion.h2><motion.div {...reveal}><TryButton label="Talk to an expert" /></motion.div></section>
    </>
  )
}

/* ============ Experience ============ */
function Building({ kind }: { kind: 'office' | 'hospital' | 'mall' }) {
  const cols = kind === 'mall' ? 3 : 4
  return (
    <svg viewBox="0 0 320 300" className="dp-bld" aria-hidden="true">
      <ellipse cx="160" cy="262" rx="132" ry="28" fill="#0b1a2a" opacity=".55" />
      <polygon points="30,250 160,282 290,250 160,218" fill="#243447" />
      <rect x="70" y={kind === 'office' ? 60 : 90} width="180" height={kind === 'office' ? 170 : 140} rx="8" fill={kind === 'mall' ? '#f59e0b' : '#eaf7ff'} />
      <rect x="70" y={kind === 'office' ? 60 : 90} width="180" height="16" rx="8" fill={kind === 'office' ? '#6d5efc' : kind === 'hospital' ? '#0ea5a4' : '#c2410c'} />
      {Array.from({ length: 3 }).flatMap((_, r) => Array.from({ length: cols }).map((__, c) => (
        <rect key={`${r}${c}`} x={86 + c * (148 / cols)} y={(kind === 'office' ? 84 : 112) + r * 40} width={148 / cols - 12} height="26" rx="4" fill={kind === 'mall' ? '#1e3a8a' : '#4f8fe0'} opacity=".85" className="dp-win" style={{ animationDelay: `${(r + c) * 0.25}s` }} />
      )))}
      {kind === 'hospital' && <g><rect x="132" y="40" width="56" height="56" rx="8" fill="#fff" /><rect x="153" y="48" width="14" height="40" fill="#dc2626" /><rect x="140" y="61" width="40" height="14" fill="#dc2626" /></g>}
      {kind === 'mall' && <rect x="112" y="184" width="96" height="30" rx="4" fill="#b91c1c" />}
      <rect x="138" y="204" width="44" height="26" rx="3" fill="#22384d" />
      <circle cx="58" cy="238" r="16" fill="#4ade80" /><circle cx="266" cy="240" r="14" fill="#22c55e" />
    </svg>
  )
}

export function Experience() {
  const tiles = [
    { kind: 'office' as const, title: 'Workplace', href: '/solutions/workspaces', cls: 'a' },
    { kind: 'hospital' as const, title: 'Healthcare', href: '/solutions/healthcare', cls: 'b' },
    { kind: 'mall' as const, title: 'Retail', href: '/solutions/retail', cls: 'c' },
  ]
  return (
    <>
      <div className="dp-wrap dp-wrap--wide">
        <motion.div className="dp-banner" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          <div><small>NEW</small><strong>Locus Studio</strong></div>
          <p>Design smart spaces and get tailored recommendations on hardware, software, and placement!</p>
          <Link href="/resources/locus-studio" className="dp-banner__btn">Explore now <ArrowRight size={18} /></Link>
        </motion.div>
      </div>
      <section className="dp-hero dp-hero--exp">
        <motion.p className="dp-caps" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>LOCUS EXPERIENCE CENTER</motion.p>
        <h1 className="dp-giant dp-giant--md"><Words text="Experience" gradientFrom={0} delay={0.1} /><Words text="Smart Space" gradientFrom={0} delay={0.35} /></h1>
        <motion.p className="dp-lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}>
          Experience real-world, day-in-the-life scenarios across industries and see how organizations drive <b>better experiences, improve efficiency, and make smarter decisions with analytics</b>
        </motion.p>
        <motion.h2 className="dp-sub dp-sub--bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>See what&apos;s possible for your industry</motion.h2>
      </section>
      <section className="dp-tiles">
        <div className="dp-wrap dp-wrap--wide dp-tiles__grid">
          {tiles.map((t, i) => (
            <motion.div key={t.title} {...reveal} transition={{ ...reveal.transition, delay: i * 0.12 }}>
              <Link href={t.href} className={`dp-tile dp-tile--${t.cls}`}>
                <Building kind={t.kind} />
                <span>{t.title} <ArrowRight size={18} /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

/* ============ Packages ============ */
const packages = [
  { name: 'Locus Essentials', tag: 'Start with the fundamentals', text: 'The fastest way to turn your buildings into smart spaces.', inc: ['Digital maps and floor plans', 'Occupancy monitoring', 'Location analytics dashboards', 'Standard support'] },
  { name: 'Locus Advanced', tag: 'Scale across every site', text: 'The most powerful operating system to turn your buildings into smart spaces.', inc: ['Everything in Essentials', 'Indoor navigation and wayfinding', 'Asset tracking and Detect & Locate', 'Engagements and captive portal', 'Open APIs and integrations'] },
  { name: 'Locus Enterprise', tag: 'Global scale, premium support', text: 'Advanced security, private deployment and dedicated success support.', inc: ['Everything in Advanced', 'Private cloud deployment options', 'Single sign-on and audit trails', 'Dedicated success manager', 'Custom SLAs'] },
]
const compare: [string, boolean, boolean, boolean][] = [
  ['Digital maps', true, true, true], ['Occupancy monitoring', true, true, true], ['Location analytics', true, true, true],
  ['Indoor navigation', false, true, true], ['Asset tracking', false, true, true], ['Engagements & captive portal', false, true, true],
  ['Open APIs', false, true, true], ['Private deployment', false, false, true], ['Dedicated success manager', false, false, true],
]

function Packages() {
  const [tab, setTab] = useState<'overview' | 'compare'>('overview')
  const rail = useRef<HTMLDivElement>(null)
  const scroll = (d: number) => rail.current?.scrollBy({ left: d * 560, behavior: 'smooth' })
  return (
    <>
      <section className="dp-hero dp-hero--pk">
        <div className="dp-wrap">
          <motion.p className="dp-caps dp-caps--left" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>LOCUS</motion.p>
          <h1 className="dp-giant dp-giant--left"><Words text="PACKAGES" gradientFrom={0} /></h1>
          <motion.p className="dp-lead dp-lead--left" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
            Every workplace is unique, which is why Locus offers a suite of packages designed to meet the specific needs of your business and unlock the full potential of your infrastructure
          </motion.p>
          <div className="dp-tabs" role="tablist">
            {([['overview', 'Package Overview'], ['compare', 'Compare All']] as const).map(([k, l]) => (
              <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={tab === k ? 'is-on' : ''}>
                {l}
                {tab === k && <motion.i layoutId="tab-line" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="dp-block dp-block--pk">
        <AnimatePresence mode="wait">
          {tab === 'overview' ? (
            <motion.div key="o" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease }}>
              <div className="dp-rail" ref={rail}>
                {packages.map((p, i) => (
                  <article key={p.name} className="dp-pkg">
                    <div className="dp-pkg__art"><img src="/images/logo.png" alt="" /><span>{p.name}</span><i /></div>
                    <div className="dp-pkg__body">
                      <h3>{p.text}</h3>
                      <small>{p.tag}</small>
                      <b>Key Inclusions:</b>
                      <ul>{p.inc.map((x) => <li key={x}><Check size={16} /> {x}</li>)}</ul>
                      <Link href="/contact" className="dp-try dp-try--sm">Talk to sales</Link>
                    </div>
                  </article>
                ))}
              </div>
              <div className="dp-rail__nav">
                <button onClick={() => scroll(-1)} aria-label="Previous"><ChevronLeft /></button>
                <button onClick={() => scroll(1)} aria-label="Next"><ChevronRight /></button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="c" className="dp-wrap" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease }}>
              <table className="dp-table">
                <thead><tr><th>Capability</th>{packages.map((p) => <th key={p.name}>{p.name.replace('Locus ', '')}</th>)}</tr></thead>
                <tbody>
                  {compare.map(([label, ...v]) => (
                    <tr key={label}><td>{label}</td>{v.map((x, i) => <td key={i}>{x ? <Check size={18} className="ok" /> : <span className="no">&ndash;</span>}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <section className="dp-cta"><motion.h2 {...reveal}>Not sure which package fits?</motion.h2><motion.div {...reveal}><TryButton label="Talk to sales" /></motion.div></section>
    </>
  )
}

export default function DiscoverPage({ slug }: { slug: string }) {
  return (
    <div className="dp">
      {slug === 'why-locus' && <WhyLocus />}
      {slug === 'locus-platform' && <Platform />}
      {slug === 'smart-spaces-apps' && <Apps />}
      {slug === 'experience-locus' && <Experience />}
      {slug === 'packages' && <Packages />}
    </div>
  )
}
