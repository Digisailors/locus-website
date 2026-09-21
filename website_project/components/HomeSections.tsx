import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { bySlug } from '../data/solutions'
import { resources } from '../data/info'
import SolutionIcon from './SolutionIcon'

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

function CountUp({ to, suffix = '', decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1400, 1)
      setVal(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>
}

const stats = [
  { to: 500, suffix: '+', label: 'Sites powered by Locus' },
  { to: 30, suffix: '%', label: 'Average space savings' },
  { to: 1.5, suffix: 'm', label: 'Typical positioning accuracy', decimals: 1 },
  { to: 40, suffix: '%', label: 'Less time searching for assets' },
]

const apps = ['occupancy-monitoring', 'asset-tracking', 'indoor-navigation', 'location-analytics', 'guest-wifi-onboarding', 'energy-efficiency']
const industries = ['healthcare', 'retail', 'education', 'manufacturing', 'airport', 'stadium-venue', 'hospitality', 'workspaces']
const pillars = [
  { title: 'Connect', text: 'Plug into the Wi-Fi and BLE network you already run. No rip and replace.' },
  { title: 'Locate', text: 'Place people, devices and assets on live multi-floor maps.' },
  { title: 'Analyze', text: 'Turn movement into occupancy, dwell and flow insight.' },
  { title: 'Act', text: 'Trigger alerts, workflows and experiences from what the data shows.' },
]
const stories = [
  { tag: 'Healthcare', title: 'A hospital network finds critical equipment in seconds', stat: '40%', label: 'less search time', href: '/solutions/smart-healthcare' },
  { tag: 'Workspaces', title: 'A global enterprise rebalances its office portfolio', stat: '30%', label: 'space savings', href: '/solutions/smart-workspaces' },
  { tag: 'Venues', title: 'A stadium operator shortens concession queues', stat: '40%', label: 'shorter waits', href: '/solutions/smart-venues' },
]

export default function HomeSections() {
  return (
    <>
      {/* Stats */}
      <section className="hs hs--tight">
        <div className="hs__wrap">
          <div className="hs-stats">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                <strong><CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} /></strong>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps */}
      <section className="hs">
        <div className="hs__wrap">
          <motion.div className="hs-head" {...reveal}>
            <span className="sol-eyebrow">Smart Spaces Apps</span>
            <h2>Apps that turn location into outcomes</h2>
            <p>Switch on the apps you need. They all share one map and one data layer.</p>
          </motion.div>
          <div className="hs-apps">
            {apps.map((slug, i) => {
              const s = bySlug(slug)!
              return (
                <motion.div key={slug} {...reveal} transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}>
                  <Link href={`/solutions/${slug}`} className="hs-app">
                    <span className="hs-app__icon"><SolutionIcon name={s.icon} /></span>
                    <h3>{s.title}</h3>
                    <p>{s.tagline}</p>
                    <span className="hs-app__go">Learn more <ArrowRight size={16} /></span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="hs hs--tint">
        <div className="hs__wrap">
          <motion.div className="hs-head" {...reveal}>
            <span className="sol-eyebrow">Solutions by industry</span>
            <h2>Built for the way your space works</h2>
          </motion.div>
        </div>
        <div className="hs-rail">
          {industries.map((slug) => {
            const s = bySlug(slug)!
            return (
              <Link key={slug} href={`/solutions/${slug}`} className="hs-ind">
                {s.image && <img src={s.image} alt="" loading="lazy" />}
                <div className="hs-ind__shade" />
                <div className="hs-ind__body">
                  <h3>{s.title}</h3>
                  <p>{s.tagline}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Platform */}
      <section className="hs hs--dark">
        <div className="hs__wrap">
          <motion.div className="hs-head hs-head--light" {...reveal}>
            <span className="sol-eyebrow">The Locus platform</span>
            <h2>One platform, from signal to action</h2>
          </motion.div>
          <div className="hs-pillars">
            {pillars.map((p, i) => (
              <motion.div key={p.title} className="hs-pillar" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                <span>{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...reveal} className="hs-center">
            <Link href="/discover/locus-platform" className="btn btn-primary group inline-flex items-center gap-2">
              Explore the platform <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stories */}
      <section className="hs">
        <div className="hs__wrap">
          <motion.div className="hs-head" {...reveal}>
            <span className="sol-eyebrow">Stories from Locus</span>
            <h2>Real outcomes in real spaces</h2>
          </motion.div>
          <div className="hs-stories">
            {stories.map((s, i) => (
              <motion.div key={s.title} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                <Link href={s.href} className="hs-story">
                  <span className="hs-story__tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <div className="hs-story__stat"><strong>{s.stat}</strong><span>{s.label}</span></div>
                  <span className="hs-app__go">Read the story <ArrowRight size={16} /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="hs hs--tint">
        <div className="hs__wrap">
          <motion.div className="hs-head" {...reveal}>
            <span className="sol-eyebrow">Resources</span>
            <h2>Learn, plan and get started</h2>
          </motion.div>
          <div className="hs-res">
            {['locus-studio', 'roi-with-locus', 'developer-hub', 'webinars'].map((slug, i) => {
              const r = resources.find((x) => x.slug === slug)!
              return (
                <motion.div key={slug} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                  <Link href={`/resources/${slug}`} className="hs-res__card">
                    {r.isNew && <span className="rmenu__badge">New</span>}
                    <SolutionIcon name={r.icon} className="hs-res__icon" />
                    <h3>{r.title}</h3>
                    <p>{r.summary}</p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

