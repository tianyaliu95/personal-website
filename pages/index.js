import Head from 'next/head'
import { useState } from 'react'

import AmbientField from '../components/effects/AmbientField'
import BackToTop from '../components/effects/BackToTop'
import ImageLightbox from '../components/effects/ImageLightbox'
import ProfileSidebar from '../components/ProfileSidebar'
import {
  ResumeSection,
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

      <AmbientField />
      <BackToTop />

      {isModalOpen && (
        <ImageLightbox
          src="/img/head2.jpg"
          alt="Tianya Liu"
          onClose={() => setModalOpen(false)}
        />
      )}

      <div className="page">
        <ProfileSidebar onAvatarClick={() => setModalOpen(true)} />

        <main className="content">
          <ResumeSection />
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
