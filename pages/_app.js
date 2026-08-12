import { Analytics } from "@vercel/analytics/react"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script type="text/javascript" src="/analytics/tracking.js" async />
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
