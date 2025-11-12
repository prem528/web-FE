type ShowcasePanelProps = {
  src: string;
  alt?: string;
};

export default function ShowcasePanel({ src, alt = "Showcase" }: ShowcasePanelProps) {
  return (
    <section className="relative w-full mt-16  flex justify-center bg-[url('/bgggg.avif')] bg-cover">
      <div className="max-w-[1200px] w-full px-4 sm:px-6">
        {/* Outer container with soft glow */}
        {/* <div className="relative rounded-4xl bg-linear-to-tr from-white/10 via-white/5 to-white/10"> */}
          {/* 🧊 Glass container */}
          <div className="relative rounded-2xl backdrop-blur bg-slate-800/0 shadow-md overflow-hidden">
            <div className="relative px-3 sm:px-6 pt-2 pb-6 lg:pt-6 lg:pb-16">
              <div className="mx-auto w-full max-w-[1200px]">
                <img
                  src={src}
                  alt={alt}
                  className="mx-auto w-full h-auto rounded-[46px] drop-shadow-2xl"
                  draggable="false"
                />
              </div>
            </div>

            {/* ⬇ bottom dark fade + blur to match page background */}

          </div>
        {/* </div> */}
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-60
         bg-linear-to-b from-transparent via-[#203583]/99 to-[#000000]  backdrop"
      />
    </section>
    
  );
}
