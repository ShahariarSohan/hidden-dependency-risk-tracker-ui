import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Server, Shield } from "lucide-react";

interface SummaryFooterProps {
  totalEmployees: number;
  totalSystems: number;
  totalTeams: number;
}

export default function SummaryFooter({
  totalEmployees,
  totalSystems,
  totalTeams,
}: SummaryFooterProps) {
  return (
    <Card className="bg-card border rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        📊 Risk Assessment Summary
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              Total Employees Analyzed
            </p>
            <p className="text-3xl font-bold">{totalEmployees}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Server className="h-6 w-6 text-purple-600" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              Total Systems Monitored
            </p>
            <p className="text-3xl font-bold">{totalSystems}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Teams Tracked</p>
            <p className="text-3xl font-bold">{totalTeams}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
