import Head from 'next/head'
import SolutionsSection from '../components/SolutionsSection'
import CTABanner from '../components/CTABanner'

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Solutions | Spatial Intelligence Platform</title>
        <meta name="description" content="Purpose-built solutions for Smart Workspaces, Smart Operations, and Smart Venues that drive measurable business outcomes." />
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
              Solutions
            </span>
            <h1 className="text-display-1 text-white mt-4 mb-6">
              Smart Spaces Solutions
            </h1>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              Purpose-built solutions for specific use cases that drive measurable business outcomes across industries.
            </p>
          </div>
        </section>

        <SolutionsSection />
        
        <CTABanner 
          title="Find Your Solution" 
          description="Not sure which solution fits your needs? Our team can help you identify the right approach."
          buttonText="Talk to an Expert"
          buttonHref="/contact"
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}