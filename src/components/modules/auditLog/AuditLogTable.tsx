"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { IAuditLog } from "@/types/auditLog.interface";
import { AuditLogColumns } from "./AuditLogColumns";
import AuditLogViewDialog from "./AuditLogViewDialog";
import { useState } from "react";

interface AuditLogTableProps {
  logs: IAuditLog[];
  isRefreshing?: boolean;
}

export default function AuditLogTable({ logs, isRefreshing }: AuditLogTableProps) {
  const [viewingLog, setViewingLog] = useState<IAuditLog | null>(null);

  const handleView = (log: IAuditLog) => {
    setViewingLog(log);
  };

  return (
    <>
      <ManagementTable
        data={logs}
        columns={AuditLogColumns}
        onView={handleView} // This will automatically add the "View" action
        getRowKey={(log) => log.id}
        emptyMessage="No audit logs found for the selected criteria."
        isRefreshing={isRefreshing}
      />

      <AuditLogViewDialog
        log={viewingLog}
        open={!!viewingLog}
        onClose={() => setViewingLog(null)}
      />
    </>
  );
}
