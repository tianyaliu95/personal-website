export default function SkillGroup({ label, tags }) {
  return (
    <div className="skill-group">
      <strong className="skill-label">{label}</strong>
      <div className="skill-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}
