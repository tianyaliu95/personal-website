import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-70DBW1V0HN" />
      <Script
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-70DBW1V0HN');
        }} 
      />
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
