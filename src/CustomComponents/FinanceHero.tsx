// src/components/FinanceHero.tsx

import React from "react";

type FinanceHeroProps = {
  imageSrc: string;          // e.g. "/images/finance-dashboard.png"
  imageAlt?: string;
};

const FinanceHero: React.FC<FinanceHeroProps> = ({
  imageSrc,
  imageAlt = "Financial dashboard preview",
}) => {
  return (
    <section className="w-full bg-[url('/topbg11.avif')] bg-cover pt-20 py-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Card container */}
        <div className="rounded-[32px] bg-white/10 backdrop-blur-lg shadow-[0_18px_50px_rgba(15,23,42,0.12)] px-6 sm:px-10 lg:px-14 py-30">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* LEFT: Text content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-300">
                Ready to Track Your{" "}
                <span className="text-[#5e87e2]">
                  Child Activities?
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl mx-auto lg:mx-0">
                Experience the future of finance with our cutting-edge SaaS
                platform. Start optimizing your financial operations today!
              </p>

              <div className="mt-8">
                <button className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-[#1D4ED8] transition-colors">
                  Schedule a Demo
                </button>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full max-w-xl "
                />
                {/* Soft glow behind card */}
                <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-blue-500/5 blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceHero;
