
import HeroSection from "./HeroSection";
import ReviewCompo from "./ReviewCompo";
 
import RatingSummary from "@/CustomComponents/RatingSummary";
import GradientBackground from "@/CustomComponents/GradientBackground";
import ReviewSection from "./ReviewSection";

export default function Review() {
  return (
    <div>
      <GradientBackground>
        <HeroSection />
        <RatingSummary />
        <ReviewSection/>
        <ReviewCompo />
      </GradientBackground>
    </div>
  );
}
