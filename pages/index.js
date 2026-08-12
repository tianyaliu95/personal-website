import Head from 'next/head'
import { useState } from 'react'
import { Lightbox } from 'react-modal-image'

import ProfileSidebar from '../components/ProfileSidebar'
import {
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  InterestsSection,
  OtherSection,
} from '../components/sections'

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Tianya Liu</title>
        <meta name="description" content="Welcome to my personal website" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      {isModalOpen && (
        <Lightbox
          large="/img/head2.jpg"
          onClose={() => setModalOpen(false)}
        />
      )}

      <div className="page">
        <ProfileSidebar onAvatarClick={() => setModalOpen(true)} />

        <main className="content">
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <InterestsSection />
          <OtherSection />
        </main>
      </div>
    </>
  )
}
