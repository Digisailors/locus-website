import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building, Settings, Store } from 'lucide-react'

const solutions = [
  {
    icon: Building,
    name: 'Smart Workspaces',
    description: 'Optimize hybrid work with desk booking, wayfinding, and space utilization analytics.',
    image: '/images/real_estate_hero.webp',
    features: [
      'Desk & Room Booking',
      'Indoor Navigation',
      'Occupancy Analytics',
      'Space Utilization',
      'Meeting Room Finder',
      'Energy Efficiency',
    ],
    color: 'bg-accent-cyan/20',
  },
  {
    icon: Settings,
    name: 'Smart Operations',
    description: 'Track assets, ensure safety, and optimize workflows in industrial environments.',
    image: '/images/manufacturing_hero.webp',
    features: [
      'Asset Tracking',
      'Safety Zones',
      'Workflow Optimization',
      'Inventory Management',
      'Equipment Utilization',
      'Emergency Response',
    ],
    color: 'bg-success/20',
  },
  {
    icon: Store,
    name: 'Smart Venues',
    description: 'Enhance visitor experience with navigation, analytics, and location-based engagement.',
    image: '/images/retail_hero.webp',
    features: [
      'Visitor Navigation',
      'Contextual Engagement',
      'Crowd Analytics',
      'Queue Management',
      'Location Marketing',
      'Heatmaps',
    ],
    color: 'bg-warning/20',
  },
]

export default function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="solutions" className="py-24 bg-surface-neutral">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-caption text-accent-cyan font-medium uppercase tracking-wider"
          >
            Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-h1 text-primary-navy mt-4 mb-6"
          >
            Smart Spaces Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-charcoal-grey max-w-2xl mx-auto"
          >
            Purpose-built solutions for specific use cases that drive measurable business outcomes.
          </motion.p>
        </div>

        <div ref={ref} className="space-y-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={solution.name}
                initial={{ opacity: 1, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`card overflow-hidden ${isEven ? '' : 'md:flex-row-reverse'}`}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className={`w-14 h-14 rounded-lg ${solution.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-7 h-7 text-primary-navy" />
                    </div>
                    <h3 className="text-h2 text-primary-navy mb-4">{solution.name}</h3>
                    <p className="text-body-lg text-charcoal-grey mb-6">{solution.description}</p>
                    <div className="space-y-3">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                          <span className="text-body text-charcoal-grey">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`${solution.color} min-h-[300px] relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 rounded-full bg-white/30 flex items-center justify-center">
                          <Icon className="w-16 h-16 text-primary-navy/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}