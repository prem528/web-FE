import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white bg-[url('/square.svg')] bg-cover">
 
      <div className="relative max-w-7xl mx-auto mb-10 mt-10 px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* Left text section */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight mb-6 mt-8 text-slate-500 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Confident Parenting Starts with Smart Monitoring
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto md:mx-0 text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Monitor calls, chats, apps, and location in real time. Stay connected,
            stay informed, and keep your child safe in the digital world – all from
            one powerful dashboard.
          </motion.p>
        </motion.div>

        {/* Right image */}
        <div className="relative py-6 sm:py-10 w-full flex justify-center md:justify-end">
          <motion.img
            src="/1.png"
            alt="Chat preview"
            className="w-full max-w-md sm:max-w-lg lg:max-w-2xl drop-shadow-2xl"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
