// src/app/(dashboard)/manager/my-team/page.tsx

import ManagerSummary from "@/components/modules/manager/my-team/ManagerSummary";
import TeamEmployeesTable from "@/components/modules/manager/my-team/TeamEmployeesTable";
import TeamSystemsTable from "@/components/modules/manager/my-team/TeamSystemsTable";
import { getMyTeamOverview } from "@/services/manager/myTeam";


export default async function ManagerTeamPage() {
  const result = await getMyTeamOverview();
   const {data}=result
if (!data.team) {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-6 text-center">
        <h2 className="text-xl font-semibold text-yellow-700">
          No Team Assigned
        </h2>
        <p className="mt-2 text-gray-700">
          You currently do not have a team assigned. Please contact an admin.
        </p>
      </div>
    </div>
  );
}
  return (
    <div className="mx-auto max-w-6xl p-6 space-y-6">
      <ManagerSummary manager={data.manager} team={data.team} />
      <TeamEmployeesTable employees={data.employees} />
      <TeamSystemsTable systems={data.systems} />
    </div>
  );
}
