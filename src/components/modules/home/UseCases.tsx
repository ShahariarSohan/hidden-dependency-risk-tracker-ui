// components/modules/Home/UseCases.tsx


import { Target } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      title: "Prevent Single-Point Failures",
      description:
        "Identify employees or systems whose absence could halt operations, reducing operational risks.",
    },
    {
      title: "Optimize Team Performance",
      description:
        "Analyze dependencies to improve workload distribution and collaboration efficiency.",
    },
    {
      title: "Risk Mitigation Planning",
      description:
        "Plan proactive measures for high-risk areas to ensure smooth business operations.",
    },
    {
      title: "Strategic Decision Support",
      description:
        "Provide leaders with actionable insights to make informed decisions based on risk visibility.",
    },
  ];

  return (
    <section
      id="use-cases"
      className="py-24 bg-white dark:bg-gray-800 scroll-mt-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16">
          Use Cases
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {useCases.map((uc, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <Target className="w-8 h-8 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {uc.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
