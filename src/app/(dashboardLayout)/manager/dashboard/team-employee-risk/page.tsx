import NoTeamAssigned from "@/components/modules/manager/my-team/NoTeamAssigned";
import { EmployeeRiskCard } from "@/components/modules/managerRiskAnalysis/EmployeeRiskCard";
import PageHeader from "@/components/modules/managerRiskAnalysis/PageHeader";
import { getManagerTeamRisk } from "@/services/riskAnalysis/riskAnalysis";
import { getRiskCounts, sortEmployeesByRisk } from "@/utils/riskAnalysis/getRiskCalculation";
import { Users } from "lucide-react";




export default async function ManagerTeamEmployeeRiskPage() {
  const result=await getManagerTeamRisk()
  const teamData = result.data;
  if (!teamData) {
    return <NoTeamAssigned></NoTeamAssigned>
  }
  const { teamName, totalEmployees, employeeRisks } = teamData;

  const sorted = sortEmployeesByRisk(employeeRisks);
  const riskCounts = getRiskCounts(employeeRisks);

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto">
        

        <PageHeader
          icon={Users}
          title="Employee Risk Analysis"
          subtitle={`${teamName} • ${totalEmployees} Members`}
        />

        <div className="bg-card p-6 rounded-xl shadow-lg mb-6">
          <p className="font-semibold  mb-2">Risk Summary</p>
          <div className="flex gap-8">
            <div>
              <p className="text-red-600 text-3xl font-bold">
                {riskCounts.high}
              </p>
              <p className="text-sm">High Risk</p>
            </div>
            <div>
              <p className="text-orange-600 text-3xl font-bold">
                {riskCounts.medium}
              </p>
              <p className="text-sm">Medium Risk</p>
            </div>
            <div>
              <p className="text-green-600 text-3xl font-bold">
                {riskCounts.low}
              </p>
              <p className="text-sm">Low Risk</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((e, i) => (
            <EmployeeRiskCard key={e.employeeId} employee={e} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
