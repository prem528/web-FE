import type { PostsPayload, SinglePostResponse } from "@/types/carousel";
import axios from "axios";

const WP_GRAPHQL_ENDPOINT = "https://log.ionmonitor.com/graphql";

export interface FirstH1AndImg {
  h1?: string;
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
  content?: string;
}




export async function getPosts(query: any) {


  try {
    const res = await axios.post(
      WP_GRAPHQL_ENDPOINT,
      { query },
      { headers: { "Content-Type": "application/json" } }
    );

    if (res.data.errors) {
      throw new Error(res.data.errors.map((e: any) => e.message).join("; "));
    }

    return res.data.data.posts;
  } catch (err: any) {
    console.error("GraphQL fetch error:", err.message);
    return null;
  }
}


export async function getPostBySlug(
  slug: string
): Promise<SinglePostResponse | null> {
  const query = `
    query MyQuery {
      postBy(slug: "${slug}") {
        content
        date
        slug
        title
        featuredImage {
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
        seo {
      title
      metaDesc
      metaKeywords
      canonical
      opengraphTitle
      opengraphDescription
      opengraphType
      opengraphImage {
        mediaDetails {
          sizes {
            width
            sourceUrl
            height
          }
        }
      }
      twitterTitle
      twitterDescription
      twitterImage {
        mediaDetails {
          sizes {
            sourceUrl
            width
            height
          }
        }
      }
    }
      }
        posts(first: 5) {
        nodes {
          title(format: RENDERED)
          slug
          date
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
                date
            }
          }
        }
      }
    }
  `;






  try {
    const res = await axios.post<{ data: SinglePostResponse }>(
      WP_GRAPHQL_ENDPOINT,
      { query },
      { headers: { "Content-Type": "application/json" } }
    );


    return res.data.data;
  } catch (err: any) {
    console.error("Error fetching post:", err.message);
    return null;
  }
}



export async function getPostsAxios({
  search = "",
  after,
  first = 6,
  signal,
}: {
  search?: string;
  after?: string | null;
  first?: number;
  signal?: AbortSignal;
}): Promise<PostsPayload> {
  const QUERY = `
  query MyQuery($first: Int!, $after: String, $search: String) {
    posts(first: $first, after: $after, where: { search: $search }) {
      nodes {
        title(format: RENDERED)
        slug
        date
        featuredImage {
          node {
            mediaDetails {
              file
              sizes { sourceUrl width height }
            }
          }
        }
        categories { nodes { name slug } }
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
  try {
    const { data } = await axios.post<
      { data: { posts: PostsPayload }; errors?: Array<{ message: string }> }
    >(
      WP_GRAPHQL_ENDPOINT,
      {
        query: QUERY,
        variables: {
          first,
          after: after ?? null,
          search: search || null,
        },
      },
      {
        headers: { "Content-Type": "application/json" },
        signal,
      }
    );

    if (data?.errors?.length) {
      throw new Error(data.errors.map((e) => e.message).join("; "));
    }
    return data.data.posts;
  } catch (err: any) {
    const status = err?.response?.status;
    const msg =
      err?.response?.data?.errors?.map((e: any) => e.message).join("; ") ||
      err?.message ||
      "Request failed";
    throw new Error(status ? `HTTP ${status}: ${msg}` : msg);
  }
}


export async function privacyPolicy(slug: string) {
  const query = `
    query PageByUri($uri: String!) {
      pageBy(uri: $uri) {
        content
      }
    }
  `;

  const variables = { uri: slug };

  const res = await axios.post(
    WP_GRAPHQL_ENDPOINT,
    { query, variables },
    { headers: { "Content-Type": "application/json" } }
  );

  return res.data?.data?.pageBy?.content || "";

}
