/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from "react";
import {
  AlertTriangle,
  Users,
  Server,
  TrendingUp,
  Eye,
  Shield,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function RiskVisualizer() {
  const [activeRisk, setActiveRisk] = useState(null);

  const riskData = [
    {
      id: "employee",
      title: "Employee Dependencies",
      icon: Users,
      riskLevel: 85,
      color: "red",
      description: "Critical knowledge concentrated in 3 key employees",
      details: {
        affected: "12 Projects",
        impact: "High",
        trend: "Increasing",
      },
    },
    {
      id: "system",
      title: "System Vulnerabilities",
      icon: Server,
      riskLevel: 72,
      color: "orange",
      description: "Single point of failure in authentication system",
      details: {
        affected: "8 Services",
        impact: "Critical",
        trend: "Stable",
      },
    },
    {
      id: "team",
      title: "Team Overload",
      icon: AlertTriangle,
      riskLevel: 68,
      color: "yellow",
      description: "Engineering team operating at 140% capacity",
      details: {
        affected: "5 Teams",
        impact: "Medium",
        trend: "Increasing",
      },
    },
  ];

  const getColorClasses = (color:any, type = "bg") => {
    const colors = {
      red: {
        bg: "bg-red-500",
        light: "bg-red-100 dark:bg-red-950/30",
        text: "text-red-500 dark:text-red-400",
        border: "border-red-500",
        glow: "shadow-red-500/50",
      },
      orange: {
        bg: "bg-orange-500",
        light: "bg-orange-100 dark:bg-orange-950/30",
        text: "text-orange-500 dark:text-orange-400",
        border: "border-orange-500",
        glow: "shadow-orange-500/50",
      },
      yellow: {
        bg: "bg-yellow-500",
        light: "bg-yellow-100 dark:bg-yellow-950/30",
        text: "text-yellow-600 dark:text-yellow-400",
        border: "border-yellow-500",
        glow: "shadow-yellow-500/50",
      },
    };
    return colors[color][type];
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-white dark:bg-[oklch(0.1_0_0)]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-950/30 rounded-full mb-4">
            <Eye className="w-4 h-4 text-red-500 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-600 dark:text-red-400">
              Live Risk Detection
            </span>
          </div>
          <h2 className="text-4xl  font-bold text-gray-900 dark:text-white">
            See Risks Before They Become Crises
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            HDRT continuously monitors your organization's risk landscape in
            real-time, identifying hidden dependencies before they threaten
            operations
          </p>

          {/* Demo Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900/50 mt-4">
            <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-600 dark:text-blue-400">
              <strong>Interactive Demo:</strong> Sample data from a mid-size
              tech organization
            </span>
          </div>
        </div>

        {/* Interactive Risk Dashboard */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Risk Cards */}
          <div className="space-y-4">
            {riskData.map((risk) => {
              const Icon = risk.icon;
              const isActive = activeRisk === risk.id;

              return (
                <div
                  key={risk.id}
                  onClick={() => setActiveRisk(risk.id)}
                  className={`
                    group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300
                    ${
                      isActive
                        ? `${getColorClasses(
                            risk.color,
                            "border"
                          )} bg-gradient-to-r from-white to-${
                            risk.color
                          }-50 dark:from-[oklch(0.205_0_0)] dark:to-${
                            risk.color
                          }-950/20 shadow-xl ${getColorClasses(
                            risk.color,
                            "glow"
                          )}`
                        : "border-gray-200 dark:border-[oklch(1_0_0_/_10%)] bg-white dark:bg-[oklch(0.205_0_0)] hover:shadow-lg"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`
                      ${getColorClasses(risk.color, "light")} 
                      p-3 rounded-xl transition-transform duration-300
                      ${isActive ? "scale-110" : "group-hover:scale-105"}
                    `}
                    >
                      <Icon
                        className={`w-6 h-6 ${getColorClasses(
                          risk.color,
                          "text"
                        )}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {risk.title}
                        </h3>
                        <span
                          className={`
                          text-2xl font-bold ${getColorClasses(
                            risk.color,
                            "text"
                          )}
                          ${isActive ? "animate-pulse" : ""}
                        `}
                        >
                          {risk.riskLevel}%
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {risk.description}
                      </p>

                      {/* Risk Bar */}
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`
                            absolute top-0 left-0 h-full ${getColorClasses(
                              risk.color,
                              "bg"
                            )}
                            transition-all duration-500
                            ${isActive ? "animate-pulse" : ""}
                          `}
                          style={{ width: `${risk.riskLevel}%` }}
                        />
                      </div>

                      {/* Details (show when active) */}
                      {isActive && (
                        <div className="mt-4 grid grid-cols-3 gap-3 animate-in fade-in duration-300">
                          <div className="text-center p-2 bg-white dark:bg-[oklch(0.15_0_0)] rounded-lg">
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Affected
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-white text-sm">
                              {risk.details.affected}
                            </div>
                          </div>
                          <div className="text-center p-2 bg-white dark:bg-[oklch(0.15_0_0)] rounded-lg">
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Impact
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-white text-sm">
                              {risk.details.impact}
                            </div>
                          </div>
                          <div className="text-center p-2 bg-white dark:bg-[oklch(0.15_0_0)] rounded-lg">
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Trend
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-white text-sm">
                              {risk.details.trend}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Visual Representation */}
          <div className="bg-zinc-50 dark:bg-[oklch(0.15_0_0)] rounded-2xl p-8 border border-gray-200 dark:border-[oklch(1_0_0_/_10%)]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Risk Distribution
                </h3>
                <Shield className="w-5 h-5 text-gray-400" />
              </div>

              {/* Circular Risk Meters */}
              <div className="grid grid-cols-3 gap-4">
                {riskData.map((risk) => (
                  <div key={risk.id} className="text-center">
                    <div className="relative inline-flex items-center justify-center w-24 h-24 mb-2">
                      {/* Background circle */}
                      <svg className="transform -rotate-90 w-24 h-24">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        {/* Progress circle */}
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${
                            2 * Math.PI * 40 * (1 - risk.riskLevel / 100)
                          }`}
                          className={`${getColorClasses(
                            risk.color,
                            "text"
                          )} transition-all duration-1000`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span
                        className={`absolute text-xl font-bold ${getColorClasses(
                          risk.color,
                          "text"
                        )}`}
                      >
                        {risk.riskLevel}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {risk.title.split(" ")[0]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trend Graph with Recharts */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Risk Trend (Last 7 Days)
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                    Sample data
                  </span>
                </div>

                <ResponsiveContainer width="100%" height={140}>
                  <BarChart
                    data={[
                      { day: "Mon", risk: 45, label: "Monday" },
                      { day: "Tue", risk: 52, label: "Tuesday" },
                      { day: "Wed", risk: 48, label: "Wednesday" },
                      { day: "Thu", risk: 65, label: "Thursday" },
                      { day: "Fri", risk: 72, label: "Friday" },
                      { day: "Sat", risk: 68, label: "Saturday" },
                      { day: "Sun", risk: 85, label: "Sunday" },
                    ]}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "currentColor", fontSize: 12 }}
                      className="text-gray-500 dark:text-gray-400"
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "currentColor", fontSize: 12 }}
                      className="text-gray-500 dark:text-gray-400"
                      domain={[0, 100]}
                      ticks={[0, 25, 50, 75, 100]}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 rounded-lg shadow-lg">
                              <p className="text-xs font-semibold">
                                {payload[0].payload.label}
                              </p>
                              <p className="text-sm font-bold text-red-400">
                                {payload[0].value}% Risk Level
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                      cursor={{ fill: "rgba(239, 68, 68, 0.1)" }}
                    />
                    <Bar dataKey="risk" radius={[8, 8, 0, 0]} maxBarSize={40}>
                      {[45, 52, 48, 65, 72, 68, 85].map((value, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            value > 70
                              ? "#ef4444"
                              : value > 60
                              ? "#f97316"
                              : "#fbbf24"
                          }
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Lower Risk</span>
                  <span className="font-semibold text-red-500 dark:text-red-400">
                    ↑ 89% increase this week
                  </span>
                </div>
              </div>

              {/* Action Items */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-red-500 dark:text-red-400" />
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Immediate Actions Required
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    Document critical processes held by single employees
                  </li>
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    Implement redundancy in authentication system
                  </li>
                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-yellow-600 mt-0.5">•</span>
                    Redistribute workload across engineering teams
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="grid md:grid-cols-4 gap-4 p-6 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-yellow-950/20 rounded-2xl border border-red-100 dark:border-red-900/30">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              24/7
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Continuous Monitoring
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Risk Indicators Tracked
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              &lt;5min
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Alert Response Time
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              100%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Dependency Visibility
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
