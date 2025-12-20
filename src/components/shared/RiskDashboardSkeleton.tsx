

import { Skeleton } from "@/components/ui/skeleton";

export default function RiskDashboardSkeleton() {
  return (
    <div className="w-full min-h-screen px-4 py-6 md:px-8 lg:px-12 space-y-10">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-3">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96 max-w-full" />
      </div>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border bg-background p-6 space-y-4"
          >
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-3 w-full" />
          </div>
        ))}
      </div>

      {/* ================= CHARTS ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Risk Trend Chart */}
        <div className="rounded-xl border bg-background p-6 space-y-6">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-[280px] w-full rounded-lg" />
        </div>

        {/* Risk Distribution Chart */}
        <div className="rounded-xl border bg-background p-6 space-y-6">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-[280px] w-full rounded-lg" />
        </div>
      </div>

      {/* ================= TABLE / ACTIVITY ================= */}
      <div className="rounded-xl border bg-background p-6 space-y-6">
        <Skeleton className="h-6 w-56" />

        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>

        {/* Table Rows */}
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, colIndex) => (
                <Skeleton key={colIndex} className="h-4 w-full" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
