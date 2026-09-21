import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Compass, Activity, Zap, Shield, BarChart3, Router, Wifi } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'High-Precision Positioning',
    description: 'Sub-meter accuracy (30cm - 50cm) using Bluetooth AoA, UWB, and WiFi RTT technologies.',
    color: 'accent-cyan',
  },
  {
    icon: Compass,
    title: 'Indoor Navigation',
    description: 'Turn-by-turn navigation with AR overlay, multi-floor routing, and accessibility support.',
    color: 'success',
  },
  {
    icon: Activity,
    title: 'Real-Time Asset Tracking',
    description: 'Live location of equipment, vehicles, and personnel with 24/7 monitoring and alerts.',
    color: 'info',
  },
  {
    icon: Shield,
    title: 'Geofencing & Safety',
    description: 'Create virtual boundaries, safety zones, and automated emergency responses.',
    color: 'warning',
  },
  {
    icon: BarChart3,
    title: 'Location Analytics',
    description: 'Heatmaps, dwell time analysis, traffic patterns, and occupancy insights.',
    color: 'accent-cyan',
  },
  {
    icon: Router,
    title: 'Network as Sensor',
    description: 'Transform existing WiFi/BLE infrastructure into a location-sensing network.',
    color: 'success',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="platform" className="py-24 bg-surface-neutral relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 spatial-grid bg-grid" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-caption text-accent-cyan font-medium uppercase tracking-wider">
              Platform Features
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h1 text-primary-navy mt-4 mb-6"
          >
            One Platform. Endless Possibilities.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-charcoal-grey max-w-2xl mx-auto"
          >
            A comprehensive spatial intelligence platform that turns your physical spaces
            into smart, data-driven environments with real-time insights.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClass = 
              feature.color === 'accent-cyan' ? 'bg-accent-cyan/10 text-accent-cyan' :
              feature.color === 'success' ? 'bg-success/10 text-success' :
              feature.color === 'info' ? 'bg-info/10 text-info' :
              'bg-warning/10 text-warning'
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 1, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card h-full p-6 group hover:shadow-3 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-lg ${colorClass} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-h3 text-primary-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body text-charcoal-grey">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Platform Architecture */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 card p-8 bg-gradient-to-br from-primary-navy/5 to-accent-cyan/5"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-h2 text-primary-navy mb-4">
                Full Stack Spatial Intelligence
              </h3>
              <p className="text-body text-charcoal-grey mb-6">
                From hardware sensors to cloud analytics, our platform provides a complete 
                solution with open APIs, SDKs, and integrations for your existing systems.
              </p>
              <div className="space-y-3">
                {[
                  'Edge Computing & Processing',
                  'Real-time Cloud Engine',
                  'Native & Web SDKs',
                  '3D Map Rendering Engine',
                  'REST & GraphQL APIs',
                  'Webhooks & Integrations',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                    <span className="text-body text-charcoal-grey">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-navy to-accent-cyan rounded-lg p-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-display-1 font-display font-bold">3D</div>
                  <div className="text-body-lg opacity-80">Map Visualization</div>
                </div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 card card-elevated p-4">
                <div className="text-h3 text-primary-navy font-display font-bold">99.9%</div>
                <div className="text-body-sm text-charcoal-grey">Uptime</div>
              </div>
              <div className="absolute -top-4 -right-4 card card-elevated p-4">
                <div className="text-h3 text-success font-display font-bold">&lt;50cm</div>
                <div className="text-body-sm text-charcoal-grey">Accuracy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}