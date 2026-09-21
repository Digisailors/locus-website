import Link from 'next/link'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Download, MapPin, Play, Search } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
export const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease },
}

/* ---------- shared content ---------- */
type Kind = 'Webinar' | 'On-demand webinar' | 'Articles / Blogs' | 'Case Study'
interface Item { title: string; kind: Kind; date: string; industry: string; tone: 'a' | 'b' | 'c' | 'd'; img?: string; tags: string[] }

export const items: Item[] = [
  { title: 'Smart Spaces Starts Here', kind: 'Webinar', date: 'September 21, 2026', industry: 'General', tone: 'a', tags: ['smart workspaces'] },
  { title: 'Beyond Guest Wi-Fi: What You Can Actually Do with the Locus Captive Portal', kind: 'Articles / Blogs', date: 'September 7, 2026', industry: 'Retail', tone: 'b', tags: ['guest wi-fi', 'engagements'] },
  { title: 'Session 1: Onboard Your Guests and Employees with Captive Portals', kind: 'On-demand webinar', date: 'September 7, 2026', industry: 'Hospitality', tone: 'c', tags: ['guest wi-fi'] },
  { title: 'Introducing Locus Asset Tracking: Your Network Just Learned a New Trick', kind: 'Articles / Blogs', date: 'July 24, 2026', industry: 'Healthcare', tone: 'd', tags: ['asset tracking'] },
  { title: 'Care Re-Imagined: The Smart Hospital', kind: 'On-demand webinar', date: 'July 2, 2026', industry: 'Healthcare', tone: 'a', tags: ['asset tracking', 'people safety'] },
  { title: 'How a University Campus Reclaimed 30% of Its Teaching Space', kind: 'Case Study', date: 'June 18, 2026', industry: 'Education', tone: 'b', img: '/images/universities_hero.webp', tags: ['space utilization', 'occupancy monitoring'] },
  { title: 'Wi-Fi 7 and Location: What Changes for Indoor Positioning', kind: 'Articles / Blogs', date: 'June 3, 2026', industry: 'General', tone: 'c', tags: ['indoor navigation'] },
  { title: 'A Global Retailer Turns Footfall into Conversion', kind: 'Case Study', date: 'May 20, 2026', industry: 'Retail', tone: 'd', img: '/images/retail_hero.webp', tags: ['location analytics'] },
  { title: 'Hybrid Work Playbook: Desk Booking that People Actually Use', kind: 'On-demand webinar', date: 'May 6, 2026', industry: 'Workspaces', tone: 'a', tags: ['smart desking', 'smart workspaces'] },
  { title: 'Finding Equipment 40% Faster in a Regional Hospital', kind: 'Case Study', date: 'April 22, 2026', industry: 'Healthcare', tone: 'b', img: '/images/healthcare_hero.webp', tags: ['asset tracking'] },
  { title: 'Crowd Safety at Scale: Density Monitoring for Venues', kind: 'Articles / Blogs', date: 'April 8, 2026', industry: 'Venues', tone: 'c', tags: ['density monitoring'] },
  { title: 'Energy Savings You Can Prove: Occupancy-Driven Building Control', kind: 'Webinar', date: 'March 25, 2026', industry: 'Workspaces', tone: 'd', tags: ['energy efficiency'] },
]

const PAGE = 6

export function Hero({ title, sub, children }: { title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="rp-hero">
      <div className="rp-hero__blob" aria-hidden="true"><i /><i /></div>
      <div className="rp-wrap">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>{title}</motion.h1>
        {sub && <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.12 }}>{sub}</motion.p>}
        {children && <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.24 }}>{children}</motion.div>}
      </div>
    </section>
  )
}

export function SearchBox({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <label className="rp-search">
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} aria-label={placeholder} />
      <Search size={22} aria-hidden="true" />
    </label>
  )
}

function Pager({ page, pages, onPage }: { page: number; pages: number; onPage: (n: number) => void }) {
  if (pages <= 1) return null
  return (
    <nav className="rp-pager" aria-label="Pagination">
      {Array.from({ length: pages }, (_, i) => (
        <button key={i} className={page === i ? 'is-on' : ''} onClick={() => onPage(i)}>Page {i + 1}</button>
      ))}
    </nav>
  )
}

function Card({ it, i }: { it: Item; i: number }) {
  const cta = it.kind === 'Case Study' ? 'Read More' : it.kind === 'Articles / Blogs' ? 'Read article' : it.kind === 'Webinar' ? 'Register' : 'Watch now'
  return (
    <motion.article layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: 0.45, ease, delay: (i % 6) * 0.05 }} className="rp-card">
      <div className={`rp-card__media t-${it.tone}`}>
        {it.img && <img src={it.img} alt="" loading="lazy" />}
        <span className="rp-card__tag">{it.kind}</span>
      </div>
      <div className="rp-card__body">
        <small>{it.industry}</small>
        <h3>{it.title}</h3>
        <p>{it.date}</p>
        <span className="rp-card__cta">{cta} <ArrowRight size={16} /></span>
      </div>
    </motion.article>
  )
}

function Grid({ list }: { list: Item[] }) {
  const [page, setPage] = useState(0)
  const pages = Math.ceil(list.length / PAGE)
  const view = list.slice(page * PAGE, page * PAGE + PAGE)
  return (
    <>
      <div className="rp-grid">
        <AnimatePresence mode="popLayout">{view.map((it, i) => <Card key={it.title} it={it} i={i} />)}</AnimatePresence>
      </div>
      {list.length === 0 && <p className="rp-empty">No results found. Try a different search.</p>}
      <Pager page={Math.min(page, pages - 1)} pages={pages} onPage={setPage} />
    </>
  )
}

/* ============ Stories ============ */
const quick = ['A hospital finds equipment in seconds', 'Reclaiming campus space with real data', 'Guest Wi-Fi that turns into loyalty', 'Smart desking for a hybrid workforce', 'Keeping crowds safe at match day', 'One map for a global retailer', 'Inside a smart hospital', 'Energy savings from occupancy'].map((t, i) => ({ t, d: ['2:14', '3:05', '1:48', '2:37', '4:02', '2:59', '3:21', '1:55'][i] }))
const quotes = [
  { q: 'With Locus we can reach customers at the right moment and understand shopping habits far better than before.', n: 'IT Product Owner', o: 'Retail group' },
  { q: 'We reduced a 30-minute journey to find a room to just 2 minutes, saving significant time across a large workforce.', n: 'Program Manager', o: 'Financial services' },
  { q: 'Clinicians now have the right equipment in the right place at the right time, so frontline staff have more time to care.', n: 'Director of Digital Transformation', o: 'Health system' },
]

export function Stories() {
  const [tab, setTab] = useState<'quick' | 'cases' | 'quotes'>('quick')
  const [q, setQ] = useState('')
  const [qi, setQi] = useState(0)
  const cases = useMemo(() => items.filter((i) => i.kind === 'Case Study' && i.title.toLowerCase().includes(q.toLowerCase())), [q])
  const more = cases
  return (
    <>
      <Hero title="stories from locus"><SearchBox value={q} onChange={setQ} placeholder="Search stories" /></Hero>
      <section className="rp-body">
        <div className="rp-wrap">
          <div className="rp-tabs" role="tablist">
            {([['quick', 'Quick Watch'], ['cases', 'Case Studies'], ['quotes', 'Testimonials']] as const).map(([k, l]) => (
              <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'is-on' : ''} onClick={() => setTab(k)}>
                {l}{tab === k && <motion.i layoutId="rp-tab" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {tab === 'quick' && (
              <motion.div key="q" className="rp-videos" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }}>
                {quick.filter((v) => v.t.toLowerCase().includes(q.toLowerCase())).map((v, i) => (
                  <motion.a key={v.t} href="#" onClick={(e) => e.preventDefault()} className="rp-video" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.5, ease }}>
                    <span className={`rp-video__thumb t-${'abcd'[i % 4]}`}><Play size={30} fill="currentColor" /></span>
                    <span className="rp-video__len">{v.d}</span>
                    <b>{v.t}</b>
                  </motion.a>
                ))}
              </motion.div>
            )}
            {tab === 'cases' && (
              <motion.div key="c" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }}>
                <Grid list={more} />
              </motion.div>
            )}
            {tab === 'quotes' && (
              <motion.div key="t" className="rp-quotes" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }}>
                <button onClick={() => setQi((qi + quotes.length - 1) % quotes.length)} aria-label="Previous"><ChevronLeft /></button>
                <AnimatePresence mode="wait">
                  <motion.blockquote key={qi} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4, ease }}>
                    <p>&ldquo;{quotes[qi].q}&rdquo;</p>
                    <footer><b>{quotes[qi].n}</b><span>{quotes[qi].o}</span></footer>
                  </motion.blockquote>
                </AnimatePresence>
                <button onClick={() => setQi((qi + 1) % quotes.length)} aria-label="Next"><ChevronRight /></button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

/* ============ Blogs / Resource centre ============ */
const filters = ['All', 'Articles / Blogs', 'Webinar', 'On-demand webinar', 'Case Study'] as const
const popular = ['asset tracking', 'occupancy monitoring', 'smart workspaces', 'guest wi-fi', 'indoor navigation', 'location analytics', 'energy efficiency', 'density monitoring', 'smart desking', 'space utilization']

export function Blogs() {
  const [f, setF] = useState<(typeof filters)[number]>('Articles / Blogs')
  const [q, setQ] = useState('')
  const [tag, setTag] = useState<string | null>(null)
  const list = items.filter((i) => (f === 'All' || i.kind === f) && i.title.toLowerCase().includes(q.toLowerCase()) && (!tag || i.tags.includes(tag)))
  return (
    <>
      <Hero title="resources" sub="See the latest Locus news & stories"><SearchBox value={q} onChange={setQ} placeholder="Search resources" /></Hero>
      <section className="rp-body">
        <div className="rp-wrap">
          <div className="rp-chips">
            {filters.map((x) => <button key={x} className={f === x ? 'is-on' : ''} onClick={() => setF(x)}>{x}</button>)}
          </div>
          <Grid key={`${f}${q}${tag}`} list={list} />
          <motion.div className="rp-tags" {...reveal}>
            <h2>Popular tags</h2>
            <div>{popular.map((t) => <button key={t} className={tag === t ? 'is-on' : ''} onClick={() => setTag(tag === t ? null : t)}>#{t}</button>)}</div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

/* ============ Webinars ============ */
export function Webinars() {
  const list = items.filter((i) => i.kind === 'Webinar' || i.kind === 'On-demand webinar')
  const more = [...list, ...items.filter((i) => i.kind === 'Articles / Blogs')].slice(0, 12)
  return (
    <>
      <section className="rp-feature">
        <div className="rp-feature__grid" aria-hidden="true" />
        <div className="rp-wrap rp-feature__inner">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease }}>
            <span className="rp-feature__tag">Webinar</span>
            <h1>Smart Spaces Starts Here</h1>
            <p>A guided introduction to turning your network into a sensor for smart spaces. September 21, 2026 &middot; 30 minutes</p>
            <Link href="/contact" className="rp-btn">Register now <ArrowRight size={18} /></Link>
          </motion.div>
          <motion.div className="rp-feature__art" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease, delay: 0.15 }} aria-hidden="true">
            <span><Play size={44} fill="currentColor" /></span>
          </motion.div>
        </div>
      </section>
      <section className="rp-body"><div className="rp-wrap"><Grid list={more} /></div></section>
    </>
  )
}

/* ============ E-books ============ */
const books = [
  { t: 'Indoor Positioning Explained', d: 'How Wi-Fi, BLE and UWB compare, and when to use each.', pages: 28 },
  { t: 'The Hybrid Workplace Playbook', d: 'Turning utilisation data into layout and lease decisions.', pages: 34 },
  { t: 'The Smart Hospital Handbook', d: 'A practical roadmap for equipment and patient-flow visibility.', pages: 30 },
  { t: 'Smart Venues Field Guide', d: 'Crowd safety, wayfinding and revenue for stadiums and malls.', pages: 26 },
  { t: 'Sustainable Buildings with Occupancy Data', d: 'Prove energy savings with presence-based control.', pages: 22 },
  { t: 'Privacy by Design in Location Services', d: 'Consent, anonymisation and retention done right.', pages: 18 },
]

export function Ebooks() {
  const [done, setDone] = useState<string | null>(null)
  return (
    <>
      <Hero title="e-books" sub="Read in-depth guides from experts" />
      <section className="rp-body">
        <div className="rp-wrap rp-books">
          {books.map((b, i) => (
            <motion.article key={b.t} className="rp-book" {...reveal} transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}>
              <div className={`rp-book__cover t-${'abcd'[i % 4]}`}><span>{b.t}</span><small>Locus</small></div>
              <h3>{b.t}</h3>
              <p>{b.d}</p>
              <button className="rp-btn rp-btn--outline" onClick={() => setDone(b.t)}>
                {done === b.t ? 'Check your inbox' : <>Download <Download size={16} /></>}
              </button>
              <small>{b.pages} pages &middot; PDF</small>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}

/* ============ Events ============ */
const events = [
  { m: 'OCT', d: '06', t: 'Locus Smart Spaces Summit', l: 'Amsterdam, NL', k: 'Summit' },
  { m: 'OCT', d: '21', t: 'Workplace Innovation Expo', l: 'London, UK', k: 'Conference' },
  { m: 'NOV', d: '04', t: 'Healthcare Technology Showcase', l: 'Chicago, US', k: 'Showcase' },
  { m: 'NOV', d: '18', t: 'Retail Connect Live', l: 'Singapore', k: 'Conference' },
  { m: 'DEC', d: '02', t: 'Smart Venues Roundtable', l: 'Online', k: 'Webinar' },
  { m: 'JAN', d: '20', t: 'Locus Partner Summit', l: 'Dubai, UAE', k: 'Summit' },
]

export function Events() {
  const [kind, setKind] = useState('All')
  const ks = ['All', 'Summit', 'Conference', 'Showcase', 'Webinar']
  return (
    <>
      <Hero title="events calendar" sub="Explore the schedule of global events, summits, and showcases" />
      <section className="rp-body">
        <div className="rp-wrap">
          <div className="rp-chips">{ks.map((k) => <button key={k} className={kind === k ? 'is-on' : ''} onClick={() => setKind(k)}>{k}</button>)}</div>
          <ul className="rp-events">
            <AnimatePresence mode="popLayout">
              {events.filter((e) => kind === 'All' || e.k === kind).map((e, i) => (
                <motion.li layout key={e.t} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.05, duration: 0.45, ease }}>
                  <span className="rp-events__date"><b>{e.d}</b>{e.m}</span>
                  <div><h3>{e.t}</h3><p><MapPin size={15} /> {e.l} &middot; {e.k}</p></div>
                  <Link href="/contact" className="rp-btn rp-btn--outline">Register <ArrowRight size={16} /></Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </section>
    </>
  )
}
