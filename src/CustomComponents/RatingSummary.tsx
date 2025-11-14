import React from "react";
import { Star } from "lucide-react";

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
          key={index}
          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${starClass}`}
        />
      );
    });
  };

  return (
    <div className="relative px-[300px] py-8 mt-4 mb-16">
      {/* Content */}
      <div className="backdrop-blur-2xl rounded-3xl p-16 text-white border border-gray-500">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
          {/* Left Section - Logo & Rating */}
          <div className="text-center lg:text-left w-full lg:w-1/2">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-4">
              <img src="/ionlogo.png" alt="ION Logo" className="h-20 w-auto" />
            </div>

            {/* Rating */}
            <div className="mb-3 ml-10">
              <span className="text-4xl sm:text-5xl ml-10 font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                4.4
              </span>
              <span className="text-xl sm:text-2xl text-gray-300 ml-1">
                / 5.0
              </span>
            </div>

            {/* Stars */}
            <div className="flex justify-center lg:justify-start space-x-1 mb-3 ml-10">
              {renderStars(4.4)}
            </div>

            {/* Review Count */}
            <p className="text-sm sm:text-base text-gray-300 ml-10">
              Based on <span className="font-semibold text-white">5,000+</span>{" "}
              reviews
            </p>
          </div>

          {/* Right Section - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left max-w-full">
            <h3 className="text-xl sm:text-2xl md:text-5xl mb-3 leading-tight">
              Our customers can't stop talking about us.
            </h3>
            <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-2 text-lg text-gray-300">
              <span>Read more than</span>
              <span className="font-bold text-gray-500">1,800</span>
              <span>reviews</span>
              <div className="flex items-center space-x-1">
                {/* <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                <span className="font-semibold text-white">review website</span> */}
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default RatingSummary;
