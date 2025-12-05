import { useState } from "react";
import {
  ChevronDown,
  Camera,
  Mic,
  Phone,
  Search,
  Video,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ControlFeatures = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(
    "screenshots"
  );
   

  const features = [
    {
      id: "record-screen",
      title: "Live Record",
      icon: <Video className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      imageSrc: "/liverecording.png",
      description:
        "This allows parents to capture a real-time video recording of the smartphone of their child & provide a clear view of the device activities.",
    },
    {
      id: "record-surround",
      title: "Record Surround",
      icon: <Mic className="w-5 h-5" />,
      color: "text-green-500",
      bgColor: "bg-green-100",
      imageSrc: "/surrounding.png",
      description:
        "In Ion monitor helps parents to keep aware of their child’s surroundings by safely activating their phone’s microphone to record nearby sounds, ensuring their safety and peace of mind.",
    },
    {
      id: "live-photos",
      title: "Live Photos",
      icon: <Camera className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      imageSrc: "/photos11.png",
      description:
        "Captures photos from your child’s phone and sends them instantly to your dashboard so you can see their surroundings in real time.",
    },
    {
      id: "record-calls",
      title: "Record Calls",
      icon: <Phone className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      imageSrc: "/recording.png",
      description:
        "The call recording feature of our ion monitor allows the parents to access and store both incoming and outgoing phone calls.",
    },
    {
      id: "track-keywords",
      title: "Track Keywords",
      icon: <Search className="w-5 h-5" />,
      color: "text-red-500",
      bgColor: "bg-red-100",
      imageSrc: "/keyword.png",
      description:
        "This feature keeps an eye on the words or phrases typed, searched, and texted on your child’s smartphone.",
    },
  ];

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  // Decide which feature's image to show
  const activeFeatureId =
     expandedFeature || features[0]?.id;

  const activeFeature =
    features.find((f) => f.id === activeFeatureId) || features[0];

  return (
    <div className="lg:mt-26 py-20 lg:py-2 px-4 bg-[#020512]">
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
          <h2 className="text-4xl md:text-5xl text-slate-600 mb-4">
          Protect, Guide, Monitor – The Future of Parenting
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
          In this digital era, online crimes are increasingly being committed.
          This may lead to them in a serious issue, like identity theft, cyberbullying, and online harassment. 
          We understand this, and empower you with real-time mobile activity updates for your child.
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
          {/* Left side - Dynamic Illustration */}
          <div className="relative justify-center items-center hidden lg:block">
            <motion.img
              key={activeFeature.imageSrc} // triggers smooth transition on change
              src={activeFeature.imageSrc || "/callrecord.png"}
              alt={activeFeature.title}
              width={600}
              height={500}
              className="rounded-xl max-w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
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
 
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-15 h-15 ${feature.bgColor} rounded-lg flex items-center justify-center`}
                    >
                      <div className={feature.color}>{feature.icon}</div>
                    </div>
                    <span className="text-white text-xl">
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
