import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const RatingSummary: React.FC = () => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return Array.from({ length: 5 }).map((_, index) => {
      let starClass = "text-gray-400";

      if (index < fullStars) {
        starClass = "text-yellow-400 fill-yellow-400";
      } else if (index === fullStars && hasHalfStar) {
        starClass = "text-yellow-400 fill-yellow-400 opacity-50";
      }

      return (
        <Star
          key={1}
          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${starClass}`}
        />
      );
    });
  };

  return (
    <div className="relative px-4 sm:px-8 lg:px-24 xl:px-40 py-8 mt-4 mb-16">
      {/* Card with smooth pop-in */}
      <motion.div
        className="backdrop-blur-2xl rounded-3xl p-6 sm:p-10 lg:p-16 text-white border border-gray-500"
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
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
          {/* Left Section */}
          <motion.div
            className="text-center lg:text-left w-full lg:w-1/2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <div className="flex justify-center lg:justify-start mb-4">
              <img src="/ionlogo.png" alt="ION Logo" className="h-20 w-auto" />
            </div>

            <div className="mb-3 lg:ml-10">
              <span className="text-4xl sm:text-5xl lg:ml-10 font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                4.4
              </span>
              <span className="text-xl sm:text-2xl text-gray-300 ml-1">
                / 5.0
              </span>
            </div>

            <div className="flex justify-center lg:justify-start space-x-1 mb-3 lg:ml-10">
              {renderStars(4.4)}
            </div>

            <p className="text-sm sm:text-base text-gray-300 lg:ml-10">
              Based on <span className="font-semibold text-white">5,000+</span>{" "}
              reviews
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left max-w-full"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <h3 className="text-xl sm:text-2xl md:text-5xl mb-3 leading-tight">
              Our customers can&apos;t stop talking about us.
            </h3>
            <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-2 text-lg text-gray-300">
              <span>Read more than</span>
              <span className="font-bold text-gray-500">1,800</span>
              <span>reviews</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RatingSummary;
