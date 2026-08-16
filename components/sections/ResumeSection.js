import Section from '../ui/Section'
import { icons } from '../icons'
import { track } from '../../lib/analytics'

export default function ResumeSection() {
  return (
    <Section id="resume" icon={icons.file} title="Resume">
      <a
        href="/resume.pdf"
        className="resume-link"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('RESUME_VIEW')}
      >
        <span>View full resume (PDF)</span>
        <span className="resume-link-icon" aria-hidden="true">{icons.external}</span>
      </a>
    </Section>
  )
}
