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
  const reasons = [
    { n: '01', t: 'Sub-Meter BLE & BLE AoA Gateways', d: 'Industrial locator arrays track vehicle chassis, WIP parts carts, and tooling with 30–50 cm precision across active assembly lines.' },
    { n: '02', t: 'Centimeter UWB Assembly Marriage', d: 'Ultra-wideband time-difference-of-arrival precision (10–30 cm) guarantees error-proof chassis, battery, and powertrain alignment.' },
    { n: '03', t: 'LoRaWAN Outdoor Yard Tracking', d: 'Long-range battery-powered GPS transponders monitor finished vehicles across 100+ acre staging yards with zero cellular SIM fees.' },
    { n: '04', t: 'mmWave Lighting & Safety Automation', d: '60GHz micro-motion radar sensors automate high-bay industrial lighting and protect worker safety in robotic cells without cameras.' },
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
        <motion.h2 {...reveal}>Ready to eliminate blind spots in your assembly plant?</motion.h2>
        <motion.div {...reveal}><TryButton label="Schedule Plant Assessment" /></motion.div>
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
          <h1 className="dp-h1"><Words text="The Ultimate Asset Tracking Platform for Manufacturing" gradientFrom={2} gradientTo={4} /></h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}>
            Locus tracks every vehicle chassis, WIP carrier, torque tool, and worker across the manufacturing plant.
            Powered by industrial BLE gateways, BLE AoA arrays, centimeter UWB, outdoor LoRaWAN GPS, and mmWave radar automation.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}><TryButton label="Request Plant Demo" /></motion.div>
        </div>
      </section>
      <section className="dp-block">
        <div className="dp-wrap">
          <motion.h2 className="dp-h2" {...reveal}>One industrial platform. <span className="dp-grad">Three core layers.</span></motion.h2>
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
      <section className="dp-cta"><motion.h2 {...reveal}>Deploy Asset Tracking in Your Plant</motion.h2><motion.div {...reveal}><TryButton label="Talk to Manufacturing Sales" /></motion.div></section>
    </>
  )
}

/* ============ Manufacturing Asset Tracking Apps ============ */
type AppItem = { code: string; name: string; text: string }
const appGroups: Record<'spaces' | 'partner', { lead: string; rest: string; apps: AppItem[] }[]> = {
  spaces: [
    { lead: 'Production Line WIP.', rest: ' Track vehicle products through every station.', apps: [
      { code: 'PL', name: 'Production Line WIP', text: 'Sub-meter BLE AoA tracking of chassis through stamping, BIW, and trim' },
      { code: 'CM', name: 'Chassis Marriage', text: 'Centimeter UWB positioning for powertrain, chassis, and battery mating' },
      { code: 'TL', name: 'Tool & Rig Tracking', text: 'Locate calibrated torque tools and auto-enable torque presets by station' },
      { code: 'AG', name: 'AGV & Tugger Flow', text: 'Coordinate automated guided vehicles and parts kitting carts in real time' } ] },
    { lead: 'Yard & Outdoor Tracking.', rest: ' Manage finished vehicles and dispatching.', apps: [
      { code: 'YM', name: 'Finished Vehicle Yard', text: 'Multi-kilometer LoRaWAN GPS tracking across vehicle holding lots' },
      { code: 'VN', name: 'VIN-to-Bay Sync', text: 'Scan VIN and associate live GPS coordinate directly to parking bays' },
      { code: 'DS', name: 'Hauler Dispatch', text: 'Automate staging and loading queues for outbound multi-car haulers' },
      { code: 'CT', name: 'Container & Dolly Tracking', text: 'Monitor returnable transport items (RTIs) between tier suppliers and plant' } ] },
    { lead: 'Plant Automation & Safety.', rest: ' Energy savings and hazard protection.', apps: [
      { code: 'LA', name: 'mmWave High-Bay Lighting', text: 'Autonomous lighting dimming based on 60GHz micro-motion detection' },
      { code: 'OC', name: 'Robotic Cell Safety', text: 'Non-optical occupancy monitoring ensuring worker safety around robotic cells' },
      { code: 'TT', name: 'Takt Time Analytics', text: 'Live station cycle times, bottleneck alerts, and line-starvation warnings' },
      { code: 'HA', name: 'Forklift Collision Avoidance', text: 'Proximity alerts between heavy tuggers, forklifts, and floor personnel' } ] },
  ],
  partner: [
    { lead: 'MES & Industrial ERP.', rest: ' Bi-directional sync with plant systems.', apps: [
      { code: 'SP', name: 'SAP S/4HANA Plant', text: 'Automatic WIP goods receipt and milestone confirmation via MQTT' },
      { code: 'SM', name: 'Siemens Opcenter', text: 'Sync live chassis coordinates with BOM and assembly routing rules' },
      { code: 'RW', name: 'Rockwell FactoryTalk', text: 'Trigger andon alerts and safety interlocks directly from RTLS events' },
      { code: 'DM', name: 'Dassault DELMIA', text: 'Feed live physical asset coordinates into the plant 3D digital twin' } ] },
    { lead: 'Hardware & Sensor Ecosystem.', rest: ' Industrial grade wireless infrastructure.', apps: [
      { code: 'BA', name: 'BLE AoA Arrays', text: '30-50 cm precision locator arrays with multi-antenna angle of arrival' },
      { code: 'UW', name: 'UWB Precision Anchors', text: '10-30 cm high-precision time-difference-of-arrival positioning nodes' },
      { code: 'LR', name: 'LoRaWAN Outdoor Gateways', text: 'Rugged IP67 long-range base stations covering multi-kilometer yards' },
      { code: 'MM', name: '60GHz mmWave Radar', text: 'Industrial presence sensing impervious to factory dust, sparks, and glare' } ] },
  ],
}

function Apps() {
  const p = page('smart-spaces-apps')
  const [tab, setTab] = useState<'spaces' | 'partner'>('spaces')
  return (
    <>
      <section className="dp-hero dp-hero--apps">
        <h1 className="dp-h1 dp-h1--white"><Words text="Manufacturing Asset Tracking Modules" /></h1>
        <motion.h2 className="dp-sub" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>Automotive RTLS, Yard Management &amp; mmWave Automation</motion.h2>
        <motion.p className="dp-small" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }}>
          Deploy native industrial tracking modules or connect with leading automotive MES, ERP, and sensor hardware ecosystems.
        </motion.p>
        <motion.div className="dp-toggle" role="tablist" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}>
          {(['spaces', 'partner'] as const).map((k) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={tab === k ? 'is-on' : ''}>
              {tab === k && <motion.span layoutId="toggle-pill" className="dp-toggle__pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
              <span>{k === 'spaces' ? 'Locus Modules' : 'Industrial Partners'}</span>
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
      <section className="dp-cta"><motion.h2 {...reveal}>Build Your Plant Tracking Solution</motion.h2><motion.div {...reveal}><TryButton label="Talk to an RTLS Engineer" /></motion.div></section>
    </>
  )
}

/* ============ Experience ============ */
function FactoryGraphic({ kind }: { kind: 'assembly' | 'yard' | 'powertrain' }) {
  return (
    <svg viewBox="0 0 320 300" className="dp-bld" aria-hidden="true">
      <ellipse cx="160" cy="262" rx="132" ry="28" fill="#0b1a2a" opacity=".55" />
      <polygon points="30,250 160,282 290,250 160,218" fill="#243447" />
      {/* Industrial plant building */}
      <rect x="60" y="90" width="200" height="140" rx="8" fill="#122b49" />
      <rect x="60" y="90" width="200" height="14" rx="6" fill="#0099ff" />
      {/* Sawtooth rooflines for factory */}
      <polygon points="60,90 85,60 110,90 135,60 160,90 185,60 210,90 235,60 260,90" fill="#0b1f38" stroke="#0099ff" strokeWidth="2" />
      {/* High-bay windows / LED bays */}
      <rect x="80" y="120" width="36" height="24" rx="4" fill="#00e5ff" opacity=".8" />
      <rect x="142" y="120" width="36" height="24" rx="4" fill="#00e5ff" opacity=".8" />
      <rect x="204" y="120" width="36" height="24" rx="4" fill="#00e5ff" opacity=".8" />
      {/* Roll-up bay doors */}
      <rect x="110" y="170" width="100" height="60" rx="4" fill="#081424" stroke="#0099ff" strokeWidth="1.5" />
      <line x1="110" y1="185" x2="210" y2="185" stroke="#0099ff" strokeOpacity=".4" />
      <line x1="110" y1="200" x2="210" y2="200" stroke="#0099ff" strokeOpacity=".4" />
      <line x1="110" y1="215" x2="210" y2="215" stroke="#0099ff" strokeOpacity=".4" />
      {/* Pulsing RTLS Beacon */}
      <circle cx="160" cy="50" r="8" fill="#00e5ff" />
      <circle cx="160" cy="50" r="18" fill="none" stroke="#00e5ff" strokeWidth="2" opacity=".6" />
    </svg>
  )
}

export function Experience() {
  const tiles = [
    { kind: 'assembly' as const, title: 'Passenger EV Assembly', href: '/solutions/passenger-ev', cls: 'a' },
    { kind: 'yard' as const, title: 'Finished Vehicle Yard', href: '/solutions/yard-management', cls: 'b' },
    { kind: 'powertrain' as const, title: 'Powertrain & Battery', href: '/solutions/tier1-suppliers', cls: 'c' },
  ]
  return (
    <>
      <div className="dp-wrap dp-wrap--wide">
        <motion.div className="dp-banner" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          <div><small>NEW</small><strong>Locus Plant Twin</strong></div>
          <p>Design multi-technology industrial RTLS and simulate BLE AoA, UWB, LoRaWAN, and mmWave coverage before commissioning!</p>
          <Link href="/contact" className="dp-banner__btn">Explore Plant Twin <ArrowRight size={18} /></Link>
        </motion.div>
      </div>
      <section className="dp-hero dp-hero--exp">
        <motion.p className="dp-caps" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>LOCUS MANUFACTURING CENTER</motion.p>
        <h1 className="dp-giant dp-giant--md"><Words text="Industrial" gradientFrom={0} delay={0.1} /><Words text="Asset Tracking" gradientFrom={0} delay={0.35} /></h1>
        <motion.p className="dp-lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}>
          Experience end-to-end asset tracking across automobile manufacturing plants &mdash; from stamped metal to chassis marriage, automated high-bay lighting, and multi-acre finished vehicle yards.
        </motion.p>
        <motion.h2 className="dp-sub dp-sub--bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>Explore solutions for your production environment</motion.h2>
      </section>
      <section className="dp-tiles">
        <div className="dp-wrap dp-wrap--wide dp-tiles__grid">
          {tiles.map((t, i) => (
            <motion.div key={t.title} {...reveal} transition={{ ...reveal.transition, delay: i * 0.12 }}>
              <Link href={t.href} className={`dp-tile dp-tile--${t.cls}`}>
                <FactoryGraphic kind={t.kind} />
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
  { name: 'Locus Plant Essentials', tag: 'Real-time assembly visibility', text: 'The fastest path to sub-meter production line asset tracking.', inc: ['BLE AoA locator arrays & sub-meter tracking', 'Live 2D & 3D plant digital twin map', 'WIP station dwell & cycle time analytics', 'Industrial MQTT & REST telemetry APIs'] },
  { name: 'Locus Automotive Advanced', tag: 'Complete plant & yard intelligence', text: 'Full hybrid RTLS uniting assembly line, high-bay lighting and holding yards.', inc: ['Everything in Essentials', 'Centimeter UWB chassis marriage tracking', 'Outdoor LoRaWAN GPS yard vehicle tracking', 'mmWave high-bay lighting automation & occupancy', 'Bi-directional SAP S/4HANA & Siemens MES sync'] },
  { name: 'Locus Enterprise Multi-Plant', tag: 'Mission-critical OEM scale', text: 'Global multi-facility architecture with high-availability edge clustering.', inc: ['Everything in Advanced', 'On-prem air-gapped high-availability edge', 'Safety PLC & robotic workcell interlocks', 'Dedicated automotive RTLS solution architect', '24/7 mission-critical manufacturing SLA'] },
]
const compare: [string, boolean, boolean, boolean][] = [
  ['BLE AoA Sub-Meter Tracking', true, true, true],
  ['3D Plant Digital Twin', true, true, true],
  ['Takt Time & Bottleneck Analytics', true, true, true],
  ['UWB Centimeter Precision Tracking', false, true, true],
  ['LoRaWAN Outdoor GPS Yard Tracking', false, true, true],
  ['mmWave Lighting & Occupancy Automation', false, true, true],
  ['Automotive MES & SAP ERP Sync', false, true, true],
  ['On-Prem High Availability Edge', false, false, true],
  ['Dedicated Plant Systems Engineer', false, false, true],
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
            Tailored industrial RTLS tiers designed for automobile production lines, component gigafactories, and finished vehicle logistics yards.
          </motion.p>
          <div className="dp-tabs" role="tablist">
            {([['overview', 'Package Overview'], ['compare', 'Compare Capabilities']] as const).map(([k, l]) => (
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
                      <Link href="/contact" className="dp-try dp-try--sm">Request Proposal</Link>
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
      <section className="dp-cta"><motion.h2 {...reveal}>Need a custom manufacturing deployment?</motion.h2><motion.div {...reveal}><TryButton label="Consult an RTLS Specialist" /></motion.div></section>
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
