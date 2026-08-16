import { useInView } from '../../hooks/useInView'

export default function Section({ id, icon, title, children }) {
  const [ref, inView] = useInView()

  return (
    <section
      id={id}
      ref={ref}
      className={`section${inView ? ' is-visible' : ''}`}
    >
      <div className="section-head">
        <span className="section-icon">{icon}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </section>
  )
}
