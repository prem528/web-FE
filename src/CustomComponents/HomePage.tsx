import { Suspense, lazy } from "react";
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
import { motion } from "framer-motion";
const WorldGlobe = lazy(() => import("./worldGlobe"));

export default function HomePage() {
  const stepsData = [
    {
      heading: "Install ionMonitor App",
      paragraph:
        "Download and install the ionMonitor app on your child’s device in just a few taps.",
      imageSrc: "/4.png",
    },
    {
      heading: "Connect Your Dashboard",
      paragraph:
        "Log in to your secure dashboard and connect the device using your unique license.",
      imageSrc: "/9.png",
    },
    {
      heading: "Monitor & Stay Informed",
      paragraph:
        "View calls, messages, locations and more in real-time with intuitive graphs and logs.",
      imageSrc: "/7878.png",
    },
  ];

  return (
    <GradientBackground>
      <HeroSection />
      <section className="w-full bg-[#020512]">
        <div className="mx-auto max-w-[1500px] py-12 md:py-20">
          {/* Card container with smooth pop-in (same feel as FinanceHero) */}
          <motion.div className="rounded-[32px] backdrop-blur-xl ring-1 ring-white/10 border border-slate-800 bg-white/5 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.5)] px-4 sm:px-8 lg:px-12 py-12 md:py-20">
            <div className="flex flex-col lg:flex-row items-center">
              {/* LEFT: Globe with subtle motion */}
              <div className="flex-1 flex justify-center lg:justify-start">
                <div className="relative">
                  <Suspense
                    fallback={
                      <div className="h-[320px] w-[320px] rounded-full bg-slate-900/60 border border-slate-700/60 animate-pulse" />
                    }
                  >
                    <WorldGlobe />
                  </Suspense>
                  {/* Soft glow behind globe */}
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-blue-500/20 blur-3xl -z-10" />
                </div>
              </div>

              {/* RIGHT */}
              <motion.div
                className="flex-1 space-y-6 lg:max-w-3xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {/* Label */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-sm"
                >
                  Worldwide Access
                </motion.div>

                {/* Heading */}
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-200 leading-tight"
                >
                  Global monitoring made{" "}
                  <span className="text-blue-600">simple</span> and{" "}
                  <span className="text-blue-600">seamless.</span>
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify"
                >
                  ION-MONITOR works{" "}
                  <span className="font-medium text-slate-100">
                    in every country and every region
                  </span>
                  —without limitations. Whether your child or device is in
                  India, Dubai, UK, USA, or anywhere across the globe, our
                  system ensures uninterrupted tracking and real-time syncing.
                  <br />
                  <br />
                  Powered by advanced cloud infrastructure, ION-MONITOR connects
                  instantly from any location, supports all major networks, and
                  adapts to international signals with ease. No matter where
                  life takes your family, you stay updated with accurate
                  insights, fast data syncing, and secure access from anywhere
                  in the world.
                  <br />
                  <br />
                  With global reliability, multi-region support, and a dashboard
                  that works perfectly from any timezone, ION-MONITOR ensures
                  you’re always connected, always aware, and always in control —
                  no borders, no restrictions.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <ShowcasePanel src="/desktop1.png" alt="Dashboard Preview" />
      <ControlFeatures />
      <FeatureshowCase />
      <FinanceHero imageSrc="/screen3.png" />
      <StepsSection heading="How ionMonitor Works" steps={stepsData} />
      <InsightsSections />
      <Testimonials />
      <RatingSummary />
  
    </GradientBackground>
  );
}
