import React from "react";
import { Users, Shield, Server, AlertTriangle, Activity } from "lucide-react";
import { getRiskDashboard } from "@/services/riskAnalysis/riskAnalysis";
import RiskStatCard from "@/components/modules/riskAnalysis/RiskStatCard";
import RiskBarChart from "@/components/modules/riskAnalysis/RiskBarChart";
import RiskTable from "@/components/modules/riskAnalysis/RiskTable";
import SummaryFooter from "@/components/modules/riskAnalysis/SummaryFooter";


export default async function AdminRiskDashboardPage() {
  const result = await getRiskDashboard();
  const data=result.data

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 space-y-8">
      {/* Header Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl shadow-lg">
            <Activity className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Risk Management Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Real-time risk analysis and monitoring across your organization
            </p>
          </div>
        </div>
      </div>

      {/* Stats Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RiskStatCard
          title="High-Risk Employees"
          value={data.summary.highRiskEmployeeCount}
          subtitle="Critical attention required for task overload"
          icon={Users}
          iconBgColor="bg-red-100"
          iconColor="text-red-600"
        />
        <RiskStatCard
          title="High-Risk Systems"
          value={data.summary.highRiskSystemCount}
          subtitle="Systems with critical vulnerabilities"
          icon={Server}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
        />
        <RiskStatCard
          title="High-Risk Teams"
          value={data.summary.highRiskTeamCount}
          subtitle="Teams requiring immediate intervention"
          icon={Shield}
          iconBgColor="bg-amber-100"
          iconColor="text-amber-600"
        />
      </div>

      {/* Alert Banner */}
      {(data.summary.highRiskEmployeeCount > 0 ||
        data.summary.highRiskSystemCount > 0 ||
        data.summary.highRiskTeamCount > 0) && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900">Action Required</h3>
              <p className="text-sm text-red-700 mt-1">
                You have{" "}
                {data.summary.highRiskEmployeeCount +
                  data.summary.highRiskSystemCount +
                  data.summary.highRiskTeamCount}{" "}
                high-risk items requiring immediate attention. Review the charts
                and tables below for details.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Full-Width Bar Charts Section */}
      <div className="space-y-6">
        <RiskBarChart
          data={data.charts.employeeRiskChart}
          title="Employee Risk Analysis"
          description="Top employees ranked by accumulated risk score"
          showLimit={15}
          height={600}
        />

        <RiskBarChart
          data={data.charts.systemRiskChart}
          title="System Risk Analysis"
          description="Critical systems requiring immediate attention"
          showLimit={15}
          height={600}
        />

        <RiskBarChart
          data={data.charts.teamRiskChart}
          title="Team Risk Analysis"
          description="Team performance and risk distribution"
          showLimit={15}
          height={600}
        />
      </div>

      {/* Detailed Tables Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-red-600" />
          High-Risk Items - Detailed View
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RiskTable
            title="High-Risk Employees"
            description="Employees with critical risk levels"
            rows={data.tables.highRiskEmployees}
            empty="No high-risk employees found"
            showLimit={15}
          />

          <RiskTable
            title="High-Risk Systems"
            description="Systems with elevated risk scores"
            rows={data.tables.highRiskSystems}
            empty="No high-risk systems found"
            showLimit={15}
          />
        </div>

        <RiskTable
          title="High-Risk Teams"
          description="Teams requiring organizational intervention"
          rows={data.tables.highRiskTeams}
          empty="No high-risk teams found"
          showLimit={15}
        />
      </div>

      {/* Summary Footer Component */}
      <SummaryFooter
        totalEmployees={data.charts.employeeRiskChart.length}
        totalSystems={data.charts.systemRiskChart.length}
        totalTeams={data.charts.teamRiskChart.length}
      />
    </div>
  );
}
