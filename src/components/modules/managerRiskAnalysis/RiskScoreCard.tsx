import { RiskLevel } from "@/types/risk.interface";
import { getRiskColor } from "@/utils/riskAnalysis/getRiskColors";
import { Target } from "lucide-react";
import ProgressBar from "./ProgressBar";

export default function RiskScoreCard ({
  score,
  level,
  maxScore = 200,
}: {
  score: number;
  level: RiskLevel;
  maxScore?: number;
})  {
  const c = getRiskColor(level);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`bg-gradient-to-br ${c.gradient} p-3 rounded-xl shadow-md`}
          >
            <Target className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-600">
              Total Risk Score
            </p>
            <p className="text-4xl font-bold text-slate-800">{score}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <ProgressBar
          value={score}
          maxValue={maxScore}
          colorClass={`bg-gradient-to-r ${c.gradient}`}
        />
      </div>
    </div>
  );
};
