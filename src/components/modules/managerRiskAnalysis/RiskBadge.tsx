import { RiskLevel } from "@/types/risk.interface";
import { getRiskColor } from "@/utils/riskAnalysis/getRiskColors";
import { AlertTriangle } from "lucide-react";

export default function RiskBadge({
  level,
  size = "default",
}: {
  level: RiskLevel;
  size?: "default" | "large";
    }) {
    const c = getRiskColor(level);
  return (
   <div
      className={`${c.badge} ${
        size === "large" ? "px-6 py-3 text-lg gap-3" : "px-4 py-3 gap-2 text-sm"
      } rounded-xl font-bold flex items-center justify-center shadow-md`}
    >
      <AlertTriangle className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
      <span>{level} RISK</span>
    </div>
  );
}