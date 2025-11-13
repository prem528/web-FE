// SectionBG.tsx
import React from "react";

type ImgLayer = {
  src: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top" | "bottom" | "center";
  size?: string;          // "cover" | "contain" | "720px"
  opacity?: number;       // 0–100
  className?: string;     // e.g. "w-[720px] h-[720px] blur-sm"
  blend?: "normal" | "screen" | "lighten" | "overlay" | "soft-light" | "color-dodge";
};

type SectionBGProps = {
  images?: ImgLayer[];
  children: React.ReactNode;
  paddingY?: string;
  className?: string;
};

const posCls = (p: NonNullable<ImgLayer["position"]>) => {
  switch (p) {
    case "top-left": return "top-0 left-0";
    case "top-right": return "top-0 right-0";
    case "bottom-left": return "bottom-0 left-0";
    case "bottom-right": return "bottom-0 right-0";
    case "top": return "top-0 left-1/2 -translate-x-1/2";
    case "bottom": return "bottom-0 left-1/2 -translate-x-1/2";
    default: return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
  }
};

const SectionBG: React.FC<SectionBGProps> = ({
  images = [],
  children,
  paddingY = "py-16 md:py-24",
  className = "",
}) => {
  return (
    // establish a stacking context (z-0) and the reference for absolutely positioned layers
    <section className={`relative isolate ${paddingY} ${className}`}>
      {/* base (z-0) */}
      <div className="absolute inset-0 z-0 bg-black" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(255,255,255,0.06),transparent_20%)]" />

      {/* images (z-10) */}
      {images.map((img, i) => {
        const isCover = img.size === "cover";
        const needsBox =
          !isCover && !(img.className?.match(/\bw-\[.*?]|\bh-\[.*?]/));
        return (
          <div
            key={i}
            className={[
              "pointer-events-none absolute select-none will-change-transform z-10",
              posCls(img.position ?? "top-left"),
              needsBox ? "w-[520px] h-[520px]" : "",
              img.className ?? "",
            ].join(" ")}
            style={{
              backgroundImage: `url('${img.src}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: img.size ?? "contain",
              backgroundPosition: "center",
              opacity: (img.opacity ?? 80) / 100,
              mixBlendMode: (img.blend ?? "lighten") as any,
              ...(isCover ? { inset: 0, width: "100%", height: "100%" } : {}),
            }}
          />
        );
      })}

      {/* content (z-20) */}
      <div className="relative z-20">{children}</div>
    </section>
  );
};

export default SectionBG;
