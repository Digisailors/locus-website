import Head from 'next/head'
import HomeCarousel from '../components/HomeCarousel'
import HomeSections from '../components/HomeSections'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Spatial Intelligence Platform | Transform Your Space into Smart Space</title>
        <meta name="description" content="Turn your buildings into smart spaces with AI-powered spatial intelligence. Indoor navigation, asset tracking, location analytics, and occupancy monitoring for enterprises." />
      </Head>

      <div className="bg-surface-neutral">
        <HomeCarousel />
        <HomeSections />
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}
