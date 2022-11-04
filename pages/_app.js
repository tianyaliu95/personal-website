import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-155298612-1" strategy="beforeInteractive" />
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-155298612-1');
          `
        }}
      />

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-70DBW1V0HN" strategy="beforeInteractive" />
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-70DBW1V0HN');
          `
        }}
        onLoad={() => {
          
        }} 
      />

      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
