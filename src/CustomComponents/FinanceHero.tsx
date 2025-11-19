import React from "react";
import { motion } from "framer-motion";

type FinanceHeroProps = {
  imageSrc: string;
  imageAlt?: string;
};

const FinanceHero: React.FC<FinanceHeroProps> = ({
  imageSrc,
  imageAlt = "Child Monitoring dashboard preview",
}) => {
  return (
    <section className="w-full bg-[url('/topbg11.avif')] bg-cover pt-16 md:pt-30">
      <div className="mx-auto max-w-[1400px] py-12 md:py-20">
        {/* Card container with smooth pop-in */}
        <motion.div
          className="rounded-[32px] backdrop-blur-xl ring-1 ring-black/1 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.25)] px-4 sm:px-8 lg:px-12 py-12 md:py-20"
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:-mt-20">
            {/* LEFT: Text content with stagger */}
            <motion.div
              className="flex-1 text-center lg:text-left"
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
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-100 md:text-slate-300"
              >
                Ready to Track Your{" "} <br/>
                <span className="text-[#5e87e2]">Child Activities?</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="mt-4 text-sm sm:text-base text-slate-100 md:text-slate-300 max-w-xl mx-auto lg:mx-0"
              >
                Protect your child from online risks with smart monitoring tools.
                Track activities in real time, detect unsafe interactions, and
                keep your child’s digital life safe and healthy.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="mt-8"
              >
                <button className="inline-flex items-center justify-center rounded-2xl bg-[#5a85e3] px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-[#1D4ED8] transition-colors">
                  Schedule a Demo
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT: Image (no animation, just clean) */}
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <div className="relative -mt-8 lg:mt-0 w-full flex justify-center">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full max-w-md sm:max-w-lg lg:max-w-[800px] items-center"
                />
                {/* Soft glow behind card */}
                <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-blue-500/5 blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinanceHero;
