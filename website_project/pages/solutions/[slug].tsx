import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'
import { solutions, bySlug, type Solution } from '../../data/solutions'
import { resources } from '../../data/info'
import SolutionIcon from '../../components/SolutionIcon'
import CTABanner from '../../components/CTABanner'

const groupLabel: Record<Solution['group'], string> = {
  featured: 'Solutions',
  usecase: 'By Usecase',
  industry: 'By Industry',
  team: 'By Teams',
}

const industries = ['Offices', 'Universities', 'Retail', 'Hospitals', 'Venues']
const roles = ['IT', 'Facilities', 'Real-Estate', 'Data teams', 'Marketing']
const resourcePicks = ['webinars', 'blogs', 'e-book', 'stories-from-locus']

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`sol-faq ${open ? 'is-open' : ''}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <Plus size={20} aria-hidden="true" />
      </button>
      <div className="sol-faq__body"><div><p>{a}</p></div></div>
    </div>
  )
}

export default function SolutionDetail({ slug }: { slug: string }) {
  const s = bySlug(slug)
  if (!s) return null

  const t = s.title
  const lower = t.toLowerCase()
  const faqs = [
    { q: `What is ${lower} with Locus?`, a: `${s.description} It runs on the wireless network you already have, so there is nothing to rip and replace.` },
    { q: `How does ${lower} improve efficiency?`, a: `${s.benefits[0].description} ${s.benefits[2].description}` },
    { q: `Can ${lower} help reduce costs?`, a: `Yes. Customers typically see results such as ${s.metrics[0].value} ${s.metrics[0].label.toLowerCase()} and ${s.metrics[1].value} ${s.metrics[1].label.toLowerCase()}.` },
    { q: `Does ${lower} support energy and sustainability goals?`, a: 'Yes. Accurate, real-time knowledge of how spaces are used helps you condition, light and clean only what is needed, and report the savings with auditable data.' },
  ]
  const picks = resourcePicks.map((r) => resources.find((x) => x.slug === r)!).filter(Boolean)

  return (
    <>
      <Head>
        <title>{`${t} | Locus Solutions`}</title>
        <meta name="description" content={s.description} />
      </Head>

      <div className="bg-surface-neutral">
        {/* Hero */}
        <section className="sol-hero">
          <div className="sol-hero__grid-bg" aria-hidden="true" />
          <div className="sol-hero__inner">
            <div className="sol-hero__copy">
              <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="sol-crumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><span>{groupLabel[s.group]}</span>
              </motion.nav>
              <motion.h1 className="sol-hero__title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
                {t}
              </motion.h1>
              <motion.p className="sol-hero__tagline" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.6 }}>
                {s.tagline}
              </motion.p>
              <motion.p className="sol-hero__desc" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26, duration: 0.6 }}>
                {s.description}
              </motion.p>
              <motion.div className="sol-hero__actions" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.6 }}>
                <Link href="/contact" className="btn btn-primary group inline-flex items-center gap-2">
                  Try For Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div className="sol-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
              {s.image ? <img src={s.image} alt="" className="sol-visual__img" /> : <div className="sol-visual__radar" aria-hidden="true"><span /><span /><span /></div>}
              <div className="sol-visual__badge"><SolutionIcon name={s.icon} className="sol-visual__badge-icon" /></div>
            </motion.div>
          </div>
        </section>

        {/* Split image / text sections */}
        {s.benefits.map((b, i) => (
          <section key={b.title} className={`sol-split ${i % 2 ? 'sol-split--flip' : ''}`}>
            <div className="sol-wrap sol-split__grid">
              <motion.div className="sol-split__text" {...reveal}>
                <span className="sol-eyebrow">{s.metrics[i]?.label ?? t}</span>
                <h2>{b.title}</h2>
                <p>{b.description}</p>
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

        {/* Industries & roles */}
        <section className="sol-section sol-section--tint">
          <div className="sol-wrap sol-who">
            <motion.div {...reveal}>
              <span className="sol-eyebrow">Industries</span>
              <ul>{industries.map((x) => <li key={x}>{x}</li>)}</ul>
            </motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
              <span className="sol-eyebrow">Target roles</span>
              <ul>{roles.map((x) => <li key={x}>{x}</li>)}</ul>
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section className="sol-section">
          <div className="sol-wrap">
            <motion.div className="sol-head" {...reveal}>
              <span className="sol-eyebrow">How it works</span>
              <h2>Apps that power {t}</h2>
            </motion.div>
            <div className="sol-apps">
              {s.features.slice(0, 3).map((f, i) => (
                <motion.div key={f} className="sol-app" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                  <span className="sol-app__icon"><SolutionIcon name={s.icon} /></span>
                  <h3>{f}</h3>
                  <p>{s.benefits[i].description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sol-section sol-section--tint">
          <div className="sol-wrap sol-faqs">
            <motion.div className="sol-head" {...reveal}>
              <span className="sol-eyebrow">FAQs</span>
              <h2>Frequently asked questions</h2>
            </motion.div>
            <motion.div {...reveal}>
              {faqs.map((f) => <Faq key={f.q} {...f} />)}
            </motion.div>
          </div>
        </section>

        {/* Resources */}
        <section className="sol-section">
          <div className="sol-wrap">
            <motion.div className="sol-head" {...reveal}>
              <span className="sol-eyebrow">Resources</span>
              <h2>Learn more about {t}</h2>
            </motion.div>
            <div className="sol-related">
              {picks.map((r, i) => (
                <motion.div key={r.slug} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                  <Link href={`/resources/${r.slug}`} className="sol-related__card">
                    <SolutionIcon name={r.icon} className="sol-related__icon" />
                    <h3>{r.title}</h3>
                    <p>{r.summary}</p>
                    <span className="sol-related__go">Learn more <ArrowRight size={16} /></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title={`Try ${t} for free`}
          description="Talk to our team and we will show you how it works in a space like yours."
          buttonText="Try For Free"
          buttonHref="/contact"
        />
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
