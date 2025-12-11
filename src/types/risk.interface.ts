export enum RiskLevel {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}
export interface IEmployeeRisk {
  name: string;
  email: string;
  taskCount: number;
  riskScore: number;
  riskLevel: RiskLevel;
}
export interface ISystemRisk {
  name: string;
  teamName: string;
  taskCount: number;
  criticality: number;
  riskScore: number;
  riskLevel: RiskLevel;
}
export interface ITeamRisk {
  name: string;
  employeeCount: number;
  systemCount: number;
  riskScore: number;
  riskLevel: RiskLevel;
}