import Head from 'next/head'
import TechnologySection from '../components/TechnologySection'

export default function TechnologyPage() {
  return (
    <>
      <Head>
        <title>Technology | Spatial Intelligence Platform</title>
        <meta name="description" content="Multi-technology positioning platform supporting Bluetooth AoA, UWB, Wi-Fi RTT, BLE, Ultrasonic, and Wireless Mesh for any use case." />
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
              Technology
            </span>
            <h1 className="text-display-1 text-white mt-4 mb-6">
              Multi-Technology Platform
            </h1>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              Choose the right technology for your use case. Our platform supports multiple positioning technologies to deliver the perfect balance of accuracy and cost.
            </p>
          </div>
        </section>

        <TechnologySection />
        
        {/* API Section */}
        <section className="py-24 bg-surface-neutral">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <span className="text-caption text-accent-cyan font-medium uppercase tracking-wider">
                Integration
              </span>
              <h2 className="text-h1 text-primary-navy mt-4 mb-6">
                Developer-Friendly APIs
              </h2>
              <p className="text-body-lg text-charcoal-grey max-w-2xl mx-auto">
                Build custom applications with our comprehensive API suite. REST, GraphQL, and WebSocket support for real-time data.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'REST API',
                  description: 'Standard HTTP endpoints for all platform features'
                },
                {
                  title: 'GraphQL',
                  description: 'Flexible queries for efficient data fetching'
                },
                {
                  title: 'WebSockets',
                  description: 'Real-time updates for live positioning'
                },
                {
                  title: 'Webhooks',
                  description: 'Event-driven integrations with your systems'
                }
              ].map((api, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-h3 text-primary-navy mb-2">{api.title}</h3>
                  <p className="text-body text-charcoal-grey">{api.description}</p>
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