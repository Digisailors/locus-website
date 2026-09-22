import Head from 'next/head'
import UseCasesSection from '../components/UseCasesSection'
import IndustriesSection from '../components/IndustriesSection'

export default function UseCasesPage() {
  return (
    <>
      <Head>
        <title>Automotive RTLS Use Cases &amp; ROI | Locus Spatial Systems</title>
        <meta name="description" content="Automotive manufacturing use cases: Assembly line WIP tracking, finished vehicle yard logistics, mmWave lighting automation, smart torque tool interlocks, and takt time bottleneck analytics." />
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
              Industrial Use Cases
            </span>
            <h1 className="text-display-1 text-white mt-4 mb-6">
              Automotive Production Outcomes
            </h1>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              Eliminate assembly line bottlenecks, speed up finished vehicle yard dispatch, and cut plant lighting electricity by 45% with industrial RTLS and mmWave radar.
            </p>
          </div>
        </section>

        <UseCasesSection />
        
        {/* ROI Calculator */}
        <section className="py-24 bg-surface-neutral">
          <div className="max-w-7xl mx-auto px-8">
            <div className="card p-8 bg-gradient-to-br from-primary-navy/5 to-accent-cyan/5">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-h1 text-primary-navy mb-6">
                    Calculate Your ROI
                  </h2>
                  <p className="text-body-lg text-charcoal-grey mb-8">
                    See how spatial intelligence can improve your operations and deliver measurable returns.
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: 'Asset search time', saving: '-80%' },
                      { label: 'Space utilization', saving: '+40%' },
                      { label: 'Emergency response', saving: '-35%' },
                      { label: 'Equipment utilization', saving: '+25%' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-1">
                        <span className="text-body font-medium text-charcoal-grey">{item.label}</span>
                        <span className="text-h3 text-success font-display font-bold">{item.saving}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-primary-navy rounded-lg p-8 text-white">
                  <h3 className="text-h2 mb-4">Typical ROI Results</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-body">Year 1</span>
                        <span className="text-accent-cyan font-bold">250% ROI</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-accent-cyan rounded-full transition-all" style={{ width: '25%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-body">Year 2</span>
                        <span className="text-accent-cyan font-bold">400% ROI</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-accent-cyan rounded-full transition-all" style={{ width: '40%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-body">Year 3</span>
                        <span className="text-accent-cyan font-bold">600% ROI</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-accent-cyan rounded-full transition-all" style={{ width: '60%' }} />
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary w-full mt-8">
                    Get Detailed ROI Report
                  </button>
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