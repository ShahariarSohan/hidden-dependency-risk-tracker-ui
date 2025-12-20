
import AddEmployeeButton from "@/components/modules/manager/my-team/AddEmployeeButton";
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
      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">My Team</h1>
          <p className=" mt-1">
            Manage your team members and systems
          </p>
        </div>
        <AddEmployeeButton teamId={data.team.id} teamName={data.team.name} />
      </div>
      

      {/* Manager Summary */}
      <ManagerSummary manager={data.manager} team={data.team} />

      {/* Employees Table */}
      <TeamEmployeesTable employees={data.employees} />

      {/* Systems Table */}
      <TeamSystemsTable systems={data.systems} />
    </div>
  );
}
