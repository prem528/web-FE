import { useState } from "react";
import { Star, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import type { ListReview } from "./ReviewCompo";

interface ReviewFormData {
  name: string;
  title: string;
  content: string;
  rating: number;
}

type ReviewFormProps = {
  onReviewSubmit: (review: ListReview) => void;
};

const ReviewForm = ({ onReviewSubmit }: ReviewFormProps) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const form = useForm<ReviewFormData>({
    defaultValues: {
      name: "",
      title: "",
      content: "",
      rating: 0,
    },
  });

  const onSubmit = async (data: ReviewFormData) => {
    if (selectedRating === 0) {
      toast.error(
        "Rating required. Please select a rating before submitting your review."
      );
      return;
    }

    const newReviewPayload = {
      name: data.name,
      title: data.title,
      rating: selectedRating,
      content: data.content,
      varified: false,
    };

    try {
      setLoading(true);

      const res = await axios.post(
        "https://webback.ionmonitor.com/api/review/frontendapi/userReview",
        newReviewPayload
      );

      // Log once to see exact POST response
      console.log("POST review response:", res.data);

      const respons = res.data as {
        success: boolean;
        page?: { listofreview?: ListReview[] };
        review?: ListReview;
      };

      if (respons.success) {
        // Try to get new review from API if available
        let newReview: ListReview | undefined;

        if (
          respons.page &&
          Array.isArray(respons.page.listofreview) &&
          respons.page.listofreview.length > 0
        ) {
          const list = respons.page.listofreview;
          newReview = list[list.length - 1];
        } else if (respons.review) {
          newReview = respons.review;
        }

        // Fallback: create a review object from form data
        if (!newReview) {
          newReview = {
            id: Date.now(), // temporary client-side id
            name: data.name,
            title: data.title,
            rating: selectedRating,
            content: data.content,
            varified: false,
            createdAt: new Date().toISOString(),
          };
        }

        onReviewSubmit(newReview);

        toast.success("Thank you! Your review has been submitted.");
      } else {
        toast.error("Something went wrong while submitting your review.");
      }
    } catch (err) {
      console.error("POST /api/review/frontendapi/userReview failed:", err);
      toast.error("Unable to submit review. Please try again.");
    } finally {
      setLoading(false);
      form.reset();
      setSelectedRating(0);
      setHoveredRating(0);
    }
  };

  const renderStars = () => {
    return [...Array(5)].map((_, i) => {
      const starValue = i + 1;
      return (
        <Star
          key={i}
          className={`w-8 h-8 cursor-pointer transition-colors ${
            starValue <= (hoveredRating || selectedRating)
              ? "fill-amber-400 text-amber-400"
              : "text-gray-300 hover:text-amber-400"
          }`}
          onMouseEnter={() => setHoveredRating(starValue)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => setSelectedRating(starValue)}
        />
      );
    });
  };

  return (
    <Card className="mb-8 py-11 rounded">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <User className="w-6 h-6" />
          Share Your Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <FormLabel>Rating</FormLabel>
              <div className="flex items-center space-x-1">
                {renderStars()}
                <span className="ml-2 text-sm text-slate-600">
                  {selectedRating > 0 &&
                    `${selectedRating} star${
                      selectedRating > 1 ? "s" : ""
                    }`}
                </span>
              </div>
            </div>

            <FormField
              control={form.control}
              name="title"
              rules={{ required: "Review title is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Summarize your experience"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              rules={{
                required: "Review content is required",
                minLength: {
                  value: 10,
                  message: "Review must be at least 10 characters long",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your experience with ION-MONITOR..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full sm:w-auto bg-blue-400 hover:bg-blue-500 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4 mr-2" />
              {loading ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
