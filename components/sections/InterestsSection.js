import Section from '../ui/Section'
import { icons } from '../icons'

const interests = ['Hip-Hop', 'Music', 'Basketball', 'Fitness', 'Traveling', 'Movies', 'Hiking']

export default function InterestsSection() {
  return (
    <Section id="interests" icon={icons.heart} title="Interests">
      <div className="skill-tags">
        {interests.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </Section>
  )
}
