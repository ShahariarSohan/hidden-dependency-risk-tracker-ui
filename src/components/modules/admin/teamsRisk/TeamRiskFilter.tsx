"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";

const TeamRiskFilters = () => {
  return (
    <div className="space-y-3">
      {/* Row 1 */}
      <div className="flex items-center gap-3">
        <SearchFilter paramName="searchTerm" placeholder="Search teams..." />
        <RefreshButton />
      </div>

      {/* Row 2 */}
      <div className="flex items-center gap-3">
        {/* Risk Level */}
        <SelectFilter
          paramName="riskLevel"
          placeholder="Risk Level"
          defaultValue="Risk Levels"
          options={[
            { label: "Low", value: "LOW" },
            { label: "Medium", value: "MEDIUM" },
            { label: "High", value: "HIGH" },
          ]}
        />

        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default TeamRiskFilters;
