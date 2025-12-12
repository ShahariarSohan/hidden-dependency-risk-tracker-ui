
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ShieldCheck, ShieldHalf, ListTodo } from "lucide-react";
import { getEmployeeOwnRisk } from "@/services/riskAnalysis/riskAnalysis";
import RiskTaskTable from "@/components/shared/RiskTaskTable";
import { RiskLevel } from "@/types/risk.interface";
import NoDataFound from "@/components/shared/NoDataFound";


export default async function EmployeeRiskPage() {
  const result = await getEmployeeOwnRisk();
 console.log(result)
 if(!result?.data){
       return <NoDataFound></NoDataFound>
      }

  const data = result.data;

  const getRiskColor = (level: string) => {
    switch (level) {
      case "HIGH":
        return "bg-red-600 text-white";
      case "MEDIUM":
        return "bg-yellow-500 text-black";
      case "LOW":
        return "bg-green-600 text-white";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case RiskLevel.HIGH:
        return <AlertTriangle className="h-6 w-6 text-red-600" />;
      case RiskLevel.MEDIUM:
        return <ShieldHalf className="h-6 w-6 text-yellow-500" />;
      case RiskLevel.LOW:
        return <ShieldCheck className="h-6 w-6 text-green-600" />;
    }
  };

  return (
    <div className="space-y-6 p-8">
      <h1 className="text-3xl font-bold">Employee Risk Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListTodo /> Active Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            {data.totalActiveTasks}
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Risk Score</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            {data.riskScore}
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Risk Level</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            {getRiskIcon(data.riskLevel)}
            <Badge
              className={`px-3 py-1 text-lg ${getRiskColor(data.riskLevel)}`}
            >
              {data.riskLevel}
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Tasks Table */}
      <Card className="shadow-xl border">
        <CardHeader>
          <CardTitle>Tasks Affecting Risk</CardTitle>
        </CardHeader>
        <CardContent>
          <RiskTaskTable tasks={data.tasks} />
        </CardContent>
      </Card>
    </div>
  );
}
