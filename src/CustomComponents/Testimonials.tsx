import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";

const REVIEWS_API_URL =
  "https://webback.ionmonitor.com/api/review/frontendapi/userReview";

export interface ListReview {
  id: number;
  review_pgaeId?: number;
  name: string;
  title: string;
  rating: number;
  content: string;
  varified: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface ReviewPage {
  id: number;
  heading: string;
  paragraph: string;
  createdAt: string;
  updatedAt: string;
}

const Testimonials: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [reviews, setReviews] = useState<ListReview[]>([]);
  const [pageInfo, setPageInfo] = useState<ReviewPage | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // ---------- FETCH FROM API ----------
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(REVIEWS_API_URL);

        if (!res.ok) {
          throw new Error(`Failed to load reviews (${res.status})`);
        }

        const data = await res.json();
        console.log("Testimonials API response:", data);

        // reviews: data.page.listofreview
        const reviewsFromApi: ListReview[] =
          data?.page?.listofreview && Array.isArray(data.page.listofreview)
            ? data.page.listofreview
            : [];

        setReviews(reviewsFromApi);

        // heading/paragraph: data.page.review[0]
        if (
          data?.page?.review &&
          Array.isArray(data.page.review) &&
          data.page.review.length > 0
        ) {
          const meta = data.page.review[0];
          setPageInfo({
            id: meta.id,
            heading: meta.heading,
            paragraph: meta.paragraph,
            createdAt: meta.createdAt,
            updatedAt: meta.updatedAt,
          });
        }
      } catch (err: any) {
        console.error("Error fetching testimonials:", err);
        setError("Unable to load testimonials. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const shouldShowCarousel = !loading && !error && reviews.length > 0;

  return (
    <section className="py-20 overflow-hidden bg-[#020512]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-28 py-12">
        <motion.h2
          className="text-5xl text-gray-400 text-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {pageInfo?.heading || "What Our Clients Said About Us"}
        </motion.h2>

        {pageInfo?.paragraph && (
          <motion.p
            className="text-center text-slate-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {pageInfo.paragraph}
          </motion.p>
        )}

        {/* Loading / Error / Empty States */}
        {loading && (
          <div className="text-center py-10 text-slate-400">
            Loading testimonials...
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-10 text-red-400">{error}</div>
        )}

        {!loading && !error && reviews.length === 0 && (
          <div className="text-center py-10 text-slate-400">
            No testimonials available yet.
          </div>
        )}

        {/* Carousel */}
        {shouldShowCarousel && (
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
                {[...reviews, ...reviews].map((review, index) => (
                  <div
                    key={`testimonial-${index}-${review.id}`}
                    className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-80 mx-2 sm:mx-4 h-100"
                  >
                    <div className="bg-[#082236] rounded-lg shadow-md p-4 sm:p-6 h-full">
                      <div className="flex flex-col sm:flex-row items-center mb-8">
                        <img
                          src="/user.png"
                          alt={review.name}
                          className="w-20 h-20 rounded-full mb-2 sm:mb-0 sm:mr-4"
                          loading="lazy"
                        />
                        <div className="text-center sm:text-left">
                          <h4 className="font-bold text-white text-lg">
                            {review.name}
                          </h4>
                          {/* using review.title as subline */}
                          {review.title && (
                            <p className="text-white/80 text-sm">
                              {review.title}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-white text-sm sm:text-base">
                        {review.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LEFT FADE */}
            <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-[#020512] via-[#020512] to-transparent z-10" />

            {/* RIGHT FADE */}
            <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-[#020512] via-[#020512] to-transparent z-10" />
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Testimonials);
