import { RiskLevel } from "./risk.interface";

export interface ITeamEmployeeRisk {
  employeeId: string;
  employeeName: string;
  employeeRiskLevel: RiskLevel;
  riskScore: number; // 0..100
};

export interface ITeamRiskResponse {
  teamId: string;
  team: any; // keep generic if you have richer Team shape replace `any`
  teamName: string;
  totalEmployees: number;
  teamRiskScore: number; // 0..200 in your backend
  teamRiskLevel: RiskLevel;
  employeeRisks: ITeamEmployeeRisk[];
};
