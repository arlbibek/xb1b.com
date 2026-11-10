const CONTACT = [
  { label: "GitHub", href: "https://github.com/arlbibek" },
  { label: "Email", href: "mailto:contact@xb1b.com" },
] as const;

/** Plain, starless links at the head of the sky — quieter than the projects. */
export default function ContactLinks() {
  return (
    <nav className="contact" aria-label="Contact">
      {CONTACT.map(({ label, href }) => (
        <a
          key={label}
          className="contact__link"
          href={href}
          {...(href.startsWith("http") ? { rel: "me" } : {})}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
