import { useState } from 'react'

import Seo from '../components/Seo'
import AmbientField from '../components/effects/AmbientField'
import BackToTop from '../components/effects/BackToTop'
import ImageLightbox from '../components/effects/ImageLightbox'
import ProfileSidebar from '../components/ProfileSidebar'
import SectionNav from '../components/SectionNav'
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
import { absoluteUrl, siteConfig } from '../lib/seo'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.ogImage),
  email: siteConfig.email,
  jobTitle: 'Software Engineer',
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto / Vancouver',
    addressCountry: 'CA',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Waterloo',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Wisconsin-Madison',
    },
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Harry Rosen Inc.',
    url: 'https://www.harryrosen.com',
  },
  sameAs: [siteConfig.linkedin, siteConfig.github],
  knowsLanguage: ['English', 'Chinese'],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: 'en-CA',
  author: {
    '@type': 'Person',
    name: siteConfig.name,
  },
}

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Seo
        jsonLd={[personJsonLd, websiteJsonLd]}
      />

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
        <div className="sidebar-col">
          <div className="sidebar-stack">
            <ProfileSidebar onAvatarClick={() => setModalOpen(true)} />
            <SectionNav />
          </div>
        </div>

        <main className="content" id="main">
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
