import TaskFilters from "@/components/modules/manageTask/TaskFilters";
import TaskManagementHeader from "@/components/modules/manageTask/TaskManagementHeader";
import TasksTable from "@/components/modules/manageTask/TaskTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";

import { getTasks } from "@/services/manageTasks/manageTask";

import { Suspense } from "react";

const AdminTaskManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const tasksResult = await getTasks(queryString);

  const totalPages = Math.ceil(
    (tasksResult?.meta?.total || 1) / (tasksResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <TaskManagementHeader />

      {/* Filters */}
      <TaskFilters />

      {/* Tasks Table with Suspense */}
      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <TasksTable tasks={tasksResult?.data || []} />

        <TablePagination
          currentPage={tasksResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AdminTaskManagementPage;
