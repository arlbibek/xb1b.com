const PROJECTS = [
  {
    name: "Tithi",
    href: "https://tithi.xb1b.com",
    note: "BS date & tithi reminders",
  },
  {
    name: "Brahma",
    href: "https://brahma.xb1b.com",
    note: "Vedic daily companion",
  },
] as const;

/** Two quiet "named stars" at the foot of the sky. */
export default function ProjectLinks() {
  return (
    <nav className="projects" aria-label="Projects">
      {PROJECTS.map(({ name, href, note }) => (
        <a key={name} className="projects__link" href={href}>
          <span className="projects__label">
            <svg
              className="projects__star"
              viewBox="0 0 12 12"
              width="9"
              height="9"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6 0c.4 3.6 2.4 5.6 6 6-3.6.4-5.6 2.4-6 6-.4-3.6-2.4-5.6-6-6 3.6-.4 5.6-2.4 6-6Z" />
            </svg>
            <span className="projects__name">{name}</span>
          </span>
          <span className="projects__note">{note}</span>
        </a>
      ))}
    </nav>
  );
}
