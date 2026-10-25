import type { Metadata } from "next";
import LandingFloatingIcons from "@/components/LandingFloatingIcons";
import SkillOrbits from "@/components/SkillOrbits";

export const metadata: Metadata = {
  title: "Bibek Aryal",
  description:
    "Bibek Aryal — Cybersecurity, GRC, ISO/IEC 27001, Cloud and DevOps.",
  openGraph: {
    title: "Bibek Aryal",
    description:
      "Bibek Aryal — Cybersecurity, GRC, ISO/IEC 27001, Cloud and DevOps.",
    url: "https://bibeka.com.np",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="landing" aria-label="Bibek Aryal">
      <div className="landing__milkyway" aria-hidden="true">
        <div className="landing__milkyway-band" />
        <div className="landing__milkyway-core" />
        <div className="landing__milkyway-dust landing__milkyway-dust--a" />
        <div className="landing__milkyway-dust landing__milkyway-dust--b" />
        <div className="landing__milkyway-dust landing__milkyway-dust--c" />
      </div>
      <h1 className="landing__name">
        <span>BIBEK</span>
        <span>ARYAL</span>
      </h1>
      <LandingFloatingIcons />
      <SkillOrbits />
    </main>
  );
}
