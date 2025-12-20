import { RiskLevel } from "@/types/risk.interface";
import { getRiskColor } from "@/utils/riskAnalysis/getRiskColors";
import { getRiskDescription } from "@/utils/riskAnalysis/getRiskDescription";
import { Activity } from "lucide-react";

export const RiskStatusCard = ({ level }: { level: RiskLevel }) => {
  const c = getRiskColor(level);

  return (
    <div className="bg-card rounded-xl p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <Activity className={`w-7 h-7 ${c.icon}`} />
        <div>
          <p className="text-sm text-(--hero-foreground)">Risk Status</p>
          <p className={`text-4xl font-bold ${c.text}`}>{level}</p>
        </div>
      </div>

      <div className={`${c.bg} ${c.border} border rounded-lg p-3`}>
        <p className={`text-sm font-semibold ${c.text}`}>
          {getRiskDescription(level)}
        </p>
      </div>
    </div>
  );
};
