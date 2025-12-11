import { ITeamEmployeeRisk } from "@/types/managerRiskAnalysis";
import { RiskLevel } from "@/types/risk.interface";

export const calculatePercentage = (value: number, total: number) => (total > 0 ? Math.round((value / total) * 100) : 0);
export const calculateRiskPercentage = (score: number, maxScore = 200) => Math.min(Math.round((score / maxScore) * 100), 100);


export const getRiskCounts = (employeeRisks: ITeamEmployeeRisk[]) => ({
  high: employeeRisks.filter((e) => e.employeeRiskLevel === RiskLevel.HIGH).length,
  medium: employeeRisks.filter((e) => e.employeeRiskLevel === RiskLevel.MEDIUM).length,
  low: employeeRisks.filter((e) => e.employeeRiskLevel === RiskLevel.LOW).length,
})

export const sortEmployeesByRisk = (employees: ITeamEmployeeRisk[]) => {
  return [...employees].sort((a, b) => b.riskScore - a.riskScore);
};