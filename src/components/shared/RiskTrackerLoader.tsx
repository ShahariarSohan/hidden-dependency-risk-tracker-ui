"use client";
import { ShieldAlert } from "lucide-react";

interface RiskTrackerLoaderProps {
  text?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animated?: boolean;
}

const SIZE_CLASSES = {
  sm: { icon: 24, text: "text-xs" },
  md: { icon: 36, text: "text-sm" },
  lg: { icon: 48, text: "text-lg" },
  xl: { icon: 64, text: "text-xl" },
} as const;

export default function RiskTrackerLoader({
  text = "Loading.....",
  size = "md",
  className = "",
  animated = true,
}: RiskTrackerLoaderProps) {
  const { icon, text: textSize } = SIZE_CLASSES[size];

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center gap-4 ${className}`}
    >
      <style jsx>{`
        @keyframes riskTracker {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        .riskTracker {
          animation: riskTracker 1.5s ease-in-out infinite;
        }

        .no-animation .riskTracker {
          animation: none;
        }
      `}</style>

      {/* Centered ShieldAlert Icon */}
      <div className={`${animated ? "riskTracker" : ""}`}>
        <ShieldAlert size={icon} className="text-red-500" strokeWidth={2.5} />
      </div>

      {/* Loader Text */}
      {text && (
        <p className={`text-center font-medium text-slate-700 ${textSize}`}>
          {text}
        </p>
      )}
    </div>
  );
}
