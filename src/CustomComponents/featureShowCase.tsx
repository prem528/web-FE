import React from "react";

type Logo = { name: string };

const logosRow1: Logo[] = [
  { name: "Logoipsum" },
  { name: "Logoipsum" },
  { name: "Logo • ipsum" },
  { name: "Logoipsum" },
  { name: "Logoipsum" },
  { name: "Logoipsum" },
];

const logosRow2: Logo[] = [
  { name: "logoipsum" },
  { name: "Logoipsum" },
  { name: "Logoipsum" },
  { name: "Logoipsum" },
  { name: "logo • ipsum" },
];

const LogoPill: React.FC<{ label: string }> = ({ label }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-slate-700 ring-1 ring-black/5 shadow-sm">
    <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-slate-200/80 text-[10px] font-semibold">
      {/* icon placeholder */}
      ↻
    </span>
    <span className="text-sm font-semibold">{label}</span>
  </div>
);

export default function () {
  return (
    <section className="w-full bg-[url('/topbg10.avif')] bg-cover pt-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Card */}
        <div className="relative overflow-hidden rounded-[28px] p-6 sm:p-10 md:p-34 ring-1 ring-black/1 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] ">
 
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-1 text-lg font-semibold tracking-widest text-slate-700 ring-1 ring-black/5 shadow-sm">
              INTEGRATION
            </span>

            <h2 className="mt-6 text-4xl sm:text-6xl md:text-6xl tracking-tight text-slate-600">
              Make productivity easier
              <br /> with 50+ Integrations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-600">
              Integrate your favourite apps and platforms in seconds. Seamless
              integration and uninterrupted service.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 ring-1 ring-black/10 shadow-sm hover:bg-slate-50"
            >
              Learn More
            </button>
          </div>

          {/* Logos */}
          <div className="mt-10 space-y-6">
            {/* row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {logosRow1.map((l, i) => (
                <LogoPill key={`r1-${i}`} label={l.name} />
              ))}
            </div>

            {/* row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {logosRow2.map((l, i) => (
                <LogoPill key={`r2-${i}`} label={l.name} />
              ))}
            </div>
          </div>
          
         </div>
      </div>
    </section>
  );
};

 