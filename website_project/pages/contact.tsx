import Head from 'next/head'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Spatial Intelligence Platform</title>
        <meta name="description" content="Get in touch with our team for demos, pricing, and custom solutions. Request a personalized demo today." />
      </Head>

      <div className="bg-surface-neutral">
        {/* Header */}
        <section className="py-24 bg-primary-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,153,255,0.5) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
            <span className="text-caption text-accent-cyan font-medium uppercase tracking-wider">
              Get Started
            </span>
            <h1 className="text-display-1 text-white mt-4 mb-6">
              Ready to Transform Your Space?
            </h1>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              Join thousands of enterprises that have turned their buildings into smart spaces. Get a personalized demo and see how spatial intelligence can drive your business outcomes.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card p-8 shadow-3">
                <h2 className="text-h2 text-primary-navy mb-2">
                  Request a Demo
                </h2>
                <p className="text-body text-charcoal-grey mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                      Company *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25"
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                      Industry
                    </label>
                    <select className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25 bg-white">
                      <option value="">Select Industry</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="retail">Retail</option>
                      <option value="logistics">Logistics & Warehouse</option>
                      <option value="education">Education</option>
                      <option value="oil-gas">Oil & Gas</option>
                      <option value="transportation">Transportation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-caption text-charcoal-grey uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-border-default rounded-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/25 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    Request Demo
                  </button>

                  <p className="text-body-sm text-charcoal-grey/70 text-center mt-4">
                    By submitting, you agree to our Privacy Policy. We'll never share your data.
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="card p-6 text-center">
                    <div className="text-display-1 text-accent-cyan font-display font-bold">3,000+</div>
                    <div className="text-body text-charcoal-grey">Installations</div>
                  </div>
                  <div className="card p-6 text-center">
                    <div className="text-display-1 text-accent-cyan font-display font-bold">500+</div>
                    <div className="text-body text-charcoal-grey">Applications</div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="card p-8">
                  <h3 className="text-h2 text-primary-navy mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent-cyan" />
                      </div>
                      <div>
                        <div className="text-caption text-charcoal-grey uppercase tracking-wider">Email</div>
                        <a href="mailto:contact@example.com" className="text-body text-primary-navy hover:text-accent-cyan transition-colors">
                          contact@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent-cyan" />
                      </div>
                      <div>
                        <div className="text-caption text-charcoal-grey uppercase tracking-wider">Phone</div>
                        <a href="tel:+1234567890" className="text-body text-primary-navy hover:text-accent-cyan transition-colors">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent-cyan" />
                      </div>
                      <div>
                        <div className="text-caption text-charcoal-grey uppercase tracking-wider">Business Hours</div>
                        <p className="text-body text-primary-navy">
                          Mon - Fri: 9:00 AM - 6:00 PM EST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support */}
                <div className="card p-8 bg-gradient-to-br from-primary-navy to-accent-cyan text-white">
                  <h3 className="text-h2 text-white mb-4">
                    Need Quick Support?
                  </h3>
                  <p className="text-body text-white/80 mb-6">
                    Our support team is available 24/7 for existing customers.
                  </p>
                  <a href="#" className="btn btn-secondary border-white text-white hover:bg-white hover:text-primary-navy">
                    Visit Support Center
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}