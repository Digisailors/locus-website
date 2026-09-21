import Head from 'next/head'
import PlatformSection from '../components/PlatformSection'
import FeaturesSection from '../components/FeaturesSection'
import CTABanner from '../components/CTABanner'

export default function PlatformPage() {
  return (
    <>
      <Head>
        <title>Platform | Spatial Intelligence Platform</title>
        <meta name="description" content="A complete spatial intelligence platform that turns your infrastructure into sensors. Real-time positioning, 3D mapping, and location analytics powered by AI." />
      </Head>

      <div className="bg-surface-neutral">
        {/* Platform Overview */}
        <section className="py-24 bg-primary-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,153,255,0.5) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
            <span className="text-caption text-accent-cyan font-medium uppercase tracking-wider">
              The Platform
            </span>
            <h1 className="text-display-1 text-white mt-4 mb-6">
              Everything You Need in One Platform
            </h1>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              A comprehensive spatial intelligence stack that turns your infrastructure into a smart sensor network.
            </p>
          </div>
        </section>

        <PlatformSection />
        <FeaturesSection />
        
        <CTABanner 
          title="See the Platform in Action" 
          description="Watch how our platform transforms buildings into smart spaces with real-time insights."
          buttonText="Schedule Demo"
          buttonHref="/contact"
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}