/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from "react";
import {
  XCircle,
  CheckCircle,
  AlertTriangle,
  Zap,
  Users,
  Clock,
  DollarSign,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function BeforeAfterTransformation({ stats }: { stats?: any }) {
  const [hoveredCard, setHoveredCard] = useState<null|string>(null);

  // Default values if no API data yet
  const dynamicStats = {
    avgResolutionTime: stats?.beforeAfter?.avgResolutionTime || "0 days",
    preventedLosses: stats?.beforeAfter?.preventedLosses || "$0",
    protectedProjects: stats?.beforeAfter?.protectedProjects || "0",
    attritionRate: stats?.beforeAfter?.attritionRate || "0%",
    crisisReduction: stats?.beforeAfter?.crisisReduction || "0%",
    visibility: stats?.beforeAfter?.visibility || "100%",
    earlyWarning: "6 weeks" // Constant for now
  };

  const scenarios = [
    {
      id: "employee-loss",
      icon: Users,
      problem: "Key Employee Suddenly Quits",
      before: {
        title: "Without HDRT",
        icon: XCircle,
        color: "red",
        points: [
          "Project halts immediately - no one knows their systems",
          "2-3 weeks scrambling to understand dependencies",
          "Critical knowledge lost forever",
          "$250K+ in delayed deliverables and rush hiring",
        ],
        metrics: [
          { label: "Recovery Time", value: "3-6 weeks", bad: true },
          { label: "Cost Impact", value: "$250K+", bad: true },
          { label: "Projects Affected", value: "8-12", bad: true },
        ],
      },
      after: {
        title: "With HDRT",
        icon: CheckCircle,
        color: "green",
        points: [
          "Early warning detected 6 weeks prior",
          "Knowledge transfer completed proactively",
          "Backup team members already identified and trained",
          "Zero disruption to operations",
        ],
        metrics: [
          { label: "Recovery Time", value: dynamicStats.avgResolutionTime, bad: false }, // Dynamic
          { label: "Cost Impact", value: "$0", bad: false },
          { label: "Projects Affected", value: dynamicStats.protectedProjects, bad: false }, // Dynamic
        ],
      },
    },
    {
      id: "system-failure",
      icon: Zap,
      problem: "Critical System Goes Down",
      before: {
        title: "Without HDRT",
        icon: XCircle,
        color: "red",
        points: [
          "All-hands emergency - nobody knows full impact",
          "Discover cascading failures in 6 dependent systems",
          "Manual workarounds cause data inconsistencies",
          "48+ hours of downtime affecting customers",
        ],
        metrics: [
          { label: "Downtime", value: "48 hours", bad: true },
          { label: "Systems Affected", value: "8 services", bad: true },
          { label: "Revenue Loss", value: "$500K+", bad: true },
        ],
      },
      after: {
        title: "With HDRT",
        icon: CheckCircle,
        color: "green",
        points: [
          "Redundancy built before failure occurred",
          "Automatic failover to backup systems",
          "All dependencies mapped and prepared",
          "Operations continue with minimal interruption",
        ],
        metrics: [
          { label: "Downtime", value: "15 minutes", bad: false },
          { label: "Systems Affected", value: "0 services", bad: false },
          { label: "Revenue Loss", value: "$0", bad: false },
        ],
      },
    },
    {
      id: "team-burnout",
      icon: Clock,
      problem: "Team Burnout Crisis",
      before: {
        title: "Without HDRT",
        icon: XCircle,
        color: "red",
        points: [
          "Three senior engineers quit same month - surprise!",
          "Remaining team drowning in 160% workload",
          "Quality drops, deadlines missed repeatedly",
          "Toxic culture drives more departures",
        ],
        metrics: [
          { label: "Team Attrition", value: "40%", bad: true },
          { label: "Delayed Projects", value: "12", bad: true },
          { label: "Morale Score", value: "2.1/10", bad: true },
        ],
      },
      after: {
        title: "With HDRT",
        icon: CheckCircle,
        color: "green",
        points: [
          "Overload detected 8 weeks in advance",
          "Resources redistributed proactively",
          "Workload balanced across teams",
          "Team satisfaction maintained at healthy levels",
        ],
        metrics: [
          { label: "Team Attrition", value: dynamicStats.attritionRate, bad: false }, // Dynamic
          { label: "Delayed Projects", value: "0", bad: false },
          { label: "Morale Score", value: "8.4/10", bad: false },
        ],
      },
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12  bg-zinc-100 dark:bg-slate-950">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16  space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-green-50 dark:from-red-950/30 dark:to-green-950/30 rounded-full mb-4">
            <TrendingDown className="w-4 h-4 text-red-500 dark:text-red-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Real Impact
            </span>
            <TrendingUp className="w-4 h-4 text-green-500 dark:text-green-400" />
          </div>
          <h2 className="text-4xl  font-bold text-gray-900 dark:text-white">
            The HDRT Difference
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how proactive risk detection transforms crisis into controlled
            operations. These aren't hypotheticals - this is what happens when
            hidden risks go undetected.
          </p>
        </div>

        {/* Scenarios */}
        <div className="space-y-12">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            const isHovered = hoveredCard === scenario.id;

            return (
              <div
                key={scenario.id}
                className="relative"
                onMouseEnter={() => setHoveredCard(scenario.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Scenario Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-950/30 dark:to-red-950/30 p-4 rounded-2xl">
                    <Icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                      Scenario {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {scenario.problem}
                    </h3>
                  </div>
                </div>

                {/* Before/After Cards */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* BEFORE Card */}
                  <div className="group relative bg-white dark:bg-gray-900 rounded-3xl border-2 border-red-200 dark:border-red-900/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                    {/* Danger stripe */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-red-600 to-red-500 animate-pulse" />

                    <div className="p-8 pt-10">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-red-100 dark:bg-red-950/50 p-3 rounded-xl">
                          <XCircle className="w-6 h-6 text-red-500 dark:text-red-400" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900 dark:text-white">
                            {scenario.before.title}
                          </div>
                          <div className="text-sm text-red-600 dark:text-red-400 font-semibold">
                            Reactive Crisis Mode
                          </div>
                        </div>
                      </div>

                      {/* Points */}
                      <div className="space-y-3 mb-6">
                        {scenario.before.points.map((point, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 group/item"
                          >
                            <AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3 pt-6 border-t border-red-200 dark:border-red-900/50">
                        {scenario.before.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="text-center p-3 bg-red-50 dark:bg-red-950/30 rounded-xl"
                          >
                            <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                              {metric.label}
                            </div>
                            <div className="text-lg font-bold text-red-600 dark:text-red-400">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Damage Badge */}
                      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-950/50 rounded-full">
                        <DollarSign className="w-4 h-4 text-red-600 dark:text-red-400" />
                        <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                          High Cost Crisis
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* AFTER Card */}
                  <div className="group relative bg-white dark:bg-gray-900 rounded-3xl border-2 border-green-200 dark:border-green-900/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                    {/* Success stripe */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500" />

                    <div className="p-8 pt-10">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-green-100 dark:bg-green-950/50 p-3 rounded-xl">
                          <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900 dark:text-white">
                            {scenario.after.title}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                            Proactive Prevention
                          </div>
                        </div>
                      </div>

                      {/* Points */}
                      <div className="space-y-3 mb-6">
                        {scenario.after.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3 pt-6 border-t border-green-200 dark:border-green-900/50">
                        {scenario.after.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-xl"
                          >
                            <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                              {metric.label}
                            </div>
                            <div className="text-lg font-bold text-green-600 dark:text-green-400">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Success Badge */}
                      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-950/50 rounded-full">
                        <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                          Zero Disruption
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VS Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white font-black text-2xl px-6 py-3 rounded-full shadow-2xl transform rotate-12 border-4 border-white dark:border-gray-800">
                    VS
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Impact Summary */}
        <div className="mt-16 p-8 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20 rounded-3xl border-2 border-green-200 dark:border-green-900/50">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Average Cost Savings with HDRT
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Organizations using proactive risk detection vs reactive crisis
              management
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {dynamicStats.preventedLosses}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Prevented Losses Per Year
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {dynamicStats.crisisReduction}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Reduction in Crisis Events
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {dynamicStats.earlyWarning}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Average Early Warning Time
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {dynamicStats.visibility}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Dependency Visibility
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
