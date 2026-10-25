"use client";

import { useEffect, useRef, useState } from "react";
import {
  buildOrbitNodes,
  ORBIT_STRETCH,
  SKILL_ORBITS,
  skillNodeStyle,
} from "@/lib/skills";

/**
 * Skill constellation — verbatim skill names from `bibek - skills.md`
 * drifting on elliptical orbits around the name. Text-only labels,
 * rotated to the path tangent. Decorative (aria-hidden);
 * static when prefers-reduced-motion.
 */
export default function SkillOrbits() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const sysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const root = sysRef.current;
    if (!root) return;
    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-o]")
    ).map((el) => ({
      el,
      o: Number(el.dataset.o),
      base: Number(el.dataset.a),
    }));
    let raf = 0;
    let last = performance.now();
    let t = 0;
    const tick = (now: number) => {
      t += Math.min((now - last) / 1000, 0.1);
      last = now;
      for (const { el, o, base } of nodes) {
        el.style.transform = skillNodeStyle(o, base, t);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  const orbits = buildOrbitNodes();

  return (
    <div
      ref={sysRef}
      className="skill-system"
      aria-hidden
      style={{ ["--orbit-stretch" as string]: String(ORBIT_STRETCH) }}
    >
      {orbits.map((nodes, oi) => (
        <div
          key={oi}
          className={`skill-orbit${oi >= 2 ? " skill-orbit--outer" : ""}${
            oi === 0 ? " skill-orbit--inner" : ""
          }`}
          style={{
            ["--orbit-size" as string]: `${SKILL_ORBITS[oi]!.size}vmin`,
          }}
        >
          {nodes.map(({ label, angle }) => (
            <span
              key={label}
              className="skill-node-pos"
              data-o={oi}
              data-a={angle}
              style={{ transform: skillNodeStyle(oi, angle, 0) }}
            >
              <span className="skill-node-text">{label}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
