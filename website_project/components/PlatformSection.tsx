import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Map, Navigation, BarChart2, Layers, Zap, Cloud, Lock, Globe } from 'lucide-react'

const platformFeatures = [
  {
    icon: Map,
    title: '3D Rich Maps',
    description: 'Interactive 3D floor plans with multi-level navigation, zones, and points of interest.',
  },
  {
    icon: Navigation,
    title: 'Indoor Navigation',
    description: 'Turn-by-turn directions with AR overlay for seamless visitor experience.',
  },
  {
    icon: BarChart2,
    title: 'Location Analytics',
    description: 'Real-time occupancy data, heatmaps, and behavioral insights.',
  },
  {
    icon: Layers,
    title: 'Asset Tracking',
    description: 'Real-time equipment and personnel tracking with 30cm accuracy.',
  },
  {
    icon: Zap,
    title: 'Geofencing',
    description: 'Virtual boundaries with automated alerts and safety compliance.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Scalable API platform with 99.99% uptime and enterprise security.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant with end-to-end encryption.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Support for thousands of locations with unified management.',
  },
]

export default function PlatformSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="platform" className="py-24 bg-surface-neutral relative overflow-hidden">
      <div className="absolute inset-0 spatial-grid bg-grid opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-caption text-accent-cyan font-medium uppercase tracking-wider"
          >
            The Platform
          </motion.span>
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-h1 text-primary-navy mt-4 mb-6"
          >
            Everything You Need in One Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-charcoal-grey max-w-2xl mx-auto"
          >
            A complete spatial intelligence stack that turns your infrastructure into sensors.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 1, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card h-full p-6 group hover:shadow-3 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center mb-4 group-hover:bg-accent-cyan/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h3 className="text-h3 text-primary-navy mb-2">{feature.title}</h3>
                  <p className="text-body text-charcoal-grey">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}