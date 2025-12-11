"use client";

import { IColumn } from "@/components/shared/ManagementTable";
import RiskStatusCell from "@/components/shared/cell/RiskStatusCell";
import { ISystemRisk } from "@/types/risk.interface";


export const systemRiskColumns: IColumn<ISystemRisk>[] = [
  {
    header: "System",
    accessor: (sys) => (
      <span className="text-base font-medium">{sys.name}</span>
    ),
    
  },
  {
    header: "Criticality",
    accessor: (sys) => (
      <span className="font-medium text-sm">Level {sys.criticality}</span>
    ),
    
  },
  {
    header: "Tasks",
    accessor: (sys) => (
      <span className="text-sm font-medium">{sys.taskCount}</span>
    ),
  },
  {
    header: "Risk Score",
    accessor: (sys) => (
      <span className="text-sm font-semibold">{sys.riskScore}</span>
    ),
  },
  {
    header: "Risk Level",
    accessor: (sys) => <RiskStatusCell riskLevel={sys.riskLevel} />,
  },
];
