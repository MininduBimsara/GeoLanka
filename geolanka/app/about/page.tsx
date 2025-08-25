import { AboutSection } from "@/components/About/About";
import { ChallengesSection } from "@/components/About/Challenges";
import AboutHeroHeader from "@/components/About/Hero";
import { ImpactSection } from "@/components/About/Impact";
import { MissionSection } from "@/components/About/Missionselection";

export default function About() {
  return (
    <main>
      {/* <AboutSection/> */}
      <AboutHeroHeader />
      <MissionSection />
      <ChallengesSection />
      <ImpactSection />
    </main>
  );
}
