import { Link } from "react-router-dom";
import dayjs from "dayjs";
import type { MediaSize } from "@/types/carousel";

interface BlogCardProps {
  title: string;
  date: string;
  image?: MediaSize[] | null;
  href: string;
}

const BlogCard = ({ title, date, image, href }: BlogCardProps) => {
  const cover = image?.[0];

  return (
    <article className="group cursor-pointer">
      <Link
        to={href}
        className="block relative rounded-xl overflow-hidden shadow-elegant hover:shadow-hover transform hover:-translate-y-2 transition-all duration-300"
      >
        <div className="relative overflow-hidden">
          {cover ? (
            <img
              src={cover.sourceUrl}
              alt="Blog feature image"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 brightness-80"
              width={cover.width}
              height={cover.height}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-300 text-sm">
              No image available
            </div>
          )}

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-linear-to-t from-black/70 via-black/10 to-transparent">
            <div className="space-y-2">
              <h2 className="text-xl font-bold leading-tight line-clamp-3">
                {title}
              </h2>
              <time className="text-sm opacity-90 font-medium">
                {dayjs(date).format("DD MMM YYYY")}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
