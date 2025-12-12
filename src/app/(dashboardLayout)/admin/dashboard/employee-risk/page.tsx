
import EmployeeRiskFilters from "@/components/modules/admin/empolyeesRisk/EmployeeRiskFilter";
import EmployeeRiskHeader from "@/components/modules/admin/empolyeesRisk/EmployeeRiskHeader";
import EmployeeRiskTable from "@/components/modules/admin/empolyeesRisk/EmployeeRiskTable";
import NoDataFound from "@/components/shared/NoDataFound";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getEmployeesRisk } from "@/services/riskAnalysis/riskAnalysis";


import { Suspense } from "react";

const AdminEmployeeRiskPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const result = await getEmployeesRisk(queryString);
   if(!result?.data){
      return <NoDataFound></NoDataFound>
     }
  const totalPages = Math.ceil(
    (result?.meta?.total || 1) / (result?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <EmployeeRiskHeader />

      <EmployeeRiskFilters />

      <Suspense fallback={<TableSkeleton columns={6} rows={10} />}>
        <EmployeeRiskTable employees={result?.data || []} />

        <TablePagination
          currentPage={result?.meta?.page || 1}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
};

export default AdminEmployeeRiskPage;
