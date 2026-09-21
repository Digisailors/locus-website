import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '99.9%', label: 'Accuracy' },
  { value: '40%', label: 'Cost Reduction' },
  { value: '50cm', label: 'Precision' },
  { value: '3M+', label: 'Devices Tracked' },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-12 bg-white border-y border-border-default">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 1, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-display-1 text-primary-navy font-display font-bold">
                {stat.value}
              </div>
              <div className="text-body text-charcoal-grey mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}