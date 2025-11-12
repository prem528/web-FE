import ControlFeatures from "./featureSection";
import GradientBackground from "./GradientBackground";
import HeroSection from "./HeroSection";
import ShowcasePanel from "./ShowcasePanel";

export default function HomePage() {
  return (
    <GradientBackground>
      <HeroSection />
      <ShowcasePanel src="/case1.png" alt="Dashboard Preview" />
      <ControlFeatures/>
    </GradientBackground>
  );
}
