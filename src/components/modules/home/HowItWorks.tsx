// components/modules/Home/HowItWorks.tsx


import { CheckCircle } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gray-50 dark:bg-gray-900 scroll-mt-16"
    >
      <div className="container mx-auto px-4">
        <h2 className=" text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16">
          How HDRT Works
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <CheckCircle className="text-red-500 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Data Aggregation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              HDRT collects and organizes employee, team, and system data from
              your organization to detect hidden dependencies.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <CheckCircle className="text-red-500 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Risk Analysis
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Using advanced algorithms, HDRT calculates risk scores for
              employees, teams, and critical systems, highlighting areas of
              concern.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <CheckCircle className="text-red-500 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Risk Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              View comprehensive risk dashboards to monitor high-risk employees,
              teams, and systems. Make proactive operational decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
