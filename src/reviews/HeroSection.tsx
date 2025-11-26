import { motion } from "framer-motion";

const SOFT_EASE = [0.25, 1, 0.3, 1] as [number, number, number, number];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white bg-[url('/square.svg')] bg-black bg-cover px-10 -mt-10">
      <div className="relative max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 -mb-18 lg:gap-16 ">
        {/* Left text section */}
        <motion.div
          className="space-y-5 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: SOFT_EASE }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight ml-28">
            <span className="block text-white text-8xl">Customers</span>

            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400 whitespace-nowrap">
              Reviews & Feedback
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-lg ml-28">
            Real stories from real users — See how ION-MONITOR helps parents
            stay connected.
          </p>
        </motion.div>

        {/* Right image */}
        <div className="w-full md:w-7/12 flex justify-center md:justify-end">
          <div className="w-full max-w-xl lg:max-w-6xl p-4">
            <img
              src="/review.png"
              alt="Chat preview"
              className="w-full h-auto drop-shadow-2xl rounded-xl"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
