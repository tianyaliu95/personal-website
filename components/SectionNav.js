import { useEffect, useRef } from 'react'
import { SITE_SECTIONS } from '../lib/sections'
import { smoothScrollTo } from '../lib/smoothScroll'
import useActiveSection from '../hooks/useActiveSection'

export default function SectionNav() {
  const [activeId, lockActive] = useActiveSection()
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav || !activeId) return

    const link = nav.querySelector(`[href="#${activeId}"]`)
    if (!link) return

    const navRect = nav.getBoundingClientRect()
    const linkRect = link.getBoundingClientRect()
    const pad = 10

    if (linkRect.top < navRect.top + pad) {
      nav.scrollTop -= navRect.top + pad - linkRect.top
    } else if (linkRect.bottom > navRect.bottom - pad) {
      nav.scrollTop += linkRect.bottom - (navRect.bottom - pad)
    }
  }, [activeId])

  const onJump = (event, id) => {
    event.preventDefault()

    const target = document.getElementById(id)
    if (!target) return

    lockActive(id, 750)

    const top =
      target.getBoundingClientRect().top + window.scrollY - 28
    smoothScrollTo(top, { duration: 500 })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav ref={navRef} className="section-nav" aria-label="Page sections">
      <p className="section-nav-label">On this page</p>
      <ul className="section-nav-list">
        {SITE_SECTIONS.map((section) => {
          const isActive = section.id === activeId
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`section-nav-link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(event) => onJump(event, section.id)}
              >
                <span className="section-nav-dot" aria-hidden="true" />
                <span>{section.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
