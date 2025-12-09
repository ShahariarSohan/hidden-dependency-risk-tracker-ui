
"use client";

import DateCell from "@/components/shared/cell/DateCell";
import EntityInfoCell from "@/components/shared/cell/EntityInfoCell";
import StatusBadgeCell from "@/components/shared/cell/StatusBadgeCell";

import { IColumn } from "@/components/shared/ManagementTable";
import { ITeam } from "@/types/team.interface";

export const myTeamColumns: IColumn<ITeam>[] = [
  {
    header: "Team",
    accessor: (team) => <EntityInfoCell name={team.name} />,
  },

  {
    header: "Status",
    accessor: (team) => <StatusBadgeCell isActive={team.status} />,
  },

  {
    header: "Created",
    accessor: (team) => <DateCell date={team.createdAt} />,
  },
];