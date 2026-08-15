export const siteConfig = {
  name: 'Tianya Liu',
  title: 'Tianya Liu | Software Engineer',
  description:
    'Software engineer specializing in full-stack web development and e-commerce. Portfolio of projects including Fitness Pilot, Teapresso, and more. Based in Toronto / Vancouver.',
  url: 'https://www.tianyaliu.ca',
  locale: 'en_CA',
  twitterHandle: '',
  email: 'tianyaliu0309@gmail.com',
  linkedin: 'https://ca.linkedin.com/in/tianya-liu-887905104',
  github: 'https://github.com/tianyaliu95',
  ogImage: '/img/head2.jpg',
  ogImageAlt: 'Portrait of Tianya Liu',
  keywords: [
    'Tianya Liu',
    'Software Engineer',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Toronto',
    'Vancouver',
    'E-commerce',
  ],
}

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${normalized}`
}
