import { motion } from "framer-motion";

const SOFT_EASE = [0.25, 1, 0.3, 1] as [number, number, number, number];

const HeroSection = () => {

  return (
    <section className="text-white py-20 px-6 relative overflow-hidden bg-[url('/square.svg')] bg-black bg-cover">
 

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-10">
        {/* Left content – smooth fade/slide up */}
        <motion.div
          className="space-y-8 -mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: SOFT_EASE }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="space-y-5 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
              <span className="text-gray-200">Why Choose</span>{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                Us ?
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed text-justify">
              Your child’s security deserves more than just tracking — it
              deserves a smart, reliable, future-ready platform. ION-Monitor
              gives parents complete visibility into their child’s digital world
              with advanced monitoring tools powered by real-time data, AI-based
              analysis, and seamless cloud sync. Stay informed, stay confident,
              and stay connected with the app trusted by thousands of families.
            </p>
          </div>
        </motion.div>

        {/* Right image */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <img
            src="/userprofile.png"
            alt="Monitoring Preview"
            width={550}
            height={150}
            className="rounded-t-[24px]"
          />
          {/* Bottom gradient fade */}
          <div
            className="pointer-events-none absolute inset-x-0 -bottom-1 h-20
           bg-linear-to-b from-transparent via-[#000000]/99 to-[#0a0c12] backdrop"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
