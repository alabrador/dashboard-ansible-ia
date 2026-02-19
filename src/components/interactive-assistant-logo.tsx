"use client";

import { useMemo, useState } from "react";

type InteractiveAssistantLogoProps = {
  theme: "dark" | "light";
  ariaLabel: string;
  className?: string;
};

type TiltState = {
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
};

const neutralTilt: TiltState = {
  rotateX: 0,
  rotateY: 0,
  glowX: 50,
  glowY: 50,
};

export function InteractiveAssistantLogo({ theme, ariaLabel, className }: InteractiveAssistantLogoProps) {
  const [tilt, setTilt] = useState<TiltState>(neutralTilt);

  const surfaceClass = useMemo(
    () =>
      theme === "dark"
        ? "border-white/20 bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-cyan-400/20"
        : "border-zinc-300 bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100",
    [theme],
  );

  const shellClass = useMemo(
    () =>
      theme === "dark"
        ? "border-cyan-300/40 bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500"
        : "border-blue-400/40 bg-gradient-to-b from-sky-400 via-blue-400 to-indigo-500",
    [theme],
  );

  const visorClass = theme === "dark" ? "bg-blue-950/95" : "bg-blue-950/90";

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const relativeX = offsetX / rect.width;
    const relativeY = offsetY / rect.height;

    setTilt({
      rotateX: (0.5 - relativeY) * 12,
      rotateY: (relativeX - 0.5) * 14,
      glowX: Math.max(0, Math.min(100, relativeX * 100)),
      glowY: Math.max(0, Math.min(100, relativeY * 100)),
    });
  };

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt(neutralTilt)}
      className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full border ${surfaceClass} p-0.5 [perspective:700px] transition ${className ?? ""}`}
    >
      <div
        className="relative h-8 w-8 rounded-[0.7rem] transition-transform duration-150 ease-out [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        <div className={`absolute inset-0 rounded-[0.7rem] border ${shellClass} shadow-[0_8px_18px_-8px_rgba(14,165,233,0.8)]`} />

        <div
          className="absolute inset-0 rounded-[0.7rem] opacity-70 blur-[6px]"
          style={{
            background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(56,189,248,0.55), transparent 55%)`,
            transform: "translateZ(10px)",
          }}
        />

        <div className="absolute left-[2px] right-[2px] top-[7px] h-[9px] rounded-full bg-cyan-300/30" />
        <div className={`absolute left-[3px] right-[3px] top-[8px] h-[7px] rounded-full border border-cyan-300/50 ${visorClass}`} />

        <div className="absolute bottom-[6px] left-[7px] h-[5px] w-[4px] rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.95)]" />
        <div className="absolute bottom-[6px] right-[7px] h-[5px] w-[4px] rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.95)]" />
      </div>
    </div>
  );
}