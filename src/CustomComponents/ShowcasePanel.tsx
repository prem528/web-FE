
type ShowcasePanelProps = Readonly<{
  src: string;
  alt?: string;
}>;

export default function ShowcasePanel({
  src,
  alt = "Showcase",
}: ShowcasePanelProps) {
  return (
    <section className="relative overflow-hidden w-full lg:mt-18 lg:pb-0 pb-20 pt-2 flex justify-center bg-[url('/bgggg.avif')] bg-cover bg-[#020512]">
      {/* Animated wrapper */}
      <div
        className="max-w-[1200px] w-full px-4 sm:px-6"
      >
        <div className="relative rounded-2xl backdrop-blur bg-slate-800/0 shadow-md overflow-hidden">
          <div className="relative px-3 sm:px-6 pt-2 pb-6 lg:pt-6 lg:pb-16">
            <div className="mx-auto w-full max-w-[1200px]">
              <img
                src={src}
                alt={alt}
                className="mx-auto w-full h-auto rounded-xl md:rounded-[46px] drop-shadow-2xl"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-1 h-60
         bg-linear-to-b from-transparent via-[#203583]/99 to-[#0a0c12] backdrop"
      />
    </section>
  );
}
