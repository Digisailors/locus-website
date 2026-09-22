import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { AnimatePresence, motion } from 'framer-motion'
import { Activity, ArrowRight, ChevronLeft, ChevronRight, Cloud, Cpu, Navigation, Plus, Radio } from 'lucide-react'
import { solutions, bySlug } from '../../data/solutions'
import SolutionIcon from '../../components/SolutionIcon'

const ease = [0.22, 1, 0.36, 1] as const
const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease },
}

/** Hero headline overrides */
const heroTitle: Record<string, string> = {
  'production-line-tracking': 'Real-Time Vehicle Production Line Tracking',
  'yard-management': 'Finished Vehicle Yard Management & Tracking',
  'facility-automation': 'Industrial mmWave Lighting & Occupancy Automation',
  'ble-aoa-gateways': 'BLE AoA Sub-Meter Tracking Gateways',
  'uwb-precision': 'Centimeter-Precision UWB Assembly Tracking',
  'lorawan-gps': 'Long-Range Outdoor LoRaWAN GPS Tracking',
  'mmwave-sensors': 'Industrial mmWave Radar Presence Sensing',
  'chassis-marriage': 'Chassis-Powertrain Marriage Positioning',
  'tool-tracking': 'Smart Torque Tool Tracking & Interlocking',
  'agv-material-flow': 'AGV & Tugger Material Flow Logistics',
  'lighting-automation': 'Autonomous High-Bay Lighting Control',
  'worker-safety-occupancy': 'Occupancy & Robotic Cell Safety Monitoring',
  'cycle-time-analytics': 'Takt Time & Bottleneck Analytics',
  'passenger-ev': 'Passenger EV Production & Battery Tracking',
  'commercial-trucks': 'Commercial Truck & Bus Assembly RTLS',
  'tier1-suppliers': 'Tier-1 Powertrain & Component RTLS',
  'stamping-body-shop': 'Stamping & Body-in-White WIP Tracking',
}

/** Hero photography, from the images already on the site */
const heroImage: Record<string, string> = {
  'production-line-tracking': '/images/manufacturing_hero.webp',
  'yard-management': '/images/transportation_hero.webp',
  'facility-automation': '/images/warehouse_tracking.webp',
  'ble-aoa-gateways': '/images/manufacturing_hero.webp',
  'uwb-precision': '/images/warehouse_tracking.webp',
  'lorawan-gps': '/images/transportation_hero.webp',
  'mmwave-sensors': '/images/manufacturing_hero.webp',
  'chassis-marriage': '/images/manufacturing_hero.webp',
  'tool-tracking': '/images/warehouse_tracking.webp',
  'agv-material-flow': '/images/warehouse_tracking.webp',
  'lighting-automation': '/images/manufacturing_hero.webp',
  'worker-safety-occupancy': '/images/manufacturing_hero.webp',
  'cycle-time-analytics': '/images/transportation_hero.webp',
  'passenger-ev': '/images/manufacturing_hero.webp',
  'commercial-trucks': '/images/transportation_hero.webp',
  'tier1-suppliers': '/images/warehouse_tracking.webp',
  'stamping-body-shop': '/images/manufacturing_hero.webp',
}

const industryTiles = [
  { label: 'Passenger EV Assembly', slug: 'passenger-ev', img: '/images/manufacturing_hero.webp' },
  { label: 'Commercial Truck & Bus', slug: 'commercial-trucks', img: '/images/transportation_hero.webp' },
  { label: 'Tier-1 Powertrain & Battery', slug: 'tier1-suppliers', img: '/images/warehouse_tracking.webp' },
  { label: 'Body Shop & Stamping', slug: 'stamping-body-shop', img: '/images/manufacturing_hero.webp' },
]

const resourcePicks = [
  { tag: 'Whitepaper', title: 'Sub-Meter BLE AoA & Centimeter UWB in Automotive Assembly', date: 'September 2026', href: '/resources/blogs', img: '/images/cards/hardware.svg', tone: 'a' },
  { tag: 'Case Study', title: 'Eliminating Yard Dwell Time with LoRaWAN GPS Tracking', date: 'August 2026', href: '/resources/stories-from-locus', img: '/images/cards/location.svg', tone: 'b' },
  { tag: 'Technical Guide', title: 'Industrial mmWave Radar: High-Bay Lighting & Robotic Cell Safety', date: 'August 2026', href: '/resources/blogs', img: '/images/cards/sensors.svg', tone: 'c' },
  { tag: 'On-Demand Demo', title: 'Live Plant Digital Twin: Tracking 15,000 WIP Vehicles & Tools', date: 'July 2026', href: '/resources/webinars', img: '/images/cards/analytics.svg', tone: 'd' },
]

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`sol-faq ${open ? 'is-open' : ''}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{q}</span><Plus size={20} aria-hidden="true" />
      </button>
      <div className="sol-faq__body"><div><p>{a}</p></div></div>
    </div>
  )
}

function Words({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="sp-word" aria-hidden="true">
          <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease, delay: delay + i * 0.08 }}>{w}&nbsp;</motion.span>
        </span>
      ))}
    </span>
  )
}

export default function SolutionDetail({ slug }: { slug: string }) {
  const s = bySlug(slug)
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  if (!s) return null

  const t = s.title
  const lower = t.toLowerCase()
  const bg = s.image ?? heroImage[s.slug] ?? '/images/manufacturing_hero.webp'
  const title = heroTitle[s.slug] ?? t

  const steps = [
    { t: 'Deploy BLE AoA, UWB & LoRaWAN Sensors', d: `Locus connects with BLE AoA arrays, UWB anchors, LoRaWAN gateways, and mmWave radar nodes across the plant floor so ${lower} starts with zero blind spots.`, icon: 'Radio' },
    { t: 'Locate chassis, carriers & tools', d: 'Industrial positioning engine places every vehicle chassis, AGV carrier, torque tool, and worker on a live 3D factory digital twin.', icon: 'Crosshair' },
    { t: 'Analyze takt time & bottlenecks', d: `MES dashboards convert telemetry into live station cycle times, dwell durations, and supply flow heatmaps.`, icon: 'BarChart3' },
    { t: 'Automate line stops & facilities', d: 'Trigger automated lighting dimming, tool interlocks, and car-carrier staging workflows straight from real-time asset coordinates.', icon: 'Activity' },
  ]
  const faqs = [
    { q: `What is ${lower} with Locus?`, a: `${s.description} It unifies BLE AoA, UWB centimeter positioning, LoRaWAN outdoor GPS, and mmWave radar into an industrial RTLS architecture.` },
    { q: `How does ${lower} improve plant efficiency?`, a: `${s.benefits[0].description} ${s.benefits[2].description}` },
    { q: `Can ${lower} help reduce manufacturing costs?`, a: `Yes. Automotive plants typically achieve ${s.metrics[0].value} ${s.metrics[0].label.toLowerCase()} and ${s.metrics[1].value} ${s.metrics[1].label.toLowerCase()}.` },
    { q: `Does ${lower} support plant energy & sustainability goals?`, a: 'Yes. 60GHz mmWave radar sensors detect human micro-motion across high-bay zones to dim lighting automatically during shift transitions and breaks, cutting facility power by up to 45%.' },
  ]
  const cases = [
    { name: 'Global Passenger EV Assembly Plant', text: `Deployed BLE AoA and UWB across 4 assembly lines, cutting chassis search time to under 10 seconds and eliminating marriage misalignments.`, stat: s.metrics[0], img: '/images/manufacturing_hero.webp' },
    { name: 'Commercial Vehicle Staging Yard', text: `Integrated LoRaWAN GPS trackers across 120-acre holding yards, slashing truck carrier loading dispatch delays by 70%.`, stat: s.metrics[1], img: '/images/transportation_hero.webp' },
  ]
  const go = (n: number) => { setDir(n > step ? 1 : -1); setStep((n + steps.length) % steps.length) }

  return (
    <>
      <Head>
        <title>{`${t} | Locus Solutions`}</title>
        <meta name="description" content={s.description} />
      </Head>

      <div className="sp">
        {/* Hero — full-bleed photo, centred headline */}
        <section className="sp-hero">
          <div className="sp-hero__bg" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />
          <div className="sp-hero__shade" aria-hidden="true" />
          <div className="sp-hero__inner">
            <h1><Words text={title} /></h1>
            <motion.p className="sp-hero__by" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>by Locus</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7, ease }}>{s.tagline}</motion.h2>
            <motion.p className="sp-hero__lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.7, ease }}>{s.description}</motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7, ease }}>
              <Link href="/contact" className="sp-start">Start for free</Link>
            </motion.div>
          </div>
        </section>

        {/* Feature section — three split rows */}
        {s.benefits.map((b, i) => (
          <section key={b.title} className={`sol-split sp-split ${i % 2 ? 'sol-split--flip' : ''}`}>
            <div className="sol-wrap sol-split__grid">
              <motion.div className="sol-split__text" {...reveal}>
                <span className="sol-eyebrow">{s.features[i] ?? t}</span>
                <h2>{b.title}</h2>
                <p>{b.description}</p>
                {i === 2 && <Link href="/contact" className="sp-try">Try For Free <ArrowRight size={18} /></Link>}
              </motion.div>
              <motion.div className="sol-split__art" {...reveal} transition={{ ...reveal.transition, delay: 0.12 }} aria-hidden="true">
                <div className="sol-split__panel">
                  <SolutionIcon name={s.icon} className="sol-split__icon" />
                  <div className="sol-split__bars"><i /><i /><i /><i /><i /></div>
                  <div className="sol-split__stat"><strong>{s.metrics[i]?.value}</strong><span>{s.metrics[i]?.label}</span></div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Industry benefits */}
        <section className="sp-section">
          <div className="sol-wrap">
            <motion.h2 className="sp-h2" {...reveal}>{t} for every industry</motion.h2>
            <div className="sp-ind">
              {industryTiles.map((x, i) => (
                <motion.div key={x.slug} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                  <Link href={`/solutions/${x.slug}`} className="sp-ind__tile">
                    <img src={x.img} alt="" loading="lazy" />
                    <span className="sp-ind__shade" />
                    <span className="sp-ind__label">{x.label} <ArrowRight size={18} /></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="sp-section sp-section--tint">
          <div className="sol-wrap sp-aud">
            {[['Manufacturing & Plant Operations', s.features.slice(0, 2)], ['Industrial Engineering & Facilities', s.features.slice(2)]].map(([who, list], i) => (
              <motion.div key={who as string} className="sp-aud__col" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                <span className="sol-eyebrow">For</span>
                <h3>{who as string}</h3>
                <ul>{(list as string[]).map((f) => <li key={f}>{f}</li>)}</ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How it works — carousel */}
        <section className="sp-section">
          <div className="sol-wrap">
            <motion.h2 className="sp-h2" {...reveal}>How it works</motion.h2>
            <div className="sp-how">
              <button className="sp-how__arrow" onClick={() => go(step - 1)} aria-label="Previous step"><ChevronLeft /></button>
              <div className="sp-how__stage">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div key={step} className="sp-how__slide" initial={{ opacity: 0, x: dir * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -60 }} transition={{ duration: 0.4, ease }}>
                    <div className="sp-how__copy">
                      <span className="sp-how__n">Step {step + 1}</span>
                      <h3>{steps[step].t}</h3>
                      <p>{steps[step].d}</p>
                      <Link href="/contact" className="sp-try">Try For Free <ArrowRight size={18} /></Link>
                    </div>
                    <div className="sp-how__art" aria-hidden="true"><SolutionIcon name={steps[step].icon} className="sp-how__icon" /><span /><span /></div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button className="sp-how__arrow" onClick={() => go(step + 1)} aria-label="Next step"><ChevronRight /></button>
            </div>
            <div className="sp-how__dots">{steps.map((_, i) => <button key={i} className={i === step ? 'is-on' : ''} onClick={() => go(i)} aria-label={`Step ${i + 1}`} />)}</div>
          </div>
        </section>

        {/* Technology */}
        <section className="sp-section sp-section--dark">
          <div className="sol-wrap">
            <motion.h2 className="sp-h2 sp-h2--light" {...reveal}>The technology behind {lower}</motion.h2>
            <motion.div className="sp-tech" {...reveal}>
              {[[Radio, 'BLE AoA & UWB Gateways'], [Navigation, 'LoRaWAN Outdoor GPS'], [Activity, 'mmWave Radar Nodes'], [Cpu, 'Locus RTLS Engine']].map(([Icon, label]: any, i) => (
                <div key={label} className="sp-tech__node" style={{ animationDelay: `${i * 0.4}s` }}>
                  <span><Icon size={30} /></span>
                  <b>{label}</b>
                </div>
              ))}
              <i className="sp-tech__line" aria-hidden="true" />
            </motion.div>
          </div>
        </section>

        {/* Case studies */}
        <section className="sp-section">
          <div className="sol-wrap">
            <motion.h2 className="sp-h2" {...reveal}>Customer stories</motion.h2>
            <div className="sp-cases">
              {cases.map((c, i) => (
                <motion.article key={c.name} className="sp-case" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                  <div className="sp-case__media"><img src={c.img} alt="" loading="lazy" /><span /></div>
                  <div className="sp-case__body">
                    <h3>{c.name}</h3>
                    <p>{c.text}</p>
                    <div className="sp-case__stat"><strong>{c.stat.value}</strong><span>{c.stat.label}</span></div>
                    <Link href="/resources/stories-from-locus" className="sp-try">Read More <ArrowRight size={18} /></Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sp-section sp-section--tint">
          <div className="sol-wrap sol-faqs">
            <motion.h2 className="sp-h2" {...reveal}>Frequently asked questions</motion.h2>
            <motion.div {...reveal}>{faqs.map((f) => <Faq key={f.q} {...f} />)}</motion.div>
          </div>
        </section>

        {/* Latest resources */}
        <section className="cs-latest">
          <div className="cs-wrap">
            <motion.h2 {...reveal}>Our latest resources</motion.h2>
            <div className="cs-latest__grid">
              {resourcePicks.map((r, i) => (
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
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: solutions.map((s) => ({ params: { slug: s.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { slug: params?.slug as string },
})
