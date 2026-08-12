import Section from '../ui/Section'
import Entry from '../ui/Entry'
import { icons } from '../icons'

export default function EducationSection() {
  return (
    <Section icon={icons.education} title="Education">
      <Entry
        title="Master of Engineering (M.Eng), Mechanical & Mechatronics Engineering, University of Waterloo"
        meta={<p>2017 - 2019</p>}
      >
        <ul>
          <li>Graduate Diploma in Design Engineering</li>
          <li>Certificate in Business and Entrepreneurship</li>
        </ul>
      </Entry>

      <Entry
        title="Bachelor of Science, Mechanical Engineering, University of Wisconsin-Madison"
        meta={<p>2013 - 2017</p>}
      >
        <ul>
          <li>Overall GPA: 3.6 / 4.0</li>
          <li>Achieved Dean’s List: Fall 2013 – Spring 2014, Spring 2015 – Spring 2017</li>
        </ul>
      </Entry>
    </Section>
  )
}
