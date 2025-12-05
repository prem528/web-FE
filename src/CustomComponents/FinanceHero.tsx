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
    <section className="w-full bg-[url('/topbg11.avif')] bg-cover pt-16 md:pt-30">
      <div className="mx-auto max-w-[1400px] py-12 md:py-20">
        {/* Card container with smooth pop-in */}
        <div
          className="rounded-[32px] backdrop-blur-xl ring-1 ring-black/1 shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.25)] px-4 sm:px-8 lg:px-12 py-12 md:py-20"
 
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:-mt-20">
            {/* LEFT: Text content with stagger */}
            <div
              className="flex-1 text-center lg:text-left"
  
            >
              <h1
   
                className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-100 md:text-slate-300"
              >
                Ready to Track Your <br />
                <span className="text-[#5e87e2]">Child Activities?</span>
              </h1>

              <p
 
                className="mt-4 text-sm sm:text-base text-slate-100 md:text-slate-300 text-justify max-w-xl mx-auto lg:mx-0"
              >
                The ion monitor is equipped with a powerful feature to empower
                parents with peace of mind by ensuring their child’s digital
                safety. It has multiple features that allow the parents to
                discreetly monitor call logs, messages, social media chats, and
                media files. It is staffed with features like GPS trackers
                hidden call recorder, WhatsApp, and sms tracking features to
                provide the parents the access to the digital activity carried
                out by their child. This feature of the ion monitor operates
                invisibly in the background of the target phone installed
                without giving any hint to the child. By using the ion monitor,
                parents get access to the contact details, timestamps, and the
                call direction made by their child.
              </p>

              <div
                className="mt-8"
              >
                <button className="inline-flex items-center justify-center rounded-2xl bg-[#5a85e3] px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-[#1D4ED8] transition-colors">
                  Schedule a Demo
                </button>
              </div>
            </div>

            {/* RIGHT: Image (no animation, just clean) */}
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <div className="relative -mt-8 lg:mt-0 w-full flex justify-center">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full max-w-md sm:max-w-lg lg:max-w-[800px] items-center"
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
