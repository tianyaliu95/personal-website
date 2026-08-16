import Section from '../ui/Section'
import Entry from '../ui/Entry'
import { icons } from '../icons'

export default function ExperienceSection() {
  return (
    <Section id="experience" icon={icons.building} title="Previous Mechanical Work Experience">
      <Entry
        title="Engineering Specialist Intern, F&P Manufacturing Inc."
        meta={
          <>
            <p><strong>Joined:</strong> May, 2018</p>
            <p><strong>Left:</strong> Aug, 2018</p>
          </>
        }
      >
        <ul>
          <li>
            Worked within a multi-disciplinary team to design manufacturing
            equipment for Honda CR-V chassis main production line
          </li>
          <li>
            Led <b>3-D CAD</b> model development, testing, and prototyping
            process
          </li>
          <li>
            Conducted Failure Mode & Effects Analysis (<b>FMEA</b>) and
            initiated embodiment designs for safety and risk mitigation
          </li>
          <li>
            Liaised with external contractors and conceptualized integrated
            designs for continuous improvement
          </li>
        </ul>
      </Entry>

      <Entry
        title="Research Assistant, UW-Madison Engineering Representations & Simulation Lab (ERSL)"
        meta={
          <>
            <p><strong>Joined:</strong> Sept, 2016</p>
            <p><strong>Left:</strong> May, 2017</p>
          </>
        }
      >
        <ul>
          <li>
            Created 3-D <b>SolidWorks</b> models based on engineering drawings and
            achieved up to <b>30%</b> volumetric shrinkage through topology
            optimization
          </li>
          <li>
            Identified models&apos; limitations by performing finite element
            analysis (<b>FEA</b>) with various boundary conditions
          </li>
          <li>
            Assisted in 3-D manufacturing and prototyping process and conducted
            tension/compression tests
          </li>
          <li>
            Prepared verbal and written reports and presented in a regional
            technical meeting
          </li>
          <li>
            Evaluated software add-ins by analyzing results from 3-D models
          </li>
        </ul>
      </Entry>
    </Section>
  )
}
