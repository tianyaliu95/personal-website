const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

const MAX_MESSAGE = 1000

function firstHeader(value) {
  if (!value) return ''
  return String(value).split(',')[0].trim()
}

function decodeHeader(value) {
  const raw = firstHeader(value)
  if (!raw) return ''
  try {
    return decodeURIComponent(raw.replace(/\+/g, ' '))
  } catch {
    return raw
  }
}

function summarizeUserAgent(ua) {
  if (!ua) return 'Unknown device'

  let os = 'Unknown OS'
  if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS'
  else if (/Android/i.test(ua)) os = 'Android'
  else if (/Mac OS X|Macintosh/i.test(ua)) os = 'macOS'
  else if (/Windows/i.test(ua)) os = 'Windows'
  else if (/Linux/i.test(ua)) os = 'Linux'

  let browser = 'Unknown browser'
  if (/Edg\//i.test(ua)) browser = 'Edge'
  else if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) browser = 'Chrome'
  else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) browser = 'Safari'
  else if (/Firefox\//i.test(ua)) browser = 'Firefox'

  const device = /Mobile|Android|iPhone|iPad/i.test(ua) ? 'Mobile' : 'Desktop'
  return `${device} · ${os} · ${browser}`
}

function collectMeta(req, client = {}) {
  const headers = req.headers || {}
  const ua = firstHeader(headers['user-agent'])
  const ip =
    firstHeader(headers['x-forwarded-for']) ||
    firstHeader(headers['x-real-ip']) ||
    req.socket?.remoteAddress ||
    ''

  const country = decodeHeader(headers['x-vercel-ip-country'])
  const region = decodeHeader(headers['x-vercel-ip-country-region'])
  const city = decodeHeader(headers['x-vercel-ip-city'])
  const geoParts = [city, region, country].filter(Boolean)

  return {
    device: summarizeUserAgent(ua),
    ip: ip || 'Unknown',
    geo: geoParts.length ? geoParts.join(', ') : 'Unknown',
    country: country || 'Unknown',
    region: region || 'Unknown',
    city: city || 'Unknown',
    language: client.language || firstHeader(headers['accept-language']) || 'Unknown',
    timezone: client.timezone || 'Unknown',
    screen:
      client.screenWidth && client.screenHeight
        ? `${client.screenWidth}×${client.screenHeight}`
        : 'Unknown',
    // Original traffic source captured on first page load
    trafficReferrer: client.trafficReferrer || 'Direct / unknown',
    landingPath: client.landingPath || 'Unknown',
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!WEBHOOK_URL) {
    return res.status(503).json({ error: 'Message inbox is not configured yet.' })
  }

  const { message = '', website = '', client = {}, source = 'note', command = '' } = req.body || {}
  const isTerminal = source === 'terminal'

  // Honeypot — bots fill hidden fields
  if (typeof website === 'string' && website.trim()) {
    return res.status(200).json({ ok: true })
  }

  const rawInput = isTerminal ? command : message
  const maxLen = isTerminal ? 200 : MAX_MESSAGE
  const minLen = isTerminal ? 1 : 2
  const trimmedMessage = String(rawInput).trim().slice(0, maxLen)

  if (!trimmedMessage || trimmedMessage.length < minLen) {
    return res.status(400).json({ error: 'Message is too short.' })
  }

  const meta = collectMeta(req, client)
  const heading = isTerminal
    ? '**Mini terminal command from tianyaliu.ca**'
    : '**New message from tianyaliu.ca**'
  const body = isTerminal ? `\`${trimmedMessage}\`` : trimmedMessage

  const content = [
    '================================================',
    heading,
    '',
    body,
    '',
    '------------------------------------------------',
    `**Device:** ${meta.device}`,
    `**Geo:** ${meta.geo}`,
    `**IP:** ${meta.ip}`,
    `**Timezone:** ${meta.timezone}`,
    `**Language:** ${meta.language}`,
    `**Screen:** ${meta.screen}`,
    `**Traffic referrer:** ${meta.trafficReferrer}`,
    `**Landing path:** ${meta.landingPath}`,
    '================================================',
  ].join('\n')

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })

    if (!response.ok) {
      return res.status(502).json({ error: 'Failed to deliver message.' })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ error: 'Failed to deliver message.' })
  }
}
