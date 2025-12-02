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
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
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
            className={`grid items-center gap-8 sm:gap-10 p-4 sm:p-6 lg:p-8 md:grid-cols-2 ${
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
                className="text-4xl text-gray-200 leading-tight mb-4"
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
                className="text-base sm:text-lg text-justify text-slate-500"
              >
                {description}
              </motion.p>

              {/* <motion.button
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
              </motion.button> */}
            </motion.div>

            {/* Image */}
            <div className="relative flex justify-center px-4 sm:px-0 -mb-4 md:-mb-6 lg:-mb-8">
              <img
                src={imageSrc}
                alt={imageAlt}
                style={{
                  width: "100%",
                  maxWidth: imageWidth || "460px",
                }}
                className="rounded-t-2xl drop-shadow-2xl h-auto"
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
    <div className="w-full bg-[#020512]">
      <FeatureBlock
        title="Real-Time Safety Insights"
        description="Stay instantly informed with real-time updates directly from your child’s smartphone.
        Every activity—whether it's location changes, app usage, captured photos, or device movements is synced live to your dashboard within seconds.
        This continuous stream of insights helps you understand your child’s surroundings, identify potential risks early, and take timely action to ensure their safety and well-being at all times."
        imageSrc="/phoness.png"
        imageAlt="Real-time insights preview"
        imageWidth="380px"
      />

      <FeatureBlock
        title="All-in-One Profile View"
        description="Access a complete and organized profile view of your child’s device, including phone details, sync status, installed applications, activity history, and recent monitoring data.
         Everything is neatly arranged so parents can review important information without confusion. The dashboard gives a holistic understanding of device behavior, helping you track patterns, analyze trends, and confidently stay connected to your child’s digital environment."
        imageSrc="/userprofile.png"
        imageAlt="Data-driven decisions preview"
        imageWidth="500px"
        reversed
      />
    </div>
  );
};

export default InsightsSections;
