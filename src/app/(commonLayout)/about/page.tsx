import {
  Shield,
  TrendingUp,
  Users,
  Bell,
  BarChart3,
  Lock,
  Zap,
  Target,
  Eye,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100">
      {/* Hero Section with Geometric Design */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 mb-6 border border-red-500/20 rounded-full bg-red-500/5">
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                Risk Management Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              About HDRT
            </h1>
          </div>

          {/* Professional Card Layout for Description */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-8 md:p-10 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-left">
              HDRT (Hidden Dependency Risk Tracker) is a{" "}
              <span className="font-bold bg-red-500/10 px-2 py-1 rounded">
                backend-focused risk analysis platform
              </span>{" "}
              designed to help organizations visualize and mitigate hidden
              operational risks. By detecting over-dependencies on critical
              employees, teams, or systems, HDRT enables proactive
              decision-making and ensures business continuity before problems
              arise.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section with Side Accent */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="relative pl-8 border-l-4 border-red-500">
          <h2 className="text-4xl font-bold mb-8">Why HDRT Exists</h2>
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In modern organizations, hidden dependencies on certain employees,
              teams, or systems can create significant risks. Traditional risk
              assessments often identify problems{" "}
              <span className="font-semibold bg-red-500/10 px-2 py-0.5 rounded">
                after they occur
              </span>
              , leading to downtime, operational delays, and business impact.
              HDRT was developed to{" "}
              <span className="font-semibold bg-red-500/10 px-2 py-0.5 rounded">
                make these hidden risks visible early
              </span>
              , providing structured metrics and insights so organizations can
              act proactively.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              HDRT aggregates data from your organization, calculates{" "}
              <span className="font-semibold bg-red-500/10 px-2 py-0.5 rounded">
                risk scores
              </span>{" "}
              for employees, teams, and systems, and presents this information
              in a comprehensive dashboard. Organizations can now monitor
              high-risk areas and strategically mitigate dependency risks before
              they escalate.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed to identify and mitigate organizational
            risks
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: BarChart3,
              title: "Comprehensive Risk Scoring",
              desc: "HDRT calculates risk scores for employees, teams, and systems using priority and criticality metrics, enabling organizations to quantify hidden dependencies.",
            },
            {
              icon: Bell,
              title: "Proactive Risk Alerts",
              desc: "Automatically detect high-risk areas and generate alerts before issues affect operations, helping leadership take preventive measures.",
            },
            {
              icon: Target,
              title: "Detailed Risk Dashboards",
              desc: "Visualize risks in real-time with dashboards that highlight employees, teams, or systems with elevated dependency scores.",
            },
            {
              icon: Shield,
              title: "Filtering & Sorting",
              desc: "Easily filter and search through employees, tasks, and systems. Sort based on risk level, priority, or criticality for faster decision-making.",
            },
            {
              icon: Zap,
              title: "Customizable Metrics",
              desc: "Configure risk calculations based on your organization's unique priorities and critical systems.",
            },
            {
              icon: Lock,
              title: "Role-Based Access",
              desc: "Different dashboards for Admins, Managers, and Employees ensure that sensitive data is accessible only to authorized roles.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-red-500/30 dark:hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-all duration-300"></div>
              <div className="relative">
                <div className="inline-flex p-3 mb-4 bg-red-500/10 rounded-xl">
                  <feature.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section with Diagonal Layout */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-slate-900 rounded-3xl p-12 overflow-hidden">
          {/* Decorative Corner Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-red-500/20 rounded-full bg-red-500/5">
                <Eye className="h-4 w-4 text-red-600 dark:text-red-400" />
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                  Organizational Impact
                </span>
              </div>
              <h2 className="text-4xl font-bold">Benefits of HDRT</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Reduce operational risk by identifying hidden dependencies early.",
                "Improve team and employee productivity by balancing workloads.",
                "Enable strategic decision-making with data-driven insights.",
                "Minimize downtime caused by unplanned absences or system failures.",
                "Boost organizational resilience and continuity planning.",
                "Gain full visibility into the operational health of your organization.",
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-slate-700/50"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 bg-red-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note with Call-to-Action Style */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-200 dark:border-slate-800 rounded-2xl p-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-red-500/20 rounded-full bg-red-500/5">
              <TrendingUp className="h-4 w-4 text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                Enterprise-Ready
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              HDRT is designed for enterprises and organizations that prioritize
              <span className="font-semibold bg-red-500/10 px-2 py-0.5 rounded mx-1">
                risk visibility, operational efficiency, and proactive
                management
              </span>
              . By making hidden dependencies visible, HDRT empowers teams to
              act before risks turn into critical issues.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
