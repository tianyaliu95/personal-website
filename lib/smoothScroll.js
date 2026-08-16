let scrollFrame = 0

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Smooth page scroll with a fixed duration. */
export function smoothScrollTo(top, { duration = 700 } = {}) {
  if (typeof window === 'undefined') return

  const target = Math.max(0, top)
  const root = document.documentElement

  // Disable CSS smooth scrolling for the duration of our rAF animation.
  root.style.scrollBehavior = 'auto'

  if (scrollFrame) {
    cancelAnimationFrame(scrollFrame)
    scrollFrame = 0
  }

  if (prefersReducedMotion()) {
    window.scrollTo(0, target)
    root.style.scrollBehavior = ''
    return
  }

  const start = window.scrollY
  const distance = target - start
  if (Math.abs(distance) < 1) {
    root.style.scrollBehavior = ''
    return
  }

  const startedAt = performance.now()

  const step = (now) => {
    const t = Math.min(1, (now - startedAt) / duration)
    window.scrollTo(0, start + distance * easeOutCubic(t))
    if (t < 1) {
      scrollFrame = requestAnimationFrame(step)
    } else {
      scrollFrame = 0
      root.style.scrollBehavior = ''
    }
  }

  scrollFrame = requestAnimationFrame(step)
}
