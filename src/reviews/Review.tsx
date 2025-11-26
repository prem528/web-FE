import Footer from "@/layout/Footer";
import HeroSection from "./HeroSection";
import ReviewCompo from "./ReviewCompo";
import FeaturesSection from "./FeaturesSection";
import RatingSummary from "@/CustomComponents/RatingSummary";
import GradientBackground from "@/CustomComponents/GradientBackground";

export default function Review() {
  return (
    <div>
      <GradientBackground>
        <HeroSection />
        <RatingSummary />
        <FeaturesSection />
        <ReviewCompo />
        <Footer />
      </GradientBackground>
    </div>
  );
}
