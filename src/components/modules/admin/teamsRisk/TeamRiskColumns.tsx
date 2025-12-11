"use client";

import { IColumn } from "@/components/shared/ManagementTable";
import RiskStatusCell from "@/components/shared/cell/RiskStatusCell";
import { ITeamRisk } from "@/types/risk.interface";



export const teamRiskColumns: IColumn<ITeamRisk>[] = [
  {
    header: "Team",
    accessor: (team) => (
      <span className="text-base font-medium">{team.name}</span>
    ),
  },
  {
    header: "Employees",
    accessor: (team) => (
      <span className="text-sm font-medium">{team.employeeCount}</span>
    ),
  },
  {
    header: "Systems",
    accessor: (team) => (
      <span className="text-sm font-medium">{team.systemCount}</span>
    ),
  },
  {
    header: "Risk Score",
    accessor: (team) => (
      <span className="text-sm font-semibold">{team.riskScore}</span>
    ),
  },
  {
    header: "Risk Level",
    accessor: (team) => <RiskStatusCell riskLevel={team.riskLevel} />,
  },
];
