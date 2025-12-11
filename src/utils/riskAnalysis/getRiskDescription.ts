import { RiskLevel } from "@/types/risk.interface";

export const getRiskDescription = (level?: RiskLevel) => {
  return level === RiskLevel.HIGH
    ? "Critical: Immediate action required"
    : level === RiskLevel.MEDIUM
    ? "Warning: Monitor closely"
    : "Healthy: Team performing well";
};
