import type { SinglePostResponse } from "@/types/carousel";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const RecentPosts = ({
  reletedData,
}: {
  reletedData: SinglePostResponse["posts"];
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-text-dark mb-4 text-black">
        Recent Posts
      </h3>
      <div className="space-y-4">
        {reletedData.nodes.slice(0, 6).map((data) => {
          const imageData = data.featuredImage?.node?.mediaDetails.sizes.at(-1);
          return (
            <Link to={`/blog/${data.slug}`}>
              <div
                key={`index is ${data.slug}`}
                className="flex gap-3 pb-4 border-b border-gray-200 last:border-b-0"
              >
                <img
                  src={`${imageData?.sourceUrl}`}
                  alt={"feature image"}
                  className="w-20 h-20 object-cover "
                  width={imageData?.width}
                  height={imageData?.height}
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-black leading-tight mb-1 hover:text-blue-500 cursor-pointer">
                    {data.title}
                  </h4>
                  <p className="text-xs text-gray-500 mb-1">
                    {dayjs(data.featuredImage?.node?.date).format(
                      "DD MMM YYYY"
                    )}
                  </p>
                  <Link
                    to={`/blog/${data.slug}`}
                    className="text-xs text-slate-600 hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecentPosts;
