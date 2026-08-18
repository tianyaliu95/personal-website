export function Icon({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export const icons = {
  pin: (
    <Icon>
      <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  ),
  mail: (
    <Icon>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </Icon>
  ),
  language: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </Icon>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  ),
  user: (
    <Icon>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </Icon>
  ),
  briefcase: (
    <Icon>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </Icon>
  ),
  code: (
    <Icon>
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
    </Icon>
  ),
  building: (
    <Icon>
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M2 21h20M10 9h2M10 13h2M10 17h2" />
    </Icon>
  ),
  education: (
    <Icon>
      <path d="m2 9 10-5 10 5-10 5L2 9z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    </Icon>
  ),
  heart: (
    <Icon>
      <path d="M19.5 5.5a4.5 4.5 0 0 0-6.4 0L12 6.6l-1.1-1.1a4.5 4.5 0 0 0-6.4 6.4L12 19.5l7.5-7.6a4.5 4.5 0 0 0 0-6.4z" />
    </Icon>
  ),
  book: (
    <Icon>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" />
      <path d="M4 19a2 2 0 0 1 2-2h13" />
    </Icon>
  ),
  file: (
    <Icon>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </Icon>
  ),
  arrowRight: (
    <Icon>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  ),
  external: (
    <Icon>
      <path d="M14 4h6v6M20 4 10 14M10 5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5" />
    </Icon>
  ),
  truck: (
    <Icon>
      <path d="M1 8h13v9H1zM14 11h5l3 3v3h-8v-6zM5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </Icon>
  ),
  activity: (
    <Icon>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Icon>
  ),
  scale: (
    <Icon>
      <path d="M12 3v18M5 7h14" />
      <path d="M5 7 2 13a3.5 3.5 0 0 0 6 0L5 7zM19 7l-3 6a3.5 3.5 0 0 0 6 0l-3-6z" />
    </Icon>
  ),
  brain: (
    <Icon>
      <path d="M12 5a3 3 0 1 0-6-.1 4 4 0 0 0-2.5 5.8 4 4 0 0 0 .5 6.8A4 4 0 0 0 12 18V5z" />
      <path d="M12 5a3 3 0 1 1 6-.1 4 4 0 0 1 2.5 5.8 4 4 0 0 1-.5 6.8A4 4 0 0 1 12 18V5z" />
      <path d="M9 9.5a3 3 0 0 1-3-3M15 9.5a3 3 0 0 0 3-3M9 14a3 3 0 0 0-3 3M15 14a3 3 0 0 1 3 3" />
      <path d="M8 12h1M15 12h1" />
    </Icon>
  ),
  sparkles: (
    <Icon>
      <path d="m12 2-1.7 5.3L5 9l5.3 1.7L12 16l1.7-5.3L19 9l-5.3-1.7L12 2z" />
      <path d="m19 14-.8 2.2L16 17l2.2.8L19 20l.8-2.2L22 17l-2.2-.8L19 14z" />
      <path d="m5 2-.7 2.3L2 5l2.3.7L5 8l.7-2.3L8 5l-2.3-.7L5 2z" />
    </Icon>
  ),
  lightbulb: (
    <Icon>
      <path d="M9 18h6M10 22h4" />
      <path d="M8.5 15.5C6.9 14.4 6 12.6 6 10.5a6 6 0 0 1 12 0c0 2.1-.9 3.9-2.5 5-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5z" />
      <path d="M12 2V0M4.9 3.4 3.5 2M19.1 3.4 20.5 2M4 10H2M22 10h-2" />
    </Icon>
  ),
  coffee: (
    <Icon>
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
      <path d="M6 2v2M10 2v2M14 2v2" />
    </Icon>
  ),
  bookOpen: (
    <Icon>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </Icon>
  ),
  phone: (
    <Icon>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </Icon>
  ),
  ball: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9zM3.5 9.5h17M3.5 14.5h17" />
    </Icon>
  ),
  chat: (
    <Icon>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 1 1 18 0z" />
    </Icon>
  ),
  game: (
    <Icon>
      <rect x="2" y="7" width="20" height="11" rx="3" />
      <path d="M7 12h3M8.5 10.5v3M16 11h.01M18 13h.01" />
    </Icon>
  ),
}
