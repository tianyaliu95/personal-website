import { useEffect } from 'react'
import Image from 'next/image'

export default function ImageLightbox({ src, alt = '', onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Full size photo'}
      onClick={onClose}
    >
      <div className="lightbox-backdrop" aria-hidden="true" />

      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close photo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className="lightbox-stage"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="lightbox-frame">
          <Image
            className="lightbox-image"
            src={src}
            alt={alt}
            width={960}
            height={960}
            priority
          />
        </div>
      </div>
    </div>
  )
}
