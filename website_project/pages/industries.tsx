import Head from 'next/head'
import IndustriesSection from '../components/IndustriesSection'

export default function IndustriesPage() {
  return (
    <>
      <Head>
        <title>Industries | Spatial Intelligence Platform</title>
        <meta name="description" content="Spatial intelligence solutions for Manufacturing, Healthcare, Retail, Logistics, Education, and 10+ other industries." />
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
              Industries
            </span>
            <h1 className="text-display-1 text-white mt-4 mb-6">
              Solutions for Every Industry
            </h1>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              Transform your industry with spatial intelligence. Our platform adapts to your unique requirements across 15+ sectors.
            </p>
          </div>
        </section>

        <IndustriesSection />
        
        {/* Case Studies */}
        <section className="py-24 bg-surface-neutral">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-h1 text-primary-navy mb-6">
                Success Stories
              </h2>
              <p className="text-body-lg text-charcoal-grey max-w-2xl mx-auto">
                See how leading enterprises across industries have transformed their operations with spatial intelligence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  industry: 'Manufacturing',
                  company: 'Global Auto Manufacturer',
                  result: '40% improvement in asset utilization',
                  image: '/images/manufacturing_hero.webp'
                },
                {
                  industry: 'Healthcare',
                  company: 'Regional Hospital Network',
                  result: '80% reduction in equipment search time',
                  image: '/images/healthcare_hero.webp'
                },
                {
                  industry: 'Retail',
                  company: 'National Retail Chain',
                  result: '25% increase in customer engagement',
                  image: '/images/retail_hero.webp'
                }
              ].map((study, index) => (
                <div key={index} className="card overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary-navy to-accent-cyan flex items-center justify-center">
                    <span className="text-white/50 text-6xl font-display font-bold">
                      {study.industry[0]}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-caption text-accent-cyan uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <h3 className="text-h3 text-primary-navy mt-2 mb-3">
                      {study.company}
                    </h3>
                    <p className="text-body text-charcoal-grey">
                      {study.result}
                    </p>
                  </div>
                </div>
              ))}
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