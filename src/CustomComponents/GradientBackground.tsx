import React from "react";

type ImgLayer = {
  src: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top" | "bottom" | "center";
  size?: string;          // e.g. "cover" | "contain" | "700px"
  opacity?: number;       // 0–100
  className?: string;     // e.g. "blur-md rotate-3"
  blend?: "normal" | "screen" | "lighten" | "overlay" | "soft-light" | "color-dodge";
};

type GradientBackgroundProps = {
  children?: React.ReactNode;
  fixed?: boolean;        // keep background pinned to viewport (seamless between sections)
  noise?: boolean;        // subtle film grain
  images?: ImgLayer[];    // multiple decorative images
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

export default function GradientBackground({
  children,
  fixed = true,
  noise = true,
  images = [
 
  ],
}: Readonly<GradientBackgroundProps>) {
  return (
    <div className="relative min-h-screen w-full">
      {/* THEME CANVAS */}
      <div className={`${fixed ? "fixed" : "absolute"} inset-0 -z-10 overflow-hidden`} aria-hidden>
        {/* base wash */}
        <div className="absolute inset-0 bg-[#0a0c12]" />
 

        {/* image layers */}
        {images.map((img, i) => {
          let widthValue = "auto";
          if (img.size?.includes("px")) {
            widthValue = img.size;
          } else if (img.size === "cover") {
            widthValue = "100%";
          }
          
          let heightValue = "auto";
          if (img.size?.includes("px")) {
            heightValue = img.size;
          } else if (img.size === "cover") {
            heightValue = "100%";
          }
          
          return (
          <div
            key={`img-layer-${i}-${img.src}`}
            className={["pointer-events-none absolute select-none will-change-transform", posCls(img.position ?? "top-left"), img.className ?? ""].join(" ")}
            style={{
              backgroundImage: `url('${img.src}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: img.size ?? "contain",
              backgroundPosition: "center",
              width: widthValue,
              height: heightValue,
              inset: img.size === "cover" ? 0 : undefined,
              opacity: (img.opacity ?? 80) / 100,
              mixBlendMode: (img.blend ?? "lighten") as any,
            }}
          />
          );
        })}

        {/* optional grain (avoids banding) */}
        {noise && (
          <div
            className="absolute inset-0 opacity-20 mix-blend-soft-light"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.25%22/></svg>')",
            }}
          />
        )}

        {/* vignette to hide edges & unify joins */}
        {/* <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_18%,transparent_82%,rgba(0,0,0,0.45))]" /> */}
      </div>

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
