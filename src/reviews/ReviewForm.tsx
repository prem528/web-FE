// ReviewForm.tsx
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
import type { ListReview } from "./ReviewCompo";

interface ReviewFormData {
  name: string;
  title: string;
  content: string;
  rating: number;
}

const ReviewForm = ({
  onReviewSubmit,
}: {
  onReviewSubmit: (review: ListReview) => void;
}) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const form = useForm<ReviewFormData>({
    defaultValues: {
      name: "",
      title: "",
      content: "",
      rating: 0,
    },
  });

  const onSubmit = (data: ReviewFormData) => {
    if (selectedRating === 0) {
      toast.error(
        "Rating required. Please select a rating before submitting your review."
      );
      return;
    }

    const now = new Date();

    const newReview: ListReview = {
      id: now.getTime(), // simple unique id
      review_pgaeId: 1,
      name: data.name,
      title: data.title,
      rating: selectedRating,
      content: data.content,
      varified: false,
      createdAt: now.toISOString(),
    };

    // Send the new review back to the parent
    onReviewSubmit(newReview);

    toast.success(
      "Review submitted! Thank you for your feedback. Your review has been added."
    );

    form.reset();
    setSelectedRating(0);
    setHoveredRating(0);
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
                      placeholder="Tell us about your experience with ION-MONITAR..."
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
              className="w-full sm:w-auto bg-blue-400 hover:bg-blue-500 cursor-pointer"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Review
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
