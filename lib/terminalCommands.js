import { SITE_SECTIONS } from './sections'
import { smoothScrollTo } from './smoothScroll'
import { siteConfig } from './seo'

function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) {
    return { ok: false, lines: [`section not found: ${id}`] }
  }
  const top = target.getBoundingClientRect().top + window.scrollY - 28
  smoothScrollTo(top, { duration: 700 })
  window.history.replaceState(null, '', `#${id}`)
  const label = SITE_SECTIONS.find((s) => s.id === id)?.label || id
  return { ok: true, lines: [`navigating to ${label}…`] }
}

const SECTION_ALIASES = {
  me: 'about',
  bio: 'about',
  work: 'experience',
  jobs: 'experience',
  edu: 'education',
  school: 'education',
  guestbook: 'note',
  message: 'note',
  contact: 'note',
}

function resolveSection(name) {
  const key = name.toLowerCase()
  if (SECTION_ALIASES[key]) return SECTION_ALIASES[key]
  const match = SITE_SECTIONS.find(
    (s) => s.id === key || s.label.toLowerCase() === key || s.label.toLowerCase().includes(key)
  )
  return match?.id || null
}

export function runTerminalCommand(raw) {
  const input = raw.trim()
  if (!input) return { lines: [] }

  const [cmd, ...rest] = input.split(/\s+/)
  const arg = rest.join(' ').trim()
  const command = cmd.toLowerCase()

  switch (command) {
    case 'help':
    case '?': {
      const rows = [
        ['help', 'show this list'],
        ['ls', 'list page sections'],
        ['open <section>', 'jump to a section'],
        ['about | projects | …', 'jump to that section'],
        ['top', 'scroll to the top'],
        ['whoami', 'short intro'],
        ['resume', 'open resume PDF'],
        ['github', 'open GitHub'],
        ['linkedin', 'open LinkedIn'],
        ['clear', 'clear the screen'],
        ['reset', 'restore the welcome screen'],
        ['flip | unflip', 'go try and see what happens XP'],
        ['exit', 'close terminal'],
      ]
      const width = Math.max(...rows.map(([cmd]) => cmd.length))
      return {
        lines: [
          'available commands',
          ...rows.map(([cmd, desc]) => ` - ${cmd.padEnd(width)}      ${desc}`),
          '',
          'tip: ↑ for history · Esc or ` to close',
        ],
      }
    }

    case 'ls':
    case 'sections':
      return {
        lines: [
          'sections/',
          ...SITE_SECTIONS.map((s) => `  ${s.id.padEnd(12)} ${s.label}`),
        ],
      }

    case 'clear':
    case 'cls':
      return { clear: true, lines: [] }

    case 'reset':
    case 'restart':
      return { reset: true, lines: [] }

    case 'whoami':
      return {
        lines: [
          `${siteConfig.name}`,
          'Software Engineer · Toronto / Vancouver',
          siteConfig.email,
          'type `ls` or `help` to look around',
        ],
      }

    case 'pwd':
      return { lines: [window.location.pathname || '/'] }

    case 'date':
      return { lines: [new Date().toString()] }

    case 'top':
    case 'home':
      smoothScrollTo(0, { duration: 700 })
      window.history.replaceState(null, '', window.location.pathname)
      return { lines: ['scrolling to top…'] }

    case 'resume':
      return scrollToSection('resume')

    case 'pdf':
      window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
      return { lines: ['opening /resume.pdf…'] }

    case 'github':
      window.open(siteConfig.github, '_blank', 'noopener,noreferrer')
      return { lines: [`opening ${siteConfig.github}`] }

    case 'linkedin':
      window.open(siteConfig.linkedin, '_blank', 'noopener,noreferrer')
      return { lines: [`opening ${siteConfig.linkedin}`] }

    case 'email':
    case 'mail':
      window.location.href = `mailto:${siteConfig.email}`
      return { lines: [`mailto:${siteConfig.email}`] }

    case 'open':
    case 'cd':
    case 'goto':
    case 'go': {
      if (!arg) return { lines: ['usage: open <section>'] }
      const id = resolveSection(arg)
      if (!id) return { lines: [`no such section: ${arg}`, 'try `ls`'] }
      return scrollToSection(id)
    }

    case 'flip':
      return { lines: ['(╯°□°)╯︵ ┻━┻'] }

    case 'unflip':
      return { lines: ['┬─┬ ノ( ゜-゜ノ)'] }

    case 'exit':
    case 'quit':
    case 'q':
    case 'close':
      return { close: true, lines: ['session closed. bye.'] }

    default: {
      // Bare section name: `about`, `projects`, …
      const id = resolveSection(command)
      if (id && !arg) return scrollToSection(id)

      return {
        lines: [`command not found: ${command}`, 'type `help` for available commands'],
      }
    }
  }
}
