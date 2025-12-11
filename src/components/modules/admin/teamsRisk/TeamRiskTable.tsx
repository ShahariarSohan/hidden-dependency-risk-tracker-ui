"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { ITeamRisk } from "@/types/risk.interface";
import { teamRiskColumns } from "./TeamRiskColumns";


interface TeamRiskTableProps {
  teams: ITeamRisk[];
}

const TeamRiskTable = ({ teams }: TeamRiskTableProps) => {
  return (
    <ManagementTable
      data={teams}
      columns={teamRiskColumns}
      getRowKey={(team) => team.name} // team names are unique in org
      emptyMessage="No team risk data found"
    />
  );
};

export default TeamRiskTable;
