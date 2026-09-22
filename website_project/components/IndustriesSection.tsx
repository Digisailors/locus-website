import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Car, Truck, Factory, Layers, Radio, Building2 } from 'lucide-react'

const industries = [
  {
    icon: Car,
    name: 'Passenger Cars & EV Manufacturing',
    description: 'High-speed line tracking, EV skateboard battery marriage, and unibody assembly with BLE AoA and UWB.',
    image: '/images/manufacturing_hero.webp',
    features: ['Battery Pack Marriage', 'Sequencing Verification', 'High-Speed Line Takt Times'],
  },
  {
    icon: Truck,
    name: 'Commercial Trucks & Heavy Vehicles',
    description: 'Heavy-duty frame rail, cab module, and multi-axle configuration tracking across assembly halls and test tracks.',
    image: '/images/transportation_hero.webp',
    features: ['Heavy Chassis RTLS', 'LoRaWAN Test Track GPS', 'Modular Cab Marriage'],
  },
  {
    icon: Factory,
    name: 'Tier-1 Powertrain & Component Plants',
    description: 'Engine blocks, transmissions, and returnable packaging racks tracked just-in-sequence (JIS) to OEM gates.',
    image: '/images/logistics_hero.webp',
    features: ['JIS Delivery Validation', 'Returnable Container Tracking', 'Sub-meter Parts Bin Mesh'],
  },
  {
    icon: Layers,
    name: 'Stamping & Body-in-White (BIW)',
    description: 'Multi-ton press stamping dies, unibody weld fixtures, and metal coils tracked with harsh-RF-immune locators.',
    image: '/images/construction_hero.webp',
    features: ['Heavy Stamping Die Tracking', 'Robotic Weld Cell Fixtures', 'Metal Multipath Mitigation'],
  },
  {
    icon: Radio,
    name: 'Paint Shop Operations',
    description: 'High-temperature oven-rated tags and mmWave radar lighting control for skids, E-coat tanks, and curing ovens.',
    image: '/images/oil_gas_hero.webp',
    features: ['250°C Oven-Rated Tags', 'Color Sequence Verification', 'Automated Booth Lighting'],
  },
  {
    icon: Building2,
    name: 'Finished Vehicle Yards & Export Docks',
    description: 'Long-range LoRaWAN GPS locating across multi-acre holding lots, railhead dispatch, and ocean Ro-Ro vessel loading.',
    image: '/images/automotive_services_hero.webp',
    features: ['Sub-2m Slot Locating', '15km LoRaWAN Range', 'Zero Monthly SIM Fees'],
  },
]

export default function IndustriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-caption text-accent-cyan font-medium uppercase tracking-wider"
          >
            Automotive Sectors
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-h1 text-primary-navy mt-4 mb-6"
          >
            Built for Automotive Manufacturing &amp; Logistics
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-charcoal-grey max-w-2xl mx-auto"
          >
            Purpose-built industrial RTLS and facility automation across every phase of vehicle production, assembly, and outdoor holding yard logistics.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 1, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="card h-full p-6 group hover:shadow-3 transition-all duration-300 border border-transparent hover:border-accent-cyan/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-cyan/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div>
                      <h3 className="text-h3 text-primary-navy mb-2">
                        {industry.name}
                      </h3>
                      <p className="text-body text-charcoal-grey mb-4">
                        {industry.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {industry.features.map((feature) => (
                          <span 
                            key={feature} 
                            className="text-xs px-2 py-1 bg-surface-neutral rounded-full text-charcoal-grey"
                          >
                            {feature}
                          </span>
                        ))}
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