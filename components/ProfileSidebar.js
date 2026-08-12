import Image from 'next/image'
import { icons } from './icons'
import { track } from '../lib/analytics'

export default function ProfileSidebar({ onAvatarClick }) {
  return (
    <aside className="profile">
      <button
        type="button"
        className="avatar-btn"
        onClick={() => {
          onAvatarClick?.()
          track('IMAGE_VIEW')
        }}
        aria-label="View profile photo"
      >
        <Image
          className="avatar"
          src="/img/head2.jpg"
          alt="Tianya Liu"
          width={160}
          height={160}
          priority
        />
      </button>

      <h1 className="profile-name">Tianya Liu</h1>
      <div className="profile-roles">
        <p>Software Engineer</p>
      </div>

      <hr className="profile-divider" />

      <div className="contact-list">
        <div className="contact-item">
          {icons.pin}
          <span>Toronto / Vancouver</span>
        </div>
        <div className="contact-item">
          {icons.mail}
          <a href="mailto:tianyaliu0309@gmail.com">tianyaliu0309@gmail.com</a>
        </div>
        <div className="contact-item">
          {icons.language}
          <span>English & Mandarin</span>
        </div>
      </div>

      <hr className="profile-divider" />

      <div className="socials">
        <a
          className="social"
          href="https://ca.linkedin.com/in/tianya-liu-887905104"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          {icons.linkedin}
        </a>
        <a
          className="social"
          href="https://github.com/tianyaliu95"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src="/img/github.gif" alt="" width={22} height={22} />
        </a>
      </div>
    </aside>
  )
}
