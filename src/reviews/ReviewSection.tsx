import { motion } from "framer-motion";
import ReviewForm from "./ReviewForm";
import type { ListReview } from "./ReviewCompo";

const SOFT_EASE = [0.25, 1, 0.3, 1] as [number, number, number, number];

const ReviewSection = () => {

  const handleReviewSubmit = (review: ListReview) => {
    console.log("Received review:", review);
  };

  return (
    <section
      className="relative py-10 lg:px-6 overflow-hidden bg-[#020512]"
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
          <div className="relative p-3 lg:p-1">
            <div className="relative overflow-hidden rounded border border-slate-200">
              <img
                src="/feedback.jpg"
                alt="ION-MONITOR Preview"
                className="w-full h-150 object-cover"
              />
            </div>
          </div>

          {/* Right side card  */}
          <div className="p-3 lg:p-1">
            <ReviewForm onReviewSubmit={handleReviewSubmit} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSection;
