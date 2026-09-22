import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, ArrowUp, Car, Crosshair, Factory, Layers, Lightbulb,
  MapPin, Navigation, Package, Radar, Radio, ShieldCheck, Truck, Users, Wrench, Zap,
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
        <motion.p className="cs-intro__brand" {...reveal}>Locus | Manufacturing Asset Tracking &amp; Industrial RTLS</motion.p>
        <motion.h1 {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
          Real-Time Asset Tracking for the Manufacturing &amp; Automotive Industry
        </motion.h1>
        <motion.p className="cs-intro__lead" {...reveal} transition={{ ...reveal.transition, delay: 0.16 }}>
          Track every <b className="is-people">vehicle chassis</b>, <b className="is-things">assembly carrier</b>, <b className="is-people">torque tool</b>, and <b className="is-things">finished car</b> through the production line using industrial BLE Gateways, BLE AoA locator arrays, centimeter UWB anchors, outdoor LoRaWAN GPS trackers, and mmWave radar automation.
        </motion.p>
        <motion.div className="cs-intro__cta" {...reveal} transition={{ ...reveal.transition, delay: 0.24 }}>
          <Link href="/solutions/production-line-tracking" className="cs-btn cs-btn--dark">Explore Asset Tracking</Link>
          <Link href="/contact" className="cs-btn cs-btn--outline">Request Plant Assessment</Link>
        </motion.div>
        <motion.p className="cs-intro__trust" {...reveal} transition={{ ...reveal.transition, delay: 0.32 }}>
          Trusted across automotive assembly plants &mdash; from stamping presses to 100+ acre finished vehicle shipping yards
        </motion.p>
        <motion.ul className="cs-logos" {...reveal} transition={{ ...reveal.transition, delay: 0.4 }}>
          {[
            [Factory, 'Stamping & BIW'], [Car, 'Final Assembly'], [Crosshair, 'Chassis Marriage'],
            [Truck, 'Finished Yards'], [Radio, 'Tier-1 Suppliers'], [Zap, 'mmWave Lighting'],
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
        {/* Wide tile: Assembly Line WIP Tracking */}
        <motion.article className="cs-tile cs-tile--wide" {...reveal}>
          <div className="cs-tile__text">
            <p className="cs-eyebrow is-green">Manufacturing Asset Tracking</p>
            <h3>Vehicle Production Line Asset Tracking: Stamping, BIW &amp; Marriage Lines</h3>
            <ul className="cs-pills"><li>BLE Gateways &amp; AoA Arrays</li><li>UWB Centimeter Precision</li><li>MES &amp; SAP Sync</li></ul>
            <Link href="/solutions/production-line-tracking" className="cs-see">Explore Line Tracking <span><ArrowRight size={16} /></span></Link>
          </div>
          <div className="cs-art cs-art--work" aria-hidden="true">
            <div className="cs-art__grid">
              <b className="c1">58s</b><b className="c2">&lt;30cm</b><b className="c3">100%</b><b className="c4">0 Err</b>
            </div>
            <div className="cs-art__ring"><span>Station 14</span><small>Chassis VIN Verified</small></div>
            <div className="cs-art__monitor"><i /><i /><i /><i /><i /></div>
            <div className="cs-art__phone"><i /><i /></div>
          </div>
        </motion.article>

        {/* Tile 2: Finished Vehicle Yard Management */}
        <motion.article className="cs-tile" {...reveal}>
          <p className="cs-eyebrow is-amber">Outdoor Asset Tracking</p>
          <h3>Finished Vehicle Yard Asset Tracking with Long-Range LoRaWAN GPS</h3>
          <ul className="cs-pills"><li>15km LoRaWAN Range</li><li>Instant VIN Barcode Sync</li><li>0 SIM Card Fees</li></ul>
          <div className="cs-art cs-art--guest" aria-hidden="true">
            <div className="cs-art__bubble"><b>VIN: 1FA6P8CF</b> Row 14, Slot 22 &bull; Ready for Hauler Load</div>
            <div className="cs-art__lorawan"><Navigation size={32} /><em>LoRaWAN GPS Live</em></div>
            <div className="cs-art__person p1" /><div className="cs-art__person p2" />
          </div>
          <Link href="/solutions/yard-management" className="cs-see">Explore Yard Tracking <span><ArrowRight size={16} /></span></Link>
        </motion.article>

        {/* Tile 3: mmWave Lighting & Occupancy */}
        <motion.article className="cs-tile" {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
          <p className="cs-eyebrow is-blue">Plant Energy &amp; Safety Automation</p>
          <h3>mmWave Radar High-Bay Lighting Automation &amp; Cell Occupancy</h3>
          <ul className="cs-pills"><li>45% Lighting Energy Cut</li><li>Micro-motion Sensing</li><li>Camera-free Privacy</li></ul>
          <div className="cs-art cs-art--care" aria-hidden="true">
            <span className="cs-art__pulse" /><span className="cs-art__pulse p2" />
            <div className="cs-art__ap"><Radar size={30} /></div>
            <div className="cs-art__handset"><i /><i /><i /><MapPin size={16} /></div>
          </div>
          <Link href="/solutions/facility-automation" className="cs-see">Explore mmWave Automation <span><ArrowRight size={16} /></span></Link>
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
          <h2>Connect <em className="is-people">production lines</em> &amp; <em className="is-things">vehicle assets</em> across your plant</h2>
          <p>
            Locus captures real-time spatial coordinates from vehicle bodies, tooling dollies, AGVs, and assembly operators across your automotive facility. By deploying industrial BLE AoA locator gateways, UWB anchors, long-range LoRaWAN yard base stations, and mmWave radar sensors, you achieve continuous visibility from the stamping press to dealer transport haulers at low TCO.
          </p>
          <Link href="/discover/locus-platform" className="cs-know">Explore the Platform <ArrowRight size={20} /></Link>
        </motion.div>

        <motion.div className="cs-iso" {...reveal} transition={{ ...reveal.transition, delay: 0.12 }} aria-hidden="true">
          <svg viewBox="0 0 520 600">
            <defs>
              <linearGradient id="isoL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0099ff" /><stop offset="1" stopColor="#0b1f38" /></linearGradient>
              <linearGradient id="isoR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#38bdf8" /><stop offset="1" stopColor="#0284c7" /></linearGradient>
              <radialGradient id="cloud" cx=".5" cy=".4" r=".7"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#cbe7ff" /></radialGradient>
            </defs>
            <polygon points="30,380 260,490 260,580 30,470" fill="url(#isoL)" />
            <polygon points="260,490 490,380 490,470 260,580" fill="url(#isoR)" />
            <polygon points="260,270 490,380 260,490 30,380" fill="#fff" stroke="#bae6fd" strokeWidth="2" />
            {[[150, 380], [260, 330], [370, 380], [260, 440], [200, 350], [330, 420]].map(([x, y], i) => (
              <g key={i}>
                <line x1={x} y1={y} x2="260" y2="380" className="cs-iso__link" />
                <circle cx={x} cy={y} r="9" fill="#0099ff" className="cs-iso__node" style={{ animationDelay: `${i * 0.35}s` }} />
              </g>
            ))}
            <line x1="260" y1="380" x2="260" y2="170" className="cs-iso__beam" />
            <line x1="235" y1="380" x2="235" y2="190" className="cs-iso__beam b2" />
            <line x1="285" y1="380" x2="285" y2="190" className="cs-iso__beam b3" />
            <ellipse cx="260" cy="160" rx="120" ry="52" fill="url(#cloud)" className="cs-iso__cloud" />
            <ellipse cx="260" cy="120" rx="70" ry="30" fill="#7dd3fc" opacity=".85" className="cs-iso__cloud" />
            <ellipse cx="260" cy="60" rx="46" ry="20" fill="#0099ff" opacity=".9" className="cs-iso__cloud" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- In a nutshell ---------- */
const floaters = [
  [Car, 'f1'], [Navigation, 'f2'], [Package, 'f3'], [ShieldCheck, 'f4'], [Radar, 'f5'], [MapPin, 'f6'],
] as const

function Nutshell() {
  return (
    <section className="cs-nut">
      <div className="cs-wrap">
        <motion.div className="cs-laptop" {...reveal}>
          {floaters.map(([Icon, cls]) => <span key={cls} className={`cs-float ${cls}`}><Icon size={44} /></span>)}
          <div className="cs-laptop__screen">
            <p>Automotive Assembly Telemetry</p>
            <div className="cs-laptop__stats">
              {['99.8% Accuracy', '10-30cm UWB Precision', '500+ Cars / Shift', '45% Lighting Cut', '15km LoRaWAN Range', '0 Tooling Loss'].map((s) => (
                <span key={s}><b>{s.split(' ')[0]}</b>{s.split(' ').slice(1).join(' ')}</span>
              ))}
            </div>
            <div className="cs-laptop__apps">
              {['Assembly Line RTLS', 'VIN Yard Locator', 'mmWave Lighting', 'Torque Interlocks', 'Takt Analytics', 'Hazard Zones'].map((a) => <span key={a}>{a}</span>)}
            </div>
          </div>
          <div className="cs-laptop__base" />
        </motion.div>

        <motion.h2 className="cs-nut__title" {...reveal}>Locus Automotive Platform at a glance</motion.h2>
        <div className="cs-nut__cols">
          <motion.div {...reveal}>
            <h3>Assembly &amp; Yard Modules</h3>
            <p>Turnkey industrial applications built for automotive OEMs to eliminate assembly delays, manage vehicle holding yards, and automate factory lighting.</p>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <h3>Industrial Integration Hub</h3>
            <p>Direct integration into Siemens, Rockwell Allen-Bradley, and SAP Manufacturing Execution Systems via MQTT, OPC-UA, and REST.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Plant Assessment banner ---------- */
function LicenceBanner() {
  return (
    <section className="cs-lic">
      <div className="cs-lic__glow" aria-hidden="true" />
      <motion.div className="cs-lic__inner" {...reveal}>
        <h2>Ready to eliminate assembly blind spots?<br /><span>Request an <mark>Industrial RTLS</mark> Assessment!</span></h2>
        <Link href="/contact" className="cs-btn cs-btn--green">Book Plant Assessment <ArrowRight size={18} /></Link>
      </motion.div>
    </section>
  )
}

/* ---------- Stories ---------- */
const stories = [
  { img: '/images/manufacturing_hero.webp', tag: 'EV Assembly Plant', cta: 'Read the case study', quote: 'With Locus BLE AoA and UWB tracking, we eliminated vehicle sequencing errors completely on our EV skateboard battery marriage line. Operators find every component dolly immediately.', name: 'Director of Manufacturing Engineering', role: 'Global EV Manufacturer' },
  { img: '/images/transportation_hero.webp', tag: 'Commercial Truck OEM', cta: 'Get the plant report', quote: 'Our finished vehicle yard covers over 35 acres. LoRaWAN GPS trackers cut our vehicle retrieval and driver dispatch time by 90%, enabling faster carrier haul-aways.', name: 'Plant Logistics Manager', role: 'Commercial Truck Assembly' },
  { img: '/images/oil_gas_hero.webp', tag: 'Tier-1 Automotive Supplier', cta: 'View the energy brief', quote: 'Deploying mmWave radar sensors across our stamping and press bays reduced lighting electricity consumption by 46% while providing total worker safety compliance without cameras.', name: 'Head of Facilities & Sustainability', role: 'Tier-1 Powertrain Supplier' },
]

function Stories() {
  return (
    <section className="cs-stories">
      <div className="cs-wrap">
        <motion.div className="cs-center" {...reveal}>
          <h2>Automotive Manufacturing Case Studies</h2>
          <p>Real Plants. Real OEMs. Proven Operational ROI</p>
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
  { tag: 'Engineering Whitepaper', title: 'BLE AoA vs UWB: Architecture Guide for Automotive Assembly', date: 'September 2026', href: '/resources/blogs', img: '/images/cards/asset.svg', tone: 'a' },
  { tag: 'Case Study', title: 'Managing 20,000 Finished Vehicles with Long-Range LoRaWAN GPS', date: 'September 2026', href: '/resources/stories-from-locus', img: '/images/cards/map.svg', tone: 'b' },
  { tag: 'Technical Guide', title: 'mmWave Radar for Industrial High-Bay Lighting Automation', date: 'August 2026', href: '/resources/blogs', img: '/images/cards/analytics.svg', tone: 'c' },
  { tag: 'Interactive Tool', title: 'Locus Studio: Design Plant RTLS & mmWave Sensor Density', date: 'August 2026', href: '/resources/locus-studio', img: '/images/cards/laptop.svg', tone: 'd' },
]

function Latest() {
  return (
    <section className="cs-latest">
      <div className="cs-wrap">
        <motion.h2 {...reveal}>Latest Automotive Engineering Resources</motion.h2>
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
  ['Assembly Line WIP RTLS', '/solutions/production-line-tracking'],
  ['Finished Vehicle Yard Logistics', '/solutions/yard-management'],
  ['mmWave Lighting Automation', '/solutions/facility-automation'],
  ['BLE AoA Gateway Mesh', '/solutions/ble-aoa-gateways'],
  ['UWB Marriage Synchronization', '/solutions/uwb-precision'],
  ['LoRaWAN Outdoor GPS', '/solutions/lorawan-gps'],
  ['Smart Tooling & Torque Interlocks', '/solutions/tool-tracking'],
  ['AGV & Material Tugger Flow', '/solutions/agv-material-flow'],
  ['Chassis Marriage Lines', '/solutions/chassis-marriage'],
  ['Production Cell Safety', '/solutions/worker-safety-occupancy'],
  ['Takt Time Bottleneck Analytics', '/solutions/cycle-time-analytics'],
  ['EV Battery Pack Tracking', '/solutions/passenger-ev'],
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
          <h3>Featured Automotive Outcomes</h3>
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
