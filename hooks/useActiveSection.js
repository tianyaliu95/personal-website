import { useEffect, useRef, useState } from 'react'
import { SITE_SECTIONS } from '../lib/sections'

export default function useActiveSection(sectionIds = SITE_SECTIONS.map((s) => s.id)) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')
  const lockedIdRef = useRef(null)
  const unlockTimerRef = useRef(null)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return undefined

    const updateActive = () => {
      if (lockedIdRef.current) {
        setActiveId(lockedIdRef.current)
        return
      }

      const anchor = 140
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top - anchor <= 0) current = id
      }

      setActiveId((prev) => (prev === current ? prev : current))
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)

    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
      if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current)
    }
  }, [sectionIds.join('|')])

  const lockActive = (id, ms = 900) => {
    lockedIdRef.current = id
    setActiveId(id)
    if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current)
    unlockTimerRef.current = window.setTimeout(() => {
      lockedIdRef.current = null
    }, ms)
  }

  return [activeId, lockActive]
}
