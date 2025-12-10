/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import { ITask } from "@/types/task.interface";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";

interface RiskTaskTableProps {
  tasks: ITask[];
}

const columns: ColumnDef<any>[] = [
  {
    accessorKey: "title",
    header: "Task",
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }:any) => (
      <span className="font-semibold">{row.original.priority}</span>
    ),
  },
  {
    accessorKey: "system.name",
    header: "System",
  },
  {
    accessorKey: "system.criticality",
    header: "System Criticality",
  },
  {
    header: "Impact",
    cell: ({ row }) => {
      const impact =
        Number(row.original.priority) * Number(row.original.system.criticality);

      return <span className="font-bold">{impact}</span>;
    },
  },
];

export default function RiskTaskTable({ tasks }: RiskTaskTableProps) {
  return <DataTable columns={columns} data={tasks} />;
}
