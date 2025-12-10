"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import { TaskStatus } from "@/types/status.interface";
// Adjust if status enum lives elsewhere

const TasksFilters = () => {
  return (
    <div className="space-y-3">
      {/* Row 1: Search + Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter
          paramName="searchTerm"
          placeholder="Search task name..."
        />
        <RefreshButton />
      </div>

      {/* Row 2: Filters */}
      <div className="flex items-center gap-3">
        {/* Status Filter */}
        <SelectFilter
          paramName="status"
          placeholder="Task Status"
          defaultValue="All Task Statuses"
          options={[
            { label: "Pending", value: TaskStatus.PENDING },
            { label: "In Progress", value: TaskStatus.IN_PROGRESS },
            { label: "Completed", value: TaskStatus.COMPLETED },
          ]}
        />

        {/* Priority Level Filter (1–5) */}
        <SelectFilter
          paramName="priority"
          placeholder="Priority Level"
          defaultValue="All Priorities"
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

export default TasksFilters;
