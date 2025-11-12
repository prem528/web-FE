import React from "react";

type GradientBackgroundProps = {
  children?: React.ReactNode;
};

export default function GradientBackground({ children }: GradientBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🔹 Full-page gradient background */}
      <div className="absolute inset-0  bg-black  bg-[url('/bgggg.avif')] bg-cover" />

      {/* Optional soft overlay glow (can remove if not needed) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1)_0%,transparent_60%)] opacity-70" />

      {/* 🔹 Page content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
