import { motion } from "framer-motion";
import ReviewForm from "./ReviewForm";

const SOFT_EASE = [0.25, 1, 0.3, 1] as [number, number, number, number];

const FeaturesSection = () => {
  return (
    <section
      className="relative py-10 px-6 overflow-hidden bg-black"
      style={{
        backgroundImage: `url('topbg10.avif')`,
        backgroundBlendMode: "soft-light",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "",
      }}
    >
      <div className="relative max-w-7xl mx-auto py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: SOFT_EASE }}
          viewport={{ once: true, amount: 0.35 }}
        >
          {/* Left side card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded border border-slate-200">
              <img
                src="/feedback.jpg"
                alt="ION-MONITOR Preview"
                className="w-full h-150 object-cover"
              />
            </div>
          </div>

          {/* Right side card */}
          <div className="">
            <ReviewForm/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
