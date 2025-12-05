import { motion } from "framer-motion";

const SOFT_EASE = [0.25, 1, 0.3, 1] as [number, number, number, number];

const HeroSection = () => {
  return (
    <section className="text-white relative overflow-hidden bg-[url('/square.svg')] bg-black bg-cover mt-10 lg:mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          {/* Left content – smooth fade/slide up */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }} // mount-based animation (no whileInView)
            transition={{ duration: 1.4, ease: SOFT_EASE }}
          >
            <div className="space-y-5 max-w-2xl mx-auto lg:mx-0 mt-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
                <span className="text-gray-200">Why Choose</span>{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                  Us ?
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed text-justify  ">
                Your child’s security deserves more than just tracking — it
                deserves a smart, reliable, future-ready platform. ION-Monitor
                gives parents complete visibility into their child’s digital
                world with advanced monitoring tools powered by real-time data,
                AI-based analysis, and seamless cloud sync. Stay informed, stay
                confident, and stay connected with the app trusted by thousands
                of families.
              </p>
            </div>
          </motion.div>

          {/* Right image – responsive */}
          <motion.div
            className="relative z-10 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: SOFT_EASE, delay: 0.1 }}
          >
            <div className="relative max-w-md w-full mt-10">
              <img
                src="/userprofile.png"
                alt="Monitoring Preview"
                className="w-full h-auto rounded-xl lg:rounded-t-[24px]"
              />
              {/* Bottom gradient fade */}
              <div
                className="pointer-events-none absolute inset-x-0 -bottom-1 h-16 bg-linear-to-b from-transparent via-[#000000]/95 to-[#0a0c12]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
