

import TeamRiskFilters from "@/components/modules/admin/teamsRisk/TeamRiskFilter";
import TeamRiskHeader from "@/components/modules/admin/teamsRisk/TeamRiskHeader";
import TeamRiskTable from "@/components/modules/admin/teamsRisk/TeamRiskTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getTeamsRisk } from "@/services/riskAnalysis/riskAnalysis";


import { Suspense } from "react";

const AdminTeamRiskPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const result = await getTeamsRisk(queryString);

  const totalPages = Math.ceil(
    (result?.meta?.total || 1) / (result?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <TeamRiskHeader />

      <TeamRiskFilters />

      <Suspense fallback={<TableSkeleton columns={6} rows={10} />}>
        <TeamRiskTable teams={result?.data || []} />

        <TablePagination
          currentPage={result?.meta?.page || 1}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
};

export default AdminTeamRiskPage;
