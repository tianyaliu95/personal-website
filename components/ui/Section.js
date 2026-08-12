export default function Section({ icon, title, children }) {
  return (
    <section className="section">
      <div className="section-head">
        <span className="section-icon">{icon}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </section>
  )
}
