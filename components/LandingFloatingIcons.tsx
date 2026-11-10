import type { CSSProperties } from "react";
import { SKY_DUST, SKY_ICONS } from "@/lib/landing-floating-icons";

/**
 * Night sky of tool/technology icons: each one drifts a few pixels and
 * lights up, then goes out, on its own clock. Pure CSS — no client JS.
 * Decorative, so hidden from assistive tech.
 */
export default function LandingFloatingIcons() {
  return (
    <div className="sky" aria-hidden="true">
      <div className="sky__dust" style={{ boxShadow: SKY_DUST }} />
      {SKY_ICONS.map(({ Icon, ...s }, index) => (
        <span
          key={index}
          className={`sky__star sky__star--m${s.mag}${
            s.wideOnly ? " sky__star--wide" : ""
          }`}
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              "--rot": `${s.rotate}deg`,
              "--dx": `${s.driftX}px`,
              "--dy": `${s.driftY}px`,
              "--drift": `${s.driftDuration}s`,
              "--lo": s.lo,
              "--hi": s.hi,
              "--twinkle": `${s.twinkleDuration}s`,
              "--twinkle-delay": `${s.twinkleDelay}s`,
            } as CSSProperties
          }
        >
          <Icon size={s.size} className="sky__glyph" />
        </span>
      ))}
    </div>
  );
}
