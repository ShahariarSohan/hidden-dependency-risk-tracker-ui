"use client";

import { IColumn } from "@/components/shared/ManagementTable";
import UserInfoCell from "@/components/shared/cell/UserInfoCell";
import RiskStatusCell, {
  RiskLevel,
} from "@/components/shared/cell/RiskStatusCell";

export interface IEmployeeRisk {
  name: string;
  email: string;
  taskCount: number;
  riskScore: number;
  riskLevel: RiskLevel;
}

export const employeeRiskColumns: IColumn<IEmployeeRisk>[] = [
  {
    header: "Employee",
    accessor: (item) => <UserInfoCell name={item.name} email={item.email} />,
  },
  {
    header: "Tasks",
    accessor: (item) => (
      <span className="text-sm font-medium">{item.taskCount}</span>
    ),
    
  },
  {
    header: "Risk Score",
    accessor: (item) => (
      <span className="text-sm font-semibold">{item.riskScore}</span>
    ),
    
  },
  {
    header: "Risk Level",
    accessor: (item) => <RiskStatusCell riskLevel={item.riskLevel} />,
  },
];
