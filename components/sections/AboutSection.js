import Section from '../ui/Section'
import { icons } from '../icons'

export default function AboutSection() {
  return (
    <Section icon={icons.user} title="About Me">
      <div className="about-copy">
        <p>
          Graduated from the University of Waterloo, with a master&apos;s degree in
          mechatronics engineering
        </p>
        <p>
          Currently working at{' '}
          <a href="https://www.linkedin.com/company/harry-rosen/" target="_blank" rel="noopener noreferrer">
            Harry Rosen Inc.
          </a>{' '}
          as a software engineer specializing in full-stack web development & e-commerce solutions
        </p>
        <p>
          Passionate about software development and enjoy every second learning
          cutting-edge technologies
        </p>
        <p>You only live once, so make it count!</p>
      </div>
    </Section>
  )
}
