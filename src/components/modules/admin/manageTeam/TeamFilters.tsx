"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import { ActiveStatus } from "@/types/status.interface";



const TeamFilters = () => {
  return (
    <div className="space-y-3">
      {/* Row 1: Search + Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter paramName="searchTerm" placeholder="Search teams name..." />
        <RefreshButton />
      </div>

      {/* Row 2: Filters */}
      <div className="flex items-center gap-3">
        {/* Status Filter */}
        <SelectFilter
          paramName="status"
          placeholder="Team Status"
          defaultValue="All Team Statuses"
          options={[
            { label: "Active", value: ActiveStatus.ACTIVE },
            { label: "Inactive", value: ActiveStatus.INACTIVE },
          ]}
        />

        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default TeamFilters;
