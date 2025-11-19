import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (!isPaused) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }

      if (progress < 30000) {
        // Run for 30 seconds
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  const testimonials = [
    {
      name: "Priya Gupta",
      position: "Customer",
      image: "/user.png",
      text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    },
    {
      name: "Aarav ",
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
      name: "Amelia Joseph",
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
    // Add more testimonials here
  ];

  return (
    <section className="py-20 overflow-hidden ">
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
          {/* SCROLL AREA */}
          {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */}
          <section
            ref={scrollRef}
            className="flex overflow-x-hidden"
            aria-label="Testimonials carousel"
            tabIndex={0}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                setIsPaused(!isPaused);
              }
            }}
          >
            <div className="flex">
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
          </section>
          {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */}

          {/* LEFT FADE */}
          <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-[#090b12] via-[#090b12] to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-[#090b12] via-[#090b12] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
