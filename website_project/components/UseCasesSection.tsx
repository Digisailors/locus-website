import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Car, Truck, Zap, Wrench, ShieldCheck, TrendingUp } from 'lucide-react'

const useCases = [
  {
    icon: Car,
    title: 'Assembly Line WIP Tracking',
    description: 'Track vehicle chassis, body dollies, and sub-assemblies continuously through every workstation.',
    benefit: '85% reduction in search time',
    stat: '85%',
  },
  {
    icon: Truck,
    title: 'Finished Vehicle Yard Logistics',
    description: 'Locate parked cars by VIN across outdoor holding lots using multi-kilometer LoRaWAN GPS trackers.',
    benefit: '90% faster driver vehicle retrieval',
    stat: '90%',
  },
  {
    icon: Zap,
    title: 'mmWave Lighting Automation',
    description: 'Automate high-bay factory LED fixtures dynamically based on micro-motion radar presence.',
    benefit: '45% lower lighting electricity use',
    stat: '45%',
  },
  {
    icon: Wrench,
    title: 'Smart Tooling & Torque Interlocks',
    description: 'Enable smart torque tools only when physically inside the designated bolt pattern zone.',
    benefit: 'Zero unverified torque operations',
    stat: '0 Err',
  },
  {
    icon: ShieldCheck,
    title: 'Cell Occupancy & Safety Zones',
    description: 'Enforce robotic cell exclusion zones and monitor worker station dwell time without cameras.',
    benefit: '100% camera-free privacy compliance',
    stat: '100%',
  },
  {
    icon: TrendingUp,
    title: 'Takt Time & Bottleneck Analytics',
    description: 'Identify station micro-stoppages and takt-time variances with automated spatial telemetry.',
    benefit: '15% plant throughput unlock',
    stat: '15%',
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