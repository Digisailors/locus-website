import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Box, Target, Shield, Wifi, TrendingUp } from 'lucide-react'

const useCases = [
  {
    icon: Users,
    title: 'Occupancy Monitoring',
    description: 'Real-time space utilization and people counting for better space planning.',
    benefit: '40% better space utilization',
    stat: '2-3x',
  },
  {
    icon: Box,
    title: 'Asset Tracking',
    description: 'Locate equipment, tools, and inventory instantly with sub-meter accuracy.',
    benefit: '80% reduction in search time',
    stat: '80%',
  },
  {
    icon: Target,
    title: 'Contextual Engagement',
    description: 'Deliver location-based content and offers to visitors in real-time.',
    benefit: '60% higher engagement',
    stat: '60%',
  },
  {
    icon: Shield,
    title: 'Safety & Security',
    description: 'Geofence monitoring, emergency response, and safety compliance.',
    benefit: '95% faster emergency response',
    stat: '95%',
  },
  {
    icon: Wifi,
    title: 'Indoor Navigation',
    description: 'Turn-by-turn directions and AR overlay for enhanced visitor experience.',
    benefit: '70% fewer missed appointments',
    stat: '70%',
  },
  {
    icon: TrendingUp,
    title: 'Location Analytics',
    description: 'Understand visitor behavior, dwell time, and traffic patterns.',
    benefit: '3x ROI in 12 months',
    stat: '3x',
  },
]

export default function UseCasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="use-cases" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-caption text-accent-cyan font-medium uppercase tracking-wider"
          >
            Use Cases
          </motion.span>
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-h1 text-primary-navy mt-4 mb-6"
          >
            Business Outcomes
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-charcoal-grey max-w-2xl mx-auto"
          >
            Drive measurable results with location-powered insights and automation.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 1, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card h-full p-6 group hover:shadow-3 transition-all border border-transparent hover:border-accent-cyan/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div className="text-h2 text-success font-display font-bold">
                      {useCase.stat}
                    </div>
                  </div>
                  <h3 className="text-h3 text-primary-navy mb-2">{useCase.title}</h3>
                  <p className="text-body text-charcoal-grey mb-4">{useCase.description}</p>
                  <div className="flex items-center gap-2 text-body-sm text-success">
                    <div className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span>{useCase.benefit}</span>
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