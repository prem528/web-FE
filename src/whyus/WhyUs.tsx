import GradientBackground from "@/CustomComponents/GradientBackground";
import ComparisonSection from "./components/ComparisonSection";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import HistorySection from "./components/HistorySection";
import UniqueSection from "./components/UniqueSection";
import HorizontalCTA from "./components/HorizontalCTA";
  
const WhyUs = () => {
  return (
    <GradientBackground>
      <HeroSection />
      <HorizontalCTA/>
      <HistorySection />
      <FeaturesSection />
      <UniqueSection />
      <ComparisonSection />
    </GradientBackground>  
  );
};

export default WhyUs;
