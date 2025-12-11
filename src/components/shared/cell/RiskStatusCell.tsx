import { Badge } from "@/components/ui/badge";

export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

interface IRiskStatusCellProps {
  riskLevel: RiskLevel;

  lowText?: string;
  mediumText?: string;
  highText?: string;
}

export default function RiskStatusCell({
  riskLevel,
  lowText = "Low",
  mediumText = "Medium",
  highText = "High",
}: IRiskStatusCellProps) {
  const riskConfig: Record<RiskLevel, { label: string; className: string }> = {
    LOW: {
      label: lowText,
      className: "bg-green-600 text-white",
    },
    MEDIUM: {
      label: mediumText,
      className: "bg-yellow-500 text-black",
    },
    HIGH: {
      label: highText,
      className: "bg-red-600 text-white",
    },
  };

  const { label, className } = riskConfig[riskLevel];

  return <Badge className={`${className} px-3 py-1 text-sm`}>{label}</Badge>;
}
