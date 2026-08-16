import { useEffect, useState } from 'react'
import Section from '../ui/Section'
import { icons } from '../icons'

const TRAFFIC_REF_KEY = 'tl_traffic_referrer'
const LANDING_PATH_KEY = 'tl_landing_path'

function captureTrafficSource() {
  if (typeof window === 'undefined') return

  try {
    if (!sessionStorage.getItem(TRAFFIC_REF_KEY)) {
      const ref = document.referrer || 'Direct / none'
      sessionStorage.setItem(TRAFFIC_REF_KEY, ref)
    }
    if (!sessionStorage.getItem(LANDING_PATH_KEY)) {
      sessionStorage.setItem(
        LANDING_PATH_KEY,
        `${window.location.pathname}${window.location.search}`
      )
    }
  } catch {
    // sessionStorage may be blocked
  }
}

function readTrafficSource() {
  try {
    return {
      trafficReferrer: sessionStorage.getItem(TRAFFIC_REF_KEY) || 'Direct / unknown',
      landingPath: sessionStorage.getItem(LANDING_PATH_KEY) || window.location.pathname,
    }
  } catch {
    return {
      trafficReferrer: document.referrer || 'Direct / unknown',
      landingPath: typeof window !== 'undefined' ? window.location.pathname : 'Unknown',
    }
  }
}

export default function OtherSection() {
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    captureTrafficSource()
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    setError('')

    const traffic = readTrafficSource()

    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          website,
          client: {
            language: typeof navigator !== 'undefined' ? navigator.language : '',
            timezone:
              typeof Intl !== 'undefined'
                ? Intl.DateTimeFormat().resolvedOptions().timeZone
                : '',
            screenWidth: typeof window !== 'undefined' ? window.screen?.width : '',
            screenHeight: typeof window !== 'undefined' ? window.screen?.height : '',
            trafficReferrer: traffic.trafficReferrer,
            landingPath: traffic.landingPath,
          },
        }),
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }

      setStatus('sent')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong.')
    }
  }

  return (
    <Section id="note" icon={icons.book} title="Leave a note?">
      {status === 'sent' ? (
        <p className="easter-success">Thanks — Message sent.</p>
      ) : (
        <form className="easter-form" onSubmit={onSubmit}>
          <textarea
            id="easter-message"
            className="easter-input easter-textarea"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault()
                event.currentTarget.form?.requestSubmit()
              }
            }}
            maxLength={1000}
            required
            rows={1}
            placeholder="Say hi…"
            aria-label="Your message"
          />

          <input
            className="easter-honeypot"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            aria-hidden="true"
          />

          {status === 'error' && <p className="easter-error">{error}</p>}

          <button
            type="submit"
            className="easter-submit"
            disabled={status === 'sending' || message.trim().length < 2}
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>
      )}
    </Section>
  )
}
