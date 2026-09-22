import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import '../styles/solutions.css'
import '../styles/home.css'
import '../styles/cisco-home.css'
import '../styles/discover.css'
import '../styles/solution-page.css'
import '../styles/resource-pages.css'
import '../styles/why.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  return (
    <>
      <Head>
        <title>Locus Spatial Systems | Automotive Asset Tracking & Production Line RTLS</title>
        <meta name="description" content="Industrial asset tracking and facility automation for automotive manufacturing. Sub-meter BLE AoA, centimeter UWB, LoRaWAN GPS yard tracking, and mmWave radar lighting & occupancy automation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </Head>
      
      <div className="announce">
          <b>NEW!</b>
          <span><strong>Automotive RTLS 4.0:</strong> Track production lines with BLE AoA &amp; UWB, manage finished yards with LoRaWAN GPS, and automate lighting with mmWave.</span>
          <a href="/contact">Book Plant Assessment <span aria-hidden="true">›</span></a>
      </div>
      <Navigation currentPath={router.pathname} />
      
      <main>
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </>
  )
}
