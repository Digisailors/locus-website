import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </Head>
      
      <Navigation currentPath={router.pathname} />
      
      <main>
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </>
  )
}