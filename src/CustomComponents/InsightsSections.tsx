import React from "react";

type FeatureBlockProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reversed?: boolean;
  backgroundUrl?: string; 
  imageWidth?: string;
};

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "Preview",
  reversed,
  imageWidth
  
}) => {
  return (
    <section
      className="relative overflow-hidden text-white bg-cover " 
 
    >
      {/* optional overlay/glow */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-14">
        {/* Centered CARD (this prevents full-width look) */}
        <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          <div
            className={`grid items-center gap-10 p-4 md:p-2 ml-8 md:grid-cols-2 ${
              reversed ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            {/* Text */}
            <div>
              <h2 className="text-4xl sm:text-5xl text-gray-200 leading-tight mb-4">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-slate-500">
                {description}
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-black/10 hover:bg-slate-50">
                Learn More
              </button>
             </div>

            {/* Image */}
            <div className="relative flex justify-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                style={{ width: imageWidth || "40px" }}  
                className="rounded-xl drop-shadow-2xl"
              />
              {/* soft bloom */}
              <div className="pointer-events-none absolute -inset-2 -z-10 rounded-xl bg-white/15 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InsightsSections: React.FC = () => {
  return (
    <div className="w-full  ">
      {/* Block 1 (card centered, contained) */}
      <FeatureBlock
        title="Real-Time insights"
        description="Access real-time data instantly to make quick decisions and adapt swiftly to market shifts."
        imageSrc="/6.png"   
        imageAlt="Real-time insights preview"
        backgroundUrl="/square.svg"
         imageWidth="420px"
      />

      {/* Block 2 (reversed layout on desktop) */}
      <FeatureBlock
        title="Data-Driven decisions"
        description="Make confident decisions with comprehensive data analysis, minimizing guesswork."
        imageSrc="/6.png"  
        imageAlt="Data-driven decisions preview"
        backgroundUrl="/square.svg"
         imageWidth="420px"
        reversed
      />
    </div>
  );
};

export default InsightsSections;
