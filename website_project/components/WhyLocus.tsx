import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, MotionValue, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Building2, Cloud, Cpu, GraduationCap, HeartPulse, Hotel, Layers, Lock, Plug, Rocket, ShoppingBag, Trophy, Wifi, Zap } from 'lucide-react'

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
  const text = 'The world has gone hybrid. With Locus, your buildings won’t fall behind.'
  const words = text.split(' ')
  return (
    <div ref={ref} className="wl-statement">
      <div className="wl-statement__sticky">
        <h2>{words.map((w, i) => <ScrollWord key={i} w={w} i={i} n={words.length} p={scrollYProgress} hi={i >= words.length - 6} />)}</h2>
        <motion.p style={{ opacity: useTransform(scrollYProgress, [0.7, 0.95], [0, 1]) }}>
          Safety, sustainability, efficiency and experience: everything your spaces need to work for the people in them.
        </motion.p>
      </div>
    </div>
  )
}

/* Sticky stacking platform layers */
const layers = [
  { icon: Wifi, t: 'Your network', d: 'Access points, switches, cameras and collaboration devices you already own become sensors, with no new hardware to buy.' },
  { icon: Cpu, t: 'Sensors & tags', d: 'Wi-Fi, BLE and third-party IoT signals arrive on a single, secure data layer.' },
  { icon: Cloud, t: 'Locus cloud engine', d: 'A location engine and 3D maps turn raw signals into positions, zones and rich location metadata.' },
  { icon: Layers, t: 'Native and partner apps', d: 'Switch on built-in apps or install partner apps for your industry, all sharing one map and one data layer.' },
  { icon: Plug, t: 'Open APIs', d: 'Push location intelligence into the systems your teams already use, or build your own experiences.' },
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

const buildings = [[Building2, 'Workplaces'], [HeartPulse, 'Hospitals'], [Hotel, 'Hotels'], [Trophy, 'Venues'], [ShoppingBag, 'Malls'], [GraduationCap, 'Campuses']] as const
const roles = ['IT', 'Facilities', 'Real Estate', 'Operations', 'CXOs', 'Data & Analytics', 'Marketing', 'CX & Loyalty']
const trust = [
  [Lock, 'Secure', 'Enterprise-grade encryption, access controls and privacy by design.'],
  [Zap, 'Proactive', 'Continuous monitoring of the platform, so issues are caught before you notice.'],
  [Cloud, 'SaaS', 'Always up to date. New features arrive automatically from the cloud.'],
  [Rocket, 'Quick deployment', 'Connect your network and go live on a first site in about half an hour.'],
] as const

export default function WhyLocus() {
  return (
    <>
      {/* 1. Hero */}
      <section className="wl-hero">
        <div className="wl-waves" aria-hidden="true">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="w1" x1="0" x2="1"><stop offset="0" stopColor="#0e7490" /><stop offset=".5" stopColor="#0ea5a4" /><stop offset="1" stopColor="#22c55e" /></linearGradient>
              <linearGradient id="w2" x1="0" x2="1"><stop offset="0" stopColor="#0b3b6f" /><stop offset=".6" stopColor="#0e7490" /><stop offset="1" stopColor="#15803d" /></linearGradient>
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
          <motion.h2 className="wl-h2" {...reveal}>All the tools a smart space needs, <span className="wl-grad">on one platform</span></motion.h2>
          <motion.p className="wl-lead" {...reveal}>
            The Locus cloud engine turns your existing network hardware into sensors, adds 3D maps and location metadata,
            layers on Wi-Fi and BLE services and third-party sensors, and delivers it all through native and partner apps and open APIs.
          </motion.p>
        </div>
        <div className="wl-layers">{layers.map((l, i) => <Layer key={l.t} l={l} i={i} />)}</div>
      </section>

      {/* 4. Trust */}
      <section className="wl-trust">
        <div className="wl-wrap">
          <motion.h2 className="wl-h2" {...reveal}>Approved by IT, <span className="wl-grad">valued by business teams</span></motion.h2>
          <div className="wl-trust__grid">
            {trust.map(([Icon, t, d], i) => (
              <motion.div key={t} className="wl-trust__item" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                <span><Icon size={30} /></span><h3>{t}</h3><p>{d}</p>
              </motion.div>
            ))}
          </div>
          <motion.p className="wl-big" {...reveal}><strong><Count to={10000} suffix="+" /></strong> IT &amp; business professionals use Locus, daily</motion.p>
        </div>
      </section>

      {/* 5. Recognition */}
      <section className="wl-rated">
        <motion.div className="wl-wrap" {...reveal}>
          <h2 className="wl-h2">Rated highly. <span className="wl-grad">By the teams that use it.</span></h2>
          <div className="wl-stars" aria-label="Five star rating">{Array.from({ length: 5 }, (_, i) => <motion.i key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.12, type: 'spring', stiffness: 300 }}>&#9733;</motion.i>)}</div>
          <p className="wl-lead">Customers consistently rank Locus among the leading indoor location and IoT platforms.</p>
        </motion.div>
      </section>

      {/* 6. Use cases */}
      <section className="wl-any">
        <div className="wl-wrap">
          <motion.h2 className="wl-h2" {...reveal}>Any building, anywhere. Locus turns it into <span className="wl-grad">a smart space</span></motion.h2>
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
            <motion.div {...reveal}><strong><Count to={25} suffix="+" /></strong><span>Native apps</span></motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}><strong><Count to={55} suffix="+" /></strong><span>Partner apps</span></motion.div>
          </div>
          <motion.ul className="wl-roles" {...reveal}>{roles.map((r) => <li key={r}>{r}</li>)}</motion.ul>
        </div>
      </section>

      {/* 8. Scale */}
      <section className="wl-scale">
        <div className="wl-wrap">
          <motion.h2 className="wl-h2" {...reveal}>Designed to <span className="wl-grad">scale</span></motion.h2>
          <div className="wl-scale__grid">
            <motion.div {...reveal}><strong>30</strong><span>Minutes to deploy</span></motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}><strong><Count to={1.2} decimals={1} /></strong><span>Billion sq ft of space digitized</span></motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.24 }}><strong><Count to={48000} /></strong><span>Global locations</span></motion.div>
          </div>
        </div>
      </section>

      {/* 9. ROI */}
      <section className="wl-roi">
        <div className="wl-wrap">
          <motion.h2 className="wl-h2" {...reveal}>Big gains on every $ spent</motion.h2>
          <motion.p className="wl-roi__num" {...reveal}><span className="wl-grad"><Count to={9} suffix="x" /></span> return</motion.p>
          <motion.div {...reveal}><Link href="/resources/roi-with-locus" className="wl-ghost">ROI Calculator <ArrowRight size={20} /></Link></motion.div>
        </div>
      </section>

      {/* 10. Brand close */}
      <section className="wl-close">
        <motion.div className="wl-wrap" {...reveal}>
          <h2>Why Locus? Because <span className="wl-grad">#WeAreLocus</span></h2>
          <p>Locus is your bridge to the future of smart buildings. The platform is the glue &ndash; connecting people and things through technology.</p>
          <Link href="/contact" className="dp-try">Try For Free</Link>
        </motion.div>
      </section>
    </>
  )
}
