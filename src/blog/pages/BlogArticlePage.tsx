import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import AboutSection from "@/components/AboutSection";
import type { SinglePostResponse } from "@/types/carousel";
import { getPostBySlug } from "@/lib/wp-graphql";
import ArticleContent from "@/components/ui/ArticleContent";
import RecentPosts from "@/components/ui/RecentPosts";

const BlogArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  const [blog, setBlog] = useState<SinglePostResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getPostBySlug(id);
        setBlog(res ?? null);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="mt-28 w-full flex justify-center items-center min-h-[220px] bg-black">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!blog || !blog.postBy) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-300 pt-28">
        Blog post not found.
      </div>
    );
  }

  const imageData =
    blog.postBy.featuredImage?.node?.mediaDetails?.sizes?.at(-1);

  return (
    <div className="min-h-screen bg-black pt-28 pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Responsive grid: 1 col on mobile, 2 cols on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-12">
          {/* MAIN CONTENT */}
          <main className="w-full border rounded-lg">
            {/* Feature image */}
            {imageData && (
              <div className="relative mx-auto w-full max-w-3xl aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl mt-5">
                <img
                  src={imageData.sourceUrl}
                  alt="blog feature"
                  width={imageData.width}
                  height={imageData.height}
                  className="object-fill w-full h-full"
                />
              </div>
            )}

            {/* Article body */}
            <div className="mt-6 rounded-2xl shadow-card p-4 sm:p-6 lg:p-8 ">
              <ArticleContent blog={blog.postBy.content} />
            </div>
          </main>

          {/* SIDEBAR */}
          <aside className="w-full">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-card p-4 sm:p-6 lg:p-6 lg:top-24 space-y-6">
              
              {/* <AboutSection /> */}
              <RecentPosts reletedData={blog.posts} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogArticlePage;
