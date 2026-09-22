import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bluetooth, Radio, Navigation, Radar, Signal, Grid3x3, Layers } from 'lucide-react'

const technologies = [
  {
    icon: Bluetooth,
    name: 'Bluetooth AoA (Angle of Arrival)',
    description: 'Multi-antenna gateway arrays deliver 30–50 cm positioning for vehicle bodies, carrier dollies, and AGVs on the factory floor.',
    accuracy: '30-50cm',
    range: 'Up to 80m',
    color: 'bg-blue-500',
  },
  {
    icon: Radio,
    name: 'UWB (Ultra-Wideband)',
    description: 'Centimeter-level precision for mission-critical chassis marriage lines, robotic cells, and smart torque tool interlocks.',
    accuracy: '10-30cm',
    range: 'Up to 150m',
    color: 'bg-purple-500',
  },
  {
    icon: Navigation,
    name: 'LoRaWAN GPS Trackers',
    description: 'Long-range outdoor vehicle tracking across multi-acre holding yards, testing tracks, and railheads without cellular SIM fees.',
    accuracy: '<2m',
    range: 'Up to 15km',
    color: 'bg-sky-500',
  },
  {
    icon: Radar,
    name: 'mmWave Radar Sensors (60/77 GHz)',
    description: 'Micro-motion radar detects human breathing and movement for automated high-bay lighting and camera-free cell occupancy.',
    accuracy: '<50ms latency',
    range: 'Up to 25m',
    color: 'bg-cyan-500',
  },
  {
    icon: Signal,
    name: 'Industrial BLE Positioning',
    description: 'Ultra-low-power Bluetooth tags for tooling carts, parts bins, and returnable packaging with 5+ year battery life.',
    accuracy: '1-3m',
    range: 'Up to 100m',
    color: 'bg-blue-400',
  },
  {
    icon: Grid3x3,
    name: 'Ruggedized Industrial Mesh',
    description: 'IP67/IP69K enclosures and high-temperature tags built to endure stamping presses, weld sparks, and paint shop ovens.',
    accuracy: 'Harsh RF Immune',
    range: 'Plant-wide',
    color: 'bg-orange-500',
  },
]

const architectureLayers = [
  {
    level: 'Layer 1',
    title: 'Sensors & Infrastructure',
    items: ['BLE AoA Gateways', 'UWB Anchors & Tags', 'LoRaWAN GPS Devices', 'mmWave Radar Sensors'],
  },
  {
    level: 'Layer 2', 
    title: 'Industrial Edge',
    items: ['Signal Filtering', 'AoA & TDoA Positioning', 'Micro-motion Processing', 'PLC & Tool Bus Controllers'],
  },
  {
    level: 'Layer 3',
    title: 'Spatial Cloud & Twin',
    items: ['Real-Time Position Engine', '3D Plant Digital Twin', 'Takt Time Analytics', 'Lighting Automation Rules'],
  },
  {
    level: 'Layer 4',
    title: 'Automotive Applications',
    items: ['Assembly Line RTLS', 'Finished Yard Dispatch', 'Torque Tool Interlocks', 'Siemens & SAP MES Connectors'],
  },
]

export default function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="technology" className="py-24 bg-primary-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,153,255,0.5) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-caption text-accent-cyan font-medium uppercase tracking-wider"
          >
            Technology
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-h1 text-white mt-4 mb-6"
          >
            Multi-Technology Platform
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-white/70 max-w-2xl mx-auto"
          >
            Choose the right technology for your use case. Our platform supports multiple 
            positioning technologies to deliver the perfect balance of accuracy and cost.
          </motion.p>
        </div>

        {/* Technologies Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 1, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full hover:bg-white/10 transition-all hover:border-accent-cyan/30">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${tech.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-h3 text-white mb-2">{tech.name}</h3>
                      <p className="text-body text-white/60 mb-3">{tech.description}</p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-accent-cyan font-mono">{tech.accuracy}</span>
                        <span className="text-white/40">|</span>
                        <span className="text-white/70 font-mono">{tech.range}</span>
                      </div>
                    </div>
                  </div>
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
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
        >
          <h3 className="text-h2 text-white text-center mb-8">
            Platform Architecture
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            {architectureLayers.map((layer, index) => (
              <div key={layer.level} className="relative">
                <div className="bg-gradient-to-b from-accent-cyan/20 to-primary-navy/40 rounded-lg p-6 border border-accent-cyan/20">
                  <div className="text-caption text-accent-cyan mb-2">{layer.level}</div>
                  <h4 className="text-h3 text-white mb-4">{layer.title}</h4>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-body-sm text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specs */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '10ms', label: 'Update Rate' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '<50ms', label: 'Latency' },
            { value: '10M+', label: 'Positions/Day' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-h2 text-accent-cyan font-display font-bold">{stat.value}</div>
              <div className="text-body text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}