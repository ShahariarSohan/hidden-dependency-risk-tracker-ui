"use client";

import { ColumnDef } from "@tanstack/react-table";
import { IAuditLog, AuditLogAction } from "@/types/auditLog.interface";
import DateCell from "@/components/shared/cell/DateCell";
import { Badge } from "@/components/ui/badge";
import { IColumn } from "@/components/shared/ManagementTable";

const getActionColor = (action: AuditLogAction) => {
  switch (action) {
    case AuditLogAction.TASK_CREATED:
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800";
    case AuditLogAction.TASK_IN_PROGRESS:
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800";
    case AuditLogAction.TASK_COMPLETED:
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800";
    case AuditLogAction.TASK_CANCELLED:
      return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800";
    default:
      return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400 border-slate-200 dark:border-slate-800";
  }
};

const formatActionName = (action: string) => {
  return action.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
};

export const AuditLogColumns: IColumn<IAuditLog>[] = [
  {
    header: "Action",
    accessor: (log) => (
      <Badge variant="outline" className={`${getActionColor(log.action)} font-semibold capitalize`}>
        {formatActionName(log.action)}
      </Badge>
    ),
    sortKey: "action",
  },
  {
    header: "Performer",
    accessor: (log) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm">{log.user.email}</span>
        <span className="text-[10px] uppercase text-muted-foreground tracking-wider font-bold">
          {log.user.role}
        </span>
      </div>
    ),
    sortKey: "userId",
  },
  {
    header: "Entity ID",
    accessor: (log) => (
      <code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded border">
        {log.entityId || "N/A"}
      </code>
    ),
    sortKey: "entityId",
  },
  {
    header: "Timestamp",
    accessor: (log) => <DateCell date={log.createdAt} />,
    sortKey: "createdAt",
  },
];
