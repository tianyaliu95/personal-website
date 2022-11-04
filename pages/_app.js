import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script type='text/javascript' src='/analytics/tracking.js' />
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
