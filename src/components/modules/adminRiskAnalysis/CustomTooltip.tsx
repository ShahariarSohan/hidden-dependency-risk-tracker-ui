/* eslint-disable @typescript-eslint/no-explicit-any */

import { RiskLevel } from "@/types/risk.interface";



const RISK_LABELS: Record<RiskLevel, string> = {
  HIGH: "High Risk",
  MEDIUM: "Medium Risk",
  LOW: "Low Risk",
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

export default function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-bold text-sm mb-1">{data.name}</p>
        <p className="text-sm text-muted-foreground">
          Risk Score:{" "}
          <span className="font-bold text-foreground">{data.riskScore}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Level:{" "}
          <span
            className={`font-bold ${
              data.riskLevel === "HIGH"
                ? "text-red-600"
                : data.riskLevel === "MEDIUM"
                ? "text-orange-600"
                : "text-green-600"
            }`}
          >
            {RISK_LABELS[data.riskLevel as RiskLevel]}
          </span>
        </p>
      </div>
    );
  }
  return null;
}
