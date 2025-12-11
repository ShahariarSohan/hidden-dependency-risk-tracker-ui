

import SystemRiskFilters from "@/components/modules/admin/systemsRisk/SystemRiskFilter";
import SystemRiskHeader from "@/components/modules/admin/systemsRisk/SystemRiskHeader";
import SystemRiskTable from "@/components/modules/admin/systemsRisk/SystemRiskTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getSystemsRisk } from "@/services/riskAnalysis/riskAnalysis";


import { Suspense } from "react";

const AdminSystemRiskPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const result = await getSystemsRisk(queryString);

  const totalPages = Math.ceil(
    (result?.meta?.total || 1) / (result?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <SystemRiskHeader />

      <SystemRiskFilters />

      <Suspense fallback={<TableSkeleton columns={6} rows={10} />}>
        <SystemRiskTable systems={result?.data || []} />

        <TablePagination
          currentPage={result?.meta?.page || 1}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
};

export default AdminSystemRiskPage;
