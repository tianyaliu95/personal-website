import { icons } from '../icons'

export default function Project({ id, href, icon, title, live = false, onClick, children }) {
  return (
    <article className="project">
      <a
        id={id}
        className="project-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {icon}
        <span className="project-heading">
          <strong>
            {title}
            <span className="project-external" aria-hidden="true">{icons.external}</span>
          </strong>
        </span>
        {live ? (
          <span className="project-live" title="Live" aria-label="Live">
            <span className="project-live-dot" aria-hidden="true" />
          </span>
        ) : null}
      </a>
      <ul>{children}</ul>
    </article>
  )
}
