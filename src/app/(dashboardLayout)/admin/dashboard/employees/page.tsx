
import EmployeesFilter from "@/components/modules/admin/manageEmployee/EmployeeFilters";
import EmployeeManagementHeader from "@/components/modules/admin/manageEmployee/EmployeeManagementHeader";
import EmployeesTable from "@/components/modules/admin/manageEmployee/EmployeeTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";

import { getEmployees } from "@/services/admin/manageEmployee";

import { Suspense } from "react";

const AdminEmployeeManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const employeesResult = await getEmployees(queryString);

  const totalPages = Math.ceil(
    (employeesResult?.meta?.total || 1) / (employeesResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <EmployeeManagementHeader />

      {/* Search + Filters */}
      <EmployeesFilter />

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <EmployeesTable employees={employeesResult?.data || []} />

        <TablePagination
          currentPage={employeesResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AdminEmployeeManagementPage;
