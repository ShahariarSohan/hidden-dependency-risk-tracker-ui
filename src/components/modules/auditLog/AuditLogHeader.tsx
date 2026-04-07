"use client";

import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import RefreshButton from "@/components/shared/RefreshButton";

export default function AuditLogHeader() {
  return (
    <ManagementPageHeader
      title="Audit Logs"
      description="Monitor all system critical actions, task changes, and user activities."
    >
      <RefreshButton />
    </ManagementPageHeader>
  );
}
