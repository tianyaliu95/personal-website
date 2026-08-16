import { useEffect, useRef, useState } from 'react'
import { runTerminalCommand } from '../../lib/terminalCommands'

const PROMPT = 'guest@tianyaliu:~$'
const TRAFFIC_REF_KEY = 'tl_traffic_referrer'
const LANDING_PATH_KEY = 'tl_landing_path'

const WELCOME = [
  { text: 'Welcome to Mini Terminal :)', bold: true },
  'type `help` to poke around',
]

function lineText(line) {
  return typeof line === 'string' ? line : line.text
}

function lineClassName(line) {
  const text = lineText(line)
  const classes = ['mini-term-line']
  if (typeof line === 'object' && line.bold) classes.push('is-bold')
  if (text.startsWith(PROMPT) || text.startsWith('guest@') || text.startsWith('tianya@')) {
    classes.push('is-cmd')
  }
  if (text.startsWith('command not found') || text.startsWith('no such section')) {
    classes.push('is-error')
  }
  if (text.startsWith('navigating') || text.startsWith('opening') || text.startsWith('scrolling')) {
    classes.push('is-ok')
  }
  return classes.join(' ')
}

function readClientMeta() {
  let trafficReferrer = 'Direct / unknown'
  let landingPath = typeof window !== 'undefined' ? window.location.pathname : 'Unknown'

  try {
    trafficReferrer = sessionStorage.getItem(TRAFFIC_REF_KEY) || document.referrer || trafficReferrer
    landingPath = sessionStorage.getItem(LANDING_PATH_KEY) || landingPath
  } catch {
    trafficReferrer = document.referrer || trafficReferrer
  }

  return {
    language: typeof navigator !== 'undefined' ? navigator.language : '',
    timezone:
      typeof Intl !== 'undefined'
        ? Intl.DateTimeFormat().resolvedOptions().timeZone
        : '',
    screenWidth: typeof window !== 'undefined' ? window.screen?.width : '',
    screenHeight: typeof window !== 'undefined' ? window.screen?.height : '',
    trafficReferrer,
    landingPath,
  }
}

function reportTerminalCommand(command) {
  fetch('/api/message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: 'terminal',
      command,
      client: readClientMeta(),
    }),
    keepalive: true,
  }).catch(() => {})
}

export default function MiniTerminal() {
  const [open, setOpen] = useState(false)
  const [maximized, setMaximized] = useState(false)
  const [lines, setLines] = useState(WELCOME)
  const [value, setValue] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const logRef = useRef(null)

  const closeTerminal = () => {
    setOpen(false)
    setMaximized(false)
  }

  useEffect(() => {
    const onKey = (event) => {
      const tag = event.target?.tagName
      const typing =
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        event.target?.isContentEditable

      if (event.key === '`' && !event.metaKey && !event.ctrlKey && !event.altKey) {
        if (typing && !open) return
        event.preventDefault()
        setOpen((prev) => {
          if (prev) setMaximized(false)
          return !prev
        })
        return
      }

      if (event.key === 'Escape' && open) {
        event.preventDefault()
        closeTerminal()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const id = window.setTimeout(() => inputRef.current?.focus(), 30)
    return () => window.clearTimeout(id)
  }, [open, maximized])

  useEffect(() => {
    if (!logRef.current) return
    logRef.current.scrollTop = logRef.current.scrollHeight
  }, [lines, open])

  const run = (raw) => {
    reportTerminalCommand(raw)
    const result = runTerminalCommand(raw)
    if (result.clear) {
      setLines([])
      return
    }

    if (result.reset) {
      setLines(WELCOME)
      setValue('')
      setHistory([])
      setHistoryIndex(-1)
      setMaximized(false)
      return
    }

    const next = [
      ...lines,
      `${PROMPT} ${raw}`,
      ...(result.lines || []),
    ].slice(-80)

    setLines(next)
    if (result.close) {
      window.setTimeout(() => closeTerminal(), 180)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const raw = value.trim()
    if (!raw) return
    setHistory((prev) => (prev[0] === raw ? prev : [raw, ...prev].slice(0, 40)))
    setHistoryIndex(-1)
    setValue('')
    run(raw)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (!history.length) return
      const next = Math.min(historyIndex + 1, history.length - 1)
      setHistoryIndex(next)
      setValue(history[next] || '')
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (historyIndex <= 0) {
        setHistoryIndex(-1)
        setValue('')
        return
      }
      const next = historyIndex - 1
      setHistoryIndex(next)
      setValue(history[next] || '')
    }
  }

  return (
    <div className={`mini-term${open ? ' is-open' : ''}${maximized ? ' is-maximized' : ''}`}>
      {open ? (
        <div className="mini-term-panel" role="dialog" aria-label="Mini terminal">
          <div className="mini-term-bar">
            <span className="mini-term-title">guest@tianyaliu — zsh</span>
            <div className="mini-term-winbtns">
              <button
                type="button"
                className="mini-term-winbtn is-min"
                onClick={closeTerminal}
                aria-label="Minimize"
              >
                <svg viewBox="0 0 10 10" aria-hidden="true">
                  <path d="M1 5h8" />
                </svg>
              </button>
              <button
                type="button"
                className="mini-term-winbtn is-max"
                onClick={() => setMaximized((prev) => !prev)}
                aria-label={maximized ? 'Restore' : 'Maximize'}
              >
                {maximized ? (
                  <svg viewBox="0 0 10 10" aria-hidden="true">
                    <path d="M3.2 2.4h4.4v4.4" />
                    <path d="M2.2 3.4h4.4v4.4H2.2z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 10 10" aria-hidden="true">
                    <rect x="2.2" y="2.2" width="5.6" height="5.6" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                className="mini-term-winbtn is-close"
                onClick={closeTerminal}
                aria-label="Close"
              >
                <svg viewBox="0 0 10 10" aria-hidden="true">
                  <path d="M2.2 2.2l5.6 5.6M7.8 2.2l-5.6 5.6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mini-term-screen">
            <div className="mini-term-log" ref={logRef} aria-live="polite">
              {lines.map((line, index) => {
                const text = lineText(line)
                return (
                  <div
                    key={`${index}-${text.slice(0, 12)}`}
                    className={lineClassName(line)}
                  >
                    {text || '\u00A0'}
                  </div>
                )
              })}
            </div>
            <form className="mini-term-form" onSubmit={onSubmit}>
              <label className="mini-term-prompt" htmlFor="mini-term-input">
                <span className="mini-term-user" aria-hidden="true">guest</span>
                <span className="mini-term-at" aria-hidden="true">@</span>
                <span className="mini-term-host" aria-hidden="true">tianyaliu</span>
                <span className="mini-term-path" aria-hidden="true">:~$</span>
              </label>
              <input
                id="mini-term-input"
                ref={inputRef}
                className="mini-term-input"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                aria-label="Terminal command"
              />
            </form>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className="mini-term-toggle"
        onClick={() => {
          if (open) closeTerminal()
          else setOpen(true)
        }}
        aria-expanded={open}
        title="Mini terminal (`)"
        aria-label={open ? 'Close Mini terminal' : 'Open Mini terminal'}
      >
        <span aria-hidden="true">&gt;_</span>
      </button>
    </div>
  )
}
