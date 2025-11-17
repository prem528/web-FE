import React from "react";
import { motion } from "framer-motion";

type FeatureBlockProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reversed?: boolean;
  imageWidth?: string;
};

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "Preview",
  reversed,
  imageWidth
}) => {
  return (
    <section className="relative overflow-hidden text-white bg-cover">
      <div className="absolute inset-0 pointer-events-none" />

      {/* Smooth card animation */}
      <motion.div
        className="relative mx-auto max-w-6xl px-6 lg:px-8 py-14"
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          <div
            className={`grid items-center gap-10 p-4 md:p-2 ml-8 md:grid-cols-2 ${
              reversed ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            {/* Animated text area */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
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
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="text-4xl sm:text-5xl text-gray-200 leading-tight mb-4"
              >
                {title}
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="text-base sm:text-lg text-slate-500"
              >
                {description}
              </motion.p>

              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-black/10 hover:bg-slate-50"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Image (no animation, stays clean) */}
            <div className="relative flex justify-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                style={{ width: imageWidth || "40px" }}
                className="rounded-xl drop-shadow-2xl"
              />
              <div className="pointer-events-none absolute -inset-2 -z-10 rounded-xl bg-white/8 blur-2xl" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const InsightsSections: React.FC = () => {
  return (
    <div className="w-full">
      <FeatureBlock
        title="Real-Time insights"
        description="Access real-time data instantly to make quick decisions and adapt swiftly to market shifts."
        imageSrc="/4.png"
        imageAlt="Real-time insights preview"
        imageWidth="460px"
      />

      <FeatureBlock
        title="Data-Driven decisions"
        description="Make confident decisions with comprehensive data analysis, minimizing guesswork."
        imageSrc="/9.png"
        imageAlt="Data-driven decisions preview"
        imageWidth="420px"
        reversed
      />
    </div>
  );
};

export default InsightsSections;
