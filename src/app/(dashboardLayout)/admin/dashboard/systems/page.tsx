

import SystemFilters from "@/components/modules/admin/manageSystem/SystemFilters";
import SystemManagementHeader from "@/components/modules/admin/manageSystem/SystemManagementHeader";
import SystemsTable from "@/components/modules/admin/manageSystem/SystemTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";

import { getSystems } from "@/services/admin/manageSystem";

import { Suspense } from "react";

const AdminSystemManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const systemsResult = await getSystems(queryString);

  const totalPages = Math.ceil(
    (systemsResult?.meta?.total || 1) / (systemsResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <SystemManagementHeader />

      {/* Search + Filters */}
      <SystemFilters />

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <SystemsTable systems={systemsResult?.data || []} />

        <TablePagination
          currentPage={systemsResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AdminSystemManagementPage;
