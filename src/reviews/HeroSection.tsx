import { motion } from "framer-motion";

const SOFT_EASE = [0.25, 1, 0.3, 1] as [number, number, number, number];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white bg-[url('/square.svg')] bg-black bg-cover mt-20 lg:-mt-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                      flex flex-col md:flex-row     /* ← FIXED HERE */
                      items-center justify-between 
                      gap-10 lg:gap-16">

        {/* Left text section */}
        <motion.div
          className="space-y-5 max-w-2xl text-center md:text-left mt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: SOFT_EASE }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight md:ml-16">
            <span className="block text-white text-4xl sm:text-5xl lg:text-7xl">
              Customers
            </span>

            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400 whitespace-nowrap">
              Reviews & Feedback
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg mx-auto md:mx-0 md:ml-16">
            Real stories from real users — See how ION-MONITOR helps parents
            stay connected.
          </p>
        </motion.div>

        {/* Right image */}
        <div className="w-full md:w-7/12 flex justify-center md:justify-end -mt-10">
          <div className="w-full max-w-full md:max-w-xl lg:max-w-6xl">
            <img
              src="/review.png"
              alt="Chat preview"
              className="
                w-full 
                h-[70vh]
                sm:h-[75vh]
                md:h-auto
                object-cover 
                drop-shadow-2xl 
                rounded-xl
              "
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
