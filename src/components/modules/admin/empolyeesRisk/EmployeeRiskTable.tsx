"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { employeeRiskColumns, IEmployeeRisk } from "./EmployeeRiskColumns";

interface EmployeeRiskTableProps {
  employees: IEmployeeRisk[];
}

const EmployeeRiskTable = ({ employees }: EmployeeRiskTableProps) => {
  return (
    <ManagementTable
      data={employees}
      columns={employeeRiskColumns}
      getRowKey={(item) => item.email} // employee emails are unique
      emptyMessage="No employee risk data found"
    />
  );
};

export default EmployeeRiskTable;
