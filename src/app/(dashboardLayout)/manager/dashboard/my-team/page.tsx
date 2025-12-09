
import ManagerSummary from "@/components/modules/manager/my-team/ManagerSummary";
import NoTeamAssigned from "@/components/modules/manager/my-team/NoTeamAssigned";
import TeamEmployeesTable from "@/components/modules/manager/my-team/TeamEmployeesTable";
import TeamSystemsTable from "@/components/modules/manager/my-team/TeamSystemsTable";

import { getMyTeamOverview } from "@/services/manager/myTeam";


export default async function ManagerTeamPage() {
  // Fetch team overview
  const result = await getMyTeamOverview();
  const { data } = result;

  if (!data.team) {
    return <NoTeamAssigned />;
  }

  // Optional: fetch all employees initially (limit 50 for example)
  

  return (
    <div className="mx-auto max-w-6xl p-6 space-y-6">
      {/* Header + Add Dialog */}
    
      {/* Manager Summary */}
      <ManagerSummary manager={data.manager} team={data.team} />

      {/* Employees Table */}
      <TeamEmployeesTable employees={data.employees} />

      {/* Systems Table */}
      <TeamSystemsTable systems={data.systems} />
    </div>
  );
}
