import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Cloud, Cpu, Plus, Radio, Wifi } from 'lucide-react'
import { solutions, bySlug } from '../../data/solutions'
import SolutionIcon from '../../components/SolutionIcon'

const ease = [0.22, 1, 0.36, 1] as const
const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease },
}

/** Hero headline overrides (Cisco-style "Real-Time ..." titles) */
const heroTitle: Record<string, string> = {
  'occupancy-monitoring': 'Real-Time Occupancy Monitoring',
  'asset-tracking': 'Real-Time Asset Tracking',
  'indoor-navigation': 'Indoor Navigation for Any Building',
  'location-analytics': 'Location Analytics and Insights',
  'density-monitoring': 'Live Density Monitoring',
  'smart-workspaces': 'Smart Workspaces for Hybrid Work',
  'smart-healthcare': 'Smart Healthcare, Safer Operations',
  'smart-venues': 'Smart Venues that Delight Guests',
}

/** Hero photography, from the images already on the site */
const heroImage: Record<string, string> = {
  'occupancy-monitoring': '/images/transportation_hero.webp',
  'density-monitoring': '/images/sport_hero.webp',
  'asset-tracking': '/images/warehouse_tracking.webp',
  'detect-locate': '/images/manufacturing_hero.webp',
  'indoor-navigation': '/images/museums_hero.webp',
  'guest-wifi-onboarding': '/images/shopping_mall_hero.webp',
  'contextual-engagements': '/images/retail_hero.webp',
  'location-analytics': '/images/shopping_mall_hero.webp',
  'energy-efficiency': '/images/real_estate_hero.webp',
  'space-utilization': '/images/real_estate_hero.webp',
  'smart-desking': '/images/real_estate_hero.webp',
  'meeting-room-finder': '/images/real_estate_hero.webp',
  'smart-rooms': '/images/real_estate_hero.webp',
  'ap-auto-location': '/images/universities_hero.webp',
  'smart-workspaces': '/images/real_estate_hero.webp',
  'smart-healthcare': '/images/healthcare_hero.webp',
  'smart-venues': '/images/sport_hero.webp',
}

const industryTiles = [
  { label: 'Offices', slug: 'workspaces', img: '/images/real_estate_hero.webp' },
  { label: 'Universities', slug: 'education', img: '/images/universities_hero.webp' },
  { label: 'Retail', slug: 'retail', img: '/images/retail_hero.webp' },
  { label: 'Venues', slug: 'stadium-venue', img: '/images/sport_hero.webp' },
]

const resourcePicks = [
  { tag: 'Webinar', title: 'Smart Spaces Starts Here', date: 'September 21, 2026', href: '/resources/webinars', tone: 'a' },
  { tag: 'Articles / Blogs', title: 'Beyond Guest Wi-Fi: What You Can Actually Do with Locus', date: 'September 7, 2026', href: '/resources/blogs', tone: 'b' },
  { tag: 'On-demand webinar', title: 'Session 1: Onboard Your Guests and Employees with Captive Portals', date: 'September 7, 2026', href: '/resources/webinars', tone: 'c' },
  { tag: 'Articles / Blogs', title: 'Introducing Locus Asset Tracking: Your Network Just Learned a New Trick', date: 'July 24, 2026', href: '/resources/blogs', tone: 'd' },
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
  const bg = s.image ?? heroImage[s.slug] ?? '/images/real_estate_hero.webp'
  const title = heroTitle[s.slug] ?? t

  const steps = [
    { t: 'Connect your network', d: `Locus reads signals from the Wi-Fi and BLE infrastructure you already run, so ${lower} starts without new hardware.`, icon: 'Wifi' },
    { t: 'Locate people and things', d: 'Positioning places every person, device and asset on a live, multi-floor map.', icon: 'MapPin' },
    { t: 'Analyze what happens', d: `Dashboards turn movement into ${s.metrics[0].label.toLowerCase()}, dwell and flow insight.`, icon: 'BarChart3' },
    { t: 'Act on the insight', d: 'Trigger alerts, workflows and experiences straight from what the data shows.', icon: 'Activity' },
  ]
  const faqs = [
    { q: `What is ${lower} with Locus?`, a: `${s.description} It runs on the wireless network you already have, so there is nothing to rip and replace.` },
    { q: `How does ${lower} improve efficiency?`, a: `${s.benefits[0].description} ${s.benefits[2].description}` },
    { q: `Can ${lower} help reduce costs?`, a: `Yes. Customers typically see results such as ${s.metrics[0].value} ${s.metrics[0].label.toLowerCase()} and ${s.metrics[1].value} ${s.metrics[1].label.toLowerCase()}.` },
    { q: `Does ${lower} support energy and sustainability goals?`, a: 'Yes. Accurate, real-time knowledge of how spaces are used helps you condition, light and clean only what is needed, and report the savings with auditable data.' },
  ]
  const cases = [
    { name: 'A leading university', text: `Used ${lower} to understand how campus buildings were really used and reshaped its space plan.`, stat: s.metrics[0], img: '/images/universities_hero.webp' },
    { name: 'A university hospital', text: `Adopted ${lower} to give staff faster, safer access to the people and equipment they need.`, stat: s.metrics[1], img: '/images/healthcare_hero.webp' },
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
            {[['IT', s.features.slice(0, 2)], ['Facilities', s.features.slice(2)]].map(([who, list], i) => (
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
              {[[Wifi, 'Wi-Fi & BLE signals'], [Radio, 'Sensors & tags'], [Cpu, 'Locus location engine'], [Cloud, 'Locus cloud & APIs']].map(([Icon, label]: any, i) => (
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
                    <div className={`cs-res__media t-${r.tone}`}><span>{r.tag}</span></div>
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
