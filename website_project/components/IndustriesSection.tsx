import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Briefcase, Building2, Factory, Plane, ShoppingCart, 
  GraduationCap, HeartPulse,Car, Clapperboard, Landmark,
  Building,Construction, Radio, Truck
} from 'lucide-react'

const industries = [
  {
    icon: Briefcase,
    name: 'Oil & Gas',
    description: 'Asset tracking and personnel safety in hazardous environments',
    image: '/images/oil_gas_hero.webp',
    features: ['HSE Compliance', 'Asset Utilization', 'Emergency Response'],
  },
  {
    icon: Landmark,
    name: 'Museums',
    description: 'Visitor navigation and exhibit engagement analytics',
    image: '/images/museums_hero.webp',
    features: ['Visitor Flow', 'Interactive Guides', 'Asset Protection'],
  },
  {
    icon: ShoppingCart,
    name: 'Shopping Mall',
    description: 'Wayfinding and location-based marketing',
    image: '/images/shopping_mall_hero.webp',
    features: ['Indoor Navigation', 'Retail Analytics', 'Smart Parking'],
  },
  {
    icon: GraduationCap,
    name: 'Universities',
    description: 'Campus navigation and student analytics',
    image: '/images/universities_hero.webp',
    features: ['Campus Maps', 'Resource Booking', 'Safety Monitoring'],
  },
  {
    icon: Car,
    name: 'Automotive Services',
    description: 'Service center workflow optimization',
    image: '/images/automotive_services_hero.webp',
    features: ['Vehicle Tracking', 'Service Bay Management', 'Customer UX'],
  },
  {
    icon: Clapperboard,
    name: 'Sport & Entertainment',
    description: 'Crowd management and venue navigation',
    image: '/images/sport_hero.webp',
    features: ['Seat Finding', 'Concession Services', 'Crowd Analytics'],
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Production line and asset tracking',
    image: '/images/manufacturing_hero.webp',
    features: ['Inventory Tracking', 'Safety Zones', 'Efficiency Analytics'],
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description: 'Patient navigation and equipment tracking',
    image: '/images/healthcare_hero.webp',
    features: ['Patient Wayfinding', 'Asset Management', 'Staff Coordination'],
  },
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Space utilization and workplace optimization',
    image: '/images/real_estate_hero.webp',
    features: ['Occupancy Analytics', 'Smart Desking', 'Visitor Management'],
  },
  {
    icon: Construction,
    name: 'Construction',
    description: 'Equipment and worker safety monitoring',
    image: '/images/construction_hero.webp',
    features: ['Equipment Tracking', 'Worker Safety', 'Site Security'],
  },
  {
    icon: Plane,
    name: 'Transportation',
    description: 'Airport and terminal navigation',
    image: '/images/transportation_hero.webp',
    features: ['Gate Navigation', 'Baggage Tracking', 'Passenger Flow'],
  },
  {
    icon: Radio,
    name: 'Retail',
    description: 'In-store navigation and customer analytics',
    image: '/images/retail_hero.webp',
    features: ['Product Location', 'Shopping Analytics', 'Promotions'],
  },
  {
    icon: Truck,
    name: 'Logistics',
    description: 'Warehouse and inventory management',
    image: '/images/logistics_hero.webp',
    features: ['Inventory Tracking', 'Forklift Monitoring', 'Picking Routes'],
  },
  {
    icon: Building,
    name: 'Offices',
    description: 'Workspace management and meeting rooms',
    image: '/images/automotive_nav_hero.webp',
    features: ['Desk Booking', 'Room Finder', 'Visitor Management'],
  },
  {
    icon: Clapperboard,
    name: 'Culture & Entertainment',
    description: 'Theater and venue experiences',
    image: '/images/culture_hero.webp',
    features: ['Seat Navigation', 'Queue Management', 'Guest Services'],
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
            Industries
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-h1 text-primary-navy mt-4 mb-6"
          >
            Solutions for Every Industry
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-charcoal-grey max-w-2xl mx-auto"
          >
            Transform your industry with spatial intelligence. From manufacturing to healthcare,
            our platform adapts to your unique requirements.
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