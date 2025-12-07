
import ManagersFilter from "@/components/modules/admin/manageManager/ManagerFilters";
import ManagerManagementHeader from "@/components/modules/admin/manageManager/ManagerManagementHeader";
import ManagersTable from "@/components/modules/admin/manageManager/ManagerTable";

import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";

import { getManagers } from "@/services/admin/manageManager";

import { Suspense } from "react";

const AdminManagerManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const managersResult = await getManagers(queryString);

  const totalPages = Math.ceil(
    (managersResult?.meta?.total || 1) / (managersResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <ManagerManagementHeader />

      {/* Search + Filters */}
      <ManagersFilter />

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <ManagersTable managers={managersResult?.data || []} />

        <TablePagination
          currentPage={managersResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AdminManagerManagementPage;
