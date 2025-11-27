import { useMemo, useState } from "react";
import { Star, Filter, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";

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
  pageRating: number;
  listReview: ListReview[];
  createdAt: string;
  updatedAt: string;
}

// --------- DEMO DATA (no API) ----------
const initialReviews: ListReview[] = [
  {
    id: 1,
    review_pgaeId: 1,
    name: "Rahul Sharma",
    title: "Perfect for monitoring my kid’s phone",
    rating: 5,
    content:
      "ION-MONITAR helped me keep track of my son’s online activity. The dashboard is clean and easy to understand.",
    varified: true,
    createdAt: "2025-11-15T10:00:00.000Z",
  },
  {
    id: 2,
    review_pgaeId: 1,
    name: "Priya Verma",
    title: "Very helpful & reliable",
    rating: 4,
    content:
      "Live location and call logs are accurate. I feel much more relaxed knowing I can monitor in real time.",
    varified: true,
    createdAt: "2025-11-18T14:30:00.000Z",
  },
  {
    id: 3,
    review_pgaeId: 1,
    name: "Amit Gupta",
    title: "Good app, could be smoother",
    rating: 4,
    content:
      "Features are great, but I’d love a slightly faster sync. Overall very useful and worth the money.",
    varified: false,
    createdAt: "2025-11-20T08:45:00.000Z",
  },
];

 

const ReviewCompo = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
 
  const [reviews,  ] = useState<ListReview[]>(initialReviews);

 

  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "5" && review.rating === 5) ||
        (filter === "4" && review.rating === 4) ||
        (filter === "3" && review.rating === 3) ||
        (filter === "verified" && review.varified);

      const search = searchTerm.toLowerCase();
      const matchesSearch =
        review.title.toLowerCase().includes(search) ||
        review.content.toLowerCase().includes(search) ||
        review.name.toLowerCase().includes(search);

      return matchesFilter && matchesSearch;
    });
  }, [filter, reviews, searchTerm]);

 

  const renderStars = (rating: number, size: string = "w-4 h-4") => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={1}
        className={`${size} ${
          i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-900/80 border-slate-700 text-slate-100 placeholder:text-slate-500"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button
              onClick={() => setFilter("all")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
                filter === "all"
                  ? "bg-sky-500 text-white hover:bg-sky-600"
                  : "bg-slate-900/80 text-slate-200 border border-slate-600 hover:bg-slate-800"
              }`}
            >
              <Filter className="w-4 h-4" />
              All
            </Button>

            <Button
              onClick={() => setFilter("5")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
                filter === "5"
                  ? "bg-sky-500 text-white hover:bg-sky-600"
                  : "bg-slate-900/80 text-slate-200 border border-slate-600 hover:bg-slate-800"
              }`}
            >
              5 Stars
            </Button>

            <Button
              onClick={() => setFilter("4")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
                filter === "4"
                  ? "bg-sky-500 text-white hover:bg-sky-600"
                  : "bg-slate-900/80 text-slate-200 border border-slate-600 hover:bg-slate-800"
              }`}
            >
              4 Stars
            </Button>

            <Button
              onClick={() => setFilter("verified")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
                filter === "verified"
                  ? "bg-sky-500 text-white hover:bg-sky-600"
                  : "bg-slate-900/80 text-slate-200 border border-slate-600 hover:bg-slate-800"
              }`}
            >
              Verified Only
            </Button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-10">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="relative overflow-hidden bg-gray-800 rounded-xl shadow-[0_18px_45px_rgba(0,0,0,0.9)] transition-all duration-300"
            >
              {/* Card Layout – Vertical on mobile, side-by-side on md+ */}
              <div className="flex flex-col sm:flex-row h-full">
                {/* LEFT – IMAGE */}
                <div className="w-full sm:w-1/3">
                  <img
                    src="/UX3.jpg"
                    alt="Customer review"
                    className="w-full h-40 sm:h-full object-cover sm:rounded-l-xl rounded-t-xl sm:rounded-t-none"
                    draggable="false"
                  />
                </div>

                {/* RIGHT – TEXT CONTENT */}
                <div className="w-full sm:w-2/3 flex flex-col p-4 sm:p-5">
                  {/* NAME + RATING + DATE */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-lg sm:text-xl font-semibold text-slate-50">
                          {review.name}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex">
                            {renderStars(review.rating, "w-4 h-4 sm:w-5 sm:h-5")}
                          </div>
                          <span className="text-sm sm:text-base text-slate-400">
                            {review.rating.toFixed(1)} / 5
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center text-slate-400 text-xs sm:text-sm whitespace-nowrap">
                        <Calendar className="w-4 h-4 mr-1" />
                        {format(new Date(review.createdAt), "dd/MM/yyyy")}
                      </div>
                    </div>
                  </div>

                  {/* TITLE + CONTENT */}
                  <div className="mt-3 space-y-1">
                    <h4 className="text-slate-200 text-sm sm:text-base md:text-lg font-medium leading-snug line-clamp-2">
                      {review.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-4">
                      {review.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg">
              No reviews found matching your criteria.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCompo;
