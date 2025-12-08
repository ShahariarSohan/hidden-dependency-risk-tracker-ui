"use client";

import DateCell from "@/components/shared/cell/DateCell";
import StatusBadgeCell from "@/components/shared/cell/StatusBadgeCell";
import EntityInfoCell from "@/components/shared/cell/EntityInfoCell";
import { IColumn } from "@/components/shared/ManagementTable";
import { ISystem } from "@/types/system.interface";

export const systemColumns: IColumn<ISystem>[] = [
  {
    header: "System",
    accessor: (system) => <EntityInfoCell name={system.name} />,
    sortKey: "name",
  },
  {
    header: "Criticality",
    accessor: (system) => (
      <span className="font-medium text-sm">Level {system.criticality}</span>
    ),
    sortKey: "criticality",
  },
  {
    header: "Status",
    accessor: (system) => <StatusBadgeCell isActive={system.status!} />,
  },
  {
    header: "Created",
    accessor: (system) => <DateCell date={system.createdAt} />,
    sortKey: "createdAt",
  },
];
