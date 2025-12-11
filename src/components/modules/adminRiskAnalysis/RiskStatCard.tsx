import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";


interface RiskStatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function RiskStatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBgColor = "bg-red-100",
  iconColor = "text-red-600",
  trend,
}: RiskStatCardProps) {
  return (
    <Card className="w-full hover:shadow-lg transition-all duration-200 border-l-4 border-l-red-500">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {title}
            </CardTitle>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">{value}</span>
              {trend && (
                <span
                  className={`text-sm font-medium ${
                    trend.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {trend.isPositive ? "↓" : "↑"} {Math.abs(trend.value)}%
                </span>
              )}
            </div>
          </div>
          <div
            className={`p-3 rounded-xl ${iconBgColor} ring-4 ring-opacity-10`}
          >
            <Icon className={`h-6 w-6 ${iconColor}`} strokeWidth={2.5} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        {subtitle && (
          <p className="text-xs text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
