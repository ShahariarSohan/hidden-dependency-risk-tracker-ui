"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import { ActiveStatus } from "@/types/status.interface";

const SystemFilters = () => {
  return (
    <div className="space-y-3">
      {/* Row 1: Search + Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter
          paramName="searchTerm"
          placeholder="Search system name..."
        />
        <RefreshButton />
      </div>

      {/* Row 2: Filters */}
      <div className="flex items-center gap-3">
        {/* Status Filter */}
        <SelectFilter
          paramName="status"
          placeholder="System Status"
          defaultValue="All System Statuses"
          options={[
            { label: "Active", value: ActiveStatus.ACTIVE },
            { label: "Inactive", value: ActiveStatus.INACTIVE },
          ]}
        />

        {/* Criticality Level (1–5) */}
        <SelectFilter
          paramName="criticality"
          placeholder="Criticality Level"
          defaultValue="All Levels"
          options={[
            { label: "1 - Very Low", value: "1" },
            { label: "2 - Low", value: "2" },
            { label: "3 - Medium", value: "3" },
            { label: "4 - High", value: "4" },
            { label: "5 - Critical", value: "5" },
          ]}
        />

        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default SystemFilters;
