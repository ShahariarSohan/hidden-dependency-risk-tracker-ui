import NoTeamAssigned from "@/components/modules/manager/my-team/NoTeamAssigned";
import PageHeader from "@/components/modules/managerRiskAnalysis/PageHeader";
import RiskBadge from "@/components/modules/managerRiskAnalysis/RiskBadge";
import RiskScoreCard from "@/components/modules/managerRiskAnalysis/RiskScoreCard";
import { RiskStatusCard } from "@/components/modules/managerRiskAnalysis/RiskStatusCard";
import { getManagerTeamRisk } from "@/services/riskAnalysis/riskAnalysis";
import { getRiskCounts } from "@/utils/riskAnalysis/getRiskCalculation";
import { BarChart3, Users } from "lucide-react";




export default async function  ManagerTeamRiskDashboardPage  ()  {
  const result = await getManagerTeamRisk()
  console.log(result)
  const teamData = result.data
   if (!teamData) {
      return <NoTeamAssigned></NoTeamAssigned>
    }
   const {
    teamId,
    teamName,
    totalEmployees,
    teamRiskScore,
    teamRiskLevel,
    employeeRisks,
  } = teamData;
  const riskCounts = getRiskCounts(employeeRisks);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          icon={BarChart3}
          title="Team Risk Dashboard"
          subtitle="Comprehensive team risk analysis"
        />

        <div className="bg-white border rounded-2xl p-8 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold">{teamName}</h2>
              <p className="text-slate-600">
                <Users className="inline w-5 h-5 mr-2" />
                {totalEmployees} Members • ID: {teamId}
              </p>
            </div>

            <RiskBadge level={teamRiskLevel} size="large" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RiskScoreCard score={teamRiskScore} level={teamRiskLevel} />
            <RiskStatusCard level={teamRiskLevel} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-red-50 p-6 rounded-xl shadow">
            <p className="text-4xl font-bold text-red-600">{riskCounts.high}</p>
            <p className="text-sm">High Risk Employees</p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow">
            <p className="text-4xl font-bold text-orange-600">
              {riskCounts.medium}
            </p>
            <p className="text-sm">Medium Risk Employees</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow">
            <p className="text-4xl font-bold text-green-600">
              {riskCounts.low}
            </p>
            <p className="text-sm">Low Risk Employees</p>
          </div>
        </div>
      </div>
    </div>
  );
};
