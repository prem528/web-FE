import React, { useState, memo } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Gupta",
    position: "Customer",
    image: "/user.png",
    text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
  },
  {
    name: "Aarav",
    position: "Customer",
    image: "/user.png",
    text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
  },
  {
    name: "Amelia Joseph",
    position: "Customer",
    image: "/user.png",
    text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
  },
  {
    name: "Rohan Sharma",
    position: "Customer",
    image: "/user.png",
    text: "Smooth experience from start to finish. The dashboard is clean, modern and gives me exactly what I need without confusion.",
  },
  {
    name: "Zoya Khan",
    position: "Customer",
    image: "/user.png",
    text: "I was worried about complexity, but ionMonitor made everything so simple. The real-time insights are genuinely useful.",
  },
];

const Testimonials: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 overflow-hidden bg-[#020512]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-28 py-12">
        <motion.h2
          className="text-5xl text-gray-400 text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          What Our Clients Said About Us
        </motion.h2>

        <div className="relative">
          {/* Scroll area */}
          <div
            className="overflow-hidden"
            aria-label="Testimonials carousel"
            tabIndex={0}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {/* Track: duplicated testimonials for seamless loop */}
            <div
              className="testimonials-track"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`testimonial-${index}-${testimonial.name}`}
                  className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-80 mx-2 sm:mx-4 h-100"
                >
                  <div className="bg-[#082236] rounded-lg shadow-md p-4 sm:p-6 h-full">
                    <div className="flex flex-col sm:flex-row items-center mb-8">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mb-2 sm:mb-0 sm:mr-4"
                        loading="lazy"
                      />
                      <div className="text-center sm:text-left">
                        <h4 className="font-bold text-white text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-white text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-white text-sm sm:text-base">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LEFT FADE */}
          <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#090b12] via-[#090b12] to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#090b12] via-[#090b12] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
