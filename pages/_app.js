import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="/analytics/tracking.js" strategy="afterInteractive" />
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
