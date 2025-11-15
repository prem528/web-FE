import React from "react";

type FinanceHeroProps = {
  imageSrc: string;           
  imageAlt?: string;
};

const FinanceHero: React.FC<FinanceHeroProps> = ({
  imageSrc,
  imageAlt = "Child Monitoring dashboard preview",
}) => {
  return (
    <section className="w-full bg-[url('/topbg11.avif')] bg-cover pt-26">
      <div className="mx-auto max-w-[1400px] py-15">
        {/* Card container */}
        <div className="rounded-[32px]  backdrop-blur-xl ring-1 ring-black/1 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.25)] px-6 sm:px-10 lg:px-14 py-30">

          <div className="flex flex-col lg:flex-row items-center gap-10 -mt-34">
            {/* LEFT: Text content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl  leading-tight text-slate-300">
                Ready to Track Your{" "}
                <span className="text-[#5e87e2]">
                  Child Activities?
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0">
              Protect your child from online risks with smart monitoring tools. Track activities in real time, 
              detect unsafe interactions, and keep your child’s digital life safe and healthy.
              </p>

              <div className="mt-8">
                <button className="inline-flex items-center justify-center rounded-2xl bg-[#5a85e3] px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-[#1D4ED8] transition-colors">
                  Schedule a Demo
                </button>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative -mt-15">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                 className="max-w-[800px] items-center"
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
