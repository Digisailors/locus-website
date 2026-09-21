import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import '../styles/solutions.css'
import '../styles/home.css'
import '../styles/cisco-home.css'
import '../styles/discover.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  return (
    <>
      <Head>
        <title>Locus Edge | Industrial IoT & Vision Systems</title>
        <meta name="description" content="Industrial IoT, LiDAR mesh, RTSP vision pipelines, and defect classification systems for manufacturing automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </Head>
      
      {router.pathname === '/' && (
        <div className="announce">
          <b>NEW!</b>
          <span><strong>Already running Locus?</strong> You may have spatial licences included and sitting idle. Let&apos;s find them now!</span>
          <a href="/contact">Find my licence <span aria-hidden="true">›</span></a>
        </div>
      )}
      <Navigation currentPath={router.pathname} />
      
      <main>
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </>
  )
}
