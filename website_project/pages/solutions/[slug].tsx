import Head from 'next/head'
import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { solutions, bySlug, type Solution } from '../../data/solutions'
import SolutionIcon from '../../components/SolutionIcon'
import CTABanner from '../../components/CTABanner'

const groupLabel: Record<Solution['group'], string> = {
  featured: 'Solution',
  usecase: 'Use case',
  industry: 'Industry',
  team: 'For teams',
}

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

export default function SolutionDetail({ slug }: { slug: string }) {
  const s = bySlug(slug)
  if (!s) return null

  const related = s.related.map(bySlug).filter(Boolean) as Solution[]
  const steps = [
    { title: 'Connect', description: `Use your existing Wi-Fi and BLE infrastructure, adding sensors only where ${s.title.toLowerCase()} needs extra precision.` },
    { title: 'Locate', description: 'Positioning places every person, device and asset on a live, multi-floor map.' },
    { title: 'Analyze', description: 'Dashboards and APIs turn raw movement into occupancy, dwell and flow insight.' },
    { title: 'Act', description: 'Trigger alerts, workflows and experiences straight from what the data shows.' },
  ]

  return (
    <>
      <Head>
        <title>{`${s.title} | Locus Solutions`}</title>
        <meta name="description" content={s.description} />
      </Head>

      <div className="bg-surface-neutral">
        {/* Hero */}
        <section className="sol-hero">
          <div className="sol-hero__grid-bg" aria-hidden="true" />
          <div className="sol-hero__inner">
            <div className="sol-hero__copy">
              <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="sol-crumbs" aria-label="Breadcrumb">
                <Link href="/solutions">Solutions</Link>
                <span>/</span>
                <span>{groupLabel[s.group]}</span>
              </motion.nav>
              <motion.span
                className="sol-hero__eyebrow"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              >
                Introducing
              </motion.span>
              <motion.h1
                className="sol-hero__title"
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.6 }}
              >
                {s.title}
              </motion.h1>
              <motion.p
                className="sol-hero__tagline"
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              >
                {s.tagline}
              </motion.p>
              <motion.p
                className="sol-hero__desc"
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.6 }}
              >
                {s.description}
              </motion.p>
              <motion.div
                className="sol-hero__actions"
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.6 }}
              >
                <Link href="/contact" className="btn btn-primary group inline-flex items-center gap-2">
                  Request a demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/platform" className="btn sol-btn-ghost">Explore the platform</Link>
              </motion.div>
            </div>

            <motion.div
              className="sol-visual"
              initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
            >
              {s.image ? (
                <img src={s.image} alt="" className="sol-visual__img" />
              ) : (
                <div className="sol-visual__radar" aria-hidden="true">
                  <span /><span /><span />
                </div>
              )}
              <div className="sol-visual__badge">
                <SolutionIcon name={s.icon} className="sol-visual__badge-icon" />
              </div>
              <div className="sol-visual__chip sol-visual__chip--a">
                <strong>{s.metrics[0].value}</strong>
                <span>{s.metrics[0].label}</span>
              </div>
              <div className="sol-visual__chip sol-visual__chip--b">
                <strong>{s.metrics[1].value}</strong>
                <span>{s.metrics[1].label}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics */}
        <section className="sol-section sol-section--tight">
          <div className="sol-wrap">
            <div className="sol-metrics">
              {s.metrics.map((m, i) => (
                <motion.div key={m.label} className="sol-metric" {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="sol-section">
          <div className="sol-wrap">
            <motion.div className="sol-head" {...reveal}>
              <span className="sol-eyebrow">Why it matters</span>
              <h2>Benefits of {s.title}</h2>
            </motion.div>
            <div className="sol-benefits">
              {s.benefits.map((b, i) => (
                <motion.article key={b.title} className="sol-benefit" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                  <span className="sol-benefit__num">0{i + 1}</span>
                  <h3>{b.title}</h3>
                  <p>{b.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="sol-section sol-section--dark">
          <div className="sol-wrap">
            <motion.div className="sol-head sol-head--light" {...reveal}>
              <span className="sol-eyebrow">How it works</span>
              <h2>From signal to action</h2>
            </motion.div>
            <div className="sol-steps">
              {steps.map((st, i) => (
                <motion.div key={st.title} className="sol-step" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                  <span className="sol-step__idx">{i + 1}</span>
                  <h3>{st.title}</h3>
                  <p>{st.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="sol-section">
          <div className="sol-wrap sol-features">
            <motion.div {...reveal}>
              <span className="sol-eyebrow">Capabilities</span>
              <h2 className="sol-features__title">Everything you need for {s.title.toLowerCase()}</h2>
              <p className="sol-features__lead">{s.description}</p>
            </motion.div>
            <ul className="sol-features__list">
              {s.features.map((ft, i) => (
                <motion.li key={ft} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                  <span className="sol-check"><Check size={16} /></span>
                  {ft}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="sol-section sol-section--tint">
            <div className="sol-wrap">
              <motion.div className="sol-head" {...reveal}>
                <span className="sol-eyebrow">Keep exploring</span>
                <h2>Related solutions</h2>
              </motion.div>
              <div className="sol-related">
                {related.map((r, i) => (
                  <motion.div key={r.slug} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                    <Link href={`/solutions/${r.slug}`} className="sol-related__card">
                      <SolutionIcon name={r.icon} className="sol-related__icon" />
                      <h3>{r.title}</h3>
                      <p>{r.tagline}</p>
                      <span className="sol-related__go">Learn more <ArrowRight size={16} /></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTABanner
          title={`See ${s.title} in action`}
          description="Talk to our team and we will show you how it works in a space like yours."
          buttonText="Request a demo"
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
