export default function SkillGroup({ label, tags }) {
  return (
    <div className="skill-group">
      <strong className="skill-label">{label}</strong>
      <div className="skill-tags">
        {tags.map((tag, index) => (
          <span
            key={tag}
            className="tag"
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
