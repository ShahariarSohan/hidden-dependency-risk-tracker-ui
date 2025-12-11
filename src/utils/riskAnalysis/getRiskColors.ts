import { RiskLevel } from "@/types/risk.interface";

export const getRiskColor = (level?: RiskLevel) => {
  const map = {
    HIGH: {
      bg: "bg-red-50",
      border: "border-red-300",
      text: "text-red-700",
      badge: "bg-red-500 text-white",
      icon: "text-red-500",
      barColor: "bg-red-500",
      gradient: "from-red-500 to-red-600",
      shadowColor: "shadow-red-200",
    },
    MEDIUM: {
      bg: "bg-orange-50",
      border: "border-orange-300",
      text: "text-orange-700",
      badge: "bg-orange-500 text-white",
      icon: "text-orange-500",
      barColor: "bg-orange-500",
      gradient: "from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-200",
    },
    LOW: {
      bg: "bg-green-50",
      border: "border-green-300",
      text: "text-green-700",
      badge: "bg-green-500 text-white",
      icon: "text-green-500",
      barColor: "bg-green-500",
      gradient: "from-green-500 to-green-600",
      shadowColor: "shadow-green-200",
    },
  } as const;

  return (level && map[level]) || map.LOW;
};
