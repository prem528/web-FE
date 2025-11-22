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
import WorldGlobe from "./worldGlobe";

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

      <div className="flex py-28">
        <div className="">
          <WorldGlobe />
        </div>

        <div className="space-y-6 ml-12 mr-30 border border-slate-800 p-8 rounded-2xl py-6 pb-18 bg-white/6 backdrop-blur-md ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-sm">
            Worldwide Access
          </div>

          {/* Heading */}
          <div className="space-y-10">
            <h2 className="text-5xl tracking-tight text-slate-200 leading-tight">
              Global monitoring made{" "}
              <span className="text-blue-600">simple</span> and{" "}
              <span className="text-blue-600"> seamless.</span>
            </h2>

            <p className="max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
              ION-MONITOR works{" "}
              <span className="font-medium text-slate-100">
                in every country and every region
              </span>
              —without limitations. Whether your child or device is in India,
              Dubai, UK, USA, or anywhere across the globe, our system ensures
              uninterrupted tracking and real-time syncing.
              <br />
              <br />
              Powered by advanced cloud infrastructure, ION-MONITOR connects
              instantly from any location, supports all major networks, and
              adapts to international signals with ease. No matter where life
              takes your family, you stay updated with accurate insights, fast
              data syncing, and secure access from anywhere in the world.
              <br />
              <br />
              With global reliability, multi-region support, and a dashboard
              that works perfectly from any timezone, ION-MONITOR ensures you’re
              always connected, always aware, and always in control — no
              borders, no restrictions.
            </p>
          </div>
        </div>
      </div>

      <ShowcasePanel src="/case1.png" alt="Dashboard Preview" />
      <ControlFeatures />
      <FeatureshowCase />
      <FinanceHero imageSrc="/screen2.png" />
      <StepsSection heading="How ionMonitor Works" steps={stepsData} />
      <InsightsSections />
      <Testimonials />
      <RatingSummary />

      <Footer />
    </GradientBackground>
  );
}
