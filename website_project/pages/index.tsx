import Head from 'next/head'
import HomeCarousel from '../components/HomeCarousel'
import HomeSections from '../components/HomeSections'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Locus Spatial Systems | Automotive Asset Tracking & Production Line RTLS</title>
        <meta name="description" content="Industrial asset tracking and facility automation for automotive manufacturing. Sub-meter BLE AoA, centimeter UWB, LoRaWAN GPS yard tracking, and mmWave radar lighting & occupancy automation." />
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
