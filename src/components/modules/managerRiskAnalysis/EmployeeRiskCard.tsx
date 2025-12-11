import { User } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { getRiskColor } from "@/utils/riskAnalysis/getRiskColors";
import { calculateRiskPercentage } from "@/utils/riskAnalysis/getRiskCalculation";
import { ITeamEmployeeRisk } from "@/types/managerRiskAnalysis";
import { getEmployeeStatusMessage } from "@/utils/riskAnalysis/getEmployeeStatusMessage";
import RiskBadge from "./RiskBadge";

export const EmployeeRiskCard = ({
  employee,
  index,
}: {
  employee: ITeamEmployeeRisk;
  index: number;
}) => {
  const c = getRiskColor(employee.employeeRiskLevel);
  const pct = calculateRiskPercentage(employee.riskScore, 100);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-2xl border-2 ${c.border}`}
    >
      <div className={`${c.bg} p-5 border-b-2 ${c.border}`}>
        <div className="flex items-center gap-3">
          <div className={`${c.badge} p-2.5 rounded-xl`}>
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{employee.employeeName}</h3>
            <p className="text-xs">ID: {employee.employeeId}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-5">
          <div className="flex items-end justify-between mb-3">
            <div>
              <p className="text-sm text-slate-600">Risk Score</p>
              <p className={`text-4xl font-bold ${c.text}`}>
                {employee.riskScore}
              </p>
            </div>
            <p className={`text-lg font-bold ${c.text}`}>{pct}%</p>
          </div>

          <ProgressBar
            value={employee.riskScore}
            maxValue={100}
            colorClass={c.barColor}
          />
        </div>

        <RiskBadge level={employee.employeeRiskLevel} />

        <div className={`${c.bg} ${c.border} border rounded-lg p-3 mt-4`}>
          <p className={`text-xs text-center ${c.text}`}>
            {getEmployeeStatusMessage(employee.employeeRiskLevel)}
          </p>
        </div>
      </div>
    </div>
  );
};
