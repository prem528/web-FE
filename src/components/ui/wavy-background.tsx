"use client";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = useMemo(() => createNoise3D(() => Math.random()), []);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationRef = useRef<number | null>(null);
  const sizeRef = useRef({ width: 0, height: 0 });
  const ntRef = useRef(0);

  const getSpeed = useCallback(() => {
    return speed === "slow" ? 0.001 : 0.002;
  }, [speed]);

  const waveColors = useMemo(() => {
    return (
      colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
      ]
    );
  }, [colors]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !container || !ctx) return;

    const { width, height } = container.getBoundingClientRect();
    const safeWidth = Math.max(1, Math.floor(width));
    const safeHeight = Math.max(1, Math.floor(height));

    ctx.canvas.width = safeWidth;
    ctx.canvas.height = safeHeight;
    ctx.filter = `blur(${blur}px)`;
    sizeRef.current = { width: safeWidth, height: safeHeight };
  }, [blur]);

  const drawWave = useCallback(
    (n: number) => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      ntRef.current += getSpeed();
      for (let wave = 0; wave < n; wave++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[wave % waveColors.length];
        for (let x = 0; x < sizeRef.current.width; x += 5) {
          const y = noise(x / 800, 0.3 * wave, ntRef.current) * 100;
          ctx.lineTo(x, y + sizeRef.current.height * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [getSpeed, noise, waveColors, waveWidth]
  );

  const render = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity ?? 0.5;
    ctx.fillRect(0, 0, sizeRef.current.width, sizeRef.current.height);
    drawWave(5);
    animationRef.current = requestAnimationFrame(render);
  }, [backgroundFill, drawWave, waveOpacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    ctxRef.current = context;
    ntRef.current = 0;
    resizeCanvas();

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => resizeCanvas());

    resizeObserver?.observe(container);
    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver?.disconnect();
    };
  }, [render, resizeCanvas]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    const userAgent = globalThis.window?.navigator?.userAgent ?? "";
    setIsSafari(
      Boolean(globalThis.window) &&
        userAgent.includes("Safari") &&
        !userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center justify-center w-full h-full",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
