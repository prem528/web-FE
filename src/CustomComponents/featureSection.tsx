import { useState } from "react";
import {
  ChevronDown,
  Camera,
  Mic,
  Phone,
  Search,
  FullscreenIcon,
  Video,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ControlFeatures = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(
    "screenshots"
  );

  const features = [
    {
      id: "screenshots",
      title: "Capture Screenshots",
      icon: <FullscreenIcon className="w-5 h-5" />,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      description:
        "Capture screenshots of the target phone remotely, knowing what they are viewing, chatting, or playing.",
    },
    {
      id: "record-screen",
      title: "Record Screen",
      icon: <Video className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      description:
        "Record the screen activity to see exactly what happens on the target device.",
    },
    {
      id: "record-surround",
      title: "Record Surround",
      icon: <Mic className="w-5 h-5" />,
      color: "text-green-500",
      bgColor: "bg-green-100",
      description:
        "Record the surrounding environment to understand the context and location.",
    },
    {
      id: "take-photos",
      title: "Take Photos",
      icon: <Camera className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      description:
        "Remotely take photos using the target phone's camera without detection.",
    },
    {
      id: "record-calls",
      title: "Record Calls",
      icon: <Phone className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      description:
        "Record incoming and outgoing calls to monitor communication activities.",
    },
    {
      id: "track-keywords",
      title: "Track Keywords",
      icon: <Search className="w-5 h-5" />,
      color: "text-red-500",
      bgColor: "bg-red-100",
      description:
        "Monitor specific keywords in messages and communications for safety concerns.",
    },
  ];

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <div className="mt-26 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],  
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl text-slate-600 mb-4">
            Real-Time Safety For Your Child
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Manage and monitor your child’s device with powerful remote-control
            tools. Access live surroundings, track app usage, view activities,
            and stay aware — even when the device isn’t with you. Everything you
            need to protect your child’s digital and real-world safety is right
            at your fingertips.
          </p>

          <div className="mt-6 flex justify-center text-sm text-gray-500 ">
            <div>
              <div className="sm:base-4 base:6 w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            </div>
            Note: Some of the features listed below are available for Android
            devices only.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative flex justify-center items-center">
            <img
              src="/3.png"
              alt="Feature Illustration"
              width={600}
              height={500}
              className="rounded-xl "
            />
          </div>

          {/* Right side - Features */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#02071A] rounded-lg border border-gray-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFeature(feature.id)}
                  className="w-full flex items-center justify-between p-4 text-left  hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-15 h-15 ${feature.bgColor} rounded-lg flex items-center justify-center`}
                    >
                      <div className={feature.color}>{feature.icon}</div>
                    </div>
                    <span className="font-semibold text-white text-2xl">
                      {feature.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedFeature === feature.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {expandedFeature === feature.id && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-4 overflow-hidden"
                    >
                      <p className="text-gray-400 pt-2 pl-13 mb-4">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlFeatures;
