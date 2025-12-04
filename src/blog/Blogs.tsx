import BlogCard from "@/components/ui/BlogCard";
import { useEffect, useState } from "react";

type MediaSize = {
  sourceUrl: string;
  width: number;
  height: number;
};
type PostNode = {
  date: string;
  slug: string;
  title: string;
  featuredImage: {
    cursor: string;
    node: { mediaDetails: { file: string; sizes: MediaSize[] } };
  };
  categories: { nodes: { name: string; slug: string }[] };
};
type PageInfo = {
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
};
type PostsPayload = { nodes: PostNode[]; pageInfo: PageInfo };

const WP_GRAPHQL_ENDPOINT = "https://log.ionmonitor.com/graphql";
const PAGE_SIZE = 6;

const Blogs = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [posts, setPosts] = useState<PostNode[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);

  const QUERY = `
    query MyQuery($first: Int!, $after: String) {
      posts(first: $first, after: $after) {
        nodes {
          date
          slug
          title(format: RENDERED)
          featuredImage {
            cursor
            node {
              mediaDetails {
                file
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;

  async function fetchPosts(after?: string) {
    const res = await fetch(WP_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: QUERY,
        variables: { first: PAGE_SIZE, after },
      }),
    });

    if (!res.ok) throw new Error(`GraphQL HTTP ${res.status}`);
    const json = await res.json();

    if (json.errors?.length)
      throw new Error(json.errors.map((e: any) => e.message).join("; "));
    return json.data.posts as PostsPayload;
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetchPosts();

        setPosts(data.nodes);
        setPageInfo(data.pageInfo);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleLoadMore = async () => {
    if (!pageInfo?.hasNextPage) return;
    setLoadingMore(true);
    try {
      const data = await fetchPosts(pageInfo.endCursor || undefined);
      setPosts((prev) => [...prev, ...data.nodes]);
      setPageInfo(data.pageInfo);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingMore(false);
    }
  };

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

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-8">
          <h1 className="text-4xl font-semibold text-gray-300 text-center">
            Mobile Security & Parenting Blog
          </h1>
          <p className="text-muted-foreground mt-2 text-center">
            Latest insights on digital safety, parental controls, and mobile
            monitoring
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length === 0 ? (
            <p className="text-sm text-gray-500">No blogs yet.</p>
          ) : (
            posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                date={post.date}
                image={post.featuredImage?.node.mediaDetails.sizes}
                href={`/blog/${post.slug}`}
              />
            ))
          )}
        </div>

        {/* Pagination */}
        {pageInfo?.hasNextPage && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="px-5 py-2 rounded-lg border border-gray-600 text-background hover:opacity-90 disabled:opacity-60 cursor-pointer"
            >
              {loadingMore ? "Loading..." : "Load more"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blogs;
