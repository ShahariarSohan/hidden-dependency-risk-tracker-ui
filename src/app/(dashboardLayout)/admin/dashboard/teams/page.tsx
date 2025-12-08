import TeamFilters from "@/components/modules/admin/manageTeam/TeamFilters";

import TeamsManagementHeader from "@/components/modules/admin/manageTeam/TeamManagementHeader";
import TeamsTable from "@/components/modules/admin/manageTeam/TeamTable";


import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";

import { getTeams } from "@/services/admin/manageTeam";

import { Suspense } from "react";

const AdminTeamManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const teamsResult = await getTeams(queryString);

  const totalPages = Math.ceil(
    (teamsResult?.meta?.total || 1) / (teamsResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <TeamsManagementHeader />

      {/* Search + Filters */}
      <TeamFilters />

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <TeamsTable teams={teamsResult?.data || []} />

        <TablePagination
          currentPage={teamsResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AdminTeamManagementPage;
