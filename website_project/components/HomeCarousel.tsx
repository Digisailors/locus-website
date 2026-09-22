import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SolutionIcon from './SolutionIcon'

const slides = [
  {
    eyebrow: 'Manufacturing Asset Tracking',
    title: 'Production Line Asset Tracking',
    subtitle: 'Sub-Meter BLE Gateways & Centimeter UWB',
    body: 'Track vehicle chassis, body dollies, and components across stamping, body-in-white, and assembly lines with 30cm BLE AoA and centimeter UWB precision.',
    cta: 'Explore Production Line Tracking',
    href: '/solutions/production-line-tracking',
    icons: ['Car', 'Radio', 'Crosshair'],
  },
  {
    eyebrow: 'Outdoor Vehicle Asset Tracking',
    title: 'Finished Vehicle Yard Tracking',
    subtitle: 'Long-Range LoRaWAN GPS Across 100+ Acre Lots',
    body: 'Locate any manufactured vehicle by VIN barcode instantly in outdoor holding yards, track test laps, and coordinate carrier staging with zero cellular SIM fees.',
    cta: 'Explore Yard Tracking',
    href: '/solutions/yard-management',
    icons: ['Truck', 'Navigation', 'MapPin'],
  },
  {
    eyebrow: 'Smart Factory Automation',
    title: 'mmWave Lighting & Occupancy',
    subtitle: 'Micro-Motion Radar for High-Bay Energy & Cell Safety',
    body: 'Automate high-bay plant lighting based on real-time presence to cut factory energy by 45%, and monitor robotic cells with total worker privacy.',
    cta: 'Explore mmWave Automation',
    href: '/solutions/facility-automation',
    icons: ['Zap', 'Radar', 'ShieldCheck'],
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
              <h2>{s.title}</h2>
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
