import type { ComponentType, SVGProps } from "react";
import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiAnydesk,
  SiAuthentik,
  SiAutohotkey,
  SiBurpsuite,
  SiClaude,
  SiCloudflare,
  SiCloudflareworkers,
  SiCss,
  SiCursor,
  SiDavinciresolve,
  SiDebian,
  SiDocker,
  SiFedora,
  SiFilezilla,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGmail,
  SiGnubash,
  SiGoogle,
  SiGoogleappsscript,
  SiGoogledrive,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiKalilinux,
  SiKeycloak,
  SiLetsencrypt,
  SiLinear,
  SiLinux,
  SiMariadb,
  SiMarkdown,
  SiMdx,
  SiMetabase,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNginxproxymanager,
  SiNodedotjs,
  SiNpm,
  SiObsidian,
  SiObsstudio,
  SiOpenid,
  SiOpenjdk,
  SiOwasp,
  SiPaperlessngx,
  SiPihole,
  SiPlex,
  SiPortainer,
  SiPostgresql,
  SiProxmox,
  SiPython,
  SiRclone,
  SiReact,
  SiRedhat,
  SiResend,
  SiRustdesk,
  SiSpeedtest,
  SiSqlite,
  SiSupabase,
  SiSyncthing,
  SiTailscale,
  SiTailwindcss,
  SiTodoist,
  SiTypescript,
  SiUbuntu,
  SiUptimekuma,
  SiVaultwarden,
  SiVercel,
  SiVikunja,
  SiVirtualbox,
  SiVmware,
  SiWireshark,
  SiYoutube,
  SiZoho,
} from "react-icons/si";
import {
  Iso27001Icon,
  NmapIcon,
  PciDssIcon,
  ZabbixIcon,
} from "@/components/icons/security-tools";

export type SkyIconComponent =
  | IconType
  | ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

/** Star magnitude: 1 = the few large bright ones, 3 = the many faint ones. */
type Magnitude = 1 | 2 | 3;

type IconSeed = { Icon: SkyIconComponent; mag: Magnitude };

export type SkyIconSpec = {
  Icon: SkyIconComponent;
  mag: Magnitude;
  /** Percent of the viewport. */
  top: number;
  left: number;
  size: number;
  /** Opacity while "out" and at the peak of the twinkle. */
  lo: number;
  hi: number;
  rotate: number;
  driftX: number;
  driftY: number;
  driftDuration: number;
  twinkleDuration: number;
  /** Negative, so every star starts mid-cycle instead of in unison. */
  twinkleDelay: number;
  /** Faint extras dropped on small screens to keep the sky sparse. */
  wideOnly: boolean;
};

/**
 * Only tools and technologies from `bibek - skills.md`. Brand marks come from
 * Simple Icons; the four without one are authored in `components/icons`.
 */
const SEEDS: IconSeed[] = [
  // Brightest — the everyday core
  { Icon: SiLinux, mag: 1 },
  { Icon: SiDocker, mag: 1 },
  { Icon: SiCloudflare, mag: 1 },
  { Icon: SiBurpsuite, mag: 1 },
  { Icon: NmapIcon, mag: 1 },
  { Icon: Iso27001Icon, mag: 1 },
  { Icon: SiProxmox, mag: 1 },
  { Icon: SiNextdotjs, mag: 1 },
  { Icon: SiSupabase, mag: 1 },
  { Icon: SiPython, mag: 1 },

  // Mid
  { Icon: SiKalilinux, mag: 2 },
  { Icon: SiWireshark, mag: 2 },
  { Icon: SiOwasp, mag: 2 },
  { Icon: PciDssIcon, mag: 2 },
  { Icon: SiUbuntu, mag: 2 },
  { Icon: SiDebian, mag: 2 },
  { Icon: SiGnubash, mag: 2 },
  { Icon: SiNginx, mag: 2 },
  { Icon: SiTailscale, mag: 2 },
  { Icon: ZabbixIcon, mag: 2 },
  { Icon: SiUptimekuma, mag: 2 },
  { Icon: SiVercel, mag: 2 },
  { Icon: SiGithub, mag: 2 },
  { Icon: SiGithubactions, mag: 2 },
  { Icon: SiPostgresql, mag: 2 },
  { Icon: SiReact, mag: 2 },
  { Icon: SiTailwindcss, mag: 2 },
  { Icon: SiKeycloak, mag: 2 },
  { Icon: SiVaultwarden, mag: 2 },
  { Icon: SiPihole, mag: 2 },
  { Icon: SiClaude, mag: 2 },
  { Icon: SiObsidian, mag: 2 },

  // Faint
  { Icon: SiFedora, mag: 3 },
  { Icon: SiRedhat, mag: 3 },
  { Icon: SiNginxproxymanager, mag: 3 },
  { Icon: SiCloudflareworkers, mag: 3 },
  { Icon: SiVmware, mag: 3 },
  { Icon: SiVirtualbox, mag: 3 },
  { Icon: SiPortainer, mag: 3 },
  { Icon: SiGit, mag: 3 },
  { Icon: SiJavascript, mag: 3 },
  { Icon: SiTypescript, mag: 3 },
  { Icon: SiOpenjdk, mag: 3 },
  { Icon: SiHtml5, mag: 3 },
  { Icon: SiCss, mag: 3 },
  { Icon: SiMarkdown, mag: 3 },
  { Icon: SiMdx, mag: 3 },
  { Icon: SiJson, mag: 3 },
  { Icon: SiNodedotjs, mag: 3 },
  { Icon: SiNpm, mag: 3 },
  { Icon: SiMysql, mag: 3 },
  { Icon: SiMariadb, mag: 3 },
  { Icon: SiSqlite, mag: 3 },
  { Icon: SiCursor, mag: 3 },
  { Icon: SiAuthentik, mag: 3 },
  { Icon: SiOpenid, mag: 3 },
  { Icon: SiLetsencrypt, mag: 3 },
  { Icon: SiGoogle, mag: 3 },
  { Icon: SiGmail, mag: 3 },
  { Icon: SiGoogledrive, mag: 3 },
  { Icon: SiGoogleappsscript, mag: 3 },
  { Icon: SiZoho, mag: 3 },
  { Icon: SiResend, mag: 3 },
  { Icon: SiMetabase, mag: 3 },
  { Icon: SiSpeedtest, mag: 3 },
  { Icon: SiRclone, mag: 3 },
  { Icon: SiSyncthing, mag: 3 },
  { Icon: SiFilezilla, mag: 3 },
  { Icon: SiPaperlessngx, mag: 3 },
  { Icon: SiPlex, mag: 3 },
  { Icon: SiVikunja, mag: 3 },
  { Icon: SiAutohotkey, mag: 3 },
  { Icon: SiAnthropic, mag: 3 },
  { Icon: SiGooglegemini, mag: 3 },
  { Icon: SiLinear, mag: 3 },
  { Icon: SiTodoist, mag: 3 },
  { Icon: SiDavinciresolve, mag: 3 },
  { Icon: SiObsstudio, mag: 3 },
  { Icon: SiYoutube, mag: 3 },
  { Icon: SiAnydesk, mag: 3 },
  { Icon: SiRustdesk, mag: 3 },
];

/** Seeded PRNG so server and client render the same sky. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SIZE: Record<Magnitude, [number, number]> = {
  1: [26, 34],
  2: [16, 21],
  3: [9, 13],
};
const LO: Record<Magnitude, [number, number]> = {
  1: [0.07, 0.11],
  2: [0.04, 0.08],
  3: [0.02, 0.05],
};
const HI: Record<Magnitude, [number, number]> = {
  1: [0.55, 0.75],
  2: [0.45, 0.62],
  3: [0.28, 0.42],
};

/**
 * Keep stars out of the core the name covers in every aspect ratio, and out
 * of the strips at the head and foot where the links sit.
 */
function inCore(x: number, y: number): boolean {
  if ((y > 86 || y < 9) && x > 8 && x < 92) return true;
  const dx = (x - 50) / 30;
  const dy = (y - 50) / 13;
  return dx * dx + dy * dy < 1;
}

function buildSky(seeds: IconSeed[]): SkyIconSpec[] {
  const rand = mulberry32(0xb1b);
  const range = ([min, max]: [number, number]) => min + rand() * (max - min);
  const placed: { x: number; y: number }[] = [];

  // Seeds are ordered bright → faint, so the big stars spread out first.
  return seeds.map(({ Icon, mag }) => {
    // Best-candidate sampling: irregular like a real sky, but never clumped.
    let best = { x: 50, y: 5 };
    let bestDist = -1;
    for (let c = 0; c < 14; c++) {
      const x = 3 + rand() * 94;
      const y = 4 + rand() * 92;
      if (inCore(x, y)) continue;
      let nearest = Infinity;
      for (const p of placed) {
        // Weight x by a typical landscape ratio so spacing looks even.
        const d = Math.hypot((x - p.x) * 1.6, y - p.y);
        if (d < nearest) nearest = d;
      }
      if (nearest > bestDist) {
        bestDist = nearest;
        best = { x, y };
      }
    }
    placed.push(best);

    const twinkleDuration = range(mag === 1 ? [11, 19] : [7, 17]);
    return {
      Icon,
      mag,
      top: Number(best.y.toFixed(2)),
      left: Number(best.x.toFixed(2)),
      size: Math.round(range(SIZE[mag])),
      lo: Number(range(LO[mag]).toFixed(3)),
      hi: Number(range(HI[mag]).toFixed(3)),
      rotate: Number(range([-8, 8]).toFixed(1)),
      driftX: Math.round(range([-7, 7])),
      driftY: Math.round(range([-7, 7])),
      driftDuration: Number(range([46, 80]).toFixed(1)),
      twinkleDuration: Number(twinkleDuration.toFixed(1)),
      twinkleDelay: Number((-rand() * twinkleDuration).toFixed(1)),
      wideOnly: mag === 3 && rand() > 0.6,
    };
  });
}

export const SKY_ICONS: SkyIconSpec[] = buildSky(SEEDS);

/**
 * Plain point stars behind the icons, drawn as one element's box-shadow list
 * (vw/vh offsets) so the dust costs a single static layer.
 */
export const SKY_DUST: string = (() => {
  const rand = mulberry32(0x5eed);
  return Array.from({ length: 120 }, () => {
    const x = (rand() * 100).toFixed(2);
    const y = (rand() * 100).toFixed(2);
    const big = rand() > 0.86;
    const alpha = (big ? 0.34 + rand() * 0.2 : 0.1 + rand() * 0.2).toFixed(2);
    return `${x}vw ${y}vh 0 ${big ? "0.5px" : "0"} rgba(226, 228, 255, ${alpha})`;
  }).join(", ");
})();
