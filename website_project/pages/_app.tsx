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
        <title>Locus Spatial Systems | Enterprise Spatial Intelligence</title>
        <meta name="description" content="Turn indoor spaces into smart, actionable environments with Locus Spatial Systems — spatial mapping, asset tracking, and analytics." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </Head>
      
      <div className="announce">
          <b>NEW!</b>
          <span><strong>Already running Locus?</strong> You may have spatial licences included and sitting idle. Let&apos;s find them now!</span>
          <a href="/contact">Find my licence <span aria-hidden="true">›</span></a>
      </div>
      <Navigation currentPath={router.pathname} />
      
      <main>
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </>
  )
}
