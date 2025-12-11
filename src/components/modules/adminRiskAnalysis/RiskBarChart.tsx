"use client"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from "recharts";

import { BarChart3 } from "lucide-react";
import CustomTooltip from "./CustomTooltip";
import { RiskLevel } from "@/types/risk.interface";

type RiskItem = { name: string; riskScore: number; riskLevel: RiskLevel };

interface RiskBarChartProps {
  data: RiskItem[];
  title?: string;
  description?: string;
  showLimit?: number;
  height?: number;
}

const RISK_COLORS: Record<RiskLevel, string> = {
  HIGH: "#ef4444",
  MEDIUM: "#f59e0b",
  LOW: "#10b981",
};

export default function RiskBarChart({
  data,
  title = "Risk Distribution",
  description,
  showLimit = 15,
  height = 600,
}: RiskBarChartProps) {
  const chartData = data.slice(0, showLimit);

  return (
    <Card className="w-full shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="border-b bg-muted/30">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="mt-1">{description}</CardDescription>
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            Showing top {chartData.length} of {data.length}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="w-full" style={{ height: `${height}px` }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ left: 10, right: 10, top: 20, bottom: 80 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                opacity={0.2}
                vertical={false}
              />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={80}
                tick={{ fontSize: 12, fontWeight: 500 }}
                axisLine={{ strokeWidth: 2 }}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                axisLine={{ strokeWidth: 2 }}
                label={{
                  value: "Risk Score",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              />
              <Bar dataKey="riskScore" radius={[8, 8, 0, 0]} maxBarSize={60}>
                {chartData.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={RISK_COLORS[entry.riskLevel]}
                    opacity={0.9}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
