// components/modules/Home/HowItWorks.tsx

import { CheckCircle, Database, Shield, BarChart3, Bell } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Database,
      title: "Data Aggregation",
      description:
        "HDRT collects and organizes employee, team, and system data from your organization to detect hidden dependencies.",
      badge: "Step 1",
    },
    {
      icon: Shield,
      title: "Risk Analysis",
      description:
        "Using advanced algorithms, HDRT calculates risk scores for employees, teams, and critical systems, highlighting areas of concern.",
      badge: "Step 2",
    },
    {
      icon: BarChart3,
      title: "Risk Dashboard",
      description:
        "View comprehensive risk dashboards to monitor high-risk employees, teams, and systems. Make proactive operational decisions.",
      badge: "Step 3",
    },
    {
      icon: Bell,
      title: "Real-Time Alerts",
      description:
        "Get instant notifications when risk thresholds are exceeded. Stay ahead of potential disruptions before they impact operations.",
      badge: "Step 4",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 scroll-mt-16 bg-zinc-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How HDRT Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A powerful four-step process that transforms hidden vulnerabilities
            into actionable insights
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col gap-6 p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-[oklch(1_0_0_/_10%)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Badge */}
                <div className="absolute -top-3 left-6">
                  <span className="inline-block px-4 py-1 text-xs font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-full shadow-lg">
                    {step.badge}
                  </span>
                </div>

                {/* Icon with animated background */}
                <div className="relative">
                  <div className="absolute inset-0 bg-red-100 dark:bg-red-950/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-red-50 dark:bg-red-950/50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-red-500 dark:text-red-400 w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Checkmark */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
                  <span className="font-medium">Automated</span>
                </div>

                {/* Connecting line for large screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-200 to-transparent dark:from-red-900/50 dark:to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
      </div>
    </section>
  );
}
