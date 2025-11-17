import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white bg-[url('/square.svg')] bg-cover">
      {/* Optional overlay if you want a slight gradient/glow
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      */}

      {/* Floating stars / particles container (you can add later) */}
      <div className="absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-0 py-24 md:py-36 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left text section */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-slate-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Confident Parenting Starts with Smart Monitoring
          </motion.h1>

          <motion.p
            className="text-lg text-slate-300 mb-8"
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
        <div className="relative py-10">
          <motion.img
            src="/1.png"
            alt="Chat preview"
            className="w-[900px] drop-shadow-2xl max-w-2xl"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
