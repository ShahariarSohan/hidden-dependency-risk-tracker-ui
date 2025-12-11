"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { ISystemRisk } from "@/types/risk.interface";
import { systemRiskColumns } from "./SystemRiskColumns";

interface SystemRiskTableProps {
  systems: ISystemRisk[];
}

const SystemRiskTable = ({ systems }: SystemRiskTableProps) => {
  return (
    <ManagementTable
      data={systems}
      columns={systemRiskColumns}
      getRowKey={(system) => system.name} // system names must be unique
      emptyMessage="No system risk data found"
    />
  );
};

export default SystemRiskTable;
