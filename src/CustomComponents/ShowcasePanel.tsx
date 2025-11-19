import { motion } from "framer-motion";

type ShowcasePanelProps = Readonly<{
  src: string;
  alt?: string;
}>;

export default function ShowcasePanel({
  src,
  alt = "Showcase",
}: ShowcasePanelProps) {
  return (
    <section className="relative w-full mt-16 flex justify-center bg-[url('/bgggg.avif')] bg-cover">
      {/* Animated wrapper */}
      <motion.div
        className="max-w-[1200px] w-full px-4 sm:px-6"
        initial={{ opacity: 0, y: 60, scale: 0.86 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}  
      >
        <div className="relative rounded-2xl backdrop-blur bg-slate-800/0 shadow-md overflow-hidden">
          <div className="relative px-3 sm:px-6 pt-2 pb-6 lg:pt-6 lg:pb-16">
            <div className="mx-auto w-full max-w-[1200px]">
              <img
                src={src}
                alt={alt}
                className="mx-auto w-full h-auto rounded-2xl md:rounded-[46px] drop-shadow-2xl"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-1 h-60
         bg-linear-to-b from-transparent via-[#203583]/99 to-[#0a0c12] backdrop"
      />
    </section>
  );
}
