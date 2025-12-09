"use client";

import { useMemo } from "react";

export default function MyTeamOverviewLoading() {
  // Memoized stats skeletons (Team Stats Cards)
  const statCards = useMemo(
    () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-28 bg-slate-300 dark:bg-slate-700 animate-pulse rounded-xl shadow-sm border border-slate-400 dark:border-slate-600"
          />
        ))}
      </div>
    ),
    []
  );

  return (
    <div className="space-y-10">
      {/* Page Header Skeleton */}
      <div className="flex flex-col space-y-2">
        <div className="h-8 w-72 bg-slate-300 dark:bg-slate-700 animate-pulse rounded-md shadow-sm" />
        <div className="h-4 w-96 bg-slate-300 dark:bg-slate-700 animate-pulse rounded-md shadow-sm" />
      </div>

      {/* Team Stats Cards Skeleton */}
      {statCards}

      {/* Team Info Section */}
      <div className="space-y-4">
        <div className="h-6 w-60 bg-slate-300 dark:bg-slate-700 animate-pulse rounded-md" />
        <div className="h-20 w-full bg-slate-300 dark:bg-slate-700 animate-pulse rounded-xl shadow-sm border border-slate-400 dark:border-slate-600" />
      </div>

      {/* Members Section */}
      <div className="space-y-4">
        <div className="h-6 w-40 bg-slate-300 dark:bg-slate-700 animate-pulse rounded-md" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-14 bg-slate-300 dark:bg-slate-700 animate-pulse rounded-lg border border-slate-400 dark:border-slate-600 shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* Tasks Table */}
      <div className="space-y-4">
        <div className="h-6 w-48 bg-slate-300 dark:bg-slate-700 animate-pulse rounded-md" />

        <div className="overflow-hidden rounded-xl border bg-slate-200 dark:bg-slate-800 border-slate-400 dark:border-slate-600">
          {/* Table Header */}
          <div className="h-12 w-full bg-slate-300 dark:bg-slate-700 animate-pulse" />

          {/* Table Rows */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-12 border-t border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
