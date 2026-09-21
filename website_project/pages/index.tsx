import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import CTABanner from '../components/CTABanner'
import StatsSection from '../components/StatsSection'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Spatial Intelligence Platform | Transform Your Space into Smart Space</title>
        <meta name="description" content="Turn your buildings into smart spaces with AI-powered spatial intelligence. Indoor navigation, asset tracking, location analytics, and occupancy monitoring for enterprises." />
      </Head>

      <div className="bg-surface-neutral">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CTABanner 
          title="Ready to Transform Your Space?" 
          description="Join thousands of enterprises that have turned their buildings into smart spaces."
          buttonText="Request Demo"
          buttonHref="/contact"
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}