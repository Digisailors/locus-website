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
  { title: 'Sub-Meter BLE AoA in Automotive Assembly Lines', kind: 'Articles / Blogs', date: 'September 21, 2026', industry: 'Automotive', tone: 'a', img: '/images/cards/hardware.svg', tags: ['ble aoa', 'asset tracking'] },
  { title: 'Centimeter UWB for Chassis-Powertrain Marriage', kind: 'On-demand webinar', date: 'September 14, 2026', industry: 'Automotive', tone: 'b', img: '/images/cards/location.svg', tags: ['uwb precision', 'production line'] },
  { title: 'LoRaWAN GPS Tracking Across 120-Acre Vehicle Yards', kind: 'Case Study', date: 'September 7, 2026', industry: 'Logistics', tone: 'c', img: '/images/transportation_hero.webp', tags: ['lorawan gps', 'yard management'] },
  { title: 'mmWave Radar for High-Bay Lighting & Cell Safety', kind: 'Articles / Blogs', date: 'August 28, 2026', industry: 'Manufacturing', tone: 'd', img: '/images/cards/sensors.svg', tags: ['mmwave sensors', 'lighting automation'] },
  { title: 'How a Leading EV OEM Reduced WIP Search Time to 10 Seconds', kind: 'Case Study', date: 'August 18, 2026', industry: 'Automotive', tone: 'a', img: '/images/manufacturing_hero.webp', tags: ['asset tracking', 'production line'] },
  { title: 'Preventing Mis-Torque: UWB Interlocking on the Line', kind: 'Webinar', date: 'August 5, 2026', industry: 'Automotive', tone: 'b', img: '/images/cards/analytics.svg', tags: ['uwb precision', 'tool tracking'] },
  { title: 'Takt Time Optimization with Real-Time Asset Telemetry', kind: 'Articles / Blogs', date: 'July 22, 2026', industry: 'Industrial', tone: 'c', img: '/images/cards/blog.svg', tags: ['takt time', 'analytics'] },
  { title: 'Autonomous Material Staging with AGV & Tugger RTLS', kind: 'Case Study', date: 'July 10, 2026', industry: 'Manufacturing', tone: 'd', img: '/images/warehouse_tracking.webp', tags: ['asset tracking', 'agv flow'] },
  { title: 'Slashing Plant Lighting Energy by 45% with 60GHz mmWave', kind: 'On-demand webinar', date: 'June 29, 2026', industry: 'Facilities', tone: 'a', img: '/images/cards/sensors.svg', tags: ['mmwave sensors', 'energy efficiency'] },
  { title: 'Eliminating Outbound Carrier Delays in Finished Vehicle Yards', kind: 'Case Study', date: 'June 15, 2026', industry: 'Automotive', tone: 'b', img: '/images/transportation_hero.webp', tags: ['lorawan gps', 'yard management'] },
  { title: 'Industrial Sensor Fusion: Integrating BLE AoA, UWB and LoRaWAN into SAP', kind: 'Articles / Blogs', date: 'June 1, 2026', industry: 'Industrial IT', tone: 'c', img: '/images/cards/hardware.svg', tags: ['ble aoa', 'mes integration'] },
  { title: 'Micro-Motion Detection vs Optical Cameras for Robotic Cell Safety', kind: 'Webinar', date: 'May 18, 2026', industry: 'Safety', tone: 'd', img: '/images/cards/analytics.svg', tags: ['mmwave sensors', 'worker safety'] },
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
        {it.img && <img className="card-art" src={it.img} alt="" loading="lazy" />}
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
const quick = ['Locating vehicle chassis in under 10 seconds', 'Centimeter UWB chassis marriage alignment', 'Slashing yard dispatch time by 70%', 'mmWave high-bay lighting saves 45% power', 'Smart torque tool tracking prevents errors', 'LoRaWAN GPS across 120-acre finished yard', 'Real-time plant digital twin with SAP sync', 'Robotic cell non-optical safety detection'].map((t, i) => ({ t, d: ['2:14', '3:05', '1:48', '2:37', '4:02', '2:59', '3:21', '1:55'][i] }))
const quotes = [
  { q: 'Locus transformed our assembly line. We track 15,000 WIP chassis simultaneously and search time dropped from 15 minutes to under 10 seconds.', n: 'VP of Manufacturing Operations', o: 'Global EV Manufacturer' },
  { q: 'Our finished vehicle yard covers 120 acres. With LoRaWAN GPS trackers, haulers are loaded and dispatched in a fraction of the time with zero lost cars.', n: 'Finished Vehicle Logistics Director', o: 'Automotive OEM' },
  { q: 'Replacing optical cameras with mmWave radar for high-bay lighting and workcell safety cut our factory energy bill by 45% with total worker privacy.', n: 'Head of Industrial Facilities & Energy', o: 'Commercial Truck Assembly' },
]

export function Stories() {
  const [tab, setTab] = useState<'quick' | 'cases' | 'quotes'>('quick')
  const [q, setQ] = useState('')
  const [qi, setQi] = useState(0)
  const cases = useMemo(() => items.filter((i) => i.kind === 'Case Study' && i.title.toLowerCase().includes(q.toLowerCase())), [q])
  const more = cases
  return (
    <>
      <Hero title="manufacturing customer stories"><SearchBox value={q} onChange={setQ} placeholder="Search stories" /></Hero>
      <section className="rp-body">
        <div className="rp-wrap">
          <div className="rp-tabs" role="tablist">
            {([['quick', 'Quick Watch'], ['cases', 'Case Studies'], ['quotes', 'OEM Testimonials']] as const).map(([k, l]) => (
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
                    <span className={`rp-video__thumb t-${'abcd'[i % 4]}`}><img src={['/images/cards/hardware.svg','/images/cards/location.svg','/images/cards/sensors.svg','/images/cards/analytics.svg','/images/cards/blog.svg','/images/cards/ebook.svg','/images/cards/asset.svg','/images/cards/webinar.svg'][i % 8]} alt="" loading="lazy" /><Play size={30} fill="currentColor" /></span>
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
const popular = ['asset tracking', 'ble aoa', 'uwb precision', 'lorawan gps', 'mmwave sensors', 'production line', 'yard management', 'lighting automation', 'takt time', 'mes integration']

export function Blogs() {
  const [f, setF] = useState<(typeof filters)[number]>('Articles / Blogs')
  const [q, setQ] = useState('')
  const [tag, setTag] = useState<string | null>(null)
  const list = items.filter((i) => (f === 'All' || i.kind === f) && i.title.toLowerCase().includes(q.toLowerCase()) && (!tag || i.tags.includes(tag)))
  return (
    <>
      <Hero title="manufacturing rtls resources" sub="Latest insights on industrial asset tracking, BLE AoA, UWB & mmWave automation"><SearchBox value={q} onChange={setQ} placeholder="Search resources" /></Hero>
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
            <span className="rp-feature__tag">Featured Webinar</span>
            <h1>Sub-Meter RTLS in Automotive Assembly</h1>
            <p>A technical deep dive on deploying BLE AoA locator arrays, UWB precision anchors, and mmWave radar across vehicle assembly plants. September 21, 2026 &middot; 45 minutes</p>
            <Link href="/contact" className="rp-btn">Register for Live Session <ArrowRight size={18} /></Link>
          </motion.div>
          <motion.div className="rp-feature__art" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease, delay: 0.15 }} aria-hidden="true">
            <img src="/images/cards/hardware.svg" alt="" /><span><Play size={44} fill="currentColor" /></span>
          </motion.div>
        </div>
      </section>
      <section className="rp-body"><div className="rp-wrap"><Grid list={more} /></div></section>
    </>
  )
}

/* ============ E-books ============ */
const books = [
  { t: 'Industrial RTLS: BLE AoA, UWB & LoRaWAN Compared', d: 'Choosing the right positioning architecture for stamping, assembly, and outdoor vehicle yards.', pages: 32 },
  { t: 'The Automotive Factory Digital Twin Guide', d: 'Integrating real-time asset telemetry into SAP S/4HANA, Siemens Opcenter, and Rockwell SCADA.', pages: 38 },
  { t: 'High-Bay Lighting & Safety with 60GHz mmWave', d: 'How micro-motion radar saves 45% energy while protecting worker safety around robotic cells.', pages: 26 },
  { t: 'Finished Vehicle Yard Management Handbook', d: 'Eliminating yard search dwell and automating multi-car hauler dispatching with LoRaWAN GPS.', pages: 30 },
  { t: 'Smart Torque Tool Tracking & Interlocks', d: 'Enforcing zero-defect assembly by geofencing calibrated torque tools to specific vehicle VINs.', pages: 22 },
  { t: 'Cybersecurity & Scalability in Industrial IoT', d: 'TLS 1.3 encryption, air-gapped on-premise clusters, and hardware security modules.', pages: 20 },
]

export function Ebooks() {
  const [done, setDone] = useState<string | null>(null)
  return (
    <>
      <Hero title="manufacturing guides & e-books" sub="In-depth technical guides for automotive plant directors and industrial engineers" />
      <section className="rp-body">
        <div className="rp-wrap rp-books">
          {books.map((b, i) => (
            <motion.article key={b.t} className="rp-book" {...reveal} transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}>
              <div className={`rp-book__cover t-${'abcd'[i % 4]}`} style={{ backgroundImage: `linear-gradient(180deg, rgba(11,31,51,.15), rgba(11,31,51,.85)), url(${['/images/cards/hardware.svg','/images/cards/location.svg','/images/cards/sensors.svg','/images/cards/analytics.svg','/images/cards/blog.svg','/images/cards/ebook.svg'][i % 6]})` }}><span>{b.t}</span><small>Locus Industrial</small></div>
              <h3>{b.t}</h3>
              <p>{b.d}</p>
              <button className="rp-btn rp-btn--outline" onClick={() => setDone(b.t)}>
                {done === b.t ? 'Check your inbox' : <>Download PDF <Download size={16} /></>}
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
  { m: 'OCT', d: '06', t: 'Automotive Manufacturing Summit', l: 'Detroit, US', k: 'Summit' },
  { m: 'OCT', d: '21', t: 'Industrial RTLS & Industry 4.0 Expo', l: 'Stuttgart, DE', k: 'Conference' },
  { m: 'NOV', d: '04', t: 'EV Battery & Powertrain Assembly Showcase', l: 'Munich, DE', k: 'Showcase' },
  { m: 'NOV', d: '18', t: 'Automated Factory Logistics Summit', l: 'Nagoya, JP', k: 'Conference' },
  { m: 'DEC', d: '02', t: 'mmWave Industrial Lighting Webinar', l: 'Online', k: 'Webinar' },
  { m: 'JAN', d: '20', t: 'Global Automotive RTLS Partner Summit', l: 'Tokyo, JP', k: 'Summit' },
]

export function Events() {
  const [kind, setKind] = useState('All')
  const ks = ['All', 'Summit', 'Conference', 'Showcase', 'Webinar']
  return (
    <>
      <Hero title="manufacturing events calendar" sub="Meet Locus industrial RTLS engineers at global automotive & manufacturing summits" />
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
