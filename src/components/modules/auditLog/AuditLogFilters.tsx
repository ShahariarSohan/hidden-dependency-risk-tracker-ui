"use client";

import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import { AuditLogAction } from "@/types/auditLog.interface";

const actionOptions = Object.values(AuditLogAction).map((action) => ({
  label: action.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase()),
  value: action,
}));

export default function AuditLogFilters() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <SearchFilter 
        paramName="searchTerm"
        placeholder="Search logs (e.g. email, entity id)..."
      />
      <SelectFilter
        placeholder="Select Action Type"
        options={actionOptions}
        paramName="action"
        defaultValue="All"
      />
    </div>
  );
}
