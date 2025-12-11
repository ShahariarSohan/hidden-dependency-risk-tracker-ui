import { RiskLevel } from "@/types/risk.interface";

export const getEmployeeStatusMessage = (level?: RiskLevel) => {
  return level === RiskLevel.HIGH
    ? "Critical tasks requiring immediate attention"
    : level === RiskLevel.MEDIUM
    ? "Monitor task progress regularly"
    : "All tasks on track";
};
