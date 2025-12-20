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

      {/* Centered ShieldAlert Icon */}
      <div className={`${animated ? "animate-riskTracker" : ""}`}>
        <ShieldAlert size={icon} className="text-red-500" strokeWidth={2.5} />
      </div>

      {/* Loader Text */}
      {text && (
        <p className={`text-center font-medium text-(hero-foreground) ${textSize}`}>
          {text}
        </p>
      )}
    </div>
  );
}
