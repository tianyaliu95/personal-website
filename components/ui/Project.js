import { icons } from '../icons'

export default function Project({ id, href, icon, title, onClick, children }) {
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
        <strong>
          {title}
          <span className="project-external" aria-hidden="true">{icons.external}</span>
        </strong>
      </a>
      <ul>{children}</ul>
    </article>
  )
}
