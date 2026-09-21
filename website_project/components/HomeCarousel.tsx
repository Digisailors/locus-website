import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SolutionIcon from './SolutionIcon'

const slides = [
  {
    eyebrow: 'Introducing',
    title: 'Locus Studio',
    subtitle: 'Design your network for Smart Spaces',
    body: 'Pick use cases and get recommendations on network hardware, software, density and placement.',
    cta: 'Explore the Locus Studio',
    href: '/resources/locus-studio',
    icons: ['Radar', 'MapPin', 'Building2'],
  },
  {
    eyebrow: 'Smart Workspaces',
    title: 'Every square metre, earning its keep',
    subtitle: 'Hybrid work & sustainability',
    body: 'Measure real desk, room and floor usage, then reshape your portfolio and energy use around it.',
    cta: 'See Smart Workspaces',
    href: '/solutions/smart-workspaces',
    icons: ['LayoutGrid', 'Armchair', 'Leaf'],
  },
  {
    eyebrow: 'Smart Healthcare',
    title: 'Find what matters, faster',
    subtitle: 'Operational efficiency & safety',
    body: 'Locate equipment, protect patients and streamline flow across every ward and clinic.',
    cta: 'See Smart Healthcare',
    href: '/solutions/smart-healthcare',
    icons: ['Package', 'HeartPulse', 'Navigation'],
  },
]

export default function HomeCarousel() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)

  const go = useCallback((next: number) => {
    setDir(next > index ? 1 : -1)
    setIndex((next + slides.length) % slides.length)
  }, [index])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => { setDir(1); setIndex((i) => (i + 1) % slides.length) }, 6500)
    return () => clearTimeout(t)
  }, [index, paused])

  const s = slides[index]

  return (
    <section className="hc" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel">
      <button className="hc__arrow hc__arrow--l" onClick={() => go(index - 1)} aria-label="Previous slide"><ChevronLeft size={28} /></button>
      <button className="hc__arrow hc__arrow--r" onClick={() => go(index + 1)} aria-label="Next slide"><ChevronRight size={28} /></button>

      <div className="hc__card">
        <div className="hc__bg" aria-hidden="true" />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            className="hc__slide"
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hc__copy">
              <span className="hc__pill">{s.eyebrow}</span>
              <h1>{s.title}</h1>
              <p className="hc__sub">{s.subtitle}</p>
              <p className="hc__body">{s.body}</p>
              <Link href={s.href} className="hc__cta">{s.cta}</Link>
            </div>
            <div className="hc__art" aria-hidden="true">
              <span className="cube cube--a"><SolutionIcon name={s.icons[0]} /></span>
              <span className="cube cube--b"><SolutionIcon name={s.icons[1]} /></span>
              <span className="cube cube--c"><SolutionIcon name={s.icons[2]} /></span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hc__dots" role="tablist">
        {slides.map((_, i) => (
          <button key={i} role="tab" aria-selected={i === index} aria-label={`Slide ${i + 1}`} className={i === index ? 'is-on' : ''} onClick={() => go(i)} />
        ))}
      </div>
    </section>
  )
}
