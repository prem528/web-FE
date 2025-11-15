import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
 

type Step = {
  heading: string;
  paragraph: string;
  imageSrc: string;
};

type StepsSectionProps = {
  heading: string;
  steps: Step[];
};

const StepsSection = ({
  heading,
  steps,
 
}: StepsSectionProps) => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-rotate active step
  useEffect(() => {
    if (!steps.length) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [steps.length]);

  // Progress bar based on active step
  const progressFraction =
    steps.length <= 1 ? 1 : activeStep / (steps.length - 1 || 1);

  return (
    <div className="pb-16  px-4 sm:px-6 lg:px-8 text-justify">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Transition */}
          {/* Left Side - Image with Transition */}
          <div className="justify-center items-center w-full relative h-[540px] hidden lg:block">
            {steps.length > 0 && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={steps[activeStep].imageSrc}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={steps[activeStep].imageSrc}
                    alt={steps[activeStep].heading}
                    className="rounded-xl max-w-[90%] max-h-[90%] object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Right Side - Step Content */}
          <div className="space-y-10">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl text-gray-400">
                {heading}
              </h2>
            </div>

            <div className="space-y-10 relative">
              {/* Line */}
              <div className="absolute left-5 sm:h-[calc(80%-1rem)] w-1 bg-blue-100 z-0">
                <div
                  className="h-full w-full bg-blue-400 rounded-full origin-top transition-transform duration-300"
                  style={{ transform: `scaleY(${progressFraction})` }}
                />
              </div>

              {steps.map((step, index) => (
                <div
                  key={1}
                  className="flex right-0.5 items-start space-x-4 relative transition-all duration-500"
                >
                  {/* Animated Number Circle */}
                  <motion.div
                    animate={{
                      backgroundColor:
                        activeStep === index ? "#193cb8" : "#3b82f6",
                      scale: activeStep === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg z-10"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Step Text */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-2">
                      {step.heading}
                    </h3>
                    <p className="text-gray-100 leading-relaxed text-sm sm:text-base text-justify">
                      {step.paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 text-center lg:text-left">
              {/* <Button className="bg-linear-to-r from-cyan-500 to-blue-500 py-6 px-10 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-md text-lg transition-all duration-300 shadow-md">
                <Link to={ctaHref}>{ctaLabel}</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
