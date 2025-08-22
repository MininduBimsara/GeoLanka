import Hero from "../components/HomePage/Hero";
import KeyFeaturesGrid from "../components/HomePage/KeyFeaturesGrid";
import ImpactStatistics from "../components/HomePage/ImpactStatistics";
import CallToActionSection from "../components/HomePage/CallToActionSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <KeyFeaturesGrid />
      <ImpactStatistics />
      <CallToActionSection />
    </main>
  );
}
