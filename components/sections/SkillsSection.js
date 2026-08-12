import Section from '../ui/Section'
import SkillGroup from '../ui/SkillGroup'
import { icons } from '../icons'

const skillGroups = [
  {
    label: 'Languages',
    tags: ['JavaScript', 'TypeScript', 'Java', 'SQL', 'PL/SQL', 'C#'],
  },
  {
    label: 'Web Development',
    tags: [
      'React', 'NodeJS', 'NextJS', 'Jest', 'Express', 'RESTful',
      'GraphQL', 'HTML/CSS', 'Commercetools', 'Amplience', 'jQuery',
    ],
  },
  {
    label: 'Database',
    tags: ['MongoDB', 'Oracle', 'PL/SQL', 'MySQL'],
  },
  {
    label: 'Other',
    tags: [
      'Git', 'Agile', 'Kubernetes', 'Docker', 'Yarn', 'Postman',
      'Insomnia', 'Google Cloud', 'Visual Studio Code', 'Visual Studio',
      'Sublime', 'Eclipse', 'Android Studio', 'Gradle', 'Unity 3D',
    ],
  },
  {
    label: '3D CAD/Simulation Tools',
    tags: [
      'SolidWorks', 'MATLAB Simulink', 'AutoCAD', 'Siemens NX',
      'ANSYS', 'COMSOL', 'Moldex3D',
    ],
  },
]

export default function SkillsSection() {
  return (
    <Section icon={icons.code} title="Skills">
      {skillGroups.map((group) => (
        <SkillGroup key={group.label} label={group.label} tags={group.tags} />
      ))}
    </Section>
  )
}
