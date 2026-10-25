export type SkillNode = {
  /**
   * Real skill from `bibek - skills.md`. Long names are display-shortened
   * (same skill, e.g. "Vuln. Management") — never invented.
   */
  label: string;
  /** index into SKILL_ORBITS */
  orbit: number;
};

export type SkillOrbit = {
  /** diameter in vmin */
  size: number;
  /** full revolution seconds (positive = clockwise, negative = counter) */
  duration: number;
};

/**
 * Skills from `bibek - skills.md`, grouped into 7 elliptical orbits that
 * fill the viewport around the name (inner = core security,
 * outer = ops / media). Text-only constellation labels.
 */
export const SKILL_NODES: SkillNode[] = [
  // Orbit 0 — core security
  { label: "Cybersecurity", orbit: 0 },
  { label: "InfoSec", orbit: 0 },
  { label: "GRC", orbit: 0 },
  { label: "ISO/IEC 27001", orbit: 0 },
  { label: "IT Audit", orbit: 0 },
  { label: "VAPT", orbit: 0 },
  { label: "Cyber Risk Mgmt", orbit: 0 },
  { label: "Pentesting", orbit: 0 },
  { label: "Ethical Hacking", orbit: 0 },
  { label: "Vuln. Management", orbit: 0 },
  { label: "OWASP", orbit: 0 },
  { label: "Burp Suite", orbit: 0 },
  { label: "Network Security", orbit: 0 },
  { label: "Endpoint Security", orbit: 0 },
  { label: "App. Security", orbit: 0 },
  { label: "API Security", orbit: 0 },
  { label: "Bug Bounty", orbit: 0 },
  { label: "SOC 2", orbit: 0 },
  { label: "PCI DSS", orbit: 0 },
  { label: "CIS Controls", orbit: 0 },
  { label: "Nmap", orbit: 0 },
  { label: "GoPhish", orbit: 0 },
  { label: "ISMS", orbit: 0 },
  { label: "NIST", orbit: 0 },
  { label: "ISO/IEC 27002", orbit: 0 },
  { label: "ISO 22301", orbit: 0 },
  { label: "Risk Treatment", orbit: 0 },
  { label: "Security Controls", orbit: 0 },

  // Orbit 1 — ops / GRC delivery
  { label: "Security Operations", orbit: 1 },
  { label: "Incident Response", orbit: 1 },
  { label: "Infra. Security", orbit: 1 },
  { label: "IAM", orbit: 1 },
  { label: "Security Consulting", orbit: 1 },
  { label: "Security Awareness", orbit: 1 },
  { label: "Third-Party Risk", orbit: 1 },
  { label: "SIEM", orbit: 1 },
  { label: "EDR", orbit: 1 },
  { label: "XDR", orbit: 1 },
  { label: "Phishing Sim.", orbit: 1 },
  { label: "Log Analysis", orbit: 1 },
  { label: "Wireshark", orbit: 1 },
  { label: "Incident Management", orbit: 1 },
  { label: "Vuln. Assessment", orbit: 1 },
  { label: "Compliance Audit", orbit: 1 },
  { label: "Security Policies", orbit: 1 },
  { label: "IT Risk Mgmt", orbit: 1 },
  { label: "Risk Assessment", orbit: 1 },
  { label: "Offensive Security", orbit: 1 },
  { label: "Security Monitoring", orbit: 1 },
  { label: "Security Audit", orbit: 1 },
  { label: "Security Assessment", orbit: 1 },
  { label: "Audit Readiness", orbit: 1 },
  { label: "Findings Management", orbit: 1 },
  { label: "Remediation Tracking", orbit: 1 },

  // Orbit 2 — systems / network
  { label: "Linux", orbit: 2 },
  { label: "Windows Admin", orbit: 2 },
  { label: "Networking", orbit: 2 },
  { label: "Cloud Infra", orbit: 2 },
  { label: "Docker", orbit: 2 },
  { label: "DevOps", orbit: 2 },
  { label: "Self-Hosted Infra", orbit: 2 },
  { label: "Monitoring", orbit: 2 },
  { label: "Proxmox", orbit: 2 },
  { label: "Nginx", orbit: 2 },
  { label: "Cloudflare", orbit: 2 },
  { label: "Tailscale", orbit: 2 },
  { label: "Uptime Kuma", orbit: 2 },
  { label: "Bash", orbit: 2 },
  { label: "Kali Linux", orbit: 2 },
  { label: "Pi-hole", orbit: 2 },
  { label: "Ubuntu", orbit: 2 },
  { label: "Debian", orbit: 2 },
  { label: "Windows Server", orbit: 2 },
  { label: "DNS", orbit: 2 },
  { label: "VPN", orbit: 2 },
  { label: "Reverse Proxy", orbit: 2 },
  { label: "SSH", orbit: 2 },
  { label: "Docker Compose", orbit: 2 },
  { label: "Portainer", orbit: 2 },
  { label: "Nginx Proxy Manager", orbit: 2 },
  { label: "Zabbix", orbit: 2 },
  { label: "TCP/IP", orbit: 2 },
  { label: "DHCP", orbit: 2 },
  { label: "SSL/TLS", orbit: 2 },
  { label: "systemd", orbit: 2 },

  // Orbit 3 — build / data
  { label: "Web Development", orbit: 3 },
  { label: "Next.js", orbit: 3 },
  { label: "SaaS Architecture", orbit: 3 },
  { label: "Databases", orbit: 3 },
  { label: "Supabase", orbit: 3 },
  { label: "Automation", orbit: 3 },
  { label: "Solution Arch.", orbit: 3 },
  { label: "Client Advisory", orbit: 3 },
  { label: "Project Coord.", orbit: 3 },
  { label: "IT Operations", orbit: 3 },
  { label: "Python", orbit: 3 },
  { label: "React.js", orbit: 3 },
  { label: "Tailwind CSS", orbit: 3 },
  { label: "CI/CD", orbit: 3 },
  { label: "GitHub", orbit: 3 },
  { label: "n8n", orbit: 3 },
  { label: "GitHub Actions", orbit: 3 },
  { label: "Node.js", orbit: 3 },
  { label: "PostgreSQL", orbit: 3 },
  { label: "MySQL", orbit: 3 },
  { label: "Keycloak", orbit: 3 },
  { label: "Vaultwarden", orbit: 3 },
  { label: "Syncthing", orbit: 3 },
  { label: "Linux Admin", orbit: 3 },
  { label: "Network Admin", orbit: 3 },
  { label: "Vikunja", orbit: 3 },
  { label: "JavaScript", orbit: 3 },
  { label: "SQL", orbit: 3 },

  // Orbit 4 — identity / comms / edge
  { label: "Microsoft 365", orbit: 4 },
  { label: "Entra ID", orbit: 4 },
  { label: "Exchange Online", orbit: 4 },
  { label: "Google Workspace", orbit: 4 },
  { label: "Zoho Mail", orbit: 4 },
  { label: "Resend", orbit: 4 },
  { label: "Email Security", orbit: 4 },
  { label: "SPF", orbit: 4 },
  { label: "DKIM", orbit: 4 },
  { label: "DMARC", orbit: 4 },
  { label: "SSO", orbit: 4 },
  { label: "OAuth 2.0", orbit: 4 },
  { label: "Authentik", orbit: 4 },
  { label: "Cloudflare Workers", orbit: 4 },
  { label: "Cloudflare Tunnels", orbit: 4 },
  { label: "Cloudflare R2", orbit: 4 },
  { label: "Vercel", orbit: 4 },
  { label: "Domain Management", orbit: 4 },
  { label: "Uptime Monitoring", orbit: 4 },
  { label: "Health Checks", orbit: 4 },
  { label: "rclone", orbit: 4 },
  { label: "Resilio Sync", orbit: 4 },
  { label: "FileZilla", orbit: 4 },
  { label: "DNS Filtering", orbit: 4 },

  // Orbit 5 — tools / languages
  { label: "PowerShell", orbit: 5 },
  { label: "cron", orbit: 5 },
  { label: "VMware", orbit: 5 },
  { label: "VirtualBox", orbit: 5 },
  { label: "SQLite", orbit: 5 },
  { label: "MariaDB", orbit: 5 },
  { label: "Git", orbit: 5 },
  { label: "Markdown", orbit: 5 },
  { label: "REST APIs", orbit: 5 },
  { label: "Webhooks", orbit: 5 },
  { label: "HTML", orbit: 5 },
  { label: "CSS", orbit: 5 },
  { label: "VS Code", orbit: 5 },
  { label: "Cursor", orbit: 5 },
  { label: "Obsidian", orbit: 5 },
  { label: "ChatGPT", orbit: 5 },
  { label: "Claude", orbit: 5 },
  { label: "Prompt Engineering", orbit: 5 },
  { label: "Linear", orbit: 5 },
  { label: "Todoist", orbit: 5 },
  { label: "Canva", orbit: 5 },

  // Orbit 6 — advisory / training / media
  { label: "GRC Consulting", orbit: 6 },
  { label: "ISO 27001 Consulting", orbit: 6 },
  { label: "Stakeholder Management", orbit: 6 },
  { label: "Vendor Management", orbit: 6 },
  { label: "Tabletop Exercises", orbit: 6 },
  { label: "Disaster Recovery", orbit: 6 },
  { label: "Business Continuity", orbit: 6 },
  { label: "Report Writing", orbit: 6 },
  { label: "Client Onboarding", orbit: 6 },
  { label: "Phishing Awareness", orbit: 6 },
  { label: "CTF Events", orbit: 6 },
  { label: "Beszel", orbit: 6 },
  { label: "Metabase", orbit: 6 },
  { label: "GoAccess", orbit: 6 },
  { label: "Speedtest Tracker", orbit: 6 },
  { label: "Homer", orbit: 6 },
  { label: "Paperless-ngx", orbit: 6 },
  { label: "Plex", orbit: 6 },
  { label: "OBS Studio", orbit: 6 },
  { label: "yt-dlp", orbit: 6 },
];

export const SKILL_ORBITS: SkillOrbit[] = [
  { size: 78, duration: 85 },
  { size: 88, duration: -105 },
  { size: 98, duration: 125 },
  { size: 108, duration: -145 },
  { size: 118, duration: 165 },
  { size: 128, duration: -185 },
  { size: 138, duration: 210 },
];

/**
 * Horizontal stretch of the orbits (major axis = width), like real
 * elliptical orbits. Mirrored to CSS via `--orbit-stretch` — keep in sync.
 */
export const ORBIT_STRETCH = 1.3;

/**
 * Elliptical position (vmin, center-relative) + tangent rotation (deg)
 * for a node at `baseDeg` after `tSec` seconds. Deterministic, SSR-safe.
 */
export function skillNodeTransform(
  orbit: number,
  baseDeg: number,
  tSec: number
): { x: number; y: number; rot: number } {
  const { size, duration } = SKILL_ORBITS[orbit]!;
  const a = (size / 2) * ORBIT_STRETCH;
  const b = size / 2;
  const omega = (2 * Math.PI) / duration; // signed rad/s
  const th = (baseDeg * Math.PI) / 180 + omega * tSec;
  return {
    x: a * Math.sin(th),
    y: -b * Math.cos(th),
    rot:
      (Math.atan2(
        omega * b * Math.sin(th),
        omega * a * Math.cos(th)
      ) *
        180) /
      Math.PI,
  };
}

/** Inline transform string: translate to ellipse point, rotate to tangent. */
export function skillNodeStyle(
  orbit: number,
  baseDeg: number,
  tSec: number
): string {
  const { x, y, rot } = skillNodeTransform(orbit, baseDeg, tSec);
  return `translate(${x.toFixed(3)}vmin, ${y.toFixed(3)}vmin) rotate(${rot.toFixed(2)}deg)`;
}

export type OrbitNode = SkillNode & {
  angle: number;
};

/** Estimate visual width of a label in relative units.
 * Uppercase constellation labels use proportional font + 0.18em letter-spacing,
 * so raw `length` over-weights spaces/punctuation. This keeps SSR deterministic
 * while making edge-to-edge gaps (not center-to-center) equal. */
export function estimateLabelWidth(label: string): number {
  let w = 0;
  for (const ch of label) {
    if (ch === " ") w += 0.55;
    else if (ch === "." || ch === "," || ch === "'" || ch === ":") w += 0.45;
    else if (ch === "/" || ch === "-" || ch === "&") w += 0.7;
    else if (ch >= "0" && ch <= "9") w += 0.72;
    else w += 1;
  }
  // letter-spacing applies per character
  return w + label.length * 0.18;
}

/** Fixed gap (same units as estimateLabelWidth) placed between label edges. */
export const LABEL_GAP = 2.5;

/** Group nodes per orbit, spaced so edge-to-edge gaps are equal regardless
 * of text length. Each label gets a slot of `width + GAP`; its center sits
 * in the middle of that slot, so longer labels automatically get more arc. */
export function buildOrbitNodes(): OrbitNode[][] {
  return SKILL_ORBITS.map((_, orbit) => {
    const group = SKILL_NODES.filter((n) => n.orbit === orbit);
    const widths = group.map((n) => estimateLabelWidth(n.label));
    const total = widths.reduce((sum, w) => sum + w + LABEL_GAP, 0);
    let cursor = 0;
    return group.map((n, i) => {
      const slot = widths[i]! + LABEL_GAP;
      const center = cursor + slot / 2;
      cursor += slot;
      return {
        ...n,
        angle: (center / total) * 360,
      };
    });
  });
}
