import Footer from "@/layout/Footer";
import ControlFeatures from "./featureSection";
import FeatureshowCase from "./featureShowCase";
import FinanceHero from "./FinanceHero";
import GradientBackground from "./GradientBackground";
import HeroSection from "./HeroSection";
import InsightsSections from "./InsightsSections";
import RatingSummary from "./RatingSummary";
import ShowcasePanel from "./ShowcasePanel";
import StepsSection from "./StepSection";
import Testimonials from "./Testimonials";

export default function HomePage() {
  const stepsData = [
    {
      heading: "Install ionMonitor App",
      paragraph:
        "Download and install the ionMonitor app on your child’s device in just a few taps.",
      imageSrc: "/1.png",
    },
    {
      heading: "Connect Your Dashboard",
      paragraph:
        "Log in to your secure dashboard and connect the device using your unique license.",
      imageSrc: "/3.png",
    },
    {
      heading: "Monitor & Stay Informed",
      paragraph:
        "View calls, messages, locations and more in real-time with intuitive graphs and logs.",
      imageSrc: "/6.png",
    },
  ];

  return (
    <GradientBackground>
      <HeroSection />
      <ShowcasePanel src="/case1.png" alt="Dashboard Preview" />
      <ControlFeatures />
      <FeatureshowCase />
      <FinanceHero imageSrc="/1.png" />
      <StepsSection
        heading="How ionMonitor Works"
        steps={stepsData}
        ctaLabel="TRY ionMonitor NOW"
        ctaHref="/register"
      />
      <InsightsSections />
      <Testimonials/>
      <RatingSummary/>
      <Footer/>
    </GradientBackground>
  );
}
