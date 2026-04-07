import AuditLogFilters from "@/components/modules/auditLog/AuditLogFilters";
import AuditLogHeader from "@/components/modules/auditLog/AuditLogHeader";
import AuditLogTable from "@/components/modules/auditLog/AuditLogTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getAuditLogs } from "@/services/auditLog/auditLog";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface AuditLogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const AuditLogPage = async ({ searchParams }: AuditLogPageProps) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const auditResult = await getAuditLogs(queryString);

  const totalPages = Math.ceil(
    (auditResult?.meta?.total || 1) / (auditResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto py-6">
      {/* Header */}
      <AuditLogHeader />

      {/* Filters */}
      <AuditLogFilters />

      {/* Audit Table with Suspense for loading states */}
      <Suspense fallback={<TableSkeleton columns={5} rows={10} />}>
        <AuditLogTable logs={auditResult?.data || []} />

        <TablePagination
          currentPage={auditResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AuditLogPage;
