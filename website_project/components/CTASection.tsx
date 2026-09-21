import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail, Phone, Building2, Users } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-primary-navy">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,153,255,0.5) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 1, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-caption text-accent-cyan font-medium uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-h1 text-white mt-4 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-body-lg text-white/70 mb-8">
              Join thousands of enterprises that have turned their buildings into smart spaces. 
              Get a personalized demo and see how spatial intelligence can drive your business outcomes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-accent-cyan" />
                <div>
                  <div className="text-h3 text-white font-display font-bold">3,000+</div>
                  <div className="text-body-sm text-white/60">Installations</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent-cyan" />
                <div>
                  <div className="text-h3 text-white font-display font-bold">500+</div>
                  <div className="text-body-sm text-white/60">Applications</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contact@example.com" className="flex items-center gap-3 text-white/70 hover:text-accent-cyan transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-body">contact@example.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/70 hover:text-accent-cyan transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-body">+1 (234) 567-890</span>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 1, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg p-8 shadow-3">
              <h3 className="text-h2 text-primary-navy mb-6">
                Request a Demo
              </h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                    Work Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                    Company
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                    Industry
                  </label>
                  <select className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25">
                    <option>Select Industry</option>
                    <option>Manufacturing</option>
                    <option>Healthcare</option>
                    <option>Retail</option>
                    <option>Logistics</option>
                    <option>Education</option>
                    <option>Other</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full group">
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-body-sm text-charcoal-grey/70 mt-4 text-center">
                By submitting, you agree to our Privacy Policy. We'll never share your data.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}