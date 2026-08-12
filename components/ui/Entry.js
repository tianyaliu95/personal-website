export default function Entry({ title, meta, children }) {
  return (
    <article className="entry">
      <div className="entry-body">
        <p className="entry-title"><strong>{title}</strong></p>
        {children}
      </div>
      <div className="entry-meta">{meta}</div>
    </article>
  )
}
