"use client";
import { ShieldAlert } from "lucide-react";

interface RiskTrackerLoaderProps {
  text?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animated?: boolean;
}

const SIZE_CLASSES = {
  sm: { box: "w-20 h-20", text: "text-[10px]", icon: 14 },
  md: { box: "w-32 h-32", text: "text-[14px]", icon: 18 },
  lg: { box: "w-48 h-48", text: "text-[18px]", icon: 26 },
  xl: { box: "w-64 h-64", text: "text-[22px]", icon: 34 },
} as const;

export default function RiskTrackerLoader({
  text = "Analyzing hidden dependency risks…",
  size = "md",
  className = "",
  animated = true,
}: RiskTrackerLoaderProps) {
  const { box, text: textSize, icon } = SIZE_CLASSES[size];

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center gap-5 ${className}`}
    >
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes radar {
          0% {
            transform: rotate(0deg);
            opacity: 0.15;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0.25;
          }
        }

        .spin {
          animation: rotate 4s linear infinite;
        }

        .pulse {
          animation: pulse 1.8s ease-in-out infinite;
        }

        .radar {
          animation: radar 2.5s linear infinite;
        }

        .no-animation * {
          animation: none !important;
        }
      `}</style>

      {/* Loader */}
      <div className={`relative ${box} ${!animated ? "no-animation" : ""}`}>
        {/* Outer Rotating Risk Ring */}
        <div className="spin absolute inset-0 rounded-full border-[3px] border-slate-300/40" />

        {/* Risk Level Segments */}
        <div className="absolute inset-[10%] rounded-full border-[3px] border-green-500/60" />
        <div className="pulse absolute inset-[20%] rounded-full border-[3px] border-amber-500/70" />
        <div className="absolute inset-[30%] rounded-full border-[3px] border-red-500/80" />

        {/* Radar Sweep */}
        {animated && (
          <div className="radar absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-transparent to-transparent" />
        )}

        {/* Center Icon */}
        <div className="absolute inset-[40%] flex items-center justify-center rounded-full bg-slate-900 shadow-md">
          <ShieldAlert size={icon} className="text-red-400" strokeWidth={2} />
        </div>
      </div>

      {/* Text */}
      {text && (
        <p
          className={`text-center font-medium tracking-wide text-slate-600 ${textSize}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
