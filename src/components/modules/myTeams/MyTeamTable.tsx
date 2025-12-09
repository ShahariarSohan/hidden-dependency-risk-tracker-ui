


"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { ITeam } from "@/types/team.interface";
import { myTeamColumns } from "./MyTeamColumns";

interface MyTeamsTableProps {
  teams: ITeam[];
}

const MyTeamsTable = ({ teams }: MyTeamsTableProps) => {
  return (
    <ManagementTable
      data={teams}
      columns={myTeamColumns}
      getRowKey={(team) => team.id!}
      emptyMessage="No teams found"
    />
  );
};

export default MyTeamsTable;