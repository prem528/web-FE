import React from "react";

type Logo = {
  id: string;
  label: string;
  iconSrc?: string;
};


const logosRow1: Logo[] = [
  { id: "r1-1", label: "Call", iconSrc: "/icons/call.png" },
  { id: "r1-2", label: "Photo", iconSrc: "/icons/picture.png" },
  { id: "r1-3", label: "SMS", iconSrc: "/icons/sms1.png" },
  { id: "r1-4", label: "Video", iconSrc: "/icons/video.png" },
  { id: "r1-5", label: "Voice Recording", iconSrc: "/icons/voice.png" },
  { id: "r1-6", label: "IP Adress", iconSrc: "/icons/ip.png" },
  { id: "r1-1", label: "Whatsapp", iconSrc: "/icons/whatsapp.png" },
  { id: "r1-1", label: "Truecaller", iconSrc: "/icons/truecaller.png" },
];

const logosRow2: Logo[] = [
  { id: "r2-1", label: "Kik", iconSrc: "/icons/kik.png" },
  { id: "r2-2", label: "Facebook", iconSrc: "/icons/facebook.png" },
  { id: "r2-3", label: "IMO", iconSrc: "/icons/imo.png" },
  { id: "r2-4", label: "Instagram", iconSrc: "/icons/instagram.png" },
  { id: "r2-5", label: "Lindedin", iconSrc: "/icons/linkedin.png" },
  { id: "r2-6", label: "Hangout", iconSrc: "/icons/hangout.png" },
];


const LogoPill: React.FC<{ logo: Logo }> = ({ logo }) => (
  <div className="inline-flex items-center gap-2 rounded-2xl bg-white/70 px-5 py-3 text-slate-700 ring-1 ring-black/5 shadow-sm">
    {/* Icon circle */}
    {logo.iconSrc && (
      <span className="inline-grid h-12 w-12 place-items-center rounded overflow-hidden">
        <img
          src={logo.iconSrc}
          alt={logo.label}
          className="h-10 w-10 object-contain"
        />
      </span>
    )}

    {/* Label */}
    <span className="text-sm font-semibold whitespace-nowrap">
      {logo.label}
    </span>
  </div>
);

//Seamless infinite scrolling row
const LogoRow: React.FC<{
  logos: Logo[];
  direction: "left" | "right";
}> = ({ logos, direction }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex w-max items-center gap-4 sm:gap-6 ${
          direction === "left"
            ? "animate-[scroll-left_25s_linear_infinite]"
            : "animate-[scroll-right_25s_linear_infinite]"
        }`}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div key={`${logo.id}-${idx}`} className="shrink-0">
            <LogoPill logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default function FeatureShowCase() {
  return (
<section className="w-full bg-[url('/topbg10.avif')] bg-cover pt-10">
  <div className="mx-auto max-w-[1400px]">
    <div className="relative overflow-hidden rounded-[28px] p-6 sm:p-10 md:p-34 ring-1 ring-black/1 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)]">

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center justify-center rounded-full bg-white px-4 py-1 text-lg font-semibold tracking-widest text-slate-700 ring-1 ring-black/5 shadow-sm">
          CHILD MONITORING
        </span>

        <h2 className="mt-6 text-4xl sm:text-6xl md:text-6xl tracking-tight text-slate-600">
        Advanced Child Monitoring
          <br /> Keep Your Kids Safe.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-500">
          Monitor calls, messages, social media, photos, videos, and location history in real time.
          Smart insights designed to keep your child safe and digitally healthy.
        </p>

        <button
          type="button"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 ring-1 ring-black/10 shadow-sm hover:bg-slate-50"
        >
          Explore Features
        </button>
      </div>

      <div className="mt-10 space-y-8">
        <LogoRow logos={logosRow1} direction="left" />
        <LogoRow logos={logosRow2} direction="right" />
      </div>

    </div>
  </div>
</section>

  );
}
