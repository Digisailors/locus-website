import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import type { InfoPageData } from '../data/info'
import SolutionIcon from './SolutionIcon'
import CTABanner from './CTABanner'

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

interface Props {
  page: InfoPageData
  siblings: InfoPageData[]
  sectionLabel: string
  sectionHref: string
}

export default function InfoPage({ page, siblings, sectionLabel }: Props) {
  const others = siblings.filter((s) => s.slug !== page.slug).slice(0, 4)
  const base = page.group === 'discover' ? '/discover' : '/resources'

  return (
    <>
      <Head>
        <title>{`${page.title} | Locus`}</title>
        <meta name="description" content={page.description} />
      </Head>

      <div className="bg-surface-neutral">
        <section className="sol-hero sol-hero--info">
          <div className="sol-hero__grid-bg" aria-hidden="true" />
          <div className="sol-hero__inner">
            <div className="sol-hero__copy">
              <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="sol-crumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><span>{sectionLabel}</span>
              </motion.nav>
              <motion.span className="sol-hero__eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                {page.isNew ? 'New' : sectionLabel}
              </motion.span>
              <motion.h1 className="sol-hero__title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.6 }}>
                {page.title}
              </motion.h1>
              <motion.p className="sol-hero__tagline" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                {page.summary}
              </motion.p>
              <motion.p className="sol-hero__desc" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.6 }}>
                {page.description}
              </motion.p>
              <motion.div className="sol-hero__actions" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.6 }}>
                <Link href="/contact" className="btn btn-primary group inline-flex items-center gap-2">
                  {page.cta ?? 'Get started'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/solutions/smart-workspaces" className="btn sol-btn-ghost">Browse solutions</Link>
              </motion.div>
            </div>

            <motion.div className="sol-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
              <div className="sol-visual__radar" aria-hidden="true"><span /><span /><span /></div>
              <div className="sol-visual__badge"><SolutionIcon name={page.icon} className="sol-visual__badge-icon" /></div>
            </motion.div>
          </div>
        </section>

        <section className="sol-section">
          <div className="sol-wrap">
            <motion.div className="sol-head" {...reveal}>
              <span className="sol-eyebrow">Highlights</span>
              <h2>What you get</h2>
            </motion.div>
            <div className="sol-benefits">
              {page.highlights.map((b, i) => (
                <motion.article key={b.title} className="sol-benefit" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                  <span className="sol-benefit__num">0{i + 1}</span>
                  <h3>{b.title}</h3>
                  <p>{b.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="sol-section sol-section--tint">
          <div className="sol-wrap sol-features">
            <motion.div {...reveal}>
              <span className="sol-eyebrow">Included</span>
              <h2 className="sol-features__title">Built for teams who need results</h2>
              <p className="sol-features__lead">{page.summary}.</p>
            </motion.div>
            <ul className="sol-features__list">
              {page.bullets.map((ft, i) => (
                <motion.li key={ft} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                  <span className="sol-check"><Check size={16} /></span>{ft}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {others.length > 0 && (
          <section className="sol-section">
            <div className="sol-wrap">
              <motion.div className="sol-head" {...reveal}>
                <span className="sol-eyebrow">Keep exploring</span>
                <h2>More from {sectionLabel}</h2>
              </motion.div>
              <div className="sol-related">
                {others.map((r, i) => (
                  <motion.div key={r.slug} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                    <Link href={`${base}/${r.slug}`} className="sol-related__card">
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
        )}

        <CTABanner
          title="Ready to see Locus in action?"
          description="Talk to our team and we will tailor a walkthrough to your spaces."
          buttonText="Request a demo"
          buttonHref="/contact"
        />
      </div>
    </>
  )
}
