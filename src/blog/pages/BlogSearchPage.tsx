import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getPostsAxios } from "@/lib/wp-graphql";
import type { PostsPayload } from "@/types/carousel";

const BlogSearchPage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<PostsPayload>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async (q: string) => {
      setLoading(true);
      try {
        const res = await getPostsAxios({ search: q });
        setData(res);
      } catch (err) {
        console.error("Error fetching search posts:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) getData(id);
  }, [id]);

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-28">
        {/* Loading skeleton */}
        {loading && (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li
                key={`skeleton-${i}`}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="h-44 w-full animate-pulse bg-gray-200" />
                <div className="space-y-3 p-4">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Empty state */}
        {!loading && (data?.nodes.length ?? 0) === 0 && (
          <div className="mx-auto max-w-md rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-gray-100" />
            <h2 className="mb-1 text-lg font-semibold">No matches found</h2>
            <p className="text-sm text-gray-600">
              Try a different keyword or check your spelling.
            </p>
          </div>
        )}

        {/* Results grid */}
        {!loading && (data?.nodes.length ?? 0) > 0 && (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data?.nodes.map((post) => {
              const imageData =
                post?.featuredImage?.node?.mediaDetails?.sizes?.at(-1);

              return (
                <li
                  key={post.slug}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    {/* Image */}
                    <div className="relative">
                      {imageData ? (
                        <img
                          src={imageData.sourceUrl}
                          alt="feature image"
                          className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                          width={imageData.width}
                          height={imageData.height}
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-44 w-full bg-gray-100" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3
                        className="line-clamp-2 text-base font-semibold leading-snug text-gray-900"
                        // WP titles may contain markup
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />
                      <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                        <time className="truncate">
                          {new Date(post.date).toLocaleDateString()}
                        </time>
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-0.5 text-xs ring-1 ring-gray-200">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BlogSearchPage;
