import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, MotionValue, useInView, useScroll, useTransform } from 'framer-motion'
import { Activity, ArrowRight, Car, Cloud, Cpu, Factory, Layers, Lock, Navigation, Plug, Radio, Rocket, ShieldCheck, Truck, Zap } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
const reveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease },
}

function Count({ to, suffix = '', decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf = 0
    const t0 = performance.now()
    const tick = (n: number) => {
      const p = Math.min((n - t0) / 1800, 1)
      setV(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])
  return <span ref={ref}>{v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>
}

/* Scroll-scrubbed statement: each word brightens as the section scrolls */
function ScrollWord({ w, i, n, p, hi }: { w: string; i: number; n: number; p: MotionValue<number>; hi: boolean }) {
  const o = useTransform(p, [(i / n) * 0.75, ((i + 1) / n) * 0.75], [0.14, 1])
  return <><motion.span style={{ opacity: o }} className={hi ? 'wl-grad' : ''}>{w}</motion.span>{' '}</>
}

function Statement() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const text = 'Automotive assembly has entered Industry 4.0. With Locus RTLS, your plant never loses track of a single chassis or tool.'
  const words = text.split(' ')
  return (
    <div ref={ref} className="wl-statement">
      <div className="wl-statement__sticky">
        <h2>{words.map((w, i) => <ScrollWord key={i} w={w} i={i} n={words.length} p={scrollYProgress} hi={i >= words.length - 8} />)}</h2>
        <motion.p style={{ opacity: useTransform(scrollYProgress, [0.7, 0.95], [0, 1]) }}>
          Sub-meter BLE AoA, centimeter UWB, yard-wide LoRaWAN GPS, and mmWave micro-motion radar: everything your automotive production facility needs to eliminate bottlenecks and optimize throughput.
        </motion.p>
      </div>
    </div>
  )
}

/* Sticky stacking platform layers */
const layers = [
  { icon: Radio, t: 'BLE & AoA Locator Arrays', d: 'Industrial BLE Angle-of-Arrival locator arrays deliver 30–50 cm precision across stamping, body-in-white, and final assembly lines.' },
  { icon: Cpu, t: 'UWB Centimeter Precision Anchors', d: 'Ultra-wideband precision anchors (10–30 cm) track chassis-powertrain marriage, high-torque tools, and AGV docking stations.' },
  { icon: Navigation, t: 'LoRaWAN Outdoor GPS Trackers', d: 'Long-range battery-powered GPS transponders monitor finished vehicles across holding yards, transit depots, and test tracks.' },
  { icon: Activity, t: 'mmWave 60GHz Radar Nodes', d: 'Micro-motion presence sensing automates high-bay plant lighting and monitors workcell occupancy without privacy-invasive optical cameras.' },
  { icon: Plug, t: 'Open Automotive MES & SAP APIs', d: 'Publishes instant geofence events, VIN associations, and cycle times directly into SAP S/4HANA, Siemens Opcenter, and Rockwell SCADA.' },
]

function Layer({ l, i }: { l: (typeof layers)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 30%'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1])
  const op = useTransform(scrollYProgress, [0, 0.6], [0.3, 1])
  const Icon = l.icon
  return (
    <div ref={ref} className="wl-layer" style={{ top: `calc(var(--header-height) + ${28 + i * 22}px)` }}>
      <motion.div className="wl-layer__card" style={{ scale, opacity: op }}>
        <span className="wl-layer__n">0{i + 1}</span>
        <div className="wl-layer__art" aria-hidden="true">
          <i /><i /><i />
          <span><Icon size={44} /></span>
        </div>
        <div className="wl-layer__copy"><h3>{l.t}</h3><p>{l.d}</p></div>
      </motion.div>
    </div>
  )
}

const buildings = [[Car, 'EV Assembly'], [Truck, 'Truck & Bus Lines'], [Factory, 'Powertrain & Battery'], [Navigation, 'Vehicle Holding Yards'], [ShieldCheck, 'Stamping & BIW'], [Activity, 'Paint & Finish']] as const
const roles = ['Plant Directors', 'Assembly Line Leads', 'Quality Engineers', 'Yard Logistics', 'MES Architects', 'Facilities & Energy', 'Safety Officers', 'Industrial Engineers']
const trust = [
  [Lock, 'Industrial Security', 'TLS 1.3 encrypted telemetry, hardware security modules, and on-prem or hybrid air-gapped deployment.'],
  [Zap, 'Sub-Second Latency', 'High-frequency telemetry updates enable instant robotic cell interlocks and line-stop triggers.'],
  [Cloud, 'Digital Twin Cloud & Edge', 'Unified high-availability edge nodes maintain local positioning even during network partitions.'],
  [Rocket, 'Rapid Plant Commissioning', 'Factory pre-calibrated BLE AoA arrays and drop-in LoRaWAN gateways enable fast deployment with zero line stoppages.'],
] as const

export default function WhyLocus() {
  return (
    <>
      {/* 1. Hero */}
      <section className="wl-hero">
        <div className="wl-waves" aria-hidden="true">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="w1" x1="0" x2="1"><stop offset="0" stopColor="#0052cc" /><stop offset=".5" stopColor="#0099ff" /><stop offset="1" stopColor="#38bdf8" /></linearGradient>
              <linearGradient id="w2" x1="0" x2="1"><stop offset="0" stopColor="#0b1f38" /><stop offset=".6" stopColor="#0284c7" /><stop offset="1" stopColor="#0099ff" /></linearGradient>
            </defs>
            <path className="wl-wave wl-wave--a" fill="url(#w2)" d="M0 220 C 240 120 420 300 720 200 S 1200 120 1440 220 V400 H0Z" />
            <path className="wl-wave wl-wave--b" fill="url(#w1)" d="M0 280 C 260 200 480 340 760 270 S 1220 210 1440 290 V400 H0Z" />
          </svg>
        </div>
        <h1 aria-label="Why Locus?">
          {['Why', 'Locus?'].map((w, i) => (
            <span key={w} className="wl-word"><motion.span className={i ? 'wl-grad' : ''} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, ease, delay: i * 0.15 }}>{w}&nbsp;</motion.span></span>
          ))}
        </h1>
        <motion.span className="dp-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} aria-hidden="true"><i /></motion.span>
      </section>

      {/* 2. Scroll-scrubbed statement */}
      <Statement />

      {/* 3. Full stack */}
      <section className="wl-stack">
        <div className="wl-wrap">
          <motion.h2 className="wl-h2" {...reveal}>All the tools an automotive plant needs, <span className="wl-grad">on one industrial RTLS platform</span></motion.h2>
          <motion.p className="wl-lead" {...reveal}>
            The Locus industrial RTLS engine integrates BLE AoA gateways, UWB anchors, LoRaWAN outdoor GPS trackers, and 60GHz mmWave radar sensors into a unified factory digital twin with bi-directional MES/ERP integration.
          </motion.p>
        </div>
        <div className="wl-layers">{layers.map((l, i) => <Layer key={l.t} l={l} i={i} />)}</div>
      </section>

      {/* 4. Trust */}
      <section className="wl-trust">
        <div className="wl-wrap">
          <motion.h2 className="wl-h2" {...reveal}>Validated by Industrial IT, <span className="wl-grad">trusted by Manufacturing Operations</span></motion.h2>
          <div className="wl-trust__grid">
            {trust.map(([Icon, t, d], i) => (
              <motion.div key={t} className="wl-trust__item" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                <span><Icon size={30} /></span><h3>{t}</h3><p>{d}</p>
              </motion.div>
            ))}
          </div>
          <motion.p className="wl-big" {...reveal}><strong><Count to={15000} suffix="+" /></strong> Vehicle chassis &amp; carriers tracked concurrently per plant</motion.p>
        </div>
      </section>

      {/* 5. Recognition */}
      <section className="wl-rated">
        <motion.div className="wl-wrap" {...reveal}>
          <h2 className="wl-h2">Rated highly. <span className="wl-grad">By automotive OEM plant teams.</span></h2>
          <div className="wl-stars" aria-label="Five star rating">{Array.from({ length: 5 }, (_, i) => <motion.i key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.12, type: 'spring', stiffness: 300 }}>&#9733;</motion.i>)}</div>
          <p className="wl-lead">Top automotive OEMs and Tier-1 suppliers choose Locus for mission-critical production tracking and yard dispatching.</p>
        </motion.div>
      </section>

      {/* 6. Use cases */}
      <section className="wl-any">
        <div className="wl-wrap">
          <motion.h2 className="wl-h2" {...reveal}>Any automotive facility. Locus brings it into <span className="wl-grad">Industry 4.0</span></motion.h2>
          <div className="wl-any__grid">
            {buildings.map(([Icon, l], i) => (
              <motion.div key={l} className="wl-any__item" {...reveal} transition={{ ...reveal.transition, delay: i * 0.07 }}>
                <span><Icon size={36} /></span><b>{l}</b>
              </motion.div>
            ))}
            <motion.div className="wl-any__item wl-any__item--more" {...reveal} transition={{ ...reveal.transition, delay: 0.5 }}><b>and more</b></motion.div>
          </div>
        </div>
      </section>

      {/* 7. Apps & outcomes */}
      <section className="wl-apps">
        <div className="wl-wrap">
          <motion.div className="wl-dash" {...reveal} aria-hidden="true">
            <div className="wl-dash__bar"><i /><i /><i /></div>
            <div className="wl-dash__body">{Array.from({ length: 8 }, (_, i) => <span key={i} style={{ animationDelay: `${i * 0.15}s` }} />)}</div>
          </motion.div>
          <div className="wl-counters">
            <motion.div {...reveal}><strong><Count to={18} suffix="+" /></strong><span>Production Line Modules</span></motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}><strong><Count to={45} suffix="+" /></strong><span>Industrial Connectors</span></motion.div>
          </div>
          <motion.ul className="wl-roles" {...reveal}>{roles.map((r) => <li key={r}>{r}</li>)}</motion.ul>
        </div>
      </section>

      {/* 8. Scale */}
      <section className="wl-scale">
        <div className="wl-wrap">
          <motion.h2 className="wl-h2" {...reveal}>Engineered for <span className="wl-grad">Automotive Scale</span></motion.h2>
          <div className="wl-scale__grid">
            <motion.div {...reveal}><strong>99.8%</strong><span>WIP Search Time Reduction</span></motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}><strong><Count to={45} suffix="%" /></strong><span>High-Bay Lighting Energy Saved</span></motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.24 }}><strong>&lt; 10s</strong><span>Yard Vehicle Retrieval Time</span></motion.div>
          </div>
        </div>
      </section>

      {/* 9. ROI */}
      <section className="wl-roi">
        <div className="wl-wrap">
          <motion.h2 className="wl-h2" {...reveal}>Substantial ROI Across Assembly &amp; Yard Operations</motion.h2>
          <motion.p className="wl-roi__num" {...reveal}><span className="wl-grad"><Count to={11} suffix="x" /></span> return</motion.p>
          <motion.div {...reveal}><Link href="/resources/roi-with-locus" className="wl-ghost">Plant ROI Calculator <ArrowRight size={20} /></Link></motion.div>
        </div>
      </section>

      {/* 10. Brand close */}
      <section className="wl-close">
        <motion.div className="wl-wrap" {...reveal}>
          <h2>Why Locus? Precision Industrial RTLS Built for <span className="wl-grad">Automobile Assembly</span></h2>
          <p>Locus delivers complete visibility across every phase of vehicle production &mdash; from stamped steel to finished vehicle lot dispatching.</p>
          <Link href="/contact" className="dp-try">Request Plant Assessment</Link>
        </motion.div>
      </section>
    </>
  )
}
